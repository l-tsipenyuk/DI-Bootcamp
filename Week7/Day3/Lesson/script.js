//Call Stack
// function thirdFunc() {
//   console.log("Greetings from thirdFunc()");
// }

// function secondFunc() {
//   thirdFunc();
//   console.log("Greetings from secondFunc()");
// }

// function firstFunc() {
//   secondFunc();
//   console.log("Greetings from firstFunc()");
// }

// firstFunc();

//Asynchronous Programming- SetTimeout WEBAPI

// console.log("Start of script");

// setTimeout(() => {
//   console.log("First timeout completed");
// }, 2000);

// // alert("I am in the middle.");

// console.log("End of script");

//Callback Functions

// [1, 2, 3].forEach((e) => {
//   console.log(e);
// });

//Promises
// let goodGrades = true;

// let endSemester = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (goodGrades) {
//       resolve("I will get a gift");
//     } else {
//       reject("I won't get the gift");
//     }
//   }, 5000);
// });

// console.log("not blocking rest of the code");

// document.getElementById("btn").addEventListener("click", () => {
//   console.log(endSemester);
// });

//Consuming a promise
// let goodGrades = 80;

// let endSemester = new Promise((resolve, reject) => {
//   if (goodGrades > 90) {
//     resolve("Computer");
//   } else if (goodGrades > 80 && goodGrades <= 89) {
//     resolve("Phone");
//   } else {
//     reject("I won't get the gift");
//   }
// });

// endSemester
//   .then((data) => `My gift is ${data}`)
//   .then((data2) => {
//     console.log(data2);
//   })
//   .catch((e) => console.log(e))
//   .finally(() =>
//     console.log(`No matter if I get a gift or not,
// I want to have good grades`)
//   );

//Chaining Promises
// let bankAmount = 1000;
// let expense = 5000;

// let bankPromise = new Promise((resolve, reject) => {
//   if (expense < bankAmount) {
//     resolve(expense);
//   } else {
//     reject("Rejected by the Bank");
//   }
// });

// //1st "then"
// bankPromise
//   .then((result) => {
//     //result is the argument passed in the resolve function
//     console.log(`The expense is ${result} dollars`);
//     return result * 1.17;
//     //2nd "then"
//   })
//   .then((resultTwo) => {
//     //resultTwo is the expense including taxes
//     console.log(`The expense included taxes is ${resultTwo} dollars`);
//     bankAmount -= resultTwo;
//     console.log(`I have ${bankAmount} dollars left in the bank`);
//     return bankAmount;
//   })
//   .then((result) => console.log(result))
//   .catch((error) => {
//     console.log(`We have a problem : ${error}`);
//   });

//-----------------------------------------------------------------
// let bankAmount = 1000;
// let expense = 500;

// let bankPromise = new Promise((resolve, reject) => {
//   if (expense < bankAmount) {
//     resolve(expense);
//   } else {
//     reject("Rejected by the Bank");
//   }
// });

// bankPromise
//   .then((result) => {
//     console.log(`The expense is ${result} dollars`);
//     hello; //undefined variable
//     return result * 1.17;
//   })
//   .then((resultTwo) => {
//     console.log(`The expense included taxes is ${resultTwo} dollars`);
//     bankAmount -= resultTwo;
//     console.log(`I have ${bankAmount} dollars left in the bank`);
//     return bankAmount;
//   })
//   .catch((error) => {
//     console.log(`We have a problem : ${error}`);
//   });

//Promise.all

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve("userInfo"), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve("userImage"), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve("userSettings"), 1000)), // 3
//   new Promise((resolve, reject) => setTimeout(() => reject("The promise was rejected "), 4000)), // 4
// ])
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

//Promise.allSettled

// Promise.allSettled([
//   new Promise((resolve) => setTimeout(() => resolve("userInfo"), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve("userImage"), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve("userSettings"), 1000)), // 3
//   new Promise((resolve, reject) => setTimeout(() => reject("The promise was rejected "), 4000)), // 4
// ])
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

//Promise.resolve/reject

// Promise.resolve("my value-resolved").then((data) => console.log(data));
// Promise.reject("my value-rejected").catch((e) => console.log(e));

//Examples Of Promises:

// const flip = () => {
//   let x = Math.floor(Math.random() * 2) == 0;
//   if (x) {
//     return "heads";
//   } else {
//     return "tails";
//   }
// };

// const flipACoin = new Promise((resolve, reject) => {
//   const flipResult = flip();
//   if (flipResult) {
//     resolve(flipResult);
//   } else {
//     reject(flipResult);
//   }
// });

// flipACoin.then((data) => console.log("the coin flip is " + data)).catch((err) => console.log(err));
// console.log("I'm about to flip a coin!");

//-------------------------------------------------------------------------
// const flip = () => {
//   let x = Math.floor(Math.random() * 2) == 0;
//   if (x) {
//     return "heads";
//   } else {
//     return "tails";
//   }
// };

// const flipACoin = new Promise((resolve, reject) => {
//   const flipResult = flip(); //let's say flip() takes a few seconds

//   if (flipResult) {
//     resolve(flipResult);
//   } else {
//     reject();
//   }
// });
// //
// //...
// //do other things
// //...
// //
// console.log("Wait, did I flip the coin?");
// //
// flipACoin.then((flipResult) => {
//   console.log("Oh I did!");
//   // console.log(flipResult);
// });
// //
// console.log("Double checking...");
// // //
// flipACoin.then((flipResult) => {
//   console.log("Okay I definitely did!");
//   // console.log(flipResult);
// });

//Promise.race()

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 1 resolved"), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 2 resolved"), 500);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise 3 rejected"), 400);
// });

// const promises = [promise1, promise2, promise3];
// Promise.race(promises)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));
