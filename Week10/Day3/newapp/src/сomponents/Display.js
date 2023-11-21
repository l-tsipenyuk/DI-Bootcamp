import Counter from './Counter';
import { createContext } from "react";
export const DisplayContext = createContext()

const Display = (props) => {
    return (
        <>
            <h2>Display:</h2>
            <DisplayContext.Provider value={{ username: 'Alla' }}>
                {/* <Counter count={props.count}/> */}
                <Counter />
            </DisplayContext.Provider>
        </>
    )
}

export default Display