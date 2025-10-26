'use client'

import { useState } from 'react';

/**
 * Demonstracja useState - Podstawowy licznik
 */

export default function TaskCounter() {
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleTaskComplete() {
    setCompletedTasks(completedTasks + 1);
    // Po tym wywołaniu:
    // 1. React przechowuje nową wartość wewnętrznie
    // 2. React planuje re-render komponentu
    // 3. React wywołuje funkcję TaskCounter ponownie
    // 4. useState zwraca zaktualizowaną wartość
    // 5. React aktualizuje odpowiednie części DOM
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <p className="text-lg text-gray-700 mb-4">
        Completed tasks: <span className="font-bold text-blue-600">{completedTasks}</span>
      </p>
      <button
        onClick={handleTaskComplete}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Mark Task as Complete
      </button>
      <p className="mt-4 text-sm text-gray-500">
        Kliknij przycisk, aby zobaczyć jak stan się aktualizuje!
      </p>
    </div>
  );
}

