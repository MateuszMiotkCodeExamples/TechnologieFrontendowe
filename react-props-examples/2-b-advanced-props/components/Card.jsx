/**
 * Demonstracja wykorzystania props.children
 * - children zawiera wszystko co jest między tagami otwierającym i zamykającym
 * - Może to być tekst, inne komponenty, lub cały fragment JSX
 */

export default function Card({ children }) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

