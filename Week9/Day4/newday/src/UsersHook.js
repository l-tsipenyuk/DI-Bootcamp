import { useState, useEffect } from "react"

const UsersHook = (props) => {
    const [users, setUsers] = useState([]);
    const [val, setVal] = useState(null);


    useEffect(() => {
        console.log('effect=>');
        if (val)
            getAllUsers();
    }, [val, props.name]);

    const getAllUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data)
            // this.setState({ users: data })
            setUsers(data)
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
            <div>
                {/* <button onClick={getAllUsers}>Get Users</button> */}
                <input onChange={(e) => setVal(e.target.value)} />
            </div>
            {
                users.map(item => {
                    return (
                        <div key={item.id}>
                            <h4>{item.name}, {item.email}</h4>
                        </div>
                    )
                })
            }
        </>
    );
};

export default UsersHook;