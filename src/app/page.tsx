"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { ArrowLeftRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { currencies } from "../utils/currencies"

type ExchangeRate = {
  code: string
  codein: string
  name: string
  high: string
  low: string
  varBid: string
  pctChange: string
  bid: string
  ask: string
  timestamp: string
  create_date: string
}

export default function CurrencyConverter() {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate | null>(null)
  const [amount, setAmount] = useState<string>("1")
  const [fromCurrency, setFromCurrency] = useState<string>("USD")
  const [toCurrency, setToCurrency] = useState<string>("BRL")
  const [error, setError] = useState<string | null>(null)

  const fetchRate = useCallback(async () => {
    try {
      setError(null)
      const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`)
      if (!response.ok) throw new Error("Failed to fetch exchange rate")
      const data = await response.json()
      setExchangeRates(data[`${fromCurrency}${toCurrency}`])
    } catch (error) {
      console.error("Error fetching exchange rate:", error)
      setError("Unable to fetch exchange rate. Please try again later.")
      setExchangeRates(null)
    }
  }, [fromCurrency, toCurrency])

  useEffect(() => {
    fetchRate()
  }, [fetchRate])

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setAmount(value)
  }, [])

  const convertedAmount = useMemo(() => {
    if (exchangeRates && amount) {
      const rate = parseFloat(exchangeRates.bid)
      return parseFloat(amount) * rate
    }
    return null
  }, [exchangeRates, amount])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-md mx-auto">
        {/* <h1 className="text-3xl font-light tracking-tight mb-8 text-center">CURRENCY</h1> */}

        <div className="flex flex-col gap-6">
          <AmountInput amount={amount} onAmountChange={handleAmountChange} />

          <div className="flex w-full items-end gap-4">
            <CurrencySelector
              label="From"
              value={fromCurrency}
              onChange={setFromCurrency}
              currencies={currencies}
            />
            <div className="flex py-2.5">
              <ArrowLeftRight className="text-muted-foreground size-4" />
            </div>
            <CurrencySelector
              label="To"
              value={toCurrency}
              onChange={setToCurrency}
              currencies={currencies}
            />
          </div>

          <ConvertedAmount
            convertedAmount={convertedAmount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            exchangeRates={exchangeRates}
            error={error}
          />
        </div>
      </div>

      {/* <div className="mt-8 w-full flex justify-center">
        <div className="ads-slot bg-gray-100 border border-gray-200 rounded-lg p-4 text-center">
          <span className="text-sm text-muted-foreground">Your Ad Here</span>
          <div className="mt-2">
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </div>
        </div>
      </div> */}
    </main>
  )
}

type CurrencySelectorProps = {
  label: string
  value: string
  onChange: (value: string) => void
  currencies: { code: string; name: string, flag: string }[]
}

function CurrencySelector({ label, value, onChange, currencies }: CurrencySelectorProps) {
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
              <img src={currency.flag} className="size-5 rounded-full object-cover" /> {currency.code}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

type AmountInputProps = {
  amount: string
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function AmountInput({ amount, onAmountChange }: AmountInputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="amount" className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
        Amount
      </label>
      <Input
        id="amount"
        type="text"
        value={amount}
        onChange={onAmountChange}
        aria-label="Enter amount to convert"
      />
    </div>
  )
}

type ConvertedAmountProps = {
  convertedAmount: number | null
  fromCurrency: string
  toCurrency: string
  exchangeRates: ExchangeRate | null
  error: string | null
}

function ConvertedAmount({ convertedAmount, fromCurrency, toCurrency, exchangeRates, error }: ConvertedAmountProps) {
  return (
    <div className="pt-4 border-t border-gray-100">
      <div className="flex justify-between items-center">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Converted Amount</span>
      </div>
      <div className="mt-2 text-3xl font-light">
        {convertedAmount !== null ? (
          <>
            {convertedAmount.toFixed(2)} <span className="text-muted-foreground">{toCurrency}</span>
          </>
        ) : (
          "—"
        )}
      </div>
      <div className="mt-1 text-xs text-muted-foreground font-mono">
        {exchangeRates ? `1 ${fromCurrency} = ${exchangeRates.ask} ${toCurrency}` : "—"}
      </div>
      {error && <div className="mt-2 text-xs text-red-500">{error}</div>}
    </div>
  )
}