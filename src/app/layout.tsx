import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--geist-font' })
const geist_mono = Geist_Mono({ subsets: ['latin'], variable: '--geist-mono-font' })

export const metadata: Metadata = {
  title: 'cooins',
  description: 'Convert currencies with ease',
  keywords: [
    'currency converter',
    'currency exchange',
    'exchange rates',
    'money transfer',
    'financial tools',
    'international payments',
    'currency calculator',
    'foreign exchange',
    'FX rates',
    'real-time currency rates',
    'currency conversion',
    'multi-currency support',
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geist_mono.variable} font-sans`}>{children}</body>
    </html>
  )
}
