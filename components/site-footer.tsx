import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { legalNav, nav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-flex rounded-2xl bg-white p-3">
            <BrandMark className="h-16 w-auto" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            {siteConfig.brand} is operated by {siteConfig.legalName}, a
            proprietorship of {siteConfig.proprietor}. We deliver food, fruits,
            and local store orders across our service areas in{" "}
            {siteConfig.address.city}, {siteConfig.address.state}.
          </p>
          <p className="mt-4 text-xs text-white/50">
            GSTIN {siteConfig.gstin} · Udyam {siteConfig.udyam}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white">
            Policies
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p>
            {siteConfig.address.line1}, {siteConfig.address.city}{" "}
            {siteConfig.address.pin}
          </p>
        </div>
      </div>
    </footer>
  );
}
