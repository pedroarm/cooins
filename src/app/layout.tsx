import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import { Providers } from './providers';

const geist = Geist({ subsets: ['latin'], variable: '--geist-font' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--geist-mono-font' });

export const metadata: Metadata = {
  title: {
    default: 'Cooins - Currency Converter',
    template: '%s | Cooins',
  },
  description: 'Convert currencies easily with real-time exchange rates. Fast, simple, and reliable currency converter tool.',
  keywords: ['currency converter', 'exchange rates', 'convert USD to BRL', 'real-time currency conversion', 'cooins'],
  alternates: {
    canonical: 'https://cooins.co',
  },
  openGraph: {
    title: 'Cooins - Currency Converter',
    description: 'Convert currencies with real-time rates using Cooins.',
    url: 'https://cooins.co',
    siteName: 'Cooins',
    images: [
      {
        url: 'https://cooins.co/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cooins Currency Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooins - Currency Converter',
    description: 'Fast and reliable currency conversion with real-time rates.',
    images: ['https://cooins.co/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Cooins',
    description: 'A simple and fast currency converter with real-time exchange rates.',
    url: 'https://cooins.co',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
          crossOrigin="anonymous"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html >
  );
}

