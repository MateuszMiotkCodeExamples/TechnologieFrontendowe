// app/components/NewsFeed.jsx
"use client";

import React from "react";
import useJazzyNews from "../hooks/useJazzyNews";
import Post from "./Post";

export default function NewsFeed() {
    const posts = useJazzyNews();

    return (
        <div>
            <h1>{posts.length} artykułów</h1>
            {posts.map(post => (
                <Post key={post.id} title={post.title} content={post.content} />
            ))}
        </div>
    );
}