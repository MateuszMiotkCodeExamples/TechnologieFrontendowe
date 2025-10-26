/**
 * Przykład wykorzystania spreading props
 */

export default function AnimatedLink({ target, children }) {
  return (
    <a 
      href={target} 
      className="animated-link text-blue-600 hover:underline transition-all"
    >
      {children}
    </a>
  );
}

