import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="mt-3 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        That link is not on the Grocto site. Try the homepage or our privacy
        policy.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild className="h-10 rounded-full px-5 font-semibold">
          <Link href="/">Home</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-10 rounded-full px-5 font-semibold"
        >
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Button>
      </div>
    </div>
  );
}
