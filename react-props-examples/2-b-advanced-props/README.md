# 2.B - Advanced Props

Projekt demonstruje zaawansowane koncepcje props w React i Next.js.

## Opis

Ten przykład pokazuje:
- **Destrukturyzację props**: Jak wydobywać konkretne właściwości z obiektu props
- **Spreading props**: Jak przekazywać wszystkie pozostałe props z operatorem spread
- **Rest operator**: Jak przechwytywać wszystkie nieznane props
- **Children prop**: Jak działa props.children dla zagnieżdżonej treści
- **Indywidualne vs zgrupowane props**: Różne sposoby przekazywania danych
- **Prop drilling**: Problem przekazywania props przez wiele poziomów

## Uruchomienie

```bash
cd react-props-examples/2-b-advanced-props
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## Komponenty

- **Link**: Demonstruje spreading props z operatorem `...props`
- **Card**: Pokazuje wykorzystanie props.children
- **NavItem**: Prosty komponent wykorzystujący destrukturyzację
- **TaskItem**: Zaawansowany przykład z wieloma props
- **AnimatedLink**: Przykład przekazywania props

## Przykłady

1. **Spreading Props** - użycie operatora spread do przekazywania wszystkich atrybutów
2. **Children prop** - zagnieżdżone komponenty w Card
3. **Komponenty bez props** - stałe elementy UI
4. **Indywidualne vs zgrupowane props** - różne podejścia do przekazywania danych
5. **Destrukturyzacja** - porównanie podejścia z i bez destrukturyzacji
6. **Rest operator** - przekazywanie wszystkich nieznanych props
7. **Prop drilling** - problem i potencjalne rozwiązania

## Destrukturyzacja

### Bez destrukturyzacji:
```javascript
function TaskItem(props) {
  return <div>{props.title} - {props.priority}</div>;
}
```

### Z destrukturyzacją:
```javascript
function TaskItem({ title, priority }) {
  return <div>{title} - {priority}</div>;
}
```

## Spreading Props

```javascript
function Link({ children, ...props }) {
  return (
    <a {...props} target="_blank">
      {children}
    </a>
  );
}

// Użycie - wszystkie HTML atrybuty są przekazywane:
<Link href="https://google.com" download className="link">
  Visit Google
</Link>
```

## Rest Operator

Rest operator (`...props`) pozwala przekazać wszystkie pozostałe props:

```javascript
function MyComponent({ knownProp, ...rest }) {
  // knownProp jest dostępne osobno
  // Wszystkie inne props są w obiekcie 'rest'
  return <div {...rest}>{knownProp}</div>;
}
```

## Technologie

- **Next.js 15** - React framework z App Router
- **JavaScript** - standardowy JavaScript (bez TypeScript)
- **Tailwind CSS** - utility-first CSS framework

## Pochodzenie

Projekt bazuje na materiale z lekcji 5-1 (Teoria) i demonstruje przykłady 10-24 (Step 2 - Zaawansowane koncepcje props).
