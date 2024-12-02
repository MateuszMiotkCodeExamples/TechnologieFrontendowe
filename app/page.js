'use client'
import React, {memo, useState} from "react";

const Cat = ({ name }) => {
    console.log(`rendering ${name}`);
    return <p>{name}</p>;
};

const PureCat = memo(Cat);

export default function App() {
    const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
    return (
        <>
            {cats.map((name, i) => (
                <PureCat key={i} name={name} />
            ))}
            <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
                Add a Cat
            </button>
        </>
    );
}