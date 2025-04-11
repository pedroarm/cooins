'use server'
 
export async function getPairQuotation(from: string, to: string) {
  const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${from}-${to}?token=${process.env.NEXT_PUBLIC_AWESOME_API_TOKEN}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data[`${from.toUpperCase()}${to.toUpperCase()}`];
}