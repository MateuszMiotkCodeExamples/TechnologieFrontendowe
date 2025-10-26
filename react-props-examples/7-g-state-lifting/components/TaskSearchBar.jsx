'use client'

/**
 * Komponent SearchBar - potrzebuje stanu searchTerm
 * Ale nie wie, co z tym zrobić - musi przekazać wyżej!
 */

export default function TaskSearchBar({ searchTerm, onUpdateSearch }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <input
        type="search"
        value={searchTerm}
        onChange={onUpdateSearch}
        placeholder="Search tasks..."
        className="w-full px-4 py-2 border border-gray-300 rounded text-black"
      />
    </div>
  );
}

