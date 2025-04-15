import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { generateConvertMetadata, generateExchangeStructuredData } from '@/utils/seo/convert';
import { currencies } from '@/utils/currencies';
import { parsePair } from '@/utils/parse-pair';

import { Header } from '@/components/header';
import { PopularConvertions } from '@/components/popular-convertions';
import { ExchangeForm } from '@/components/forms/exchange-form';
import { Separator } from '@/components/ui/separator';
import { CurrencyConverter } from '@/components/currency-converter';
import { CurrencyConverterSkeleton } from '@/components/currency-converter-skeleton';
import { CurrencyHistory } from '@/components/currency-history';
import { CurrencyHistorySkeleton } from '@/components/currency-history-skeleton';
import { Why } from '@/components/why';
import { Faq } from '@/components/faq';
import { UseCasesSection } from '@/components/use-cases-section';
import { Footer } from '@/components/footer';


export async function generateMetadata({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params
  return generateConvertMetadata(pair)
}

export default async function Page({
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

  const validFrom = currencies.some(c => c.code === from.toLowerCase());
  const validTo = currencies.some(c => c.code === to.toLowerCase());

  if (!validFrom || !validTo) redirect('/convert/usd-to-brl');

  const rate = 0.85;

  return (
    <div className='relative flex min-h-svh flex-col bg-background'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateExchangeStructuredData(from, to, rate)) }}
      />

      <Header />

      <main className="flex flex-col justify-center px-4 py-14">
        <div className="w-full max-w-xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight text-center mb-2">
            Convert {currencies.find(c => c.code === from)?.name ?? 'US Dollar'} to {currencies.find(c => c.code === to)?.name ?? 'Euro'} with Cooins
          </h1>
          <p className="text-sm text-center text-muted-foreground mb-10">
            Real-time currency conversion at your fingertips. Simple. Fast. Reliable.
          </p>

          <PopularConvertions />

          <div className="flex flex-col gap-6">
            <Suspense fallback={<div>Loading Form...</div>}>
              <ExchangeForm from={from} to={to} initialAmount={amount} />
            </Suspense>
            <Separator />
            <Suspense fallback={<CurrencyConverterSkeleton />}>
              <CurrencyConverter from={from} to={to} initialAmount={amount} />
            </Suspense>
          </div>

          <Suspense fallback={<CurrencyHistorySkeleton />}>
            <CurrencyHistory from={from} to={to} />
          </Suspense>

          <Why from={from} to={to} />
          <Faq />
          <UseCasesSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const revalidate = 3600;