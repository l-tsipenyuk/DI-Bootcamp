
function getUserComments() {
    const gifCategory = document.getElementById("gif-category");
    const gifCategoryVal = gifCategory.value.toLowerCase();
    return gifCategoryVal;
}

const btn = document.getElementById("btn");
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const userCategory = getUserComments();

    if (userCategory) {
        const url = `https://api.giphy.com/v1/gifs/search?q=${userCategory}&rating=g&api_key=${apiKey}`;

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Wrong GIF.");
                }
            }).then((data) => {
                if (data.data && data.data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.data.length);
                    const randomGIF = data.data[randomIndex];

                    let container = document.getElementById("container");
                    let newImg = document.createElement("img");
                    newImg.src = randomGIF.images.downsized_medium.url;
                    newImg.alt = ""
                    container.appendChild(newImg);

                    let deleteButton = document.createElement("button");
                    deleteButton.textContent = "Delete";

                    container.appendChild(newImg);
                    container.appendChild(deleteButton);

                    deleteButton.addEventListener("click", function () {
                        container.removeChild(newImg);
                        container.removeChild(deleteButton);
                    });

                } else {
                    console.log("No GIFs found for the given category.");
                }
            }).catch((err) => {
                console.log(err);
            });
    } else {
        console.log("Please enter a category before submitting.");
    }
});

btn.disabled = true;
btn_clear.disabled = true;

document.getElementById("gif-category").addEventListener("input", function () {
    btn.disabled = this.value.trim() === "";
    btn_clear.disabled = this.value.trim() === "";
});

btn_clear.addEventListener("click", function () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});