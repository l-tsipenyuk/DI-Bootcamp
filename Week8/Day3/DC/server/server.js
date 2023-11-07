const express = require("express");
const cors = require("cors");
require("dotenv").config();

const quest_router = require("./routes/questions_routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", quest_router);

let userScore = 0;

console.log("Start")

app.get("/api/test", (req, res) => {
    console.log("req", req)
    res.json({ message: "Wrong answer again" });
})

app.post("/api/test2/:id/submit", (req, res) => {
    const { id } = req.params;
    const { answer } = req.body;
    const question = questions.find((item) => item.id == id);
    if (answer === question.answer) {
        userScore++;
        console.log("Catbug", userScore)
        res.json({ message: "Correct answer!", userScore });

    } 
    // else {
        // console.log("Catbug", userScore)
        // res.json({ message: "Wrong answer." });
        
    // }
    console.log("req", req.params, req.body, id, answer, question)
    // res.json({ message: "Test2 submit" });
})

app.post("/api/questions/:id/submit", (req, res) => {
    console.log("Catbug0", userScore)
    const { id } = req.params;
    const { answer } = req.body;
    const question = questions.find((item) => item.id == id);

    if (!question) {
        return res.status(404).json({ message: "Question not found" });
    }

    if (answer === question.answer) {
        userScore++;
        console.log("Catbug", userScore)
        res.json({ message: "Correct answer!", userScore });
    } else {
        res.json({ message: "Wrong answer." });
    }
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`running on port ${process.env.PORT || 3001}`);
});

module.exports = {
    userScore
};
