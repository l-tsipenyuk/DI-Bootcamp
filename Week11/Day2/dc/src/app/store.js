import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/age/ageSlice";
import thunk from "redux-thunk";

const store = configureStore({
    reducer:{
        age: reducer,
    },
    middleware: [thunk],
});

export default store