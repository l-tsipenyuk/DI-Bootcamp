const initialState = {
    todos: [],
};

export const addToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, todos: [...state.todos, {
                    id: state.todos.length + 1,
                    text: action.payload.text,
                    completed: false,
                }]
            };

        case 'REMOVE_TODO':
            return {
                ...state, todos:
                    state.todos.filter((todo) => todo.id !== action.id),
            };

        case 'TOGGLE_TODO':
            return{
                ...state, todos:
                    state.todos.map((todo) => todo.id === action.id? {...todo, completed: !todo.completed} : todo),                
            }
        default:
            return state;
    }
}