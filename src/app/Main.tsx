import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { WindowProvider, WindowTrigger } from "@/components/windows/WindowSystem";
import { achievements } from "@/data/achievements";
import { journey } from "@/data/journey";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { contactEmail } from "@/data/social";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import Image from "next/image";

const navigationItems = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Main() {
  return (
    <WindowProvider>
      <main id="top" className="overflow-x-clip">
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
          <Container className="flex min-h-16 items-center justify-between gap-6">
            <a href="#top" className="font-heading text-sm font-medium tracking-tight">Mahesa Yuztar</a>
            <nav aria-label="Primary navigation" className="hidden md:block">
              <ul className="flex items-center gap-6">{navigationItems.map((item) => <li key={item.href}><a href={item.href} className="text-xs text-muted-ink transition-colors hover:text-ink">{item.label}</a></li>)}</ul>
            </nav>
            <div className="flex items-center gap-3">
              <a href={`mailto:${contactEmail}`} className="hidden text-xs text-accent transition-colors hover:text-accent-strong sm:block">Available for a conversation</a>
              <ThemeToggle />
            </div>
          </Container>
        </header>

        <section className="relative min-h-[calc(100svh-4rem)] py-16 sm:py-24">
          <Container className="grid min-h-[calc(100svh-12rem)] items-end gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
            <div>
              <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-ink"><span className="size-2 rounded-full bg-accent" />Software engineer · Malang, Indonesia</p>
              <h1 className="max-w-5xl text-balance text-[clamp(3.6rem,10vw,8.8rem)] font-medium leading-[0.84] tracking-[-0.065em]">Building useful systems from unclear problems.</h1>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="#projects">Explore selected work <ArrowDown size={16} /></Button>
                <WindowTrigger kind="profile" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm text-ink transition-colors hover:border-border-strong hover:bg-surface-raised">Open profile <MoveUpRight size={16} /></WindowTrigger>
              </div>
            </div>
            <div className="border-l border-border pl-5">
              <p className="text-sm leading-7 text-muted-ink">Backend depth, fullstack range, and a working style shaped by client systems, teaching, data, and robotics.</p>
              <p className="mt-5 text-xs text-faint-ink">The detail views on this site are real windows. Open one, move it, close it, and continue reading.</p>
            </div>
          </Container>
        </section>

        <section id="about" className="section-rule py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionHeading eyebrow="01 / About" title="Software is the medium. Clarity is the work." />
            <div className="self-end">
              <p className="max-w-2xl text-xl leading-9 tracking-[-0.015em] text-ink">I work across backend systems, interfaces, data, infrastructure, and the practical space between a client&apos;s request and a maintainable product.</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-ink">My route into software includes teaching algorithms, monitoring industrial infrastructure, leading an international robotics team, and building production Laravel systems. Each made me better at seeing the whole system—and the people inside it.</p>
              <WindowTrigger kind="profile" className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-strong">Read the fuller profile <ArrowUpRight size={16} /></WindowTrigger>
            </div>
          </Container>
        </section>

        <section id="journey" className="section-rule py-24 sm:py-32">
          <Container>
            <SectionHeading eyebrow="02 / Journey" title="Progress measured in responsibility." subtitle="A selected timeline of work that changed how I build, explain, and collaborate." />
            <ol className="mt-16 border-t border-border">
              {journey.map((item, _index) => (
                <li key={item.id} className="grid gap-5 border-b border-border py-8 md:grid-cols-[3rem_11rem_1fr_auto] md:items-start md:gap-8">
                  <span className="font-heading text-xs text-faint-ink">{String(_index + 1).padStart(2, "0")}</span>
                  <p className="text-xs leading-5 text-muted-ink">{item.period}</p>
                  <div><h3 className="text-xl font-medium tracking-[-0.02em]">{item.title}</h3><p className="mt-1 text-sm text-muted-ink">{item.organization}</p><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-ink">{item.summary}</p></div>
                  <WindowTrigger kind="experience" contentId={item.id} ariaLabel={`Open details for ${item.title}`} className="flex size-11 items-center justify-center rounded-full border border-border text-muted-ink transition-colors hover:border-border-strong hover:text-ink"><ArrowUpRight size={17} /></WindowTrigger>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section id="projects" className="section-rule bg-surface py-24 sm:py-32">
          <Container>
            <SectionHeading eyebrow="03 / Selected projects" title="Built around an actual need." subtitle="Four products where the interesting work lived in flows, constraints, and technical decisions—not just the screen." />
            <div className="mt-16 space-y-4">
              {projects.map((project) => (
                <article key={project.slug} className="group grid gap-8 border border-border bg-background p-6 transition-colors hover:border-border-strong sm:p-8 lg:grid-cols-[5rem_1fr_1fr_auto] lg:items-start">
                  <span className="font-heading text-sm text-accent">{project.index}</span>
                  <div><p className="text-xs text-muted-ink">{project.category} · {project.year}</p><h3 className="mt-3 text-3xl font-medium tracking-[-0.035em]">{project.title}</h3></div>
                  <div><p className="text-sm leading-7 text-muted-ink">{project.description}</p><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{project.stack.slice(0, 4).map((technology) => <Badge key={technology}>{technology}</Badge>)}</div></div>
                  <WindowTrigger kind="project" contentId={project.slug} ariaLabel={`Open ${project.title} case study`} className="flex size-12 items-center justify-center rounded-full border border-border text-muted-ink transition-all group-hover:border-border-strong group-hover:text-ink"><ArrowUpRight size={18} /></WindowTrigger>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="achievements" className="section-rule py-24 sm:py-32">
          <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><SectionHeading eyebrow="04 / Recognition" title="Evidence of the thinking behind the work." /><Image src="/images/mcf-itb.jpg" alt="Mahesa and his team at the MCF ITB award ceremony" width={1200} height={900} className="mt-10 aspect-[4/3] w-full rounded-md object-cover" /></div>
            <div className="self-end border-t border-border">
              {achievements.map((achievement) => <div key={achievement.id} className="grid grid-cols-[1fr_auto] gap-5 border-b border-border py-6"><div><p className="text-xs text-accent">{achievement.year}</p><h3 className="mt-2 text-xl font-medium">{achievement.title}</h3><p className="mt-1 text-sm text-muted-ink">{achievement.event}</p></div><WindowTrigger kind="achievement" contentId={achievement.id} ariaLabel={`Open ${achievement.event} details`} className="flex size-10 items-center justify-center rounded-full text-muted-ink hover:text-ink"><ArrowUpRight size={16} /></WindowTrigger></div>)}
              <WindowTrigger kind="credentials" className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-strong">View selected credentials <ArrowUpRight size={16} /></WindowTrigger>
            </div>
          </Container>
        </section>

        <section id="skills" className="section-rule py-24 sm:py-32">
          <Container>
            <SectionHeading eyebrow="05 / Capabilities" title="Tools connected to work performed." />
            <div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {skillCategories.map((category) => <article key={category.id} className="border-b border-border p-6 sm:border-r"><h3 className="text-lg font-medium">{category.label}</h3><p className="mt-3 min-h-20 text-sm leading-6 text-muted-ink">{category.description}</p><ul className="mt-6 space-y-2">{category.items.map((item) => <li key={item} className="text-sm text-ink">{item}</li>)}</ul></article>)}
            </div>
          </Container>
        </section>

        <section className="section-rule bg-surface py-24 sm:py-32">
          <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div><p className="font-heading text-xs uppercase tracking-[0.2em] text-accent">06 / Beyond code</p><h2 className="mt-5 max-w-3xl text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.05em]">Robots, classrooms, cards, and collaboration.</h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-ink">Robotics, teaching, competitive bridge, and international teamwork are not side notes. They shaped how I reason under pressure and work with people.</p><WindowTrigger kind="beyond" className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-strong">Open the personal chapter <ArrowUpRight size={16} /></WindowTrigger></div>
            <Image src="/images/mahesa-robotics.jpg" alt="Mahesa speaking in his humanoid robotics team uniform" width={900} height={1200} className="aspect-[4/5] max-h-[42rem] w-full rounded-md object-cover object-top" />
          </Container>
        </section>

        <section id="contact" className="section-rule py-24 sm:py-36">
          <Container>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-accent">07 / Contact</p>
            <h2 className="mt-5 max-w-5xl text-balance text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">Have a problem worth giving a clear shape?</h2>
            <div className="mt-10 flex flex-wrap gap-3"><Button href={`mailto:${contactEmail}`}>Email Mahesa <ArrowUpRight size={16} /></Button><WindowTrigger kind="contact" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm hover:border-border-strong hover:bg-surface-raised">Open contact window</WindowTrigger></div>
          </Container>
        </section>

        <footer className="border-t border-border py-7"><Container className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-ink"><p>Mahesa Yuztar · Software Engineer</p><p>Designed as a workspace, built as a story.</p><a href="#top" className="hover:text-ink">Back to top</a></Container></footer>
      </main>
    </WindowProvider>
  );
}
