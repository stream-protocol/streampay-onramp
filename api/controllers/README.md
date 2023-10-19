# Controller

**Solana Programs (Smart Contracts)**

- business.js

#### Example program:

````
const Joi = require("joi");
const model = require("../db/model");
const web3 = require("@solana/web3.js");
const splToken = require("@solana/spl-token");
const bs58 = require("bs58");
const email = require("../notification/email");
const { updateSignature } = require("../db/model/transaction");

const tokens = {
    USDC: {
        address: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
        decimals: 6,
        authority: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
    },
};

const updateBusiness = async (req, res) => {
    const schema = Joi.object({
        business_name: Joi.string().min(3).required(),
        default_currency: Joi.string().valid("EUR", "GBR", "NGN", "AED", "USD").required(),
        preferred_channels: Joi.string().required(),
        recipient_address: Joi.string().required().length(44),
        logo: Joi.string().uri(),
        callback_url: Joi.string().uri(),
        webhook_url: Joi.string().uri(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: "error", message: error.details[0].message });
    }

    await model.business.updateBusinessById(req.auth.user.company_id, req.body);
    res.json({ status: "ok", message: "Business updated" });
};

const getBusinessOwner = async (req, res) => {
    const owner = await model.business.getBusinessOwner(req.auth.user.company_id);
    if (owner.length > 0) {
        delete owner[0].password;
    }
    res.json({ status: "ok", owner: owner[0] });
};

const listTransactions = async (req, res) => {
    const ref = req.params.ref;
    const business = await model.business.getBusinessByRef(ref);
    if (business.length === 0) {
        return res.status(404).json({ status: "error", message: "Business not found" });
    }

    const transactions = await model.transaction.list(business[0].id);
    res.json({ status: "ok", transactions });
};

const createTransaction = async (req, res) => {
    const schema = Joi.object({
        channel: Joi.string().valid("BANK", "WISE", "STREAMPAY", "PHANTOM", "QR").required(),
        currency: Joi.string().valid("EUR", "GBR", "NGN", "AED", "USD").required(),
        token: Joi.string().required().length(44),
        recipient: Joi.string().required().length(44),
        customer_email: Joi.string().required().email(),
        customer_name: Joi.string(),
        amount: Joi.required(),
        fee: Joi.required(),
        status: Joi.string().valid("COMPLETED", "CANCELED", "REJECTED", "PENDING").required(),
        start_time: Joi.date().iso(),
        end_time: Joi.date().iso(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: "error", message: error.details[0].message });
    }

    const ref = req.params.ref;
    try {
        const business = await model.business.getBusinessByRef(ref);
        if (business.length === 0) {
            return res.status(404).json({ status: "error", message: "Business not found" });
        }

        let customer = await model.customer.getCustomerByEmail(req.body.customer_email);
        if (customer.length === 0) {
            customer = await model.customer.createCustomer(business[0].id, {
                email: req.body.customer_email,
                name: req.body.customer_name,
            });
        }

        const trx = await model.transaction.create(business[0].id, customer[0].id, req.body);
        email.sendMoneySent({
            fiat: req.body.currency,
            token: "USDC",
            amount: req.body.amount,
            link: `${process.env.APP_HOST}/api/v1/business/${business[0].business_ref}/transaction/${trx.insertId}/approve`,
            user: {
                email: "contact@streamprotocol.org",
                name: "StreamPayments",
            },
        });

        res.json({ status: "ok", message: "Transaction created", data: { id: trx.insertId } });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

const approveTransaction = async (req, res) => {
    const businessId = req.params.ref;
    const transactionId = req.params.transactionId;

    const business = await model.business.getBusinessByRef(businessId);
    if (business.length === 0) {
        return res.status(404).json({ status: "error", message: "Business not found" });
    }

    const transaction = await model.transaction.getTransactionById(transactionId);
    if (transaction.length === 0) {
        return res.status(404).json({ status: "error", message: "Transaction not found" });
    }

    if (transaction[0].status === "COMPLETED") {
        return res.status(200).json({ status: "ok", message: "Transaction already approved", signature: transaction[0].signature });
    }

    try {
        const signature = await sendToken(transaction[0].token, 6, transaction[0].recipient, transaction[0].amount);
        await model.transaction.updateSignature(signature, transaction[0].id);
        res.json({ status: "ok", message: "Transaction approved", signature });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: error.message });
    }
};

const sendToken = async (tokenAddress, tokenDecimals, recipientAddress, payment) => {
    const senderPrivateKey = process.env.MASTER_KEY;
    const amount = payment * 10 ** tokenDecimals;

    const connection = new web3.Connection(web3.clusterApiUrl("testnet"), "confirmed");
    const fromWallet = web3.Keypair.fromSecretKey(Uint8Array.from(bs58.decode(senderPrivateKey)));
    const toWallet = new web3.PublicKey(recipientAddress);

    const USDC_pubkey = new web3.PublicKey(tokenAddress);
    const USDC_Token = new splToken.Token(connection, USDC_pubkey, splToken.TOKEN_PROGRAM_ID, fromWallet);

    const fromTokenAccount = await USDC_Token.getOrCreateAssociatedAccountInfo(fromWallet.publicKey);
    const toTokenAccount = await USDC_Token.getOrCreateAssociatedAccountInfo(toWallet);

    const transaction = new web3.Transaction().add(
        splToken.Token.createTransferInstruction(
            splToken.TOKEN_PROGRAM_ID,
            fromTokenAccount.address,
            toTokenAccount.address,
            fromWallet.publicKey,
            [],
            amount
        )
    );

    const signature = await web3.sendAndConfirmTransaction(connection, transaction, [fromWallet]);
    return signature;
};

module.exports = {
    updateBusiness,
    owner: getBusinessOwner,
    transactionNew: createTransaction,
    transactionList: listTransactions,
    transactionApprove: approveTransaction,
};
````