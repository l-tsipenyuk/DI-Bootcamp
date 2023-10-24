// Access to variables before declaration
// function doSmth(){
//     console.log(x);
//     var x = 1;
//     // console.log(x);
// }

// doSmth()

// function numbers() {
//     for (var i = 0; i < 5; i += 1) {
//         console.log(i);
//     }
//     console.log(i);
// }
// numbers();

// Terinary Operator
// how did we do it
// function getFee(isMember){
//     if (isMember){
//         return "2$";
//     }else{
//         return "10$";
//     }
// }

// console.log(getFee(true));

// and with terinary operator:
// function getFee(isMember) {
// return(isMember? "2$":"10$");}
// console.log(getFee(true));

// Example 1
// function lifeYear(isYear) {
//     return (isYear ? "You are in the 21st century" : "You live in the Middle Age");
// }

// function isYear(year) {
//     if (year > 2000) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(lifeYear(1990));

// Functions
// function functName(){
//     console.log("This is a function declaration.");
// }

// // Function Expression

// const funcName = function(){
//     console.log("This is a function declaration.");
// }
// funcName();

// Arrow Function

// const myFunc1 = (x,y) =>{
//     return x+y;
// };

// using => instead of "function" key word
// myElement.addEventListener("click",()=>{

// })

// one liner
// const show=(x,y)=>x + y;
// console.log(show(1,2));


// greet()
// function greet() {
//     console.log("hello");
// }

// nested functions (functions inside functions)
// function makeMilkshake(size){
    
//     function flavor(myFlavor){
// let x=2;
//     }
// }

// Example
// const multiply = (n, m) => (n * m)
// multiply(3, 4) === 12 // true

// const curryedMultiply = (n) => (m) => multiply(n, m)
// let triple = curryedMultiply(3)
// triple(4) === 12 // true


// Pass by val or ref

// Objects
// let user = new Object();
// console.log(user);
// let newObj = {name: "daniel"};
// console.log(newObj.name);

// user.age = 26;

// Bracket-Notation
// user["name"] = "Bob";
// console.log(user)
// user.name = "Sam";
// console.log(user)

// function makeUser(name,age){
//     return{
//         name,
//         age,
//     };
// }
// console.log(makeUser("Daniel",26))

// function showProps(obj, objName) {
//     let result = '';
//     for (let i in obj) {
//         // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//         if (obj.hasOwnProperty(i)) {
//             result += `${objName}.${i} = ${obj[i]}\n`;
//         }
//     }
//     return result;
// }

// showProps(myCar, "myCar")

// myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;

// for (let i in myCar) {
//     console.log(myCar[i]);
// }

// some of JS methods
const fruits = ["Banana", "Apple"];
console.log(fruits.includes("Mango"));