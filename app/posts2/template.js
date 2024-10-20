// app/posts/template.js
export default function PostsTemplate({ children }) {
    return (
        <div>
            <header>
                <h2>Posty</h2>
                <p>Ten nagłówek jest odświeżany za każdym razem, gdy wchodzisz na stronę posta.</p>
            </header>
            <main>{children}</main>
        </div>
    );
}
