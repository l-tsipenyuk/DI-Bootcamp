const express = require("express");
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello From Express' });
})

app.post('/api/message', (req, res) => {
    const newMessage = req.body.message;
    console.log('The message from client was received:', newMessage);
})

app.listen(3000, () => {
    console.log(`running on port 3000`);
});