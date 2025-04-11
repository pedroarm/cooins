import { getPairHistory } from '@/app/actions/get-pair-history'
import { PairHistoryChart } from './charts/pair-history-chart'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export async function CurrencyHistory({
  from,
  to,
}: {
  from: string
  to: string
}) {
  const history = await getPairHistory(from, to)

  return (
    <div className='w-full my-10'>
      <Card className='pb-0'>
        <CardHeader>
          <CardTitle>{from.toLocaleUpperCase()} to {to.toLocaleUpperCase()} Exchange Rate Trend</CardTitle>
          <CardDescription>
            Tracking daily {from.toLocaleUpperCase()}/{to.toLocaleUpperCase()} conversion for the past 30 days
          </CardDescription>
        </CardHeader>
        <CardContent className='p-0'>
          <PairHistoryChart data={history} />
        </CardContent>
      </Card>
    </div>
  )
}
