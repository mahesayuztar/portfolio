import { SiteHeader } from "@/components/layout/SiteHeader";
import { CursorRevealHeading } from "@/components/ui/CursorRevealHeading";
import { ResilientImage } from "@/components/ui/ResilientImage";
import type { Metadata } from "next";
import Link from "next/link";
// import bridge1Image from "../../../public/images/beyond-code/bridge-1-achievement_12_11zon.webp";
import bridge2Image from "../../../public/images/beyond-code/bridge-2_18_11zon.webp";
import bridge3Image from "../../../public/images/beyond-code/bridge-3_19_11zon.webp";
import bridge4Image from "../../../public/images/beyond-code/bridge-4_20_11zon.webp";
// import bridge5Image from "../../../public/images/beyond-code/bridge-5-achievement_9_11zon.webp";
import bridge6Image from "../../../public/images/beyond-code/bridge-6_21_11zon.webp";
import mahesaRoboticsImage from "../../../public/images/beyond-code/mahesa-robotics_5_11zon_22_11zon.webp";
import pln1Image from "../../../public/images/beyond-code/pln-1_23_11zon.webp";
import pln2Image from "../../../public/images/beyond-code/pln-2_24_11zon.webp";
import robotics1Image from "../../../public/images/beyond-code/robotics-1_25_11zon.webp";
import robotics2Image from "../../../public/images/beyond-code/robotics-2_26_11zon.webp";
import robotics3Image from "../../../public/images/beyond-code/robotics-3-achievement_10_11zon.webp";
// import robotics4Image from "../../../public/images/beyond-code/robotics-4-achievement_11_11zon.webp";
import robotics5Image from "../../../public/images/beyond-code/robotics-5_13_11zon.webp";
import robotics6Image from "../../../public/images/beyond-code/robotics-6_14_11zon.webp";
import robotics7Image from "../../../public/images/beyond-code/robotics-7_15_11zon.webp";
import robotics8Image from "../../../public/images/beyond-code/robotics-8_16_11zon.webp";
import uitmImage from "../../../public/images/beyond-code/uitm-gpbl_3_11zon_17_11zon.webp";

export const metadata: Metadata = {
  title: "Beyond Code | Mahesa Yuztar",
  description:
    "Robotics, teaching, bridge, and international collaboration in Mahesa Yuztar's wider story.",
  alternates: { canonical: "/beyond-code" },
  openGraph: {
    title: "Beyond Code | Mahesa Yuztar",
    description:
      "Robotics, teaching, bridge, and international collaboration in Mahesa Yuztar's wider story.",
    url: "/beyond-code",
  },
  robots: { index: true, follow: true },
};

const chapters = [
  {
    number: "01",
    title: "Robotics made constraints physical.",
    text: "In the Dewantara Research Team's humanoid soccer division, software could not be considered separately from sensors, mechanics, timing, and failure in the physical world. Reaching the national KRSBI-H final made integration and calm troubleshooting as important as the algorithm itself.",
  },
  {
    number: "02",
    title: "Teaching changed how I explain.",
    text: "From assisting algorithms and programming labs to mentoring students at Get Ready Malang, teaching trained me to locate the real gap behind a question. The same habit now informs requirement discovery, code review, documentation, and conversations with clients.",
  },
  {
    number: "03",
    title: "Bridge sharpened decisions under uncertainty.",
    text: "Competitive bridge is a partnership built on partial information. Winning an East Java provincial open-pairs event and placing third in a junior pairs championship reinforced pattern recognition, disciplined communication, and the ability to revise a plan without losing composure.",
  },
];

const beyondCodeImages = [
  { src: mahesaRoboticsImage, alt: "Mahesa representing the humanoid robotics team" },
  { src: bridge3Image, alt: "Mahesa competing in a bridge tournament" },
  { src: robotics1Image, alt: "Humanoid robotics team activity" },
  { src: pln1Image, alt: "Mahesa during his PLN Nusantara Power internship" },
  // { src: bridge1Image, alt: "Bridge tournament recognition" },
  { src: robotics5Image, alt: "Robotics team preparing their humanoid robot" },
  { src: uitmImage, alt: "Recognition at UiTM Penang Global Project Based Learning" },
  { src: bridge4Image, alt: "Competitive bridge event" },
  { src: robotics2Image, alt: "Mahesa working with the robotics team" },
  { src: pln2Image, alt: "Technical work during the PLN Nusantara Power internship" },
  // { src: bridge5Image, alt: "Bridge team achievement" },
  { src: robotics6Image, alt: "Humanoid robot competition preparation" },
  { src: bridge2Image, alt: "Mahesa with fellow bridge competitors" },
  { src: robotics3Image, alt: "Robotics team competition achievement" },
  { src: robotics7Image, alt: "Robotics team collaboration" },
  { src: bridge6Image, alt: "Bridge competition gathering" },
  // { src: robotics4Image, alt: "Robotics team celebrating a result" },
  { src: robotics8Image, alt: "Humanoid robotics team at an event" },
];

export default function BeyondCodePage() {
  return (
    <main>
      <SiteHeader />
      <section className="py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]">
          <Link href="/" className="text-xs text-muted-ink hover:text-ink" data-reveal="left">← Back to profile</Link>
          <div className="mt-14">
            <CursorRevealHeading className="max-w-4xl text-balance text-[clamp(3.5rem,9vw,6rem)] font-medium leading-[0.84] tracking-[-0.065em]">The other places I learned to build.</CursorRevealHeading>
          </div>
        </div>
      </section>

      <section className="section-rule py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)] columns-2 gap-3 md:columns-3 lg:columns-4">
          {beyondCodeImages.map((image, _index) => (
            <figure key={image.src.src} className="group mb-3 break-inside-avoid overflow-hidden border border-border bg-surface" data-reveal="image" data-reveal-delay={String((_index % 4) * 75)}>
              <div data-parallax={String(_index % 2 === 0 ? 14 : -14)}>
                <ResilientImage src={image.src} alt={image.alt} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]" />
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-rule py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]">
          {chapters.map((chapter, _index) => (
            <article
              key={chapter.number}
              className="grid gap-6 border-b border-border py-12 first:border-t md:grid-cols-[5rem_0.9fr_1.1fr] md:gap-10"
              data-reveal="up"
              data-reveal-delay={String((_index % 3) * 70)}
            >
              <span className="font-heading text-xs text-accent">
                {chapter.number}
              </span>
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.035em]">
                {chapter.title}
              </h2>
              <p className="text-sm leading-7 text-muted-ink">{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-rule bg-surface py-20 sm:py-28">
        <div className="mx-auto w-[min(100%-40px,1180px)]">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-accent" data-reveal="left">
            Communities
          </p>
          <div className="mt-10 grid border-t border-border md:grid-cols-3" data-reveal="up">
            <div className="border-b border-border p-6 md:border-r">
              <p className="text-xs text-faint-ink">2023–2025</p>
              <h2 className="mt-3 text-xl font-medium">
                Dewantara Research Team
              </h2>
              <p className="mt-2 text-sm text-muted-ink">
                Humanoid Soccer Robot · Programming
              </p>
            </div>
            <div className="border-b border-border p-6 md:border-r">
              <p className="text-xs text-faint-ink">2025–2026</p>
              <h2 className="mt-3 text-xl font-medium">
                Basreng Basah Nusantara
              </h2>
              <p className="mt-2 text-sm text-muted-ink">Front Crew</p>
            </div>
            <div className="border-b border-border p-6">
              <p className="text-xs text-faint-ink">2022–2023</p>
              <h2 className="mt-3 text-xl font-medium">
                Forum Mahasiswa Pasuruan
              </h2>
              <p className="mt-2 text-sm text-muted-ink">Member</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
