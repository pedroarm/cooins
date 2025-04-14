
import Link from "next/link";


export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted-foreground">
      <Link href="/" className="flex items-center mb-6 text-sm text-muted-foreground underline">
        Go back
      </Link>

      <h1 className="text-3xl font-semibold text-foreground mb-6">Terms of Use</h1>

      <p className="mb-4">
        By using Cooins, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Service Description</h2>
      <p className="mb-4">
        Cooins offers live currency conversion services for informational purposes only. We strive to provide accurate and updated data, but we do not guarantee its correctness or completeness.
      </p>

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Disclaimer</h2>
      <p className="mb-4">
        We are not responsible for financial losses, decisions, or transactions made based on information provided by Cooins. Always consult official financial institutions before making currency-related decisions.
      </p>

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">User Responsibility</h2>
      <p className="mb-4">
        Users agree to use the platform legally and respectfully. Any abuse or misuse may result in restricted access or legal action.
      </p>

      <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Modifications</h2>
      <p className="mb-4">
        These terms may be updated at any time without prior notice. Continued use of the platform signifies your acceptance of the latest version.
      </p>

      <p>
        For legal inquiries or questions about these terms, contact us through our official channels.
      </p>
    </main>
  )
}
