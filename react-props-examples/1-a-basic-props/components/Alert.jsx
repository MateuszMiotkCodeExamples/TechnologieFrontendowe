/**
 * Alert component demonstruje:
 * - Props jako atrybuty (type, dismissible)
 * - Props.children jako treść między tagami
 */

export default function Alert({ type = 'info', dismissible, children }) {
  const getClassesForType = (type) => {
    switch(type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-400 text-yellow-800';
      case 'error':
        return 'bg-red-50 border-red-400 text-red-800';
      case 'info':
        return 'bg-blue-50 border-blue-400 text-blue-800';
      case 'success':
        return 'bg-green-50 border-green-400 text-green-800';
      default:
        return 'bg-gray-50 border-gray-400 text-gray-800';
    }
  };

  const alertClasses = getClassesForType(type);

  return (
    <div className={`p-4 my-4 border rounded relative ${alertClasses}`}>
      {children}
      {dismissible && (
        <button 
          className="absolute top-2 right-2 bg-transparent border-none text-xl cursor-pointer"
          onClick={(e) => {
            const target = e.target;
            if (target.parentElement) {
              target.parentElement.remove();
            }
          }}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
}

