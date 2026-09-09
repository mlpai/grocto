import Image from "next/image";
import { cn } from "@/lib/utils";
import type { AppListing } from "@/lib/site";

export function StoreButtons({
  app,
  className,
}: {
  app: Pick<AppListing, "name" | "playStoreUrl" | "appStoreUrl">;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <a
        href={app.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex transition-opacity hover:opacity-85"
      >
        <Image
          src="/store/google-play.png"
          alt={`Get ${app.name} on Google Play`}
          width={564}
          height={168}
          className="h-11 w-auto"
        />
      </a>
      <a
        href={app.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex transition-opacity hover:opacity-85"
      >
        {/* Official Apple badge is SVG; img keeps vector sharpness. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/store/app-store.svg"
          alt={`Download ${app.name} on the App Store`}
          className="h-11 w-auto"
        />
      </a>
    </div>
  );
}

export function FooterStoreLinks({
  app,
}: {
  app: Pick<AppListing, "name" | "playStoreUrl" | "appStoreUrl">;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{app.name}</p>
      <div className="mt-2 flex flex-col gap-1.5 text-sm text-white/70">
        <a
          href={app.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Google Play
        </a>
        <a
          href={app.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          App Store
        </a>
      </div>
    </div>
  );
}
