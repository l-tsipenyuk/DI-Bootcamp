const fs = require('fs/promises');
const usersPath = './config/users.json';


async function _getAllUsers() {
    const data = await fs.readFile(usersPath, 'utf-8');
    return JSON.parse(data);
}

async function _writeAllUsers(users) {
    await fs.writeFile(usersPath, JSON.stringify(users));
}

async function _getUserID(id) {
    const users = await _getAllUsers();
    const user = users.find((i) => i.id === parseInt(id));
    return user;
}

module.exports = { _getAllUsers, _writeAllUsers, _getUserID }