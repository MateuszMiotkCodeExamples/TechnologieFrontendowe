'use client'

import { useState } from 'react';

/**
 * Demonstracja różnych typów wartości stanu
 */

export default function StateTypes() {
  // Różne typy wartości
  const [taskTitle, setTaskTitle] = useState('Complete documentation');
  const [completedCount, setCompletedCount] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  function simulateTaskCompletion() {
    setIsLoading(true);
    
    setTimeout(() => {
      setCompletedCount(completedCount + 1);
      setProgressPercentage(((completedCount + 1) / 10) * 100);
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">State Types Examples</h3>
      
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-600">String:</p>
          <p className="font-mono text-sm">{taskTitle}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Number:</p>
          <p className="font-mono text-sm">Completed: {completedCount} tasks</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Number (float):</p>
          <p className="font-mono text-sm">Progress: {progressPercentage.toFixed(1)}%</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Boolean:</p>
          <p className="font-mono text-sm">Loading: {isLoading ? 'true' : 'false'}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Null:</p>
          <p className="font-mono text-sm">Selected: {selectedTask || 'null'}</p>
        </div>
      </div>

      <button
        onClick={simulateTaskCompletion}
        disabled={isLoading}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isLoading ? 'Loading...' : 'Complete Task'}
      </button>
    </div>
  );
}

