'use client'

/**
 * Demonstracja wyświetlania danych z list
 * 
 * Metoda 1: Tworzenie tablicy elementów JSX w pętli for...of
 */

export default function TasksList({ tasks }) {
  const taskElements = [];

  for (const task of tasks) {
    taskElements.push(
      <li key={task.id} className="p-4 mb-2 bg-white rounded border-l-4 border-blue-500">
        <h3 className="font-semibold text-black">{task.title}</h3>
        <p className="text-sm text-black">Priority: {task.priority}</p>
      </li>
    );
  }

  return (
    <ul className="list-none p-0">
      {taskElements}
    </ul>
  );
}

