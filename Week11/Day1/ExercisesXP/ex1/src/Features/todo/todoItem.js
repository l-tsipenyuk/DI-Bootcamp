import React from 'react';
import { useDispatch } from 'react-redux';
import { removetoDo, toggletoDo } from './todoSlice';

const ToDoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch();

    const handleRemoveToDo = () => {
        dispatch(removetoDo(id));
    };

    const handleToggleToDo = () => {
        dispatch(toggletoDo(id))
    };

    return (
        <li>
            <span>
                - {text}
                <label>
                    <input type="checkbox" checked={completed} onChange={handleToggleToDo}/>
                    Completed
                </label>
                <button onClick={handleRemoveToDo}>Remove ToDo</button>
                <br />
            </span>
        </li>
    );
};

export default ToDoItem;