// app/newsfeed/page.jsx
"use client";

import React, { useState } from "react";
import NewsFeed from "../components/NewsFeed";

export default function NewsFeedPage() {
    const [showNewsFeed, setShowNewsFeed] = useState(true);

    return (
        <div className="App">
            <h1>Witamy w Naszym News Feed</h1>
            <button onClick={() => setShowNewsFeed(prev => !prev)}>
                {showNewsFeed ? "Ukryj NewsFeed" : "Pokaż NewsFeed"}
            </button>
            {showNewsFeed && <NewsFeed />}
        </div>
    );
}