export const getdata = () => {
    return {
        type: "posts/getdata"
    };
}

export const addpost = (title, content) => {
    return {
        type: "posts/addpost",
        payload: { title, content }
    };
}

