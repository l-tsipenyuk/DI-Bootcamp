import { useDispatch } from "react-redux";
import { useState } from "react";
import { addpost } from "../redux/actions/postsActions";

const PostsAddForm = (props) => {
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');

    const dispatch = useDispatch();

    const addPost = (e) => {
        e.preventDefault();
        dispatch(addpost(title, content));
        setTitle("");
        setContent("");
    };

    return (
        <>
            <h2>Add a new Post: </h2>
            <form onSubmit={addPost}>
                Title:<input value = {title} onChange={(e)=> setTitle(e.target.value)}/><br></br>
                Content:{" "}
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                <input type="submit" value="Add Post" />
            </form>
        </>
    );
};

export default PostsAddForm;