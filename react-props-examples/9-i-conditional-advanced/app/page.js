'use client'

import { useState } from 'react';
import ActionButton from '@/components/ActionButton';
import TaskDisplay from '@/components/TaskDisplay';

/**
 * 9.I - Conditional Rendering Advanced
 * 
 * Ten przykład demonstruje:
 * - Warunkowe ustawianie tagów elementów
 * - Dynamiczne nazwy tagów
 * - Użycie z niestandardowymi komponentami
 * - Mapowanie danych z list
 */

export default function Home() {
  const [isButton, setIsButton] = useState(true);
  const [viewMode, setViewMode] = useState('card');

  const task = {
    id: 't1',
    title: 'Complete documentation',
    description: 'Write comprehensive project documentation',
    priority: 'high'
  };

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">9.I - Conditional Rendering Advanced</h1>
      
      {/* Warunkowe ustawianie tagów */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Warunkowe Ustawianie Tagów Elementów</h2>
        <p className="mb-4 text-black">
          Można dynamicznie wybierać, który element HTML użyć:
        </p>

        <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
          <div className="flex gap-4 items-center">
            <ActionButton
              isButton={isButton}
              config={{ onClick: () => alert('Clicked!') }}
            >
              Dynamic Button/Link
            </ActionButton>

            <button
              onClick={() => setIsButton(!isButton)}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Toggle Type: {isButton ? 'Button' : 'Link'}
            </button>
          </div>

          <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm font-mono">
{`function ActionButton({ isButton, config, children }) {
  const Tag = isButton ? 'button' : 'a';
  
  return <Tag {...config}>{children}</Tag>;
}`}
          </pre>
        </div>
      </section>

      {/* Dynamiczny wybór komponentów */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Dynamiczny Wybór Komponentów</h2>
        <p className="mb-4 text-black">
          Można również dynamicznie wybierać, który komponent wyświetlić:
        </p>

        <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setViewMode('card')}
              className={`px-4 py-2 rounded ${
                viewMode === 'card' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              Card View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              List View
            </button>
          </div>

          <TaskDisplay viewMode={viewMode} task={task} />

          <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm font-mono">
{`function TaskDisplay({ viewMode, task }) {
  const Component = viewMode === 'card' ? TaskCard : TaskListItem;
  return <Component task={task} />;
}`}
          </pre>
        </div>
      </section>

      {/* Kiedy używać którego podejścia */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">📝 Kiedy używać którego podejścia?</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. if/else w kodzie:</h4>
            <pre className="bg-black text-green-400 p-3 rounded text-xs overflow-auto font-mono">
{`let content;
if (condition) {
  content = <A />;
} else {
  content = <B />;
}
return content;`}
            </pre>
          </div>
          
          <div>
            <h4 className="font-semibold text-black mb-2">2. Wyrażenie ternarne:</h4>
            <pre className="bg-black text-green-400 p-3 rounded text-xs overflow-auto font-mono">
{`return (
  <div>
    {condition ? <A /> : <B />}
  </div>
);`}
            </pre>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Operator &&:</h4>
            <pre className="bg-black text-green-400 p-3 rounded text-xs overflow-auto font-mono">
{`return (
  <div>
    {condition && <Content />}
  </div>
);`}
            </pre>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Dynamiczny komponent:</h4>
            <pre className="bg-black text-green-400 p-3 rounded text-xs overflow-auto font-mono">
{`const Component = condition ? A : B;
return <Component />;`}
            </pre>
          </div>
        </div>
      </section>

      {/* Kluczowe zasady */}
      <section className="my-8 p-6 bg-white border border-gray-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-gray-900">📝 Kluczowe Zasady</h2>
        <ol className="list-decimal list-inside space-y-3 text-black">
          <li><strong>Wyrażenie ternarne</strong> - używaj dla 2 opcji, krótkie inline warunki</li>
          <li><strong>Operator &&</strong> - używaj gdy chcesz pokazać tylko jedną opcję</li>
          <li><strong>if/else w kodzie</strong> - używaj dla złożonych warunków</li>
          <li><strong>Dynamiczny komponent</strong> - używaj dla całkowicie różnych komponentów</li>
          <li><strong>Mapowanie obiektów</strong> - używaj dla wielu opcji z konfiguracją</li>
        </ol>
      </section>
    </div>
  );
}
