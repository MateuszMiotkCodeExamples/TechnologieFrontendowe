// src/app/page.js
'use client'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'
import List from "@/app/features/books/List"
import {
    selectBookMemoized,
    selectBooksSortedByRating,
    selectBookCount,
    selectAverageRating,
    createSelectBooksByAuthor,
    setRatingFilter
} from "@/app/features/books/booksSlice"
import Link from "next/link";

export default function Home() {
    const [authorFilter, setAuthorFilter] = useState('')
    const [selectedBookId, setSelectedBookId] = useState(null)

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    // Używamy zmemoizowanych selektorów
    const totalBooks = useSelector(selectBookCount)
    const averageRating = useSelector(selectAverageRating)

    // Tworzymy zmemoizowany selektor dla aktualnego filtra autora
    const selectFilteredBooks = createSelectBooksByAuthor(authorFilter)
    const filteredBooks = useSelector(selectFilteredBooks)

    // Pobieramy szczegóły wybranej książki jeśli jest wybrana
    const selectedBook = useSelector(
        state => selectedBookId ? selectBookMemoized(state, selectedBookId) : null
    )

    return (
        <main className="p-8">
            <h1>Redux Counter</h1>
            <div className="mb-8">
                <button
                    onClick={() => dispatch(decrement())}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >-</button>
                <span className="mx-4">{count}</span>
                <button
                    onClick={() => dispatch(increment())}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >+</button>
            </div>

            <div>
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">Nasza Biblioteka</h1>
                    <div className="bg-gray-100 p-4 rounded">
                        <p className="text-lg">Łączna liczba książek: {totalBooks}</p>
                        <p className="text-lg">Średnia ocena: {averageRating.toFixed(1)}</p>

                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Filtruj po autorze..."
                                value={authorFilter}
                                onChange={(e) => setAuthorFilter(e.target.value)}
                                className="p-2 border rounded w-full"
                            />
                        </div>
                    </div>
                </header>
                <Link
                    href="/features/books/new"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Dodaj nową książkę
                </Link>
                <List
                    books={filteredBooks}
                    selectedBookId={selectedBookId}
                    onBookSelect={setSelectedBookId}
                />

                {selectedBook && (
                    <div className="mt-8 p-4 bg-gray-100 rounded">
                        <h2 className="text-xl font-bold mb-2">Szczegóły wybranej książki</h2>
                        <p><strong>Tytuł:</strong> {selectedBook.title}</p>
                        <p><strong>Autor:</strong> {selectedBook.author}</p>
                        <p><strong>ISBN:</strong> {selectedBook.isbn}</p>
                        {selectedBook.rating && (
                            <p><strong>Ocena:</strong> {selectedBook.rating}/5</p>
                        )}
                    </div>
                )}
            </div>
        </main>
    )
}