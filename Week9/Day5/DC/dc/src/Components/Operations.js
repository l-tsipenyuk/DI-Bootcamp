import React from "react";

class Operations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue1: "",
            inputValue2: "",
            result: "result",
        };
    }

    handleChange = (e, number) => {
        const inputValue = e.target.value;
        this.setState({ [`inputValue${number}`]: inputValue });
    };

    sum = () => {
        const { inputValue1, inputValue2 } = this.state;
        const sum = parseInt(inputValue1) + parseInt(inputValue2);
        this.setState({ result: sum });
    };

    substract = () => {
        const { inputValue1, inputValue2 } = this.state;
        const substract = parseInt(inputValue1) - parseInt(inputValue2);
        this.setState({ result: substract });
    };

    multiply = () => {
        const { inputValue1, inputValue2 } = this.state;
        const multiply = parseInt(inputValue1) * parseInt(inputValue2);
        this.setState({ result: multiply });
    };

    divide = () => {
        const { inputValue1, inputValue2 } = this.state;
        const divide = (parseInt(inputValue1) / parseInt(inputValue2)).toFixed(1);
        this.setState({ result: divide });
    };

    render() {
        return (
            <>
                <h1>Operations with 2 numbers</h1>
                <div className="container">
                    <div className="inputs">
                        <input onChange={(e) => this.handleChange(e, 1)} />
                        <input onChange={(e) => this.handleChange(e, 2)} />
                    </div>
                    <div className="buttons">
                        <button onClick={this.sum}>Add</button>
                        <button onClick={this.substract}>Substract</button>
                        <button onClick={this.multiply}>Multiply</button>
                        <button onClick={this.divide}>Divide</button>
                    </div>
                    <p>{this.state.result}</p>
                </div>
            </>
        );
    }
}

export default Operations;
