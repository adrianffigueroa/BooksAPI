const Book = require('../models/book.model')

const checkId = async (req, res, next) => {
  let book
  const { id } = req.params
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({ message: 'El id no respeta el formato' })
  }
  try {
    book = await Book.findById(id)
    if (!book) {
      return res.status(404).json({ message: 'El libro no fue encontrado' })
    }
    res.book = book
    next()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = checkId
