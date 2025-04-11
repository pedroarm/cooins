'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { currencies } from '@/utils/currencies';
import { Button } from './ui/button'

export function PairChip({ pair }: { pair: { from: string; to: string; rate?: { bid: string } } }) {
  const router = useRouter();

  const fromCurrency = currencies.find((c) => c.code === pair.from);
  const toCurrency = currencies.find((c) => c.code === pair.to);

  const handlePairClick = () => {
    router.push(`/convert/${pair.from.toLocaleLowerCase()}-to-${pair.to.toLocaleLowerCase()}`);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2 rounded-full border-input hover:bg-muted/50 transition-colors cursor-pointer px-4.5"
      onClick={handlePairClick}
      aria-label={`Convert ${pair.from} to ${pair.to}`}
      aria-describedby="pair-chip"
    >
      <Image
        src={fromCurrency?.flag || '/placeholder.png'}
        alt={`${fromCurrency?.name || 'Unknown'} flag`}
        width={16}
        height={16}
        className="rounded-full object-cover size-4"
      />
      <span className="text-sm">{pair.from}</span>
      <span className="text-xs text-muted-foreground font-mono uppercase">to</span>
      <Image
        src={toCurrency?.flag || '/placeholder.png'}
        alt={`${toCurrency?.name || 'Unknown'} flag`}
        width={16}
        height={16}
        className="rounded-full object-cover size-4"
      />
      <span className="text-sm">{pair.to}</span>
      {/* {pair.rate && (
        <span className="text-xs text-muted-foreground ml-1">
          {parseFloat(pair.rate.bid).toFixed(2)}
        </span>
      )} */}
    </Button>
  )
}
