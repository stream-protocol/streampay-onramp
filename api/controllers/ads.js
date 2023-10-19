const { transaction } = require("../db/model");

const getAds = async (req, res) => {
  const ads = [
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "EUR",
        country: "FIN",
      },
      seller: {
        account_name: "Stream Payments",
        iban: "0392892390230923",
        account_number: "9828328",
        bank_name: "Nordea Bank",
        email: "contact@streamprotocol.org",
      },
      price: 3.65,
      methods: ["Bank"],
    },
    // ... (other ads)
  ];

  return res.json({
    status: "ok",
    ad: ads,
  });
};

const handleTransaction = async (req, res) => {
  try {
    const trx = await transaction.create(req.body.businessId, req.body.customerId, req.body);
    console.log(trx);
    res.status(201).json({ message: "Transaction successful", data: trx });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAds,
  handleTransaction,
};
