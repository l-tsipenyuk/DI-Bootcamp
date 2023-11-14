import React from 'react';
// import UserFavoriteAnimals from './UserFavoriteAnimals.js'
import Exercise from './Exercise3.js'

// Exercise 1 
// export function App(){
//   const sum = 5 + 5;
//   // const myelement = <h1>I Love JSX!</h1>;
//   const myelement = <h1>React is {sum} times better with JSX.</h1>
//   return myelement;
// }


// Exercise 2 
// export function App() {
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
//   };

//   return (<>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//     <UserFavoriteAnimals animals={user.favAnimals} />
//   </>)

// }

// Exercise 3
export function App(){
  return (
    <div className = "App">
      <Exercise /> </div>
    );
}

