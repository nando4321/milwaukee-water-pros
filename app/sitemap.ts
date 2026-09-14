import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/services",
    "/service-areas",
    "/about",
    "/contact",
    "/contact/thank-you",
    "/privacy",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...areas.map((area) => ({
      url: `${site.url}/service-areas/${area.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
