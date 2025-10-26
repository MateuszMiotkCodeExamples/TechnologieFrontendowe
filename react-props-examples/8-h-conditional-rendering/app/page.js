'use client'

import { useState } from 'react';
import TaskDetails from '@/components/TaskDetails';
import TaskForm from '@/components/TaskForm';
import PriorityBadge from '@/components/PriorityBadge';
import TaskStatus from '@/components/TaskStatus';

/**
 * 8.H - Conditional Rendering
 * 
 * Ten przykład demonstruje:
 * - Czym jest warunkowa treść
 * - Warunkowe renderowanie elementów JSX
 * - Użycie if/else vs wyrażenia ternarnego
 * - Operator logiczny && (short-circuiting)
 * - Różne techniki warunkowego renderowania
 */

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [userType, setUserType] = useState('admin');

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">8.H - Conditional Rendering</h1>
      
      {/* Wprowadzenie */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Czym Jest Warunkowa Treść?</h2>
        <p className="mb-4 text-black">
          Warunkowe renderowanie pozwala pokazywać lub ukrywać elementy na podstawie stanu aplikacji.
          Zamiast zawsze pokazywać ten sam HTML, możemy go dynamicznie zmieniać.
        </p>
      </section>

      {/* Przykład 1: Proste warunkowe renderowanie */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 1: Proste Warunkowe Renderowanie</h2>
        <p className="mb-4 text-black">
          Używając wyrażenia ternarnego możemy pokazywać różne treści:
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-semibold text-black mb-2">✅ Wyrażenie ternarne:</h4>
            <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto font-mono">
{`{showDetails ? (
  <h2>Task Details</h2>
) : null}`}
            </pre>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded">
            <h4 className="font-semibold text-black mb-2">Operator &&:</h4>
            <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto font-mono">
{`{showDetails && <h2>Task Details</h2>}`}
            </pre>
          </div>
        </div>

        <TaskDetails />
      </section>

      {/* Przykład 2: Zaawansowane */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 2: Zaawansowane Warunkowe Renderowanie</h2>
        <p className="mb-4 text-black">
          Można warunkowo renderować całe sekcje formularza:
        </p>
        <TaskForm />
      </section>

      {/* Różne metody */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Różne Metody Warunkowego Renderowania</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="font-semibold text-black mb-2">1. Wyrażenie Ternarne</h4>
            <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto font-mono">
{`{condition ? (
  <TrueContent />
) : (
  <FalseContent />
)}`}
            </pre>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="font-semibold text-black mb-2">2. Operator &&</h4>
            <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto font-mono">
{`{condition && <Content />}`}
            </pre>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="font-semibold text-black mb-2">3. If Statement</h4>
            <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto font-mono">
{`let content;
if (condition) {
  content = <Component />;
}
return <div>{content}</div>;`}
            </pre>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="font-semibold text-black mb-2">4. Mapowanie Obiektów</h4>
            <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto font-mono">
{`const config = {
  status: StatusComponent,
  pending: PendingComponent
};

const Component = config[key];
return <Component />;`}
            </pre>
          </div>
        </div>
      </section>

      {/* Przykład 3: Priority Badge */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 3: Priority Badge</h2>
        <p className="mb-4 text-black">
          Dynamiczny wybór wyglądu na podstawie właściwości:
        </p>
        
        <div className="flex flex-wrap gap-4">
          <PriorityBadge priority="low" />
          <PriorityBadge priority="medium" />
          <PriorityBadge priority="high" />
          <PriorityBadge priority="urgent" />
        </div>

        <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm mt-4 font-mono">
{`const priorityConfig = {
  low: { label: 'Low', color: 'green' },
  medium: { label: 'Medium', color: 'yellow' },
  high: { label: 'High', color: 'orange' }
};

const config = priorityConfig[priority];
return <Badge color={config.color}>{config.label}</Badge>;`}
        </pre>
      </section>

      {/* Przykład 4: Task Status */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 4: Task Status</h2>
        <p className="mb-4 text-black">
          Kompleksowy przykład z ikonami i kolorami:
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <TaskStatus status="pending" />
          <TaskStatus status="inProgress" />
          <TaskStatus status="completed" />
          <TaskStatus status="blocked" />
        </div>
      </section>

      {/* Operator && - ważne uwagi */}
      <section className="my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-yellow-900">⚠️ Ważna Uwaga o Operatorze &&</h2>
        <p className="mb-4 text-black">
          Operator && działa przez short-circuiting, ale uważaj na wartości falsy!
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-black mb-2">✅ Bezpieczne wartości:</p>
            <ul className="list-disc list-inside text-black text-sm space-y-1">
              <li>true</li>
              <li>1</li>
              <li>'text'</li>
              <li>objekty</li>
            </ul>
          </div>
          
          <div>
            <p className="font-semibold text-black mb-2">❌ Problematic wartości:</p>
            <ul className="list-disc list-inside text-black text-sm space-y-1">
              <li>0 (będzie pokazane jako 0!)</li>
              <li>'' (pusty string)</li>
              <li>false (będzie pokazane jako false!)</li>
            </ul>
          </div>
        </div>

        <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm mt-4 font-mono">
{`// ❌ PROBLEM - zamiast nic nie pokazać, pokaż 0!
{count && <div>{count}</div>}

// ✅ ROZWIĄZANIE
{count > 0 && <div>{count}</div>}

// LUB
{count ? <div>{count}</div> : null}`}
        </pre>
      </section>

      {/* Kluczowe zasady */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">📝 Kluczowe Zasady</h2>
        <ol className="list-decimal list-inside space-y-3 text-black">
          <li><strong>Używaj if/else</strong> dla prostych warunków (1-2 opcje)</li>
          <li><strong>Używaj wyrażenia ternarnego</strong> dla krótkich inline warunków</li>
          <li><strong>Używaj &&</strong> gdy chcesz pokazać tylko jedną opcję</li>
          <li><strong>Używaj mapowania obiektów</strong> dla wielu opcji</li>
          <li><strong>Uważaj na wartości falsy</strong> w operatorze &&</li>
        </ol>
      </section>
    </div>
  );
}
