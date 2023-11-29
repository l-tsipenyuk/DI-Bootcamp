import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const state = {
    products: [],
    status: "idle",
}

const GET_PRODUCTS_URL = 'http://localhost:3001/api/products';

export const fetchProducts = createAsyncThunk("products/fetchproducts", async () => {
    const res = await axios.get(GET_PRODUCTS_URL);
    return res.data;
})

const shopSlice = createSlice({
    name: "shop",
    initialState: state,
    reducers: {},
    extraRedusers(builder) {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = "success"
            })
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
            })
    }
});

export default shopSlice.reducer;