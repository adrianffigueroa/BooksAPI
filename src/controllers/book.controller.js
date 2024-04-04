const Book = require('../models/book.model')

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
    if (books.length === 0) {
      return res.status(204).json([])
    }
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createBook = async (req, res) => {
  const { title, author, genre, publication_date } = req?.body
  if (!title || !author || !genre || !publication_date) {
    return res
      .status(400)
      .json({ message: 'Todos los campos son obligatorios' })
  }
  const book = new Book({
    title,
    author,
    genre,
    publication_date,
  })
  try {
    const newBook = await book.save()
    console.log(newBook)
    res.status(201).json(newBook)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getBookById = async (req, res) => {
  const { id } = req?.params
  try {
    let bookById = await Book.findById(id)
    if (!bookById) {
      res.status(404).json({ message: 'Libro no encontrado' })
    }
    res.status(200).json(bookById)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateBook = async (req, res) => {
  const { id } = req?.params
  const validKeys = ['title', 'author', 'genre', 'publication_date']
  for (const key of Object.keys(req.body)) {
    if (!validKeys.includes(key)) {
      console.log('Uno de los campos no coincide')
      return res.status(404).json({ message: 'mala peticion' })
    }
  }
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    if (!updatedBook) {
      res.status(404).json({ message: 'Libro no encontrado' })
    }
    res.status(200).json(updatedBook)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteBook = async (req, res) => {
  const { id } = req?.params
  try {
    const deletedBook = await Book.findByIdAndDelete(id)
    if (!deletedBook) {
      res.status(404).json({ message: 'Libro no encontrado' })
    }
    res
      .status(200)
      .json({ message: `El libro ${deletedBook.title} fue eliminado` })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
}
