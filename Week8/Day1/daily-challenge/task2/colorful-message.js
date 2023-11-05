// Task 2: Using an NPM Module
// 2.1. Inside the daily - challenge directory, open a terminal and run npm init to initialize a new Node.js project.Follow the prompts to set up your project.
// 2.2. Install the chalk package by running npm install chalk in the terminal.
// 2.3. Create a file named colorful - message.js.
// 2.4. In colorful - message.js, require the chalk package and use it to create and display a colorful message in the terminal.

import chalk from 'chalk'

const blueMessage = (message) => {console.log(chalk.blue(message))}
// blueMessage("This is a blue message.")

export {blueMessage}