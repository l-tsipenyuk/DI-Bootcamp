const posts = [
    {
        id: "1",
        title: "Learning Redux",
        content: "I've heard good things."
    },
    {
        id: "2",
        title: "Actions...",
        content: "The more I say action, the more I want to do something."
    }
]

const initialState = {
    posts: null,
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'posts/getdata':
            return { ...state, posts: posts };
        case 'posts/addpost':
            const newPosts = [...state.posts];
            const {title, content} = action.payload;
            newPosts.push({
                id: newPosts.length + 1,
                title: title,
                content: content
            });
            return { ...state, posts: newPosts };
        default:
            return { ...state };
    }
}