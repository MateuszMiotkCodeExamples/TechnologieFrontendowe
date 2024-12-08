//app/layout.js
import SiteLayout from "@/app/components/SiteLayout";
import './globals.css'
import ErrorBoundary from "@/app/components/ErrorBoundary";
import ErrorScreen from "@/app/components/ErrorScreen";
export default function RootLayout({ children }) {
    const menu = () => <p>Menu</p>;
  return (
    <html lang="en">
      <body>
      <ErrorBoundary fallback={<ErrorScreen/>}>
          <SiteLayout menu={menu}>
              {children}
          </SiteLayout>
      </ErrorBoundary>
      </body>
    </html>
  );
}
