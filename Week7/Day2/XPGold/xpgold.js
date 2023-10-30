const form = document.getElementById("myform");

form.addEventListener("submit", function (e){
    e.preventDefault();
    const firstName = form.querySelector('input[name="name"]').value;
    const lastName = form.querySelector('input[name="lastname"]').value;
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    window.location.href = "another.html";

});