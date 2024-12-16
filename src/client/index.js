import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../components/App';

// Hydratacja aplikacji - podłączenie funkcjonalności interaktywnych
// do statycznego HTML otrzymanego z serwera
hydrateRoot(
    document.getElementById('root'),
    <App />
);