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

async function remove(request, response) {
  const { params: userToRemove } = request

  const removedUser = await userModel.remove(userToRemove)

  if (removedUser.affectedRows === 0) {
    return response.status(404).json({ error: errorMessages.NOT_FOUND })
  }

  return response.status(204).json()
}

async function update(request, response) {
  const { body, params } = request
  const userToUpdate = { id: params.id, ...body }

  const updatedUser = await userModel.update(userToUpdate)

  if (updatedUser.affectedRows === 0) {
    return response.status(404).json({ error: errorMessages.NOT_FOUND })
  }

  return response.status(200).json(userToUpdate)
}

module.exports = {
  getAll,
  add,
  remove,
  update,
}
