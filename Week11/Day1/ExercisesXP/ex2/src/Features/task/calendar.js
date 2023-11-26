import React, { useState } from "react";
import Calendar from "react-calendar";

const TaskCalendar = ({ onSelectDay }) => {
    const [selectedDay, setSelectedDay] = useState(null);

    const handleDay = (day) => {
        setSelectedDay(day);
        onSelectDay(day);
    };

    return (
        <>
            <h1 className="header">Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={handleDay} value={selectedDay} />
            </div>
        </>
    );
}

export default TaskCalendar;