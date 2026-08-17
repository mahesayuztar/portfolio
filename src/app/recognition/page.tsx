import { SiteHeader } from "@/components/layout/SiteHeader";
import { CursorRevealHeading } from "@/components/ui/CursorRevealHeading";
import { ResilientImage } from "@/components/ui/ResilientImage";
import { achievements, certificates } from "@/data/achievements";
import type { Metadata } from "next";
import Link from "next/link";
import bridge1Image from "../../../public/images/recognition/bridge-1-achievement_11zon.webp";
import bridge5Image from "../../../public/images/recognition/bridge-5-achievement_11zon.webp";
import mcfItbImage from "../../../public/images/recognition/mcf-itb_8_11zon.webp";
import robotics3Image from "../../../public/images/recognition/robotics-3-achievement_11zon.webp";
import robotics4Image from "../../../public/images/recognition/robotics-4-achievement_11zon.webp";

export const metadata: Metadata = {
  title: "Recognition | Mahesa Yuztar",
  description: "Selected competition results, technical recognition, and continued learning from Mahesa Yuztar.",
  alternates: { canonical: "/recognition" },
  openGraph: { title: "Recognition | Mahesa Yuztar", description: "Selected competition results, technical recognition, and continued learning from Mahesa Yuztar.", url: "/recognition" },
  robots: { index: true, follow: true },
};

const bridgeImages = [
  { src: bridge1Image, alt: "Mahesa receiving recognition at a competitive bridge tournament" },
  { src: bridge5Image, alt: "Mahesa and his bridge team with their achievement" },
];

const roboticsImages = [
  { src: robotics3Image, alt: "Mahesa and the robotics team at a competition" },
  { src: robotics4Image, alt: "The robotics team celebrating their competition result" },
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
          <div className="grid items-start gap-3 md:grid-cols-12">
            <figure className="group overflow-hidden border border-border bg-surface md:col-span-7">
              <ResilientImage src={mcfItbImage} alt="Mahesa and his team at the MCF ITB data science competition" sizes="(min-width: 768px) 58vw, 100vw" className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]" />
            </figure>
            <div className="grid gap-3 md:col-span-5">
              {bridgeImages.map((image) => (
                <figure key={image.src.src} className="group overflow-hidden border border-border bg-surface">
                  <ResilientImage src={image.src} alt={image.alt} sizes="(min-width: 768px) 42vw, 100vw" className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]" />
                </figure>
              ))}
            </div>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {roboticsImages.map((image) => (
              <figure key={image.src.src} className="group overflow-hidden border border-border bg-surface">
                <ResilientImage src={image.src} alt={image.alt} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]" />
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
