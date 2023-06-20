const userModel = require('../../models/user')

async function getAll(request, response) {
  const users = await userModel.getAll()
  console.log(users)
  // return response.send(200).json(users)
  return response.json({ message: 'Hello, world!' })
}

module.exports = {
  getAll,
}
