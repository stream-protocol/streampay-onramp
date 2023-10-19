const Joi = require("joi");
const model = require("../db/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Helper function to send responses
const sendResponse = (res, status, message, statusCode = 200) => {
    return res.status(statusCode).json({
        status,
        message,
    });
};

const update = async function(req, res) {
    try {
        const schema = Joi.object({
            firstname: Joi.string().min(3).required(),
            lastname: Joi.string().min(3).required(),
            phone: Joi.string().required(),
            country_iso2_code: Joi.string().valid("AE", "EU", "NG", "US").required(),
        });

        const { error } = schema.validate(req.body);

        if (error) {
            return sendResponse(res, "error", error.details[0].message, 400);
        }

        await model.user.updateUserByEmail(req.auth.user.email, req.body);
        return sendResponse(res, "ok", "User updated");

    } catch (error) {
        return sendResponse(res, "error", error.message, 400);
    }
};

const login = async function(req, res) {
    try {
        const found = await model.user.getUserByUsername(req.body.email);

        if (found.length > 0) {
            const user = found[0];
            const match = bcrypt.compareSync(req.body.password, user.password);

            if (!match) {
                return sendResponse(res, "error", "Invalid username or password", 400);
            }

            delete user.password;

            jwt.sign({ user },
                process.env.JWT_SECRET, { expiresIn: "24h" },
                (err, token) => {
                    if (err) {
                        return sendResponse(res, "error", err.message, 400);
                    } else {
                        res.cookie("Authorization", token, {
                            httpOnly: true,
                            maxAge: 24 * 60 * 60 * 1000, // 24 hours
                        });

                        return sendResponse(res, "ok", "success");
                    }
                }
            );
        } else {
            return sendResponse(res, "error", "Invalid username or password", 400);
        }
    } catch (error) {
        return sendResponse(res, "error", error.message, 400);
    }
};

const logout = async function(req, res) {
    res.cookie("Authorization", "", {
        maxAge: 0,
    });

    return sendResponse(res, "ok", "success");
};

const register = async function(req, res) {
    try {
        const schema = Joi.object({
            business_name: Joi.string().min(3).required(),
            representative_email: Joi.string().email().required(),
            representative_firstname: Joi.string().min(3).required(),
            representative_lastname: Joi.string().min(3).required(),
            representative_phone: Joi.string().required(),
            default_currency: Joi.string().valid("AED", "EUR", "NGN", "USD").required(),
            country_iso2_code: Joi.string().valid("AE", "EU", "NG", "US").required(),
            password: Joi.string().min(8).required().alphanum(),
        });

        const { error } = schema.validate(req.body);

        if (error) {
            return sendResponse(res, "error", error.details[0].message, 400);
        }

        const found = await model.business.getBusinessByName(req.body.business_name);

        if (found.length > 0) {
            return sendResponse(res, "error", "Business already exists", 400);
        }

        const exist = await model.user.getUserByUsername(req.body.representative_email);

        if (exist.length > 0) {
            return sendResponse(res, "error", "Email already exists", 400);
        }

        await model.business.create(req.body);
        return sendResponse(res, "ok", "Business created");

    } catch (error) {
        return sendResponse(res, "error", error.message, 400);
    }
};

module.exports = {
    login,
    register,
    update,
    logout,
};