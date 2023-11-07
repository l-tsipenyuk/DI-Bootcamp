import { emojis } from "../config/emojis.js"

export const getRandomOptions = (req, res) => {

    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];

    const options = generateOptions(randomEmoji.name);

    res.json({ emoji: randomEmoji });
};

export const guess = (req, res) =>{
    const {name, quess} = req.body;

}

function generateOptions(currentEmoji) {
    const options = emojis.filter(item => {
        return item.name != currentEmoji
    });
    return options
}