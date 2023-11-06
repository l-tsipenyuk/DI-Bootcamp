// Exercise 2: Building A Basic CRUD API With Express.Js
// Instructions
// In this exercise, you’ll build a basic CRUD(Create, Read, Update, Delete) API using Express.js.Your task is to create routes to manage a collection of books.
// 2.1. Create a new directory named book - api.
// 2.2. Inside the book - api directory, initialize a new Node.js project and install the express package.
// 2.3. Create a new file named app.js in the book - api directory.
// 2.4. In app.js, import the express module and create an instance of an Express app.
// 2.5. Define a basic data array containing a few book objects.Each book object should have properties like id, title, author, and publishedYear.



const express = require('express');
const app = express();
const bp = require('body-parser');
const port = 5000;

app.use(bp.json());

books = [
    {
        "id": 1,
        "title": "The Beauty Queen of Jerusalem",
        "author": "Sarit Yishai-Levi",
        "publishedYear": 2016
    },
    {
        "id": 2,
        "title": "The Adventures of Tom Sawyer",
        "author": "Mark Twain",
        "publishedYear": 1876
    },
    {
        "id": 3,
        "title": "The Shining",
        "author": "Stephen King",
        "publishedYear": 1977
    }
]


// 2.7. Implement the “Read all” route by defining a route at GET / api / books.Send a JSON response with the books array.

app.get('/api/books', (req, res) => {
    res.json(books);
});


// 2.8. Implement the “Read” route by defining a route at GET / api / books /: bookId.Extract the bookId parameter from the URL and use it to find the corresponding book in the books array.If the book is found, send a JSON response with the book details and a status code of 200(OK).If the book is not found, send a 404 status with a “Book not found” message.

app.get("/api/books/:bookId", (req, res) => {
    const { bookId } = req.params;
    const book = books.find((item) => item.id == bookId);
    if (!book) return res.status(404).json({ message: "Book Not Found" });
    res.status(201).json(book);
});

// 2.9. Implement the “Create” route at POST / api / books.Use the express.json() middleware to parse JSON body content.Inside the route handler, create a new book object with an incremented ID and the data from the request body.Add the new book to the books array and return a JSON response with the new book and a status code of 201(Created).

app.post("/api/books", (req, res) => {
    console.log("body=>", req.body);
    const new_book = { ...req.body, id: books.length + 1 };
    books.push(new_book);
    res.status(201).json(books);
});

// 2.6. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});