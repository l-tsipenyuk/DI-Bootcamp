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
let userAnswer = prompt("How old are you?")
if (userAnswer == 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!")
}else if (userAnswer > 18){
    alert("Powering On. Enjoy the ride!")
}else{
    alert("Sorry, you are too young to drive this car.Powering off")
}
