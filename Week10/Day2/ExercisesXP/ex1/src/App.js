
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeScreen() {
  return (
    <ErrorBoundary>
      <h2>Home</h2>
    </ErrorBoundary>
  )
}

function ProfileScreen() {
  return (
    <ErrorBoundary>
      <h2>Profile Screen</h2>
    </ErrorBoundary>
  )
}

function ShopScreen() {
  // throw new Error("An Error has occured.")
  return (
    <ErrorBoundary>
      <h1>An Error has occured.</h1>
    </ErrorBoundary>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/">Home</NavLink>
              <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink>
              <NavLink className="nav-item nav-link" to="/shop">Shop</NavLink>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/shop" element={<ShopScreen />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
