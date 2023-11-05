// console.log("hey")
// const slugify = require('slugify');

// const slug = slugify('news today', '__');

// console.log(slug);


// Importing and using module axios

const axios = require('axios');

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

getData()