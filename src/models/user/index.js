const connection = require('../connection')

async function getAll() {
  const query = 'SELECT * FROM users'
  const users = connection.query(query)

  return users
}

module.exports = {
  getAll,
}
