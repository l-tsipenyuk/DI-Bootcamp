const form = document.getElementById("myform");
form.addEventListener("submit",getUserComments);

const firstName = document.querySelector('input[name="name"]');
const lastName = document.querySelector('input[name="lastname"]');

function getUserComments(e) {
    e.preventDefault();
    const firstNameVal = firstName.value;
    const lastNameVal = lastName.value;
    const values = {
        firstName: firstNameVal,
        lastName: lastNameVal
    }
    valuesJSON = JSON.stringify(values);
    const newDiv = document.createElement("div");
    newDiv.textContent = valuesJSON;
    form.appendChild(newDiv);
}

