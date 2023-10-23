// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// let id = setTimeout(function () {
//   alert("Hello World");
// }, 2000);

// 2. In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph < p > Hello World</p > to the < div id = "container" >.

// let id = setTimeout(function () {
//     const container = document.getElementById("container");
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode("Hello World");
//     newP.appendChild(textNode);
//     container.appendChild(newP);
// }, 2000);

// 3. In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph < p > Hello World</p > to the < div id = "container" >.
// The interval will be cleared(ie.clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared(ie.clearInterval) as soon as there will be 5 paragraphs inside the < div id = "container" >.


// let pos = 0;
// function newParagraph() {
//     if (pos < 5) {
//         const container = document.getElementById("container");
//         const newP = document.createElement("p");
//         const textNode = document.createTextNode("Hello World");
//         newP.appendChild(textNode);
//         container.appendChild(newP);
//         pos++;
//         setTimeout(newParagraph, 2000);
//     }
// }

// newParagraph();

// Exercise 2 : Move The Box
// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the < div id = "animate" > to the right side of the < div id = "container" >, when the button is clicked on.

// let animate = document.getElementById("animate");
// let position = 0;
// function myMove() {
//     let id = setInterval(function () {
//         if (position == 350) {
//             clearInterval(id);
//         } else {
//             position += 1;
//             animate.style.left = position + "px";
//         }
//     }, 10);
// }








