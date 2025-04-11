'use client';

import React, { useCallback } from 'react';
import { useQueryState, parseAsString } from 'nuqs';
import { useRouter } from 'next/navigation';
import { ArrowLeftRight } from 'lucide-react';

import { currencies } from '@/utils/currencies';
import { AmountInput } from '../amount-input';
import { CurrencySelector } from '../currency-selector';
import { Button } from '../ui/button';

type ExchangeFormProps = {
  initialFrom: string;
  initialTo: string;
  initialAmount: string;
};

export function ExchangeForm({ initialFrom, initialTo, initialAmount }: ExchangeFormProps) {
  const router = useRouter();

  // Usamos useQueryState apenas para amount
  const [amount, setAmount] = useQueryState('amount', parseAsString.withDefault(initialAmount));

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(value);
  }, [setAmount]);

  const handleSwapClick = useCallback(() => {
    router.push(`/convert/${initialTo.toLowerCase()}-to-${initialFrom.toLowerCase()}?amount=${amount || '1'}`);
  }, [initialFrom, initialTo, amount, router]);

  const handleCurrencyChange = useCallback((newFrom: string, newTo: string) => {
    router.push(`/convert/${newFrom.toLowerCase()}-to-${newTo.toLowerCase()}?amount=${amount || '1'}`);
  }, [amount, router]);

  return (
    <>
      <AmountInput amount={amount} onAmountChange={handleAmountChange} />
      <div className="flex w-full items-end gap-4 max-sm:gap-2">
        <CurrencySelector
          label="From"
          value={initialFrom}
          onChange={(value) => {
            handleCurrencyChange(value, initialTo);
          }}
          currencies={currencies}
        />
        <div className="flex py-1">
          <Button variant="ghost" size="icon" onClick={handleSwapClick} aria-label="Swap currencies">
            <ArrowLeftRight className="text-muted-foreground size-4" />
          </Button>
        </div>
        <CurrencySelector
          label="To"
          value={initialTo}
          onChange={(value) => {
            handleCurrencyChange(initialFrom, value);
          }}
          currencies={currencies}
        />
      </div>
    </>
  );
}