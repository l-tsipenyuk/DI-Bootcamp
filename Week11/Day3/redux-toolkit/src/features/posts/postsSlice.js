import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const posts = [
//   {
//     id: "1",
//     title: "Learning Redux",
//     content: "I've heard good things.",
//     reactions: {
//       thumbsUp: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0,
//     },
//   },
//   {
//     id: "2",
//     title: "Actions...",
//     content: "The more I say action, the more I want to do something.",
//     reactions: {
//       thumbsUp: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0,
//     },
//   },
// ];

const state = {
  posts: [],
  status: "idle", // 'loading / 'succeeded' / failed
};

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

export const fetchAuthorPosts = createAsyncThunk(
  "posts/fetchAuthorPosts",
  async (id) => {
    const response = await axios.get(`${POST_URL}?userId=${id}`);
    console.log(response.data);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: state,
  reducers: {
    getposts: (state, action) => {
      // type:'posts/getposts'
      // console.log("posts/getposts=>", action);
      state.posts = action.payload;
    },
    addreaction: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    addpost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedPosts = action.payload.map((post) => {
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });
        state.posts = loadedPosts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchAuthorPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedPosts = action.payload.map((post) => {
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });
        state.posts = loadedPosts;
      });
  },
});

export const { getposts, addreaction, addpost } = postsSlice.actions;

export default postsSlice.reducer;
