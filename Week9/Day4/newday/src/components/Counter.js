import {useState} from 'react';

const Counter = (props) => {
    // const [state,setState] = userState(0)

    // let count = 0;
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('Enter a value')

    // let inputValue = "Enter a value";

    // const addOne = (val) => {
        // count = count + val;
        // console.log("count=>", count);
        // setCount(count + 1)
    // };

    const handleInput = (val) =>{
        // console.log('value=>', e.target.value);
        // inputValue = e.target.value
        if(val.trim().length === 0){
            return setInputValue('Enter a value');
        }
        setInputValue(val)
    }


    return (
        <>
            <h1>Counter: </h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <div>
                {/* <input onChange={handleInput}/> */}
                {/* <input onChange={(e)=> setInputValue(e.target.value)} /> */}
                <input onChange={(e) => handleInput(e.target.value)} />
                <h4>{inputValue}</h4>
            </div>
        </>
    );
};

export default Counter;