'use client'

import { useState } from 'react';

/**
 * Praktyczny przykład z wieloma derived values
 */

export default function TaskTitleInput() {
  const [taskTitle, setTaskTitle] = useState('');

  function handleChange(event) {
    setTaskTitle(event.target.value);
  }

  // Derived values ze stanu
  const charCount = taskTitle.length;
  const remainingChars = 50 - charCount;
  const isValid = charCount > 0 && charCount <= 50;
  const isNearLimit = charCount >= 45;

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <label className="block text-sm font-medium text-black mb-2">
        Task Title (max 50 characters)
      </label>
      <input
        type="text"
        value={taskTitle}
        onChange={handleChange}
        maxLength={50}
        className="w-full px-4 py-2 border border-gray-300 rounded text-black"
        placeholder="Enter task title"
      />
      
      <div className="mt-3 space-y-2">
        <p className="text-black">
          Characters: <span className="font-bold">{charCount}/50</span>
          {remainingChars >= 0 && (
            <span className={isNearLimit ? 'text-red-600' : 'text-black'}>
              {' '}({remainingChars} remaining)
            </span>
          )}
        </p>
        
        {!isValid && charCount > 0 && (
          <p className="text-sm text-red-600">
            Title must be between 1 and 50 characters
          </p>
        )}
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded">
        <p className="text-xs text-black font-semibold mb-1">Derived values:</p>
        <p className="text-xs text-black">charCount: {charCount}</p>
        <p className="text-xs text-black">remainingChars: {remainingChars}</p>
        <p className="text-xs text-black">isValid: {isValid ? 'true' : 'false'}</p>
        <p className="text-xs text-black">isNearLimit: {isNearLimit ? 'true' : 'false'}</p>
      </div>
    </div>
  );
}

