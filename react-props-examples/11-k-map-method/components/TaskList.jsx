'use client'

import { useState } from 'react';

/**
 * Demonstracja aktualizacji list z useState i map()
 * 
 * POKAZUJE:
 * - Nieprawidłowy sposób (push do istniejącej tablicy)
 * - Prawidłowy sposób (immutable updates)
 */

export default function TaskList() {
  const [tasks, setTasks] = useState(['Review code', 'Update tests']);

  function handleAddTask() {
    // ❌ ŹLE - push mutuje tablicę!
    // tasks.push('Write documentation'); // NIE DZIAŁA!

    // ✅ DOBRZE - tworzy nową tablicę
    setTasks(curTasks => [...curTasks, 'Write documentation']);
  }

  function handleAddAtBeginning() {
    // ✅ Dodawanie na początku listy
    setTasks(curTasks => ['New task', ...curTasks]);
  }

  function handleRemoveTask(index) {
    // ✅ Usuwanie elementu
    setTasks(curTasks => curTasks.filter((_, i) => i !== index));
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-black mb-4">Task List</h3>
      
      <div className="space-x-2 mb-4">
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add at End
        </button>
        <button
          onClick={handleAddAtBeginning}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          + Add at Start
        </button>
      </div>

      <ul className="list-none p-0 space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
            <span className="text-black">{task}</span>
            <button
              onClick={() => handleRemoveTask(index)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 p-3 bg-gray-50 rounded">
        <p className="text-xs text-black font-semibold mb-1">Immutable Updates:</p>
        <pre className="text-xs bg-black text-green-400 p-2 rounded overflow-auto font-mono">
{`// Dodaj na końcu:
setTasks(cur => [...cur, newItem]);

// Dodaj na początku:
setTasks(cur => [newItem, ...cur]);

// Usuń element:
setTasks(cur => cur.filter((_, i) => i !== index));`}
        </pre>
      </div>
    </div>
  );
}

