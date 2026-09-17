import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero, Section } from "@/components/page-shell";
import { StoreButtons } from "@/components/store-buttons";
import { Button } from "@/components/ui/button";
import { apps, siteConfig } from "@/lib/site";

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
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src={app.icon}
                alt={`${app.name} app icon`}
                width={512}
                height={512}
                className="size-20 rounded-3xl border border-border bg-white object-cover"
              />
              <div>
                <p className="text-sm text-muted-foreground">{app.about}</p>
                <StoreButtons app={app} className="mt-4" />
              </div>
            </div>

            <h2 className="mt-10 text-2xl font-bold">Screenshots</h2>
            <div className="-mx-4 mt-5 flex gap-4 overflow-x-auto px-4 pb-2">
              {app.screenshots.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${app.name} screenshot ${index + 1}`}
                  width={460}
                  height={996}
                  className="h-80 w-auto shrink-0 rounded-2xl border border-border bg-navy object-cover"
                />
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-bold">What this app does</h2>
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-navy/80">
              {app.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-3xl border border-border bg-white p-6">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Publisher
            </p>
            <p className="mt-1 font-semibold">Pick & Drop Services</p>
            <p className="mt-5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Download
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a
                className="text-primary hover:underline"
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </a>
              <a
                className="text-primary hover:underline"
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            </div>
            <p className="mt-5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Legal pages
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-primary hover:underline" href={app.privacyHref}>
                Privacy Policy
              </Link>
              {app.slug === "partner" ? (
                <a
                  className="text-primary hover:underline"
                  href={siteConfig.panels.partnerTerms}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partner Panel terms
                </a>
              ) : (
                <Link className="text-primary hover:underline" href="/terms">
                  Terms of Service
                </Link>
              )}
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
