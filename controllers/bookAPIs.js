
const Book = require('../models/bookModel');

// book APIs ---> Endpoints

// post(Create) - to create new book in store (DB)
const createBook = async (req, res) => {
    try {
        // Check if all required fields are present in the request body
        if (!req.body.title || !req.body.author || !req.body.publicationDate || !req.body.isbn) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publication date & isbn',
            });
        }

        // Validate publicationDate format
        const { title, author, isbn, publicationDate } = req.body;
        const parsedDate = new Date(publicationDate);
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).send({
                message: 'Invalid publication date format. Please provide a valid date.',
            });
        }

        // Create a new Book instance
        const newBook = new Book({ title, author, isbn, publicationDate: parsedDate });

        // Save the new book to the database
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        // Handle validation errors and other save-related errors
        res.status(400).json({ message: error.message });
    }
}

// get(Read) - get all books
const getAllBooks = async (req, res) => {
  try {
    // get all books
    const books = await Book.find({});
    // if no book found send error response
    if (!books || books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }
    // otherwise send all book details
    res.status(200).json({
      books: books,
      count: books.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

// get(Read) - get book by Id
const getSingleBook = async (req, res) => {
    try {
        // extract book id from params
        const {id} = req.params;
        const book = await Book.findById(id);
        // console.log(book);

        // if no book found send error response
        if (!book) {
            return res.status(404).json({ message: `No Book found with id ${id}` });
        }
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

// u(Update) - update book by Id
const updateBookById = async (req, res) => {
  try {
    // extract book id from params
    const { id } = req.params;
    // get all required fields
    const { title, author, isbn, publicationDate } = req.body;
    // then update all required fields
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, isbn, publicationDate },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: `No Book found with id ${id}` });
    }
    res.status(202).json({ message: `Book updated successfully!!` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// d(Delete) - delete book by Id
const deleteBookById = async (req, res) => {
  try {
    // extract book id from params
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: `No Book found with id ${id}` });
    }
    res.status(202).json({ message: `Book removed successfully!!` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// export all APIs
module.exports = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBookById,
    deleteBookById
}