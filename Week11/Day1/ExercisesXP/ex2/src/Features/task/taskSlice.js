import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: {},
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { day, task } = action.payload;
            if (!state.tasks[day]) {
                state.tasks[day] = [task];
            } else {
                state.tasks[day].push(task);
            }
        },
        editTask: (state, action) => {
            const { day, taskId, updatedTask } = action.payload;
            const index = state.tasks[day].findIndex((task) => task.id === taskId);
            state.tasks[day][index] = updatedTask;
        },
        deleteTask: (state, action) => {
            const { day, taskId } = action.payload;
            state.tasks[day] = state.tasks[day].filter((task) => task.id !== taskId);
        },
    },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;

export const tasksState = (state) => state.tasks;

export default taskSlice.reducer;