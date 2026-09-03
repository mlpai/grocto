import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Grocto customer and Partner apps operated by Pick & Drop Services.",
};

const toc = [
  { href: "#agreement", label: "Agreement" },
  { href: "#accounts", label: "Accounts" },
  { href: "#orders", label: "Orders & delivery" },
  { href: "#payments", label: "Payments" },
  { href: "#partners", label: "Riders & restaurants" },
  { href: "#acceptable", label: "Acceptable use" },
  { href: "#liability", label: "Liability" },
  { href: "#law", label: "Governing law" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="These terms govern your use of Grocto, Grocto Partner, and related websites operated by Pick & Drop Services."
      updated={siteConfig.lastUpdated}
      toc={toc}
    >
      <LegalSection id="agreement" title="1. Agreement">
        <p>
          By creating an account or using Grocto, you agree to these Terms of
          Service and our{" "}
          <Link href="/privacy-policy" className="font-semibold text-primary">
            Privacy Policy
          </Link>
          . The services are provided by {siteConfig.legalName} (“Grocto”).
        </p>
        <p>
          We may update these terms. The “Last updated” date on this page is
          the effective date. Continued use after a change means you accept the
          revised terms.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="2. Accounts">
        <p>
          Customer accounts are created with a mobile number and OTP. You must
          provide accurate information and keep OTPs confidential. You are
          responsible for activity on your account.
        </p>
        <p>
          Grocto Partner accounts are issued only to onboarded delivery
          partners. We may activate, suspend, or block a partner account for
          operational, safety, or policy reasons.
        </p>
        <p>You must be 18 years or older to use Grocto.</p>
      </LegalSection>

      <LegalSection id="orders" title="3. Orders and delivery">
        <p>
          Grocto lists restaurants, shops, and a company-operated fruits store
          in enabled service areas. Listing does not guarantee that an item is
          in stock or that a store is open.
        </p>
        <p>
          An order is confirmed when the restaurant or store accepts it.
          Estimated delivery times are indicative. Weather, traffic, rider
          availability, and kitchen load can change actual times.
        </p>
        <p>
          You must provide a reachable delivery address inside a live service
          zone. Failed delivery because of an incorrect address, unreachable
          customer, or refused shipment may still be charged as set out in the{" "}
          <Link href="/refund-policy" className="font-semibold text-primary">
            Refund & Cancellation Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="payments" title="4. Payments">
        <p>
          Prices include applicable taxes as shown at checkout. You may pay by
          UPI through our payment partner or by cash on delivery where offered.
        </p>
        <p>
          Promotional coupons may be withdrawn or limited. Commission,
          delivery fees, and restaurant payouts are configured in our admin
          tools and may vary by area and partner.
        </p>
      </LegalSection>

      <LegalSection id="partners" title="5. Riders and restaurants">
        <p>
          Independent restaurants remain responsible for food quality,
          packaging, FSSAI compliance, and item descriptions. Grocto Partner
          riders are responsible for careful handling, timely pickup, and
          accurate COD collection as shown in the app.
        </p>
        <p>
          Restaurant partners use the Grocto Restaurant Panel to manage menus
          and accept or reject orders. Rejection, unavailability, or delay at
          the store may lead to cancellation under our refund rules.
        </p>
      </LegalSection>

      <LegalSection id="acceptable" title="6. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Abuse OTPs, create fake accounts, or manipulate ratings</li>
          <li>Harass riders, restaurant staff, or support teams</li>
          <li>Use the apps to order outside legal or licensed items</li>
          <li>Reverse engineer, scrape, or disrupt our systems</li>
          <li>Share Partner-app access with anyone who is not onboarded</li>
        </ul>
        <p>We may refuse service or delete accounts that break these rules.</p>
      </LegalSection>

      <LegalSection id="liability" title="7. Liability">
        <p>
          Grocto is a technology platform. To the extent permitted by law, we
          are not liable for indirect or consequential losses, or for food
          quality issues solely attributable to a restaurant. Our aggregate
          liability for a given order is limited to the amount you paid for
          that order.
        </p>
        <p>
          Nothing in these terms limits liability that cannot be limited under
          Indian law, including liability for proven fraud or personal injury
          caused by our negligence.
        </p>
      </LegalSection>

      <LegalSection id="law" title="8. Governing law">
        <p>
          These terms are governed by the laws of India. Courts at Bathinda,
          Punjab have exclusive jurisdiction, subject to any mandatory consumer
          forum rights you may have.
        </p>
        <p>
          Contact: {siteConfig.email} · {siteConfig.phone} ·{" "}
          {siteConfig.address.line1}, {siteConfig.address.city}{" "}
          {siteConfig.address.pin}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
