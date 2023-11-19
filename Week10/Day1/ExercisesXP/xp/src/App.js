import { useState } from "react";
// Exercise1
// import  ErrorBoundary from "./Components/ErrorBoundary"

// Exercise2/3
import {Color, Child} from './Components/Color'

import './App.css';

// Exercise1
// const BuggyCounter = (props) => {
//   const [count, setCount] = useState(0);
//   if (count > 5) {
//     throw new Error("I crashed!")
//   }

//   const handleClick = () => {
//     return count + 1;
//   }

//   return (
//     <>
//       <button onClick={() => setCount(handleClick())}>Add</button>
//       <h2>Count: {count}</h2>
//     </>
//   );
// };



function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* Exercise1 */}

        {/* 1st simulation */}
        {/* <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary> */}

        {/* 2nd simulation */}
        {/* <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary> */}

        {/* 3d simulation */}
        {/* <BuggyCounter /> */}

        {/* Exercise2 */}
        <Child />
        <Color />

      </header>
    </div>
  );
}

export default App;
