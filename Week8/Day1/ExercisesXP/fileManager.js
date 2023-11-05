//  Exercise 3: File Management Using CommonJS Syntax
// Instructions
// 3.1. Create a file named fileManager.js.
// 3.2. Inside fileManager.js, define a module that exports functions for reading and writing files.
//   Export functions named readFile and writeFile.
//   Implement the readFile function to read the content of a specified file using the fs module.
//   Implement the writeFile function to write content to a specified file using the fs module.
// 3.3. Create a file “Hello World.txt” containing the sentence “Hello World!! “
// 3.4. Create a file “Bye World.txt” containing the sentence “Bye World!! “

import fs from 'fs'

function readFile(fileName){
    fs.readFile(fileName,'utf-8', (err, data)=> {
        if(err) console.log(err);
        console.log(data);
    })
}

function writeFile(textContent){
    fs.writeFile('Bye World.txt', textContent, (err) => {
        if (err) console.log(err);
    })
}

export {readFile, writeFile}