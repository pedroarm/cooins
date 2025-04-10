import { Input } from "./ui/input";

type AmountInputProps = {
  amount: string | null;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AmountInput({ amount, onAmountChange }: AmountInputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="amount" className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
        Amount
      </label>
      <Input
        id="amount"
        type="text"
        value={amount || ""}
        onChange={onAmountChange}
        aria-label="Enter amount to convert"
      />
    </div>
  );
}