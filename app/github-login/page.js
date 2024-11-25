'use client';

import React, { useState, useEffect } from "react";

const loadJSON = key =>
    key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }) {
    const [data, setData] = useState(null);

    // Efekt zapisujący do localStorage
    useEffect(() => {
        if (!data) return;
        if (data.login === login) {
            const { name, avatar_url, location } = data;
            saveJSON(`user:${login}`, {
                name,
                login,
                avatar_url,
                location
            });
        }
    }, [data]);

    // Efekt pobierający dane
    useEffect(() => {
        if (!login) return;

        // Spróbuj najpierw załadować z localStorage
        const localData = loadJSON(`user:${login}`);
        if (localData && localData.login === login) {
            setData(localData);
            return;
        }

        // Jeśli nie ma w localStorage, pobierz z API
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [login]);

    if (data)
        return <pre>{JSON.stringify(data, null, 2)}</pre>;

    return null;
}

export default function App() {
    return <GitHubUser login="mmiotk" />;
}