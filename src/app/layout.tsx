import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], display: "swap" });
const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta-sans", subsets: ["latin"], display: "swap" });
const description = "Mahesa Yuztar is a software engineer in Malang building maintainable backend systems, fullstack products, and practical digital tools.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahesayuztar.vercel.app"),
  title: "Mahesa Yuztar",
  description,
  openGraph: { title: "Mahesa Yuztar", description, type: "website", locale: "en_US", images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Mahesa Yuztar" }] },
  twitter: { card: "summary_large_image", title: "Mahesa Yuztar", description, images: ["/opengraph-image.png"] },
  icons: { icon: "/icon.ico", shortcut: "/icon.ico", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(() => { try { const saved = localStorage.getItem("portfolio-theme"); const theme = saved === "light" || saved === "dark" ? saved : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; document.documentElement.dataset.theme = theme; } catch { document.documentElement.dataset.theme = "light"; } })();`;

  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="min-h-full bg-background text-ink">{children}</body>
    </html>
  );
}
