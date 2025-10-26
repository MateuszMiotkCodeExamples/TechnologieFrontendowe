'use client'

import { useState } from 'react';
import TaskSearchBar from '@/components/TaskSearchBar';
import TaskOverview from '@/components/TaskOverview';
import TaskFilter from '@/components/TaskFilter';
import TaskList from '@/components/TaskList';

/**
 * 7.G - State Lifting (Lifting State Up)
 * 
 * Ten przykład demonstruje:
 * - Problem gdy wiele komponentów potrzebuje tego samego stanu
 * - Prop drilling
 * - Jak podnieść stan do wspólnego rodzica
 * - Centralne zarządzanie stanem
 */

export default function Home() {
  // State lifting: stan jest w najwyższym komponencie
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('all');

  function handleUpdateSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleFilterChange(event) {
    setFilterValue(event.target.value);
  }

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">7.G - State Lifting Examples</h1>
      
      {/* Wprowadzenie */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Problem: Wielu komponentów potrzebuje tego samego stanu</h2>
        <p className="mb-4 text-black">
          Gdy wiele komponentów potrzebuje tej samej wartości stanu, musimy "podnieść stan do góry"
          i przechowywać go w wspólnym komponencie rodzica.
        </p>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded mb-4">
          <p className="text-sm text-red-900 font-semibold">❌ Problem:</p>
          <pre className="text-xs bg-black text-green-400 p-3 rounded mt-2 overflow-auto font-mono">
{`function TaskSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  // Problem: jak przekazać searchTerm do TaskOverview?
}

function TaskOverview() {
  // Problem: nie ma dostępu do searchTerm!
}`}
          </pre>
        </div>
      </section>

      {/* Przykład z search */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Rozwiązanie: Lifting State Up</h2>
        <p className="mb-4 text-black">
          Stan searchTerm jest przechowywany w komponencie App i przekazywany w dół do obu komponentów:
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <TaskSearchBar searchTerm={searchTerm} onUpdateSearch={handleUpdateSearchTerm} />
          <TaskOverview currentTerm={searchTerm} />
        </div>

        <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm font-mono">
{`function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  function handleUpdateSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  
  return (
    <>
      <TaskSearchBar searchTerm={searchTerm} onUpdateSearch={handleUpdateSearchTerm} />
      <TaskOverview currentTerm={searchTerm} />
    </>
  );
}`}
        </pre>
      </section>

      {/* Przykład z filtrowaniem */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Kompletny Przykład: Filtrowanie Listy Zadań</h2>
        <p className="mb-4 text-black">
          TaskManager kontroluje oba: filtr i listę zadań:
        </p>

        <div className="space-y-4">
          <TaskFilter currentFilter={filterValue} onFilterChange={handleFilterChange} />
          <TaskList filter={filterValue} />
        </div>

        <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm font-mono mt-4">
{`function TaskManager() {
  const [filterValue, setFilterValue] = useState('all');
  
  function handleFilterChange(event) {
    setFilterValue(event.target.value);
  }
  
  return (
    <>
      <TaskFilter 
        currentFilter={filterValue} 
        onFilterChange={handleFilterChange} 
      />
      <TaskList filter={filterValue} />
    </>
  );
}`}
        </pre>
      </section>

      {/* Prop Drilling */}
      <section className="my-8 p-6 bg-red-50 border border-red-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-red-900">⚠️ Problem: Prop Drilling</h2>
        <p className="mb-4 text-red-900">
          Czasami props muszą przejść przez wiele poziomów komponentów:
        </p>
        
        <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm font-mono">
{`// Prop drilling - userId przechodzi przez wszystkie komponenty:
function App() {
  const [userId, setUserId] = useState('user123');
  return <Page userId={userId} />;
}

function Page({ userId }) {
  return <Container userId={userId} />;
}

function Container({ userId }) {
  return <Content userId={userId} />;
}

function Content({ userId }) {
  return <div>User ID: {userId}</div>;
}`}
        </pre>
        
        <p className="mt-4 text-red-900">
          <strong>Rozwiązanie:</strong> Context API lub lifting state - tylko tam gdzie faktycznie potrzebne!
        </p>
      </section>

      {/* Kluczowe zasady */}
      <section className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-blue-900">📝 Kluczowe Zasady</h2>
        <ol className="list-decimal list-inside space-y-3 text-black">
          <li><strong>Podnieś stan do wspólnego rodzica</strong> gdy wiele komponentów go potrzebuje</li>
          <li><strong>Przekazuj stan w dół</strong> przez props</li>
          <li><strong>Przekazuj funkcje callback</strong> do aktualizacji stanu</li>
          <li><strong>Unikaj prop drilling</strong> - nie przekazuj propsów przez komponenty, które ich nie potrzebują</li>
          <li><strong>Użyj Context API</strong> dla głębokich drzew komponentów</li>
        </ol>
      </section>

      {/* Diagram */}
      <section className="my-8 p-6 bg-white border border-gray-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-gray-900">Schemat State Lifting</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm font-mono text-black">
{`        App (stan tutaj)
           ↓
    ┌────────┴────────┐
    ↓                 ↓
SearchBar      TaskOverview
    ↓                 ↓
(odczytuje)      (odczytuje)
        
Wszystkie komponenty widzą ten sam stan!`}
          </pre>
        </div>
      </section>
    </div>
  );
}
