const db = require('./config/db')
const express = require("express");
require("dotenv").config();
const books_router = require("./routes/books_routes.js");

const app = express();

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/api", books_router);


app.listen(process.env.PORT || 5001, () => {
    console.log(`running on port ${process.env.PORT || 5001}`);
});