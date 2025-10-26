# 3.C - Event Handling

Projekt demonstruje obsługę zdarzeń (events) w React.

## Opis

Ten przykład pokazuje:
- **Problem statycznych komponentów**: Komponenty React domyślnie nie reagują na interakcje
- **Event handlers**: Jak obsługiwać zdarzenia użytkownika (kliknięcie, wpisanie, etc.)
- **Event props**: onClick, onChange, onSubmit, onBlur itp.
- **preventDefault**: Jak zapobiegać domyślnemu zachowaniu przeglądarki
- **Problem z aktualizacją**: Dlaczego zwykłe zmienne nie powodują re-renderu

## Uruchomienie

```bash
cd react-props-examples/3-c-event-handling
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## Komponenty

- **TaskForm** - demonstruje obsługę zdarzenia onBlur
- **TaskManager** - pokazuje różne event handlers

## Przykłady

1. **Problem statycznych komponentów** - formularz bez reakcji
2. **Event handler onBlur** - walidacja przy utracie fokusu
3. **Różne event handlers** - onClick, onChange, onSubmit, onMouseEnter, onKeyPress
4. **Dostępne zdarzenia** - przegląd wszystkich event props
5. **Ważna uwaga** - problem z aktualizacją bez stanu

## Event Handlers

### Mouse Events
```javascript
<button onClick={handleClick}>Kliknij</button>
<div onMouseEnter={handleEnter}>Najedź</div>
```

### Form Events
```javascript
<input onChange={handleChange} />
<form onSubmit={handleSubmit}>...</form>
<input onBlur={handleBlur} />
```

### Keyboard Events
```javascript
<input onKeyPress={handleKeyPress} />
```

## Problem z Aktualizacją

**To NIE zadziała:**
```javascript
function Component() {
  let count = 0;
  
  function increment() {
    count++; // Nie spowoduje re-renderu!
  }
  
  return <button onClick={increment}>{count}</button>;
}
```

**To zadziała (w kolejnym projekcie z useState):**
```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  function increment() {
    setCount(count + 1); // Spowoduje re-render!
  }
  
  return <button onClick={increment}>{count}</button>;
}
```

## event.target

Event handlers otrzymują obiekt `event` z informacjami o zdarzeniu:

```javascript
function handleChange(event) {
  console.log(event.target.value); // Wartość inputa
  console.log(event.target.name);   // Nazwa pola
  console.log(event.key);           // Wciśnięty klawisz (dla keyboard events)
}
```

## preventDefault

Zapobiega domyślnemu zachowaniu przeglądarki:

```javascript
function handleSubmit(event) {
  event.preventDefault(); // Zapobiega przeładowaniu strony
  console.log('Form submitted');
}
```

## Technologie

- **Next.js 15** - React framework z App Router
- **JavaScript** - standardowy JavaScript (bez TypeScript)
- **Tailwind CSS** - utility-first CSS framework

## Pochodzenie

Projekt bazuje na materiale z lekcji 5-1 (Teoria) i demonstruje przykłady 25-30 (Step 3 - Zdarzenia w React).

## Następny krok

Kolejny projekt pokaże jak używać **useState** do prawdziwej aktualizacji interfejsu po zdarzeniach.
