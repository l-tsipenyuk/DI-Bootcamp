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

// let myCar = {
//     color: 'blue',
//     details: {
//         plateNumber: 123,
//         name: "Ford"
//     }
// }

// let copyCar = myCar;
// copyCar.color = "red";
// console.log(myCar);

// let copyCar2 = {...myCar};
// copyCar2.color = "red";
// console.log(myCar);

// Classes
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea(){
//         return this.height * this.width;
//     }
// }

// const square1 = new Rectangle(10, 10);
// const square2 = new Rectangle(20, 20);
// console.log(square1.calcArea());
// console.log(square2.calcArea());

// Exercise 2
// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// killerRabbit.speak("Hi");
// blackRabbit.speak("Heh");
// console.log(killerRabbit);

// Setters and Getters
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     // getter
//     get area(){
//         return this.height * this.width;
//     }
//     // setter
//     set area(factor){
//         this.width=this.height * factor;
//     }
// }

// const square = new Rectangle(10,10);
// square.area = 2;
// console.log(square);
// console.log(square.area);

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// const newAnimal = new Animal("bob");
// newAnimal.speak();

// class Dog extends Animal {
//     constructor(name, noise) {
//         super(name); // call the super class constructor and pass in the name parameter
//         // Add a new property
//         this.noise = noise;
//     }
//     speak(){
//         console.log(`${this.name} barks. It says ${this.noise}`);
//     }
// }

// let dog=new Dog("Mitzy", "Woof");
// dog.speak();

// Date Objects
// defining Date obj
let now = new Date();
console.log(now);

// toString
// console.log(now.toString());

// getDay
console.log(now.getDay());
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(dayNames[now.getDay()]);

// getMonth
console.log("getMonth", now.getMonth()+1);

console.log('getDate', now.getDate())

// get year
console.log('getFullYear', now.getFullYear())

// get hours
console.log('getHours', now.getHours())

date.addEvenlistener("change", function (event){
    console.log(event.target.value);
    let date = new Date(event.target.value);
    console.log(date);
});