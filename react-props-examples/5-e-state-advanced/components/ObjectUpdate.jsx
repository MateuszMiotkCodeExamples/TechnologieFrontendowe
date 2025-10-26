'use client'

import { useState } from 'react';

/**
 * Demonstracja aktualizacji obiektu stanu z funkcją aktualizującą
 */

export default function ObjectUpdate() {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    estimatedHours: 1
  });

  // ✅ CORRECT - używa funkcji aktualizującej z spread operatorem
  function handleTitleChange(event) {
    setTaskData(prevData => ({
      ...prevData,
      title: event.target.value
    }));
  }

  function handleDescriptionChange(event) {
    setTaskData(prevData => ({
      ...prevData,
      description: event.target.value
    }));
  }

  // ✅ CORRECT - zwiększanie na podstawie poprzedniej wartości
  function incrementHours() {
    setTaskData(prevData => ({
      ...prevData,
      estimatedHours: prevData.estimatedHours + 1
    }));
  }

  // ✅ CORRECT - toggle bazujący na poprzedniej wartości
  function togglePriority() {
    setTaskData(prevData => ({
      ...prevData,
      priority: prevData.priority === 'high' ? 'low' : 'high'
    }));
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Object Update with Functions</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={taskData.title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={taskData.description}
            onChange={handleDescriptionChange}
            className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
            rows="3"
          />
        </div>

        <div>
          <p className="text-sm text-black mb-2">
            Estimated hours: <span className="font-mono">{taskData.estimatedHours}</span>
          </p>
          <button
            onClick={incrementHours}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            +1 Hour
          </button>
        </div>

        <div>
          <p className="text-sm text-black mb-2">
            Priority: <span className="font-mono">{taskData.priority}</span>
          </p>
          <button
            onClick={togglePriority}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Toggle Priority
          </button>
        </div>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded">
        <p className="text-sm font-semibold mb-2 text-black">Current state:</p>
        <pre className="text-xs bg-gray-900 text-green-400 p-3 rounded overflow-auto">
{JSON.stringify(taskData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

