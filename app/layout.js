//./app/layout.js
// import './globals.css'
import { ReduxProvider } from './providers/ReduxProvider'

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
        <body>
        <ReduxProvider>
            {children}
        </ReduxProvider>
        </body>
        </html>
    )
}