'use client'
import React, { useState } from 'react';

const CallStack = () => {
    const [stack, setStack] = useState([]);

    const pushFunction = () => {
        setStack([...stack, `Function ${stack.length + 1}`]);
    };

    const popFunction = () => {
        setStack(stack.slice(0, -1));
    };

    return (
        <div>
            <h2>Call Stack</h2>
            <button onClick={pushFunction}>Push Function</button>
            <button onClick={popFunction}>Pop Function</button>
            <div style={{ border: '1px solid black', minHeight: '200px', padding: '10px' }}>
                {stack.map((func, index) => (
                    <div key={index} style={{ border: '1px solid gray', margin: '5px', padding: '5px' }}>
                        {func}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CallStack;