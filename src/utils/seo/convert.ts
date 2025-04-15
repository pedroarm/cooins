import { Metadata } from 'next'

import { currencies } from '@/utils/currencies'
import { parsePair } from '@/utils/parse-pair'

export async function generateConvertMetadata(pair: string): Promise<Metadata> {
  const { from, to } = parsePair(pair)

  const fromCurrency = currencies.find(c => c.code === from.toLowerCase())?.name ?? 'US Dollar'
  const toCurrency = currencies.find(c => c.code === to.toLowerCase())?.name ?? 'Euro'

  const title = `Convert ${fromCurrency} (${from.toUpperCase()}) to ${toCurrency} (${to.toUpperCase()}) | Cooins`
  const description = `Convert ${fromCurrency} (${from.toUpperCase()}) to ${toCurrency} (${to.toUpperCase()}) with live exchange rates.`

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
      ...(currencies.map(c => `${c.name} today`) ?? []),
      ...(currencies.map(c => `${c.name} now`) ?? []),
      ...(currencies.map(c => `${c.name} exchange`) ?? []),
    ],
    metadataBase: new URL('https://cooins.co'),
    alternates: {
      canonical: `/convert/${from.toLowerCase()}-to-${to.toLowerCase()}`,
      languages: {
        'pt-BR': `/pt-BR/convert/${from.toLowerCase()}-to-${to.toLowerCase()}`,
        'en-US': `/en-US/convert/${from.toLowerCase()}-to-${to.toLowerCase()}`,
      },
    },   
    openGraph: { title, description, url: `/convert/${from}-to-${to}`, type: 'website' },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.jpg'] },
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
  }
}

export function generateExchangeStructuredData(from: string, to: string, rate: number | null) {
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
  }
}
