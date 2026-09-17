import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/tos", destination: "/terms", permanent: true },
      {
        source: "/delivery-partner-terms",
        destination:
          "https://restaurant.grocto.co.in/terms-conditions?user_type=DELIVERY_PARTNER",
        permanent: false,
      },
      {
        source: "/partner-terms",
        destination:
          "https://restaurant.grocto.co.in/terms-conditions?user_type=DELIVERY_PARTNER",
        permanent: false,
      },
      {
        source: "/rider-terms",
        destination:
          "https://restaurant.grocto.co.in/terms-conditions?user_type=DELIVERY_PARTNER",
        permanent: false,
      },
      {
        source: "/restaurant-terms",
        destination:
          "https://restaurant.grocto.co.in/terms-conditions?user_type=RESTAURANT",
        permanent: false,
      },
      {
        source: "/merchant-terms",
        destination:
          "https://restaurant.grocto.co.in/terms-conditions?user_type=RESTAURANT",
        permanent: false,
      },
      { source: "/refunds", destination: "/refund-policy", permanent: true },
      { source: "/account-deletion", destination: "/delete-account", permanent: true },
    ];
  },
};

export default nextConfig;
