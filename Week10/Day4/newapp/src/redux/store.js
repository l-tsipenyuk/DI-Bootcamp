import { configureStore } from "@reduxjs/toolkit"

import { counterReducer } from "./reducers/counterReducer"

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// npm i react - redux @reduxjs/toolkit