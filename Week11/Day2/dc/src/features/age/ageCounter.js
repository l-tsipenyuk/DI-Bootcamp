import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ageUpAsync, ageDownAsync } from "./ageSlice";

const AgeCounter = () => {
    const dispatch = useDispatch();
    const age = useSelector((state) => state.age.value);
    const loading = useSelector((state) => state.age.loading);

    return (
        <div>
            <h3>Age:{age}</h3><br />
            {loading ?
                <>
                    <p>Loading...</p><br />
                    <img src="favicon.ico" alt="Loading..." />
                </>
                : null}<br />
            <button onClick={() => dispatch(ageUpAsync())}>Increment Age</button>
            <button onClick={() => dispatch(ageDownAsync())}>Decrement Age</button>
        </div>
    )
};

export default AgeCounter;