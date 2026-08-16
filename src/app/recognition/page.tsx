import { SiteHeader } from "@/components/layout/SiteHeader";
import { achievements, certificates } from "@/data/achievements";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recognition — Mahesa Yuztar",
  description: "Selected competition results, technical recognition, and continued learning from Mahesa Yuztar.",
};

export default function RecognitionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]">
          <Link href="/" className="text-xs text-muted-ink hover:text-ink">← Back to profile</Link>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <div><p className="font-heading text-xs uppercase tracking-[0.2em] text-accent">Recognition archive</p><h1 className="mt-5 max-w-4xl text-balance text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.86] tracking-[-0.065em]">Results, and the work behind them.</h1></div>
            <p className="border-l border-border pl-5 text-sm leading-7 text-muted-ink">This is a secondary record, intentionally kept away from the main profile. The result matters, but the more useful story is what each arena trained: analysis, integration, partnership, and composure.</p>
          </div>
        </div>
      </section>

      <section className="section-rule py-20 sm:py-28">
        <div className="mx-auto grid w-[min(100%-40px,1180px)] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-24 lg:self-start"><Image src="/images/mcf-itb.jpg" alt="Mahesa and his team holding their second-place MCF ITB award" width={1200} height={900} className="aspect-[4/3] w-full rounded-md object-cover" /><p className="mt-3 text-xs leading-5 text-faint-ink">Mathematical Challenge Festival, Institut Teknologi Bandung · 2024</p></div>
          <ol className="border-t border-border">
            {achievements.map((achievement, _index) => <li key={achievement.id} className="border-b border-border py-8"><div className="flex items-start justify-between gap-6"><span className="font-heading text-xs text-faint-ink">{String(_index + 1).padStart(2, "0")}</span><span className="text-xs text-accent">{achievement.year}</span></div><h2 className="mt-8 text-3xl font-medium tracking-[-0.035em]">{achievement.title}</h2><p className="mt-2 text-sm text-muted-ink">{achievement.event}</p><p className="mt-6 max-w-2xl text-sm leading-7 text-muted-ink">{achievement.context}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section-rule bg-surface py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]"><div className="grid gap-8 lg:grid-cols-2"><div><p className="font-heading text-xs uppercase tracking-[0.2em] text-accent">Continued learning</p><h2 className="mt-5 text-5xl font-medium leading-none tracking-[-0.05em]">Credentials, curated by relevance.</h2></div><p className="max-w-xl text-sm leading-7 text-muted-ink">These credentials support work across data, infrastructure, and communication. They are grouped here as a learning trail rather than presented as decorative badges.</p></div><ul className="mt-14 grid border-t border-border md:grid-cols-2">{certificates.map((certificate) => <li key={certificate.id} className="grid grid-cols-[1fr_auto] gap-5 border-b border-border p-5 md:odd:border-r"><div><h3 className="text-sm font-medium">{certificate.title}</h3><p className="mt-2 text-xs text-muted-ink">{certificate.issuer}</p></div><span className="text-xs text-faint-ink">{certificate.year}</span></li>)}</ul></div>
      </section>
    </main>
  );
}
