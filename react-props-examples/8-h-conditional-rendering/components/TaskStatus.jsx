'use client'

/**
 * Demonstracja zaawansowanego warunkowego renderowania
 */

export default function TaskStatus({ status }) {
  // Konfiguracja statusów z ikonami
  const statusConfig = {
    pending: {
      label: 'Pending',
      color: 'gray',
      icon: '⏳',
      bgColor: 'bg-gray-100 border-gray-300 text-gray-800'
    },
    inProgress: {
      label: 'In Progress',
      color: 'blue',
      icon: '🔄',
      bgColor: 'bg-blue-100 border-blue-300 text-blue-800'
    },
    completed: {
      label: 'Completed',
      color: 'green',
      icon: '✓',
      bgColor: 'bg-green-100 border-green-300 text-green-800'
    },
    blocked: {
      label: 'Blocked',
      color: 'red',
      icon: '⚠️',
      bgColor: 'bg-red-100 border-red-300 text-red-800'
    }
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <div className={`p-4 border-2 rounded-lg ${config.bgColor}`}>
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{config.icon}</span>
        <div>
          <p className="font-semibold text-black">{config.label}</p>
          <p className="text-sm text-black opacity-80">
            Status: {config.color.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}

