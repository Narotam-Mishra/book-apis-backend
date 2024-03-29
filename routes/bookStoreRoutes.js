
// book routes

const express = require('express')
const router = express.Router()

const {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBookById,
    deleteBookById
} = require('../controllers/bookAPIs');

router.route('/').post(createBook).get(getAllBooks);

router
  .route("/:id")
  .get(getSingleBook)
  .patch(updateBookById)
  .delete(deleteBookById);


module.exports = router;