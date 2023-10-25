// Exercise 1 : Colors
// Instructions
// Using this array:
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order: “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint: Use the array methods taught in class.Look at the lesson Array Methods.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// colors.forEach((element, index) => {
//     console.log(`${index+1}# choice is ${element}.`)
// });

// let output = colors.some((element) =>element === "Violet");
// let result = output? console.log("Yeah") : console.log("No...");

// Exercise 2 : Colors #2
// Instructions
// Using these arrays:
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];
// Write a JavaScript program that displays the colors in the following order: “1st choice is Blue.” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint: Use the array methods taught in class and ternary operator.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((element, index) => {
//     let ord;
//     if (index === 0) {
//         ord = ordinal[1];
//     } else if (index === 1) {
//         ord = ordinal[2];
//     } else if (index === 2) {
//         ord = ordinal[3];
//     } else{
//         ord = ordinal[0];
//     }
//     console.log(`${index+1}${ord} choice is ${element}.`)
// });

// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them.What will be the outputs ?
//     ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// The result will be ['bread', "carrot", "potato", 'chicken', "apple", "orange"] (all in one kind of quotes);

// ------2------
// const country = "USA";
// console.log([...country]);

// The result will be ["U","S","A"]

// ------Bonus------
// let newArray = [...[, ,]];
// console.log(newArray);

// The result will be undefined because [, ,] is empty

// Exercise 4 : Employees
// 4.1. Using the map() method, push into a new array the firstname of the user and a welcome message.

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
// { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

// const newArr = users.map((user, index) => `Hello ${user.firstName}`);
// console.log(newArr);

// 4.2.Using the filter() method, create a new array, containing only the Full Stack Residents.

// const result = users.filter((user) => user.role === "Full Stack Resident");
// console.log(result);

// 4.3. Bonus: Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

// const lastNamesDev = result.map((user)=>user.lastName)
// console.log(lastNamesDev);

//  Exercise 5 : Star Wars
// Instructions
// Using the array given const use the reduce() method to combine all of these into a single string.

// epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let result = epic.reduce((acc,val)=>{
//     return acc + ' ' + val;
// },'');

// console.log(result);

// Exercise 6 : Employees #2
// Instructions
// With the object given using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name(ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

// const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
// { name: "Liam", course: "Computer Science", isPassed: false },
// { name: "Jenner", course: "Information Technology", isPassed: true },
// { name: "Marco", course: "Robotics", isPassed: true },
// { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
// { name: "Jamie", course: "Big Data", isPassed: false }];

// const result = students.filter((user) => user.isPassed);
// const newArr = result.map((user)=>user.name)
// console.log(newArr);

// bonus
// result.forEach((student) => console.log(`Good job ${student.name}, you passed the course in ${student.course}.`))
