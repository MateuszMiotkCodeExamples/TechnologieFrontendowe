'use client'

import { useState } from 'react';
import TaskList from '@/components/TaskList';

/**
 * 11.K - List Rendering with map()
 * 
 * Ten przykład demonstruje:
 * - Metodę map() jako alternatywę
 * - Podstawowy przykład map()
 * - Inline użycie map()
 * - Aktualizowanie list z useState
 * - Prawidłowy vs nieprawidłowy sposób aktualizacji
 */

export default function Home() {
  const tasks = [
    { id: 't1', title: 'Write documentation', priority: 'high' },
    { id: 't2', title: 'Review code', priority: 'medium' },
    { id: 't3', title: 'Update tests', priority: 'low' }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">11.K - List Rendering with map()</h1>
      
      {/* Wprowadzenie */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">map() jako Alternatywa</h2>
        <p className="mb-4 text-black">
          Metoda <code className="bg-gray-200 px-2 py-1 rounded">map()</code> jest najczęściej używaną
          metodą do generowania elementów JSX z tablicy danych.
        </p>
      </section>

      {/* Podstawowy przykład */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Podstawowy Przykład map()</h2>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <ul className="list-none p-0 space-y-2">
            {tasks.map(task => (
              <li key={task.id} className="p-4 bg-gray-50 rounded border border-gray-200">
                <h3 className="font-semibold text-black">{task.title}</h3>
                <p className="text-sm text-black">Priority: {task.priority}</p>
              </li>
            ))}
          </ul>
        </div>

        <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm mt-4 font-mono">
{`const tasks = [
  { id: 't1', title: 'Write docs', priority: 'high' },
  { id: 't2', title: 'Review code', priority: 'medium' }
];

return (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>
        <h3>{task.title}</h3>
        <p>Priority: {task.priority}</p>
      </li>
    ))}
  </ul>
);`}
        </pre>
      </section>

      {/* Aktualizowanie list */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Aktualizowanie List</h2>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded mb-4">
          <p className="text-sm text-red-900 font-semibold mb-2">❌ Nieprawidłowy Sposób:</p>
          <pre className="bg-black text-green-400 p-3 rounded overflow-auto text-xs font-mono">
{`function handleAddTask() {
  tasks.push('New task'); // Mutuje oryginalną tablicę!
  setTasks(tasks); // Nie zadziała prawidłowo!
}`}
          </pre>
        </div>

        <div className="p-4 bg-green-50 border border-green-200 rounded mb-4">
          <p className="text-sm text-green-900 font-semibold mb-2">✅ Prawidłowy Sposób:</p>
          <pre className="bg-black text-green-400 p-3 rounded overflow-auto text-xs font-mono">
{`function handleAddTask() {
  setTasks(curTasks => [...curTasks, 'New task']);
  
  // Dodaj na początku:
  setTasks(curTasks => ['New task', ...curTasks]);
  
  // Usuń element:
  setTasks(curTasks => curTasks.filter(t => t.id !== taskId));
}`}
          </pre>
        </div>

        <TaskList />
      </section>

      {/* Kluczowe zasady */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">📝 Kluczowe Zasady</h2>
        <ol className="list-decimal list-inside space-y-3 text-black">
          <li><strong>Zawsze tworz nową tablicę</strong> przy aktualizacji</li>
          <li><strong>Używaj spread operator (...)</strong> do kopiowania tablicy</li>
          <li><strong>Nie używaj push/pop/splice</strong> - mutują oryginalną tablicę</li>
          <li><strong>map() tworzy nową tablicę</strong> - jest bezpieczny</li>
          <li><strong>filter() również jest bezpieczny</strong> - tworzy nową tablicę</li>
        </ol>
      </section>
    </div>
  );
}
