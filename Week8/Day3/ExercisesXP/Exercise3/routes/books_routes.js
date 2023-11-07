const express = require("express");

const {
    getAllBooks,
    addBooks,
    updateBooks,
    deleteBooks
} = require("../controllers/books.controller.js");

const router = express.Router();

router.get("/books", getAllBooks);
router.post("/books", addBooks);
router.put("/books/:id", updateBooks);
router.delete("/books/:id", deleteBooks);

module.exports = router;