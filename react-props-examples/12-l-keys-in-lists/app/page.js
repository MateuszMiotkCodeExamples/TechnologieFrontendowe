'use client'

import { useState } from 'react';
import TasksList from '@/components/TasksList';

/**
 * 12.L - Keys in Lists
 * 
 * Ten przykład demonstruje:
 * - Dlaczego klucze są potrzebne
 * - Jak dodawać klucze
 * - Wymagania dla dobrych kluczy
 * - Dlaczego indeksy są złymi kluczami
 * - Co stanowi dobry klucz
 */

export default function Home() {
  const tasksWithKeys = [
    { id: 't1', title: 'Write documentation', priority: 'high', created: '2024-01-15' },
    { id: 't2', title: 'Review code', priority: 'medium', created: '2024-01-16' },
    { id: 't3', title: 'Update tests', priority: 'low', created: '2024-01-17' }
  ];

  // Symulacja listy bez unikalnych ID (złe!)
  const tasksWithoutKeys = ['Task A', 'Task B', 'Task C'];

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">12.L - Keys in Lists</h1>
      
      {/* Wprowadzenie */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Dlaczego Klucze Są Potrzebne?</h2>
        <p className="mb-4 text-black">
          React używa kluczy do identyfikacji, które elementy zmieniły się, zostały dodane lub usunięte.
          To pozwala React na efektywne aktualizowanie tylko zmienionych elementów DOM.
        </p>
      </section>

      {/* Problem bez kluczy */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Problem bez Kluczy</h2>
        <p className="mb-4 text-black">
          Gdy nie używamy kluczy lub używamy ich źle (np. index):
        </p>

        <div className="p-4 bg-red-50 border border-red-200 rounded mb-4">
          <p className="text-sm text-red-900 font-semibold mb-2">❌ Unikaj tego:</p>
          <pre className="bg-black text-green-400 p-3 rounded overflow-auto text-sm font-mono">
{`// Używanie index jako klucz - ZŁE!
tasks.map((task, index) => (
  <li key={index}>{task.title}</li>
));

// Problem: Indexy zmieniają się gdy lista się zmienia!
// Dodanie elementu na początku "psuje" wszystkie klucze!`}
          </pre>
        </div>

        <div className="p-4 bg-green-50 border border-green-200 rounded mb-4">
          <p className="text-sm text-green-900 font-semibold mb-2">✅ Używaj tego:</p>
          <pre className="bg-black text-green-400 p-3 rounded overflow-auto text-sm font-mono">
{`// Używaj unikalnego ID - DOBRE!
tasks.map(task => (
  <li key={task.id}>{task.title}</li>
));

// Każdy element ma stabilny, unikalny klucz`}
          </pre>
        </div>
      </section>

      {/* Przykład z dobrymi kluczami */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład z Kluczami</h2>
        <p className="mb-4 text-black">
          Tasks z unikalnymi ID - React może efektywnie aktualizować DOM:
        </p>
        <TasksList tasks={tasksWithKeys} />
      </section>

      {/* Wymagania dla kluczy */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">Wymagania dla Dobrych Kluczy</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-semibold text-green-900 mb-2">✅ DOBRY klucz:</h4>
            <ul className="list-disc list-inside space-y-1 text-black text-sm">
              <li>Unikalny dla każdego elementu</li>
              <li>Stabilny (nie zmienia się między renderami)</li>
              <li>Przewidywalny (zawsze ten sam dla tego samego elementu)</li>
              <li>ID z bazy danych</li>
              <li>Kombinacja unikalnych właściwości</li>
            </ul>
          </div>

          <div className="p-4 bg-red-50 border border-red-200 rounded">
            <h4 className="font-semibold text-red-900 mb-2">❌ ZŁY klucz:</h4>
            <ul className="list-disc list-inside space-y-1 text-black text-sm">
              <li>Index z tablicy</li>
              <li>Losowa wartość (Math.random())</li>
              <li>Timestamp (now())</li>
              <li>Nieunikalne wartości</li>
              <li>Wartości które się zmieniają</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Co stanowi dobry klucz */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Co Stanowi Dobry Klucz?</h2>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="font-semibold text-black mb-2">ID z bazy danych:</h4>
            <pre className="text-xs bg-black text-green-400 p-2 rounded font-mono">
{`key={task.id}`}
            </pre>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="font-semibold text-black mb-2">Unikalny string:</h4>
            <pre className="text-xs bg-black text-green-400 p-2 rounded font-mono">
{`key={task.slug}`}
            </pre>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="font-semibold text-black mb-2">Kombinacja:</h4>
            <pre className="text-xs bg-black text-green-400 p-2 rounded font-mono">
{`key={\`\${type}-\${id}\`}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Ostatnia deska ratunku */}
      <section className="my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-yellow-900">Ostatnia Deska Ratunku</h2>
        <p className="mb-4 text-black">
          Jeśli nie masz unikalnego ID, możesz użyć samej wartości (ALE tylko jeśli jest unikalna!):
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-black mb-2">Lista stringów:</p>
            <pre className="bg-black text-green-400 p-3 rounded text-xs overflow-auto font-mono">
{`const tasks = ['Task A', 'Task B', 'Task C'];

tasks.map(task => (
  <li key={task}>{task}</li>
))`}
            </pre>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">⚠️ Używaj ostrożnie:</p>
            <ul className="list-disc list-inside text-black text-sm space-y-1">
              <li>Tylko jeśli wartość jest unikalna</li>
              <li>Lista się nie zmienia kolejności</li>
              <li>Lepsze niż index, gorsze niż ID</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kluczowe zasady */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">📝 Kluczowe Zasady</h2>
        <ol className="list-decimal list-inside space-y-3 text-black">
          <li><strong>Zawsze używaj kluczy</strong> przy renderowaniu list</li>
          <li><strong>Klucz powinien być unikalny</strong> w całej liście</li>
          <li><strong>Unikaj używania index</strong> jako klucz jeśli lista może się zmieniać</li>
          <li><strong>Używaj unikalnych ID</strong> zamiast indexów</li>
          <li><strong>Klucz musi być stabilny</strong> - ten sam element zawsze ten sam klucz</li>
        </ol>
      </section>
    </div>
  );
}
