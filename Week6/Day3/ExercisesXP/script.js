//  Exercise 1 : Scope
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.Explain your predictions

// #1.1.
// function funcOne() {
//     let a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared with const instead of let ?

// "a" will change to 3 since it's larger than 1.
// If the variable would be declared with const we'd get an error since const can't be modified.

//#1.2.
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// #2.2 What will happen if the variable is declared with const instead of let ?

// The output would be 0 (since the funcThree calls a which is declared before the funcTwo to be 0), no visible output from funcTwo, 5 (since
// funcTwo mofied a).
// If the variable would be declared with const, we'd have 0, error.

// #3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()

// As a result we'd have hello as alert. funcFour doesn't have any visible output

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared with const instead of let ?

// As a result we get a = test in the first case. If a'd be declared as a const (outside of function) we'd have a test again.

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared with const instead of let ?

// As a result we have 2 outside of the block and 5 inside (dut to the scopes of variables declared).
// If we had a const a outside of if block, the output wouldn't change.

// Exercise 2 : Ternary Operator
// Instructions
// 2.1. Using the code below transform the winBattle() function to an arrow function.:

// function winBattle() {
//     return true;
// }

// const winBattle = () => true;

// console.log(winBattle())

// 2.2. Create a variable called experiencePoints.
// 2.3. Assign to this variable, a ternary operator.If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1

// let experiencePoints = 0;
// function getPoints(winBattle) {
//     return winBattle ? 10 : 1;
// }

// console.log(getPoints(true));

// 2.4.Console.log the experiencePoints variable.

// console.log(experiencePoints);

// Exercise 3 : Is It A String ?
// 3.1.Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not.The function should return true or false.

// function isString(input){
//     return typeof input === 'string' ? true : false;
// }

// console.log(isString('hello'));
// console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Find The Sum
// 4.1.Create a one line function (ie.an arrow function) that receives two numbers as parameters and returns the sum.

// const findSum = (x,y) => x + y;

// console.log(findSum(1,2));

// Exercise 5 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.

// function kgToGDeclaration(y){
//     console.log(`${y} kg is ${y * 1000} g (function declaration).`)
// }

// kgToGDeclaration(10);

// Then, use function expression and invoke it.

// const kgToGExpression = function(i){
//     console.log(`${i} kg is ${i * 1000} g (function expression).`)
// }

// kgToGExpression(10);

// Write in a one line comment, the difference between function declaration and function expression.
// Function declaration requires us to use "function" key word and expression means that we define it as const and "function".

// Finally, use a one line arrow function and invoke it.

// const kgToG = (x) => `${x} kg is ${x*1000} g (one line function).`;
// console.log(kgToG(10));

// Exercise 6 : Fortune Teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids.

// (function (numberKids, partnerName, city, job) {
//     console.log(`You will be a ${job} in ${city}, and married to ${partnerName} with ${numberKids} kids.`);
// })("2", "David","Tel Aviv","developer")

// Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// 7.1. Create a Navbar in your HTML file.
// 7.2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// 7.3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.


(function (userName) {
    console.log(userName);
    let navBar = document.getElementById("navBar");
    const newLi = document.createElement("li");
    firstNameLi.textContent = firstNameVal;
    
    // console.log(`You will be a ${job} in ${city}, and married to ${partnerName} with ${numberKids} kids.`);
})(prompt("What's your username?"))




// ask in prompt user name
// profile picture - something stored in function (append image and the name into the )