const express = require("express");
require("dotenv").config();

const books_router = require("./routes/books_routes.js");

const app = express();

app.use(express.json());

app.use("/api", books_router);

app.listen(process.env.PORT || 3001, () => {
    console.log(`running on port ${process.env.PORT || 3001}`);
});