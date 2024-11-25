'use client';

import { useState } from 'react';

export default function Home() {
    const [login, setLogin] = useState('');
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setUserData(null);

        try {
            const response = await fetch(`https://api.github.com/users/${login}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setUserData(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="GitHub token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    required
                />
                <button type="submit">Pobierz dane</button>
            </form>

            {error && <p>Błąd: {error}</p>}

            {userData && (
                <div>
                    <h2>Dane użytkownika:</h2>
                    <p>Login: {userData.login}</p>
                    <p>Nazwa: {userData.name}</p>
                    <p>Bio: {userData.bio}</p>
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                    <p>Public repos: {userData.public_repos}</p>
                </div>
            )}
        </div>
    );
}