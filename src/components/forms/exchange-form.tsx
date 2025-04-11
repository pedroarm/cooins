'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryState, parseAsString } from 'nuqs';
import { ArrowLeftRight } from 'lucide-react';

import { currencies } from '@/utils/currencies';
import { AmountInput } from '../amount-input';
import { CurrencySelector } from '../currency-selector';
import { Button } from '../ui/button';

type ExchangeFormProps = {
  from: string;
  to: string;
  initialAmount: string;
};

export function ExchangeForm({ from, to, initialAmount }: ExchangeFormProps) {
  const router = useRouter();

  const [amount, setAmount] = useQueryState('amount', parseAsString.withDefault(initialAmount));

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(value);
  }, [setAmount]);

  const handleSwapClick = useCallback(() => {
    router.push(`/convert/${to.toLowerCase()}-to-${from.toLowerCase()}?amount=${amount || '1'}`);
  }, [from, to, amount, router]);

  const handleCurrencyChange = useCallback((newFrom: string, newTo: string) => {
    if (newFrom === newTo) {
      router.push(`/convert/${to.toLowerCase()}-to-${from.toLowerCase()}?amount=${amount || '1'}`);
      return;
    }

    router.push(`/convert/${newFrom.toLowerCase()}-to-${newTo.toLowerCase()}?amount=${amount || '1'}`);
  }, [amount, from, router, to]);

  return (
    <>
      <AmountInput amount={amount} onAmountChange={handleAmountChange} />
      <div className="flex w-full items-end gap-4 max-sm:gap-2">
        <CurrencySelector
          label="From"
          value={from}
          onChange={(value) => {
            handleCurrencyChange(value, to);
          }}
          currencies={currencies}
        />
        <div className="flex py-0.75">
          <Button variant="ghost" size="icon" onClick={handleSwapClick} aria-label="Swap currencies">
            <ArrowLeftRight className="text-muted-foreground size-4" />
          </Button>
        </div>
        <CurrencySelector
          label="To"
          value={to}
          onChange={(value) => {
            handleCurrencyChange(from, value);
          }}
          currencies={currencies}
        />
      </div>
    </>
  );
}