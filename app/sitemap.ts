import type { MetadataRoute } from "next";
import { company } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: company.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
