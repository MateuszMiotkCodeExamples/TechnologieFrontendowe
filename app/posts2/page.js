// app/posts/page.js

import Link from "next/link";
import Pagination from "@/app/components/Pagination";

export default async function PostsPage({ searchParams }) {
    const category = searchParams.category || 'all';
    const page = searchParams.page || 1;

    const posts = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&category=${category}`
    ).then((res) => res.json());

    return (
        <div>
            <h1>Posty w kategorii: {category}</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Pagination currentPage={page} />
        </div>
    );
}
