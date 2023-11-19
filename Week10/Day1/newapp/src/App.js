
import './App.css';
import Counter from "./components/Counter";
import Parent from "./components/Parent";
import Child from "./components/Child";
import ErrorBoundary from './components/ErrorBoundary';


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <h1>ErrorBoundary</h1>
        {/* <Counter /> */}
        {/* <Parent user = 'admin'>
          <Child />
        </Parent> */}

        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>

      </header>
    </div>
  );
}

export default App;
