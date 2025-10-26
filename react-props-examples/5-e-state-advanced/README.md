# 5.E - useState Advanced Techniques

Projekt demonstruje zaawansowane techniki pracy z useState w React.

## Opis

Ten przykład pokazuje:
- **Konwencje nazewnictwa** - jak dobrze nazywać stany i funkcje aktualizujące
- **Typy wartości stanu** - string, number, boolean, object, array, null
- **Pracę z obiektami stanu** - aktualizacja z spread operatorem
- **Problematyczne wzorce** - bezpośrednie odnoszenie się do stanu
- **Funkcję aktualizującą** - prawidłowe aktualizowanie na podstawie poprzedniej wartości

## Uruchomienie

```bash
cd react-props-examples/5-e-state-advanced
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## Komponenty

- **NamingExamples** - demonstracja dobrych konwencji nazewnictwa
- **StateTypes** - różne typy wartości stanu
- **ObjectState** - praca z obiektem stanu
- **UpdatePatterns** - problematyczne vs poprawne wzorce
- **ObjectUpdate** - funkcja aktualizująca z obiektami

## Kluczowe Koncepcje

### Problematyczny wzorzec

```javascript
function incrementByThree() {
  setCount(count + 1);  // count = 0, nowa wartość = 1
  setCount(count + 1);  // count STALE = 0, nowa wartość = 1
  setCount(count + 1);  // count STALE = 0, nowa wartość = 1
  // Wynik: count = 1 zamiast 3!
}
```

### Poprawne rozwiązanie

```javascript
function incrementByThree() {
  setCount(prevCount => prevCount + 1);  // 0 -> 1
  setCount(prevCount => prevCount + 1);  // 1 -> 2
  setCount(prevCount => prevCount + 1);  // 2 -> 3
  // Wynik: count = 3 ✓
}
```

## Aktualizacja obiektów

Zawsze kopiuj obiekt przed modyfikacją:

```javascript
const [taskData, setTaskData] = useState({
  title: '',
  priority: 'medium'
});

// ✅ DOBRE - używaj spread operatora
setTaskData(prevData => ({
  ...prevData,
  title: 'New Title'
}));

// ❌ ZŁE - bezpośrednia modyfikacja
setTaskData(prevData => {
  prevData.title = 'New Title';  // Nie kopiuje!
  return prevData;
});
```

## Typy wartości stanu

useState może przyjąć dowolny typ:

```javascript
const [title, setTitle] = useState('text');           // String
const [count, setCount] = useState(0);                 // Number
const [isActive, setIsActive] = useState(false);      // Boolean
const [user, setUser] = useState(null);                // Null
const [data, setData] = useState({ id: 1 });          // Object
const [items, setItems] = useState([]);                // Array
```

## Technologie

- **Next.js 15** - React framework z App Router
- **JavaScript** - standardowy JavaScript (bez TypeScript)
- **Tailwind CSS** - utility-first CSS framework

## Pochodzenie

Projekt bazuje na materiale z lekcji 5-1 (Teoria) i demonstruje przykłady 47-75 (Step 5 - Stan w React - Zaawansowane Techniki).
