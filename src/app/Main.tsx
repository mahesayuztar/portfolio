import { Container } from "@/components/layout/Container";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/Button";
import { CursorRevealHeading } from "@/components/ui/CursorRevealHeading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResilientImage } from "@/components/ui/ResilientImage";
import { TechLabel } from "@/components/ui/TechLabel";
import {
  WindowProvider,
  WindowTrigger,
} from "@/components/windows/WindowSystem";
import { journey } from "@/data/journey";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { contactEmail } from "@/data/social";
import { ArrowDown, ArrowUpRight, GraduationCap, MoveUpRight } from "lucide-react";

const journeyVisuals: Record<string, { src: string; alt: string }[]> = {
  sisgo: [{ src: "/images/home/logo-sisgo_7_11zon.webp", alt: "SISGO logo" }],
  solveit: [{ src: "/images/home/solve-it_2_11zon.webp", alt: "Solveit.id logo" }],
  pln: [{ src: "/images/home/pln logo_1_11zon.webp", alt: "PLN Nusantara Power logo" }],
  uitm: [{ src: "/images/home/UiTM-Logo_4_11zon.webp", alt: "UiTM logo" }],
  assistant: [{ src: "/images/home/cropped-LOGO-UM_6_11zon.webp", alt: "Universitas Negeri Malang logo" }],
};

export default function Main() {
  return (
    <WindowProvider>
      <main id="top" className="overflow-x-clip">
        <SiteHeader />

        <section className="relative min-h-[calc(100svh-4rem)] py-16 sm:py-24">
          <Container className="flex min-h-[calc(100svh-12rem)] lg:-translate-y-5">
            <div className="flex flex-col justify-center">
              <CursorRevealHeading className="max-w-5xl text-balance text-[clamp(3.6rem,10vw,6rem)] font-medium leading-[0.84] tracking-[-0.065em]">
                Building useful systems from unclear problems.
              </CursorRevealHeading>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="#projects">
                  Explore selected work <ArrowDown size={16} />
                </Button>
                <WindowTrigger
                  kind="profile"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm text-ink transition-colors hover:border-border-strong hover:bg-surface-raised"
                >
                  Open profile <MoveUpRight size={16} />
                </WindowTrigger>
              </div>
            </div>
          </Container>
        </section>

        <section id="about" className="section-rule py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionHeading
              eyebrow="01 / About"
              title="Software is the medium. Clarity is the work."
            />
            <div className="self-end">
              <p className="max-w-2xl text-xl leading-9 tracking-[-0.015em] text-ink">
                I work across backend systems, interfaces, data, infrastructure,
                and the practical space between a client&apos;s request and a
                maintainable product.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-ink">
                My route into software includes teaching algorithms, monitoring
                industrial infrastructure, leading an international robotics
                team, and building production Laravel systems. Each made me
                better at seeing the whole system—and the people inside it.
              </p>
              <WindowTrigger
                kind="profile"
                className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-strong"
              >
                Read the fuller profile <ArrowUpRight size={16} />
              </WindowTrigger>
            </div>
          </Container>
        </section>

        <section id="journey" className="section-rule py-24 sm:py-32">
          <Container>
            <SectionHeading
              eyebrow="02 / Journey"
              title="Progress measured in responsibility."
            />
            <ol className="mt-16 border-t border-border">
              {journey.map((item) => (
                <li
                  key={item.id}
                  className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-5 border-b border-border py-8 md:grid-cols-[11rem_1fr_auto] md:items-start md:gap-8"
                >
                  <div>
                    <p className="text-xs leading-5 text-muted-ink">{item.period}</p>
                    <div className="mt-4 flex min-h-9 items-center gap-3">
                      {item.id === "teacher" ? (
                        <GraduationCap size={32} strokeWidth={1.35} className="journey-logo text-accent" aria-label="Teaching" />
                      ) : journeyVisuals[item.id]?.map((visual) => (
                        <ResilientImage key={visual.src} src={visual.src} alt={visual.alt} width={96} height={48} className="journey-logo h-9 w-auto max-w-[5.75rem] object-contain object-left" />
                      ))}
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <h3 className="text-xl font-medium tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-ink">
                      {item.organization}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-ink">
                      {item.summary}
                    </p>
                  </div>
                  <WindowTrigger
                    kind="experience"
                    contentId={item.id}
                    ariaLabel={`Open details for ${item.title}`}
                    className="row-start-1 col-start-2 flex size-11 items-center justify-center rounded-full border border-border text-muted-ink transition-colors hover:border-border-strong hover:text-ink md:col-start-3"
                  >
                    <ArrowUpRight size={17} />
                  </WindowTrigger>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section
          id="projects"
          className="section-rule bg-surface py-24 sm:py-32"
        >
          <Container>
            <SectionHeading
              eyebrow="03 / Selected projects"
              title="I’ve built a few things worth showing."
            />
            <div className="mt-16 space-y-4">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="group grid gap-8 border border-border bg-background p-6 transition-colors hover:border-border-strong sm:p-8 lg:grid-cols-[5rem_1fr_1fr_auto] lg:items-start"
                >
                  <span className="font-heading text-sm text-accent">
                    {project.index}
                  </span>
                  <div>
                    <p className="text-xs text-muted-ink">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="mt-3 text-3xl font-medium tracking-[-0.035em]">
                      {project.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm leading-7 text-muted-ink">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {project.stack.slice(0, 4).map((technology) => (
                        <TechLabel key={technology} technology={technology} />
                      ))}
                    </div>
                  </div>
                  <WindowTrigger
                    kind="project"
                    contentId={project.slug}
                    ariaLabel={`Open ${project.title} case study`}
                    className="flex size-12 items-center justify-center rounded-full border border-border text-muted-ink transition-all group-hover:border-border-strong group-hover:text-ink"
                  >
                    <ArrowUpRight size={18} />
                  </WindowTrigger>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="skills" className="section-rule py-24 sm:py-32">
          <Container>
            <SectionHeading
              eyebrow="04 / Capabilities"
              title="Backend first, fullstack when needed."
            />
            <div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {skillCategories.map((category) => (
                <article
                  key={category.id}
                  className="border-b border-border p-6 sm:border-r"
                >
                  <h3 className="text-lg font-medium">{category.label}</h3>
                  <ul className="mt-6 space-y-2">
                    {category.items.map((item) => (
                      <li key={item}>
                        <TechLabel technology={item} variant="list" />
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="section-rule py-24 sm:py-36">
          <Container>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-accent pb-5">
              05 / Contact
            </p>
            <CursorRevealHeading className="max-w-5xl text-balance text-[clamp(3.6rem,10vw,6rem)] font-medium leading-[0.84] tracking-[-0.065em]">
              Have a problem worth giving a clear shape?
            </CursorRevealHeading>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={`mailto:${contactEmail}`}>
                Email Mahesa <ArrowUpRight size={16} />
              </Button>
            </div>
          </Container>
        </section>

        <footer className="border-t border-border py-7">
          <Container className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-ink">
            <p>Mahesa Yuztar · Software Engineer</p>
            <a href="#top" className="hover:text-ink">
              Back to top
            </a>
          </Container>
        </footer>
      </main>
    </WindowProvider>
  );
}
