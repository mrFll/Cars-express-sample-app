const mysql = require('mysql2/promise');

let connection = null;

const configs = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
};

async function getConnection () {
  return mysql.createConnection(configs);
}

async function query (query, params) {
  if (!connection) {
    connection = await getConnection();
  }
  return connection.execute(query, params);
}


module.exports = {
  query
};