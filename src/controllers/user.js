const userModel = require('../models/user')
const errorMessages = require('../utils/errorMessages')

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
  const { params } = request

  const { affectedRows } = await userModel.remove(params.id)

  if (affectedRows === 0) {
    return response.status(404).json({ error: errorMessages.NOT_FOUND })
  }

  return response.status(204).json()
}

async function update(request, response) {
  const { body, params } = request
  const userToUpdate = { id: params.id, ...body }

  const { affectedRows } = await userModel.update(userToUpdate)

  if (affectedRows === 0) {
    return response.status(404).json({ error: errorMessages.NOT_FOUND })
  }

  return response.status(200).json(userToUpdate)
}

async function activate(request, response) {
  const { params } = request

  await userModel.activate(params.id)

  return response.status(200).json()
}

async function deactivate(request, response) {
  const { params } = request

  const { affectedRows } = await userModel.deactivate(params.id)

  if (affectedRows === 0) {
    return response.status(404).json({ error: errorMessages.NOT_FOUND })
  }

  return response.status(200).json()
}

module.exports = {
  getAll,
  add,
  remove,
  update,
  activate,
  deactivate,
}
