// src/components/App.jsx
import React, { useState, useEffect } from 'react';

const App = () => {
    // Stan będzie inicjalizowany po stronie klienta podczas hydratacji
    const [count, setCount] = useState(0);
    const [serverTime, setServerTime] = useState(null);

    // useEffect wykona się tylko po stronie klienta po hydratacji
    useEffect(() => {
        setServerTime(window.__INITIAL_DATA__.serverTime);
        console.log("Aplikacja została zhydratowana po stronie klienta!");
    }, []);

    return (
        <div className="container">
            <h1>Demonstracja SSR + CSR</h1>

            {/* Ten tekst jest renderowany na serwerze */}
            <div className="server-content">
                <h2>Zawartość renderowana na serwerze:</h2>
                <p>Czas serwera podczas renderowania: {serverTime}</p>
            </div>

            {/* Ta sekcja staje się interaktywna po hydratacji po stronie klienta */}
            <div className="client-content">
                <h2>Interaktywna zawartość po stronie klienta:</h2>
                <p>Licznik: {count}</p>
                <button onClick={() => setCount(count + 1)}>
                    Zwiększ licznik
                </button>
            </div>
        </div>
    );
};

export default App;