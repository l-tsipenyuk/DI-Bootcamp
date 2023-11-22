import { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/actions/counterActions";



const Counter = (props) => {
    console.log('props=>', props)
    // const [counter, setCounter] = useState(0);
    const counter = useSelector(state => state.counterReducer.value);
    const dispatch = useDispatch()
    return (
        <div>
            {/* Value: {props.counter} {" "} */}
            Value: {counter} {" "}
            {/* <button onClick={() => props.increment()}>Increment</button> */}
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter.value
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(increment()),
//     };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;