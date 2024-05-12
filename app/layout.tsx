import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import TopNav from '@/components/nav/TopNav';
import Logo from '../public/new_farm_logo_color.svg';
import Image from 'next/image';
import { openSans } from '@/components/styles/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={openSans.className}>
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
              textAlign: 'center',
            }}>
            <Image height={75} priority src={Logo} alt="Hidden Acres Farm Logo" />
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
              Hidden Acres Farm
            </h1>
            {/* <TopNav /> */}
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
