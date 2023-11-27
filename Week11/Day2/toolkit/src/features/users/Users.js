import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { useEffect } from "react";

const Users = (props) => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    });

    return (
        <section>
            <h2>Author:</h2>
            <select>
                <option value={-1}></option>
                {users.map((user) => {
                    return <option value={user.id}>{user.name}</option>;
                })}
            </select>
        </section>
    );
};
export default Users;
