import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4384979364408071" crossOrigin='anonymous' strategy="beforeInteractive" />
      <body className={`${geist.variable} ${geist_mono.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
