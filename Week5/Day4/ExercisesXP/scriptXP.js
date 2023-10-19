// Exercise 1 : List Of People

// const people = ["Greg", "Mary", "Devon", "James"];

// // 1.1. Write code to remove “Greg” from the people array.
// people.splice(0,1);
// console.log(people);

// // 1.2. Write code to replace “James” to “Jason”.
// people.splice(2,1,"Jason");
// console.log(people);

// // 1.3. Write code to add your name to the end of the people array.
// people.push("Liya");
// console.log(people);

// // 1.4. Write code that console.logs Mary’s index.take a look at the indexOf method on Google.
// let maryInd = people.indexOf("Mary");
// console.log(maryInd);

// // 1.5. Write code to make a copy of the people array using the slice method.
 
// let copy = people.slice(1,3);
// console.log(copy);

// // 1.6.Write code that gives the index of “Foo”. Why does it return -1 ? 
// fooInd = people.indexOf("Foo");
// console.log(fooInd);

// It's -1 because there is no "Foo" in "people"

// 1.7. Create a variable called last which value is the last element of the array.
    // Hint: What is the relationship between the index of the last element in the array and the length of the array ?

// let last = people.slice(people.length-1, people.length);
// console.log(last);

// 1.8.Using a loop, iterate through the people array and console.log each person.

// for (let i in people){
//     console.log(people[i]);
// }

// 1.9. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

// for (let i of people) {
//     if (i == 'Devon') {
//         break;
//     } else {
//         console.log(i);
//     }
// }



























// console.log("Hello World");

// variables
// let x = 3;

// console.log("x");
// console.log(x);

// let y = 1;
// let Y = 2;
// console.log(y);
// console.log(Y);

// Camel Case (name of variables should start from lower letter and than from the capitals):
// let userName="Daniel";
// let myNameIs="Daniel";

// Keywords:
// let x,y;
// console.log(x);

// console.log("Like this")
// console.log('Like this (single)');

// let a = "Hello";
// let b = "World";
// let c = a + b;
// console.log(c);

// let x=1;
// let y = 2;
// console.log(x + y);

// let longString = "This is a very long string which needs " +
//     "to wrap across multiple lines because " +
//     "otherwise, my code is unreadable.";

// let longString2 = "This is a very long string which needs to wrap across multiple lines because otherwise, my code is unreadable.";

// let stringLength=longString.length;
// console.log(longString.length);
// console.log(stringLength);

//  how to get index of a word in string

// let str = "Hello, please say hello to the class";
// let upperCaseHello = str.indexOf("Hello")
// console.log(upperCaseHello)

// let lowerCaseHello = str.indexOf("hello")
// console.log(lowerCaseHello)

// let partOfString = str.substring(10,25);
// console.log(partOfString);

// let str = "Hello, Please Say Hello To The Class";
// let toLower = str.toLowerCase();
// console.log(toLower);


// Exercise1:
// let addressNumber = 6;
// let addressStreet = "Hoofien ";
// let country = "Israel";
// let globalAddress = "I live in "+addressStreet + addressNumber + ", in " + country
// let betterGlobalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;
// console.log(globalAddress)
// console.log(betterGlobalAddress)


// Number
// console.log(1*2);
// console.log(1 + 2);
// console.log(1 - 2);
// console.log(1 / 2);

// Number methods
// let op = 'me'
// let n = 1;
// console.log(isNaN(op));
// console.log(n.toString());

// Booleans
// let myName="Daniel"

// let op = Boolean(myName.length > 9)
// console.log(op);

// Comparison. " === " checks both the data type and the value
// assignment
// let x=1;
// let y="1";

// console.log(x==y);
// console.log(x === y);
// console.log(x !== y);

// let x = 1;
// let y = 2;
// x += y;
// console.log(x)


// User Interface Functions
// alert("Something");
// let userAnswer = prompt("How are you?", "Default answer");
// console.log(userAnswer);

// let isBoss=confirm("Are you the Boss?");
// console.log(isBoss);

// Arrays
// let colors = ["blue", "yellow", "purple"];
// console.log(colors);
// console.log(colors[0]);

// let sampleArray = [
//     [1,2,3],
//     [4,5,6,7],
//     [2]];

// console.log(sampleArray[0][1]);

// let colors = ["blue", "yellow", "purple"];
// console.log(colors);
// colors[0] = "pink";
// console.log(colors);

// console.log(colors.length);

// Array Methods
// let colors = ["blue", "yellow", "purple"];
// colors.push("black");
// console.log(colors);
// colors.pop();
// console.log(colors);

// let colors = ["blue", "yellow", "purple"];
// // colors.splice(1,1, "gold", "light blue");
// colors.splice(1, 0, "gold", "light blue");
// console.log(colors);

// let colors = ["blue", "yellow", "purple"];
// let favorite=colors.slice(2);
// console.log(colors);
// console.log(favorite);

// let colors = ["blue", "yellow", "purple"];
// let colorsToString=colors.toString();
// console.log(colors);
// console.log(colorsToString);

// let joined = colors.join(" ");
// console.log(joined);

// colors.unshift("BLACK");
// console.log(colors);
// colors.shift();
// console.log(colors);


// Exercise2
// let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];
// // console.log(pets[1]);
// let dogIndex = pets.indexOf('dog');
// console.log(pets[dogIndex])
// // pets.push('horse');
// pets.splice(3,1, 'horse');
// console.log(pets);
// console.log(pets.length);


// Objects
// let x = 1;
// let y = "hello";
// let obj = { name: "daniel"};

// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof obj);

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
// };

// console.log(person.firstName);
// console.log(person["age"]);

// console.log(person);
// person.firstName = "Sarah";
// console.log(person);

// person.country = "Israel";
// console.log(person)
// delete person.country;
// console.log(person);

// Exercise 3
// let userName = {
//     username: "User",
//     password: "1234"
// }
// let database = [userName]
// console.log(database)
// let newsfeed = [
//     {username: "info", timeline: "info"},
//     { username: "info", timeline: "info" },
//     { username: "info", timeline: "info" }
// ];


// Conditionals. If statement:
// let age = 19
// if (age > 18){
//     console.log("you're an adult");
// }

// If-else statement:
// let age = 18

// if (age > 18) {
//     console.log("you're an adult");
// }else{
//     console.log("you're a child");
// }

// let age = 10
// if (age === 18){
//     console.log("now you're an adult");
// }else if (age>18){
//     console.log("you're an adult")
// }else{
//     console.log("you're a child")
// }

// Exercise 4 (keyless car)
// let userAnswer = prompt("How old are you?")
// if (userAnswer == 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!")
// }else if (userAnswer > 18){
//     alert("Powering On. Enjoy the ride!")
// }else{
//     alert("Sorry, you are too young to drive this car.Powering off")
// }

// Switch Case Conditional

// let fruit = 'Apples';
// switch(fruit){
//     case 'Oranges':
//         console.log("Oranges are 59 cents a pound.");
//         break;
//     case 'Mangoes':
//     case 'Papayas':
//         console.log("Mangoes and papayas are 2.79 USD a pound.");
//         break;
//     default:
//         console.log(`Sorry we are run out of ${fruit}`);
// }

// // alternative for the same:
// if (fruit == "Oranges"){
//     console.log("Oranges are 59 cents a pound.");
// }else if(fruit == "Mangoes" || fruit == "Papayas"){
//     console.log("Mangoes and papayas are 2.79 USD a pound.");
// }else {
//     console.log(`Sorry we are run out of ${fruit}`);
// }

// let a = 2 + 2;

// switch (a) {
//     case 4:
//         alert('Right!');
//         break;

//     case 3: // (*) grouped two cases
//     case 5:
//         alert('Wrong!');
//         alert("Why don't you take a math class?");
//         break;

//     default:
//         alert('The result is strange. Really.');
// }

// Loops
// for (let i = 0; i < 10; i++) {
// console.log(`The curent number/position in the loop is ${i}`)
// }

// loop through array
// let arr = [1, 2, 3, 4, 5, 6];
// for (let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// Exercise 5 (even/odd)
// for (let i=0;i<16;i++){
//     if (i % 2 === 0){
//         console.log(`${i} is even`)
//     }else{
//         console.log(`${i} is odd`)
//     }
// }

// Loop through an object: for IN
// let person ={
//     fname:"Daniel",
//     lname:"Robin",
//     age: "26",
// };

// for (let x in person){
//     console.log(x);
//     console.log(person[x]);
// }

// for of loop: mainly for arrays:
// let colors = ['blue','yellow','pink', 'black'];
// for(let i of colors){
//     console.log(i);
// }

// While Loop
// let n=6;
// do {
//     console.log(n);
//     n++;
// } while (n<5);

// Break out of loop

// for (let i=0; i<10; i++){
//     console.log(`Before if statement: ${i}`);

//     if (i === 3) {
//         break;
//     }
//     console.log(`After if statement: ${i}`);
// }

// Continue
// for (let i = 0; i < 10; i++) {
//     if (i === 3 || i === 6) {
//         continue;
//     }
//     console.log(i);
// }


// Exercise 6 (loops)
// let variables = ['blue', 2, 'pink', 42, 'Rudolph']
// for (let i of variables) {
//     if (typeof (i) != 'string') {
//         continue;
//     } else {
//         if (i[0] !== i[0].toUpperCase()){
//             i = i[0].toUpperCase()+i.slice(1)
//         }
//         console.log(i);
//     }
// }

// for (let i of variables) {
//     if (typeof (i) != 'string') {
//         break;
//     } else {
//         console.log(i);
//     }
// }

// if (3>2){
//     let x = 2;
//     console.log(x);
// }

// console.log(x);

// let x = 2;
// console.log(x);
// x = 5;
// console.log(x);
// const y = 3;
// console.log(y);