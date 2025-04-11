
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type CurrencySelectorProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  currencies: { code: string; name: string; flag: string }[];
};

export function CurrencySelector({ label, value, onChange, currencies }: CurrencySelectorProps) {
  return (
    <div className="flex-1 flex flex-col w-full gap-2">
      <label className="text-xs uppercase tracking-wider text-muted-foreground font-mono">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select currency" />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((currency) => (
            <SelectItem key={currency.code} value={currency.code}>
              <Image
                src={currency.flag}
                width={20}
                height={20}
                className="rounded-full object-cover inline mr-2 size-5"
                alt={`${currency.code} flag`}
              />
              {currency.code.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}