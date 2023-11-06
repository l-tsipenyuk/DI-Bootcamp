const express = require('express');
const app = express();
const bp = require('body-parser');
const port = 5000;
const path = require('path');

app.use(bp.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



