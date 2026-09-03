import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/apps",
    "/apps/grocto",
    "/apps/partner",
    "/privacy-policy",
    "/terms",
    "/refund-policy",
    "/delete-account",
    "/contact",
    "/support",
  ];

  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-09-03"),
    changeFrequency: path.includes("privacy") || path.includes("terms")
      ? "monthly"
      : "weekly",
    priority: path === "" ? 1 : path === "/privacy-policy" ? 0.9 : 0.7,
  }));
}
