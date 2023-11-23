import { configureStore } from "@reduxjs/toolkit";
import { addToDoReducer } from "./reducers/todoReducers";

export default configureStore({
    reducer: {
        addToDoReducer: addToDoReducer,
    },
});