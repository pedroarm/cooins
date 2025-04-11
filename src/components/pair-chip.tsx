'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { currencies } from '@/utils/currencies';
import { Button } from './ui/button'

export function PairChip({ pair }: { pair: { from: string; to: string; } }) {
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
        src={`https://flagcdn.com/${fromCurrency?.flag}.svg`}
        alt={`${fromCurrency?.name || 'Unknown'} flag`}
        width={16}
        height={16}
        className="rounded-full object-cover size-4"
      />
      <span className="text-sm">{pair.from.toUpperCase()}</span>
      <span className="text-xs text-muted-foreground font-mono uppercase">to</span>
      <Image
        src={`https://flagcdn.com/${toCurrency?.flag}.svg`}
        alt={`${toCurrency?.name || 'Unknown'} flag`}
        width={16}
        height={16}
        className="rounded-full object-cover size-4"
      />
      <span className="text-sm">{pair.to.toUpperCase()}</span>
    </Button>
  )
}
