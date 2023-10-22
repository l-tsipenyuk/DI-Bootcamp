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
// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// }

// 2.2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// let shoppingList = ["banana", "orange", "apple", "orange"];

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

// function hotelCost() {
//     while (true) {
//         userAnswer = prompt("Insert number of nights:");

//         if (userAnswer === null) {
//             break;
//         }

//         let nightsNumber = parseInt(userAnswer);

//         if (!isNaN(nightsNumber) && nightsNumber > 0) {
//             cost = nightsNumber * 140;
//             console.log(`The price for the hotel will be ${cost} $.`);
//             return cost;
//         } else {
//             console.log("Invalid input. Insert number of nights:");
//         }
//     }
// }

// hotelCost()

// 4.2. Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination: 300$

// function planeRideCost() {
//     const validDestinationPattern = /^[A-Za-z\s]*$/;

//     while (true) {
//         userAnswer = prompt("What is your flight destination?");
//         if (userAnswer === null) {
//             break;
//         }
//         if (validDestinationPattern.test(userAnswer)) {
//             if (userAnswer === 'London') {
//                 flightCost = 183;
//                 console.log(`The flight price will be ${flightCost}$.`);
//             } else if (userAnswer === 'Paris') {
//                 flightCost = 220;
//                 console.log(`The flight price will be ${flightCost}$.`);
//             } else {
//                 flightCost = 300;
//                 console.log(`The flight price will be ${flightCost}$.`);
//             }
//             return flightCost;
//         } else {
//             console.log("Invalid input. Please enter a valid flight destination.");
//         }
//     }
// }

// planeRideCost()

// 4.3. Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car.The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5 % discount.
// The function should return the total price of the car rental.

// function rentalCarCost() {
//     while (true) {
//         userAnswer = prompt("Insert number of days you want to rent a car:");

//         if (userAnswer === null) {
//             break;
//         }

//         let daysNumber = parseInt(userAnswer);

//         if (!isNaN(daysNumber) && daysNumber > 0) {
//             if (daysNumber > 10) {
//                 costCar = daysNumber * 40 * 0.95;
//                 console.log(`The price for car rent will be ${costCar} $.`);
//                 return costCar;
//             } else {
//                 costCar = daysNumber * 40;
//                 console.log(`The price for car rent will be ${costCar} $.`);
//                 return costCar;
//             }
//         } else {
//             console.log("Invalid input. Insert number of days you want to rent a car:");
//         }
//     }
// }

// rentalCarCost()

// 4.4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//         Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// 4.5.Call the function totalVacationCost()

// function totalVacationCost(){
//     hotelCost()
//     planeRideCost()
//     rentalCarCost()
//     totalSum = cost + flightCost + costCar;
//     console.log(`Total vacation cost is ${totalSum}$.`);
// }

// totalVacationCost()

// 4.6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

// below are the changed functions:

// function hotelCost(nights=2) {
//     while (true) {

//         if (nights === null) {
//             break;
//         }

//         let nightsNumber = parseInt(nights);

//         if (!isNaN(nightsNumber) && nightsNumber > 0) {
//             cost = nightsNumber * 140;
//             console.log(`The price for the hotel will be ${cost} $.`);
//             return cost;
//         } else {
//             console.log("Invalid input. Insert number of nights:");
//         }
//     }
// }

// function planeRideCost(destination="Paris") {
//     const validDestinationPattern = /^[A-Za-z\s]*$/;

//     while (true) {
//         userAnswer = destination;
//         if (userAnswer === null) {
//             break;
//         }
//         if (validDestinationPattern.test(userAnswer)) {
//             if (userAnswer === 'London') {
//                 flightCost = 183;
//                 console.log(`The flight price will be ${flightCost}$.`);
//             } else if (userAnswer === 'Paris') {
//                 flightCost = 220;
//                 console.log(`The flight price will be ${flightCost}$.`);
//             } else {
//                 flightCost = 300;
//                 console.log(`The flight price will be ${flightCost}$.`);
//             }
//             return flightCost;
//         } else {
//             console.log("Invalid input. Please enter a valid flight destination.");
//         }
//     }
// }

// function rentalCarCost(days=2) {
//     while (true) {
//         userAnswer = days;

//         if (userAnswer === null) {
//             break;
//         }

//         let daysNumber = parseInt(userAnswer);

//         if (!isNaN(daysNumber) && daysNumber > 0) {
//             if (daysNumber > 10) {
//                 costCar = daysNumber * 40 * 0.95;
//                 console.log(`The price for car rent will be ${costCar} $.`);
//                 return costCar;
//             } else {
//                 costCar = daysNumber * 40;
//                 console.log(`The price for car rent will be ${costCar} $.`);
//                 return costCar;
//             }
//         } else {
//             console.log("Invalid input. Insert number of days you want to rent a car:");
//         }
//     }
// }

// function totalVacationCost(userInfo) {
//     userInfo = prompt("Insert number of nights in a hotel, flight destination and days of car rent (comma separated):");
//     const values = userInfo.split(",");
//     hotelCost(values[0]);
//     planeRideCost(values[1]);
//     rentalCarCost(values[2]);
//     totalSum = cost + flightCost + costCar;
//     totalSum = cost
//     console.log(`Total vacation cost is ${totalSum}$.`);
// }

// totalVacationCost()

// Exercise 5 : Users
// 5.1.Add the code to your HTML file
// 5.2. Using Javascript:
// 5.2.1. Retrieve the div and console.log it

// const div = document.querySelector("div");
// console.log(div);

// 5.2.2.Change the name “Pete” to “Richard”.

// document.querySelectorAll("li")[1].innerHTML = "Richard";

// 5.2.3.Delete the second < li > of the second < ul >.

// let parentElem = document.querySelectorAll(".list")[1];
// let childElem = parentElem.querySelectorAll("li")[1];
// parentElem.removeChild(childElem);

// 5.2.4.Change the name of the first < li > of each < ul > to your name. (Hint : use a loop)

// const list = document.querySelectorAll(".list");

// list.forEach(list => {
//     const firstListItem = list.querySelector("li");
//     if (firstListItem) {
//         firstListItem.textContent = "Liya";
//     }
// });

// 5.3.Using Javascript:
// 5.3.1. Add a class called student_list to both of the < ul > 's.

// const list = document.querySelectorAll(".list");
// list.forEach(ul => {
//     ul.classList.add("student_list");
// });

// 5.3.2.Add the classes university and attendance to the first < ul >.

// const list = document.querySelectorAll(".list");
// list[0].classList.add("university");
// list[0].classList.add("attendance");

// 5.4. Using Javascript:
// 5.4.1. Add a “light blue” background color and some padding to the < div >.
// document.querySelector("div").style.backgroundColor = "lightblue";
// document.querySelector("div").style.padding = "20px 10px 20px 10px";

// 5.4.2.Do not display the < li > that contains the text node “Dan”.(the last < li > of the first < ul >)

// let parentElem = document.querySelectorAll(".list")[1];
// let childElem = parentElem.querySelectorAll("li")[2];
// childElem.style.display = "none";

// 5.4.3.Add a border to the < li > that contains the text node “Richard”.(the second < li > of the < ul >)

// since the step with Richard is commented I'm applying the feature to "Pete":

// let parentElem = document.querySelectorAll(".list")[0];
// let childElem = parentElem.querySelectorAll("li")[1];
// childElem.style.border = "thick solid #0000FF";

// 5.4.4.Change the font size of the whole body.

// document.querySelector("body").style.fontSize = "xx-large";

// 5.4.5.Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// document.querySelector("div").style.backgroundColor = "lightblue"
// if (document.querySelector("div").style.backgroundColor === "lightblue"){
//     alert("Hello x and y");
// }

// Exercise 6 : Change The Navbar
// 6.1. Add the code above, to your HTML file
// 6.2. Using Javascript, in the < div >, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// newDiv = document.getElementById("navBar");
// console.log(newDiv);
// newDiv.setAttribute("id", "socialNetworkNavigation");
// console.log(newDiv);

// 6.3.We are going to add a new < li > to the < ul >.
// First, create a new < li > tag(use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node(<li>).
// Finally, append this updated list node to the unordered list(<ul>), using the appendChild method.

// const list = document.getElementById("navBar");
// const newLi = document.createElement("li");
// const textNode = document.createTextNode("Logout");
// newLi.appendChild(textNode);
// list.appendChild(newLi);

// 6.4. Use the firstElementChild and the lastElementChild properties to retrieve the first and last < li > elements from their parent element(<ul>). Display the text of each link. (Hint: use the textContent property).

// const list = document.querySelector("ul");
// console.log(list.firstElementChild.textContent);
// console.log(list.lastElementChild.textContent);

// Exercise 7 : My Book List
// 7.1.In the body of the HTML page, create an empty section:
//  <section class="listBooks"></section>

// 7.2. In the js file, create an array called allBooks.This is an array of objects.Each object is a book that has 4 keys(ie. 4 properties) :
// title,
//     author,
//     image : a url,
//     alreadyRead : which is a boolean(true or false).
// 7.3.Initiate the array with 2 books of your choice(ie.Add manually 2 books objects in the array)

// const allBooks = [{
//     "title": "There's No Such Thing as an Easy Job",
//     "author": "Kikuko Tsumura",
//     "image": "https://m.media-amazon.com/images/I/71gZqerhSyL._AC_UF350,350_QL50_.jpg",
//     "alreadyRead": true,
// }, {
//     "title": "The Beauty Queen of Jerusalem",
//     "author": "Sarit Yishai-Levi",
//     "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1450039351i/26114648.jpg",
//     "alreadyRead": false,
// }]

// 7.4.Using the DOM, render each book inside a div(the div must be added to the < section > created in part 1).
// For each book:
// You have to display the book’s title and the book’s author.
//     Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read.Set the color of the book’s details to red.

// const list = document.querySelector(".listBooks");
// allBooks.forEach(book => {
//     const newDiv = document.createElement("div");
//     const textNode = document.createTextNode(`${book.title} written by ${book.author}.`);
//     const img = document.createElement("img");
//     img.src = book.image;
//     img.style.width = "100px"

//     if (book.alreadyRead) {
//         newDiv.style.color = "red";
//     }

//     newDiv.append(img);
//     newDiv.appendChild(textNode);
//     list.appendChild(newDiv);
// })


