// Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// 1.1. Create a function call displayNumbersDivisible() that takes no parameter.
// 1.2. In the function, loop through numbers 0 to 500.
// 1.3.Console.log all the numbers divisible by 23.
// 1.4. At the end, console.log the sum of all numbers that are divisible by 23.

// function displayNumbersDivisible() {
//     res = []
//     for (let i = 0; i < 501;i++) {
//         if (i % 23 === 0){ 
//         res.push(i)}
//     }
//     let sum = 0;
//     res.forEach(element => {
//         sum += element;
//     });
//     console.log(res);
//     console.log(`The sum is ${sum}.`);
// }

// displayNumbersDivisible()

// 1.5. Bonus: Add a parameter divisor to the function.

// function displayNumbersDivisible(divisor=23) {
//     res = []
//     for (let i = 0; i < 501; i++) {
//         if (i % divisor === 0) {
//             res.push(i)
//         }
//     }
//     let sum = 0;
//     res.forEach(element => {
//         sum += element;
//     });
//     console.log(res);
//     console.log(`The sum is ${sum} (for the divisor ${divisor}).`);
// }

// displayNumbersDivisible(100)

// Exercise 2 : Shopping List
// 2.1. Add the stock and prices objects to your js file.
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

// 2.2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple", "orange"];

// 2.3. Create a function called myBill() that takes no parameters.
// 2.4. The function should return the total price of your shoppingList.In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if ..in)
// If the item is in stock find out the price in the prices object.
// 2.5. Call the myBill() function.

// function myBill() {
//     let sum = 0;
//     let countedItem = {};
//     for (let item of shoppingList) {
//         if (item in stock && !countedItem[item]) {
//             let count = shoppingList.filter(x => x === item).length
//             sum += count * prices[item];
//             countedItem[item] = true;
//         }
//     }
//     console.log(`Total price is ${sum}`)
// }

// myBill()

// 2.6. Bonus: If the item is in stock, decrease the item’s stock by 1
// function myBill() {
//     let sum = 0;
//     let countedItem = {};
//     let newStock = { ...stock };
//     for (let item of shoppingList) {
//         if (item in stock && !countedItem[item]) {
//             let count = shoppingList.filter(x => x === item).length;
//             let cost = count * prices[item];
//             if (count > newStock[item]) {
//                 count = newStock[item];
//                 cost = count * prices[item];
//             }
//             sum += cost;
//             newStock[item] -= count;
//             countedItem = true;
//         }
//     }
//     console.log(`Total price is ${sum}`);
//     console.log(newStock);
// }

// myBill()

// Exercise 3 : What’s In My Wallet ?
//     Instructions
// 3.1.Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments:
// an item price and an array representing the amount of change in your pocket.
// 3.2. In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price(ie.it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price(ie.it means that you cannot afford the item) the function should return false
// 3.3. Change will always be represented in the following order: quarters, dimes, nickels, pennies

// function changeEnough(itemPrice, amountOfChange){
//         let quarters = amountOfChange[0]*0.25;
//         let dimes = amountOfChange[1] * 0.10;
//         let nickels = amountOfChange[2] * 0.05;
//         let pennies = amountOfChange[3] * 0.01;
//         let sum = quarters+dimes+nickels+pennies;
//         if (sum >= itemPrice){
//             return true;
//         }else{
//             return false;
//         }
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]));
// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 4 : Vacations Costs
// 4.1.Let’s create functions that calculate your vacation’s costs:
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night.The function should return the total price of the hotel.

