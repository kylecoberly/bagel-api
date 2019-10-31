require("dotenv").config()

module.exports = {
    development: {
        client: "pg",
        connection: "postgres:///bagels"
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL
    },
};
