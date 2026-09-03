import { fullAddress, siteConfig } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.brand,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: "+919778390009",
        logo: `${siteConfig.url}/grocto-logo.png`,
        image: `${siteConfig.url}/grocto-logo.png`,
        vatID: siteConfig.gstin,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pin,
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: siteConfig.email,
          telephone: "+919778390009",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        name: siteConfig.brand,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "LocalBusiness",
        name: `${siteConfig.brand} by ${siteConfig.legalName}`,
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pin,
          addressCountry: "IN",
        },
        areaServed: fullAddress,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
