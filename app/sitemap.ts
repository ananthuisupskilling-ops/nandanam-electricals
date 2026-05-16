import type { MetadataRoute } from "next";
import { company } from "@/data/site";
import { landingPages } from "@/data/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: company.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    ...landingPages.map((page) => ({
      url: `${company.siteUrl}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85
    }))
  ];
}
