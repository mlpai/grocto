import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Grocto orders, payments, the Partner rider app, and account or privacy requests.",
};

const topics = [
  {
    title: "Customer orders",
    body: "For late deliveries, missing items, or payment issues, email us with your registered mobile number and order ID. We coordinate with the restaurant and assigned rider.",
  },
  {
    title: "Grocto Partner riders",
    body: "Riders who cannot sign in, need a zone change, or have a payout question should email from the mobile number registered on their partner profile.",
  },
  {
    title: "Restaurant partners",
    body: "Menu, commission, and payout questions for the Restaurant Panel are handled by the same support inbox. Include your restaurant name.",
  },
  {
    title: "Privacy & account deletion",
    body: "To access, correct, or delete personal data, use the Delete Account page or email us with the subject “Privacy request”.",
    href: "/delete-account",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Support for Grocto apps"
        description={`We respond on ${siteConfig.supportHours}. Most requests are answered by email within two business days.`}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-3xl border border-border bg-white p-6"
            >
              <h2 className="text-lg font-semibold">{topic.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {topic.body}
              </p>
              {topic.href ? (
                <Link
                  href={topic.href}
                  className="mt-4 inline-block text-sm font-semibold text-primary"
                >
                  Open delete-account instructions
                </Link>
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-cream p-6 text-sm leading-relaxed">
          <p>
            Email{" "}
            <a className="font-semibold text-primary" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a className="font-semibold text-primary" href={siteConfig.phoneHref}>
              {siteConfig.phone}
            </a>
            .
          </p>
          <p className="mt-3 text-muted-foreground">
            Grievance officer: {siteConfig.proprietor}, {siteConfig.legalName},{" "}
            {siteConfig.address.city}. We aim to acknowledge complaints within
            48 hours and resolve them within 30 days where reasonably possible.
          </p>
        </div>
      </Section>
    </>
  );
}
