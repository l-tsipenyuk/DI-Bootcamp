import { useContext } from "react";
import { AppContext } from "../AppContext"



const Button = (props) => {
    const { count, setCount } = useContext(AppContext);
    return(
        <>
        <h2>Button:</h2>
        {/* <button onClick={()=> props.setCount(props.count+1)}>Add</button> */}
            <button onClick={() => props.setCount(count + 1)}>Add</button >
        </>
    )
}

export default Button