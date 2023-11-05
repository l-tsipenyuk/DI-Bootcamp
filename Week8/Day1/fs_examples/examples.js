// const fs = require('fs');

// console.log('before');

// const data = fs.readFileSync('users', 'utf-8');
// console.log(data);

// fs.readFile('users','utf-8', (err, data)=> {
//     if(err) console.log(err);
//     console.log(data);
// })

// console.log('after');


// writeFile is overwriting - not appending!

// let users = [
//     {username: 'liya', password: '12345'}
// ]

// fs.writeFile('info.json', JSON.stringify(users), (err) => {
//     if (err) console.log(err);
// })

// const fs = require("fs").promises;

// const getFileData = async() => {
//     const data = await fs.readFile('info.json', 'utf-8')
//     console.log(JSON.parse(data))
// }

// getFileData()


