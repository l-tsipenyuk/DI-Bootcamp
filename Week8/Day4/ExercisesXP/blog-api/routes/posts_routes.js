const express = require("express");
const { posts } = require("../config/db.js");
const {
    getAllPosts,
    getOnePost,
    addPost,
    updatePost,
    deletePost
} = require("../controllers/posts.controller.js");

const router = express.Router();

router.get("/posts", getAllPosts);

router.get("/posts/:id", getOnePost);

router.post("/posts", addPost);

router.put("/posts/:id", updatePost);

router.delete("/posts/:id", deletePost);

module.exports = router;