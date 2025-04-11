import React from 'react'
import { Skeleton } from './ui/skeleton'

export function CurrencyConverterSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-28" />
      </div>

      <div className="flex flex-col mt-2 gap-1">
        <Skeleton className="h-9 w-36" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  )
}
