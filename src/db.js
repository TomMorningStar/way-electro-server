const { Pool } = require('pg');
require('dotenv').config();

console.log("PG_HOST:", process.env.PG_HOST); // Должно быть aws-0-eu-central-1.pooler.supabase.com
if (!process.env.PG_HOST) {
  throw new Error("PG_HOST не загружен!");
}

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
