'use client'

import { useState } from 'react';

/**
 * Demonstracja pracy z obiektem stanu
 */

export default function ObjectState() {
  // Pojedynczy obiekt stanu
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    estimatedHours: 1,
    assignedUser: ''
  });

  function handleTitleChange(event) {
    setTaskData({
      ...taskData,
      title: event.target.value
    });
  }

  function handleDescriptionChange(event) {
    setTaskData({
      ...taskData,
      description: event.target.value
    });
  }

  function handlePriorityChange(event) {
    setTaskData({
      ...taskData,
      priority: event.target.value
    });
  }

  function handleHoursChange(event) {
    setTaskData({
      ...taskData,
      estimatedHours: parseInt(event.target.value) || 1
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting task:', taskData);
    alert('Task submitted! Check console.');
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Object State Example</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Priority
          </label>
          <select
            value={taskData.priority}
            onChange={handlePriorityChange}
            className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Estimated Hours
          </label>
          <input
            type="number"
            value={taskData.estimatedHours}
            onChange={handleHoursChange}
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Task
        </button>
      </form>

      <div className="mt-4 p-4 bg-gray-50 rounded">
        <p className="text-sm font-semibold mb-2">Current state object:</p>
        <pre className="text-xs bg-gray-900 text-green-400 p-3 rounded overflow-auto">
{JSON.stringify(taskData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

