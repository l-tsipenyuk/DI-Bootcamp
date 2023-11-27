import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { useEffect } from "react";

const Users = (props) => {
    const users = useSelector((state) => state.users.users);
    const status = useSelector((state) => state.users.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <h2>Users (from API):</h2>
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>An Error Occured :(</p>}
            {status === "success" && users.map((user) => <p key={user.id}>{user.name}</p>)}
        </>
    );
};

export default Users;