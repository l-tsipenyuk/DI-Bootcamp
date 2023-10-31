// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument. 
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.

// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//         if (num <= 10) {
//             resolve("The number is equal or less than 10.")
//         } else {
//             reject("Reject: the number is greater than 10.")
//         }
//     })
// };

// compareToTen(12)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

// let successPromise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("success");
//         resolve("success");
//     }, 4000);
// });

// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

// let newPromise = new Promise((resolve, reject) =>{
//     resolve(3);
// })

// let newPromiseReject = new Promise((resolve, reject) => {
//     reject("Boo!");
// })

// newPromiseReject
//     .catch(error => console.log(error))

// console.log(newPromise);
// console.log(newPromiseReject);