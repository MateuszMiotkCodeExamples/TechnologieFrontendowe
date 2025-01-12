// app/books/edit/[id]/page.js
'use client'
import BookForm from '@/app/features/books/Form'
import { useParams } from 'next/navigation'

export default function EditBookPage() {
    const params = useParams()
    return <BookForm id={params.id} />
}