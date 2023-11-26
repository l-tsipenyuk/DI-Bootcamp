import { useSelector, useDispatch } from 'react-redux';
import { addtoDo } from './todoSlice';
import { todoState } from './todoSlice';
import { useState } from "react";
import ToDoItem from './todoItem';

const ToDos = (props) => {
    const [newToDo, setNewToDo] = useState('');
    const todo = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setNewToDo(e.target.value);
    };

    const handleNewToDo = () => {
        const text = newToDo;
        const completed = false;
        dispatch(addtoDo({ text, completed }));
        setNewToDo('');
    }

    return (
        <>
            <div>
                <h1>Basic Todo List With React-Redux</h1>
                <input value={newToDo} onChange={handleInput} placeholder='Add ToDo' />
                <button onClick={handleNewToDo} id = "addButton">Add ToDo</button>
                <ul>
                    {todo.map((todo)=>(
                        <ToDoItem key ={todo.id} {...todo}/>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ToDos