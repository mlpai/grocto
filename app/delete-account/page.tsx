import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "How to delete your Grocto customer or Grocto Partner account and associated personal data.",
};

const toc = [
  { href: "#customer", label: "Grocto app" },
  { href: "#partner", label: "Partner app" },
  { href: "#email", label: "Request by email" },
  { href: "#after", label: "What we delete" },
];

export default function DeleteAccountPage() {
  return (
    <LegalLayout
      title="Delete your Grocto account"
      description="Google Play and Apple require a way to request deletion of your account and personal data. Use the in-app path or email us. This page is the web destination for those store listings."
      updated={siteConfig.lastUpdated}
      toc={toc}
    >
      <LegalSection id="customer" title="1. Grocto customer app">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open the Grocto app and sign in with your mobile number.</li>
          <li>Go to Profile or Account settings.</li>
          <li>Choose Delete account (or the equivalent privacy option).</li>
          <li>Confirm the deletion. We may ask you to verify the OTP again.</li>
        </ol>
        <p>
          If the in-app control is not yet visible on your build, use the email
          request below. Do not create a new OTP login only to test deletion
          unless you intend to remove that number.
        </p>
      </LegalSection>

      <LegalSection id="partner" title="2. Grocto Partner (rider) app">
        <p>
          Delivery-partner accounts are onboarded by Grocto. To delete a
          Partner account:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Email us from the registered mobile number or associated inbox.</li>
          <li>
            Use the subject line <strong>Delete Partner account</strong> and
            include your full name and rider ID if you have one.
          </li>
          <li>
            Settle any open COD or payout items if our team asks you to. We
            will not keep your account active only to delay deletion once
            those items are closed.
          </li>
        </ol>
      </LegalSection>

      <LegalSection id="email" title="3. Request deletion by email or this website">
        <p>
          Write to{" "}
          <a className="font-semibold text-primary" href={`mailto:${siteConfig.email}?subject=Delete%20Grocto%20account`}>
            {siteConfig.email}
          </a>{" "}
          with:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>The app (Grocto or Grocto Partner)</li>
          <li>Registered mobile number</li>
          <li>A request to delete the account and personal data</li>
        </ul>
        <p>
          You can also use the{" "}
          <Link href="/contact" className="font-semibold text-primary">
            contact form
          </Link>
          . We verify the request to prevent someone else from deleting your
          account. Verified requests are completed within <strong>30 days</strong>.
        </p>
      </LegalSection>

      <LegalSection id="after" title="4. What is deleted and what we keep">
        <p>After deletion we remove or anonymise:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Login and profile data</li>
          <li>Saved addresses</li>
          <li>Device tokens used for notifications</li>
          <li>Live-location linkage to your account</li>
        </ul>
        <p>
          We may retain invoices, tax records, fraud logs, and completed-order
          records that Indian accounting or dispute rules require, without
          keeping your account active. Those records are restricted to
          compliance use.
        </p>
        <p>
          Uninstalling the app from your phone does <strong>not</strong> delete
          the account on our servers. Follow the steps above.
        </p>
        <p>
          Full privacy details:{" "}
          <Link href="/privacy-policy" className="font-semibold text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
