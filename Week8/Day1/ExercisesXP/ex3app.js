// 3.5. Create another file named ex3app.js.
// 3.6. In ex3app.js, import the functions from the fileManager.js module.
// 3.7. Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.
// 3.8. Run ex3app.js and verify that the file reading and writing operations are successful.


import { readFile, writeFile } from './fileManager.js'; 

readFile('Hello World.txt');
writeFile('Writing to the file');