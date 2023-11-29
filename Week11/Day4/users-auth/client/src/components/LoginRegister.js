import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Box, TextField, Button } from "@mui/material";



const LoginRegister = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    const loginregister = async () => {
        if (props.title === "Register") {
            try {
                const response = await axios.post('/users/register', { email, password })
                if (response.status === 200) {
                    setMsg('');
                    navigate('/login')
                }
            } catch (e) {
                console.log(e);
                setMsg(e.response.data.msg);
            }
        } else {

        }
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <Box component={'form'} sx={{ m: 1 }} noVaidate autoComplete="off">
                <TextField sx={{ m: 1 }} id="email" type="email" label="Enter Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}>
                </TextField>
                <TextField sx={{ m: 1 }} id="password" type="password" label="Enter password" variant="outlined" onChange={(e) => setPassword(e.target.value)}>
                </TextField>
            </Box>
            <Button variant="contained" onClick={loginregister}>{props.title}</Button>
            <div></div>
        </div>
    );
};

export default LoginRegister;