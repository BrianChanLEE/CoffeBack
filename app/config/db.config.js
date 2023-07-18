const dotenv = require("dotenv");

const envFile = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";
console.info("DB " + process.env.NODE_ENV);
dotenv.config({
  path: envFile,
});

module.exports = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
