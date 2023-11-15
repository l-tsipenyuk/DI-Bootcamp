import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <CounterClass />
      </header>
    </div>
  );
}

export default App;
