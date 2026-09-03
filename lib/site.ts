export const siteConfig = {
  brand: "Grocto",
  legalName: "Pick & Drop Services",
  proprietor: "Lakshmi Narayan",
  tagline: "Food, fruits, and local store delivery — on time, from around you.",
  description:
    "Grocto is the food and fruits delivery platform of Pick & Drop Services, connecting customers, restaurants, and delivery partners in Bathinda.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://grocto.in",
  email: "luckybtd@gmail.com",
  gstin: "03AJIPN5172D1ZG",
  pan: "AJIPN5172D",
  udyam: "UDYAM-PB-03-0073402",
  trademarkClass: "Class 39 — Food delivery services",
  address: {
    line1: "31956, Street No. 8G",
    line2: "Paras Ram Nagar",
    city: "Bathinda",
    state: "Punjab",
    pin: "151001",
    country: "India",
  },
  supportHours: "Monday – Sunday, 9:00 AM – 9:00 PM IST",
  lastUpdated: "3 September 2026",
} as const;

export const addressLines = [
  siteConfig.address.line1,
  siteConfig.address.line2,
  `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pin}`,
  siteConfig.address.country,
] as const;

export const fullAddress = addressLines.join(", ");

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/apps", label: "Apps" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refunds & Cancellations" },
  { href: "/delete-account", label: "Delete Account" },
] as const;

export const apps = [
  {
    slug: "grocto",
    name: "Grocto",
    shortName: "Customer App",
    audience: "Customers",
    platforms: "Android & iOS",
    summary:
      "Order food, fruits, and local store items from nearby restaurants and shops. Track delivery live, pay with UPI or cash, and manage addresses in one place.",
    href: "/apps/grocto",
    privacyHref: "/privacy-policy#grocto-app",
    features: [
      "Nearby restaurants, dhabas, bakeries, and the Grocto fruits store",
      "GPS location, saved addresses, and service-area checks",
      "Cart, coupons, scheduled orders, and special instructions",
      "UPI and Cash on Delivery",
      "Live order tracking and in-app notifications",
      "Order history, invoices, ratings, and English / Hindi support",
    ],
  },
  {
    slug: "partner",
    name: "Grocto Partner",
    shortName: "Rider App",
    audience: "Delivery partners",
    platforms: "Android",
    summary:
      "Accept assigned deliveries, navigate with Google Maps, confirm pickup and drop-off, and track daily earnings — including COD collections.",
    href: "/apps/partner",
    privacyHref: "/privacy-policy#partner-app",
    features: [
      "Secure login with admin-controlled active or blocked status",
      "Auto and manual order assignment",
      "Accept or reject deliveries with automatic reassignment",
      "Turn-by-turn navigation and live location sharing",
      "Pickup and delivery confirmation, including COD amount",
      "Daily completed-order and earnings summary",
    ],
  },
] as const;
