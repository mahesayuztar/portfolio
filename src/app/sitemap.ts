import { siteUrl } from "@/data/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/recognition`,
      changeFrequency: "yearly",
      priority: 0.7,
      images: [`${siteUrl}/images/mcf-itb.jpg`],
    },
    {
      url: `${siteUrl}/beyond-code`,
      changeFrequency: "yearly",
      priority: 0.6,
      images: [
        `${siteUrl}/images/mahesa-robotics.jpg`,
        `${siteUrl}/images/uitm-gpbl.jpg`,
      ],
    },
  ];
}
