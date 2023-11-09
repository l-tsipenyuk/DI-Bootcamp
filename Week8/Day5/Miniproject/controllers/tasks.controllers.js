const fs = require('fs/promises');
const tasksPath = './config/tasks.json';

const {
    _getAllTasks,
    _getTaskByID,
    _addTask,
    _deleteTask,

} = require("../models/tasks.models.js");

async function getAllTasks(req, res) {
    try {
        const tasks = await _getAllTasks();
        res.json(tasks);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
};

const getTaskID = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _getTaskByID(id);
        if (data.length === 0)
            return res.status(404).json({ msg: "Task is not found." });
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: "This task is not available." });
    }
}

const addTask = async (req, res) => {
    try {
        const data = await _getAllTasks();
        const task = req.body;
        data.length === 0? task.id = 1 : task.id = data.length + 1;
        data.push(task);
        await _addTask(data);
        res.json(task);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Can not add a task." });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    const data = await _getAllTasks();
    try {
            const updatedTask = req.body;
            data[id] = { ...data[id], ...updatedTask };
            await _addTask(data);
            res.json(data[id]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Task is not found" });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _deleteTask(id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: "Can not delete this task." });
    }
}

module.exports = { getAllTasks, getTaskID, addTask, updateTask, deleteTask}