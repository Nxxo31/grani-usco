import type { MetadataRoute } from "next";

/**
 * Sitemap for Grani USCO.
 *
 * Uses a fixed lastModified timestamp instead of `new Date()` so the build is
 * deterministic and the sitemap doesn't fail Lighthouse's "Best Practices"
 * audit for stable URLs (a fresh date on every build churns the cache).
 */
const LAST_MODIFIED = new Date("2026-07-31T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://grani-usco.vercel.app",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
