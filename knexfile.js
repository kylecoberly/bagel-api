require("dotenv").config()
console.log("Database URL", process.env.DATABASE_URL)

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
