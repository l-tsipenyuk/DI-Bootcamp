const submit = document.getElementById("submit");
submit.disabled = true;

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

usernameInput.addEventListener("input", updateButtonState);
passwordInput.addEventListener("input", updateButtonState);

function updateButtonState() {
    const username = usernameInput.value;
    const password = passwordInput.value;

    submit.disabled = !(username !== "" && password !== "");
}

submit.addEventListener("click", async (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
        const usersResponse = await fetch(`http://localhost:3000/api/users`);
        const existingUsers = await usersResponse.json();

        if (existingUsers.some(user => user.username === username)) {
            alert("Username already exists.")
            return;
        }

        const regResponse = await fetch(`http://localhost:3000/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (regResponse.ok) {
            console.log("User registered.", regResponse);
            alert(`${username} is registered, welcome to the website!`)
        } else {
            console.error("User registration failed.");
        }
    } catch (err) {
        console.error("An error occurred:", err);
    }
});

