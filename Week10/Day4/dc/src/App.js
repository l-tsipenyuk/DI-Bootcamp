import logo from './logo.svg';
import './App.css';
import AddToDo from './components/todoComponents';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddToDo />
      </div>
    </Provider>
  );
}

export default App;
