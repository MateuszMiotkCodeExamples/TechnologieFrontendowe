'use client'

import CharCounter from '@/components/CharCounter';
import TaskTitleInput from '@/components/TaskTitleInput';
import TaskCreationForm from '@/components/TaskCreationForm';

/**
 * 6.F - Derived Values and Form Handling
 * 
 * Ten przykład demonstruje:
 * - Wyprowadzanie wartości ze stanu (derived values)
 * - Dlaczego nie przechowywać obliczonych wartości w stanie
 * - Pracę z formularzami w React
 * - event.target.value i event.target.checked
 * - event.preventDefault()
 */

export default function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">6.F - Derived Values and Form Handling</h1>
      
      {/* Wprowadzenie */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Wyprowadzanie Wartości ze Stanu</h2>
      <p className="mb-4 text-black">
        Zamiast przechowywać obliczone wartości w stanie, możemy je wyprowadzić ze stanu podczas każdego renderu.
        To jest lepsze podejście, ponieważ wartość będzie zawsze aktualna.
      </p>
      </section>

      {/* Przykład 1: CharCounter */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 1: Licznik Znaków</h2>
        <p className="mb-4 text-black">
          Zamiast przechowywać liczbę znaków w osobnym stanie:
        </p>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded mb-4">
          <p className="text-sm text-red-900 font-semibold">❌ Źle:</p>
          <pre className="text-xs bg-black text-green-400 p-3 rounded mt-2 overflow-auto font-mono">
{`const [numChars, setNumChars] = useState(0);

function handleChange(event) {
  setUserInput(event.target.value);
  setNumChars(event.target.value.length); // Niepotrzebne!
}`}
          </pre>
        </div>

        <div className="p-4 bg-green-50 border border-green-200 rounded mb-4">
          <p className="text-sm text-green-900 font-semibold">✅ Dobrze:</p>
          <pre className="text-xs bg-black text-green-400 p-3 rounded mt-2 overflow-auto font-mono">
{`const [userInput, setUserInput] = useState('');
const numChars = userInput.length; // Obliczone z stanu!

function handleChange(event) {
  setUserInput(event.target.value);
}`}
          </pre>
        </div>

        <CharCounter />
      </section>

      {/* Przykład 2: TaskTitleInput */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 2: Wiele Derived Values</h2>
        <p className="mb-4 text-black">
          Można wyprowadzić wiele wartości na podstawie jednego stanu:
        </p>
        <TaskTitleInput />
        
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-blue-900 font-semibold mb-2">Kluczowa zasada:</p>
          <p className="text-sm text-black">
            <strong>Nie przechowuj w stanie wartości, które można obliczyć z innych wartości w stanie.</strong>
            <br />
            Zamiast tego, obliczaj je podczas renderu.
          </p>
        </div>
      </section>

      {/* Form Handling */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Obsługa Formularzy</h2>
        <p className="mb-4 text-black">
          React wymaga specjalnej obsługi dla formularzy i ich elementów.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="font-semibold text-black mb-2">Input & Textarea:</h4>
            <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto font-mono">
{`<input
  value={title}
  onChange={(e) => 
    setTitle(e.target.value)
  }
/>`}
            </pre>
          </div>
          
          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="font-semibold text-black mb-2">Checkbox:</h4>
            <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto font-mono">
{`<input
  type="checkbox"
  checked={checked}
  onChange={(e) => 
    setChecked(e.target.checked)
  }
/>`}
            </pre>
          </div>
        </div>

        <TaskCreationForm />
      </section>

      {/* event.preventDefault() */}
      <section className="my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-yellow-900">event.preventDefault()</h2>
        <p className="mb-4 text-yellow-900">
          Domyślnie formularze HTML przeładowują stronę po wysłaniu. W aplikacjach React
          zazwyczaj chcemy to zachowanie zablokować:
        </p>
        <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm font-mono">
{`function handleSubmit(event) {
  event.preventDefault(); // Zapobiega przeładowaniu strony!
  
  // Teraz możemy wykonać własną logikę
  console.log('Form submitted');
}`}
        </pre>
        <p className="mt-4 text-yellow-900">
          Bez <code className="bg-yellow-200 px-2 py-1 rounded">preventDefault()</code> strona przeładuje się i wszystkie dane stanu zostaną utracone.
        </p>
      </section>

      {/* Kluczowe zasady */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">📝 Kluczowe Zasady</h2>
        <ol className="list-decimal list-inside space-y-3 text-black">
          <li><strong>Wyprowadzaj wartości</strong> ze stanu zamiast przechowywać je osobno</li>
          <li><strong>Używaj event.target.value</strong> dla inputów i textarea</li>
          <li><strong>Używaj event.target.checked</strong> dla checkboxów</li>
          <li><strong>Zawsze używaj preventDefault()</strong> w obsłudze formularzy</li>
          <li><strong>Zresetuj formularz</strong> po udanym submit</li>
        </ol>
      </section>
    </div>
  );
}
