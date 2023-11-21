import Button from './Button';
import {useContext} from "react";
import {AppContext} from "../AppContext"



const Action = (props) => {
    const { count, setCount } = useContext(AppContext);
    return (
        <>
            <h2>Action:</h2>
            {/* <Button count = {props.count} setCount = {props.setCount}/> */}
            <Button count={count} setCount={setCount} />
        </>
    )
}

export default Action