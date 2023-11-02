let btn = document.getElementById("btn");
let searchBox = document.querySelector(".search_box");

// creating elements for a searchbox: 
let nameDOM = document.createElement("h1");
let heightDOM = document.createElement("p");
let genderDOM = document.createElement("p");
let birth_yearDOM = document.createElement("p");
let planetDOM = document.createElement("p");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    
    var isEmpty = searchBox.innerHTML === "";
    if (!isEmpty) {
        
        ActivateLoading()

        randomNumber = Math.floor(Math.random() * 83) + 1;
        const url = `https://www.swapi.tech/api/people/${randomNumber}`;

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("The character is not found.");
                }
            }).then((data) => {
                const name = data.result.properties.name;
                const height = `Height: ${data.result.properties.height}`;
                const gender = `Gender: ${data.result.properties.gender}`;
                const birth_year = `Birth Year: ${data.result.properties.birth_year}`;
                const url_planet = data.result.properties.homeworld;

                fetch(url_planet)
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("The planet is not found.");
                        }
                    }).then((data2) => {
                        const planet = data2.result.properties.name;

                        nameDOM.textContent = name;
                        heightDOM.textContent = height;
                        genderDOM.textContent = gender;
                        birth_yearDOM.textContent = birth_year;
                        planetDOM.textContent = `Homeworld: ${planet}`;

                        RemoveLoading()
 
                        searchBox.append(nameDOM, heightDOM, genderDOM, birth_yearDOM, planetDOM);
                    })

            }).catch((err) => {
                console.log(err);
            })
    }
});

function ActivateLoading() {
    searchBox.innerHTML = "";
    let loadingDOM = document.createElement("i");
    loadingDOM.className = "fa-solid fa-spinner fa-spin";
    let loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Loading...";
    searchBox.appendChild(loadingDOM);
    searchBox.appendChild(loadingMessage);
}

function RemoveLoading() {
    searchBox.innerHTML = "";
}