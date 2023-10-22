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

// DOM - Document Object Model
// const header = document.querySelector("h1");
// console.log(header);

// const list = document.querySelector("ul");
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.parentNode);
// console.log(list.innerHTML);

// const list = document.querySelectorAll("ul");
// for(let i of list){
//     console.log(i)
// }
// console.log(list[0]);

// const secondlist = document.getElementById("secondlist");
// console.log(secondlist);

// const myHeader = document.querySelector("#myHeader");
// console.log(myHeader.textContent);

// // Creating, adding, deleting DOM nodes
// const container = document.getElementById("container");
// const newHeader = document.createElement("h2");
// // const newTextNode = document.createTextNode("Hi I'm a new h2");
// // newHeader.append(newTextNode);
// newHeader.textContent = "Hello I'm a new header";

// container.append(newHeader);
// // remove child element --> pass the child element
// container.removeChild(newHeader);
// // remove element
// container.remove();



// EXERCISE - FOR ANOTHER HTML

// how to access div:
// way1:
// const div = document.querySelector("div");
// console.log(div);
// // way2:
// const container = document.getElementById("container");
// console.log(container);

// how to access ul nodes:
// const list = document.querySelectorAll("ul.list");
// for(let i of list){
//     console.log(i.textContent)
// }

// or

// const ulElements = document.getElementsByClassName("list");
// for(let ulElement of ulElements){
//     const liElements=ulElement.getElementsByTagName("li");
//     for (const liElement of liElements){
//         console.log(liElement.textContent);
//     }
// }

// how to access the first list element of each list:
// const list = document.querySelectorAll("list");
// for (let ul of list){
//     console.log(ul.firstElementChild)
// }

// Attributes
// const div = document.getElementById("elem");
// console.log(div.hasAttribute("id"))
// console.log(div.id)

// set and remove an attribute

// div.setAttribute("style","color:blue;");
// div.removeAttribute("style");

// div.style.color = "red";
// or
// div.style = "color:red";

// attributes exercise
// const a = document.querySelector("#dI");
// console.log(a.href);
// console.log(a.type);
// console.log(a.getAttribute("hreflang"));
// a.className = "red";
// a.classList.add("size", "red");
// a.classList.replace("red","blue");
// a.classList.remove("size");
// a.classList.remove("red");
