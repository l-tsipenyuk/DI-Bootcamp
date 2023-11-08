const { posts } = require("../config/db.js");

const {
    _getAllPosts,
    _getOnePost,
    _addPost,
    _updatePost,
    _deletePost
} = require("../models/posts.model.js");

const getAllPosts = async (req, res) => {
    try {
        const data = await _getAllPosts();
        res.json(data);
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: "No posts found." });
    }
};

const getOnePost = async (req, res) => {
    const { id } = req.params;
    try{
        const data = await _getOnePost(id);
        if (data.length === 0)
            return res.status(404).json({ msg: "Post is not found." });
        res.json(data);  
    } catch (e){
        console.log(e);
        res.status(404).json({ msg: "This post is not available." });  
    }
}

const addPost = async (req, res) => {
    console.log("body=>", req.body);
    const { title, content } = req.body;
    try {
        const data = await _addPost(title, content);
        getAllPosts(req, res);
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: "Can not add a post" });
    }
};

const updatePost = async (req, res) => {
    console.log("body=>", req.body);
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const data = await _updatePost(id,title, content);
        getAllPosts(req, res);
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: "Can not update a post" });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _deletePost(id);
        getAllPosts(req, res);
        if (data.length === 0)
            return res.status(404).json({ msg: "Post is not found." });
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: "Post deletion is failed." });
    }
}

module.exports = {
    getAllPosts,
    getOnePost,
    addPost,
    updatePost,
    deletePost
};