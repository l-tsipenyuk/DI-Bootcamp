// Exercise2

import React from "react";

const clickMe = () => alert("I was clicked.")

const handleInput = (e) => {
    if (e.key != "Enter") return;
    alert(`The enter key was pressed, your input is '${e.target.value}'.`)
}


class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true,
        buttonTextInput: "On"}
    }

    buttonText = (e) => {
        let buttonTextInput = "";
        if (this.state.isToggleOn === true) {
            this.setState({ isToggleOn: false, buttonTextInput: "Off"})
        }else{
            buttonTextInput = "Off";
            this.setState({ isToggleOn: true, buttonTextInput: "On" })
        }
    }

    render() {
        return (
            <>
                <button onClick={() => clickMe()}>Click me</button><br></br>
                <input type="text" onKeyDown={handleInput} /><br></br>
                <button onClick={() => this.buttonText()}>{this.state.buttonTextInput}</button>
            </>
        )
    }
}

export default Event;
