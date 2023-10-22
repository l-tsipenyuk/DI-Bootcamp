// Functions

// function drinkCoffee(){
//     console.log("The user drinks coffee in the morning.");
// }

// drinkCoffee();

// With parameters:

// function drinkCoffee(username, coffees){
//     console.log(`The user ${username} drinks ${coffees} coffees in the morning.`);
// }

// drinkCoffee("Danny123", "3");

// More parameters:

// function calculate (a,b,c){
//     console.log(a + b + c);
// }

// calculate(1,2,3);

// function userInfo(userName, userAge=26) {
//     console.log(`My name is ${userName}, my age is ${userAge}.`);
// }

// userInfo("Sarah");

// Variables (local and global):

// function userMoreInfo(username, userAge){
//     let eyeColor = "blue";
//     console.log(`My name is ${username}, my age is ${userAge} and my eye color is ${eyeColor}.`)
// }

// userMoreInfo("dani",12);

// Exrcise1
// function parentsAge(myAge){
//     let mumAge = myAge * 2;
//     let dadAge = mumAge * 1.2;
//     console.log(`The age of my mum is ${mumAge}, the age of my dad is ${dadAge}`);
// }
// parentsAge(26)

// Return statement

// function userInfo(userName, userAge) {
//     let result = "My name is " + userName + ", my age is " + userAge;
//     return result;
// }

// let girlInfo = userInfo("Sarah", 22);
// console.log(girlInfo); 

// function calculate(x,y){
//     return x + y;
// }

// console.log(calculate(2,2));

// Exercise2
// function mumAge(myAge){
//     let mumAge = myAge*2;
//     return mumAge
// }

// mumAge(12)
// console.log(mumAge(12))

// try, catch, finally - Exceptions

// function func (){
//     try{
//         console.log("Start of function");
//         thisisanerror;
//         console.log("End of function");
//     } catch(e){
//         console.log(e.name);
//         console.log(e.message);
//         console.log(e.stack);
//     }finally{
//         console.log("is going to run regardless of error/nonerror");
//     }
// }

// func();

// the throw operator

// function throwsError(){
//     try{
//         console.log("start of a function")
//         throw new Error("This is an error :(")
//     }catch(e){
//         console.log(e);
//     }
// }

// throwsError();

// Objects

// let person = {
//     name: "Daniel",
//     age: "26",
//     country: "Israel",
//     eat: function(){
//         console.log("I love sushi")
//     },
// }
// // console.log(obj.name)
// person.eat();

// Objects: This keyword

// let person = {
//     name: "Daniel",
//     age: "26",
//     country: "Israel",
//     eat: function () {
//         console.log(`My name is ${this.name} and I love sushi.`)
//     },
// }

// person.eat();

