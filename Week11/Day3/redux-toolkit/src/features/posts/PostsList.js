import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getposts, fetchPosts } from "./postsSlice";
import ReactionButton from "./ReactionButton";
import AddPostForm from "./AddPostForm";
import Users from "../users/Users";
// import axios from "axios";

// const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const PostsList = (props) => {
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // const fetchposts = async () => {
  //   try {
  //     const res = await axios.get(POST_URL);
  //     // return res.data
  //     dispatch(getposts(res.data));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  if (postStatus === "loading") return <p>Loading...</p>;

  if (postStatus === "failed") return <p>Somethih went wrong</p>;

  const renderPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <ReactionButton post={post} />
      </article>
    );
  });

  return (
    <section>
      <AddPostForm />
      <Users/>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};
export default PostsList;
