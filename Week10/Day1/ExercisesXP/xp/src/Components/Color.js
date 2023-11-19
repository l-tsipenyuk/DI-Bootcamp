// Exercise2

import React, { Component } from "react";

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: "red",
            show: true,
        };
    };

    componentDidMount() {
        this.timeOutFunc = setTimeout(() => {
            this.setState({ favoriteColor: "yellow" })
        }, 5000);
    }

    changeColor() {
        this.setState({ favoriteColor: "blue" })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    // componentDidUpdate() {
    //     console.log("after update");
    // }

    // getSnapshotBeforeUpdate(){
    //     console.log("in getSnapshotBeforeUpdate");
    //     return 0;
    // }

    render() {
        return (
            <>
                <h1>My Favorite Color is <i>{this.state.favoriteColor}</i></h1>
                <button onClick={() => this.changeColor()}>Change color</button>
            </>
        )
    }
}

// Exercise3
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: "red",
            show: true,
        };
    }

    componentWillUnmount() {
        alert("unmounted message");
    }

    deleteHeader(){
        alert("the component is about to be unmounted")
        this.setState({show: false})
    }

    render() {
    if(this.state.show) {
            return (
                <>
                    <h1>Hello World!</h1>
                    <button onClick={() => this.deleteHeader()}>Delete Header</button>
                </>
            )
        }
    }
}



export { Color, Child };