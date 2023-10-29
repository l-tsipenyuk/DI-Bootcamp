//Object Methods
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

// console.log(object1["b"]);

//Object keys:

// console.log(Object.keys(object1));

//Object keys:

// console.log(Object.values(object1));

//Object Entries:

// const entriesArr = Object.entries(object1);
// console.log(entriesArr);

//Object fromEntries

// const entiresObj = Object.fromEntries(entriesArr);
// console.log(entiresObj);
// const shopping = [
//   ["apple", "$2"],
//   ["pear", "$1"],
//   ["banana", "$0.77"],
// ];

// console.log(shopping);

// const entriesObj = Object.fromEntries(shopping);

// console.log(entriesObj);

//Execise:
// let myObj = {
//   name: "John",
//   lastName: "Doe",
//   age: 25,
//   friends: ["Mark", "Lucie", "Ana"],
// };

// const myArr = Object.entries(myObj);
// // console.log(myArr);

// myArr.forEach((entry, index) => {
//   const position = index + 1;
//   console.log(`The ${position}# key is :${entry[0]}
//   The ${position}# value is :${entry[1]}
//   `);
// });

// console.log(myArr.length);

//Object Destructuring
// const arr = [1, 2, 3, 4];
// const [a, ...b] = arr;
// console.log(b);

// const address = {
//   street: "Evergreen Terrace",
//   number: "742",
//   city: "Springfield",
//   state: "NT",
//   zip: "49007",
// };

// const { street: s, city: c } = address;

// console.log(s);
// console.log(c);

// const { street, city, state, zip } = address;

// console.log(street);
// console.log(state);
// console.log(zip);

// console.log(city);

//Nested Object Destructure
// const student = {
//   name: "John Doe",
//   age: 16,
//   scores: {
//     maths: 74,
//     english: 63,
//   },
// };

// const {
//   name,
//   scores: { maths, science = 50 },
// } = student;

// console.log(`${name} scored ${maths} in Maths and ${science} in Science`);

//Object Destructuring inside function
// const student = {
//   name: "John Doe",
//   age: 16,
//   scores: {
//     maths: 74,
//     english: 63,
//     science: 85,
//   },
// };

// function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }) {
//   console.log("Hello, " + name);
//   console.log("Your Maths score is " + maths);
//   console.log("Your English score is " + english);
//   console.log("Your Science score is " + science);
// }

// displaySummary(student);

// function doSomething(name, age = 2) {
//   console.log(`hello my name is ${name} and my age is ${age}`);
// }

// doSomething("Daniel");

//Spreading Objects

// let obj = { foo: 1, bar: 2 };

// // let newObj = { ...obj, baz: 3 };

// let newObj = { foo: 3, ...obj };

// console.log(newObj);

// let newObj = { ..."abc" };
// console.log(newObj["0"]);

//Exercise

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

// let myCar = {
//   color: "blue",
//   details: {
//     plateNumber: 123,
//     name: "Ford",
//   },
// };

// let copyCar = myCar;

// copyCar.color = "red";

// console.log(myCar);

// let actualCopy = { ...myCar };
// actualCopy.color = "red";
// console.log(myCar);

//Classes
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square1 = new Rectangle(10, 10);
// console.log(square1.calcArea());
// const square2 = new Rectangle(20, 20);
// console.log(square2.calcArea());

//Exercise
// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }
// let killerRabbit = new Rabbit("killer");

// let blackRabbit = new Rabbit("black");

// blackRabbit.speak("give me carrots");
// killerRabbit.speak("give me carrots");

//Setters and Getters:
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.height * this.width;
//   }

//   getArea() {
//     return this.height * this.width;
//   }

//   //Setter
//   set area(factor) {
//     this.width = this.height * factor;
//   }
// }

// const square = new Rectangle(10, 10);
// square.area = 4;
// console.log(square);
// console.log(square.area);

// console.log(square.getArea());

//Extend an existing class

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// const newAnimal = new Animal("cat");

// newAnimal.speak();

// class Dog extends Animal {
//   constructor(name, noise) {
//     super(name); //pass in the super properties we are passing down from the parent
//     this.noise = noise;
//   }
//   speak() {
//     console.log(`${this.name} barks. It says ${this.noise}`);
//   }
// }

// let dog = new Dog("Mitzy", "Woof");

// dog.speak();

//Date Object
//Defining Date Obj
// let now = new Date();
// console.log(now);

// //toString
// console.log(now.toString());

// //getDay
// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// console.log(dayNames[now.getDay()]);

// //getMonth
// console.log("getMonth", now.getMonth() + 1);

// //getDate
// console.log("getDate", now.getDate());

// //getFullYear
// console.log("getFullYear", now.getFullYear());

// //getHours
// console.log("getHours", now.getHours());

// //getMinutes
// console.log("getMinutes", now.getMinutes());

// //getSeconds
// console.log("getSeconds", now.getSeconds());

// //getMilliseconds
// console.log("getMilliseconds", now.getMilliseconds());

// //getTime
// console.log("getTime", now.getTime());

// let anotherDay = new Date(2021, 1, 19, 11, 55);
// console.log(anotherDay);
// let date = document.getElementById("datetime");

// date.addEventListener("change", function (event) {
//   console.log(event.target.value);
//   let date = new Date(event.target.value);
//   console.log(date);
// });

const allBooks = [
  {
    title: "Harry Potter",
    author: "JK Rowing",
    image: "https://sm.ign.com/ign_il/cover/h/harry-pott/harry-potter-the-series_nqgw.jpg",
    alreadyRead: true,
  },
  {
    title: "Harry Potter 2",
    author: "JK Rowing",
    image:
      "https://static.miraheze.org/greatcharacterswiki/thumb/a/a2/Harry-Potter-PNG-Background.png/640px-Harry-Potter-PNG-Background.png",
    alreadyRead: false,
  },
];

const section = document.querySelector(".listBooks");
allBooks.forEach((book) => {
  const container = document.createElement("div");

  const titleAuthor = document.createElement("h2");
  titleAuthor.textContent = `${book.title} written by ${book.author}`;

  const img = document.createElement("img");
  img.setAttribute("src", book.image);
  img.style.width = "100px";
  img.style.height = "100px";

  book.alreadyRead && (container.style.color = "red");

  container.append(titleAuthor, img);
  section.append(container);
});
