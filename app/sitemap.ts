import type { MetadataRoute } from "next";

import { DateTime } from "luxon";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.NEXT_PUBLIC_APP_DOMAIN;

  return [
    {
      url: `${domain}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${domain}/privacy-policy`,
      lastModified: DateTime.utc(2025, 1, 14, 20, 0).toJSDate(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
