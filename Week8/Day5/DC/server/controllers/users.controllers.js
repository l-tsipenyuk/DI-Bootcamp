const fs = require('fs/promises');
const usersPath = './config/users.json';
const bcrypt = require('bcrypt');

const {
    _getAllUsers,
    _writeAllUsers,
    _getUserID

} = require("../models/users.models.js");

async function registerUsers(req, res) {
    try {
        let userId = 0;
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUsers = JSON.parse(await fs.readFile(usersPath, 'utf8')) || [];
        if (existingUsers.length === 0) {
            userId = 1;
        } else { userId = existingUsers.length + 1 };

        existingUsers.push({ id: userId, username, password: hashedPassword });

        await _writeAllUsers(existingUsers);

        res.status(201).json({ message: 'User registered.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'User registration failed.' });
    }
};

async function loginUsers(req, res) {
    try {
        const { username, password } = req.body;
        const existingUsers = JSON.parse(await fs.readFile(usersPath, 'utf8')) || [];
        const user = existingUsers.find(i => i.username === username);

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password.' })
        }

        const isPassword = await bcrypt.compare(password, user.password);

        isPassword ? res.status(200).json({ message: 'Login is successful' }) : res.status(401).json({ message: 'Ivalid username or password.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'User login failed.' });
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await _getAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error.');
    }
}

const getUserID = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _getUserID(id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'This user is not available.' });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    try {
        const data = await _getAllUsers();

        if (!data[id]) {
            return res.status(404).json({ msg: 'User not found' });
        }

        data[id] = { ...data[id], username, password };

        await _writeAllUsers(data);

        res.json(data[id]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server error.' });
    }
};


module.exports = { registerUsers, loginUsers, getAllUsers, getUserID, updateUser }
