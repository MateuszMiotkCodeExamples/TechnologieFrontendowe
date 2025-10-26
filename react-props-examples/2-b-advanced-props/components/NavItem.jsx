/**
 * Przykład prostego komponentu bez props
 */

export default function NavItem({ target, label }) {
  return (
    <li className="nav-item">
      <a href={target} className="text-blue-600 hover:underline px-2">
        {label}
      </a>
    </li>
  );
}

