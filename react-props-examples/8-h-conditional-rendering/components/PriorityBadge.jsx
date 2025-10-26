'use client'

/**
 * Demonstracja warunkowego renderowania przez mapowanie
 */

export default function PriorityBadge({ priority }) {
  // Konfiguracja dla różnych priorytetów
  const priorityConfig = {
    low: { label: 'Low Priority', color: 'bg-green-100 border-green-300 text-green-800' },
    medium: { label: 'Medium Priority', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
    high: { label: 'High Priority', color: 'bg-orange-100 border-orange-300 text-orange-800' },
    urgent: { label: 'Urgent Priority', color: 'bg-red-100 border-red-300 text-red-800' }
  };

  const config = priorityConfig[priority] || priorityConfig.medium;

  return (
    <span className={`px-3 py-1 rounded-full border ${config.color} text-sm font-semibold`}>
      {config.label}
    </span>
  );
}

