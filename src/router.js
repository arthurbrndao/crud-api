const express = require('express')
const userMiddleware = require('./middlewares/user')
const userController = require('./controllers/user')

const router = express.Router()

router.get('/users', (req, res) => userController.getAll(req, res))
router.post('/users', (req, res) => {
  userMiddleware.validateBody(req, res)
  userController.add(req, res)
})

module.exports = router
