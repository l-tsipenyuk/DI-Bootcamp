const { db } = require("../config/db.js");

const _getAllPosts = () => {
    return db("posts").select("id", "title", "content").orderBy("title");
};

const _getOnePost = (id) => {
    return db("posts").select("id", "title", "content").where({ id });
};

const _addPost = (title, content) => {
    return db("posts").insert({ title, content }, ["id", "title", "content"]);
};

const _updatePost = (id, title,content) => {
    return db("posts").update({ title, content }, ["id", "title", "content"]).where({ id });
}

const _deletePost = (id) => {
    return db("posts").del("id", "title", "content").where({ id });
}

module.exports = {
    _getAllPosts,
    _getOnePost,
    _addPost,
    _updatePost,
    _deletePost
};