import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import { currencies } from '@/utils/currencies';
import CurrencyConverter from '@/components/currency-converter';
import PopularConvertions from '@/components/popular-convertions';
// import CurrencyHistory from '@/components/currency-history';

function parsePair(pair: string): { from: string; to: string } {
  const parts = pair.split('-to-');
  if (parts.length !== 2) {
    return { from: 'usd', to: 'brl' }; // Valor padrão se o parse falhar
  }
  return { from: parts[0], to: parts[1] };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pair: string }>;
}): Promise<Metadata> {
  const { pair } = await params;
  const { from, to } = parsePair(pair);

  const fromCurrency = currencies.find(c => c.code === from.toUpperCase())?.name ?? 'US Dollar';
  const toCurrency = currencies.find(c => c.code === to.toUpperCase())?.name ?? 'Euro';

  const title = `Convert ${fromCurrency} (${from.toUpperCase()}) to ${toCurrency} (${to.toUpperCase()}) | Cooins`;
  const description = `Convert ${fromCurrency} (${from.toUpperCase()}) to ${toCurrency} (${to.toUpperCase()}) with live exchange rates. Fast, accurate, and trusted currency converter by Cooins.`;

  return {
    title,
    description,
    keywords: [
      `${from.toUpperCase()} to ${to.toUpperCase()} converter`,
      `convert ${fromCurrency} to ${toCurrency}`,
      'currency converter 2025',
      'live exchange rates',
      'real-time currency conversion',
      `${fromCurrency} to ${toCurrency} exchange rate`,
    ],
    metadataBase: new URL('https://cooins.co'),
    alternates: {
      canonical: `/convert/${from.toLowerCase()}-to-${to.toLowerCase()}?amount=1`,
      languages: {
        'pt-BR': `/convert/${from.toLowerCase()}-to-${to.toLowerCase()}?amount=1`,
        'en-US': `/convert/${from.toLowerCase()}-to-${to.toLowerCase()}?amount=1`,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `/convert/${from.toLowerCase()}-to-${to.toLowerCase()}?amount=1`,
      title,
      description,
      siteName: 'Cooins',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `Convert ${fromCurrency} to ${toCurrency} with Cooins`,
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

// Função para gerar dados estruturados (Schema.org)
function generateStructuredData(from: string, to: string, rate: number | null) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ExchangeRateSpecification',
    currency: from.toUpperCase(),
    currentExchangeRate: {
      '@type': 'UnitPriceSpecification',
      price: rate ?? 0,
      priceCurrency: to.toUpperCase(),
    },
    provider: {
      '@type': 'Organization',
      name: 'Cooins',
      url: 'https://cooins.co',
    },
  };
}

export default async function ConvertPage({
  params,
  searchParams,
}: {
  params: Promise<{ pair: string }>;
  searchParams: Promise<{ amount?: string }>;
}) {
  const { pair } = await params;
  const resolvedSearchParams = await searchParams;
  const { from, to } = parsePair(pair);
  const amount = resolvedSearchParams.amount ?? '1';

  // Validação dos parâmetros
  const validFrom = currencies.some(c => c.code === from.toUpperCase());
  const validTo = currencies.some(c => c.code === to.toUpperCase());

  if (!validFrom || !validTo) {
    redirect('/convert/usd-to-brl');
  }

  const rate = 0.85; // Exemplo: 1 USD = 0.85 EUR

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData(from, to, rate)) }}
      />

      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background max-md:justify-start">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight text-center mb-2">
            Convert {currencies.find(c => c.code === from.toUpperCase())?.name ?? 'US Dollar'} to {currencies.find(c => c.code === to.toUpperCase())?.name ?? 'Euro'} with Cooins
          </h1>
          <p className="text-sm text-center text-muted-foreground mb-10">
            Real-time currency conversion at your fingertips. Simple. Fast. Reliable.
          </p>

          <PopularConvertions />

          <Suspense fallback={<div>Loading Converter...</div>}>
            <CurrencyConverter from={from.toUpperCase()} to={to.toUpperCase()} initialAmount={amount} />
          </Suspense>

          {/* <Suspense fallback={<div>Loading History...</div>}>
            <CurrencyHistory from={from.toUpperCase()} to={to.toUpperCase()} />
          </Suspense> */}
        </div>
      </main>
    </>
  );
}

export const revalidate = 3600; // Revalidação a cada hora