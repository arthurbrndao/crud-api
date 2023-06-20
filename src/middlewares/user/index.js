const errorMessages = require('../../utils/errorMessages')

function validateBody(request, response) {
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
    return true
  }

  return response.status(400).json({ error: errorMessages.WRONG_SYNTAX })
}

module.exports = {
  validateBody,
}
