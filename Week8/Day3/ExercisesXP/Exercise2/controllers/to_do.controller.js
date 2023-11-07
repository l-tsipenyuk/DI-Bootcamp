const { toDos } = require("../config/db.js");

const getAllToDos = (req, res) => {
    res.json(toDos);
};

const addToDo = (req, res) => {
    console.log("body=>", req.body);
    const newToDo = { ...req.body, id: toDos.length + 1 };
    toDos.push(newToDo);
    res.status(201).json(toDos);
};

const updateToDo = (req, res) => {
    const { id } = req.params;
    const { toDoText } = req.body;
    const indx = toDos.findIndex((item) => item.id == id);
    if (indx === -1) return res.sendStatus(404);
    toDos[indx] = { ...toDos[indx], toDoText: toDoText };
    res.json(toDos);
};

const deleteToDo = (req, res) => {
    const { id } = req.params;
    const indx = toDos.findIndex((item) => item.id == id);
    if (indx === -1) return res.sendStatus(404);
    const deleted = toDos.splice(indx, 1);
    res.sendStatus(201);
};

module.exports = {
    getAllToDos,
    addToDo,
    updateToDo,
    deleteToDo
}