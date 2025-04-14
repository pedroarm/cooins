export function parsePair(pair: string): { from: string; to: string } {
  const parts = pair.split('-to-');
  if (parts.length !== 2) {
    return { from: 'usd', to: 'brl' };
  }
  return { from: parts[0], to: parts[1] };
}