// Exercise 3: Building A Basic CRUD API With Express And Axios Using A Data Module
// Part 1: Setting Up the Express Server
// 3.1. Create a new directory named crud - api.
// 3.2. Inside the crud - api directory, initialize a new Node.js project and install the express and axios packages.
// 3.3. Create a new file named app.js in the crud - api directory.
// 3.4. In app.js, import the express module and create an instance of an Express app.
// 3.5. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

// Part 2: Creating a Data Module for Axios
// 3.6. Inside the crud - api directory, create a new directory named data.

const express = require('express');
const app = express();
const bp = require('body-parser');
const port = 5000;

// Part 3: Using the Data Module in the Express App
// 3.9. Inside app.js, import the dataService module you created.

const dataService = require('./data/dataService.js');

app.use(bp.json());

// 3.10. Create an endpoint in your Express app that uses the fetchPosts function from the dataService module to retrieve data from the JSONPlaceholder API.

app.get("/api/posts", async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.status(201).json(posts);
    } catch (err){
        res.status(500).json({message: "Error Message"})
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});