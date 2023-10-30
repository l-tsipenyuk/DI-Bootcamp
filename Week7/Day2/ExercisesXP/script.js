//  Exercise 1 : HTML Form
// Instructions

// 1.1. Create a form like the one above.The form should contain three inputs:
// a small text input asking for a name,
//     a larger textarea input to write a message,
//         a submit input(“Send”)

//1.2. When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)

// 1.3. Where will the sent data appear?

// The sent data appears in the url box.

// 🌟 Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear ? Hint : Look at the Network Tab

// With POST data doesn't appear in the URL box. But we cand find it if we go to Network in developers tool and check the Payload.

//  Exercise 3 : JSON Mario
// Instructions
// 3.1. Using the code given convert this JS object into a JSON object. What happens to the nested objects ?

// const marioGame = {
//     detail: "An amazing game!",
//     characters: {
//         mario: {
//             description: "Small and jumpy. Likes princesses.",
//             height: 10,
//             weight: 3,
//             speed: 12,
//         },
//         bowser: {
//             description: "Big and green, Hates princesses.",
//             height: 16,
//             weight: 6,
//             speed: 4,
//         },
//         princessPeach: {
//             description: "Beautiful princess.",
//             height: 12,
//             weight: 2,
//             speed: 2,
//         }
//     },
// }

// let jsonMario = JSON.stringify(marioGame);
// console.log(jsonMario);
// console.log(marioGame);

// Nested objects are automatically converted

// 3.2. Convert and pretty print this JS object into a JSON object.Hint : Check out the JSON lesson on the platform.

// let jsonMarioPretty = JSON.stringify(marioGame,null,2);
// console.log(jsonMario);
// console.log(jsonMarioPretty);

// 3.3. Use your web inspector to add a breakpoint.Check the values of the JSON object in the debugger.

// To achieve this we should go Developers tool - Sources - and select js file on page.
//  We can add a breakpoint on any line of the JS file as well as monitor exceptions using this tool.
