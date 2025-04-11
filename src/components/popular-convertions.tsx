import { PairChip } from "./pair-chip";

export async function PopularConvertions() {
  const popularPairs = [
    { from: 'usd', to: 'brl' },
    { from: 'eur', to: 'usd' },
    { from: 'gbp', to: 'eur' },
    { from: 'jpy', to: 'usd' },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-4 text-center">Popular Currency Conversions</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {popularPairs.map((pair) => <PairChip key={`${pair.from}-${pair.to}`} pair={pair} />)}
      </div>
    </section>
  )
}
