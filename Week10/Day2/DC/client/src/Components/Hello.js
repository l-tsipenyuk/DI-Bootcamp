import React from "react";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            messageServer: "",
            input: ""
        };
    }

    getData = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/hello/');
            const data = await res.json();
            this.setState({ message: data.message });
        } catch (e) {
            console.log(e);
        }
    }

    postData = async () => {
        const { input } = this.state;

        this.setState({ messageServer: input });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: input,
            }),
        };

        try {
            const res = await fetch('http://localhost:3000/api/message', options);
            const data = await res.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    handleInputs = (e) => {
        e.preventDefault();
        this.setState({ input: e.target.value });
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <h2>Post to server:</h2>
                <form onSubmit={(e) => {e.preventDefault(); this.postData(); }}>
                    <input className="box" name="message" placeholder="Message:" type="text" onChange={this.handleInputs} />
                    <br />
                    <button type="submit">Send to server</button>
                </form>
                <h3>This was sent to server: {this.state.messageServer}</h3>
            </div>
        );
    }
}

export default Hello;
