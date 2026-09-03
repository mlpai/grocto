import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero, Section } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { apps } from "@/lib/site";

type AppSlug = (typeof apps)[number]["slug"];

const extras: Record<
  AppSlug,
  { comingSoon: string; extra: string[] }
> = {
  grocto: {
    comingSoon: "Grocto will be listed on Google Play and the App Store from this organisation account.",
    extra: [
      "Mobile-number login with OTP",
      "Multiple saved addresses and GPS detection",
      "Veg / non-veg filters and open/closed store status",
      "Cancellation before restaurant acceptance",
      "Ratings, reviews, and past invoices",
    ],
  },
  partner: {
    comingSoon: "Grocto Partner is published for Android delivery partners onboarded by Pick & Drop Services.",
    extra: [
      "Only onboarded riders can sign in",
      "Admin can activate or block a partner account",
      "Live location is used while a delivery is in progress",
      "COD amounts are shown before pickup",
      "Daily earnings and completed-order summaries",
    ],
  },
};

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((item) => item.slug === slug);
  if (!app) return {};
  return {
    title: app.slug === "grocto" ? "Grocto Customer App" : app.name,
    description: app.summary,
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = apps.find((item) => item.slug === slug);
  if (!app) notFound();
  const extra = extras[app.slug];

  return (
    <>
      <PageHero
        eyebrow={app.platforms}
        title={app.name}
        description={app.summary}
      />
      <Section>
        <Button asChild variant="ghost" className="mb-8 h-9 px-2">
          <Link href="/apps">
            <ArrowLeft />
            All apps
          </Link>
        </Button>
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="text-2xl font-bold">What this app does</h2>
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-navy/80">
              {[...app.features, ...extra.extra].map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-2xl bg-cream px-5 py-4 text-sm text-muted-foreground">
              {extra.comingSoon} Store listing links will be added here as soon
              as the apps are live.
            </p>
          </div>
          <aside className="h-fit rounded-3xl border border-border bg-white p-6">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Publisher
            </p>
            <p className="mt-1 font-semibold">Pick & Drop Services</p>
            <p className="mt-5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Legal pages
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-primary hover:underline" href={app.privacyHref}>
                Privacy Policy
              </Link>
              <Link className="text-primary hover:underline" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-primary hover:underline" href="/delete-account">
                Delete account
              </Link>
              <Link className="text-primary hover:underline" href="/support">
                Support
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
