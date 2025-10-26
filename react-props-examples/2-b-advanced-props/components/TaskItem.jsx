/**
 * Demonstracja destrukturyzacji props
 * 
 * Bez destrukturyzacji:
 * function TaskItem(props) {
 *   return <li>{props.title}</li>;
 * }
 * 
 * Z destrukturyzacją:
 * function TaskItem({ title, priority }) {
 *   return <li>{title}</li>;
 * }
 */

export default function TaskItem({ title, priority, assignedTo, dueDate, completed }) {
  const priorityStyles = priority === 'high' ? 'border-l-red-500' :
                        priority === 'medium' ? 'border-l-orange-500' : 
                        'border-l-green-500';

  return (
    <li className={`p-4 my-2 bg-white rounded shadow border-l-4 ${priorityStyles}`}>
      <h3 className="mb-2 text-gray-900 font-semibold">{title}</h3>
      {assignedTo && (
        <p className="my-1 text-gray-700">Assigned to: {assignedTo}</p>
      )}
      {dueDate && (
        <p className="my-1 text-gray-700">Due: {dueDate}</p>
      )}
      {completed !== undefined && (
        <p className="my-1 text-gray-700">
          Status: {completed ? 'Completed' : 'In Progress'}
        </p>
      )}
    </li>
  );
}

