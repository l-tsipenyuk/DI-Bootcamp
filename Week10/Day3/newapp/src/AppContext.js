import Display from './сomponents/Display';
import './App.css';
import Action from './сomponents/Action';
import { useState, createContext } from 'react';

export const AppContext = createContext();
export const AppContext2 = createContext();
// useContext hook - createContext hook

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Bla bla')

  return (
    <div className="App">
      <AppContext.Provider value={{ count, setCount }}>
        <AppContext2.Provider value={{ text }}>
          {/* <Display count={count} /> */}
          {/* <Action count={count} setCount={setCount} /> */}
          <Display />
        </AppContext2.Provider>
        
        <Action />
      </AppContext.Provider>
    </div>
  );
}

export default App;
