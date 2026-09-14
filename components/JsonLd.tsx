import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#business`,
        name: site.name,
        url: site.url,
        image: `${site.url}/opengraph-image.png`,
        description: site.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: "US",
        },
        areaServed: site.counties.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Water filtration and treatment",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: `${site.url}/services/${service.slug}`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#business` },
      },
      {
        "@type": "ItemList",
        name: "Service areas",
        itemListElement: areas.map((area, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: area.name,
          url: `${site.url}/service-areas/${area.slug}`,
        })),
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
