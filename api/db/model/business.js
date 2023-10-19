const conn = require("../conn.js");
const bcrypt = require("bcrypt");
const slugify = require("slugify");

const executeQuery = async(query, values) => {
    return new Promise((resolve, reject) => {
        conn.query(query, values, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const getBusinessByName = async(businessName) => {
    const slug = slugify(businessName, { lower: true });
    return executeQuery("SELECT * FROM businesses WHERE business_slug = ?", [slug]);
};

const create = async(business) => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(business.password, saltRounds);

    await conn.beginTransaction(async(err) => {
        if (err) throw err;

        try {
            const userResults = await executeQuery("INSERT INTO users SET ?", {
                email: business.representative_email,
                firstname: business.representative_firstname,
                lastname: business.representative_lastname,
                phone: business.representative_phone,
                country_iso2_code: business.country_iso2_code,
                password: hashedPassword,
                created_at: new Date(),
            });

            const userId = userResults ? .insertId;

            const businessResults = await executeQuery("INSERT INTO businesses SET ?", {
                business_name: business.business_name,
                business_slug: slugify(business.business_name, { lower: true }),
                representative_id: userId,
                business_ref: new Date().getTime(),
                default_currency: business.default_currency,
                created_at: new Date(),
            });

            const businessId = businessResults ? .insertId;

            await executeQuery(`UPDATE businesses SET representative_id = ?  WHERE id = ?`, [userId, businessId]);
            await executeQuery(`UPDATE users SET company_id = ?  WHERE id = ?`, [businessId, userId]);

            await conn.commit();
            conn.end();
            return true;
        } catch (error) {
            await conn.rollback();
            throw error;
        }
    });
};

const updateBusinessById = async(businessId, data) => {
    return executeQuery(
        "UPDATE businesses SET business_name = ?, business_slug = ?, default_currency = ?, preferred_channels = ?, recipient_address = ?, logo = ?, callback_url = ?, webhook_url = ? WHERE id = ?", [
            data.business_name,
            slugify(data.business_name, { lower: true }),
            data.default_currency,
            data.preferred_channels,
            data.recipient_address,
            data.logo,
            data.callback_url,
            data.webhook_url,
            businessId,
        ]
    );
};

const getBusinessOwner = async(businessId) => {
    return executeQuery(
        "SELECT * FROM businesses INNER JOIN users ON businesses.representative_id = users.id WHERE businesses.id = ?", [businessId]
    );
};

const getBusinessByRef = async(businessRef) => {
    return executeQuery("SELECT * FROM businesses WHERE business_ref = ?", [businessRef]);
};

module.exports = {
    create,
    getBusinessByName,
    updateBusinessById,
    getBusinessOwner,
    getBusinessByRef,
};