import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import './globals.css';
import { theme } from '@/theme';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Who Wants to Be a Millionaire',
  description: 'A quiz game based on the popular TV show',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
