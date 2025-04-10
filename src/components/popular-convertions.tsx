
import { PairChip } from "./pair-chip";

async function fetchInitialRate(from: string, to: string) {
  const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${from}-${to}`, {
    next: { revalidate: 60 },
  });
  if (!response.ok) return null;
  const data = await response.json();
  return data[`${from}${to}`] || null;
}

export default async function PopularConvertions() {
  const popularPairs = [
    { from: 'USD', to: 'BRL' },
    { from: 'EUR', to: 'USD' },
    { from: 'GBP', to: 'EUR' },
    { from: 'JPY', to: 'USD' },
  ];
  const popularRates = await Promise.all(
    popularPairs.map(async (pair) => ({
      ...pair,
      rate: await fetchInitialRate(pair.from, pair.to),
    }))
  );

  return (
    <section className="mb-8">
      <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-4 text-center">Popular Currency Conversions</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {popularRates.map((pair) => <PairChip key={`${pair.from}-${pair.to}`} pair={pair} />)}
      </div>
    </section>
  )
}
