const express = require("express");

require("dotenv").config();
const tasks_router = require("./routes/tasks.routes.js");

const app = express();

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/api", tasks_router);

app.listen(process.env.PORT || 5001, () => {
    console.log(`running on port ${process.env.PORT || 3001}`);
});