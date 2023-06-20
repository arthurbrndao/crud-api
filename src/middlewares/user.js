const errorMessages = require('../utils/errorMessages')

function hasFullBody(request, response, next) {
  const { body: user } = request

  if (
    user.name &&
    user.login &&
    user.password &&
    user.email &&
    user.phone &&
    user.cpf &&
    user.birthdate &&
    user.motherName
  ) {
    return next()
  }

  return response.status(400).json({ error: errorMessages.MISSING_FULL_BODY })
}

function hasId(request, response, next) {
  const { params: user } = request

  if (user.id) {
    return next()
  }

  return response.status(400).json({ error: errorMessages.MISSING_ID })
}

module.exports = {
  hasFullBody,
  hasId,
}
