const express = require('express')
const userController = require('./controllers/user')

const router = express.Router()

router.get('/users', (req, res) => userController.getAll(req, res))
router.post('/users', (req, res) => userController.add(req, res))

module.exports = router
