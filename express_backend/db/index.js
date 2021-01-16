require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

pool
  .connect()
  .then((client) => console.log(`Connecting to DB ${process.env.DB_NAME}`))
  .catch((err) => console.log(`Error connecting to ${process.env.DB_NAME}...`));

module.exports = pool;