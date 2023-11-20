import React from "react";

class ErrorBoundary extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            console.log("Error")
            return
        }
        return this.props.children;
    }
}

export default ErrorBoundary