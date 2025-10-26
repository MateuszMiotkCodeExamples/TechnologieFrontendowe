'use client'

import TaskForm from '@/components/TaskForm';
import TaskManager from '@/components/TaskManager';

/**
 * 3.C - Event Handling
 * 
 * Ten przykład demonstruje:
 * - Problem statycznych komponentów React
 * - Jak NIE należy rozwiązywać problemu (vanilla JS w komponentach)
 * - Właściwe reagowanie na zdarzenia przez event props
 * - Różne typy event handlers (onClick, onChange, onSubmit, onBlur, etc.)
 * - Zapobieganie domyślnemu zachowaniu przeglądarki (preventDefault)
 */

export default function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">3.C - Event Handling Examples</h1>
      
      {/* Problem statycznych komponentów */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Problem Statycznych Komponentów</h2>
        <p className="mb-4 text-gray-700">
          Komponenty React domyślnie są statyczne. Poniższy formularz nie pokazuje walidacji po wprowadzeniu danych:
        </p>
        <div className="p-4 bg-white rounded-lg border border-gray-200 mb-4">
          <input
            placeholder="Enter task title"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <p className="mt-2 text-gray-500">Task title cannot be empty.</p>
        </div>
        <p className="text-gray-600">
          ❌ Ten komponent nie reaguje na zdarzenia - komunikat zawsze pokazuje "Task title cannot be empty"
        </p>
      </section>

      {/* Przykład z event handlerem */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Rozwiązanie: Event Handler w React</h2>
        <p className="mb-4 text-gray-700">
          Używamy event handlerów (np. onBlur, onChange) do reagowania na interakcje użytkownika:
        </p>
        <TaskForm />
        <p className="mt-4 text-gray-600">
          ✅ Kliknij w input, wpisz tekst i kliknij poza nim (onBlur) - zobacz konsolę przeglądarki
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm mt-4">
{`function TaskForm() {
  let errorMessage = '';

  function validateTask(event) {
    const enteredTitle = event.target.value;
    if (enteredTitle.trim() === '') {
      errorMessage = 'Task title cannot be empty.';
    }
  }

  return (
    <input onBlur={validateTask} />
    <p>{errorMessage}</p>
  );
}`}
        </pre>
      </section>

      {/* Przykład z wieloma event handlers */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład: Różne Event Handlers</h2>
        <p className="mb-4 text-gray-700">
          TaskManager demonstruje różne typy event handlers:
        </p>
        <TaskManager />
        <p className="mt-4 text-gray-600">
          Otwórz konsolę przeglądarki (F12) i spróbuj:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Wpisać coś w input (onChange)</li>
          <li>Naciśnąć Enter (onKeyPress)</li>
          <li>Kliknąć przycisk (onSubmit)</li>
          <li>Kliknąć task item (onClick)</li>
          <li>Najechać kursorem na task item (onMouseEnter)</li>
        </ul>
      </section>

      {/* Dostępne zdarzenia */}
      <section className="my-8 p-6 bg-white rounded-lg border border-gray-200">
        <h2 className="text-2xl mb-4 text-gray-900">Dostępne Zdarzenia w React</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Eventy myszy:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>onClick - kliknięcie</li>
              <li>onDoubleClick - podwójne kliknięcie</li>
              <li>onMouseEnter - wejście kursora</li>
              <li>onMouseLeave - wyjście kursora</li>
              <li>onMouseOver - kursor nad elementem</li>
              <li>onMouseDown - naciśnięcie</li>
              <li>onMouseUp - puszczenie</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Eventy klawiatury:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>onKeyDown - naciśnięcie klawisza</li>
              <li>onKeyUp - puszczenie klawisza</li>
              <li>onKeyPress - naciśnięcie (deprecated)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Eventy formularza:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>onChange - zmiana wartości</li>
              <li>onSubmit - wysłanie formularza</li>
              <li>onFocus - fokus na elemencie</li>
              <li>onBlur - utrata fokusu</li>
              <li>onInput - wpisanie tekstu</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Inne:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>onScroll - przewijanie</li>
              <li>onLoad - załadowanie</li>
              <li>onError - błąd</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ważna uwaga o event.target */}
      <section className="my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-yellow-900">⚠️ Ważna Uwaga</h2>
        <p className="mb-4 text-yellow-800">
          Powyższe przykłady są <strong>nieskompletne</strong> - zmienna <code>errorMessage</code> 
          nie powoduje ponownego renderowania komponentu!
        </p>
        <p className="text-yellow-800">
          Aby naprawdę zaktualizować interfejs, potrzebujemy <strong>stanu (state)</strong> - 
          to będzie omówione w kolejnym projekcie (useState).
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm mt-4">
{`// To NIE zadziała poprawnie:
let errorMessage = '';
errorMessage = 'New value'; // Nie spowoduje re-renderu!

// To ZADZIAŁA (w kolejnym projekcie):
const [errorMessage, setErrorMessage] = useState('');
setErrorMessage('New value'); // Spowoduje re-render!`}
        </pre>
      </section>
    </div>
  );
}
