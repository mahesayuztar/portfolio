import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], display: "swap" });
const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta-sans", subsets: ["latin"], display: "swap" });
const description = "Mahesa Yuztar is a software engineer in Malang building maintainable backend systems, fullstack products, and practical digital tools.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahesayuztar.vercel.app"),
  title: "Mahesa Yuztar — Software Engineer",
  description,
  openGraph: { title: "Mahesa Yuztar — Software Engineer", description, type: "website", locale: "en_US", images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Mahesa Yuztar — Software Engineer" }] },
  twitter: { card: "summary_large_image", title: "Mahesa Yuztar — Software Engineer", description, images: ["/opengraph-image.png"] },
  icons: { icon: "/icon.ico", shortcut: "/icon.ico", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} h-full antialiased`}><body className="min-h-full bg-background text-ink">{children}</body></html>;
}
