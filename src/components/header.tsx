import Image from "next/image";

export function Header() {
  return (
    <header className='border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-16 items-center justify-between max-w-xl mx-auto px-4 sm:px-0'>
        <div className='flex w-full items-center gap-4'>
          <Image
            src="/cooins.svg"
            alt="Cooins logo"
            width={28}
            height={28}
          />

          <h1 className='text-lg font-bold'>cooins</h1>
        </div>
      </div>
    </header>
  )
}
