'use client'

import { useState } from 'react';

/**
 * Demonstracja wyprowadzania wartości ze stanu (derived values)
 * 
 * Zamiast przechowywać obliczoną wartość w stanie, możemy ją wyprowadzić
 * ze stanu podczas każdego renderu.
 */

export default function CharCounter() {
  const [userInput, setUserInput] = useState('');

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  // Derived value - obliczone ze stanu
  const numChars = userInput.length;

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <label className="block text-sm font-medium text-black mb-2">
        Enter your text:
      </label>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded text-black"
        placeholder="Type something..."
      />
      <p className="mt-3 text-black">
        Characters entered: <span className="font-bold text-blue-600">{numChars}</span>
      </p>
      <p className="text-sm text-black mt-2">
        💡 <strong>numChars</strong> jest obliczane przy każdym renderze na podstawie <strong>userInput.length</strong>
      </p>
    </div>
  );
}

