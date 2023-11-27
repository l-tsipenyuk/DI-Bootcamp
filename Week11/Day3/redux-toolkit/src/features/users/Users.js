import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { fetchAuthorPosts } from "../posts/postsSlice";
import { useEffect } from "react";

const Users = (props) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
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
