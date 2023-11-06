// 3.7. In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts

const axios = require('axios');

async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (err) {
        throw err;
    }
}

// 3.8. Export the fetchPosts function.

module.exports = {
    fetchPosts,
};

//  to check: node data/dataService.js !