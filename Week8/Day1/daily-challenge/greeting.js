// Create a directory named daily - challenge.
// Task 1: Basic Module System
// 1.1. Inside the daily - challenge directory, create a file named greeting.js.
// 1.2. In greeting.js, define a function called greet that takes a name as a parameter and returns a personalized greeting message.
// 1.3.Export the greet function using the Node.js module system.

const greet = (name) => { console.log(`Hello ${name}`) };

export { greet }