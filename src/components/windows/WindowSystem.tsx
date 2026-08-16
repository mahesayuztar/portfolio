"use client";

import { achievements, certificates } from "@/data/achievements";
import { journey } from "@/data/journey";
import { projects } from "@/data/projects";
import { contactEmail } from "@/data/social";
import { TechLabel } from "@/components/ui/TechLabel";
import { ArrowUpRight, GripHorizontal, ImageIcon, RotateCcw, X } from "lucide-react";
import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Rnd } from "react-rnd";

type WindowKind = "profile" | "experience" | "project" | "achievement" | "credentials" | "beyond" | "contact";

type WindowRequest = {
  kind: WindowKind;
  contentId?: string;
};

type OpenWindow = WindowRequest & {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
};

type WindowContextValue = {
  openWindow: (request: WindowRequest, trigger: HTMLButtonElement) => void;
};

const WindowContext = createContext<WindowContextValue | null>(null);

const windowDefaults: Record<WindowKind, { width: number; height: number }> = {
  profile: { width: 560, height: 520 },
  experience: { width: 620, height: 540 },
  project: { width: 760, height: 620 },
  achievement: { width: 620, height: 560 },
  credentials: { width: 620, height: 620 },
  beyond: { width: 720, height: 610 },
  contact: { width: 480, height: 340 },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function getWindowTitle(windowItem: OpenWindow) {
  if (windowItem.kind === "experience") return journey.find((item) => item.id === windowItem.contentId)?.title ?? "Experience";
  if (windowItem.kind === "project") return projects.find((item) => item.slug === windowItem.contentId)?.title ?? "Project";
  if (windowItem.kind === "achievement") return achievements.find((item) => item.id === windowItem.contentId)?.event ?? "Achievement";
  const titles: Record<Exclude<WindowKind, "experience" | "project" | "achievement">, string> = {
    profile: "About Mahesa",
    credentials: "Credentials & learning",
    beyond: "Beyond the code",
    contact: "Start a conversation",
  };
  return titles[windowItem.kind];
}

function WindowContent({ windowItem }: { windowItem: OpenWindow }) {
  if (windowItem.kind === "profile") {
    return (
      <div className="space-y-7">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-accent">Profile</p>
          <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em]">Engineering with a human point of view.</h3>
        </div>
        <div className="space-y-4 text-sm leading-7 text-muted-ink">
          <p>I am an Informatics Engineering graduate from Universitas Negeri Malang with a 3.90 GPA. My path crosses backend systems, product interfaces, data, infrastructure, robotics, and teaching.</p>
          <p>I enjoy the part of software work where an unclear operational problem becomes a system people can understand and maintain. Teaching made me more deliberate with explanation; robotics taught me to respect physical constraints; client work taught me to negotiate between what is requested and what will actually scale.</p>
        </div>
        <dl className="grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
          <div><dt className="text-xs text-faint-ink">Based in</dt><dd className="mt-1 text-sm">Malang, Indonesia</dd></div>
          <div><dt className="text-xs text-faint-ink">Education</dt><dd className="mt-1 text-sm">B.Eng. Informatics, 2026</dd></div>
          <div><dt className="text-xs text-faint-ink">Current direction</dt><dd className="mt-1 text-sm">Backend & fullstack systems</dd></div>
          <div><dt className="text-xs text-faint-ink">English</dt><dd className="mt-1 text-sm">TOEFL ITP 553</dd></div>
        </dl>
      </div>
    );
  }

  if (windowItem.kind === "experience") {
    const item = journey.find((journeyItem) => journeyItem.id === windowItem.contentId);
    if (!item) return null;
    return (
      <article>
        <p className="text-sm text-accent">{item.period}</p>
        <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em]">{item.title}</h3>
        <p className="mt-1 text-sm text-muted-ink">{item.organization}</p>
        <div className="mt-8 space-y-7 border-t border-border pt-7">
          <div><p className="text-xs uppercase tracking-[0.15em] text-faint-ink">Context</p><p className="mt-2 text-sm leading-7 text-muted-ink">{item.whatHappened}</p></div>
          <div><p className="text-xs uppercase tracking-[0.15em] text-faint-ink">Work</p><p className="mt-2 text-sm leading-7 text-muted-ink">{item.whatIWorked}</p></div>
          <div><p className="text-xs uppercase tracking-[0.15em] text-faint-ink">What stayed with me</p><p className="mt-2 text-sm leading-7 text-ink">{item.whatILearned}</p></div>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">{item.tech.map((technology) => <TechLabel key={technology} technology={technology} />)}</div>
      </article>
    );
  }

  if (windowItem.kind === "project") {
    const project = projects.find((projectItem) => projectItem.slug === windowItem.contentId);
    if (!project) return null;
    return (
      <article>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div><p className="text-sm text-accent">{project.category} · {project.year}</p><h3 className="mt-3 text-4xl font-medium tracking-[-0.04em]">{project.title}</h3></div>
          <p className="text-sm text-muted-ink">{project.role}</p>
        </div>
        <p className="mt-7 max-w-2xl text-base leading-8 text-muted-ink">{project.longDescription}</p>
        <div className="mt-9">
          {project.mockups.length > 0 ? (
            <div className="grid gap-4">
              {project.mockups.map((mockup, _index) => (
                <figure key={mockup.src} className="overflow-hidden rounded-md border border-border bg-surface">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3"><span className="text-xs text-muted-ink">Visual study {String(_index + 1).padStart(2, "0")}</span><span className="text-[10px] uppercase tracking-[0.16em] text-faint-ink">Project mockup</span></div>
                  <Image src={mockup.src} alt={mockup.alt} width={1440} height={900} className="aspect-[16/10] w-full object-cover" />
                </figure>
              ))}
            </div>
          ) : (
            <div className="overflow-hidden rounded-md border border-border bg-surface">
              <div className="flex items-center justify-between border-b border-border px-4 py-3"><span className="text-xs text-muted-ink">Visual study 01</span><span className="text-[10px] uppercase tracking-[0.16em] text-faint-ink">Reserved for mockup</span></div>
              <div className="flex aspect-[16/9] flex-col items-center justify-center px-6 text-center">
                <span className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-accent"><ImageIcon size={17} aria-hidden /></span>
                <p className="mt-4 text-sm font-medium text-ink">Project interface or product mockup</p>
                <p className="mt-2 max-w-md font-mono text-[10px] leading-5 text-faint-ink">/public/images/projects/{project.slug}/mockup-01.webp</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
          <div><p className="text-xs uppercase tracking-[0.15em] text-faint-ink">Problem</p><p className="mt-3 text-sm leading-7 text-muted-ink">{project.problem}</p></div>
          <div><p className="text-xs uppercase tracking-[0.15em] text-faint-ink">Approach</p><p className="mt-3 text-sm leading-7 text-muted-ink">{project.solution}</p></div>
        </div>
        <div className="mt-9"><p className="text-xs uppercase tracking-[0.15em] text-faint-ink">Selected scope</p><ul className="mt-4 grid gap-3 sm:grid-cols-2">{project.highlights.map((highlight) => <li key={highlight} className="border-l border-border-strong pl-3 text-sm text-ink">{highlight}</li>)}</ul></div>
        <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2">{project.stack.map((technology) => <TechLabel key={technology} technology={technology} />)}</div>
      </article>
    );
  }

  if (windowItem.kind === "achievement") {
    const achievement = achievements.find((item) => item.id === windowItem.contentId);
    if (!achievement) return null;
    return (
      <article>
        {achievement.image && achievement.imageAlt && <Image src={achievement.image} alt={achievement.imageAlt} width={1200} height={900} className="mb-7 aspect-[4/3] w-full rounded-md object-cover" />}
        <p className="text-sm text-accent">{achievement.year}</p>
        <h3 className="mt-2 text-3xl font-medium tracking-[-0.03em]">{achievement.title}</h3>
        <p className="mt-2 text-sm text-muted-ink">{achievement.event}</p>
        <p className="mt-7 border-t border-border pt-7 text-sm leading-7 text-muted-ink">{achievement.context}</p>
      </article>
    );
  }

  if (windowItem.kind === "credentials") {
    return (
      <div>
        <p className="text-sm text-accent">Selected learning</p>
        <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em]">Credentials with a reason behind them.</h3>
        <p className="mt-4 text-sm leading-7 text-muted-ink">A curated record of learning across data, infrastructure, and communication—not a wall of badges.</p>
        <ul className="mt-8 divide-y divide-border border-y border-border">{certificates.map((certificate) => <li key={certificate.id} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto]"><div><p className="text-sm font-medium">{certificate.title}</p><p className="mt-1 text-xs text-muted-ink">{certificate.issuer}</p></div><span className="text-xs text-faint-ink">{certificate.year}</span></li>)}</ul>
      </div>
    );
  }

  if (windowItem.kind === "beyond") {
    return (
      <div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Image src="/images/mahesa-robotics.jpg" alt="Mahesa speaking while wearing his humanoid robotics team uniform" width={900} height={1200} className="aspect-[4/5] w-full rounded-md object-cover object-top" />
          <Image src="/images/uitm-gpbl.jpg" alt="Mahesa receiving recognition at the UiTM Penang Global Project Based Learning program" width={1200} height={1600} className="aspect-[4/5] w-full rounded-md object-cover" />
        </div>
        <h3 className="mt-8 text-3xl font-medium tracking-[-0.03em]">Software is only one way I solve problems.</h3>
        <p className="mt-4 text-sm leading-7 text-muted-ink">Robotics taught me to debug systems that can fail physically. Teaching trained me to make difficult ideas approachable. Competitive bridge sharpened strategic thinking with incomplete information. International collaboration made communication part of the technical work itself.</p>
        <div className="mt-7 grid gap-4 border-t border-border pt-6 sm:grid-cols-3"><div><p className="text-xs text-faint-ink">2023–2025</p><p className="mt-1 text-sm">Dewantara Research Team</p></div><div><p className="text-xs text-faint-ink">2025–2026</p><p className="mt-1 text-sm">Basreng Basah Nusantara</p></div><div><p className="text-xs text-faint-ink">2022–2023</p><p className="mt-1 text-sm">Forum Mahasiswa Pasuruan</p></div></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-48 flex-col justify-between">
      <div><p className="text-sm text-accent">Contact</p><h3 className="mt-3 text-3xl font-medium tracking-[-0.03em]">Have a useful problem to solve?</h3><p className="mt-4 text-sm leading-7 text-muted-ink">Tell me about the system, the constraint, or the process that needs a clearer shape.</p></div>
      <a href={`mailto:${contactEmail}`} className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-strong">{contactEmail}<ArrowUpRight size={16} /></a>
    </div>
  );
}

function WindowFrame({ windowItem, isActive, closeWindow, focusWindow, updateWindow, isMobile }: { windowItem: OpenWindow; isActive: boolean; closeWindow: (id: string) => void; focusWindow: (id: string) => void; updateWindow: (id: string, patch: Partial<OpenWindow>) => void; isMobile: boolean }) {
  const title = getWindowTitle(windowItem);
  const content = (
    <section role={isMobile ? "dialog" : "region"} aria-modal={isMobile || undefined} aria-labelledby={`${windowItem.id}-title`} className={`flex h-full flex-col overflow-hidden rounded-[14px] border bg-window window-shadow ${isActive ? "border-border-strong" : "border-border"}`}>
      <div className="window-handle flex min-h-12 shrink-0 cursor-grab items-center justify-between gap-4 border-b border-border bg-surface px-4 active:cursor-grabbing">
        <div className="flex min-w-0 items-center gap-3"><GripHorizontal size={15} className="shrink-0 text-faint-ink" aria-hidden /><h2 id={`${windowItem.id}-title`} className="truncate text-sm font-medium">{title}</h2></div>
        <button type="button" onClick={() => closeWindow(windowItem.id)} className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-ink transition-colors hover:bg-surface-raised hover:text-ink" aria-label={`Close ${title}`}><X size={17} /></button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-7"><WindowContent windowItem={windowItem} /></div>
    </section>
  );

  if (isMobile) return <div className="fixed inset-x-3 bottom-3 top-12 z-[1001] animate-[window-in_180ms_ease-out]">{content}</div>;

  return (
    <Rnd bounds="window" dragHandleClassName="window-handle" size={{ width: windowItem.width, height: windowItem.height }} position={{ x: windowItem.x, y: windowItem.y }} minWidth={360} minHeight={280} maxWidth="94vw" maxHeight="88vh" style={{ zIndex: windowItem.zIndex, position: "fixed", pointerEvents: "auto" }} onMouseDown={() => focusWindow(windowItem.id)} onDragStart={() => focusWindow(windowItem.id)} onDragStop={(_event, data) => updateWindow(windowItem.id, { x: data.x, y: data.y })} onResizeStop={(_event, _direction, ref, _delta, position) => updateWindow(windowItem.id, { width: ref.offsetWidth, height: ref.offsetHeight, ...position })}>{content}</Rnd>
  );
}

export function WindowProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<OpenWindow[]>([]);
  const triggerRefs = useRef(new Map<string, HTMLButtonElement>());
  const isMobile = useIsMobile();
  const activeWindow = windows.reduce<OpenWindow | null>((active, item) => !active || item.zIndex > active.zIndex ? item : active, null);

  const focusWindow = useCallback((id: string) => {
    setWindows((current) => {
      const maxZIndex = Math.max(0, ...current.map((item) => item.zIndex));
      return current.map((item) => item.id === id ? { ...item, zIndex: maxZIndex + 1 } : item);
    });
  }, []);

  const closeWindow = useCallback((id: string) => {
    setWindows((current) => current.filter((item) => item.id !== id));
    window.setTimeout(() => triggerRefs.current.get(id)?.focus(), 0);
  }, []);

  const openWindow = useCallback((request: WindowRequest, trigger: HTMLButtonElement) => {
    const id = `${request.kind}-${request.contentId ?? "main"}`;
    triggerRefs.current.set(id, trigger);
    setWindows((current) => {
      const existing = current.find((item) => item.id === id);
      const maxZIndex = Math.max(0, ...current.map((item) => item.zIndex));
      if (existing) return current.map((item) => item.id === id ? { ...item, zIndex: maxZIndex + 1 } : item);
      const defaults = windowDefaults[request.kind];
      const offset = current.length % 5;
      return [...current, { ...request, id, x: Math.max(12, Math.min(window.innerWidth - defaults.width - 24, 70 + offset * 34)), y: Math.max(68, Math.min(window.innerHeight - defaults.height - 24, 72 + offset * 28)), ...defaults, zIndex: maxZIndex + 1 }];
    });
  }, []);

  const updateWindow = useCallback((id: string, patch: Partial<OpenWindow>) => setWindows((current) => current.map((item) => item.id === id ? { ...item, ...patch } : item)), []);

  useEffect(() => {
    document.body.dataset.windowOpen = windows.length > 0 && isMobile ? "true" : "false";
    return () => { delete document.body.dataset.windowOpen; };
  }, [isMobile, windows.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeWindow) closeWindow(activeWindow.id);
      if (event.key === "Tab" && isMobile && activeWindow) {
        const dialog = document.querySelector<HTMLElement>(`[aria-labelledby="${activeWindow.id}-title"]`);
        const focusable = dialog?.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeWindow, closeWindow, isMobile]);

  useEffect(() => {
    if (!isMobile || !activeWindow) return;
    const dialog = document.querySelector<HTMLElement>(`[aria-labelledby="${activeWindow.id}-title"]`);
    window.setTimeout(() => dialog?.querySelector<HTMLElement>("button")?.focus(), 0);
  }, [activeWindow, isMobile]);

  return (
    <WindowContext.Provider value={{ openWindow }}>
      {children}
      {windows.length > 0 && <div className={`fixed inset-0 z-[999] ${isMobile ? "bg-[var(--overlay)]" : "pointer-events-none"}`} aria-hidden />}
      <div className="fixed inset-0 z-[1000] pointer-events-none" aria-live="polite">
        {windows
          .filter((windowItem) => !isMobile || windowItem.id === activeWindow?.id)
          .map((windowItem) => <WindowFrame key={windowItem.id} windowItem={windowItem} isActive={activeWindow?.id === windowItem.id} closeWindow={closeWindow} focusWindow={focusWindow} updateWindow={updateWindow} isMobile={isMobile} />)}
      </div>
      {!isMobile && windows.length > 1 && <button type="button" onClick={() => setWindows([])} className="fixed bottom-5 right-5 z-[2000] inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 text-xs text-muted-ink shadow-lg hover:text-ink"><RotateCcw size={14} />Close workspace</button>}
    </WindowContext.Provider>
  );
}

export function WindowTrigger({ kind, contentId, children, className = "", ariaLabel }: WindowRequest & { children: ReactNode; className?: string; ariaLabel?: string }) {
  const context = useContext(WindowContext);
  if (!context) throw new Error("WindowTrigger must be used within WindowProvider");
  return <button type="button" className={className} aria-label={ariaLabel} onClick={(event) => context.openWindow({ kind, contentId }, event.currentTarget)}>{children}</button>;
}
