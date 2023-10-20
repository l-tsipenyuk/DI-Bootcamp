// Exercise 1 : List Of People

// const people = ["Greg", "Mary", "Devon", "James"];

// // 1.1. Write code to remove “Greg” from the people array.
// people.splice(0,1);
// console.log(people);

// // 1.2. Write code to replace “James” to “Jason”.
// people.splice(2,1,"Jason");
// console.log(people);

// // 1.3. Write code to add your name to the end of the people array.
// people.push("Liya");
// console.log(people);

// // 1.4. Write code that console.logs Mary’s index.take a look at the indexOf method on Google.
// let maryInd = people.indexOf("Mary");
// console.log(maryInd);

// // 1.5. Write code to make a copy of the people array using the slice method.

// let copy = people.slice(1,3);
// console.log(copy);

// // 1.6.Write code that gives the index of “Foo”. Why does it return -1 ?
// fooInd = people.indexOf("Foo");
// console.log(fooInd);

// It's -1 because there is no "Foo" in "people"

// 1.7. Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array ?

// let last = people.slice(people.length-1, people.length);
// console.log(last);

// 1.8.Using a loop, iterate through the people array and console.log each person.

// for (let i in people){
//     console.log(people[i]);
// }

// 1.9. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

// for (let i of people) {
//     if (i == 'Devon') {
//         break;
//     } else {
//         console.log(i);
//     }
// }

//  Exercise 2 : Your Favorite Colors
// 2.1.Create an array called colors where the value is a list of your five favorite colors.
// let colors = ['yellow', 'purple', 'blue', 'gold', 'black']

// 2.2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// for (let i of colors) {
//     if (i == 'yellow') {
//         console.log("My #1 choice is yellow.")
//     }
//     if (i == 'purple') {
//         console.log("My #2 choice is purple.")
//     }
//     if (i == 'blue') {
//         console.log("My #3 choice is blue.")
//     }
//     if (i == 'gold') {
//         console.log("My #4 choice is gold.")
//     }
//     if (i == 'black') {
//         console.log("My #5 choice is black.")
//     }
// }

// 2.3.Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// for (let i = 0; i < colors.length; i++) {
//     console.log(`My number ${i+1} choice is ${colors[i]}`);
// }

// Exercise 3 : Repeat The Question
// 3.1.Prompt the user for a number.
    // Hint : Check the data type you receive from the prompt(ie.Use the typeof method)

// let userAge = prompt("How old are you?");
// console.log(Number(userAge));

// 3.2.While the number is smaller than 10 continue asking the user for a new number.
    // Tip : Which while loop is more relevant for this situation ?

// let userAge = prompt("How old are you?");
// while (userAge <10) {
//     userAge = prompt("Type another number larger than 10.");
//     console.log(userAge);
// }


// Exercise 4 : Building Management
// 4.1.Copy and paste the above object to your Javascript file.

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent: {
//         sarah: [3, 990],
//         dan: [4, 1000],
//         david: [1, 500],
//     }}

// 4.2. Console.log the number of floors in the building.

// console.log(building.numberOfFloors);

// 4.3.Console.log how many apartments are on the floors 1 and 3.

// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.thirdFloor);

// 4.4.Console.log the name of the second tenant and the number of rooms he has in his apartment.

// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0]);

// 4.5.Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.If it is, than increase Dan’s rent to 1200.

// let rentSarah = building.numberOfRoomsAndRent.sarah[1];
// let rentDavid = building.numberOfRoomsAndRent.david[1];
// let rentDan = building.numberOfRoomsAndRent.dan[1];

//     if (rentSarah + rentDavid > rentDan) {
//         rentDan = 1200;
//         console.log(`Dan's new rent is ${rentDan}.`);
//     }

//  Exercise 5 : Family
// 5.1.Create an object called family with a few key value pairs.

// const family = {
//     familyAmount: 4,
//     childrenAmount: 2,
//     familyCountry: "Israel"
// }

// 5.2. Using a for in loop, console.log the keys of the object.

// for (let x in family){
//     console.log(x);
// }

// 5.3. Using a for in loop, console.log the values of the object.

// for (let x in family){
//     console.log(family[x]);
// }

// Exercise 6 : Rudolf

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

// let res = ' '
// for (let x in details){
//     res += x + ' ' + details[x] + ' ';
// }

// console.log(res);

// Exercise 7 : Secret Group

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society.The society’s name will be the first letter of each of their names sorted in alphabetical order.
//     Hint: a string is an array of letters
// Console.log the name of their secret society.The output should be “ABJKPS”

// let namesSorted = names.sort();

// let res = ' '
// for(let i of namesSorted){
//     res += i[0];
// }
// console.log(`Name of society is ${res}`)

