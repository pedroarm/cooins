
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-background">
      <h2 className="text-3xl font-bold text-foreground mb-4">404 - Page Not Found</h2>
      <p className="text-muted-foreground mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white shadow-md hover:bg-primary/90 transition"
      >
        Go Back
      </Link>
    </div>
  );
}