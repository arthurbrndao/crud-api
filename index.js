require('dotenv').config()
const express = require('express')
const router = require('./src/router')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)

app.listen(process.env.SERVER_PORT, () =>
  console.log('Server is running on port ' + process.env.SERVER_PORT)
)

app.use(express.json())
app.use(router)
