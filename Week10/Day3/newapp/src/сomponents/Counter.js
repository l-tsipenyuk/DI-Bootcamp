import {useContext} from "react";
import { AppContext } from "../AppContext";
import { AppContext2 } from "../AppContext";
import {DisplayContext} from "./Display";

const Counter = (props) => {
    const {count} = useContext(AppContext);
    const {text} = useContext(AppContext2)
    const { username } = useContext(DisplayContext)
    return (
    <>
        <h2>Counter from AppContext2: {text} {username}</h2>
        {/* <h2>Count: {props.count}</h2 > */}
            <h2>Count (context): {count}</h2 >
    </>
)
}

export default Counter