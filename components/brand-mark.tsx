import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function BrandMark({
  className = "h-11 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/grocto-logo.png"
        alt={`${siteConfig.brand} by ${siteConfig.legalName}`}
        width={740}
        height={558}
        className={className}
        priority={priority}
      />
    </Link>
  );
}
