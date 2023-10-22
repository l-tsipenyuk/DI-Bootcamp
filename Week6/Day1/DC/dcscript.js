// 1.Create an array which value is the planets of the solar system.
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// 2.For each planet in the array, create a < div > using createElement.This div should have a class named "planet".

let backgrounds = ["#878f99", "#e6e2d3", "#87bdd8", "#e0876a", "#fbefcc", "#d9ad7c", "#4040a1","#80ced6"];
const list = document.querySelector(".listPlanets");
planets.forEach((planet,index) => {
    const newDiv = document.createElement("div");
    newDiv.className = "planet";
    newDiv.style.backgroundColor = backgrounds[index];
    const textNode = document.createTextNode(planet);

    newDiv.appendChild(textNode);
    list.appendChild(newDiv);
});

