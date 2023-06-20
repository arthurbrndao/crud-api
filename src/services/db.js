const mysql = require('mysql2/promise')

async function query(query) {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_PORT,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
  })

  const [results] = await connection.query(query)

  return results
}

module.exports = {
  query,
}
