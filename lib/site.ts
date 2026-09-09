export const siteConfig = {
  brand: "Grocto",
  legalName: "Pick & Drop Services",
  proprietor: "Lakshmi Narayan",
  tagline: "Food, fruits, and local store delivery — on time, from around you.",
  description:
    "Grocto is the food and fruits delivery platform of Pick & Drop Services, connecting customers, restaurants, and delivery partners in Bathinda.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://grocto.in",
  email: "support@grocto.co.in",
  gstin: "03AJIPN5172D1ZG",
  pan: "AJIPN5172D",
  udyam: "UDYAM-PB-03-0073402",
  trademarkClass: "Class 39 — Food delivery services",
  address: {
    line1: "Bedi Market, Street No. 4",
    line2: "Pukhraj Colony",
    city: "Bathinda",
    state: "Punjab",
    pin: "151001",
    country: "India",
  },
  supportHours: "Monday – Sunday, 9:00 AM – 9:00 PM IST",
  lastUpdated: "9 September 2026",
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
    icon: "/apps/grocto-icon.png",
    summary:
      "Fresh food and everyday essentials delivered to your doorstep. Browse nearby restaurants and a dedicated fruits store, order in a few taps, and track delivery live.",
    about:
      "Grocto makes it easy to order delicious food from nearby restaurants or fresh fruits for everyday needs — all from one app. The home screen has two dedicated sections, Restaurants and Fruits, with separate carts so you can place a food order or a fruit order independently.",
    href: "/apps/grocto",
    privacyHref: "/privacy-policy#grocto-app",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.app.fruitsandfood",
    appStoreUrl: "https://apps.apple.com/in/app/grocto/id6781178717",
    screenshots: [
      "/apps/screenshots/grocto-1.jpg",
      "/apps/screenshots/grocto-2.jpg",
      "/apps/screenshots/grocto-3.jpg",
      "/apps/screenshots/grocto-4.jpg",
    ],
    features: [
      "Discover nearby restaurants and browse menus",
      "Dedicated Fruits section with a separate fruit cart",
      "Search dishes, restaurants, and fruits from one bar",
      "Apply coupons and place orders in a few taps",
      "Track order status and view the rider during delivery",
      "English and Hindi",
    ],
  },
  {
    slug: "partner",
    name: "Grocto Partner",
    shortName: "Rider App",
    audience: "Delivery partners",
    platforms: "Android & iOS",
    icon: "/apps/partner-icon.png",
    summary:
      "Deliver orders, track earnings, and manage deliveries with ease. Go online, accept jobs, navigate with live GPS, and stay connected with customers.",
    about:
      "Grocto Partner is the delivery-partner app for the Grocto platform. Riders toggle availability, receive assignments with pickup details, complete deliveries step by step, and track earnings, ratings, and support tickets from one place.",
    href: "/apps/partner",
    privacyHref: "/privacy-policy#partner-app",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.app.fruitsandfooddelivery",
    appStoreUrl: "https://apps.apple.com/in/app/grocto-partner/id6781178434",
    screenshots: [
      "/apps/screenshots/partner-1.jpg",
      "/apps/screenshots/partner-2.jpg",
      "/apps/screenshots/partner-3.jpg",
      "/apps/screenshots/partner-4.jpg",
    ],
    features: [
      "One-tap online / offline availability",
      "Real-time order assignments with pickup details",
      "Live GPS navigation to restaurants and customers",
      "Accept or reject deliveries and update status in real time",
      "In-app chat and one-tap customer calling",
      "Earnings, delivery history, ratings, and support tickets",
    ],
  },
] as const;

export type AppListing = (typeof apps)[number];
