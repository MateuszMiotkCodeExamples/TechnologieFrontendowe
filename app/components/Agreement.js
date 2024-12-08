// app/components/Agreement.js

'use client';

export default function Agreement({ onAgree = () => {} }) {
    return (
        <div>
            <p>Warunki...</p>
            <p>Oto nasze warunki i inne informacje. Czy się zgadzasz?</p>
            <button onClick={onAgree}>Zgadzam się</button>
        </div>
    );
}
