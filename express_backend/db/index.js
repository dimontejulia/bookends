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

// const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable` ;

// const client = new pg.Client({
//     connectionString: connectionString || process.env.DATABASE_URL,
// });

// console.log( `Connected to ${process.env.DB_NAME} on ${process.env.DB_HOST}` );
// client.connect();

// module.exports = client;