const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

// adding card content from object to HTML

const cardTitle = document.querySelectorAll(".card-title");
const cardText = document.querySelectorAll(".card-text");
const cardImage = document.querySelectorAll(".card-img-top");

for (let i = 0; i < cardTitle.length; i++) {
    cardTitle[i].textContent = robots[i].name;
    cardText[i].textContent = robots[i].email;
    cardImage[i].src = robots[i].image;
};

// adding search box to navbar

const newDiv = document.createElement("div");
newDiv.className = "search-box";

const searchBar = document.createElement("input");
searchBar.type = "text";
searchBar.placeholder = "Search Robots";

const navBar = document.querySelector(".navbar");
navBar.appendChild(newDiv);
newDiv.appendChild(searchBar);

// function to display a card typed in search box

const cardContainer = document.querySelector(".row");
const noRobotsFound = document.createElement("div");
noRobotsFound.innerHTML = "The item is not found";
noRobotsFound.style.color = "white";
noRobotsFound.style.background = "purple";
noRobotsFound.style.textAlign = "center";
noRobotsFound.style.fontSize = "50px";

function displayRobots() {

    cardContainer.innerHTML = '';
    const searchTerm = searchBar.value.toLowerCase();
    let found = false;

    robots.forEach((robot) => {
        if (robot.name.toLowerCase().includes(searchTerm)) {
            const card = document.createElement("div");
            card.className = "col";
            card.innerHTML = `
                <div class="card h-100">
                    <img src="${robot.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${robot.name}</h5>
                        <p class="card-text">${robot.email}</p>
                    </div>
                </div>
            `;

            cardContainer.appendChild(card);
            found = true;
        }
    });
    if (!found){
        cardContainer.style.background = "purple";
        cardContainer.appendChild(noRobotsFound);
    }else{
        cardContainer.style.background = "";
    }
}

searchBar.addEventListener("input", displayRobots);

// // cardContainer.style.background = "purple";



