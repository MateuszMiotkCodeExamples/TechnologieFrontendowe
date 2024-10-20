// app/posts/[date]/[slug]/page.js

import { posts } from '../../postData';
import { notFound } from 'next/navigation';

export default function PostPage({ params }) {
    const { date, slug } = params;
    const post = posts.find(
        (p) => p.date === date && p.slug === slug
    );

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p><em>Data publikacji: {post.date}</em></p>
            <div>{post.content}</div>
        </div>
    );
}
