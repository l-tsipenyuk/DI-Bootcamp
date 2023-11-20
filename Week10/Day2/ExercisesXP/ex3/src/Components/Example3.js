import React from "react";

class Example3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expData: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const res = await fetch('./Data.json');
            const data = await res.json()
            const expData = data.Experiences;

            console.log(expData)
            this.setState({ expData });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <h1> Example 3</h1 >
                <h3>Programming language</h3>
                {this.state.expData.map(item => (
                    <div key={item.logo}>
                        <img src= {item.logo}></img><br/>
                        <a href="#">{item.companyName}</a>
                        <h5>{item.roles[0].title}</h5>
                        <p>{item.roles[0].startDate} {item.roles[0].location}</p>
                        <p>{item.roles[0].description}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Example3