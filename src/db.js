require("dotenv").config();
const { Pool } = require("pg");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT, DB_URL } = process.env;

const db = new Pool(
  DB_URL
    ? {
        connectionString: DB_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: Number(DB_PORT),
        ssl: {
          rejectUnauthorized: false,
        },
      }
);

module.exports = db;
