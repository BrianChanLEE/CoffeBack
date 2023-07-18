import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";
console.info("JWT_SECRET " + process.env.NODE_ENV);
dotenv.config({
  path: envFile,
});

module.exports = {
  secret: process.env.JWT_SECRET,
};
