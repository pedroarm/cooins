import { Metadata } from 'next';
import type { SearchParams } from 'nuqs';

import { currencies } from '@/utils/currencies';
import CurrencyConverter from '@/components/currency-converter';
import PopularConvertions from '@/components/popular-convertions';

import { searchParamsCache } from './search-params';
import { Ads } from '@/components/ads';

export async function generateMetadata({ searchParams }: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const { from = 'USD', to = 'EUR' } = await searchParamsCache.parse(searchParams);

  const fromCurrency = currencies.find(c => c.code === from)?.name ?? 'US Dollar';
  const toCurrency = currencies.find(c => c.code === to)?.name ?? 'Euro';

  const title = `Convert ${fromCurrency} to ${toCurrency} | Cooins`;
  const description = `Instantly convert ${fromCurrency} to ${toCurrency} with live exchange rates. Powered by Cooins - fast, accurate, and trusted.`;

  return {
    title,
    description,
    keywords: [`${from} to ${to}`, 'currency converter', 'exchange rates', 'real-time conversion'],
    metadataBase: new URL('https://cooins.co'),
    alternates: {
      canonical: `/convert?from=${from}&to=${to}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `?from=${from}&to=${to}`,
      title,
      description,
      siteName: 'Cooins',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: title,
        type: 'image/jpeg',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@cooins',
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background max-md:justify-start">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight text-center mb-2">cooins.co</h1>
        <p className="text-sm text-center text-muted-foreground mb-10">
          Real-time currency conversion at your fingertips. Simple. Fast. Reliable.
        </p>

        <PopularConvertions />

        <CurrencyConverter />

        <div className='my-10'>
          <Ads slot="8769553797" />
        </div>

        {/* <CurrencyHistory /> */}
      </div>
    </main>
  );
}

export const revalidate = 3600;