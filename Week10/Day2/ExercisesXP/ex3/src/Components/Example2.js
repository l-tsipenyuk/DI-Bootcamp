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
            const skills = data.Skills.SkillSet.Name;
            // const development = data.Skills.SkillSet.Name;
            console.log(skills)
            // this.setState({ social });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <h1> Example 2</h1 >
                {/* {this.state.social.map(item => (
                    <div key={item}>
                        <ul>
                            <li>{item}</li>
                        </ul>
                    </div>
                ))} */}


            </div>
        )
    }
}

export default Example2