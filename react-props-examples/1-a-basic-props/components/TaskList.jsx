/**
 * TaskList demonstruje:
 * - Przyjmowanie props (listTitle)
 * - Wykorzystanie specjalnego props.children
 * - children zawiera wszystko przekazane między tagami otwierającym i zamykającym
 */

export default function TaskList({ listTitle, children }) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white">
      <h2 className="mb-4 text-gray-900 text-xl font-semibold">{listTitle || 'Task List'}</h2>
      <ul className="list-none p-0 m-0">
        {children}
      </ul>
    </div>
  );
}

