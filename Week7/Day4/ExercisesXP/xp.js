// Exercise 1 : Giphy API
// Instructions
// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries
// q Request Parameter: Search query term or phrase.Above, the URL is searching for “hilarious” gifs
// rating Request Parameter: Filters results by specified rating.We are searching for Level 1 gifs.Check out the ratings documentation
// api_key Request Paramater: GIPHY API Key.Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

// const getGIF = () => {
//     const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
//     const url = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${apiKey}`

//     fetch(url)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 throw new Error("Wrong GIF.")
//             }
//         }).then((data) => {
//             console.log(data);
//         }).catch((err) => {
//             console.log(err);
//         });
// };

// getGIF();

// Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

// const getGIFSun = () => {
//     const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
//     const sunQ = "sun";
//     const sunLimit = "10";
//     const sunOffset = "2";

//     const url = `https://api.giphy.com/v1/gifs/search?q=${sunQ}&limit=${sunLimit}&offset=${sunOffset}&rating=g&api_key=${apiKey}`

//     fetch(url)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 throw new Error("Wrong GIF.")
//             }
//         }).then((data) => {
//             console.log(data);
//         }).catch((err) => {
//             console.log(err);
//         });
// };

// getGIFSun();

// Exercise 3 : Async Function
// Instructions
// Improve the program below:
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

// const asyncFunc = async () => {
//     try {
//         const response = await fetch("https://www.swapi.tech/api/starships/9/");
//         let data = await response.json();
//         let objectStarWars = data.result;
//         console.log(objectStarWars);
//     } catch (err){
//         console.log(err);
//     }
// }

// asyncFunc()

// Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome ?

// The output will be calling, resolved 

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();