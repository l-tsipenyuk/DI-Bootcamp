import React from "react";

class CounterClass extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            inputValue: ''
        };
        console.log('1 counstructor')
        // this.count = 0
    }

    addOne = (val) => {
        // this.state.count = this.state.count + val;

        // console.log("count=>", this.state.count);

        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.valueFromInput = this.handleInput() })
    };

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        console.log('2 render')
        return (
            <>
                <h1>Counter Class</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.addOne(4)}>Add</button>
                <div>
                    <input onChange={this.handleChange} />
                    <h4>{this.state.inputValue}</h4>

                </div>
            </>
        )
    }
}

export default CounterClass