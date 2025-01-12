// src/features/books/List.js
'use client'
import {useDispatch, useSelector} from 'react-redux'
import {
    selectBook,
    remove,
    selectBookMemoized,
    selectBooksByRatingMemoized,
    selectBooks
} from '@/app/features/books/booksSlice'
import Link from "next/link";
import {useAppDispatch} from "@/app/store";

const List = ({ books, selectedBookId, onBookSelect }) => {
    // Używamy selektora wyższego rzędu do pobrania szczegółów wybranej książki
    const getBook = useSelector(selectBook)
    const selectedBook = selectedBookId ? getBook(selectedBookId) : null

    const dispatch = useAppDispatch()

    // Funkcja pomocnicza do określania stylu wybranego wiersza
    const getRowStyles = (bookId) => {
        const baseStyles = "border-t hover:bg-gray-50 cursor-pointer transition-colors"
        return selectedBookId === bookId
            ? `${baseStyles} bg-blue-50`
            : baseStyles
    }

    return (
        <div className="container mx-auto p-4">
            <table className="min-w-full bg-white shadow-md rounded">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 text-left">Title</th>
                    <th className="px-4 py-2 text-left">Author</th>
                    <th className="px-4 py-2 text-left">ISBN</th>
                    <th className="px-4 py-2 text-left">Rating</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr
                        key={book.id}
                        className={getRowStyles(book.id)}
                        onClick={() => onBookSelect(book.id)}
                    >
                        <td className="px-4 py-2">{book.title}</td>
                        <td className="px-4 py-2">{book.author}</td>
                        <td className="px-4 py-2">{book.isbn}</td>
                        <td className="px-4 py-2">
                            {book.rating ? `${book.rating}/5` : 'Brak oceny'}
                        </td>
                        <td className="px-4 py-2">
                            <button
                                onClick={() => dispatch(remove(book.id))}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Usuń
                            </button>
                            <Link
                                href={`/features/books/edit/${book.id}`}
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                                Edytuj
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
                {books.length === 0 && (
                    <tfoot>
                    <tr>
                        <td colSpan="4" className="px-4 py-8 text-center text-gray-500">
                            Nie znaleziono książek spełniających kryteria wyszukiwania
                        </td>
                    </tr>
                    </tfoot>
                )}
            </table>
        </div>
    )
}

export default List