import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DeviceStoreRedirect } from "@/components/device-store-redirect";
import { DownloadQr } from "@/components/download-qr";
import { PageHero, Section } from "@/components/page-shell";
import { StoreButtons } from "@/components/store-buttons";
import { apps } from "@/lib/site";
import { preferredStore } from "@/lib/store-link";

const app = apps[0];

export const metadata: Metadata = {
  title: "Download Grocto",
  description:
    "Download Grocto to order food, fruits, and everyday essentials from nearby restaurants and stores in Bathinda.",
};

export default async function GetAppPage() {
  const headerList = await headers();
  const store = preferredStore(headerList.get("user-agent") ?? "", {
    platform: headerList.get("sec-ch-ua-platform"),
    mobile: headerList.get("sec-ch-ua-mobile"),
  });

  if (store === "ios") redirect(app.appStoreUrl);
  if (store === "android") redirect(app.playStoreUrl);

  return (
    <>
      <DeviceStoreRedirect
        playStoreUrl={app.playStoreUrl}
        appStoreUrl={app.appStoreUrl}
      />
      <PageHero
        eyebrow="Download"
        title="Get the Grocto app"
        description="Order fresh food, fruits, and everyday essentials from nearby restaurants and stores in Bathinda."
      />
      <Section>
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <DownloadQr className="border border-border" />
          <div>
            <h2 className="text-2xl font-bold">{app.name}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {app.summary}
            </p>
            <StoreButtons app={app} className="mt-5" />
            <p className="mt-4 text-sm text-muted-foreground">
              Riders can download{" "}
              <Link href="/apps/partner" className="font-semibold text-primary">
                Grocto Partner
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
