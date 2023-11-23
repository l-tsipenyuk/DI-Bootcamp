export const addToDo = (payload) => {
    return {
        type: 'ADD_TODO',
        payload,
    };
}

export const removeToDo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id,
    }
}

export const toggleToDo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    }
}