import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme, background, color } = useTheme();

  return (
    
    <div style={background}>
      <h1 style={color}>Theme Switcher Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p style={color}>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;