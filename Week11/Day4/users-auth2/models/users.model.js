import { db } from "../config/db";

export const register = (email, password) => {
    return db('users')
        .insert({ email, password },['id','email','password'])
};

