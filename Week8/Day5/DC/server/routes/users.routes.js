const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const {
    registerUsers,
    loginUsers,
    getAllUsers,
    getUserID,
    updateUser
} = require("../controllers/users.controllers.js");

router.post("/register/", registerUsers);

router.post("/login/", loginUsers);

router.get("/users/", getAllUsers);

router.get("/users/:id", getUserID);

router.put("/users/:id", updateUser);



module.exports = router;