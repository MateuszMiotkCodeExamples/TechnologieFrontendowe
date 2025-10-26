'use client'

import { useState } from 'react';

/**
 * Demonstracja różnych wzorców aktualizacji stanu
 */

export default function UpdatePatterns() {
  const [count, setCount] = useState(0);

  // ❌ PROBLEMATYCZNE - bezpośrednie odnoszenie się do stanu
  function incrementCount() {
    setCount(count + 1);
  }

  // ❌ PROBLEMATYCZNE - multiple updates nie zadziała jak oczekiwano
  function incrementByThree() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1); // To nie zwróci count + 3!
  }

  // ✅ CORRECT - używanie funkcji aktualizującej
  function incrementCorrect() {
    setCount(prevCount => prevCount + 1);
  }

  // ✅ CORRECT - teraz to działa poprawnie
  function incrementByThreeCorrect() {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // Teraz zadziała!
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Update Patterns</h3>
      
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-900">
          Count: <span className="text-blue-600">{count}</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-red-900">❌ Problematic</h4>
          <button
            onClick={incrementCount}
            className="w-full px-4 py-2 bg-red-100 text-red-900 rounded hover:bg-red-200"
          >
            +1 (Direct)
          </button>
          <button
            onClick={incrementByThree}
            className="w-full px-4 py-2 bg-red-100 text-red-900 rounded hover:bg-red-200"
          >
            +3 (Direct - nie zadziała!)
          </button>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-green-900">✅ Correct</h4>
          <button
            onClick={incrementCorrect}
            className="w-full px-4 py-2 bg-green-100 text-green-900 rounded hover:bg-green-200"
          >
            +1 (Function)
          </button>
          <button
            onClick={incrementByThreeCorrect}
            className="w-full px-4 py-2 bg-green-100 text-green-900 rounded hover:bg-green-200"
          >
            +3 (Function - zadziała!)
          </button>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-sm text-yellow-900">
          💡 Zawsze używaj funkcji aktualizującej gdy nowa wartość zależy od poprzedniej!
        </p>
      </div>
    </div>
  );
}

