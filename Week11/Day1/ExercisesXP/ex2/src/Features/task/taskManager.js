import React, { useState } from "react";
import TaskCalendar from './calendar';
import TaskList from './taskList';

const TaskManager = () => {
    const [selectDay, setSelectDay] = useState(null);

    const handleDaySelect = (day) => {
        setSelectDay(day);
    };

    return(
        <div>
            <TaskCalendar onSelectDay={handleDaySelect}/>
            {selectDay && <TaskList selectDay={selectDay}/>}
        </div>
    );
};

export default TaskManager;