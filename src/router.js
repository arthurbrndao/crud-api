const express = require('express')
const userMiddleware = require('./middlewares/user')
const userController = require('./controllers/user')

const router = express.Router()

router.get('/users', userController.getAll)
router.post('/users', userMiddleware.validateBody, userController.add)

module.exports = router
