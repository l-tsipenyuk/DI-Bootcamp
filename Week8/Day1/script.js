// console.log("hi")

// for (let index = 0; index<5; index++){
//     console.log(index);
// }

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// });

// const getData = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         // console.log(data);
//         return data;
//     } catch (e) {
//         console.log(e);
//     }
// }

// getData().then(d => console.log(d))
// console.log(getData())

// Node module system

// const name = 'John';

// const greeting = (name) => {
//     console.log(`Hello ${name}, welcome to NodeJs.`)
// }

// const hello = (name) => {
//     console.log(`Hello ${name}.`)
// }

// const colorRed = "red"

// module.exports = greeting;
// module.exports = {
//     greeting,
//     hello,
//     colorRed
// };


// greeting(name)

// Exercise1: to export this to main.js

const getData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}

module.exports = getData;