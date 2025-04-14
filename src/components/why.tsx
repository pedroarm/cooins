
export function Why({ from, to }: { from: string; to: string }) {
  return (
    <>
      <section className="mt-12 text-muted-foreground text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-foreground mb-2 text-start">Why Use Cooins?</h2>
        <p className="mb-4">
          Cooins is your go-to platform for real-time currency conversion. Whether you&#39;re a traveler, a digital nomad, or a small business owner,
          we help you convert <strong>{from.toUpperCase()}</strong> to <strong>{to.toUpperCase()}</strong> instantly using up-to-date market rates.
        </p>
        <p>
          Our rates are updated hourly, ensuring you get accurate information every time. Cooins is completely free to use and
          optimized for speed, mobile access, and privacy. No cookies, no distractions — just pure currency data.
        </p>
      </section>

      <section className="mt-12 text-muted-foreground text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-foreground mb-2 text-start">Currency Forecasts</h2>
        <p className="mb-4">
          While Cooins does not offer investment advice, we help users stay alert to fluctuations in international exchange rates.
          Consider checking economic news, interest rates, and geopolitical updates to better understand potential changes in the {from.toUpperCase()} to {to.toUpperCase()} exchange rate.
        </p>
      </section>
    </>
  )
}
