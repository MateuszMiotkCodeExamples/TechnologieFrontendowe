// src/features/books/BookStats.js
'use client'
import { useSelector } from 'react-redux'
import { selectBookCount, selectAverageRating } from './booksSlice'

const BookStats = () => {
    // Używamy selektorów do dynamicznego obliczania statystyk
    const bookCount = useSelector(selectBookCount)
    const averageRating = useSelector(selectAverageRating)

    return (
        <div className="stats-container">
            <p>Liczba książek w bibliotece: {bookCount}</p>
            <p>Średnia ocena: {averageRating.toFixed(1)}</p>
        </div>
    )
}

