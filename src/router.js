const express = require('express')
const userController = require('./controllers/user')

const router = express.Router()

router.get('/users', (req, res) => userController.getAll(req, res))

module.exports = router
