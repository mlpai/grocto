import type { Metadata } from "next";
import { Eyebrow, PageHero, Section } from "@/components/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about Grocto and Pick & Drop Services, the Bathinda-based food and fruits delivery business operated by ${siteConfig.proprietor}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Pick & Drop Services, behind Grocto"
        description="Grocto is the consumer brand of Pick & Drop Services — a GST-registered proprietorship based in Bathinda, Punjab, building a local food, fruits, and store-delivery network."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-[15px] leading-7 text-navy/85">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="text-3xl font-bold">A local delivery company</h2>
            <p>
              {siteConfig.legalName} is a proprietary concern owned by{" "}
              {siteConfig.proprietor}. The enterprise is registered for GST in
              Punjab and listed as a Micro enterprise on Udyam. Grocto is the
              brand customers, restaurants, and riders use every day.
            </p>
            <p>
              We operate a multi-vendor marketplace: independent restaurants,
              dhabas, bakeries, and sweet shops sell through Grocto, while a
              company-owned fruits store sits in the same customer app. Orders
              move through a web admin panel, a restaurant partner panel, and
              the Grocto Partner rider app.
            </p>
            <p>
              The Grocto word and device mark are filed for food delivery
              services under Class 39. This website is the official public
              presence used for Google Play and App Store organisation listings,
              privacy disclosures, and customer support.
            </p>
          </div>
          <dl className="grid gap-4 rounded-3xl border border-border bg-white p-6 sm:grid-cols-2">
            {[
              ["Legal name", siteConfig.legalName],
              ["Trade / brand", siteConfig.brand],
              ["Proprietor", siteConfig.proprietor],
              ["Constitution", "Proprietorship"],
              ["GSTIN", siteConfig.gstin],
              ["PAN", siteConfig.pan],
              ["Udyam", siteConfig.udyam],
              ["Registered office", `${siteConfig.address.city}, ${siteConfig.address.state}`],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
      <Section className="bg-white">
        <h2 className="text-2xl font-bold">Registered office</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {siteConfig.address.line1}, {siteConfig.address.line2}
          <br />
          {siteConfig.address.city}, {siteConfig.address.state}{" "}
          {siteConfig.address.pin}
          <br />
          {siteConfig.address.country}
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Email{" "}
          <a className="font-medium text-primary" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </p>
      </Section>
    </>
  );
}
