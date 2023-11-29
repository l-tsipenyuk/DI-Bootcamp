import { register } from "../models/users.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import u_router from "../routes/users.router";
dotenv.config();


export const _register = async (req, res) => {
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


