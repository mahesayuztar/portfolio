import { SiteHeader } from "@/components/layout/SiteHeader";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beyond Code — Mahesa Yuztar",
  description: "Robotics, teaching, bridge, and international collaboration in Mahesa Yuztar's wider story.",
};

const chapters = [
  { number: "01", title: "Robotics made constraints physical.", text: "In the Dewantara Research Team's humanoid soccer division, software could not be considered separately from sensors, mechanics, timing, and failure in the physical world. Reaching the national KRSBI-H final made integration and calm troubleshooting as important as the algorithm itself." },
  { number: "02", title: "Teaching changed how I explain.", text: "From assisting algorithms and programming labs to mentoring students at Get Ready Malang, teaching trained me to locate the real gap behind a question. The same habit now informs requirement discovery, code review, documentation, and conversations with clients." },
  { number: "03", title: "Bridge sharpened decisions under uncertainty.", text: "Competitive bridge is a partnership built on partial information. Winning an East Java provincial open-pairs event and placing third in a junior pairs championship reinforced pattern recognition, disciplined communication, and the ability to revise a plan without losing composure." },
];

export default function BeyondCodePage() {
  return (
    <main>
      <SiteHeader />
      <section className="py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]"><Link href="/" className="text-xs text-muted-ink hover:text-ink">← Back to profile</Link><div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><p className="font-heading text-xs uppercase tracking-[0.2em] text-accent">Beyond code</p><h1 className="mt-5 text-balance text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.86] tracking-[-0.065em]">The other places I learned to build.</h1></div><p className="max-w-xl text-base leading-8 text-muted-ink">A quieter part of the site about robots, classrooms, card tables, and teams across countries—the experiences that shaped how I approach technical work without needing to lead the main profile.</p></div></div>
      </section>

      <section className="section-rule py-20 sm:py-28">
        <div className="mx-auto grid w-[min(100%-40px,1180px)] gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <Image src="/images/mahesa-robotics.jpg" alt="Mahesa speaking in his humanoid robotics team uniform" width={900} height={1200} className="h-full max-h-[48rem] w-full rounded-md object-cover object-top" />
          <Image src="/images/uitm-gpbl.jpg" alt="Mahesa receiving recognition at UiTM Penang's Global Project Based Learning program" width={1200} height={1600} className="h-full max-h-[48rem] w-full rounded-md object-cover" />
        </div>
      </section>

      <section className="section-rule py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]">
          {chapters.map((chapter) => <article key={chapter.number} className="grid gap-6 border-b border-border py-12 first:border-t md:grid-cols-[5rem_0.9fr_1.1fr] md:gap-10"><span className="font-heading text-xs text-accent">{chapter.number}</span><h2 className="text-3xl font-medium leading-tight tracking-[-0.035em]">{chapter.title}</h2><p className="text-sm leading-7 text-muted-ink">{chapter.text}</p></article>)}
        </div>
      </section>

      <section className="section-rule bg-surface py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]"><p className="font-heading text-xs uppercase tracking-[0.2em] text-accent">Communities</p><div className="mt-10 grid border-t border-border md:grid-cols-3"><div className="border-b border-border p-6 md:border-r"><p className="text-xs text-faint-ink">2023–2025</p><h2 className="mt-3 text-xl font-medium">Dewantara Research Team</h2><p className="mt-2 text-sm text-muted-ink">Humanoid Soccer Robot · Programming</p></div><div className="border-b border-border p-6 md:border-r"><p className="text-xs text-faint-ink">2025–2026</p><h2 className="mt-3 text-xl font-medium">Basreng Basah Nusantara</h2><p className="mt-2 text-sm text-muted-ink">Front Crew</p></div><div className="border-b border-border p-6"><p className="text-xs text-faint-ink">2022–2023</p><h2 className="mt-3 text-xl font-medium">Forum Mahasiswa Pasuruan</h2><p className="mt-2 text-sm text-muted-ink">Member</p></div></div></div>
      </section>
    </main>
  );
}
