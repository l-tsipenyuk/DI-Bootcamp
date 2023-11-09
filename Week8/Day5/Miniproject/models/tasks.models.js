const fs = require('fs/promises');
const tasksPath = './config/tasks.json';

async function _getAllTasks() {
    const data = await fs.readFile(tasksPath, 'utf-8');
    return JSON.parse(data);
}

module.exports = {_getAllTasks}