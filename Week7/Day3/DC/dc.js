// 1rst Daily Challenge
// Create two functions.Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise.
// The value of the resolved promise is the array of words uppercased.
//     else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise.The value of the resolved promise is the 
// array of words sorted in alphabetical order.
// else, reject the promise with a reason

// function makeAllCaps(wordsArr) {
//     return new Promise((resolve, reject) => {
//         if (wordsArr.every(i => typeof i === "string")) {
//             const capitalizedArr = wordsArr.map(i => i.toUpperCase());
//             resolve(capitalizedArr);
//         } else {
//             reject("Data type in the array is invalid.")
//         }
//     });
// }

// function sortWords(capitalizedArr) {
//     return new Promise((resolve, reject) => {
//         if (capitalizedArr.length > 4) {
//             resolve(capitalizedArr.sort());
//         } else {
//             reject("The array is too short.")
//         }
//     });
// }

// makeAllCaps(["pear", "banana", "apple", "pineapple", "strawberry"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

// 2nd Daily Challenge

// 2.1. Create three functions.The two first functions should return a promise..
// 2.2. The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error(use reject)
// else return the morse javascript object(use resolve)

// 2.3.The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word

// 2.4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page(ie.On the DOM)

// const morse = `{
//   "0": "-----",
//   "1": ".----",
//   "2": "..---",
//   "3": "...--",
//   "4": "....-",
//   "5": ".....",
//   "6": "-....",
//   "7": "--...",
//   "8": "---..",
//   "9": "----.",
//   "a": ".-",
//   "b": "-...",
//   "c": "-.-.",
//   "d": "-..",
//   "e": ".",
//   "f": "..-.",
//   "g": "--.",
//   "h": "....",
//   "i": "..",
//   "j": ".---",
//   "k": "-.-",
//   "l": ".-..",
//   "m": "--",
//   "n": "-.",
//   "o": "---",
//   "p": ".--.",
//   "q": "--.-",
//   "r": ".-.",
//   "s": "...",
//   "t": "-",
//   "u": "..-",
//   "v": "...-",
//   "w": ".--",
//   "x": "-..-",
//   "y": "-.--",
//   "z": "--..",
//   ".": ".-.-.-",
//   ",": "--..--",
//   "?": "..--..",
//   "!": "-.-.--",
//   "-": "-....-",
//   "/": "-..-.",
//   "@": ".--.-.",
//   "(": "-.--.",
//   ")": "-.--.-"
// }`;

// let morseCode = [];

// function toJs() {
//     return new Promise((resolve, reject) => {
//         const morseJS = JSON.parse(morse);
//         if (morseJS) {
//             resolve(morseJS);
//         } else {
//             reject("The string is empty.");
//         }
//     });
// }

// function toMorse() {
//     return new Promise((resolve, reject) => {
//         toJs()
//             .then(morseJS => {
//                 let userAnswer = prompt("Enter your text:");
//                 let userAnswerChar = userAnswer.split('');
//                 if (userAnswerChar.every(char => morseJS.hasOwnProperty(char.toLowerCase()))) {
//                     const morseCodes = userAnswerChar.map(char => morseJS[char.toLowerCase()]);
//                     morseCode = morseCode.concat(morseCodes); 
//                     resolve(morseCode);
//                 } else {
//                     reject("One of the elements you've entered is not valid.");
//                 }
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }

// function joinWords(morseCode) {
//     if (morseCode) {
//         let morseCodeDOM = document.getElementById("morsecode");
//         let newDiv = document.createElement("div");
//         newDiv.textContent = `The Morse code for the word given is: '${morseCode.join(' ')}'.`;
//         morseCodeDOM.appendChild(newDiv);
//     } else {
//         console.error("Morse code is undefined.");
//     }
// }

// toMorse()
//     .then(morseCode => {
//         joinWords(morseCode);
//     })
//     .catch(error => {
//         console.error(error);
//     });