// Part I

// Create a function getCarHonda(carInventory) that takes a single parameter.carInventory‘s value is an array which is an inventory of cars(see the array of objects below)
// The function should
// loop through the array of object and return the first car with the name “Honda”.
// then, return a string in the format This is a { car_make } { car_model } from { car_year }.
// Hint: Find an array method that returns the value of the first element in an array that pass a test.

// const inventory = [
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];

// function getCarHonda(carInventory){
//     const found = carInventory.find((element)=> element ==="Honda");
//     let a = inventory.find(item => item.car_make === found);
//     return `This is a ${found} ${a.car_model} from ${a.car_year}.`}

// let carInventory = inventory.map((car, index) => car.car_make);
// console.log(getCarHonda(carInventory))

// Part II

// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter.carInventory‘s value is an array which is an inventory of cars(see the array of objects below)
// the function should return an inventory that is sorted by car_year, ascending.
//     Hint : Check out this tutorial on the sort method
// Use the cars inventory below:

// const inventory = [
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];

// let carInventory = inventory.map((car, index) => car.car_make);
// function sortCarInventoryByYear(carInventory){
//     inventory.sort(function (x, y) {
//         return x.car_year - y.car_year;
//     });
//     console.log(inventory);
//     // console.table(inventory);
// }

// sortCarInventoryByYear(carInventory)