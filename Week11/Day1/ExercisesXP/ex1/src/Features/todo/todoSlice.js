import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    id: 0,
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtoDo: (state, action) => {
            const { text, completed } = action.payload;
            state.todos.push({ id: state.id, text, completed });
            state.id += 1;
        },
        removetoDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggletoDo: (state, action) => {
            const todos = state.todos.find((item)=>item.id === action.payload);
            if(todos){
                todos.completed =! todos.completed;
            }
        }
    }
})

export const { addtoDo, removetoDo, toggletoDo } = todoSlice.actions;

export const todoState = (state) => state.todo.todos;

export default todoSlice.reducer;