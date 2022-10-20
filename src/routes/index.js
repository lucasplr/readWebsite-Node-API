const express = require('express')

const routes = express.Router()

const BooksController = require('../controllers/BooksController')

routes.get('/books', BooksController.index)
routes.post('/books', BooksController.create)
routes.put('/books/:id', BooksController.update)
routes.delete('/books/:id', BooksController.delete)

module.exports = routes
