const express = require('express')

const routes = express.Router()

const BooksController = require('../controllers/BooksController')

const AuthorsController = require('../controllers/AuthorsController')

const ChaptersController = require('../controllers/ChaptersController')

const AuthorBooksController = require('../controllers/AuthorBooksController')

//books
routes.get('/books', BooksController.index)
routes.post('/books', BooksController.create)
routes.put('/books/:id', BooksController.update)
routes.delete('/books/:id', BooksController.delete)

//author
routes.get('/authors', AuthorsController.index)
routes.post('/authors', AuthorsController.create)
routes.put('/authors/:id', AuthorsController.update)
routes.delete('/authors/:id', AuthorsController.delete)

//chapter
routes.get('/chapters', ChaptersController.index)
routes.post('/chapters', ChaptersController.create)
routes.put('/chapters/:id', ChaptersController.update)
routes.delete('/chapters/:id', ChaptersController.delete)

//AuthorBooks
routes.get('/authorbooks', AuthorBooksController.createAuthorBook)

module.exports = routes
