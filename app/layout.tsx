import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import TopNav from '@/components/nav/TopNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <nav
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '1rem',
                backgroundColor: 'var(--background-start)',
                color: 'var(--foreground)',
                borderBottom: '1px solid var(--background-end)',
              }}>
              <h1>Hidden Acres Farm</h1>
              <TopNav />
            </nav>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
