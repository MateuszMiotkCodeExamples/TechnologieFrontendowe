'use client'

import TaskItem from '@/components/TaskItem';
import TaskList from '@/components/TaskList';
import Alert from '@/components/Alert';

/**
 * 1.A - Basic Props
 * 
 * Ten przykład demonstruje:
 * - Analogię do HTML (element <a> z atrybutem href)
 * - Podstawowe użycie props do konfiguracji komponentów
 * - Przekazywanie danych przez atrybuty
 * - Strukturę obiektu props
 * 
 * Przykłady z lekcji:
 * 1. Analogia HTML - linki z różnym href
 * 2. Użycie props w komponencie TaskItem
 * 3. Wykorzystanie wielu props (id, title, priority)
 * 4. Działanie obiektu props wewnątrz komponentu
 */

export default function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">1.A - Basic Props Examples</h1>
      
      {/* Przykład 1: Analogia do HTML */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 1: Analogia do HTML</h2>
        <p className="mb-4 text-gray-700">Używając tego samego elementu HTML, można tworzyć różne linki:</p>
        <div className="p-4 bg-gray-100 rounded-lg">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Use Google
          </a>
          <br />
          <a href="https://academind.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Browse Free Tutorials
          </a>
        </div>
        <p className="mt-4 text-gray-600">
          Używamy tego samego elementu HTML, ale każdy link prowadzi do innej strony dzięki różnym wartościom atrybutu href.
        </p>
      </section>

      {/* Przykład 2: Podstawowe użycie props */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 2: Podstawowe użycie props w TaskItem</h2>
        <TaskItem id="t1" title="Complete project documentation" priority="high" />
      </section>

      {/* Przykład 3: Wykorzystanie children */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 3: TaskList z wieloma TaskItem jako children</h2>
        <TaskList listTitle="My Daily Tasks">
          <TaskItem id="t1" title="Complete project documentation" priority="high" completed={false} />
          <TaskItem id="t2" title="Review code changes" priority="medium" completed={true} />
          <TaskItem id="t3" title="Update user guide" priority="low" completed={false} />
        </TaskList>
      </section>

      {/* Przykład 4: Alert component */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 4: Component Alert z props</h2>
        <Alert type="warning" dismissible={true}>
          This task is overdue by 3 days!
        </Alert>
      </section>

      {/* Przykład 5: Complete list example */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 5: Kompletny przykład z listą zadań</h2>
        <ul className="list-none p-0">
          <TaskItem id="t1" title="Complete project documentation" priority="high" />
          <TaskItem id="t2" title="Review code changes" priority="medium" />
          <TaskItem id="t3" title="Update user guide" priority="low" />
        </ul>
      </section>

      {/* Struktura props */}
      <section className="my-8 p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h2 className="text-2xl mb-4 text-gray-900">Jak działa obiekt props?</h2>
        <p className="mb-2 text-gray-700">Gdy używasz komponentu w ten sposób:</p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
{`<TaskItem id="t1" title="Complete documentation" priority="high" />`}
        </pre>
        <p className="mt-4 mb-2 text-gray-700">Wewnątrz komponentu, props będzie obiektem:</p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
{`{
  id: "t1",
  title: "Complete documentation",
  priority: "high"
}`}
        </pre>
      </section>
    </div>
  );
}
