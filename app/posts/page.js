// app/posts/page.js

import Link from 'next/link';
import { posts } from './postData';

export default function PostsPage() {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/posts/${post.date}/${post.slug}`} legacyBehavior>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
