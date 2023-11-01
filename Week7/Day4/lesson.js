// Fetch API
// Returns a promise:
// console.log(fetch("https://api.artic.edu/api/v1/artworks/4"));

// Get Request
// console.log("Starting...");
// const myParagraph = document.getElementById("info-art");

// const displayArtWork = (art) => {
//     const { title, artist_title: artist } = art.data
//     myParagraph.textContent = `The painting name is ${title} by the artist ${artist}.`
// }

// const getArtWorks = () => {
//     console.log("Working...");
//     fetch("https://api.artic.edu/api/v1/artworks/4")
//         .then((response) => {
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 throw new Error("Wrong artwork.")
//             }
//         }).then((data) => {
//             console.log(data);
//             displayArtWork(data)
//         }).catch((err) => {
//             console.log(err);
//         });
//     console.log("Work done.")
// };

// getArtWorks();

// Post request

// const data = {
//     title: "Article on Javascript",
//     body: "This is an article presenting the new features of Javascript",
//     userId: 1
// };

// const addArticle = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts",{
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {"Content-type":"application/json"}
//     }).then((response)=>{
//         if (response.ok){
//             return response.json()
//         }else{
//             throw new Error("Failed to make request.")
//         }
//     }).then((data)=>{
//         console.log(data)
//     }).catch((e)=> console.log(e));
// };

// addArticle()

// Post request with form data

// console.log("Starting ...")

// const addArticle = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);

//     const objBody = {
//         method: "POST",
//         body: JSON.stringify(Object.fromEntries(data)),
//         headers: { "Content-type": "application/json; charset=UTF-8" }
//     }

//     console.log("Working ...")
//     fetch("https://jsonplaceholder.typicode.com/posts", objBody)
//         .then((response) => {
//             console.log(response);
//             if (response.ok === true) {
//                 return response.json()
//             } else {
//                 throw new Error("Wrong post")
//             }
//         })
//         .then((obj) => {
//             console.log(obj);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     console.log("Work Done ...")
// }

// const formArticle = document.querySelector("form");
// formArticle.addEventListener("submit", addArticle);

// Exercise1 (Chuck Norris)

const button = document.getElementById("btn");
const div = document.getElementById("joke");

const getJoke = () => {

    fetch("https://api.chucknorris.io/jokes/categories")
        .then((response) => {
            console.log(response);
            if (response.ok === true) {
                return response.json()
            } else {
                throw new Error("Error fetching data.")
            }
        })
        .then((data) => {
            const randomCategory = data[Math.floor(Math.random() * data.length)];
            return fetch(`https://api.chucknorris.io/jokes/random?category=${randomCategory}`);

        })
        .then((response) => {
            console.log(response);
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Failed request.")
            }
        }).then((data) => {
            console.log(data);
            div.textContent = data.value;
        })
        .catch((error) => {
            console.log(error);
        });

}

button.addEventListener("click", getJoke)


