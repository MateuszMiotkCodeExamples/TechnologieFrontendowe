'use client'

/**
 * Komponent TaskList - korzysta z filtra
 */

export default function TaskList({ filter }) {
  const allTasks = [
    { id: 't1', title: 'Write documentation', completed: false, priority: 'high' },
    { id: 't2', title: 'Review code', completed: true, priority: 'medium' },
    { id: 't3', title: 'Update tests', completed: false, priority: 'low' },
    { id: 't4', title: 'Deploy to staging', completed: true, priority: 'high' }
  ];

  // Filtruj zadania na podstawie prop
  const filteredTasks = allTasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' - pokaż wszystkie
  });

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-black mb-4">
        Tasks ({filteredTasks.length})
      </h3>
      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="p-3 bg-gray-50 rounded">
            <p className="text-black font-semibold">{task.title}</p>
            <p className="text-sm text-black">
              Priority: <span className="font-mono">{task.priority}</span> | 
              Status: <span className="font-mono">{task.completed ? 'Done' : 'Pending'}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

