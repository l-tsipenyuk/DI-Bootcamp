const { books } = require("../config/db.js");

const {
    _readAllBooks,
    _getOneBook,
    _addBook
} = require("../models/books.model.js");

const readAllBooks = async (req, res) => {
    try {
        const data = await _readAllBooks();
        res.json(data);
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: "No books found." });
    }
};

const getOneBook = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _getOneBook(id);
        if (data.length === 0)
            return res.status(404).json({ msg: "Book is not found." });
        res.json(data);
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: "This book is not available." });
    }
}

const addBook = async (req, res) => {
    console.log("body=>", req.body);
    const { title, author, publishedyear } = req.body;
    try {
        const data = await _addBook(title, author, publishedyear);
        readAllBooks(req, res);
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: "Can not add a book" });
    }
};

module.exports = {
    readAllBooks,
    getOneBook,
    addBook
};