'use client';

import { useMemo } from 'react';
import { useQueryState, parseAsString } from 'nuqs';
import { useQuery } from '@tanstack/react-query';

import { Skeleton } from '@/components/ui/skeleton';

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
  initialFrom: string;
  initialTo: string;
  initialAmount: string;
};

export function Convertion({ initialFrom, initialTo, initialAmount }: ConvertionProps) {
  const [amount] = useQueryState('amount', parseAsString.withDefault(initialAmount));

  const { data, isLoading } = useQuery({
    queryKey: ['rate', `${initialFrom}-${initialTo}`],
    queryFn: async (): Promise<ExchangeRate> => {
      const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${initialFrom}-${initialTo}`);
      if (!response.ok) throw new Error('Something went wrong');
      const data = await response.json();
      return data[`${initialFrom}${initialTo}`] || null;
    },
    enabled: Boolean(initialFrom && initialTo),
    staleTime: 3600000,
  });

  const convertedAmount = useMemo(() => {
    if (data) {
      const rate = parseFloat(data?.bid);
      return parseFloat(amount || '1') * rate;
    }
    return null;
  }, [data, amount]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Converted Amount</span>
      </div>

      <div className="flex flex-col mt-2 gap-1">
        {isLoading ? (
          <Skeleton className="h-9 w-48" />
        ) : (
          <span className="text-3xl font-light">
            {convertedAmount?.toFixed(2)} <span className="text-muted-foreground">{initialTo}</span>
          </span>
        )}

        {isLoading ? (
          <Skeleton className="h-4 w-48" />
        ) : (
          <span className="text-xs text-muted-foreground font-mono">
            {data ? `1 ${initialFrom} = ${data.ask} ${initialTo}` : '—'}
          </span>
        )}
      </div>
    </div>
  );
}