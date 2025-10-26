'use client'

import { useState } from 'react';

/**
 * Demonstracja warunkowego renderowania w formularzu
 */

export default function TaskForm() {
  const [taskTitle, setTaskTitle] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [estimatedHours, setEstimatedHours] = useState('');
  const [priority, setPriority] = useState('medium');

  function handleTitleChange(event) {
    setTaskTitle(event.target.value);
  }

  function handleToggleAdvanced() {
    setShowAdvanced(!showAdvanced);
  }

  function handleHoursChange(event) {
    setEstimatedHours(event.target.value);
  }

  function handlePriorityChange(event) {
    setPriority(event.target.value);
  }

  let advancedFields;

  // Warunkowe renderowanie przez zmienną
  if (showAdvanced) {
    advancedFields = (
      <div className="space-y-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Estimated Hours
          </label>
          <input
            type="number"
            value={estimatedHours}
            onChange={handleHoursChange}
            className="w-full px-4 py-2 border border-gray-300 rounded text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Priority
          </label>
          <select
            value={priority}
            onChange={handlePriorityChange}
            className="w-full px-4 py-2 border border-gray-300 rounded text-black"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-black mb-4">Task Form</h3>

      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Task Title
        </label>
        <input
          type="text"
          value={taskTitle}
          onChange={handleTitleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded text-black"
          placeholder="Enter task title"
        />
      </div>

      <button
        type="button"
        onClick={handleToggleAdvanced}
        className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        {showAdvanced ? 'Hide' : 'Show'} Advanced Options
      </button>

      {/* Renderowanie przez zmienną */}
      {advancedFields}

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create Task
      </button>
    </div>
  );
}

