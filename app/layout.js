// app/layout.js

export const metadata = {
    title: 'Next.js App',
    description: 'Domyślne ustawienia aplikacji Next.js',
    openGraph: {
        title: 'Next.js App',
        description: 'Domyślne OpenGraph dla aplikacji',
        url: 'https://example.com',
        images: [
            {
                url: 'https://example.com/images/og/default.png',
                width: 800,
                height: 600,
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <header>
            <h1>Blog App</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/posts">Posts</a>
            </nav>
        </header>
        <main>{children}</main>
        <footer>Stopka aplikacji</footer>
        </body>
        </html>
    );
}

