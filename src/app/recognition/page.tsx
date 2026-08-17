import { SiteHeader } from "@/components/layout/SiteHeader";
import { CursorRevealHeading } from "@/components/ui/CursorRevealHeading";
import { ResilientImage } from "@/components/ui/ResilientImage";
import { achievements, certificates } from "@/data/achievements";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recognition | Mahesa Yuztar",
  description: "Selected competition results, technical recognition, and continued learning from Mahesa Yuztar.",
  alternates: { canonical: "/recognition" },
  openGraph: { title: "Recognition | Mahesa Yuztar", description: "Selected competition results, technical recognition, and continued learning from Mahesa Yuztar.", url: "/recognition" },
  robots: { index: true, follow: true },
};

const recognitionImages = [
  { src: "/images/recognition/mcf-itb_8_11zon.webp", alt: "Mahesa and his team at the MCF ITB data science competition", className: "md:col-span-7 md:row-span-2" },
  { src: "/images/recognition/bridge-1-achievement_11zon.webp", alt: "Mahesa receiving recognition at a competitive bridge tournament", className: "md:col-span-5" },
  { src: "/images/recognition/bridge-5-achievement_11zon.webp", alt: "Mahesa and his bridge team with their achievement", className: "md:col-span-5" },
  { src: "/images/recognition/robotics-3-achievement_11zon.webp", alt: "Mahesa and the robotics team at a competition", className: "md:col-span-6" },
  { src: "/images/recognition/robotics-4-achievement_11zon.webp", alt: "The robotics team celebrating their competition result", className: "md:col-span-6" },
];

export default function RecognitionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]">
          <Link href="/" className="text-xs text-muted-ink hover:text-ink">← Back to profile</Link>
          <CursorRevealHeading className="mt-14 max-w-4xl text-balance text-[clamp(3.5rem,9vw,6rem)] font-medium leading-[0.84] tracking-[-0.065em]">Results, and the work behind them.</CursorRevealHeading>
        </div>
      </section>

      <section className="section-rule py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]">
          <div className="grid auto-rows-[11rem] grid-cols-1 gap-3 md:grid-cols-12 md:auto-rows-[12rem]">
            {recognitionImages.map((image) => (
              <figure key={image.src} className={`group relative overflow-hidden border border-border bg-surface ${image.className}`}>
                <ResilientImage src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              </figure>
            ))}
          </div>
          <ol className="mt-16 border-t border-border">
            {achievements.map((achievement, _index) => (
              <li key={achievement.id} className="border-b border-border py-8">
                <div className="flex items-start justify-between gap-6"><span className="font-heading text-xs text-faint-ink">{String(_index + 1).padStart(2, "0")}</span><span className="text-xs text-accent">{achievement.year}</span></div>
                <h2 className="mt-8 text-3xl font-medium tracking-[-0.035em]">{achievement.title}</h2>
                <p className="mt-2 text-sm text-muted-ink">{achievement.event}</p>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-ink">{achievement.context}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-rule bg-surface py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]">
          <h2 className="text-5xl font-medium leading-none tracking-[-0.05em]">Credentials.</h2>
          <ul className="mt-14 grid border-t border-border md:grid-cols-2">
            {certificates.map((certificate) => <li key={certificate.id} className="grid grid-cols-[1fr_auto] gap-5 border-b border-border p-5 md:odd:border-r"><div><h3 className="text-sm font-medium">{certificate.title}</h3><p className="mt-2 text-xs text-muted-ink">{certificate.issuer}</p></div><span className="text-xs text-faint-ink">{certificate.year}</span></li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
