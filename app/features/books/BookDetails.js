// src/features/books/BookDetails.js
'use client'
import { useSelector } from 'react-redux'
import { selectBook } from './booksSlice'

const BookDetails = ({ id }) => {
    // Używamy selektora wyższego rzędu
    const getBook = useSelector(selectBook)
    const book = getBook(id)

    return (
        <div className="book-details">
            <h2>{book.title}</h2>
            <p>Autor: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
        </div>
    )
}