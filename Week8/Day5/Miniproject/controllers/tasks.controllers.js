const fs = require('fs/promises');
const tasksPath = './config/tasks.json';

const {
    _getAllTasks
} = require("../models/tasks.models.js");

// async function readTasksFile() {
//     const data = await fs.readFile(tasksPath, 'utf-8');
//     return JSON.parse(data);
// }

async function getAllTasks (req, res) {
    try {
        const tasks = await _getAllTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Server Error');
        console.log(err);
    }
};



module.exports = { getAllTasks }