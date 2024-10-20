import Link from 'next/link';

function Navbar() {
    return (
        <div>
            <Link href='/about' preload={false}>Home</Link>
            <Link href='/about' preload={false}>About</Link>
            <Link href='/about' preload={false}>Contacts</Link>
            <Link href="/posts/2024-04-01/pierwszy-post" >
                Read post
            </Link>

        </div>
    );
}


export default Navbar;
