const db = require('../../services/db')

async function getAll() {
  const users = await db.query('SELECT * FROM users')
  return users
}

async function add(user) {
  const query = `
    INSERT INTO users (name, login, password, email, phone, cpf, birthdate, mother_name)
    VALUES ('${user.name}', '${user.login}', '${user.password}', '${user.email}', '${user.phone}', '${user.cpf}', '${user.birthdate}', '${user.motherName}')
  `
  const addedUser = await db.query(query)

  return addedUser
}

async function remove(user) {
  const query = `
    DELETE FROM users WHERE id=${user.id}
  `

  const removedUser = await db.query(query)
  return removedUser
}

async function update(user) {
  const query = `
    UPDATE users
    SET name='${user.name}', login='${user.login}', password='${user.password}', email='${user.email}', phone='${user.phone}',
    cpf='${user.cpf}', birthdate='${user.birthdate}', mother_name='${user.motherName}' WHERE id=${user.id}
  `

  const updatedUser = await db.query(query)
  return updatedUser
}

module.exports = {
  getAll,
  add,
  remove,
  update,
}
