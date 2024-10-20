// app/components/Pagination.js

import Link from 'next/link';

export default function Pagination({ currentPage }) {
    const nextPage = Number(currentPage) + 1;
    const prevPage = Number(currentPage) - 1;

    return (
        <nav>
            {prevPage > 0 && (
                <Link href={`?page=${prevPage}`}>
                    Poprzednia strona
                </Link>
            )}
            <Link href={`?page=${nextPage}`}>
                Następna strona
            </Link>
        </nav>
    );
}

