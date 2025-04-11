import { Suspense } from 'react';
import { ExchangeForm } from './forms/exchange-form';
import { Separator } from './ui/separator';
import { Convertion } from './convertion';

type CurrencyConverterProps = {
  from: string;
  to: string;
  initialAmount: string;
};

export default function CurrencyConverter({ from, to, initialAmount }: CurrencyConverterProps) {
  return (
    <div className="flex flex-col gap-6">
      <Suspense fallback={<div>Loading Form...</div>}>
        <ExchangeForm initialFrom={from} initialTo={to} initialAmount={initialAmount} />
      </Suspense>
      <Separator />
      <Suspense fallback={<div>Loading Conversion...</div>}>
        <Convertion initialFrom={from} initialTo={to} initialAmount={initialAmount} />
      </Suspense>
    </div>
  );
}