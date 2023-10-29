// Exercise 1 : Location
// Instructions
// Analyze the code below.What will be the output ?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const { name, location: { country, city, coordinates: [lat, lng] } } = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// The output will be "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude (-123.1207)."

// Exercise 2: Display Student Info
// Instructions
// Using the code given, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser) {
    //destructuring
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
