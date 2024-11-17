// app/layout.js
"use client";

import React from "react";
import ColorProvider from "./hooks/color-hooks";

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
        <body>
        <ColorProvider>
            {children}
        </ColorProvider>
        </body>
        </html>
    );
}
