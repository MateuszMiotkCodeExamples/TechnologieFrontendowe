'use client'

/**
 * Demonstracja użycia map() do generowania elementów JSX
 * 
 * Metoda 2: Użycie metody array.map()
 */

export default function TasksListWithMap({ tasks }) {
  return (
    <ul className="list-none p-0">
      {tasks.map(task => (
        <li key={task.id} className="p-4 mb-2 bg-white rounded border-l-4 border-green-500">
          <h3 className="font-semibold text-black">{task.title}</h3>
          <p className="text-sm text-black">Priority: {task.priority}</p>
        </li>
      ))}
    </ul>
  );
}

