'use client'

import Link from '@/components/Link';
import Card from '@/components/Card';
import NavItem from '@/components/NavItem';
import TaskItem from '@/components/TaskItem';
import AnimatedLink from '@/components/AnimatedLink';

/**
 * 2.B - Advanced Props
 * 
 * Ten przykład demonstruje:
 * - Destrukturyzację props w parametrach funkcji
 * - Spreading props z operatorem spread (...props)
 * - Rest operator dla pozostałych props
 * - Różne sposoby przekazywania danych (indywidualne vs zgrupowane)
 * - Komponenty bez props vs z props
 */

export default function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-8 text-gray-900">2.B - Advanced Props Examples</h1>
      
      {/* Przykład 1: Spreading props - Link */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 1: Spreading Props z operatorem spread</h2>
        <p className="mb-4 text-gray-700">
          Link komponent przyjmuje wszystkie HTML atrybuty przez <code className="bg-gray-200 px-2 py-1 rounded">...props</code>:
        </p>
        <div className="p-4 bg-white rounded-lg border border-gray-200">
          <Link href="https://google.com" download className="text-blue-600">
            Visit Google
          </Link>
        </div>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm mt-2">
{`function Link({ children, ...props }) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}`}
        </pre>
      </section>

      {/* Przykład 2: Children prop - Card */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 2: Props.children z zagnieżdżonymi komponentami</h2>
        <Card>
          <h3 className="text-xl mb-4 text-gray-900">Task Details</h3>
          <TaskItem 
            title="Complete project documentation" 
            priority="high" 
            completed={false}
          />
          <TaskItem 
            title="Review code changes" 
            priority="medium" 
            completed={true}
          />
        </Card>
      </section>

      {/* Przykład 3: Komponenty bez props */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 3: Komponenty bez props</h2>
        <p className="mb-4 text-gray-700">
          Niektóre komponenty nie potrzebują props, np. stałe elementy UI:
        </p>
        <header className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl mb-4 font-semibold">App Header</h3>
          <nav>
            <ul className="flex space-x-4 list-none p-0 m-0">
              <NavItem target="/tasks" label="My Tasks" />
              <NavItem target="/projects" label="Projects" />
              <NavItem target="/settings" label="Settings" />
            </ul>
          </nav>
        </header>
      </section>

      {/* Przykład 4: Indywidualne props vs zgrupowane dane */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 4: Indywidualne props vs zgrupowane dane</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Metoda 1: Indywidualne props</h3>
          <TaskItem 
            id="t1"
            title="Complete project documentation"
            priority="high"
            dueDate="2025-11-01"
            assignedTo="John Smith"
            completed={false}
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Metoda 2: Zgrupowane dane w obiekt</h3>
          <p className="mb-2 text-gray-700">
            Można też przekazać cały obiekt jako jeden prop:
          </p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
{`const taskData = {
  id: "t1",
  title: "Complete documentation",
  priority: "high"
};
<TaskItem data={taskData} />`}
          </pre>
        </div>
      </section>

      {/* Przykład 5: Destrukturyzacja */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 5: Destrukturyzacja props</h2>
        <p className="mb-4 text-gray-700">
          Zamiast pisać <code className="bg-gray-200 px-2 py-1 rounded">props.title</code>, możemy z destrukturyzacją używać bezpośrednio <code className="bg-gray-200 px-2 py-1 rounded">title</code>:
        </p>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
          <TaskItem 
            title="Review code changes"
            priority="low"
            assignedTo="Alice Johnson"
            dueDate="2025-11-15"
            completed={true}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Bez destrukturyzacji:</h4>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-auto">
{`function TaskItem(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>Assigned to: {props.assignedTo}</p>
    </li>
  );
}`}
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Z destrukturyzacją:</h4>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-auto">
{`function TaskItem({ title, assignedTo, dueDate }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>Assigned to: {assignedTo}</p>
    </li>
  );
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Przykład 6: Rest operator */}
      <section className="my-8">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 6: Rest operator do przekazywania wszystkich props</h2>
        <p className="mb-4 text-gray-700">
          Rest operator pozwala przekazać wszystkie nieznane props dalej:
        </p>
        
        <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
          <Link href="https://google.com" download className="text-blue-600">
            Download from Google
          </Link>
        </div>

        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
{`function Link({ children, ...props }) {
  return (
    <a {...props} target="_blank">
      {children}
    </a>
  );
}

// Użycie:
<Link href="https://google.com" download className="external-link">
  Download from Google
</Link>`}
        </pre>
      </section>

      {/* Przykład 7: Prop drilling demonstration */}
      <section className="my-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl mb-4 text-gray-900">Przykład 7: Prop Drilling (łańcuchy props)</h2>
        <p className="mb-4 text-gray-700">
          Czasami props muszą przejść przez wiele poziomów komponentów, aby dotrzeć tam gdzie są używane:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
{`// Przykład prop drilling:
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
        <p className="mt-4 text-gray-600">
          <strong>Problem:</strong> userId przechodzi przez wszystkie komponenty, nawet te które go nie potrzebują.
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Rozwiązanie:</strong> Context API lub lifting state up (pokazane w kolejnych projektach).
        </p>
      </section>
    </div>
  );
}
