'use client';

import { useMemo } from 'react';
import { useQueryState, parseAsString } from 'nuqs';

type ExchangeRate = {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
};

type ConvertionProps = {
  exchangeRate: ExchangeRate;
  from: string;
  to: string;
  initialAmount: string;
};

export function Convertion({ exchangeRate, from, to, initialAmount }: ConvertionProps) {
  const [amount] = useQueryState('amount', parseAsString.withDefault(initialAmount));

  const convertedAmount = useMemo(() => {
    if (exchangeRate) {
      const rate = parseFloat(exchangeRate?.bid);
      return parseFloat(amount || '1') * rate;
    }
    return null;
  }, [exchangeRate, amount]);

  return (
    <div className="flex flex-col mt-2 gap-1">
      <span className="text-3xl font-light">
        {convertedAmount?.toFixed(2)} <span className="text-muted-foreground">{to.toUpperCase()}</span>
      </span>

      <span className="text-xs text-muted-foreground font-mono">
        {exchangeRate ? `1 ${from.toUpperCase()} = ${exchangeRate.ask} ${to.toUpperCase()}` : '—'}
      </span>
    </div>
  );
}