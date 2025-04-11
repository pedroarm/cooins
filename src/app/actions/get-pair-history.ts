'use server'

export type Exchange = {
  code?: string
  codein?: string
  name?: string

  high: string
  low: string
  varBid: string
  pctChange: string
  bid: string
  ask: string
  timestamp: string

  create_date?: string
}

export async function getPairHistory(from: string, to: string) {
  const response = await fetch(`https://economia.awesomeapi.com.br/json/daily/${from}-${to}/30?token=${process.env.NEXT_PUBLIC_AWESOME_API_TOKEN}`, {
    next: { revalidate: 60 * 60 }, // 1 hour
  });
  if (!response.ok) throw new Error('Failed to fetch data');
  const data: Exchange[] = await response.json();

  const formattedData = data ? data.map((item) => ({
    date: new Date(Number(item.timestamp) * 1000).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    bid: Number(item.bid),
    high: Number(item.high),
    low: Number(item.low),
  })).reverse() : []

  return formattedData;
}