import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import bookReducer from '../features/books/booksSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        books: bookReducer
    },
    // Dodajemy wsparcie dla Redux DevTools
    devTools: process.env.NODE_ENV !== 'production'
})

// Eksportujemy pomocnicze funkcje dla komponentów
export const useAppDispatch = () => store.dispatch
export const useAppSelector = state => state