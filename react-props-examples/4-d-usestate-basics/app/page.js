'use client'

import { useState } from 'react';
import TaskForm from '@/components/TaskForm';
import TaskCounter from '@/components/TaskCounter';
import TaskFormAdvanced from '@/components/TaskFormAdvanced';

/**
 * 4.D - useState Basics
 * 
 * Ten przykład demonstruje:
 * - Wprowadzenie do stanu w React
 * - Hook useState - podstawy
 * - Anatomia useState
 * - Dlaczego nie zwykła zmienna
 * - Jak React zarządza stanem
 * - Dlaczego const mimo zmian wartości
 */

export default function Home() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [taskCount, setTaskCount] = useState(0);

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">4.D - useState Basics</h1>
      
      {/* Wprowadzenie */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Wprowadzenie do Stanu w React</h2>
        <p className="mb-4 text-gray-700">
          Komponenty React są domyślnie statyczne. Aby utworzyć interaktywne komponenty,
          które reagują na zdarzenia i zmieniają swój wygląd, potrzebujemy <strong>stanu</strong>.
        </p>
        <p className="mb-4 text-gray-700">
          Hook <code className="bg-gray-200 px-2 py-1 rounded">useState</code> pozwala
          dodać stan do komponentu funkcjonalnego.
        </p>
      </section>

      {/* useState - podstawy */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">useState - Podstawowy Licznik</h2>
        <p className="mb-4 text-gray-700">
          Prosty przykład licznika ukończonych zadań:
        </p>
        <TaskCounter />
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm mt-4">
{`import { useState } from 'react';

function TaskCounter() {
  const [completedTasks, setCompletedTasks] = useState(0);
  
  function handleTaskComplete() {
    setCompletedTasks(completedTasks + 1);
  }
  
  return (
    <button onClick={handleTaskComplete}>
      Completed: {completedTasks}
    </button>
  );
}`}
        </pre>
      </section>

      {/* Anatomia useState */}
      <section className="my-8 p-6 bg-white rounded-lg border border-gray-200">
        <h2 className="text-2xl mb-4 text-gray-900">Anatomia useState</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
{`const [currentValue, updateFunction] = useState(initialValue);

// currentValue - aktualna wartość stanu
// updateFunction - funkcja do aktualizacji stanu
// initialValue - początkowa wartość stanu

// Przykład:
const [count, setCount] = useState(0);
// count = 0 (wartość bieżąca)
// setCount(5) - aktualizuje count do 5`}
        </pre>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            <h4 className="font-semibold mb-2">1. Wartość stanu</h4>
            <code className="text-sm">completedTasks</code>
            <p className="text-sm mt-2 text-gray-600">
              Przechowuje aktualną wartość
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded">
            <h4 className="font-semibold mb-2">2. Funkcja aktualizująca</h4>
            <code className="text-sm">setCompletedTasks</code>
            <p className="text-sm mt-2 text-gray-600">
              Aktualizuje stan i powoduje re-render
            </p>
          </div>
        </div>
      </section>

      {/* Dlaczego const */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Dlaczego const mimo zmian wartości?</h2>
        <p className="mb-4 text-gray-700">
          Zmienna z <code className="bg-gray-200 px-2 py-1 rounded">useState</code> jest definiowana
          jako <code className="bg-gray-200 px-2 py-1 rounded">const</code>, ale może się zmieniać!
          To dlatego, że:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Każdy render tworzy <strong>nową</strong> stałą</li>
          <li>Jest to właściwie nowa funkcja podczas każdego renderu</li>
          <li>React przechowuje aktualną wartość wewnętrznie</li>
        </ul>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
{`function createGreeting(name) {
  const greeting = \`Hello, \${name}!\`;
  return greeting;
}

createGreeting('Alice'); // Tworzy NOWĄ const greeting
createGreeting('Bob');   // Tworzy NOWĄ const greeting

// Analogicznie w React:
function TaskCounter() {
  const [count, setCount] = useState(0); // NOWA const podczas każdego renderu
  return <div>{count}</div>;
}`}
        </pre>
      </section>

      {/* Problem z zwykłymi zmiennymi */}
      <section className="my-8 p-6 bg-red-50 border border-red-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-red-900">❌ Problem z Zwykłymi Zmiennymi</h2>
        <p className="mb-4 text-red-800">
          Zwykła zmienna <code className="bg-red-200 px-2 py-1 rounded">let errorMessage = ''</code>
          nie spowoduje ponownego renderowania!
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
{`// TO NIE ZADZIAŁA:
function TaskForm() {
  let errorMessage = '';
  
  function validateTask(event) {
    errorMessage = 'Error!'; // Zmiana zmiennej
    console.log(errorMessage); // Wyświetli nową wartość
  }
  
  return (
    <input onBlur={validateTask} />
    <p>{errorMessage}</p> {/* NIE ZAKTUALIZUJE SIĘ! */}
  );
}`}
        </pre>
        <p className="mt-4 text-red-800">
          ✅ Użyj <code className="bg-red-200 px-2 py-1 rounded">useState</code> aby naprawdę aktualizować interfejs!
        </p>
      </section>

      {/* Przykład z useState */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">✅ Rozwiązanie z useState</h2>
        <TaskForm />
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm mt-4">
{`import { useState } from 'react';

function TaskForm() {
  const [errorMessage, setErrorMessage] = useState('');
  
  function validateTask(event) {
    if (event.target.value.trim() === '') {
      setErrorMessage('Error!'); // AKTUALIZUJE INTERFEJS!
    }
  }
  
  return (
    <input onBlur={validateTask} />
    <p>{errorMessage}</p> {/* TERAZ SIĘ ZAKTUALIZUJE! */}
  );
}`}
        </pre>
      </section>

      {/* Zaawansowany formularz */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Zaawansowany Przykład - Wielokrotne użycie useState</h2>
        <p className="mb-4 text-gray-700">
          Można używać wielu niezależnych wartości stanu w jednym komponencie:
        </p>
        <TaskFormAdvanced />
      </section>

      {/* Kluczowe zasady */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">📝 Kluczowe Zasady useState</h2>
        <ol className="list-decimal list-inside space-y-3 text-blue-900">
          <li><strong>Zawsze używaj funkcji aktualizującej</strong> do zmiany stanu</li>
          <li><strong>Nie modyfikuj stanu bezpośrednio</strong> - użyj funkcji aktualizującej</li>
          <li><strong>Możesz mieć wiele useState</strong> w jednym komponencie</li>
          <li><strong>Każdy useState jest niezależny</strong> od innych</li>
          <li><strong>const nie zmienia się w czasie renderu</strong>, ale React zarządza wartościami między renderami</li>
        </ol>
      </section>
    </div>
  );
}
