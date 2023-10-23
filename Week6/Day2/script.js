// Example: reacting on event (button)

// function inform(){
//     alert("You clicked me");
// }
// const button=document.querySelector("button");
// button.style = "color:red";
// // !not to call the function below here!
// button.onclick = inform;

// Mouse Over
// function mouseOver(){
//     console.log("Hello");
// }

// Exercise 1

// function insertRow(){
//     const list = document.getElementById("sampleTable");
//     const newTr = document.createElement("td");
//     const textNode = document.createTextNode("New Row");
//     newTr.appendChild(textNode);
//     list.appendChild(newTr);
// }

// another (better) option but with a bug...:

// const table = document.getElementById("sampleTable");
// let rowPos = 2;
// function insertRow() {
//     rowPos++;
//     const row = document.createElement("tr");
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     td1.textContent = `Row${rowPos} cell1`;
//     td2.textContent = `Row${rowPos} cell2`;
//     table.append(row);
//     row.append(td1, td2);
// }

// Example1
// let btn=document.getElementById("btn");
// let btn1 = document.getElementById("btn1");

// function respondClick(){
//     alert("button clicked");
// }

// function respondMouseOver(e){
//     console.log(e);
//     // alert("Mouse is over the button");
// }

// function respondMouseOut(){
//     alert("Mouse is out of button 2");
// }

// // btn.addEventListener("click",respondClick);
// btn.addEventListener("mouseover", respondMouseOver);

// // btn1.addEventListener("click", respondClick);
// btn1.addEventListener("mouseover", respondMouseOver);
// btn1.addEventListener("mouseout", respondMouseOut);

// Exercise 2
// const button = document.getElementById("jsstyle");

// function respondClick(e) {
//     button.style.color = "red";
//     e.target.style.color = "red";
// }

// function respondMouseOver(e) {
//     e.target.style.border = "1px solid green";
// }

// button.addEventListener("click", respondClick);
// button.addEventListener("mouseover", respondMouseOver);

// Example 2
// let btn = document.getElementById("btn")
// let div = document.getElementById("div")
// let section = document.getElementById("section")


// function btnRespondClick(e) {
//     alert("BTN is Clicked");
//     e.stopPropagation();
// }

// function divRespondClick(_e) {
//     alert("DIV is Clicked")
// }

// function sectionRespondClick(e) {
//     alert("SECTION is Clicked")
// }

// btn.addEventListener("click", btnRespondClick);
// div.addEventListener("click", divRespondClick);
// section.addEventListener("click", sectionRespondClick);

// Exercise 3
// let btn = document.getElementById("jsstyle")

// function btnRespondClick(e) {
//     alert("BTN is Clicked");
//     e.stopPropagation();
// }

// function newStyle(e) {
//     btn.style.color = "blue";
//     e.target.style.color = "blue";
// }

// btn.addEventListener("click", btnRespondClick);
// btn.addEventListener("click", newStyle);

// Form Manipuation: Examples
// let newInput = document.getElementById('myinput');
// const result = document.getElementById('result')
// newInput.addEventListener("input",function() {
// result.textContent = myinput.value;
// });

// Prevent default behaviour in forms
// const form = document.forms.my;
// function getUserComments(e){
//     console.log(e.target);
// }

// form.addEventListener("submit",getUserComments);


// const form  = document.getElementsByTagName('form')[0];
// const email = document.getElementById("mail");
// const name = document.getElementById("name");

// email.addEventListener("input", function (event) {
//     if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//     } else {
//     email.setCustomValidity("");
//     }
//   });

// form.addEventListener("submit", function (event) {
//     if(!email.validity.valid) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//     } else {
//     email.setCustomValidity("");
//     }
//   });

// function sayHi(phrase, who){
//     alert(`${phrase} to ${who}`)
// }

// setTimeout(sayHi,3000, "Hello", "Rina");

// const button = document.querySelector("button")
// button.addEventListener("click", clearTimeout)


// for sale
// setTimeout(function (){
// const h1 = document.querySelector("h1");
// h1.style.display = "block"},5000);

// const button = document.querySelector("button")
// setInterval(function() {
//     console.log("5 sec have passed...");
// }, 1000);

// button.addEventListener("click",function (){
//     clearInterval(id);
// });

// Animations(box)
let position = 0;
let id = setInterval(function () {
    if (position == 300) {
        clearInterval(id);
    } else {
        position += 1;
        child.style.left = position + "px";
        child.style.top = position + "px";
    }
}, 10)