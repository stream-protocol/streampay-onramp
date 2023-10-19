const Joi = require("joi");
const model = require("../db/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const updateUser = async (req, res) => {
    const schema = Joi.object({
        firstname: Joi.string().min(3).required(),
        lastname: Joi.string().min(3).required(),
        phone: Joi.string().required(),
        country_iso2_code: Joi.string().valid("EU", "GB", "AE", "NG", "US").required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: "error", message: error.details[0].message });
    }

    await model.user.updateUserByEmail(req.auth.user.email, req.body);
    res.json({ status: "ok", message: "User updated" });
};

const loginUser = async (req, res) => {
    try {
        const user = await model.user.getUserByUsername(req.body.email);
        if (user.length === 0) {
            return res.status(400).json({ status: "error", message: "Invalid username or password" });
        }

        const isValidPassword = bcrypt.compareSync(req.body.password, user[0].password);
        if (!isValidPassword) {
            return res.status(400).json({ status: "error", message: "Invalid username or password" });
        }

        const token = jwt.sign({ user: user[0] }, process.env.JWT_SECRET, { expiresIn: "24h" });
        res.cookie("Authorization", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ status: "ok", message: "Success" });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

const logoutUser = (req, res) => {
    res.cookie("Authorization", "", { maxAge: 0 });
    res.json({ status: "ok", message: "Success" });
};

const registerUser = async (req, res) => {
    const schema = Joi.object({
        business_name: Joi.string().min(3).required(),
        representative_email: Joi.string().email().required(),
        representative_firstname: Joi.string().min(3).required(),
        representative_lastname: Joi.string().min(3).required(),
        representative_phone: Joi.string().required(),
        default_currency: Joi.string().valid("EUR", "GPR", "AED", "NGN", "USD").required(),
        country_iso2_code: Joi.string().valid("EU", "GB", "AE", "NG", "US").required(),
        password: Joi.string().min(8).required().alphanum(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: "error", message: error.details[0].message });
    }

    const businessExists = await model.business.getBusinessByName(req.body.business_name);
    if (businessExists.length > 0) {
        return res.status(400).json({ status: "error", message: "Business already exists" });
    }

    const emailExists = await model.user.getUserByUsername(req.body.representative_email);
    if (emailExists.length > 0) {
        return res.status(400).json({ status: "error", message: "Email already exists" });
    }

    try {
        await model.business.create(req.body);
        res.json({ status: "ok", message: "Business created" });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

module.exports = {
    updateUser,
    loginUser,
    logoutUser,
    registerUser,
};