// app/components/Main.js

'use client';

import ErrorBoundary from './ErrorBoundary';
import ErrorScreen from "@/app/components/ErrorScreen";
import Status from "@/app/components/Status";

export default function Main() {
    return (
            <ErrorBoundary fallback={<ErrorScreen />}>
                <Status/>
            </ErrorBoundary>
    );
}
