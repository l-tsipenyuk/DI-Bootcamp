const express = require("express");

const {
    getAllToDos,
    addToDo,
    updateToDo,
    deleteToDo
} = require("../controllers/to_do.controller.js");

const router = express.Router();

router.get("/todos", getAllToDos);
router.post("/todos", addToDo);
router.put("/todos/:id", updateToDo);
router.delete("/todos/:id", deleteToDo);

module.exports = router;