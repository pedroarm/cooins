import Link from "next/link";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted-foreground">
      <Link href="/" className="flex items-center mb-6 text-sm text-muted-foreground underline">
        Go back
      </Link>

      <h1 className="text-3xl font-semibold text-foreground mb-6">About Cooins</h1>

      <p className="mb-4">
        Cooins is an independent currency conversion platform designed to make international money management fast, transparent, and effortless.
        Built with performance and simplicity in mind, our mission is to offer reliable exchange rate data for everyone — from casual travelers to global freelancers.
      </p>

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Why Cooins?</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>No sign-up, no clutter — just real-time conversions.</li>
        <li>Updated hourly with rates from trusted financial APIs.</li>
        <li>Optimized for mobile, desktop, and low-bandwidth environments.</li>
        <li>Minimalist UI inspired by the best of the modern web.</li>
      </ul>

      {/* <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Technology Stack</h2>
      <p className="mb-4">
        Cooins is built using <strong>Next.js 15</strong>, <strong>TypeScript</strong>, and a serverless infrastructure that ensures speed, security, and scalability.
      </p> */}

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Our Commitment</h2>
      <p>
        We believe in transparency, privacy, and empowering users. Cooins will always remain free, focused, and aligned with the open web ethos.
      </p>
    </main>
  )
}
