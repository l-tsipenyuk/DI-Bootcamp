import React from "react";

class Example1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            social: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const res = await fetch('./Data.json');
            const data = await res.json()
            const social = data.SocialMedias;
            this.setState({ social });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <h1> Example 1</h1 >
                {this.state.social.map(item => (
                    <div key={item}>
                        <ul>
                            <li>{item}</li>
                        </ul>
                    </div>
                ))}


            </div>
        )
    }
}

export default Example1