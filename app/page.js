'use client';

import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('bio', bio);
    if (avatar) {
      formData.append('avatar', avatar);
    }

    try {
      const response = await fetch('/api/create-user', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Sukces:', result);
    } catch (error) {
      console.error('Błąd:', error);
    }
  };

  return (
      <div style={{ padding: '20px' }}>
        <h1>Tworzenie Użytkownika</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nazwa użytkownika:</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
          </div>
          <div>
            <label>Hasło:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
          </div>
          <div>
            <label>Bio:</label>
            <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
            ></textarea>
          </div>
          <div>
            <label>Awatar:</label>
            <input
                type="file"
                onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
          <button type="submit">Utwórz Użytkownika</button>
        </form>
      </div>
  );
}
