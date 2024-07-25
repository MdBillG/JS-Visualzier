'use client'
import React, { useState } from 'react';

const Closure = () => {
    const [count, setCount] = useState(0);

    const createCounter = () => {
        let localCount = 0;
        return () => {
            localCount++;
            setCount(localCount);
        };
    };

    const counter = createCounter();

    return (
        <div>
            <h2>Closure</h2>
            <button onClick={counter}>Increment</button>
            <div style={{ border: '1px solid black', minHeight: '200px', padding: '10px' }}>
                <p>Outer function: createCounter()</p>
                <p>Inner function: anonymous function</p>
                <p>Closed over variable: localCount</p>
                <p>Current count: {count}</p>
            </div>
        </div>
    );
};

export default Closure;