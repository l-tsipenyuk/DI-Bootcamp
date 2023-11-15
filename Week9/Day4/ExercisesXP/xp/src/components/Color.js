// Exercise4

import React, { useState, useEffect } from "react";

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red")

    useEffect(() => {

        const timeOutFunc = setTimeout(() => {
            setFavoriteColor("yellow")
        }, 5000);

        return () => {
            clearTimeout(timeOutFunc);
            // console.log("1st useEffect");
            alert("useEffect reached");
        }
       
       
    }, []);

    const changeColor = () => {
        setFavoriteColor("blue");
    }

    return (
        <>
            <h1>My Favorite Color is <i>{favoriteColor}</i></h1>
            <button onClick={() => changeColor()}>Change color</button>
        </>
    )
}


export default Color