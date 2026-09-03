import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/tos", destination: "/terms", permanent: true },
      { source: "/refunds", destination: "/refund-policy", permanent: true },
      { source: "/account-deletion", destination: "/delete-account", permanent: true },
    ];
  },
};

export default nextConfig;
