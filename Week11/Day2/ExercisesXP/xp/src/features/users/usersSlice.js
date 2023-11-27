import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    users: [],
    status: "idle", // 'loading / 'succeeded' / failed
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const res = await axios.get(USERS_URL);
    return res.data;

})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "success";
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
            })
    }
})

export default usersSlice.reducer;