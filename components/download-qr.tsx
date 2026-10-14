import Link from "next/link";
import { cn } from "@/lib/utils";

export function DownloadQr({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex max-w-sm items-center gap-3 rounded-2xl bg-white p-3 text-navy",
        className,
      )}
    >
      <Link href="/get" className="shrink-0 rounded-lg">
        {/* SVG stays sharp at any size; the optimizer is for raster images. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/qr/grocto.svg"
          alt="QR code to download Grocto. iPhone opens the App Store and Android opens Google Play."
          width={132}
          height={132}
          className="size-[132px]"
        />
      </Link>
      <div className="min-w-0">
        <p className="text-sm font-semibold">Scan to download</p>
        <p className="mt-1 text-xs leading-relaxed text-navy/70">
          Available on the App Store and Google Play.
        </p>
      </div>
    </div>
  );
}
