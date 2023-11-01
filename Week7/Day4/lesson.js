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

// const button = document.getElementById("btn");
// const div = document.getElementById("joke");

// const getJoke = () => {

//     fetch("https://api.chucknorris.io/jokes/categories")
//         .then((response) => {
//             console.log(response);
//             if (response.ok === true) {
//                 return response.json()
//             } else {
//                 throw new Error("Error fetching data.")
//             }
//         })
//         .then((data) => {
//             const randomCategory = data[Math.floor(Math.random() * data.length)];
//             return fetch(`https://api.chucknorris.io/jokes/random?category=${randomCategory}`);

//         })
//         .then((response) => {
//             console.log(response);
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 throw new Error("Failed request.")
//             }
//         }).then((data) => {
//             console.log(data);
//             div.textContent = data.value;
//         })
//         .catch((error) => {
//             console.log(error);
//         });

// }

// button.addEventListener("click", getJoke)


// Async await

// "Classical" version:

// let goodGrades = 93;

// let endSemester = new Promise((resolve, reject) => {
//     if (goodGrades > 90) {
//         resolve("Computer");
//     } else if (goodGrades => 80 && goodGrades <= 89) {
//         resolve("Phone");
//     } else {
//         reject("I won't get the gift");
//     }
// })

// const checkRequest = () => {
//     console.log('test 2');
//     endSemester
//         .then(value =>
//             console.log("I got an amazing gift : A ", value));
// }

// console.log('test 1');
// checkRequest();
// console.log('test 3');

// Version with async:

// let goodGrades = 93;

// let endSemester = new Promise((resolve, reject) => {
//     if (goodGrades > 90) {
//         resolve("Computer");
//     } else if (goodGrades => 80 && goodGrades <= 89) {
//         resolve("Phone");
//     } else {
//         reject("I won't get the gift");
//     }
// })

// const checkRequests = async ()=>{
//     let gift = await endSemester;
//     console.log(`I got a ${gift}.`);
// }

// checkRequests();

// Async awaits example

// const getPosts = (userId) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Post ", "Done!");
//         resolve([{ title: "Article on Javascript", idArticle: 1, idUser: userId }]);
//     }, 1500);
// });

// const getComments = (postId) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Comments ", "Done!");
//         resolve([{ title: "Great Article", author: "John" },
//         { title: "Interesting Article", author: "Lea" }]);
//     }, 1500);
// });

// const getLikes = (postId) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Likes ", "Done!");
//         resolve(5);
//     }, 1500);
// });

// console.log('Test1');

// const getLatestPostActivity = async (userId) => {
//     const posts = await getPosts(userId);
//     const latestPost = posts[0];
//     const comments = await getComments(latestPost.idArticle);
//     const likes = await getLikes(latestPost.idArticle);

//     return { comments: comments, likes: likes };
// }

// getLatestPostActivity(10)
//     .then(res => {
//         console.log('everything ', res)
//     })
//     .catch((e) => console.log(e));

// console.log('Test2');

// ASYNC await loop

// async function showTimeout(milliseconds, id) {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(id, " Done!");
//             resolve("OK");
//         }, milliseconds);
//     });
// };

// (async function () {
//     console.log("start");

//     ["first", "second", "third"].forEach(async (id) => {
//         await showTimeout(2000, id);
//     });

//     console.log("end");
// })();