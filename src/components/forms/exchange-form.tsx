'use client'

import React, { useCallback } from 'react'
import { useQueryState, parseAsString } from 'nuqs';
import { ArrowLeftRight } from 'lucide-react';

import { currencies } from '@/utils/currencies';

import { AmountInput } from '../amount-input';
import { CurrencySelector } from '../currency-selector';
import { Button } from '../ui/button';

export function ExchangeForm() {
  const [from, setFrom] = useQueryState('from', parseAsString)
  const [to, setTo] = useQueryState('to', parseAsString)
  const [amount, setAmount] = useQueryState('amount', parseAsString)

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(value);
  }, [setAmount]);

  const handleSwapClick = useCallback(() => {
    if (!from || !to) return;
    setFrom(to);
    setTo(from);
  }, [from, to, setFrom, setTo]);

  return (
    <>
      <AmountInput amount={amount} onAmountChange={handleAmountChange} />
      <div className="flex w-full items-end gap-4 max-sm:gap-2">
        <CurrencySelector
          label="From"
          value={from || ""}
          onChange={setFrom}
          currencies={currencies}
        />
        <div className="flex py-1">
          <Button variant="ghost" size="icon" onClick={handleSwapClick}>
            <ArrowLeftRight className="text-muted-foreground size-4" />
          </Button>
        </div>
        <CurrencySelector
          label="To"
          value={to || ""}
          onChange={setTo}
          currencies={currencies}
        />
      </div>
    </>
  )
}
