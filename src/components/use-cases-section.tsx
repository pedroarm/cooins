import { Globe, Banknote, Landmark, ChartCandlestick } from 'lucide-react'

export function UseCasesSection() {
  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold text-foreground mb-4 text-start">Common Use Cases</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-muted-foreground">
        <div className="flex items-start gap-3">
          <span className="text-foreground">
            <Globe className="size-4" />
          </span>
          <div className='flex flex-col gap-2'>
            <h3 className="font-medium text-foreground leading-4">Travel Planning</h3>
            <p>Convert currencies before trips to understand local costs.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-foreground">
            <Banknote className="size-4" />
          </span>
          <div className='flex flex-col gap-2'>
            <h3 className="font-medium text-foreground leading-4">Freelancer Payments</h3>
            <p>Get a quick idea of how much you&#39;re earning in your local currency.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-foreground">
            <Landmark className="size-4" />
          </span>
          <div className='flex flex-col gap-2'>
            <h3 className="font-medium text-foreground leading-4">Bank Transfers</h3>
            <p>Compare rates before sending or receiving money internationally.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-foreground">
            <ChartCandlestick className="size-4" />
          </span>
          <div className='flex flex-col gap-2'>
            <h3 className="font-medium text-foreground leading-4">Currency Learning</h3>
            <p>Explore how exchange rates work and change over time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
