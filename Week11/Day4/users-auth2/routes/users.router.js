import express from "express";
// import { register } from "../models/users.model";
// import { _register } from "../controllers/users.controller";

const register = (email, password) => {
    return db('users')
        .insert({ email, password }, ['id', 'email', 'password'])
};


 const _register = async (req, res) => {
    const { email, password } = req.body;

    const loweremail = email.toLowerCase();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password + "", salt);

    try {
        const row = await register(loweremail, hash);
        res.json(row);
    } catch (e) {
        console.log('_register=>', e);
        res.status(404).json({ msg: 'email already exists' })
    }

}

const u_router = express.Router();

u_router.post('/register', _register);

export default u_router;
