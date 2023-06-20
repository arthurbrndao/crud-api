require('dotenv').config()
const express = require('express')
const router = require('./src/router')

const SERVER_PORT = process.env.SERVER_PORT

const app = express()
app.listen(SERVER_PORT, () =>
  console.log('server running on port ' + SERVER_PORT)
)

app.use(router)
