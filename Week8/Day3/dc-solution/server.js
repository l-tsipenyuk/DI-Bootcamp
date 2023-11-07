import express from "express";
import dotenv from "dotenv"
import router from "./routes/emojis.js"

dotenv.config();

const app = express();

app.use("/emojis", router);

app.listen(process.env.PORT, () =>{
    console.log(`run on ${process.env.PORT}`)
})

