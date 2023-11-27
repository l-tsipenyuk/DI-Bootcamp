import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  incrementWithPrepare,
} from "./counterSlice";
import { counterState } from "./counterSlice";
import { useState } from "react";

const Counter = (props) => {
  const [num, setNum] = useState(0);
  const count = useSelector(counterState);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(reset())}> Reset </button>
        <button onClick={() => dispatch(incrementByAmount(num))}>
          {" "}
          Increment By Amount{" "}
        </button>
        <input onChange={(e) => setNum(e.target.value)} />
        <button onClick={() => dispatch(incrementWithPrepare(num))}>With Prepare</button>
      </div>
    </>
  );
};
export default Counter;
