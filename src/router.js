const express = require('express')
const userMiddleware = require('./middlewares/user')
const userController = require('./controllers/user')

const router = express.Router()

router.get('/users', userController.getAll)
router.post('/users', userMiddleware.hasFullBody, userController.add)
router.delete('/user/:id', userController.remove)
router.put(
  '/user/:id',
  userMiddleware.hasId,
  userMiddleware.hasFullBody,
  userController.update
)

module.exports = router
