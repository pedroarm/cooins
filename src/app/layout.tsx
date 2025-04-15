import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import './globals.css';
import { Providers } from './providers';

const geist = Geist({ subsets: ['latin'], variable: '--geist-font' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--geist-mono-font' });

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
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html >
  );
}

