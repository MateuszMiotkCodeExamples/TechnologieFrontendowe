# 1.A - Basic Props

Projekt demonstruje podstawowe użycie props w React i Next.js.

## Opis

Ten przykład pokazuje:
- **Analogię do HTML**: Jak ten sam element `<a>` tworzy różne linki dzięki atrybutowi `href`
- **Podstawowe props**: Jak przekazywać dane do komponentów przez props
- **Obiekt props**: Jak React/Next.js grupuje przekazane atrybuty w obiekt `props`
- **Wykorzystanie props**: Jak używać wartości z props w komponencie

## Struktura obiektu props

Gdy używasz komponentu w ten sposób:
```jsx
<TaskItem id="t1" title="Complete project documentation" priority="high" />
```

Wewnątrz komponentu, `props` będzie obiektem:
```javascript
{
  id: "t1",
  title: "Complete project documentation",
  priority: "high"
}
```

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## Komponenty

- **TaskItem**: Wyświetla pojedyncze zadanie z konfigurowalną zawartością i priorytetem
- **TaskList**: Grupuje wiele TaskItem używając `props.children`
- **Alert**: Pokazuje alerty z różnymi typami (warning, error, info, success)

## Przykłady

1. **Analogia do HTML** - pokazuje jak HTML używa atrybutów do konfiguracji
2. **Podstawowe props** - prosty TaskItem z trzema props (id, title, priority)
3. **Children prop** - TaskList wykorzystuje `props.children` do wyświetlenia zawartości
4. **Alert component** - przykład komponentu z wieloma props
5. **Kompletny przykład** - lista zadań demonstrująca reużywalność komponentów

## Technologie

- **Next.js 15** - React framework z App Router
- **JavaScript** - standardowy JavaScript (bez TypeScript)
- **Tailwind CSS** - utility-first CSS framework

## Pochodzenie

Projekt bazuje na materiale z lekcji 5-1 (Teoria) i demonstruje przykłady 1-9.
