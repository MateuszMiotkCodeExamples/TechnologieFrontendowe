import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            bio: formData.get('bio'),
            avatar: formData.get('avatar')
        };

        if (!data.username || !data.password || !data.bio) {
            return NextResponse.json(
                { message: 'Wszystkie pola są wymagane' },
                { status: 400 }
            );
        }

        let avatarUrl = null;
        if (data.avatar) {
            if (!data.avatar.type.startsWith('image/')) {
                return NextResponse.json(
                    { message: 'Przesłany plik musi być obrazem' },
                    { status: 400 }
                );
            }

            const fileName = `${data.username}-${Date.now()}.${data.avatar.type.split('/')[1]}`;
            const avatarsDir = path.join(process.cwd(), 'public', 'avatars');

            await mkdir(avatarsDir, { recursive: true });
            await writeFile(
                path.join(avatarsDir, fileName),
                Buffer.from(await data.avatar.arrayBuffer())
            );

            avatarUrl = `/avatars/${fileName}`;
        }

        return NextResponse.json(
            {
                message: 'Użytkownik został utworzony pomyślnie',
                user: { ...data, avatarUrl }
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Wystąpił błąd podczas przetwarzania żądania' },
            { status: 500 }
        );
    }
}