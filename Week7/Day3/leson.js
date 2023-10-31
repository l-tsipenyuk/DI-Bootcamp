// function thirdFunc() {
//     console.log("Greetings from thirdFunc()");
// }

// function secondFunc() {
//     thirdFunc();
//     console.log("Greetings from secondFunc()");
// }

// function firstFunc() {
//     secondFunc();
//     console.log("Greetings from firstFunc()");
// }

// firstFunc();

// Asynchoronous programming

// This is example of a synchoronous. The code won't go to the end untill we deal with an alert.

// console.log("Start of script");

// setTimeout(function () {
//     console.log("First timeout completed");
// }, 2000);

// alert("I am in the middle.");

// console.log("End of script");

// Callback function
// [1, 2, 3].forEach((e) => {
//     console.log(e);
// });

// Promise

// let goodGrades = true;

// let endSemester = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (goodGrades) {
//             resolve("I will get a gift");
//         } else {
//             reject("I won't get the gift");
//         }
//     }, 5000);
// });

// console.log(endSemester)

// document.getElementById("button1").addEventListener("click", ()=> {
//     console.log(endSemester);
// });

// // Consuming a Promise

// let goodGrades = 50;

// let endSemester = new Promise((resolve, reject) => {
//     if (goodGrades > 90) {
//         resolve("Computer");
//     } else if (goodGrades > 80 && goodGrades <= 89) {
//         resolve("Phone");
//     } else {
//         reject("I won't get the gift");
//     }
// });

// endSemester.then((data)=>console.log(`My gift is ${data}.`));
// endSemester.catch((e)=>console.log());
// endSemester.finally(() => console.log("No matter if I get a gift or not, I want to have good grades"));


// let bankAmount = 1000
// let expense = 500

// let bankPromise = new Promise((resolve, reject) => {
//     if (expense < bankAmount) {
//         resolve(expense);
//     } else {
//         reject("Rejected by the Bank");
//     }
// });

//1st "then"
// bankPromise.then((result) => {
//     //result is the argument passed in the resolve function
//     console.log(`The expense is ${result} dollars`);
//     return result * 1.17;
//     //2nd "then"
// }).then((resultTwo) => {
//     //resultTwo is the expense including taxes
//     console.log(`The expense included taxes is ${resultTwo} dollars`);
//     bankAmount -= resultTwo;
//     console.log(`I have ${bankAmount} dollars left in the bank`);
//     return bankAmount;
// }).catch((error) => {
//     console.log(`We have a problem : ${error}`)
// });


const flip = () => {
    let x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        return "heads";
    } else {
        return "tails";
    }
}

const flipACoin = new Promise((resolve, reject) => {
    const flipResult = flip();
    if (flipResult) {
        resolve(flipResult);
    } else {
        reject(flipResult);
    }
});

flipACoin.then((data) => console.log(`The coin flip is ${data}.`)).catch((err)=>console.log(err));
console.log("I'm about to flip a coin!");