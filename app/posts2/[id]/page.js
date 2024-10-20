// app/posts2/[id]/page.js

export async function generateMetadata({ params }) {
    const postId = params.id;
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());

    return {
        title: `Post ${postId} - ${post.title}`,
        description: post.body,
        openGraph: {
            title: post.title,
            description: post.body,
            url: `https://example.com/posts/${postId}`,
            images: [
                {
                    url: `https://example.com/images/og/post-${postId}.png`,
                    width: 800,
                    height: 600,
                    alt: 'Obrazek OpenGraph dla posta',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@example',
            title: post.title,
            description: post.body,
            image: `https://example.com/images/og/post-${postId}.png`,
        },
    };
}


export default function PostPage({ params }) {
    return (
        <div>
            <h1>Post {params.id}</h1>
            <p>Treść posta...</p>
        </div>
    );
}
