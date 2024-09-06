import type { Metadata, Viewport } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FANMIX',
  description: 'Generated by create next app for FANMIX',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/assets/images/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/images/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/images/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const AppHead = () => {
  return (
    <head>
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#000000" />

      {/* apple-touch-icon 추가 */}
      <link rel="apple-touch-icon" href="/assets/images/icons/icon-180x180.png" sizes="180x180" />
      <link rel="apple-touch-icon" href="/assets/images/icons/icon-192x192.png" sizes="192x192" />
    </head>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppHead />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
