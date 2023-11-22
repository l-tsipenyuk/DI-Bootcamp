import { useState, useReducer } from "react";

// with useReducer:

const initState = {
    result: 0,
    name: '',
    input: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, result: state.result + 1 }
        case 'MINUS':
            return { ...state, result: state.result - 1 }
        case 'NEW_NAME':
            return { ...state, name: action.payload }
        case 'MULTIPLE':
            return { ...state, result: state.result * 2 }
        case 'DIVIDE':
            return { ...state, result: state.result / 3 }
        case 'INCREMENT_VAL':
            return {...state, result: state.result + state.name}
        default:
            return { ...state }
    }
}


const MathCalculator = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    console.log('state=>', state)
    return (
        <>
            <h2>Simple Calculator</h2>
            <button onClick={() => dispatch({ type: 'ADD' })}>Increment by 1</button>
            <button onClick={() => dispatch({ type: 'MINUS' })}>Decrement by 1</button>
            <input onChange={(e) => dispatch({ type: 'NEW_NAME', payload: e.target.value })} />
            <button onClick={() => dispatch({ type: 'MULTIPLE'})}>Multiple by 2</button>
            <button onClick={() => dispatch({ type: 'DIVIDE' })}>Divide by 3</button>
            <br></br>
            <button onClick={() => dispatch({ type: 'INCREMENT_VAL' })}>Increment by val</button>
            
            <h4>Result: {state.result}</h4>

        </>
    )
}

export default MathCalculator;


// with useState:
// const MathCalculator = (props) => {
//     const [result, setResult] = useState(0);

//     return (
//         <>
//             <h2>Simple Calculator</h2>
//             <button onClick={() => setResult(result + 1)}>Increment by 1</button>
//             <button onClick={() => setResult(result - 1)}>Decrement by 1</button>
//             <h4>Result: {result}</h4>
//         </>
//     )
// }

// export default MathCalculator;


// const initState = {result: 0,
// users: [],
// customer: []... etc}
// useReducer(reducer, initState)

// For this case:
// const initState = {
// result: 0;
// name: "John"
// }

// const reducer = (state, action) => {
// the state will be always initState.
// action is an object with type. it defines what the reducer needs to do
// action {type: 'ADD_ONE'}
// action { type: 'MINUS_ONE' }

// const add = () => {
//     return { type: 'ADD_ONE' }
// }

// }


// const reducer = (state, action) => {
// if(action.type === 'ADD_ONE'){

// }else if (action.type = 'MINUS_ONE'){
// }

// or better to use switch case
// switch(action.type){
// case 'ADD_ONE'
// return {...state, result: state.result+1, name: "Marry"}
// case 'MINUS_ONE'
// ...
// default
// }