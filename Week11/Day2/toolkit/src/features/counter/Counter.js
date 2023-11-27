import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset, incrementByAmount, incrementWithPrepare} from './counterSlice';
import {counterState} from './counterSlice';
import { useState } from 'react';

const Counter = (props) => {
    const [num, setNum] = useState(0);
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <p>count state: {count}</p>
            <div>
                <button onClick={()=> dispatch(increment())}> + </button>
                <button onClick={() => dispatch(decrement())}> - </button>
                <button onClick={() => dispatch(reset())}> Reset </button>
                <button onClick={() => dispatch(incrementByAmount({num, num2: 10}))}> Increment by Amount </button>
                <input onChange={(e)=> setNum(e.target.value)}/>
                <br/>
                <button onClick={()=> dispatch(incrementWithPrepare(1,5,100))}>With prepare</button>
            </div>
        </>
    )
}

export default Counter