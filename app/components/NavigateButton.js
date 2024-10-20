// app/components/NavigateButton.js

"use client";

import { useRouter } from 'next/navigation';

export default function NavigateButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/about');
    };

    return (
        <button onClick={handleClick}>
            Przejdź do strony "O Nas"
        </button>
    );
}
