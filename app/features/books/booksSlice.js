// src/features/books/booksSlice.js
import { createSlice, createSelector } from '@reduxjs/toolkit'
import booksData from './booksData'

// Definiujemy początkowy stan z dodatkowym polem na filtr ocen
const initialState = {
    books: booksData,
    ratingFilter: 0  // 0 oznacza brak filtrowania
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setRatingFilter: (state, action) => {
            state.ratingFilter = action.payload
        },
        remove: (state, action) => {
            const index = state.books.findIndex(book => book.id === action.payload)
            state.books.splice(index, 1)
        },
        save(state, action) {
            if (action.payload.id) {
                // Aktualizacja istniejącej książki
                const index = state.books.findIndex(book => book.id === action.payload.id)
                state.books[index] = action.payload
            } else {
                // Dodawanie nowej książki
                const nextId = Math.max(...state.books.map(book => book.id)) + 1
                state.books.push({ ...action.payload, id: nextId })
            }
        }
    }
})

// Podstawowe selektory - stanowią fundament dla bardziej złożonych selektorów
export const selectBooks = state => state.books.books
export const selectRatingFilter = state => state.books.ratingFilter

// Zoptymalizowany selektor dla filtrowania po ocenach używający memoizacji
export const selectBooksByRatingMemoized = createSelector(
    [selectBooks, selectRatingFilter],
    (books, ratingFilter) => {
        if (ratingFilter === 0) return books
        return books.filter(book => book.rating === ratingFilter)
    }
)

// Zoptymalizowany selektor dla pojedynczej książki
export const selectBookMemoized = createSelector(
    [selectBooks, (state, id) => id],
    (books, id) => {
        const book = books.find(book => book.id === id)
        return book || { title: '', author: '', isbn: '' }
    }
)

// Selektor wyższego rzędu dla filtrowania po autorze z memoizacją
export const createSelectBooksByAuthor = author =>
    createSelector(
        [selectBooks],
        books => books.filter(book => book.author.includes(author))
    )

// Zoptymalizowane selektory dla statystyk
export const selectBookCount = createSelector(
    [selectBooks],
    books => books.length
)

export const selectBooksSortedByRating = createSelector(
    [selectBooks],
    books => [...books].sort((a, b) => (b.rating || 0) - (a.rating || 0))
)

export const selectAverageRating = createSelector(
    [selectBooks],
    books => {
        const booksWithRatings = books.filter(book => book.rating)
        return booksWithRatings.length
            ? booksWithRatings.reduce((sum, book) => sum + book.rating, 0) / booksWithRatings.length
            : 0
    }
)

// Zachowujemy kompatybilność wsteczną dla istniejących selektorów
export const selectBook = state => id => {
    const book = selectBooks(state).find(book => book.id === id)
    return book || { title: '', author: '', isbn: '' }
}

export const selectBooksByAuthor = author => state => {
    return selectBooks(state).filter(book => book.author.includes(author))
}

export const { setRatingFilter, remove, save } = booksSlice.actions
export default booksSlice.reducer