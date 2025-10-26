'use client'

/**
 * Demonstracja dynamicznego wyboru komponentu
 */

export default function TaskDisplay({ viewMode, task }) {
  // Dynamiczny wybór komponentu na podstawie prop
  const DisplayComponent = viewMode === 'card' ? TaskCard : TaskListItem;
  
  return <DisplayComponent task={task} />;
}

function TaskCard({ task }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
      <h3 className="text-xl font-semibold text-black">{task.title}</h3>
      <p className="text-black mt-2">{task.description}</p>
      <div className="mt-3">
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
          {task.priority}
        </span>
      </div>
    </div>
  );
}

function TaskListItem({ task }) {
  return (
    <li className="p-3 bg-white border border-gray-200 rounded list-none">
      <h4 className="font-semibold text-black">{task.title}</h4>
      <p className="text-sm text-black">{task.description}</p>
      <span className="text-xs text-gray-600">{task.priority}</span>
    </li>
  );
}

