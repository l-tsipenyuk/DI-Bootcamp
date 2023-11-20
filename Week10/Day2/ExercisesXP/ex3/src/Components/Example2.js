import React from "react";

class Example2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            development: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const res = await fetch('./Data.json');
            const data = await res.json()
            const skills = data.Skills[0].SkillSet;
            const development = data.Skills[1].SkillSet;
            console.log(development)
            this.setState({ skills: skills, 
                development: development });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <h1> Example 2</h1 >
                <h3>Programming language</h3>
                {this.state.skills.map(item => (
                    <div key={item.Name}>
                        <ul>
                            <li>{item.Name}</li>
                        </ul>
                    </div>
                ))}
                <h3>Web-based application development</h3>
                {this.state.development.map(item => (
                    <div key={item.Name}>
                        <ul>
                            <li>{item.Name}</li>
                        </ul>
                    </div>
                ))}

            </div>
        )
    }
}

export default Example2