import { filter } from "lodash";
import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: action.id, text: action.text, completed: false }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case "FILTER_TODO":
      return state.map((todo)=>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [nextId, setNextId] = useState(0);
  const [editToDo, setEditToDo] = useState(0);
  const [filterToDoCompleted, setFilterToDoCompleted] = useState(0);

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;

    if (editToDo !== 0) {
      dispatch({ type: "EDIT_TODO", id: editToDo, text: todoText });
      setEditToDo(0);
    } else {
      dispatch({ type: "ADD_TODO", id: nextId, text: todoText });
      setNextId((prevId) => prevId + 1);
    }
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTodo = (id, text) => {
    setEditToDo(id);
    setTodoText(text);
  };

  const handleFilter = (id) => {
    dispatch({ type: "FILTER_TODO", id });
  };

  const handleFilterCompleted = () => {
    setFilterToDoCompleted(true);
  }

  const handleFilterNotCompleted = () => {
    setFilterToDoCompleted(false);
  }

  const handleAll = () => {
    setFilterToDoCompleted(0);
  }

  const filteredToDos = filterToDoCompleted !== 0 ? todos.filter((todo) => todo.completed === filterToDoCompleted): todos;

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo/Save Edited</button><br></br>
      <button onClick={handleFilterCompleted}>Show all the tasks completed</button>
      <button onClick={handleFilterNotCompleted}>Show all the non-completed tasks</button>
      <button onClick={handleAll}>Show all the tasks</button>
      <ul>
        {filteredToDos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit Todo</button>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={() => handleFilter(todo.id)}/>
              Completed
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;