const submit2 = document.getElementById("submit2");
submit2.disabled = true;

const usernameInput2 = document.getElementById("username2");
const passwordInput2 = document.getElementById("password2");

usernameInput2.addEventListener("input", updateButtonState2);
passwordInput2.addEventListener("input", updateButtonState2);

function updateButtonState2() {
    const username2 = usernameInput2.value;
    const password2 = passwordInput2.value;

    submit2.disabled = !(username2 !== "" && password2 !== "");
}

submit2.addEventListener("click", async (event) => {
    event.preventDefault();

    const username2 = usernameInput2.value;
    const password2 = passwordInput2.value;

    try {
        const usersResponse = await fetch(`http://localhost:3000/api/users`);
        const existingUsers = await usersResponse.json();

        if (existingUsers.some(user => user.username === username2)) {
            alert(`Welcome back ${username2}`)
            return;
        }else{
            alert(`The user ${username2} is not registered.`)
        }
    } catch (err) {
        console.error("An error occurred:", err);
    }
});


