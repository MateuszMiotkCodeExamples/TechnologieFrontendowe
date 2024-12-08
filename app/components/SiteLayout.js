// app/components/SiteLayout.js

import ErrorBoundary from './ErrorBoundary';
import ErrorScreen from './ErrorScreen';
import BreakThings from "@/app/components/BreakThings";
// Importowanie BreakThings nie jest konieczne tutaj, chyba że chcemy go użyć

export default function SiteLayout({ children, menu = () => null }) {
    return (
        <div className="container">
            <div className="menu">
                <ErrorBoundary fallback={<ErrorScreen />}>
                    {menu()}
                    {/* Możemy tutaj użyć BreakThings do testowania */}
                    {/* <BreakThings />*/}
                </ErrorBoundary>
            </div>
            <div className="main">{children}</div>
        </div>
    );
}
