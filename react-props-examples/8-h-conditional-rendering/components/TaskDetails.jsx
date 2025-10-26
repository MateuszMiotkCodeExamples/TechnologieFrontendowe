'use client'

import { useState } from 'react';

/**
 * Demonstracja warunkowego renderowania
 */

export default function TaskDetails() {
  const [showGuidelines, setShowGuidelines] = useState(false);

  function handleShowGuidelines() {
    setShowGuidelines(true);
  }

  function handleHideGuidelines() {
    setShowGuidelines(false);
  }

  // Warunkowe renderowanie - if/else z wyrażeniem ternarnym
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <button
        onClick={showGuidelines ? handleHideGuidelines : handleShowGuidelines}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
      >
        {showGuidelines ? 'Hide' : 'Show'} Task Guidelines
      </button>

      {/* Metoda 1: if/else statement */}
      {showGuidelines ? (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-black">
            By accepting this task, you agree to complete it within the specified deadline 
            and follow all project guidelines.
          </p>
        </div>
      ) : null}

      {/* Alternatywnie można użyć operatora && */}
      {showGuidelines && (
        <div className="p-4 bg-green-50 border border-green-200 rounded mt-4">
          <p className="text-black">
            Additional guidelines are visible here using && operator.
          </p>
        </div>
      )}
    </div>
  );
}

