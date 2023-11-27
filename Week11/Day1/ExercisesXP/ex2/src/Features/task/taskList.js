import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tasksState, addTask, editTask, deleteTask } from '../task/taskSlice';
import { nanoid } from "@reduxjs/toolkit";

const TaskList = ({ selectedDay }) => {
    const tasks = useSelector(tasksState);
    const dispatch = useDispatch();
    const [newTaskDesctription, setNewTaskDescription] = useState("");

    if (!selectedDay) {
        return <div>Select the day.</div>
    }

    const tasksForSelectedDay = tasks[selectedDay]?.tasks || [];

    const handleAddTask = () => {
        const newTask = { id: nanoid(), description: newTaskDesctription };
        dispatch(addTask({ day: selectedDay, task: newTask }));
        setNewTaskDescription("");
    }

    const handleEditTask = (id) => {
        const updatedTask = { id: id, desctiption: newTaskDesctription };
        dispatch(editTask({ day: selectedDay, taskId: id, updatedTask }));
        setNewTaskDescription("");
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTask({ day: selectedDay, taskId: id }));
    }

    return (
        <div>
            <h3>Tasks for {selectedDay.slice(0, 10)}</h3>
            {tasksForSelectedDay.length > 0 ? (
                <ul>
                    {tasksForSelectedDay.map((task) => (
                        <li key={task.id}>{task.description}</li>
                    ))}
                    <input type="text" value={newTaskDesctription} onChange={(e) => setNewTaskDescription(e.target.value)} placeholder="Type your task..."></input>
                    <button onClick={handleAddTask}>Add Task</button><br />
                    <button onClick={() => handleEditTask.tasksForSelectedDay[0].id}>Edit Task</button>
                    <button onClick={() => handleEditTask.tasksForSelectedDay[0].id}>Delete Task</button>
                </ul>
            ) : (
                <>
                    <p>No tasks for {selectedDay.slice(0, 10)}</p><br />
                    <input type="text" value={newTaskDesctription} onChange={(e) => setNewTaskDescription(e.target.value)} placeholder="Type your task..."></input>
                    <button onClick={handleAddTask}>Add Task</button><br />
                </>
            )}
        </div>
    );
};

export default TaskList;