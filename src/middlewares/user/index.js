const errorMessages = require('../../utils/errorMessages')

function validateBody(request, response, next) {
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
    return next()
  }

  return response.status(400).json({ error: errorMessages.MISSING_PARAMETERS })
}

module.exports = {
  validateBody,
}
