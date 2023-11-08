const express = require("express");
const { books } = require("../config/db.js");
const {
    readAllBooks,
    getOneBook,
    addBook
} = require("../controllers/books.controller.js");

const router = express.Router();

router.get("/books", readAllBooks);

router.get("/books/:id", getOneBook);

router.post("/books", addBook);

module.exports = router;