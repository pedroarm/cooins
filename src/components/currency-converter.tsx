import { Suspense } from 'react';
import { getPairQuotation } from '@/app/actions/get-pair-quotation';
import { Convertion } from './convertion';

type CurrencyConverterProps = {
  from: string;
  to: string;
  initialAmount: string;
};

export async function CurrencyConverter({ from, to, initialAmount }: CurrencyConverterProps) {
  const exchangeRate = await getPairQuotation(from, to);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Converted Amount</span>
      </div>

      <Suspense fallback={<div>Loading Conversion...</div>}>
        <Convertion exchangeRate={exchangeRate} from={from} to={to} initialAmount={initialAmount} />
      </Suspense>
    </div>
  );
}