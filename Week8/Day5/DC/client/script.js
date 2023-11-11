const submit = document.getElementById("submit");
submit.disabled = true;

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

usernameInput.addEventListener("input", updateButtonState);
passwordInput.addEventListener("input", updateButtonState);

function updateButtonState() {
    const password = passwordInput.value;
    password === "" ? submit.disabled = true : submit.disabled = false;
}


submit.addEventListener("click", async (event) => {
    event.preventDefault();

    const password = passwordInput.value;
    const username = usernameInput.value


    try {
        const response = await fetch(`http://localhost:3000/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            console.log("User registered.", response);
        } else {
            console.error("User is not registered.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});

