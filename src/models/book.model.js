const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    genre: String,
    pubication_date: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Book', bookSchema)
