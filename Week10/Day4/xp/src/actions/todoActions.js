export const addToDo = (payload) => {
    // console.log("action dispatched with payload", payload)
    return {
        type: 'ADD_TODO',
        payload,
    };
}