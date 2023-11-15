import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
import './App.css';
import Users from "./components/Users"
import UsersHook from './UsersHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Users/> */}
        <UsersHook />
        {/* <Counter />
        <CounterClass /> */}
      </header>
    </div>
  );
}

export default App;
