import React from "react";
import { useSelector } from "react-redux";
import { tasksState } from '../task/taskSlice';

const TaskList = ({ selectedDay }) => {
    const tasks = useSelector(tasksState);

    console.log("tasks:", tasks);
    console.log("selectedDay:", selectedDay);

    // if (!selectDay){
    //     return <div>Nothing selected.</div>
    // }

    const tasksForSelectedDay = tasks[selectedDay]?.tasks || [];

    console.log("tasksForSelectedDay:", tasksForSelectedDay);

    return (
        <div>
            <h3>Tasks for {selectedDay}</h3>
            {tasksForSelectedDay.length>0? (
            <ul>
                    {tasksForSelectedDay.map((task) => (
                    <li key={task.id}>{task.description}</li>
                ))}
            </ul>
            ):(
                <p>No tasks for {selectedDay}</p>
            )}
        </div>
    );
};

export default TaskList;