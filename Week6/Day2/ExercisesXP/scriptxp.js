// Exercise 1 : Change The Article
// Instructions
// Copy the code into a structured HTML file.
// 1.1.Using a DOM property, retrieve the h1 and console.log it.

// h1 = document.querySelector("h1");
// console.log(h1.textContent);

// 1.2.Using DOM methods, remove the last paragraph in the < article > tag.

// const parentElem = document.querySelector("article");
// const lastParagraph = parentElem.querySelector("p:last-child");
// parentElem.removeChild(lastParagraph);

// 1.3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// document.querySelector("h2").onclick = function () {
//     document.querySelector("h2").style.backgroundColor = "red";
// };

// 1.4.Add an event listener which will hide the h3 when it’s clicked on(use the display: none property).

// document.querySelector("h3").onclick = function () {
//     document.querySelector("h3").style.display = "none";
// }

// 1.5. Add a < button > to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// document.querySelector("button").onclick = function () {
//     paragraphs = document.querySelectorAll("p");
//     paragraphs.forEach(function(paragraph){
//         paragraph.style.fontWeight = "bold";
//     });
// };

// 1.6. BONUS: When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// h1 = document.querySelector("h1");
// h1.addEventListener("mouseover", mouseOver);
// function mouseOver() {
//     h1.style.fontSize = `${Math.floor(Math.random() * 101)}px`;
// }

// 1.7.BONUS : When you hover on the 2nd paragraph, it should fade out(Check out “fade css animation” on Google)

// const secondPar = document.querySelectorAll("p")[1];
// secondPar.addEventListener("mouseover", mouseOver);

// function mouseOver() {
//     secondPar.classList.add('fade');
// }

// secondPar.addEventListener("mouseout", mouseOut);

// function mouseOut() {
//     secondPar.classList.remove('fade');
// }

// Exercise 2 : Work With Forms
// Instructions
// 2.1. Copy the code into a structured HTML file.
// Retrieve the form and console.log it.

// const form = document.querySelector("form");
// console.log(form);

// 2.2.Retrieve the inputs by their id and console.log them.

// const firstName = document.getElementById("fname");
// const lastName = document.getElementById("lname");
// console.log(firstName);
// console.log(lastName);

// 2.3.Retrieve the inputs by their name attribute and console.log them.

// const firstName = document.getElementsByName("firstname")[0];
// const lastName = document.getElementsByName("lastname")[0];
// console.log(firstName);
// console.log(lastName);

// 2.4. When the user submits the form(ie.submit event listener)
// use event.preventDefault(), why ?
//get the values of the input tags,
//make sure that they are not empty,
//create an li per input value,
//then append them to a the < ul class="usersAnswer" ></ul >, below the form.

// const form = document.querySelector("form");
// form.addEventListener("submit", getUserComments);
// const firstName = document.getElementById("fname");
// const lastName = document.getElementById("lname");

// function getUserComments(e) {
//     e.preventDefault();
//     const firstNameVal = `First name: ${firstName.value}`;
//     const lastNameVal = `Last name: ${lastName.value}`;
//     if (firstNameVal.trim() === '' || lastNameVal.trim() === '') {
//         alert("Please insert the data.");
//         return
//     }
//     const firstNameLi = document.createElement("li");
//     firstNameLi.textContent = firstNameVal;
//     const lastNameLi = document.createElement("li");
//     lastNameLi.textContent = lastNameVal;
//     const userAnswerUL = document.querySelector(".usersAnswer");
//     userAnswerUL.appendChild(firstNameLi);
//     userAnswerUL.appendChild(lastNameLi);
// }

//  Exercise 3 : Transform The Sentence
// 3.1.Declare a global variable named allBoldItems.
// 3.2.Create a function called getBoldItems() that takes no parameter.This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// let allBoldItems = [];

// function getBoldItems() {
//     const paragraph = document.querySelector("p");
//     const strongElements = paragraph.getElementsByTagName("strong");

//     for (let i = 0; i < strongElements.length; i++) {
//         allBoldItems.push(strongElements[i].textContent);
//     }

//     console.log(allBoldItems);
// }

// getBoldItems();

// 3.3.Create a function called highlight() that changes the color of all the bold text to blue.

// function highlight() {
//     const paragraph = document.querySelector("p");
//     const strongElements = paragraph.getElementsByTagName("strong");
//         for (let i = 0; i < strongElements.length; i++) {
//             strongElements[i].style.color = "blue";
//         }
// }

// highlight();

// 3.4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// function returnItemsToDefault() {
//     const paragraph = document.querySelector("p");
//     const strongElements = paragraph.getElementsByTagName("strong");
//     for (let i = 0; i < strongElements.length; i++) {
//         strongElements[i].style.color = "black";
//     }
// }

// returnItemsToDefault();

// 3.5.Call the function highlight() on mouseover(ie.when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout(ie.when the mouse pointer is moved out of the paragraph).

// const paragraph = document.querySelector("p");
// paragraph.addEventListener("mouseover", mouseOver);

// function mouseOver() {
//     highlight();
// }

// paragraph.addEventListener("mouseout", mouseOut);

// function mouseOut() {
//     returnItemsToDefault();
// }

//  Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere.Use the code mentioned as a base.

// const form = document.querySelector("form");
// form.addEventListener("submit", getUserComments);
// const radius = document.getElementById("radius");
// const volume = document.getElementById("volume");

// function getUserComments(e) {
//     e.preventDefault();
//     const radiusVal = radius.value;
//     let volumeVal = volume.value;
//     volumeVal = Math.pow(radiusVal,3) * Math.PI * 4/3;
//     volume.value = volumeVal;
// }