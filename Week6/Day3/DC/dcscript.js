// let client = "John";
// // let client = "Betty";

// const groceries = {
//     fruits: ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     // totalPrice: "20$",
//     totalPrice: "35$",
//     other: {
//         // paid: true,
//         paid: false,
//         meansOfPayment: ["cash", "creditCard"]
//     }
// }

// 1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object.Use the forEach method.

// function displayGroceries(){
//     groceries.fruits.forEach((i) => console.log(i));
// }

// displayGroceries()

// 2. Create another arrow function named cloneGroceries.
// 2.1. In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// 2.2. Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// Yes, because we changed client and user directly refers to client. 

// 2.3. In the function, create a variable named shopping that is equal to the groceries variable.
// 2.4. Change the value of the totalPrice key to 35$.Will we also see this modification in the shopping object ? Why ?
// Yes, here is the same logics as in 2.2.

// 2.5. Change the value of the paid key to false.Will we also see this modification in the shopping object ? Why ?
// Yes, the logic is again the same. But due to scope if we changed user or shopping, client or groceries wouldn't be affected due to the scope.

// function cloneGroceries(){
//     let user = client;
//     // console.log(user);
//     let shopping = groceries;
//     console.log(shopping);

// }

// cloneGroceries()