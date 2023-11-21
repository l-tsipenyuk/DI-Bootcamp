import Display from './сomponents/Display';
import './App.css';
import Action from './сomponents/Action';
import { useState, createContext, useRef } from 'react';



function App() {
  const [ count, setCount ] = useState(0);

  // const inputRef = useRef();
  // const divRef = useRef();

  const nameRef = useRef('Dan');
  let name = 'John'


  // const show = () => {
  //   console.log('ref=>', inputRef.current.value, inputRef.current.name);
  //   console.log('divRef=>', divRef.current.className);
  // }

  const changes = () => {
    name = 'Marry';
    console.log('name=>', name);
    nameRef.current = 'Avi';
    console.log('nameRef=>', nameRef.current);
  }

  return (
    // <div className="App" ref = {divRef}>
    <div className="App">
      <h2>UseRef</h2>
      nameRef: {nameRef.current} name: {name}
      {/* <input ref={inputRef} name = "username"/>
      <button onClick={show}>Show Ref</button> */}
      <br></br>
      <button onClick={changes}>Show Ref</button>
      <br></br>
      <button onClick={() => setCount(count + 1)}>Add one {count}</button>
    </div>
  );
}

export default App;
