// app/components/Counter.jsx
"use client";

import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [checked, toggle] = useState(false);

    useEffect(() => {
        // Efekt zależny od `checked`
        console.log("Checked state has changed:", checked);
    }, [checked]);

    useEffect(() => {
        // Efekt zależny od `count`
        console.log("Count has changed:", count);
    }, [count]);

    useEffect(() => {
        // Efekt bez zależności
        console.log("Component mounted");
    }, []);



    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(!checked)}
                    />
                    Toggle
                </label>
            </p>
        </div>
    );
}

export default Counter;