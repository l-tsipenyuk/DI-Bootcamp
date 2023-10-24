//scopes - function scope
// let y = 2;

// function scope() {
//   console.log("this is a local scope");
//   console.log("this is a block scope");
//   let x = 2;
//   function newFunc() {
//     console.log(x);
//   }
// }
// console.log(x);

//Access before decleration
// function doSomthing() {
//   console.log(x);
//   var x = 1;
//   console.log(x);
// }

// doSomthing();

// function doSomthing() {
//   console.log(x);
//   let x = 1;
//   console.log(x);
// }

// doSomthing();
// var num = 8;
// var num = 10;

// console.log(num);

//Exercise
// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young.";
//     return message;
//   } else {
//     const message = "Yay! You're old enough!";
//     return message;
//   }
// }

// console.log(checkAge(21));

//Exercise
// function numbers() {
//   for (let i = 0; i < 5; i += 1) {
//     console.log(i);
//   }
//   console.log(i);
// }
// numbers();

//Functions in Javascript- Default Params

// function multiply(a, b = 2) {
//   return a * b;
// }

// console.log(multiply(2, 10));

//Terinary Operator
// function getFee(isMember) {
//   if (isMember) {
//     return "$2.00";
//   } else {
//     return "$10.00";
//   }
// }

// console.log(getFee(false));

// function getFeeTerinary(isMember) {
//   return isMember ? "$2.00" : "$10.00";
// }

// console.log(getFeeTerinary(false));

// function checkDrivingAge(age) {
//   return age >= 18 ? "You can drive" : "You cant drive";
// }

// console.log(checkDrivingAge(18));

//Strings in Javascript
// let myName = "Daniel";
// console.log("Hello my name is " + myName + "NO GO DOWN LINE :(");
// console.log(`Hello my name is ${myName}
// Hello again from different line
// ACTUALLY GO DOWN A LINE :)
// `);

//Functions:
// function funcName() {
//   console.log("This is a Function Decleration");
// }

//Function Expression

// const funcName1 = function () {
//   console.log("This is a Function Expression");
// };
// funcName1();

//Arrow Function
// function myFunc(x, y) {
//   return x + y;
// }

// const myFunc1 = (x, y) => {
//   return x + y;
// };

// myElement.addEventListener("click",function (){
//    'do something...'
// })

// myElement.addEventListener("click",()=>{

// })

//Implicit return

// const show = (x, y) => {
//   return x + y;
// };

// console.log(show(1, 2));

//one liner return without needing return keyword.

// const show = (x, y) => x + y;
// console.log(show(1, 2));

// const basicMath = () => 1 + 1;

//Functions
// const say = function () {
//   console.log("hello");
// };
// say();

//Functions get hoisted to the top of the page
// greet();
// function greet() {
//   console.log("hello");
// }

// console.log(x);
// let x = 2;

//Immediate Function ->Self Invoking Functions

// (function (name) {
//   alert(`Hello ${name}`);
// })("Sarah");

//Nested Functions:
// function makeMilkshake(size) {
//   function flavor(myFlavor) {
//     return `You want a ${size} milkshake with ${myFlavor} icecream`;
//   }
//   console.log(x);
//   return flavor("chocolate");
// }

// console.log(makeMilkshake("big"));

//Exercise:
// function add() {
//   let counter = 0;
//   function plus() {
//     counter += 1;
//     console.log(counter);
//   }
//   plus();
// }

// add();

// let add = (function () {
//     let counter = 0;
//   function calculus() {
//     counter += 1;
//     return counter;
//   }
//   return calculus;
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// const add = a => b => a + b;

//Currying
// const multiply = (n, m) => n * m;
// console.log(multiply(3, 4) === 12); // true

// const curryedMultiply = (n) => (m) => multiply(n, m);
// let triple = curryedMultiply(3);

// console.log(triple);
// console.log(triple(3));

//Pass by Val or Ref

// let a = 1;
// let b = a;
// b += 1;
// console.log(a);

// console.log(b);
//Spread Operator-> Creating a copy of an arr's value and not refrenceing same place in memory
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// arr2.push(4);
// console.log(`arr1: ${arr1}`);
// console.log(`arr2: ${arr2}`);

//Objects:
// let user = new Object();
// console.log(user);
// let newObj = { name: "daniel" };
// console.log(newObj.name);

//Dot-Notation
// let user = new Object();

// user.name = "Daniel";
// user.age = 26;
// user.favoriteFood = "Fried Chicken";
// console.log(user);
// user.name = "Sam";
// console.log(user);

// //Bracket-Notation
// user["name"] = "Bob";
// console.log(user);

// let obj={
//     "first name":"daniel"
// }

//Property shorthand

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// console.log(makeUser("Daniel", 26));

// function makeUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// console.log(makeUser("Daniel", 26));
// let myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;

// for (let i in myCar) {
//   console.log(myCar[i]);
// }
// const person = {
//   name: "Lydia",
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }

//Javascript more methods-
//Array method:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.includes("mango"));

//String method:
// let text = "Hello world, welcome to the universe.";

// console.log(text.includes("world, "));

let text = "Visit Microsoft!";
console.log(text.replace("Microsoft", "Developers.Institute"));

console.log(text.padStart(30, "banana"));
console.log(text.padEnd(30, "banana"));
