const db = require('./config/db')
const express = require("express");
require("dotenv").config();
const posts_router = require("./routes/posts_routes.js");

const app = express();

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/api", posts_router);

// how to check if the db is connected

// db.raw('SELECT 1')
    // .then(() => {
    //     console.log('Database connected.');
    // })
    // .catch((error) => {
    //     console.error('Database is not connected.', error);
    // });

app.listen(process.env.PORT || 3001, () => {
    console.log(`running on port ${process.env.PORT || 3001}`);
});