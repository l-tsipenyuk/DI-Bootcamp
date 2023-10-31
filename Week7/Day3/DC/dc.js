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