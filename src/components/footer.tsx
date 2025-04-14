import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className='border-grid w-full border-t bg-background mt-12'>
      <div className='flex py-3 px-4 sm:px-0 flex-col-reverse sm:flex-row items-start sm:items-center sm:justify-between max-w-xl mx-auto gap-4'>
        <div className='flex w-full items-center gap-4'>
          <span className='w-full font-mono text-xs font-medium uppercase text-white'>&copy; {new Date().getFullYear()} Cooins – All rights reserved</span>
        </div>

        <ul className='flex w-full items-start flex-col justify-start gap-1 sm:gap-4 sm:items-center sm:justify-end sm:flex-row'>
          <li className='flex'>
            <Link href="/about" className='text-foreground text-xs inline-flex items-center whitespace-nowrap font-mono font-medium uppercase leading-none gap-2 tracking-normal'>
              <span>About</span>
              <SquareArrowOutUpRight className='size-3' />
            </Link>
          </li>
          <li className='flex'>
            <Link href="/policies/privacy" className='text-foreground text-xs inline-flex items-center whitespace-nowrap font-mono font-medium uppercase leading-none gap-2 tracking-normal'>
              <span>Privacy</span>
              <SquareArrowOutUpRight className='size-3' />
            </Link>
          </li>
          <li className='flex'>
            <Link href="/policies/terms" className='text-foreground text-xs inline-flex items-center whitespace-nowrap font-mono font-medium uppercase leading-none gap-2 tracking-normal'>
              <span>Terms</span>
              <SquareArrowOutUpRight className='size-3' />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
