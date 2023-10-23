const libButton = document.getElementById("lib-button");
libButton.addEventListener("click", getUserComments);
const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const person = document.getElementById("person");
const verb = document.getElementById("verb");
const place = document.getElementById("place");
const story = document.getElementById("story");

function getUserComments(e) {
    e.preventDefault();
    if (noun.value.trim() === '' || adjective.value.trim() === '' || person.value.trim() === '' || verb.value.trim() === '' || place.value.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }
    const capitilizedAdj = adjective.value.charAt(0).toUpperCase() + adjective.value.slice(1);
    const res = `${capitilizedAdj} ${noun.value} ${verb.value}s with ${person.value} in ${place.value}.`;
    console.log(res);
    const showRes = document.createElement("p");
    showRes.textContent = res;
    const storyParagraph = document.getElementById("story");
    storyParagraph.appendChild(showRes);
}
  


