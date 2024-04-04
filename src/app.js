const express = require('express')
const app = express()
const { config } = require('dotenv')
config()
require('../src/database/db.connection')
const bookRouter = require('./routes/book.route')

const port = process.env.PORT || 3000

app.use(express.json())
app.use('/', bookRouter)

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`)
})
