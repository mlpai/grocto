import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Clock3,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { Eyebrow, Section } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apps, siteConfig } from "@/lib/site";

const steps = [
  {
    title: "Choose nearby",
    body: "Browse restaurants, dhabas, bakeries, sweet shops, and Grocto’s fruits store around you.",
  },
  {
    title: "Place the order",
    body: "Add items, apply offers, pay with UPI or cash on delivery, and add special instructions.",
  },
  {
    title: "We pick & drop",
    body: "Restaurants prepare. A Grocto Partner rider picks up and delivers to your saved address.",
  },
  {
    title: "Track to the door",
    body: "Follow status from accepted to out for delivery, then rate the order when it arrives.",
  },
];

const trust = [
  { label: "Registered enterprise", value: siteConfig.legalName },
  { label: "GSTIN", value: siteConfig.gstin },
  { label: "Udyam MSME", value: siteConfig.udyam },
  { label: "Headquarters", value: `${siteConfig.address.city}, ${siteConfig.address.state}` },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-cream">
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-fresh/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <Badge className="h-7 rounded-full bg-secondary px-3 text-secondary-foreground">
              Bathinda · Food & fruits delivery
            </Badge>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              Fresh food and fruits,
              <span className="text-primary"> delivered locally.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Grocto brings restaurants, local stores, and a company-run fruits
              shop to your door. One customer app. One partner app for riders.
              Operated by {siteConfig.legalName}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-full px-6 text-base font-semibold"
              >
                <Link href="/apps">
                  View our apps
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full px-6 text-base font-semibold"
              >
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Smartphone className="size-4 text-primary" /> Grocto App
              </span>
              <span className="inline-flex items-center gap-2">
                <Bike className="size-4 text-primary" /> Grocto Partner
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-fresh" /> GST registered
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-border bg-white p-8 shadow-[0_24px_80px_rgba(8,8,40,0.08)]">
              <Image
                src="/grocto-logo.png"
                alt="Grocto logo"
                width={740}
                height={558}
                className="mx-auto h-auto w-full max-w-xs"
                priority
              />
              <p className="mt-6 text-center text-sm text-muted-foreground">
                A brand of {siteConfig.legalName}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-white px-5 py-4"
            >
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-navy">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white py-16 sm:py-24">
        <Eyebrow>The apps</Eyebrow>
        <h2 className="mt-3 max-w-xl text-3xl font-bold">
          Two apps. One delivery network.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Grocto currently publishes a customer ordering app and a delivery
          partner app. Restaurant partners use a separate web panel to manage
          menus and incoming orders.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {apps.map((app) => (
            <Card key={app.slug} className="rounded-3xl py-6 ring-border">
              <CardHeader className="px-6">
                <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  {app.slug === "grocto" ? (
                    <ShoppingBag className="size-6" />
                  ) : (
                    <Bike className="size-6" />
                  )}
                </div>
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {app.audience} · {app.platforms}
                </p>
                <CardTitle className="text-2xl">{app.name}</CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {app.summary}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 h-10 rounded-full px-4 font-semibold"
                >
                  <Link href={app.href}>
                    App details
                    <ArrowRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>How Grocto works</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold">From kitchen to doorstep</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-border bg-white p-6"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: UtensilsCrossed,
              title: "Restaurants & shops",
              body: "Partners manage menus, accept orders, and track earnings from the Grocto Restaurant Panel.",
            },
            {
              icon: Store,
              title: "Grocto fruits store",
              body: "A company-operated fruits section sits alongside restaurant listings so customers can order fresh produce too.",
            },
            {
              icon: MapPin,
              title: "Service areas",
              body: "Delivery is limited to enabled zones. Availability is checked against the customer’s pin code and live location.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-cream p-6"
            >
              <item.icon className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white sm:px-12 sm:py-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-white">
                Need help with an order or your account?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Support is available {siteConfig.supportHours}. You can also
                request account deletion or read how we handle personal data.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-full px-5 font-semibold"
              >
                <Link href="/support">
                  <Clock3 />
                  Get support
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-white/20 bg-transparent px-5 font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
