const initialState = {
    todos: [],
};

export const addToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // console.log("addToDoReducer called with payload", action.payload)
            return { ...state, todos:[...state.todos,{
                id: state.todos.length+1,
                text: action.payload.text,
                completed: false,
            }] };
        default:
            return state ;
    }
}