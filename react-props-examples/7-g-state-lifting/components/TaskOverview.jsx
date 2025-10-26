'use client'

/**
 * Komponent TaskOverview - potrzebuje searchTerm
 * Ale też nie wie, co z tym zrobić!
 */

export default function TaskOverview({ currentTerm }) {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-black mb-4">Task Overview</h3>
      <p className="text-black">
        Currently searching for: <span className="font-bold text-blue-600">"{currentTerm}"</span>
      </p>
      <p className="text-sm text-black mt-2">
        ⚠️ Problem: SearchBar i TaskOverview nie mogą się komunikować bezpośrednio!
      </p>
    </div>
  );
}

