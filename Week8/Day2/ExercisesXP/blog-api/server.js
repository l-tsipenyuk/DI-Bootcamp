// Exercise 1: Building A RESTful API
// Instructions
// 1.1. You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.
// 1.2. Create a directory named blog-api.
// 1.3. Inside the blog - api directory, open a terminal and run npm init to initialize a new Node.js project.Follow the prompts to set up your project.
// Install the express package by running npm install express in the terminal.
// 1.4. Create a file named server.js.
// 1.5. In server.js, require the express package and set up an Express app.
// 1.6. Create a data array to simulate a database.Each item in the array should represent a blog post with properties like id, title, and content.

const express = require('express');
const app = express();
const bp = require('body-parser');
const port = 3001;

app.use(bp.json());

data = [
    {
        "id": 1,
        "title": "Post 1",
        "content": "Here's some content"
    }, {
        "id": 2,
        "title": "Post 2",
        "content": "Another content is present."
    }, {
        "id": 3,
        "title": "Post 3",
        "content": "That's the content from the post number 3."
    },
]

// 1.8. GET / posts: Return a list of all blog posts.

app.get('/data', (req,res)=>{
    res.json(data);
});

// 1.9. GET / posts /: id: Return a specific blog post based on its id.








app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});