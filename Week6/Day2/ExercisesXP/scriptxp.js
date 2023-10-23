// Exercise 1 : Change The Article
// Instructions
// Copy the code into a structured HTML file.
// 1.1.Using a DOM property, retrieve the h1 and console.log it.

// h1 = document.querySelector("h1");
// console.log(h1.textContent);

// 1.2.Using DOM methods, remove the last paragraph in the < article > tag.

const parentElem = document.querySelector("article");
const lastParagraph = parentElem.querySelector("p:last-child");
parentElem.removeChild(lastParagraph);

// 1.3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

