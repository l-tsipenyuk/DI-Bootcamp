import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const [background, setBackground] = useState({ backgroundColor: "rgb(219, 197, 180)" });
    const [backgroundBody, setBackgroundBody] = useState({ backgroundColor: "rgb(255, 220, 189)" });
    const [color, setColor] = useState({color: "black"})

    useEffect(()=>{
        document.body.style.backgroundColor = backgroundBody.backgroundColor
    },[background]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        setBackground((prevBackground) => (prevBackground.backgroundColor === "rgb(219, 197, 180)" ? { backgroundColor: "rgb(88, 161, 255)" } : { backgroundColor: "rgb(219, 197, 180)" }));
        setBackgroundBody((prevBackgroundBody) => (prevBackgroundBody.backgroundColor === "rgb(255, 220, 189)" ? { backgroundColor: "rgb(145, 181, 255)" } : { backgroundColor: "rgb(255, 220, 189)" }));
        setColor((prevColor) => (prevColor.color === "rgb(0, 41, 189)" ? { color: "rgb(255, 72, 189)" } : { color: "rgb(0, 41, 189)" }));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, background, color }}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export { ThemeProvider, useTheme };