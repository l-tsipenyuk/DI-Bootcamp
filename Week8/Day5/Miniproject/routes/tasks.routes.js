const express = require("express");



const {
    getAllTasks,

} = require("../controllers/tasks.controllers.js")

const router = express.Router();

router.get("/tasks", getAllTasks);

module.exports = router;