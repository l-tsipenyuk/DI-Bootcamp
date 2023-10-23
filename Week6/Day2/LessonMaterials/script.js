//Event Listener
// function inform() {
//   alert("You clicked me!");
// }

// const button = document.querySelector("button");
// button.onclick = inform;

//Mouse Over
// function mouseOver() {
//   console.log("Mouse is over the h1");
// }

//Exercise 1
// const table = document.getElementById("sampleTable");
// let rowPos = 2;
// function insertRow() {
//   rowPos++;
//   const row = document.createElement("tr");
//   const td1 = document.createElement("td");
//   const td2 = document.createElement("td");
//   td1.textContent = `Row${rowPos} cell1`;
//   td2.textContent = `Row${rowPos} cell2`;
//   table.append(row);
//   row.append(td1, td2);
// }

//Add event Listener

// let btn = document.getElementById("btn");
// let btn1 = document.getElementById("btn1");

// function respondClick() {
//   alert("button clicked");
// }
// function respondMouseOver(e) {
//   console.log(e);
//   console.log(e.target);
// }

// function respondMouseOut() {
//   alert("My mouse is out of the btn");
// }

// // btn.addEventListener("click", respondClick);
// btn.addEventListener("mouseover", respondMouseOver);

// // btn1.addEventListener("click", respondClick);
// btn1.addEventListener("mouseover", respondMouseOver);
// // btn1.addEventListener("mouseout", respondMouseOut);

//Exercise 2

// const button = document.getElementById("jsstyle");
// const h2 = document.querySelector("h2");
// function respondClick(e) {
//   e.target.style.color = "red";
// }
// function respondMouseOver(e) {
//   e.target.style.border = "1px solid green";
// }

// button.addEventListener("click", respondClick);
// button.addEventListener("mouseover", respondMouseOver);
// h2.addEventListener("click", respondClick);

//Event propegation
// let btn = document.getElementById("btn");
// let div = document.getElementById("div");
// let section = document.getElementById("section");

// function btnRespondClick(e) {
//   alert("BTN is Clicked");
//   e.stopPropagation();
// }

// function divRespondClick(e) {
//   alert("DIV is Clicked");
// }

// function sectionRespondClick(e) {
//   alert("SECTION is Clicked");
// }
//turn around the propogation
// btn.addEventListener("click", btnRespondClick, true);
// div.addEventListener("click", divRespondClick, true);
// section.addEventListener("click", sectionRespondClick, true);

// btn.addEventListener("click", btnRespondClick);
// div.addEventListener("click", divRespondClick);
// section.addEventListener("click", sectionRespondClick);
// const button = document.getElementById("jsstyle");
// const div = document.querySelector("div");
// button.addEventListener("click", function () {
//   alert("button alert");
//   button.style.color = "blue";
// });

// button.addEventListener("click", function (e) {
//   button.style.border = "3px dotted green";
//   e.stopPropagation();
// });

// div.addEventListener("click", function () {
//   alert("div is clicked");
// });

// const myinput = document.querySelector("#myinput");
// const result = document.getElementById("result");
// myinput.addEventListener("input", function () {
//   result.textContent = myinput.value;
// });

//Prevent Default Behaviour in Forms
// const form = document.forms.my;

// function getUserComments(e) {
//   e.preventDefault();
//   console.log(e.target.children[1].value);
// }

// form.addEventListener("submit", getUserComments);

//Javascript Custom Form Validation

// const form = document.getElementsByTagName("form")[0];
// const email = document.getElementById("mail");
// const name = document.getElementById("name");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!!!!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// form.addEventListener("submit", function (event) {
//   if (!email.validity.valid) {
//     email.setCustomValidity("I am expecting an e-mail address!!!!!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

//SetTimeout & SetInterval
// function sayHi(phrase, who) {
//   alert(`${phrase}, ${who}`);
// }

// setTimeout(sayHi, 4000, "Hello", "Daniel");

// let id = setTimeout(function () {
//   alert("Hello Daniel");
// }, 4000);

// const button = document.querySelector("#stop");
// const start = document.querySelector("#start");

// button.addEventListener("click", function () {
//   clearTimeout(id);
// });
// const h1 = document.querySelector("h1");
// setTimeout(function () {
//   h1.style.display = "block";
// }, 5000);

// let id;

// start.addEventListener("click", function () {
//   id = setInterval(function () {
//     console.log("1 seconds have passed...");
//   }, 1000);
// });
// button.addEventListener("click", function () {
//   clearInterval(id);
// });

//Animations
let child = document.getElementById("child");
let position = 0;
let id = setInterval(function () {
  if (position == 300) {
    position = 0;
  } else {
    position += 1;
    child.style.left = position + "px";
    child.style.top = position + "px";
  }
}, 10);
