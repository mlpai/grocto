import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bike, ShoppingBag } from "lucide-react";
import { PageHero, Section } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { apps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Grocto currently publishes two mobile apps: Grocto for customers and Grocto Partner for delivery riders.",
};

export default function AppsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Apps published by Grocto"
        description="For Google Play and the App Store, Grocto currently lists one customer app and one delivery-partner app. Restaurant operations run on the web."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {apps.map((app) => (
            <article
              key={app.slug}
              className="rounded-3xl border border-border bg-white p-7"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                {app.slug === "grocto" ? (
                  <ShoppingBag className="size-6" />
                ) : (
                  <Bike className="size-6" />
                )}
              </div>
              <p className="mt-4 text-xs font-semibold tracking-wide text-primary uppercase">
                {app.audience} · {app.platforms}
              </p>
              <h2 className="mt-2 text-2xl font-bold">{app.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {app.summary}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-navy/80">
                {app.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="h-10 rounded-full px-4 font-semibold">
                  <Link href={app.href}>
                    Learn more
                    <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 rounded-full px-4 font-semibold"
                >
                  <Link href={app.privacyHref}>Privacy for this app</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
