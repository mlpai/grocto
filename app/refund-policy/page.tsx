import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refunds & Cancellations",
  description:
    "Refund and cancellation rules for Grocto food and fruits orders placed through the customer app.",
};

const toc = [
  { href: "#cancel", label: "Customer cancellations" },
  { href: "#store", label: "Store or rider issues" },
  { href: "#refunds", label: "Refunds" },
  { href: "#cod", label: "Cash on delivery" },
];

export default function RefundPage() {
  return (
    <LegalLayout
      title="Refunds & Cancellations"
      description="How Grocto handles order cancellations, failed deliveries, and refunds for UPI and cash-on-delivery payments."
      updated={siteConfig.lastUpdated}
      toc={toc}
    >
      <LegalSection id="cancel" title="1. Customer cancellations">
        <p>
          You may cancel an order <strong>before the restaurant or store
          accepts it</strong>. After acceptance, cancellation is subject to
          admin-controlled rules (for example, if preparation has already
          started). A cancellation reason is captured in the app.
        </p>
        <p>
          Scheduled orders can be cancelled until the store begins
          preparation, unless a campaign or coupon states otherwise.
        </p>
      </LegalSection>

      <LegalSection id="store" title="2. Store, rider, or platform cancellations">
        <p>We may cancel an order if:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>The store rejects the order or marks items unavailable</li>
          <li>No rider accepts the assignment after reasonable reassignment</li>
          <li>The delivery address is outside an enabled zone</li>
          <li>We detect payment, fraud, or safety issues</li>
        </ul>
        <p>
          If Grocto or the store cancels before dispatch for reasons not caused
          by you, prepaid amounts are refunded.
        </p>
      </LegalSection>

      <LegalSection id="refunds" title="3. Refunds">
        <p>
          Eligible UPI or wallet payments are refunded to the original payment
          instrument. Bank or UPI provider timelines (typically 3–7 business
          days) apply after we initiate the refund.
        </p>
        <p>
          Partial refunds may be issued for missing or incorrect items after
          we verify with the store. Quality complaints should be raised as soon
          as possible after delivery, with photos where useful.
        </p>
        <p>
          Refund logic is configurable in our admin panel. Promotional value
          (coupons) is not always returned as cash.
        </p>
      </LegalSection>

      <LegalSection id="cod" title="4. Cash on delivery">
        <p>
          For COD orders there is no prepaid amount to refund if you cancel
          before pickup. If you refuse a COD order after the rider has reached
          you without a valid quality or listing defect, we may restrict COD
          on future orders.
        </p>
        <p>
          Riders collect only the COD amount shown in Grocto Partner. Do not
          pay extra cash to anyone claiming to represent Grocto.
        </p>
        <p>
          Questions:{" "}
          <a className="font-semibold text-primary" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
