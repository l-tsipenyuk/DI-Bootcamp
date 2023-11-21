import React, { useRef, useState } from "react";
import "./App.css";

function CharacterCounter() {
  const inputRef = useRef(null);
  const [textLength, setTextLength] = useState(0);

  const handleInputChange = () => {
    const length = inputRef.current.value.length;
    setTextLength(length)
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p>Character Count: {textLength}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;
