import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/page-shell";
import { StoreButtons } from "@/components/store-buttons";
import { Button } from "@/components/ui/button";
import { apps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Download Grocto and Grocto Partner on Google Play and the App Store.",
};

export default function AppsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Apps published by Grocto"
        description="Grocto and Grocto Partner are live on Google Play and the App Store. Restaurant operations run on a separate web panel."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {apps.map((app) => (
            <article
              key={app.slug}
              className="rounded-3xl border border-border bg-white p-7"
            >
              <Image
                src={app.icon}
                alt={`${app.name} app icon`}
                width={512}
                height={512}
                className="size-16 rounded-2xl border border-border bg-white object-cover"
              />
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
              <StoreButtons app={app} className="mt-6" />
              <div className="mt-4">
                <Button asChild variant="outline" className="h-10 rounded-full px-4 font-semibold">
                  <Link href={app.href}>
                    Learn more
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
