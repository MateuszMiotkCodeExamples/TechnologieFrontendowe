/**
 * Demonstracja spreading props z operatora spread (...props)
 * 
 * Problem: Chcemy przekazać wszystkie atrybuty HTML do elementu <a>
 * Naiwne rozwiązanie: Dodawać każdy atrybut osobno
 * Eleganckie rozwiązanie: Użyć operatora spread
 */

export default function Link({ children, ...props }) {
  // Operator spread przekazuje wszystkie pozostałe props do elementu <a>
  return (
    <a 
      {...props} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      {children}
    </a>
  );
}

