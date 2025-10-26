'use client'

import TasksList from '@/components/TasksList';
import TasksListWithMap from '@/components/TasksListWithMap';

/**
 * 10.J - List Rendering Basics
 * 
 * Ten przykład demonstruje:
 * - Wyświetlanie danych z list
 * - Transformacja danych za pomocą pętli for...of
 * - Tworzenie elementów JSX w pętli
 * - Wyświetlanie tablicy elementów JSX
 * - Wprowadzenie do metody map()
 */

export default function Home() {
  const tasks = [
    { id: 't1', title: 'Complete documentation', priority: 'high' },
    { id: 't2', title: 'Review code changes', priority: 'medium' },
    { id: 't3', title: 'Update tests', priority: 'low' }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">10.J - List Rendering Basics</h1>
      
      {/* Wprowadzenie */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Wyświetlanie Danych z List</h2>
        <p className="mb-4 text-black">
          W React często potrzebujemy wyświetlić listę elementów. Istnieją dwie główne metody
          generowania elementów JSX z tablicy danych.
        </p>
      </section>

      {/* Metoda 1: for...of loop */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Metoda 1: Pętla for...of</h2>
        <p className="mb-4 text-black">
          Transformacja danych za pomocą pętli for...of:
        </p>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded mb-4">
          <pre className="bg-black text-green-400 p-3 rounded overflow-auto text-sm font-mono">
{`const transformedTasks = [];
for (const task of tasks) {
  transformedTasks.push(task.title);
}

const taskElements = [];
for (const task of tasks) {
  taskElements.push(
    <li key={task.id}>
      <h2>{task.title}</h2>
      <p>Priority: {task.priority}</p>
    </li>
  );
}`}
          </pre>
        </div>

        <TasksList tasks={tasks} />
      </section>

      {/* Metoda 2: map() */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Metoda 2: map()</h2>
        <p className="mb-4 text-black">
          Alternatywnie używamy metody <code className="bg-gray-200 px-2 py-1 rounded">map()</code>:
        </p>

        <div className="p-4 bg-green-50 border border-green-200 rounded mb-4">
          <pre className="bg-black text-green-400 p-3 rounded overflow-auto text-sm font-mono">
{`const taskElements = tasks.map(task => (
  <li key={task.id}>
    <h2>{task.title}</h2>
    <p>Priority: {task.priority}</p>
  </li>
));

// LUB inline:
return (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>...</li>
    ))}
  </ul>
);`}
          </pre>
        </div>

        <TasksListWithMap tasks={tasks} />
      </section>

      {/* Porównanie metod */}
      <section className="my-8 p-6 bg-white border border-gray-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-gray-900">Porównanie Metod</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded">
            <h4 className="font-semibold text-black mb-2">for...of Loop</h4>
            <ul className="list-disc list-inside text-black text-sm space-y-1">
              <li>Więcej kodu</li>
              <li>Jasno pokazuje proces</li>
              <li>Dobrze dla początkujących</li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-semibold text-black mb-2">map()</h4>
            <ul className="list-disc list-inside text-black text-sm space-y-1">
              <li>Krótszy kod</li>
              <li>Funkcjonalne podejście</li>
              <li>Standard w React</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kluczowe zasady */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">📝 Kluczowe Zasady</h2>
        <ol className="list-decimal list-inside space-y-3 text-black">
          <li><strong>Zawsze używaj kluczy (key)</strong> przy renderowaniu list</li>
          <li><strong>Klucz powinien być unikalny</strong> dla każdego elementu</li>
          <li><strong>Preferuj map()</strong> nad for...of w React</li>
          <li><strong>Nie używaj index jako klucz</strong> jeśli lista może się zmieniać</li>
          <li><strong>Każdy element JSX w liście</strong> potrzebuje unikalnego key</li>
        </ol>
      </section>
    </div>
  );
}
