// For each array method
// const myArray = ["a", "b", "c", "5", "6"];

// myArray.forEach((element, index, arr) => {
// console.log(element);
// console.log(index);
//     arr[index] = arr[index*2];
// });

// console.log(myArray);

// myArray.forEach(function (number, i, arr){
//     arr[i] = number *2;
// });

// console.log(myArray);

// Example 1
// const numbers = [10, 11, 12, 15, 20];
// numbers.forEach(function(number){
//     number %2 === 0 && console.log(number);
// })

// or

// numbers.forEach((e) => {
//     if (e % 2 === 0){
//         console.log(e);
//     }
// });

// Array Some Method
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(myArr.some((value)=> value%2==0));

// let output = myArr.some((value) => {
//     console.log(value);
//     return value % 2 == 0;
// });

// console.log(output);

// Example 2
// Check if at least one element of the array starts with the letter 'h'
// const words = ["wow", "hey", "bye"];

// let output = words.some((word) =>{
//     word[0] === "h" && console.log(word);
// }
// )

// console.log(output);

// another option
// let output = words.some((ele) => ele.startsWith("h"));
// if we have one time true - we stop !! so we check for at least one
// console.log(output)

// Every method - checks if all of the elements respond to a condition.
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// const output = myArr.every((value) => {
//     console.log(value);
//     value < 4;
// });

// console.log(output);

// Example 3
// Check if all the elements of the array start with the letter 'h'
// const words = ["hello", "hey", "hola"];

// console.log(words.every((value) => value.startsWith("h")));

// Map method - copies the array
// const firstArr = [1, 4, 9, 16];
// const secondArr = firstArr.map((value,index)=>value*2);
// console.log(secondArr)

// const secondArr = firstArr.map((value, index, arr) => {
//     console.log(value);
//     console.log(index);
//     return value * index;
// }
// )

// console.log(secondArr);

// Example 4:  how to convert array in an array of objects
// myArr = [10, 20, 30, 40];

// let newArr = myArr.map((val, i, arr) => {
//     return {
//         value: val,
//         index: i
//     };
// });

// console.log(newArr);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);
// console.log(result);

// const myArr = [10, 20, 30, 40];

// const resultNum = myArr.filter((number) => number >20 && number<40);
// console.log(resultNum);

// const arr =[1,4,9,16];

// let sum = arr.reduce((acc,val)=>{
//     // console.log(`acc: ${acc}`)
//     // console.log(`val: ${val}`)
//     // console.log(`acc + val: ${acc + val}`);
//     return acc + val;
// })
// console.log(sum)

// Example 5
// let party = [
//     {
//         desert: 'Chocolate Mousse',
//         calories: 30,
//     },
//     {
//         desert: 'Apple Pie',
//         calories: 15,
//     },
//     {
//         desert: 'Croissant',
//         calories: 50,
//     },
//     {
//         desert: 'Strawberry Icecream',
//         calories: 5,
//     },
// ]

// const totalCalories = party.reduce((acc,currentDesert) =>{
//     // if (currentDesert.desert !== "Apple Pie"){
//     //     return acc + currentDesert.calories
//     // }
//     // return acc

//     // or in one line:

//     return currentDesert.desert !== "Apple Pie" ? acc + currentDesert.calories : acc;
// },0);

// console.log(totalCalories);

// Destructuring Assignment

// let a,b,rest;
// [a,b] = [10,20]
// console.log(a)

// Spread operator

// let a = 10;
// let b = 20;
// let rest = [30, 40, 50];
// const newArr = [a,b,rest];
// const iterable = [a, b, ...rest];

// console.log(iterable);
// console.log(newArr);

// const myString = "Nu vot takie vot dela";
// const newString = [...myString];
// console.log(newString);

// Rest operator
// let [c, d, ...rest] = [10, 20, 30, 40, 50];
// console.log(c);
// console.log(d);
// console.log(rest);

// Cloning Arrays
// const rainbow = ['red', 'orange', 'yellow'];
// const rainbowClone = rainbow;


// // Now it's a reference - not an independent copy. To fix it:
// const [...rainbowClone2] = rainbow;
// rainbowClone.push("green");

// console.log(rainbow);
// // console.log(rainbowClone);
// console.log(rainbowClone2);