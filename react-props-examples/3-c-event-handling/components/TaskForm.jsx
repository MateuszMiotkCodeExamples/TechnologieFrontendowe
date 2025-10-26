/**
 * Demonstracja obsługi zdarzeń w React
 * 
 * Problem: Komponenty React są statyczne - nie reagują na interakcje użytkownika
 * Rozwiązanie: Użyć event handlers w props (onClick, onChange, onSubmit itp.)
 */

export default function TaskForm() {
  let errorMessage = '';

  function validateTask(event) {
    console.log('Validation triggered!');
    console.log('Entered value:', event.target.value);
    
    const enteredTitle = event.target.value;
    if (enteredTitle.trim() === '') {
      errorMessage = 'Task title cannot be empty.';
    } else {
      errorMessage = '';
    }
  }

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <input
        placeholder="Enter task title"
        type="text"
        onBlur={validateTask}
        className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
      />
      <p className="mt-2 text-red-600 min-h-[20px]">
        {errorMessage && errorMessage}
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Kliknij w input, wpisz coś i kliknij poza nim - zobacz konsolę przeglądarki
      </p>
    </div>
  );
}

