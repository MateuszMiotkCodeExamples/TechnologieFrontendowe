/**
 * Przykład różnych event handlers w React
 */

export default function TaskManager() {
  function handleTaskClick() {
    console.log('Task was clicked');
  }

  function handleInputChange(event) {
    console.log('Input changed to:', event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault(); // Zapobiega domyślnemu przeładowaniu strony
    console.log('Form submitted');
  }

  function handleMouseEnter() {
    console.log('Mouse entered task area');
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter task title"
          className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>

      <div
        onClick={handleTaskClick}
        onMouseEnter={handleMouseEnter}
        className="task-item p-4 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
      >
        Complete project documentation
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded text-sm">
        <p className="font-semibold mb-2">Available events:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>onClick - kliknięcie</li>
          <li>onChange - zmiana wartości input</li>
          <li>onSubmit - wysłanie formularza</li>
          <li>onBlur - utrata fokusu</li>
          <li>onMouseEnter - wejście kursora</li>
          <li>onKeyPress - naciśnięcie klawisza</li>
        </ul>
      </div>
    </div>
  );
}

