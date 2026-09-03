import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero, Section } from "@/components/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Grocto / Pick & Drop Services in Bathinda for app support, partner onboarding, and privacy requests.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Grocto"
        description="Use this page for customer support, restaurant or rider onboarding, and privacy or account-deletion requests. This is also the public contact information for our Google Play and App Store listings."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: siteConfig.phone,
                href: siteConfig.phoneHref,
              },
              {
                icon: MapPin,
                label: "Registered office",
                value: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pin}, ${siteConfig.address.country}`,
                href: undefined as string | undefined,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-border bg-white p-5"
              >
                <item.icon className="size-5 text-primary" />
                <p className="mt-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-sm font-semibold text-navy hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-semibold">{item.value}</p>
                )}
              </div>
            ))}
            <p className="text-sm text-muted-foreground">
              Support hours: {siteConfig.supportHours}
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
