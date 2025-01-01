require("dotenv").config();

module.exports = {
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
  development: {
    username: process.env.DEV_DB_USERNAME,
    database: process.env.DEV_DB_NAME,
    password: process.env.DEV_DB_PASSWORD,
    host: process.env.DEV_DB_HOST,
  },
  mail: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  jwt: {
    secret: process.env.SECRET_KEY,
  },
  port: process.env.PORT,
  iyzico: {
    apiKey: process.env.IYZICO_API_KEY,
    secretKey: process.env.IYZICO_SECRET_KEY,
    baseUrl: process.env.IYZICO_BASE_URL,
  },
};