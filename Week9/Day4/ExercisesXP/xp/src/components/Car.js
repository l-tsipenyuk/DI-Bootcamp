// Exercise1

import React from "react";
import {Garage} from "./Garage" ;

const carinfo = { name: "Ford", model: "Mustang" };

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: 'purple'}
    }

    render() {
        return(
            <>
                <p>This car is {carinfo.model}.</p>
                <p>The color of this car is {this.state.color}.</p>
                <Garage size = "small"/>
            </>
        );
    };
}

export default Car