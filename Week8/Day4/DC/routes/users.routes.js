const express = require("express");
const { users } = require("../config/db.js");
const {
    // getAllPosts,
    // getOnePost,
    // addPost,
    // updatePost,
    // deletePost
} = require("../controllers/posts.controller.js");

const router = express.Router();
const bcrypt = require('bcrypt');


module.exports = router;