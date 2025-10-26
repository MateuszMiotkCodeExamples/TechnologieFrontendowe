'use client'

/**
 * Demonstracja dynamicznego wyboru tagu HTML
 */

export default function ActionButton({ isButton, config, children }) {
  // Dynamiczny wybór elementu HTML na podstawie props
  const Tag = isButton ? 'button' : 'a';
  
  return (
    <Tag
      {...config}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {children}
    </Tag>
  );
}

