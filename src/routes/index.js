const express = require('express')

const routes = express.Router()

const BooksController = require('../controllers/BooksController')

const AuthorsController = require('../controllers/AuthorsController')

const ChaptersController = require('../controllers/ChaptersController')

const AuthorBooksController = require('../controllers/AuthorBooksController')

const BookChaptersController = require('../controllers/BookChaptersController')

const UserController = require('../controllers/UserController')

const RoleController = require('../controllers/RoleController')

const PermissionController = require('../controllers/PermissionController')

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
routes.post('/authorbooks', AuthorBooksController.createAuthorBook)
routes.delete('/authorbooks', AuthorBooksController.removeAuthorBook)

//BookChapters
routes.post('/bookchapters', BookChaptersController.createBookChapter)
routes.delete('/bookchapters', BookChaptersController.removeBookChapter)

//users
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.getUser)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

//roles
routes.get('/roles', RoleController.index)
routes.get('/roles/:id', RoleController.getRole)
routes.post('/roles', RoleController.create)
routes.put('/roles/:id', RoleController.update)
routes.delete('/roles/:id', RoleController.delete)

//permissions
routes.get('/permissions', PermissionController.index)
routes.get('/permissions/:id', PermissionController.getPermission)
routes.post('/permissions', PermissionController.create)
routes.put('/permissions/:id', PermissionController.update)
routes.delete('/permissions/:id', PermissionController.delete)


module.exports = routes
