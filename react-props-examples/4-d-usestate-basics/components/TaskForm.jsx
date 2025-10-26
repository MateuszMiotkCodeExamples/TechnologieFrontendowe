'use client'

import { useState } from 'react';

/**
 * Demonstracja useState - Podstawy
 * 
 * useState pozwala na dynamiczne aktualizowanie interfejsu
 */

export default function TaskForm() {
  const [errorMessage, setErrorMessage] = useState('');

  function validateTask(event) {
    const enteredTitle = event.target.value;
    if (enteredTitle.trim() === '') {
      setErrorMessage('Task title cannot be empty.');
    } else {
      setErrorMessage('');
    }
  }

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <input
        placeholder="Enter task title"
        type="text"
        onBlur={validateTask}
        className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
      />
      <p className="mt-2 text-red-600 min-h-[20px]">
        {errorMessage}
      </p>
    </div>
  );
}

