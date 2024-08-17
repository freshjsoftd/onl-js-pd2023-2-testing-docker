const http = require('http')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Hi everyone from server')
})

app.get('/error', (req, res) => {
  res.status(404).send('Not found')
})

app.get('/user', (req, res) => {
  res.send({name: 'Bill', age: 30})
})

const server = http.createServer(app)

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

module.exports = app;
