'use client'

import { useState } from 'react';

/**
 * Demonstracja wielu niezależnych wartości useState
 */

export default function TaskFormAdvanced() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskPriority, setTaskPriority] = useState('medium');
  const [errorMessage, setErrorMessage] = useState('');

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setTaskTitle(newTitle);
    
    // Walidacja podczas wpisywania
    if (newTitle.trim() === '') {
      setErrorMessage('Task title cannot be empty.');
    } else {
      setErrorMessage('');
    }
  }

  function handlePriorityChange(event) {
    setTaskPriority(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if (taskTitle.trim() === '') {
      setErrorMessage('Please enter a task title before submitting.');
      return;
    }
    
    console.log('Submitting task:', { title: taskTitle, priority: taskPriority });
    
    // Reset formularza po udanym przesłaniu
    setTaskTitle('');
    setTaskPriority('medium');
    setErrorMessage('');
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Task Title
          </label>
          <input
            type="text"
            value={taskTitle}
            onChange={handleTitleChange}
            placeholder="Enter task title"
            className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
          />
          {errorMessage && (
            <p className="mt-2 text-red-600 text-sm">{errorMessage}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Priority
          </label>
          <select
            value={taskPriority}
            onChange={handlePriorityChange}
            className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>

      <div className="mt-4 p-4 bg-gray-50 rounded text-sm text-gray-600">
        <p className="font-semibold mb-2">Current state:</p>
        <p>Title: <span className="font-mono">{taskTitle || '(empty)'}</span></p>
        <p>Priority: <span className="font-mono">{taskPriority}</span></p>
      </div>
    </div>
  );
}

