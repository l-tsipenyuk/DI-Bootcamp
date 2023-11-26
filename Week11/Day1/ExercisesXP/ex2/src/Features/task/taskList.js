import React from "react";
import { useSelector } from "react-redux";
import { tasksState } from '../task/taskSlice';

const TaskList = ({ selectDay }) => {
    const tasks = useSelector(tasksState);

    if (selectDay === undefined){
        return <div>Nothing selected.</div>
    }

    const tasksSelectDay = tasks[selectDay] || [];

    return (
        <div>
            <h3>Tasks for {selectDay}</h3>
            <ul>
                {tasksSelectDay.map((task) => (
                    <li key={task.id}>{task.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;