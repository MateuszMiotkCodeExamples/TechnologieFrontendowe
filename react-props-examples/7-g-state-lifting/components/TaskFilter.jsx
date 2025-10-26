'use client'

/**
 * Komponent TaskFilter - demonstracja state lifting
 */

export default function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <label className="block text-sm font-medium text-black mb-2">
        Filter tasks:
      </label>
      <select
        value={currentFilter}
        onChange={onFilterChange}
        className="w-full px-4 py-2 border border-gray-300 rounded text-black"
      >
        <option value="all">All Tasks</option>
        <option value="active">Active Only</option>
        <option value="completed">Completed Only</option>
      </select>
    </div>
  );
}

