const express = require("express");
require("dotenv").config();

const to_do_router = require("./routes/to_do_routes.js");

const app = express();

app.use(express.json());

app.use("/api", to_do_router);

app.listen(process.env.PORT || 3001, () => {
    console.log(`running on port ${process.env.PORT || 3001}`);
});