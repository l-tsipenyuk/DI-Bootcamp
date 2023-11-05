// Task 3: Advanced File Operations
// 3.1. Inside the daily - challenge directory, create a directory named files.
// 3.2. Inside the files directory, create a file named file - data.txt and add some text content to it.
// 3.3. Create a file named read - file.js.
// 3.4. In read - file.js, require the fs module and read the content from the file - data.txt file.Display the content in the terminal.

import fs from 'fs';
function readTheFileAgain() {
    fs.readFile('file-data.txt', 'utf-8', function (err, data) {
        err ? console.log("Reading the data is failed.") : console.log(data)
    })
}

export { readTheFileAgain }
