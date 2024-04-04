const express = require('express')
const router = express.Router()
const Book = require('../models/book.model')
const checkId = require('../middlewares/checkIdMid')
const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require('../controllers/book.controller')

//Obtener todos los libros

router.get('/', getAllBooks)

//Crear un nuevo libro

router.post('/', createBook)

//Obtener un libro por Id

router.get('/:id', checkId, getBookById)

//Editar un libro

router.patch('/:id', checkId, updateBook)

//Eliminar un libro

router.delete('/:id', checkId, deleteBook)

module.exports = router
