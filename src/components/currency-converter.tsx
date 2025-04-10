import { Suspense } from "react";

import { ExchangeForm } from "./forms/exchange-form";
import { Separator } from "./ui/separator";
import { Convertion } from "./convertion";

export default function CurrencyConverter() {
  return (
    <div className="flex flex-col gap-6">
      <Suspense>
        <ExchangeForm />
      </Suspense>
      <Separator />

      <Suspense>
        <Convertion />
      </Suspense>
    </div>
  );
}