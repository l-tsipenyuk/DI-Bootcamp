import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch = (error, errorInfo) => {
        console.log('error=>', error);
        console.log('error=>', errorInfo);
        this.setState({ hasError: true, error, errorInfo })
    }

    render() {
        if (this.state.hasError) {
            return <><details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </details></>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;