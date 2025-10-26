'use client'

import { useState } from 'react';

/**
 * Demonstracja dobrych konwencji nazewnictwa dla useState
 * 
 * Dobre nazewnictwo:
 * const [taskTitle, setTaskTitle] = useState('');
 * const [isCompleted, setIsCompleted] = useState(false);
 * 
 * Złe nazewnictwo:
 * const [a, setA] = useState(''); // Zbyt ogólne
 * const [value, setValue] = useState(''); // Niejasne
 */

export default function NamingExamples() {
  // ✅ DOBRE: Jasne, opisowe nazwy
  const [taskTitle, setTaskTitle] = useState('Complete documentation');
  const [taskDescription, setTaskDescription] = useState('Write docs');
  const [isUrgent, setIsUrgent] = useState(false);
  const [estimatedHours, setEstimatedHours] = useState(8);

  function handleTitleChange(event) {
    setTaskTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setTaskDescription(event.target.value);
  }

  function handleUrgencyToggle() {
    setIsUrgent(!isUrgent);
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Task Editor - Dobra Konwencja Nazewnictwa</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Task Title
        </label>
        <input
          type="text"
          value={taskTitle}
          onChange={handleTitleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          value={taskDescription}
          onChange={handleDescriptionChange}
          className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
          rows="3"
        />
      </div>

      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isUrgent}
            onChange={handleUrgencyToggle}
            className="rounded"
          />
          <span className="text-gray-700">Mark as urgent</span>
        </label>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded">
        <p className="text-sm font-semibold mb-2 text-black">Current state:</p>
        <p className="text-sm text-black">Title: {taskTitle}</p>
        <p className="text-sm text-black">Description: {taskDescription}</p>
        <p className="text-sm text-black">Status: {isUrgent ? 'Urgent' : 'Normal'}</p>
        <p className="text-sm text-black">Hours: {estimatedHours}</p>
      </div>
    </div>
  );
}

