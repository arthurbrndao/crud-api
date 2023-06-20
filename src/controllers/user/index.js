const userModel = require('../../models/user')
const errorMessages = require('../../utils/errorMessages')

async function getAll(_, response) {
  const allUsers = await userModel.getAll()
  return response.json(allUsers)
}

async function add(request, response) {
  const { body: userToAdd } = request

  if (
    userToAdd.name &&
    userToAdd.login &&
    userToAdd.password &&
    userToAdd.email &&
    userToAdd.phone &&
    userToAdd.cpf &&
    userToAdd.birthdate &&
    userToAdd.motherName
  ) {
    const { insertId } = await userModel.add(userToAdd)
    return response.status(201).json({ id: insertId, ...userToAdd })
  }

  return response.status(400).json({ error: errorMessages.WRONG_SYNTAX })
}

module.exports = {
  getAll,
  add,
}
