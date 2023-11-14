import React from 'react';
import './Exercise.css'


const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};


class Exercise extends React.Component {
    render() {
        return (
            <>
                {/* <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>This is a header.</h1> */}
                <h1 style={{...style_header}}>This is a header (with style_header).</h1>
                <p className = "para">This is a paragraph.</p>
                <a href="https://www.google.com/">This is a link to Google.</a>
                <p className="para">This is a form.</p>
                <form>
                    <label>
                        Enter your Name:
                        <input type="text" />
                    </label>
                    <button type ="submit">Submit</button>  
                </form>
                <p className="para">Here is an image:</p>
                <img src = "logo512.png" alt = "image"></img> 
                <p className="para">This is a list:</p>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </>)

    }
}


export default Exercise;