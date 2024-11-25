'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        bio: '',
        avatar: null,
        avatarPreview: null
    });
    const [status, setStatus] = useState({ message: '', user: null });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'avatar' && files[0]) {
            const reader = new FileReader();
            reader.onloadend = () => setFormData(prev => ({
                ...prev,
                avatar: files[0],
                avatarPreview: reader.result
            }));
            reader.readAsDataURL(files[0]);
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sendData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key !== 'avatarPreview' && value) sendData.append(key, value);
        });

        try {
            const response = await fetch('/api/create-user', {
                method: 'POST',
                body: sendData,
            });
            const result = await response.json();

            setStatus({ message: result.message, user: response.ok ? result.user : null });
            if (response.ok) {
                setFormData({
                    username: '',
                    password: '',
                    bio: '',
                    avatar: null,
                    avatarPreview: null
                });
            }
        } catch (error) {
            setStatus({
                message: 'Wystąpił błąd podczas tworzenia użytkownika',
                user: null
            });
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Tworzenie Użytkownika</h1>

            {status.message && (
                <p className={`mb-4 p-2 rounded ${
                    status.user ? 'bg-green-100' : 'bg-red-100'
                }`}>
                    {status.message}
                </p>
            )}

            {status.user && (
                <div className="mb-4 p-4 bg-gray-100 rounded">
                    <h2 className="font-bold mb-2">Utworzony użytkownik:</h2>
                    <div className="flex items-center space-x-4">
                        {status.user.avatarUrl && (
                            <Image
                                src={status.user.avatarUrl}
                                alt="Avatar"
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />
                        )}
                        <div>
                            <p><strong>Nazwa:</strong> {status.user.username}</p>
                            <p><strong>Bio:</strong> {status.user.bio}</p>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {['username', 'password', 'bio'].map(field => (
                    <div key={field}>
                        <label className="block mb-1">
                            {field.charAt(0).toUpperCase() + field.slice(1)}:
                            <input
                                type={field === 'password' ? 'password' : 'text'}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded"
                                {...(field === 'bio' && {as: 'textarea'})}
                            />
                        </label>
                    </div>
                ))}

                <div>
                    <label className="block mb-1">
                        Avatar:
                        <input
                            type="file"
                            name="avatar"
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            accept="image/*"
                        />
                    </label>
                    {formData.avatarPreview && (
                        <div className="mt-2">
                            <Image
                                src={formData.avatarPreview}
                                alt="Podgląd avatara"
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Utwórz Użytkownika
                </button>
            </form>
        </div>
    );
}