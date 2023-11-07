const ul = document.getElementById("ul");

async function fetchData() {
    try {
        const data = await fetch("http://localhost:3000/api/questions/1");
        const parsedData = await data.json();
        console.log(`This is from the server: ${JSON.stringify(parsedData)}`);
        const question = document.getElementById("question");
        question.textContent = parsedData.question;
    } catch (err) {
        console.error("An error occurred:", err);
    }
}

const next = document.getElementById("next");
const submit = document.getElementById("submit");
let startingPoint = 1;
let questionId = 1;

next.addEventListener("click", async function (e) {
    try {
        submit.disabled = false;
        next.textContent = "Next";
    
            const data = await fetch(`http://localhost:3000/api/questions/${startingPoint}`);
            const parsedData = await data.json();

            const question = document.getElementById("question");
            const answer = document.getElementById("answer");

            if (parsedData.question) {
                question.textContent = parsedData.question;
                answer.textContent = "";
                startingPoint++;

                questionId = parsedData.id;
            } else {
                question.textContent = "All questions answered!";
                next.disabled = true;
                submit.disabled = true;

                getUserScore();
            }
    } catch (err) {
        console.error("An error occurred:", err);
    }
});

async function getUserScore() {
    try {
        const response = await fetch("http://localhost:3000/api/test/score");

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            const userScore = data.userScore;

            container = document.getElementById("container");
            newDiv = document.createElement("div");
            newDiv.textContent = `Your score is ${userScore}/5.`;
            container.appendChild(newDiv);
            // console.log("User's score: " + userScore);
        } else {
            console.error("Failed to get user score.");
        }
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", async (event) => {
    event.preventDefault();
    const answerInput = document.getElementById("answer");
    const answer = answerInput.value;

    try {
        const response = await fetch(`http://localhost:3000/api/test/${questionId}/submit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ answer }),
        });

        if (response.ok) {
            console.log("Answer submitted!!!", response);
        } else {
            console.error("Answer is not submitted. Again...");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});


