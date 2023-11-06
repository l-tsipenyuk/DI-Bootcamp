
emojis = [{
    "id": 1,
    "sign": "🙂",
    "name": "Slightly smiling face"
},
{
    "id": 2,
    "sign": "😀",
    "name": "Smiling face"
},
{
    "id": 3,
    "sign": "😄",
    "name": "Smiling face with smiling eyes"
},
{
    "id": 4,
    "sign": "🤓",
    "name": "Nerdy face"
},
{
    "id": 5,
    "sign": "😁",
    "name": "Beaming face with smiling eyes"
},
{
    "id": 6,
    "sign": "😅",
    "name": "Smiling face with tears"
}, {
    "id": 7,
    "sign": "😆",
    "name": "Grinning face"
}, {
    "id": 8,
    "sign": "🤣",
    "name": "Rolling on the floor laughing"
}, {
    "id": 9,
    "sign": "😂",
    "name": "Lauging with tears"
}, {
    "id": 10,
    "sign": "🙃",
    "name": "Upside down face"
}
]

const randomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

const choose = document.getElementById("choose");
const resultButton = document.getElementById("result");
const selectElement = document.getElementById("emojis");
const again = document.getElementById("again");
const scoreRight = document.getElementById("scoreRight");
const scoreWrong = document.getElementById("scoreWrong");

let newRandomEmoji;
let totalScore = [];

function randomOption() {
    const ids = [1, 2, 3, 4];
    const correctIndex = Math.floor(Math.random() * 4);
    const correctId = ids[correctIndex];
    ids.splice(correctIndex, 1);
    const correctOption = document.getElementById(correctId);
    newRandomEmoji = randomEmoji();
    choose.textContent = `Choose the correct name for this emoji:${newRandomEmoji.sign}`
    correctOption.textContent = newRandomEmoji.name;
    correctOption.value = newRandomEmoji.name;
    const correctEmojiId = newRandomEmoji.id;
    const wrongEmojis = emojis.filter(emoji => emoji.id !== correctEmojiId);

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * ids.length);
        const randomId = ids[randomIndex];
        const otherOption = document.getElementById(randomId);

        const randomWrongEmojiIndex = Math.floor(Math.random() * wrongEmojis.length);
        otherOption.textContent = wrongEmojis[randomWrongEmojiIndex].name;
        otherOption.value = wrongEmojis[randomWrongEmojiIndex].name;

        ids.splice(randomIndex, 1);
        wrongEmojis.splice(randomWrongEmojiIndex, 1);
    }
}

function runTheProgram() {
    randomOption();
    resultButton.textContent = "Your result";
    resultButton.style.backgroundColor = "";
    selectElement.selectedIndex = 0;
}

selectElement.addEventListener("change", function () {
    const selectedOption = selectElement.value;
    if (selectedOption === newRandomEmoji.name) {
        resultButton.textContent = "Correct!";
        resultButton.style.backgroundColor = "green";
        totalScore.push({ correct: true });

        const correctAnswers = totalScore.filter(score => score.correct).length;
        scoreRight.textContent = `Correct answers: ${correctAnswers}`;
    } else {
        resultButton.textContent = "Wrong :(";
        resultButton.style.backgroundColor = "red";
        totalScore.push({ correct: false });

        const wrongAnswers = totalScore.filter(score => !score.correct).length;
        scoreWrong.textContent = `Wrong answers: ${wrongAnswers}`;
    }
});

again.addEventListener("click", function () {
    runTheProgram();
});

runTheProgram(); 
