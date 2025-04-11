'use client'

import { CartesianGrid, YAxis, XAxis, Area, AreaChart } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '../ui/chart'

const chartConfig = {
  bid: {
    label: "Bid",
    color: "var(--primary)",
  },
  high: {
    label: "High",
    color: "var(--chart-5)",
  },
  low: {
    label: "Low",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

type PairHistoryData = {
  date: string
  bid: number
  high: number
  low: number
}

export function PairHistoryChart({
  data
}: {
  data: PairHistoryData[]
}) {
  return (
    <ChartContainer config={chartConfig} className="aspect-auto h-[256px] w-full">
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{
          left: 0,
          right: 0,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <YAxis
          dataKey="bid"
          domain={['auto', 'auto']}
          tickMargin={8}
          hide
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={0}
          minTickGap={32}
          tickFormatter={(value) => value.slice(0, 3)}
          hide
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator='line' />}
        />
        <defs>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-bid)"
              stopOpacity={0.7}
            />
            <stop
              offset="5%"
              stopColor="var(--color-bid)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="bid"
          type="monotone"
          fill="url(#fill)"
          fillOpacity={0.4}
          stroke="var(--color-bid)"
          strokeWidth={1.5}
          stackId="a"
        />
        <Area
          dataKey="high"
          type="monotone"
          fillOpacity={0}
          stroke="var(--color-high)"
          strokeWidth={1.5}
          stackId="a"
        />
        <Area
          dataKey="low"
          type="monotone"
          fillOpacity={0}
          stroke="var(--color-low)"
          strokeWidth={1.5}
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
