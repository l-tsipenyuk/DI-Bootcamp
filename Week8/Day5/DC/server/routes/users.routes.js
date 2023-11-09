const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const {
    registerUsers,
    loginUsers,
    getAllUsers,
    getUserID
} = require("../controllers/users.controllers.js");

router.post("/register/", registerUsers);

router.post("/login/", loginUsers);

router.get("/users/", getAllUsers);

router.get("/users/:id", getUserID);



module.exports = router;