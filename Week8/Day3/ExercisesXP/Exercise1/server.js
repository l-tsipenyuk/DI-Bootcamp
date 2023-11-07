const express = require("express");
require("dotenv").config();
const new_router = require("./routes/index.js");

const app = express();

app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.use("/about", express.static(__dirname + "/public/about.html"));

app.listen(process.env.PORT || 3001, () => {
    console.log(`running on port ${process.env.PORT || 3001}`);
});