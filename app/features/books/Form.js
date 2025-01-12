// features/books/Form.js
'use client'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/app/hooks/redux'
import { useRouter } from 'next/navigation'
import {save, selectBook, selectBookMemoized, selectBooks} from './booksSlice'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Schema walidacji pozostaje bez zmian
const BookSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Tytuł musi mieć co najmniej 2 znaki')
        .max(100, 'Tytuł nie może być dłuższy niż 100 znaków')
        .required('Tytuł jest wymagany'),
    author: Yup.string()
        .min(2, 'Imię i nazwisko autora musi mieć co najmniej 2 znaki')
        .max(50, 'Imię i nazwisko autora nie może być dłuższe niż 50 znaków')
        .required('Autor jest wymagany'),
    isbn: Yup.string()
        .matches(/^(?:\d{10}|\d{13})$/, 'ISBN musi mieć 10 lub 13 cyfr')
        .required('ISBN jest wymagany')
})

const BookForm = ({ id }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    // Tworzymy referencję do formularza Formik
    const formikRef = useRef(null)

    // Pobieramy wszystkie książki i znajdujemy odpowiednią po ID
    const books = useSelector(selectBooks)
    const currentBook = id ? books.find(book => book.id === parseInt(id, 10)) : null

    // Początkowe wartości formularza
    const initialValues = {
        title: '',
        author: '',
        isbn: ''
    }

    // Efekt ustawiający dane książki w formularzu przy edycji
    useEffect(() => {
        if (id && currentBook && formikRef.current) {
            formikRef.current.setValues(currentBook)
        }
    }, [id, currentBook])

    // Funkcja obsługująca wysyłanie formularza
    const handleSubmit = (values, { setSubmitting }) => {
        try {
            const bookData = id ? { ...values, id: parseInt(id, 10) } : values
            dispatch(save(bookData))
            router.push('/')
        } catch (error) {
            console.error('Błąd podczas zapisywania książki:', error)
        } finally {
            setSubmitting(false)
        }
    }

    // Komponent dla pojedynczego pola formularza
    const FormField = ({ name, label, type = 'text' }) => (
        <div className="mb-4">
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <Field
                id={name}
                type={type}
                name={name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
                name={name}
                component="div"
                className="text-red-500 text-xs italic mt-1"
            />
        </div>
    )

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-5">
                {id ? 'Edytuj książkę' : 'Dodaj nową książkę'}
            </h2>

            <Formik
                innerRef={formikRef}
                initialValues={currentBook || initialValues}
                validationSchema={BookSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <FormField name="title" label="Tytuł" />
                        <FormField name="author" label="Autor" />
                        <FormField name="isbn" label="ISBN" />

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {isSubmitting ? 'Zapisywanie...' : 'Zapisz'}
                            </button>

                            <button
                                type="button"
                                onClick={() => router.push('/books')}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Anuluj
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default BookForm