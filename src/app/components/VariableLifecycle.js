'use client'

import React, { useState } from 'react';


const FunctionExecution = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            phase: 'Creation Phase',
            description: 'Function is created. Variables are hoisted.',
            memory: { name: 'undefined', age: '<uninitialized>' },
            console: [],
            highlight: null
        },
        {
            phase: 'Execution Phase - Start',
            description: 'Function execution begins.',
            memory: { name: 'undefined', age: '<uninitialized>' },
            console: [],
            highlight: null
        },
        {
            phase: 'Execution Phase - First console.log',
            description: 'console.log(name) is executed.',
            memory: { name: 'undefined', age: '<uninitialized>' },
            console: ['undefined'],
            highlight: 1
        },
        {
            phase: 'Execution Phase - Second console.log',
            description: 'console.log(age) is executed. This throws an error because age is in the Temporal Dead Zone.',
            memory: { name: 'undefined', age: '<uninitialized>' },
            console: ['undefined', 'ReferenceError: age is not defined'],
            highlight: 2
        },
        {
            phase: 'Execution Phase - name assignment',
            description: "name is assigned the value 'Lydia'.",
            memory: { name: "'Lydia'", age: '<uninitialized>' },
            console: ['undefined', 'ReferenceError: age is not defined'],
            highlight: 3
        },
        {
            phase: 'Execution Phase - age assignment',
            description: 'age is initialized and assigned the value 21. Temporal Dead Zone ends for age.',
            memory: { name: "'Lydia'", age: '21' },
            console: ['undefined', 'ReferenceError: age is not defined'],
            highlight: 4
        },
        {
            phase: 'Execution Phase - End',
            description: 'Function execution completes.',
            memory: { name: "'Lydia'", age: '21' },
            console: ['undefined', 'ReferenceError: age is not defined'],
            highlight: null
        }
    ];

    const nextStep = () => {
        setStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
    };

    const currentStep = steps[step];

    const codeLines = [
        'function sayHi() {',
        '  console.log(name);',
        '  console.log(age);',
        "  var name = 'Lydia';",
        '  let age = 21;',
        '}',
        '',
        'sayHi();'
    ];

    return (
        <div style={{ border: '1px solid black', padding: '20px', margin: '20px 0' }}>
            <h2>Function Execution: sayHi()</h2>
            <button onClick={nextStep} disabled={step === steps.length - 1}>Next</button>
            <div style={{ marginTop: '20px' }}>
                <h3>Step {step + 1}: {currentStep.phase}</h3>
                <p>{currentStep.description}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div style={{ border: '1px solid gray', padding: '10px', width: '45%' }}>
                    <h4>Memory</h4>
                    <p>name: {currentStep.memory.name}</p>
                    <p>age: {currentStep.memory.age}</p>
                </div>
                <div style={{ border: '1px solid gray', padding: '10px', width: '45%' }}>
                    <h4>Code</h4>
                    <pre>
                        {codeLines.map((line, index) => (
                            <div key={index} style={{ backgroundColor: currentStep.highlight === index ? 'yellow' : 'transparent' }}>
                                {line}
                            </div>
                        ))}
                    </pre>
                </div>
            </div>
            <div style={{ border: '1px solid gray', padding: '10px', marginTop: '20px' }}>
                <h4>Console Output</h4>
                {currentStep.console.map((output, index) => (
                    <p key={index} style={{ color: output.includes('Error') ? 'red' : 'black' }}>{output}</p>
                ))}
            </div>
        </div>
    );
};

export default FunctionExecution;