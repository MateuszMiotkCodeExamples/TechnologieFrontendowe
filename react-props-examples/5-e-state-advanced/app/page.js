'use client'

import NamingExamples from '@/components/NamingExamples';
import StateTypes from '@/components/StateTypes';
import ObjectState from '@/components/ObjectState';
import UpdatePatterns from '@/components/UpdatePatterns';
import ObjectUpdate from '@/components/ObjectUpdate';

/**
 * 5.E - State Management Advanced Techniques
 * 
 * Ten przykład demonstruje:
 * - Konwencje nazewnictwa dla useState
 * - Typy wartości stanu (string, number, boolean, object, array)
 * - Pracę z wieloma wartościami stanu
 * - Prawidłowe aktualizowanie stanu bazując na poprzedniej wartości
 * - Funkcję aktualizującą vs bezpośrednią wartość
 */

export default function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">5.E - useState Advanced Techniques</h1>
      
      {/* Konwencje nazewnictwa */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Konwencje Nazewnictwa</h2>
        <p className="mb-4 text-black">
          Dobre nazewnictwo jest kluczowe dla czytelności kodu:
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-semibold mb-2 text-green-900">✅ DOBRE</h4>
            <code className="text-sm bg-white p-2 rounded block text-gray-900 font-mono">
              const [taskTitle, setTaskTitle] = useState('');
              <br />
              const [isCompleted, setIsCompleted] = useState(false);
              <br />
              const [estimatedHours, setEstimatedHours] = useState(1);
            </code>
          </div>
          
          <div className="p-4 bg-red-50 border border-red-200 rounded">
            <h4 className="font-semibold mb-2 text-red-900">❌ ZŁE</h4>
            <code className="text-sm bg-white p-2 rounded block text-gray-900 font-mono">
              const [a, setA] = useState('');
              <br />
              const [value, setValue] = useState('');
              <br />
              const [data, updateData] = useState('');
            </code>
          </div>
        </div>

        <NamingExamples />
      </section>

      {/* Typy wartości stanu */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Typy Wartości Stanu</h2>
        <p className="mb-4 text-black">
          useState może przyjąć dowolny typ wartości:
        </p>
        
        <div className="grid grid-cols-5 gap-2 mb-4 text-sm">
          <div className="p-3 bg-blue-50 rounded">
            <strong className="text-gray-900">String:</strong><br />
            <code className="text-gray-800">'text'</code>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <strong className="text-gray-900">Number:</strong><br />
            <code className="text-gray-800">42</code>
          </div>
          <div className="p-3 bg-yellow-50 rounded">
            <strong className="text-gray-900">Boolean:</strong><br />
            <code className="text-gray-800">true/false</code>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <strong className="text-gray-900">Object:</strong><br />
            <code className="text-gray-800">{'{...}'}</code>
          </div>
          <div className="p-3 bg-pink-50 rounded">
            <strong className="text-gray-900">Array:</strong><br />
            <code className="text-gray-800">[...]</code>
          </div>
        </div>

        <StateTypes />
      </section>

      {/* Praca z obiektem stanu */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Praca z Obiektem Stanu</h2>
        <p className="mb-4 text-black">
          Zamiast wielu osobnych stanów, możesz użyć jednego obiektu:
        </p>
        <ObjectState />
      </section>

      {/* Problematyczne wzorce aktualizacji */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Problematyczne wzorce aktualizacji</h2>
        <p className="mb-4 text-black">
          Bezpośrednie odnoszenie się do stanu może prowadzić do problemów:
        </p>
        <UpdatePatterns />
        
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
          <h4 className="font-semibold mb-2 text-red-900">❌ Problem:</h4>
          <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-auto">
{`function incrementByThree() {
  setCount(count + 1);  // count = 0, nowa wartość = 1
  setCount(count + 1);  // count STALE = 0, nowa wartość = 1
  setCount(count + 1);  // count STALE = 0, nowa wartość = 1
  // Wynik: count = 1 zamiast 3!`}
          </pre>
        </div>
      </section>

      {/* Funkcja aktualizująca z obiektami */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Funkcja aktualizująca z obiektami</h2>
        <p className="mb-4 text-black">
          Zawsze używaj funkcji aktualizującej gdy nowa wartość zależy od poprzedniej:
        </p>
        <ObjectUpdate />
        
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
          <h4 className="font-semibold mb-2 text-green-900">✅ Rozwiązanie:</h4>
          <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-auto">
{`function incrementByThree() {
  setCount(prevCount => prevCount + 1);  // 0 -> 1
  setCount(prevCount => prevCount + 1);  // 1 -> 2
  setCount(prevCount => prevCount + 1);  // 2 -> 3
  // Wynik: count = 3 ✓`}
          </pre>
        </div>
      </section>

      {/* Kluczowe zasady */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">📝 Kluczowe Zasady</h2>
        <ol className="list-decimal list-inside space-y-3 text-blue-900">
          <li><strong>Używaj funkcji aktualizującej</strong> gdy nowa wartość zależy od poprzedniej</li>
          <li><strong>Zawsze kopiuj obiekty</strong> przed modyfikacją (spread operator)</li>
          <li><strong>Nazwij jasno</strong> stany i funkcje aktualizujące</li>
          <li><strong>Unikaj bezpośredniej modyfikacji</strong> stanu</li>
          <li><strong>Preferuj wiele prostych stanów</strong> nad jednym skomplikowanym obiektem</li>
        </ol>
      </section>

      {/* Kiedy używać którego podejścia */}
      <section className="my-8 p-6 bg-white border border-gray-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-gray-900">Kiedy używać którego podejścia?</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-gray-900">Bezpośrednia wartość:</h4>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-auto">
{`// NOWA wartość NIE zależy od starej
setTaskTitle(event.target.value);
setPriority('high');
setCount(0);`}
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-900">Funkcja aktualizująca:</h4>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-auto">
{`// NOWA wartość ZALEŻY od starej
setCount(prev => prev + 1);
setItems(prev => [...prev, newItem]);
setData(prev => ({...prev, title: 'x'}));`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
