import { useSelector, useDispatch } from "react-redux";
import { getdata } from "../redux/actions/postsActions";
import { useEffect } from "react";
import { PostsAddForm } from "./PostsAddForm";

const Posts = (props) => {
    const posts = useSelector(state => state.postsReducer.posts);
    console.log('posts=>', posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getdata());
    }, []);

    if (!posts) return <p>No Posts</p>
    return (
        <div>
            <h2>Posts</h2>
            {/* <PostsAddForm /> */}
            {
                posts.map(item => {
                    return (
                        <article key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </article>
                    )
                })
            }
        </div>
    );
};

export default Posts