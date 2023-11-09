const fs = require('fs/promises');
const tasksPath = './config/tasks.json';

async function _getAllTasks() {
    const data = await fs.readFile(tasksPath, 'utf-8');
    return JSON.parse(data);
}

async function _getTaskByID(id) {
    const tasks = await _getAllTasks();
    const task = tasks.find((i) => i.id === parseInt(id));
    return task;
}

async function _addTask(data) {
    await fs.writeFile(tasksPath, JSON.stringify(data, null, 2), 'utf-8');
}

async function _deleteTask(id) {
    const tasks = await _getAllTasks();
    const updTasks = tasks.filter((i) => i.id !== parseInt(id));
    await _addTask(updTasks);
    return _getTaskByID(id); 
}

module.exports = {_getAllTasks, _getTaskByID, _addTask, _deleteTask}