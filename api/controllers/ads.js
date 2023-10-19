const { transaction: transactionModel } = require("../db/model");

/**
 * @async
 * @function getAds
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<void>}
 */
const getAds = async(req, res) => {
        return res.json({
                status: "ok",
                ad: [{
                        token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                        fiat: {
                            code: "EUR",
                            country: "FIN",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            iban: "0392892390230923",
                            account_number: "9828328",
                            bank_name: "Nordea Bank",
                            email: "contact@streamprotocol.org",
                        },
                        price: 3.65,
                        method: "bank",
                    },
                    {
                        token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                        fiat: {
                            code: "EUR",
                            country: "FIN",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            iban: "0392892390230923",
                            account_number: "9828328",
                            bank_name: "Nordea Bank",
                            email: "contact@streamprotocol.org",
                        },
                        price: 3.65,
                        method: "wise",
                    },
                    {
                        token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                        fiat: {
                            code: "GBP",
                            country: "UK",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            account_number: "0126864523",
                            bank_name: "Barclays Bank",
                            email: "contact@streamprotocol.org",
                        },
                        method: "bank",
                        price: 3.65,
                    },
                    {
                        token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                        fiat: {
                            code: "GBP",
                            country: "UK",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            account_number: "0126864523",
                            bank_name: "Barclays Bank",
                            email: "contact@streamprotocol.org",
                        },
                        method: "wise",
                        price: 3.65,
                    },
                    {
                        token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                        fiat: {
                            code: "USD",
                            country: "US",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            account_number: "0126864523",
                            bank_name: "Barclays Bank",
                            email: "contact@streamprotocol.org",
                        },
                        method: "bank",
                        price: 3.65,
                    },
                    {
                        token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                        fiat: {
                            code: "USD",
                            country: "US",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            account_number: "0126864523",
                            bank_name: "Barclays Bank",
                            email: "contact@streamprotocol.org",
                        },
                        method: "wise",
                        price: 3.65,
                    },
                    {
                        token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                        fiat: {
                            code: "EUR",
                            country: "FIN",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            iban: "0392892390230923",
                            account_number: "9828328",
                            bank_name: "Nordea Bank",
                            email: "contact@streamprotocol.org",
                        },
                        price: 3.65,
                        method: "bank",
                    },
                    {
                        token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                        fiat: {
                            code: "EUR",
                            country: "FIN",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            iban: "0392892390230923",
                            account_number: "9828328",
                            bank_name: "Nordea Bank",
                            email: "contact@streamprotocol.org",
                        },
                        price: 3.65,
                        method: "wise",
                    },
                    {
                        token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                        fiat: {
                            code: "GBP",
                            country: "UK",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            account_number: "0126864523",
                            bank_name: "Barclays Bank",
                            email: "contact@streamprotocol.org",
                        },
                        method: "bank",
                        price: 3.65,
                    },
                    {
                        token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                        fiat: {
                            code: "GBP",
                            country: "UK",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            account_number: "0126864523",
                            bank_name: "Barclays Bank",
                            email: "contact@streamprotocol.org",
                        },
                        method: "wise",
                        price: 3.65,
                    },
                    {
                        token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                        fiat: {
                            code: "USD",
                            country: "US",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            account_number: "0126864523",
                            bank_name: "Barclays Bank",
                            email: "contact@streamprotocol.org",
                        },
                        method: "bank",
                        price: 3.65,
                    },
                    {
                        token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                        fiat: {
                            code: "USD",
                            country: "US",
                        },
                        seller: {
                            account_name: "StreamPayments Ltd.",
                            account_number: "0126864523",
                            bank_name: "Barclays Bank",
                            email: "contact@streamprotocol.org",
                        },
                        method: "wise",
                        price: 3.65,
                    ],
                });
        };

        /**
         * @async
         * @function createTransaction
         * @param {Request} req - Express request object
         * @param {Response} res - Express response object
         * @returns {Promise<void>}
         */
        const createTransaction = async(req, res) => {
            try {
                const trx = await transactionModel.create(req.body.businessId, req.body.customerId, req.body);
                console.log(trx);
                res.json({ status: "success", message: "Transaction created successfully", data: trx });
            } catch (err) {
                console.error("Error creating transaction:", err);
                res.status(500).json({ status: "error", message: "Failed to create transaction" });
            }
        };

        module.exports = {
            getAds,
            createTransaction
        };