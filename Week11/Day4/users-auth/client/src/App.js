import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginRegister from './components/LoginRegister';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginRegister title='Login'/>} />
        <Route path='/register' element={<LoginRegister title='Register' />} />
      </Routes>
    </div>
  );
}

export default App;
