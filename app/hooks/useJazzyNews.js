// hooks/useJazzyNews.js
"use client";

import {useState, useEffect, useMemo, useCallback} from "react";
import newsFeed from "../services/newsFeed";
import {goodbyeChime, welcomeChime, welcomeChime as newPostChime} from "../assets/chime";

const useJazzyNews = () => {
    const [_posts, setPosts] = useState([]);
    const addPost = useCallback((post) => {
        setPosts((allPosts) => [post, ...allPosts]);
    }, []);

    const posts = useMemo(() => _posts, [_posts]);

    useEffect(() => {
        newPostChime.play();
    }, [posts]);

    useEffect(() => {
        newsFeed.subscribe(addPost);
        return () => newsFeed.unsubscribe(addPost);
    }, [addPost]);

    useEffect(() => {
        welcomeChime.play();
        return () => goodbyeChime.play();
    }, []);

    return posts;
};

export default useJazzyNews;