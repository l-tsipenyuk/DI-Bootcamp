// Basic objects:
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };

// console.log(object1.b);

// Object keys & values
// console.log(Object.keys(object1));
// console.log(Object.values(object1));

// Object Entries (rarely used)

// const entriesArr = Object.entries(object1);
// console.log(entriesArr);

// // Object fromEntries

// const entriesObj = Object.fromEntries(entriesArr);
// console.log(entriesObj);

// const shopping = [
//     ["apple", "$2"],
//     ["pear", "$1"],
//     ["banana", "$0.77"],
// ];

// const shoppingObject = Object.fromEntries(shopping);
// console.log(shoppingObject); 

// Exercise 1.
// Count how many keys and values are in the object below
// Display: "The x# key is : --- The x# value is : ---".

// let myObj = {
//     name: "John",
//     lastName: "Doe",
//     age: 25,
//     friends: ["Mark", "Lucie", "Ana"]
// }

// let myObjEntries = Object.entries(myObj);

// myObjEntries.forEach((element,i) =>{
//     console.log(`The ${i} key is ${Object.keys(myObj)[i]}, the ${i} value is ${Object.values(myObj)[i]}`);
// });

// console.log(`There are ${myObjEntries.length} keys in myObj.`);

// Object Destructuring

// const [a, b] = [1, 2];
// console.log(a);

// const address = {
//     street: 'Evergreen Terrace',
//     number: '742',
//     city: 'Springfield',
//     state: 'NT',
//     zip: '49007',
// };

// const { street: s, city: c } = address;
// const {street, city, zip } = address;
// console.log(s); 
// console.log(c);
// console.log(city);

// Nested object destructuring

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// const {
//     name,
//     scores: {maths, science = 50},
// } = student; 

// console.log(`${name} scored ${maths} in Maths and ${science} in Science.`)

// Object Destructuring inside function

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// function displaySummary({ name, scores: { maths = 0, english = 0, science =0}}){
//     console.log('Hello, ' + name);
//     console.log('Your Maths score is ' + maths);
//     console.log('Your English score is ' + english);
//     console.log('Your Science score is ' + science);
// }

// displaySummary(student);

// Spreading objects

// let obj = {foo: 1, bar: 1};
// let newObj = {...obj, baz:3};
// console.log(newObj);

// let obj2 = obj;
// let obj3 = {...obj};

// console.log(newObj);

let myCar = {
    color: 'blue',
    details: {
        plateNumber: 123,
        name: "Ford"
    }
}

let copyCar = myCar;
copyCar.color = "red";
console.log(myCar);

let copyCar2 = {...myCar};
copyCar2.color = "red";
console.log(myCar);