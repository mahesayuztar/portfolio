import { projects } from "@/data/projects";
import { siteDescription, siteUrl } from "@/data/site";
import type { Metadata } from "next";
import Main from "./Main";

export const metadata: Metadata = {
  title: "Mahesa Yuztar | Software Engineer",
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mahesa Yuztar | Software Engineer",
    description: siteDescription,
    url: "/",
  },
  robots: { index: true, follow: true },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Mahesa Yuztar",
        url: siteUrl,
        email: "mailto:mahesayuztar@gmail.com",
        jobTitle: "Software Engineer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Malang",
          addressCountry: "ID",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universitas Negeri Malang",
        },
        knowsAbout: [
          "Backend development",
          "Fullstack development",
          "Laravel",
          "Next.js",
          "MySQL",
          "Docker",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Mahesa Yuztar",
        description: siteDescription,
        inLanguage: "en",
        author: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ItemList",
        name: "Selected software projects",
        itemListElement: projects.map((project, _index) => ({
          "@type": "ListItem",
          position: _index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.description,
            applicationCategory: project.category,
            author: { "@id": `${siteUrl}/#person` },
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Main />
    </>
  );
}
