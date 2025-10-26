/**
 * Przykład demonstrujący podstawowe użycie props
 * 
 * Błędny komponent (BEZ props):
 * function TaskItem() {
 *   return <li>{title} (ID: {id})</li>;
 * }
 * 
 * - title i id nie są zdefiniowane
 * - nie można przekazać danych do komponentu
 * 
 * Poprawny komponent (Z props):
 * function TaskItem(props) {
 *   return <li>{props.title} (ID: {props.id})</li>;
 * }
 */

export default function TaskItem(props) {
  // Funkcja wyznaczająca kolor priorytetu na podstawie props
  const priorityColor = props.priority === 'high' 
    ? 'red' 
    : props.priority === 'medium' 
    ? 'orange' 
    : 'green';

  return (
    <li className={`p-4 my-2 bg-white rounded shadow border-l-4 ${
      priorityColor === 'red' ? 'border-l-red-500' : 
      priorityColor === 'orange' ? 'border-l-orange-500' : 
      'border-l-green-500'
    }`}>
      <h3 className="mb-2 text-gray-900 font-semibold">{props.title}</h3>
      {props.priority && (
        <p className="my-1 text-gray-700">Priority: {props.priority}</p>
      )}
      {props.completed !== undefined && (
        <p className="my-1 text-gray-700">
          Status: {props.completed ? 'Completed' : 'In Progress'}
        </p>
      )}
      {props.id && (
        <p className="my-1 text-gray-500 text-sm">ID: {props.id}</p>
      )}
    </li>
  );
}

