'use client'

import { useState } from 'react';

/**
 * Demonstracja obsługi formularzy w React
 * - event.target.value dla inputów
 * - event.target.checked dla checkboxów
 * - event.preventDefault() dla formularzy
 */

export default function TaskCreationForm() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  function handleUpdateTitle(event) {
    setTaskTitle(event.target.value);
  }

  function handleUpdateDescription(event) {
    setTaskDescription(event.target.value);
  }

  function handleUpdateAgreement(event) {
    setAgreedToTerms(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Zapobiega domyślnemu przeładowaniu strony
    
    const taskData = {
      title: taskTitle,
      description: taskDescription,
      agreedToTerms: agreedToTerms
    };
    
    console.log('Submitting task:', taskData);
    alert('Task submitted! Check console.');
    
    // Reset formularza
    setTaskTitle('');
    setTaskDescription('');
    setAgreedToTerms(false);
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-black mb-4">Task Creation Form</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Task Title
          </label>
          <input
            type="text"
            value={taskTitle}
            onChange={handleUpdateTitle}
            className="w-full px-4 py-2 border border-gray-300 rounded text-black"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Task Description
          </label>
          <textarea
            value={taskDescription}
            onChange={handleUpdateDescription}
            className="w-full px-4 py-2 border border-gray-300 rounded text-black"
            placeholder="Enter task description"
            rows="4"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={handleUpdateAgreement}
            className="rounded"
          />
          <label className="ml-2 text-black">
            I agree to the task guidelines
          </label>
        </div>

        <button
          type="submit"
          disabled={!agreedToTerms || !taskTitle.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          Create Task
        </button>
      </form>

      <div className="mt-4 p-3 bg-gray-50 rounded">
        <p className="text-xs text-black font-semibold mb-1">Current state:</p>
        <p className="text-xs text-black">Title: {taskTitle || '(empty)'}</p>
        <p className="text-xs text-black">Description: {taskDescription || '(empty)'}</p>
        <p className="text-xs text-black">Agreed: {agreedToTerms ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

