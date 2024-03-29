
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define book's schema
const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    publicationDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

// Create a Mongoose model based on the schema
const Book = mongoose.model('Book', bookSchema);

// Export the Book model
module.exports = Book;