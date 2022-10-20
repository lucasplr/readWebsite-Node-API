const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')

const app = express()

app.use(bodyParser.json())

app.use(routes)

app.listen(3000, () => {
    console.log('Conectado')
})