const userModel = require('../../models/user')
const errorMessages = require('../../utils/errorMessages')
const { validateBody } = require('../../middlewares/user')

async function getAll(_, response) {
  const allUsers = await userModel.getAll()
  return response.json(allUsers)
}

async function add(request, response) {
  const { body: userToAdd } = request
  const { insertId } = await userModel.add(userToAdd)
  return response.status(201).json({ id: insertId, ...userToAdd })
}

module.exports = {
  getAll,
  add,
  update,
}
