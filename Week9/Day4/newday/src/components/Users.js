import React from "react";

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }

    getAllUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data)
            this.setState({ users: data })
        } catch (e) {
            console.log(e)
        }
    };

    componentDidMount = () => {
        this.getAllUsers()
    };

    componentDidUpdate = (prevProps, prevState) => {
        console.log('update=>', prevProps, prevState);
        // if(prevState.users.length > 0){
        //     alert('Hi you get the users already')
        // }
    };

    render() {
        return (
            <>
                <div>
                    <button onClick={this.getAllUsers}>Get Users</button>
                </div>
                {
                    this.state.users.map(item => {
                        return (
                            <div>
                                <h4>{item.name}, {item.email}</h4>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default Users