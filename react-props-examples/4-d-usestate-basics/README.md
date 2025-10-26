# 4.D - useState Basics

Projekt demonstruje podstawowe użycie useState w React.

## Opis

Ten przykład pokazuje:
- **Wprowadzenie do stanu**: Czym jest stan w React
- **useState hook**: Jak dodać stan do komponentu
- **Anatomia useState**: Struktura i składnia
- **Dlaczego nie zwykła zmienna**: Problem z aktualizacją bez stanu
- **Wielokrotne użycie**: Niezależne wartości stanu w jednym komponencie
- **Two-way binding**: Kontrolowane komponenty formularza

## Uruchomienie

```bash
cd react-props-examples/4-d-usestate-basics
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## Komponenty

- **TaskForm** - podstawowy formularz z walidacją
- **TaskCounter** - licznik ukończonych zadań
- **TaskFormAdvanced** - zaawansowany formularz z wieloma wartościami stanu

## useState - Podstawy

### Składnia

```javascript
const [value, setValue] = useState(initialValue);
```

- `value` - aktualna wartość stanu
- `setValue` - funkcja do aktualizacji stanu
- `initialValue` - początkowa wartość

### Przykład

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## Dlaczego const?

Zmienna z useState jest `const`, ale się zmienia, bo:
- Każdy render tworzy **nową** stałą
- React przechowuje aktualną wartość wewnętrznie
- To właściwie nowa funkcja podczas każdego renderu

## Wielokrotne użycie useState

Możesz mieć wiele niezależnych wartości stanu:

```javascript
function TaskForm() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [completed, setCompleted] = useState(false);
  
  // Każdy useState jest niezależny
}
```

## Technologie

- **Next.js 15** - React framework z App Router
- **JavaScript** - standardowy JavaScript (bez TypeScript)
- **Tailwind CSS** - utility-first CSS framework
- **useState Hook** - React hook do zarządzania stanem

## Pochodzenie

Projekt bazuje na materiale z lekcji 5-1 (Teoria) i demonstruje przykłady 31-46 (Step 4 - Stan w React - Dynamiczne Aktualizacje Interfejsu).

## Następne kroki

Kolejny projekt pokaże zaawansowane techniki useState:
- Użycie funkcji aktualizującej
- Aktualizacja na podstawie poprzedniej wartości
- Praca z obiektami stanu
