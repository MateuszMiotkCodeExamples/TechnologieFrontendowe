// app/page.js

'use client';

import React, { useState, Suspense, lazy } from "react";
import Agreement from "./components/Agreement";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorScreen from "./components/ErrorScreen";
import "./globals.css";
import Gnar from "@/app/components/Gnar";
import Status from "@/app/components/Status";

// Dynamiczne importowanie komponentu Main
const Main = lazy(() => import("./components/Main"));

export default function HomePage() {
    const [agree, setAgree] = useState(false);

    if (!agree) {
        return <Agreement onAgree={() => setAgree(true)} />;
    }

    return (
        <ErrorBoundary fallback={<ErrorScreen />}>
            <Suspense fallback={<ClimbingBoxLoader />}>
                {/*<Gnar />*/}
                <Status />
            </Suspense>
        </ErrorBoundary>
    );
}
