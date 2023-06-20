const db = require('../services/db')

async function getAll() {
  const users = await db.query(`SELECT * FROM ${process.env.MYSQL_DB_NAME}`)
  return users
}

async function add(user) {
  const query = `
    INSERT INTO ${process.env.MYSQL_DB_NAME} (name, login, password, email, phone, cpf, birthdate, mother_name)
    VALUES ('${user.name}', '${user.login}', '${user.password}', '${user.email}', '${user.phone}', '${user.cpf}', '${user.birthdate}', '${user.motherName}')
  `
  const addedUser = await db.query(query)

  return addedUser
}

async function remove(id) {
  const query = `
    DELETE FROM ${process.env.MYSQL_DB_NAME} WHERE id=${id}
  `

  const removedUser = await db.query(query)
  return removedUser
}

async function update(user) {
  const query = `
    UPDATE ${process.env.MYSQL_DB_NAME}
    SET name='${user.name}', login='${user.login}', password='${user.password}', email='${user.email}', phone='${user.phone}',
    cpf='${user.cpf}', birthdate='${user.birthdate}', mother_name='${user.motherName}' WHERE id=${user.id}
  `

  const updatedUser = await db.query(query)
  return updatedUser
}

async function activate(id) {
  const query = `UPDATE ${process.env.MYSQL_DB_NAME} SET is_active=1 WHERE id=${id}`

  const activatedUser = await db.query(query)
  return activatedUser
}

async function deactivate(id) {
  const query = `UPDATE ${process.env.MYSQL_DB_NAME} SET is_active=0 WHERE id=${id}`

  const activatedUser = await db.query(query)
  return activatedUser
}

module.exports = {
  getAll,
  add,
  remove,
  update,
  activate,
  deactivate,
}
