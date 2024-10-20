// app/page.js

import Navbar from "@/app/components/Navbar";
import NavigateButton from "@/app/components/NavigateButton";
import Image from 'next/image';

export const metadata = {
    title: "This is a home page"
}

export default function Homepage() {
    return (
        <div>
            <h1>To jest strona główna</h1>
            <Navbar />
            <NavigateButton />
            <div style={{ width: 500, height: 200, position: 'relative' }}>
                <Image
                    src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
                    layout='fill'
                    objectFit='cover'
                    alt='A beautiful English Setter'
                />
            </div>
        </div>
    );
};
