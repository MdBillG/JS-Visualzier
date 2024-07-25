"use client";
import React, { useState } from "react";

const AsyncExecution = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            description: "Initial state",
            callStack: [],
            callbackQueue: [],
            console: [],
        },
        {
            description: "bar() is called",
            callStack: ["bar"],
            callbackQueue: [],
            console: [],
        },
        {
            description:
                "setTimeout is registered and bar() is removed from call stack",
            callStack: [],
            callbackQueue: ["setTimeout callback"],
            console: [],
        },
        {
            description: "foo() is called",
            callStack: ["foo"],
            callbackQueue: ["setTimeout callback"],
            console: [],
        },
        {
            description: 'foo() executes and logs "First"',
            callStack: [],
            callbackQueue: ["setTimeout callback"],
            console: ["First"],
        },
        {
            description: "baz() is called",
            callStack: ["baz"],
            callbackQueue: ["setTimeout callback"],
            console: ["First"],
        },
        {
            description: 'baz() executes and logs "Third"',
            callStack: [],
            callbackQueue: ["setTimeout callback"],
            console: ["First", "Third"],
        },
        {
            description:
                "Call stack is empty, event loop moves setTimeout callback to call stack",
            callStack: ["setTimeout callback"],
            callbackQueue: [],
            console: ["First", "Third"],
        },
        {
            description: 'setTimeout callback executes and logs "Second"',
            callStack: [],
            callbackQueue: [],
            console: ["First", "Third", "Second"],
        },
    ];

    const nextStep = () => {
        setStep((prevStep) =>
            prevStep < steps.length - 1 ? prevStep + 1 : prevStep
        );
    };

    const currentStep = steps[step];

    return (
        <div
            style={{ border: "1px solid black", padding: "20px", margin: "20px 0" }}
        >
            <h2>Asynchronous Execution Visualization</h2>
            <button onClick={nextStep} disabled={step === steps.length - 1}>
                Next Step
            </button>
            <div style={{ marginTop: "20px" }}>
                <h3>Step {step + 1}</h3>
                <p>{currentStep.description}</p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                }}
            >
                <div
                    style={{ border: "1px solid gray", padding: "10px", width: "30%" }}
                >
                    <h4>Call Stack</h4>
                    {currentStep.callStack.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "#f0f0f0",
                                margin: "5px",
                                padding: "5px",
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div
                    style={{ border: "1px solid gray", padding: "10px", width: "30%" }}
                >
                    <h4>Callback Queue</h4>
                    {currentStep.callbackQueue.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "#f0f0f0",
                                margin: "5px",
                                padding: "5px",
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div
                    style={{ border: "1px solid gray", padding: "10px", width: "30%" }}
                >
                    <h4>Console Output</h4>
                    {currentStep.console.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <div
                style={{ border: "1px solid gray", padding: "10px", marginTop: "20px" }}
            >
                <h4>Code</h4>
                <pre>{`const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');
bar();
foo();
baz();`}</pre>
            </div>
        </div>
    );
};

export default AsyncExecution;
