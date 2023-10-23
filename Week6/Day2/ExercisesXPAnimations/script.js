// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// let id = setTimeout(function () {
//   alert("Hello World");
// }, 2000);

// 2. In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph < p > Hello World</p > to the < div id = "container" >.

let id = setTimeout(function () {
    const container = document.getElementById("container");
    const newP = document.createElement("p");
    const textNode = document.createTextNode("Hello World");
    newP.appendChild(textNode);
    container.appendChild(newP);
}, 2000);

// 3. In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph < p > Hello World</p > to the < div id = "container" >.
// The interval will be cleared(ie.clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared(ie.clearInterval) as soon as there will be 5 paragraphs inside the < div id = "container" >.



// function newParagraph() {
//     let pos = 0;
//     const id = setInterval(function () {
//         if (pos < 5) {
//             pos++;
//             const container = document.getElementById("container");
//             const newP = document.createElement("p");
//             const textNode = document.createTextNode("Hello World");
//             newP.appendChild(textNode);
//             container.appendChild(newP);
//         } else {
//             clearInterval(id);
//         }
//     }, 2000);
// }


function newParagraph() {
    let pos = 0;
    const container = document.getElementById("container");
    const ul = document.createElement("ul");
    const intervalId = setInterval(function () {
        if (pos < 5) {
            pos++;
            const li = document.createElement("li");
            // const container = document.getElementById("container");
            // const newP = document.createElement("li");
            const textNode = document.createTextNode("Hello World");
            li.appendChild(textNode);
            ul.appendChild(li);
        } else {
            clearInterval(intervalId);
        }
    }, 2000);
    container.appendChild(ul);
}














//     let id = setInterval(function () {
//         if (pos == 350) {
//             clearInterval(id);
//         }
//         else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }, 5);
