const express = require('express')
const Bodyparser = require('body-parser')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())


app.listen(3000, () => {
    console.log('Conectado')
})