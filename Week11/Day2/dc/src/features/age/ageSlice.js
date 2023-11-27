import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ageUpAsync = createAsyncThunk("age/ageUpAsync", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 1;
});

const ageDownAsync = createAsyncThunk("age/ageDownAsync", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 1;
});

const ageSlice = createSlice({
    name: "age",
    initialState: { value: 30, loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ageUpAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageDownAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.value += action.payload;
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.value -= action.payload;
            })
    }
});

export const { reducer } = ageSlice;
export { ageUpAsync, ageDownAsync };