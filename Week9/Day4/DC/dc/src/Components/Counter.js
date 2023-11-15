import { useState } from 'react';

const Counter = (props) => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    return (
        <>
            <h1>Vote Your Language! </h1>
            <div className = "container">
                <p className="optionBox">
                    {count1} PHP
                    <button className="click"
                        onClick={() => setCount1(count1 + 1)}>Click Here</button>
                </p>
                <p className="optionBox">
                    {count2} Python
                    <button className="click"
                        onClick={() => setCount2(count2 + 1)}>Click Here</button>
                </p>
                <p className="optionBox">
                    {count3} JavaScript
                    <button className="click"
                        onClick={() => setCount3(count3 + 1)}>Click Here</button>
                </p>
                <p className="optionBox">
                    {count4} Java
                    <button className="click"
                        onClick={() => setCount4(count4 + 1)}>Click Here</button>
                </p>
            </div>
        </>
    );
};

export default Counter;