import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeToDo, toggleToDo } from "../actions/todoActions";


const AddToDo = (props) => {
    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.addToDoReducer.todos);

    const handleAddToDo = () => {
        dispatch(addToDo({ text: todoText }));
        setTodoText("");
    }

    const handleRemoveToDo = (id) => {
        dispatch(removeToDo(id));
    }

    const handleToggleToDo = (id) => {
        dispatch(toggleToDo(id));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add a new todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button onClick={handleAddToDo}>Add Todo</button><br></br>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveToDo(todo.id)}>Remove Todo</button>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleToDo(todo.id)} />
                            Completed
                        </label>
                        <br></br>
                    </li>)
                )}

            </ul>
        </div>
    );
};

export default AddToDo;