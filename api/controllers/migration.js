const conn = require("../db/conn");

const run = async(req, res) => {
    try {
        conn.beginTransaction(async(err) => {
            if (err) {
                throw err;
            }

            const queries = [
                // Users table creation query
                `
                CREATE TABLE IF NOT EXISTS users (
                    ...
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`,

                // Customers table creation query
                `
                CREATE TABLE IF NOT EXISTS customers (
                    ...
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`,

                // Businesses table creation query
                `
                CREATE TABLE IF NOT EXISTS businesses (
                    ...
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`,

                // Transactions table creation query
                `
                CREATE TABLE IF NOT EXISTS transactions (
                    ...
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`
            ];

            for (let query of queries) {
                await new Promise((resolve, reject) => {
                    conn.query(query, (error, result) => {
                        if (error) {
                            return conn.rollback(() => {
                                reject(error);
                            });
                        }
                        resolve(result);
                    });
                });
            }

            conn.commit((error) => {
                if (error) {
                    conn.rollback(() => {
                        throw error;
                    });
                }
                conn.end();
                return res.json({
                    status: "ok",
                });
            });
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            error: err.message,
        });
    }
};

exports.run = run;