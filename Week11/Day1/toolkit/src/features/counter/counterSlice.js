import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += Number(action.payload) + Number(action.payload.num2);
        },
        incrementWithPrepare: {
            reducer(state, action) {
                state.count += action.payload
            },
            prepare(num1, num2, num3) {
                return { payload: num1 + num2 + num3 }
            }
        }
    }
})

export const { increment, decrement, reset, incrementByAmount, incrementWithPrepare } = counterSlice.actions;

export const couterState = (state) => state.counter.count;

export default counterSlice.reducer;