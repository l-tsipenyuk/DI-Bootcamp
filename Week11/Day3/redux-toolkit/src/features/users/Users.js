import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { fetchAuthorPosts } from "../posts/postsSlice";
import { useEffect } from "react";

import { useSelectUsersSelector } from "./usersHook";
import { useFetchUsers } from "./usersHook";

const Users = (props) => {
  // const users = useSelector((state) => state.users.users);
  const users = useSelectUsersSelector();
  const dispatch = useDispatch();

  const callFetchUseres = useFetchUsers()

  useEffect(() => {
    // dispatch(fetchUsers());
    callFetchUseres();
  });

  const getAuthorPosts = (e) => {
    dispatch(fetchAuthorPosts(e.target.value));
  };

  return (
    <section>
      <h2>Author:</h2>
      <select onChange={getAuthorPosts}>
        <option value={-1}></option>
        {users.map((user) => {
          return <option value={user.id}>{user.name}</option>;
        })}
      </select>
    </section>
  );
};
export default Users;
