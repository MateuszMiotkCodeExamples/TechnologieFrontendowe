# React Props i State - Przykłady z Lekcji 5-1

## Status projektu

### ✅ Projekt 1.A: Basic Props (ZAKOŃCZONY)
**Lokalizacja:** `react-props-examples/1-a-basic-props/`

**Technologie:** Next.js 15, JavaScript, Tailwind CSS

**Opis:** Projekt demonstruje podstawowe użycie props w React, w tym:
- Analogię do HTML (ten sam element `<a>` z różnymi atrybutami)
- Przekazywanie danych do komponentów przez props
- Strukturę obiektu props
- Wykorzystanie `props.children`

**Komponenty:**
- `TaskItem.jsx` - wyświetla zadanie z konfigurowalnym priorytetem i statusem
- `TaskList.jsx` - grupuje wiele TaskItem używając props.children
- `Alert.jsx` - pokazuje alerty z różnymi typami

**Uruchomienie:**
```bash
cd react-props-examples/1-a-basic-props
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

**Przykłady z lekcji:** 1-9 (Step 1 - Props w React - Tworzenie Konfigurowalnych Komponentów)

---

### ✅ Projekt 2.B: Advanced Props (ZAKOŃCZONY)
**Lokalizacja:** `react-props-examples/2-b-advanced-props/`

**Technologie:** Next.js 15, JavaScript, Tailwind CSS

**Opis:** Projekt demonstruje zaawansowane koncepcje props:
- Destrukturyzację props w parametrach funkcji
- Spreading props z operatorem spread (`...props`)
- Rest operator dla pozostałych props
- Różne sposoby przekazywania danych (indywidualne vs zgrupowane)
- Komponenty bez props vs z props
- Prop drilling

**Komponenty:**
- `Link.jsx` - demonstruje spreading props z operatorem spread
- `Card.jsx` - pokazuje wykorzystanie props.children
- `NavItem.jsx` - prosty komponent z destrukturyzacją
- `TaskItem.jsx` - zaawansowany przykład z wieloma props
- `AnimatedLink.jsx` - przykład przekazywania props

**Uruchomienie:**
```bash
cd react-props-examples/2-b-advanced-props
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

**Przykłady z lekcji:** 10-24 (Step 2 - Props w React - Zaawansowane Koncepcje)

---

### ✅ Projekt 3.C: Event Handling (ZAKOŃCZONY)
**Lokalizacja:** `react-props-examples/3-c-event-handling/`

**Technologie:** Next.js 15, JavaScript, Tailwind CSS

**Opis:** Projekt demonstruje obsługę zdarzeń:
- Problem statycznych komponentów
- Event handlers (onClick, onChange, onSubmit, onBlur)
- Event.target i dostęp do danych z zdarzenia
- preventDefault() do zapobiegania domyślnemu zachowaniu
- Problem z aktualizacją bez stanu (wprowadza następny projekt)

**Komponenty:**
- `TaskForm.jsx` - demonstruje obsługę onBlur
- `TaskManager.jsx` - pokazuje różne event handlers

**Uruchomienie:**
```bash
cd react-props-examples/3-c-event-handling
npm install
npm run dev
```

**Przykłady z lekcji:** 25-30 (Step 3 - Zdarzenia w React)

---

### 📋 Projekty do wykonania (4-12)
- Projekt 4.D: State Management - useState Basics  
- Projekt 5.E: State Management - Advanced Techniques
- Projekt 6.F: Derived Values and Form Handling
- Projekt 7.G: State Lifting (Lifting State Up)
- Projekt 8.H: Conditional Rendering
- Projekt 9.I: Conditional Rendering Advanced
- Projekt 10.J: List Rendering Basics
- Projekt 11.K: List Rendering with map()
- Projekt 12.L: Keys in Lists

## Struktura projektów

Każdy projekt zawiera:
- `package.json` - Next.js 15 + JavaScript + Tailwind CSS
- `next.config.js` - konfiguracja Next.js
- `app/page.js` - główna strona z przykładami
- `components/` - komponenty demonstracyjne (JavaScript)
- `README.md` - dokumentacja projektu

## Podejście iteracyjne

Projekty są tworzone sekwencyjnie:
1. ✅ Projekt 1.A utworzony i gotowy (Next.js + JavaScript)
2. ⏳ Proszę o zatwierdzenie przed przejściem do projektu 2.B
