const mysql = require('mysql')

const HOST = process.env.MYSQL_DB_ENDPOINT
const USER = process.env.MYSQL_DB_USERNAME
const PASSWORD = process.env.MYSQL_DB_PASSWORD
const DATABASE = process.env.MYSQL_DB_NAME

const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
})

connection.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack)
    return
  }

  console.log('Connected to database.')
})

module.exports = connection
