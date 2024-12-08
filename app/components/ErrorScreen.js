// app/components/ErrorScreen.js

'use client';

export default function ErrorScreen({ error }) {
    //
    // Tutaj możemy obsłużyć lub śledzić błąd przed wyświetleniem komunikatu
    //

    return (
        <div className="error">
            <h3>Przepraszamy... coś poszło nie tak</h3>
            <p>Nie możemy w tej chwili przetworzyć Twojego żądania.</p>
            <p>BŁĄD: {error.message}</p>
        </div>
    );
}
