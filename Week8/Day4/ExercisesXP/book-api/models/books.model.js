const { db } = require("../config/db.js");

const _readAllBooks = () => {
    return db("books").select("id", "title", "author", "publishedyear").orderBy("title");
};

const _getOneBook = (id) => {
    return db("books").select("id", "title", "author", "publishedyear").where({ id });
};

const _addBook = (title, author, publishedyear) => {
    return db("books").insert({ title, author, publishedyear }, ["id", "title", "author", "publishedyear"]);
};

module.exports = {
    _readAllBooks,
    _getOneBook,
    _addBook
};