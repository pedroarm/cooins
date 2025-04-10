import { createSearchParamsCache, parseAsString } from 'nuqs/server'

export const searchParamsCache = createSearchParamsCache({
  from: parseAsString.withDefault('USD'),
  to: parseAsString.withDefault('BRL'),
  amount: parseAsString.withDefault('1'),
})