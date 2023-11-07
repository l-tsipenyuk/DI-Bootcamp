const { books } = require("../config/db.js");

const getAllBooks = (req, res) => {
    res.json(books);
};

const addBooks = (req, res) => {
    console.log("body=>", req.body);
    const newBook = { ...req.body, id: books.length + 1 };
    books.push(newBook);
    res.status(201).json(books);
};

const updateBooks = (req, res) => {
    const { id } = req.params;
    const { title, author, publishedYear } = req.body;
    const indx = books.findIndex((item) => item.id == id);
    if (indx === -1) return res.sendStatus(404);
    books[indx] = { ...books[indx], title: title, author: author, publishedYear: publishedYear };
    res.json(books);
};

const deleteBooks = (req, res) => {
    const { id } = req.params;
    const indx = books.findIndex((item) => item.id == id);
    if (indx === -1) return res.sendStatus(404);
    const deleted = books.splice(indx, 1);
    res.sendStatus(201);
};

module.exports = {
    getAllBooks,
    addBooks,
    updateBooks,
    deleteBooks
}