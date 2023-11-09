const express = require("express");

const {
    getAllTasks, getTaskID, addTask, updateTask, deleteTask

} = require("../controllers/tasks.controllers.js")

const router = express.Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTaskID);

router.post("/tasks/", addTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;