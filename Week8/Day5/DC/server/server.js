const express = require("express");
require("dotenv").config();
const users_router = require("./routes/users.routes.js");

const app = express();

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/api", users_router);

app.listen(process.env.PORT || 3001, () => {
    console.log(`running on port ${process.env.PORT || 3001}`);
});