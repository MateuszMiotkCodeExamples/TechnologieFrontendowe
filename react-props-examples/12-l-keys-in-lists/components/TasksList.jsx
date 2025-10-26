'use client'

import { useState } from 'react';

/**
 * Demonstracja używania kluczy w listach
 * 
 * Pokazuje problem gdy klucze nie są prawidłowe
 */

export default function TasksList({ tasks }) {
  const [showCreatedDate, setShowCreatedDate] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setShowCreatedDate(!showCreatedDate)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Toggle Created Date
      </button>

      <ul className="list-none p-0 space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="p-4 bg-white rounded border-l-4 border-blue-500">
            <h3 className="font-semibold text-black">{task.title}</h3>
            <p className="text-sm text-black">Priority: {task.priority}</p>
            {showCreatedDate && task.created && (
              <p className="text-xs text-gray-600">Created: {task.created}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

