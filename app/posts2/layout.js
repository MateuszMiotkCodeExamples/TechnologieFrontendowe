export default function PostsLayout({ children }) {
    return (
        <div>
            <aside>
                <h2>Kategorie postów</h2>
                <ul>
                    <li><a href="/posts/category/tech">Tech</a></li>
                    <li><a href="/posts/category/lifestyle">Lifestyle</a></li>
                </ul>
            </aside>
            <section>{children}</section>
        </div>
    );
}
