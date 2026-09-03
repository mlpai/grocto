import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Grocto customer app and Grocto Partner rider app, operated by Pick & Drop Services.",
};

const toc = [
  { href: "#who", label: "Who we are" },
  { href: "#apps", label: "Apps covered" },
  { href: "#grocto-app", label: "Grocto customer app" },
  { href: "#partner-app", label: "Grocto Partner app" },
  { href: "#use", label: "How we use data" },
  { href: "#share", label: "Sharing" },
  { href: "#retention", label: "Retention & security" },
  { href: "#rights", label: "Your rights" },
  { href: "#children", label: "Children" },
  { href: "#contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="This policy explains what personal data Grocto collects in the customer app and the Partner rider app, why we collect it, and how you can request access or deletion. It is the policy we submit with Google Play and App Store listings."
      updated={siteConfig.lastUpdated}
      toc={toc}
    >
      <LegalSection id="who" title="1. Who we are">
        <p>
          This Privacy Policy is issued by <strong>{siteConfig.legalName}</strong>,
          a proprietorship of {siteConfig.proprietor} (“we”, “us”, “Grocto”).
          Registered office: {siteConfig.address.line1},{" "}
          {siteConfig.address.line2}, {siteConfig.address.city},{" "}
          {siteConfig.address.state} {siteConfig.address.pin},{" "}
          {siteConfig.address.country}. GSTIN {siteConfig.gstin}.
        </p>
        <p>
          Grocto is a food, fruits, and local-store delivery platform. We
          process personal data as a data fiduciary under applicable Indian law,
          including the Information Technology Act, 2000 and the Digital
          Personal Data Protection Act, 2023, as they apply to our operations.
        </p>
      </LegalSection>

      <LegalSection id="apps" title="2. Apps and services covered">
        <p>This policy applies to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            The <strong>Grocto</strong> customer mobile application (Android and
            iOS)
          </li>
          <li>
            The <strong>Grocto Partner</strong> delivery-partner application
            (Android)
          </li>
          <li>
            Related websites, restaurant partner panel, admin tools, SMS, and
            support channels operated by us
          </li>
        </ul>
        <p>
          Restaurant partners using the Grocto Restaurant Panel are independent
          businesses. We share order details they need to fulfil your order.
        </p>
      </LegalSection>

      <LegalSection id="grocto-app" title="3. Grocto customer app — data we collect">
        <p>
          Depending on how you use Grocto, we may collect the following
          categories of data:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Account data:</strong> mobile number, OTP verification
            records, language preference (English or Hindi), and session tokens.
          </li>
          <li>
            <strong>Location data:</strong> precise GPS location when you allow
            it, plus manually entered addresses (house number, street, landmark,
            pin code). Location is used to show nearby restaurants, check
            service availability, estimate delivery time, and assign riders.
          </li>
          <li>
            <strong>Order data:</strong> cart contents, special instructions,
            scheduled order time, coupons, cancellation reasons, ratings, and
            reviews.
          </li>
          <li>
            <strong>Payment data:</strong> payment method (UPI or cash on
            delivery) and payment status. Card or UPI credentials are processed
            by the payment gateway; we do not store full payment instrument
            secrets.
          </li>
          <li>
            <strong>Device and diagnostics:</strong> device type, OS version,
            app version, crash logs, and approximate network information used
            for security and stability.
          </li>
          <li>
            <strong>Communications:</strong> in-app notifications, SMS OTP and
            order updates, and messages you send to support.
          </li>
        </ul>
        <p>
          Precise location is not required to browse if you enter an address
          manually, but delivery and nearby-store features need a serviceable
          location.
        </p>
      </LegalSection>

      <LegalSection id="partner-app" title="4. Grocto Partner app — data we collect">
        <p>
          If you are an onboarded delivery partner, we collect:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Profile and login data</strong> created during onboarding
            (name, mobile number, and account status controlled by our admin
            team).
          </li>
          <li>
            <strong>Live location</strong> while you are available for
            assignments or completing a delivery, used for navigation, customer
            tracking, and fraud prevention. Location sharing for an order stops
            after delivery confirmation, subject to short operational logs.
          </li>
          <li>
            <strong>Assignment data:</strong> accept/reject actions, pickup and
            drop confirmation, COD amount displayed, and reassignment history.
          </li>
          <li>
            <strong>Earnings data:</strong> completed orders, COD collected, and
            payout summaries.
          </li>
        </ul>
        <p>
          Partner accounts can be activated or blocked by Grocto administrators.
          Blocking suspends access; it does not automatically erase historical
          delivery records we must keep for accounting or dispute handling.
        </p>
      </LegalSection>

      <LegalSection id="use" title="5. How we use personal data">
        <ul className="list-disc space-y-1 pl-5">
          <li>Create and secure accounts, including OTP login</li>
          <li>Show nearby stores, calculate distance, and check service areas</li>
          <li>Process, assign, track, and complete orders</li>
          <li>Take or reconcile payments and issue invoices</li>
          <li>Send transactional SMS and in-app notifications</li>
          <li>Handle cancellations, refunds, and customer support</li>
          <li>Pay restaurants and riders and generate commission reports</li>
          <li>Detect fraud, abuse, and service-area misuse</li>
          <li>Improve reliability, including crash and performance monitoring</li>
          <li>Comply with tax, accounting, and lawful requests</li>
        </ul>
      </LegalSection>

      <LegalSection id="share" title="6. Who we share data with">
        <p>We share personal data only as needed to run the service:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Restaurants and stores</strong> receive the order, delivery
            address as required, customer notes, and contact details needed for
            fulfilment.
          </li>
          <li>
            <strong>Delivery partners</strong> receive pickup/drop locations,
            customer contact as needed for the delivery, COD amount, and order
            identifiers.
          </li>
          <li>
            <strong>Payment gateways</strong> process UPI and other electronic
            payments.
          </li>
          <li>
            <strong>SMS providers</strong> send OTPs and transactional messages.
          </li>
          <li>
            <strong>Maps and cloud providers</strong> (including Google Maps and
            our cloud host) process location and infrastructure data under their
            terms.
          </li>
          <li>
            <strong>Authorities</strong> when required by law or to protect
            rights, safety, or the integrity of the platform.
          </li>
        </ul>
        <p>We do not sell personal data.</p>
      </LegalSection>

      <LegalSection id="retention" title="7. Retention, security, and transfers">
        <p>
          We keep account, order, and payout records for as long as you use
          Grocto and thereafter as required for tax, dispute, and legal
          retention (typically up to 8 years for accounting records in India,
          or shorter where the law allows deletion). Location breadcrumbs that
          are not needed for a completed order are retained only for a limited
          operational period.
        </p>
        <p>
          We use access controls, encrypted transport (HTTPS), and
          administrator authentication on our panels. No method of transmission
          is perfectly secure; please protect your OTP and device.
        </p>
        <p>
          Servers may be hosted in India or another region used by our cloud
          provider. Where data is processed outside India, we take steps
          consistent with applicable law.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="8. Your rights and account deletion">
        <p>Subject to law, you may request to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate data</li>
          <li>Withdraw consent for optional location or notifications</li>
          <li>Delete your Grocto or Partner account and associated data</li>
        </ul>
        <p>
          Step-by-step deletion instructions are published at{" "}
          <Link href="/delete-account" className="font-semibold text-primary">
            /delete-account
          </Link>
          . You can also email{" "}
          <a className="font-semibold text-primary" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          from your registered number or email. We complete verified deletion
          requests within 30 days, except records we must keep by law.
        </p>
      </LegalSection>

      <LegalSection id="children" title="9. Children">
        <p>
          Grocto is not directed at children under 18. We do not knowingly
          create accounts for minors. If you believe a child has provided
          personal data, contact us and we will delete the account.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="10. Grievance officer and contact">
        <p>
          Grievance Officer: {siteConfig.proprietor}, {siteConfig.legalName}
          <br />
          Address: {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
          {siteConfig.address.city}, {siteConfig.address.state}{" "}
          {siteConfig.address.pin}
          <br />
          Email:{" "}
          <a className="font-semibold text-primary" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <br />
          Phone: {siteConfig.phone}
        </p>
        <p>
          We aim to acknowledge privacy complaints within 48 hours and resolve
          them within 30 days. For store listing questions, this page is the
          canonical privacy policy URL for Grocto apps.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
