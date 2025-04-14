import Link from "next/link";

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted-foreground">
      <Link href="/" className="flex items-center mb-6 text-sm text-muted-foreground underline">
        Go back
      </Link>

      <h1 className="text-3xl font-semibold text-foreground mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy matters. At Cooins, we are committed to protecting your data and ensuring full transparency on how information is handled.
      </p>

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">What We Collect</h2>
      <p className="mb-4">
        We do not collect personally identifiable information. No account is required, and we avoid storing any sensitive user data.
      </p>

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Cookies</h2>
      <p className="mb-4">
        Cooins uses only essential cookies to ensure functionality. We do not use cookies for behavioral tracking or advertising without consent.
      </p>

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party tools like Google Analytics or Google AdSense, which may collect anonymized usage data. These services are governed by their own privacy policies.
      </p>

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Your Consent</h2>
      <p className="mb-4">
        By using Cooins, you agree to the terms outlined in this policy. You may opt out of non-essential cookies or data collection through your browser settings.
      </p>

      <p>
        For any questions or concerns, feel free to contact our team via Twitter or our website.
      </p>
    </main>
  )
}
