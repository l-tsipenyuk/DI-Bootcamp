//  Exercise 5: Creating And Using A Custom Module
// 5.1. Create a directory named math - app.
// 5.2. Inside the math - app directory, open a terminal and run npm init to initialize a new Node.js project.Follow the prompts to set up your project.
// 5.3. Install the lodash package, a utility library, by running npm install lodash in the terminal.
// 5.4. Create a file named math.js inside the math - app directory.
// 5.5. In math.js, define a simple custom module that exports functions for addition and multiplication.

const Addition = (a, b) => console.log(a + b);

const Multiplication = (a, b) => console.log(a * b);

export { Addition, Multiplication }