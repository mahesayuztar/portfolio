# Portfolio Website Plan

## 1. Product Vision

Build a personal profile website for Mahesa Yuztar whose main attraction is a set of real interactive content windows. The windows are not decorative cards: visitors can open, focus, drag, resize where useful, close, and reopen them to explore deeper information about Mahesa.

The site should feel like an elegant personal workspace rather than a fake operating system, SaaS dashboard, or generic developer portfolio. Its character comes from typography, composition, restrained dark colors, useful motion, and the behavior of the windows.

The primary experience remains a vertically flowing one-page profile. Essential identity, experience, project names, achievements, and contact information stay visible in semantic page content for accessibility and SEO. Windows provide richer stories, evidence, images, and supporting detail.

## 2. Experience Principles

- Elegant, minimal, professional, personal, and slightly playful.
- Dark mode is the primary visual direction; a light theme may be added only after the dark experience is complete.
- No gradients, glassmorphism, neon glow, decorative blobs, fake terminal, fake browser chrome, or ornamental traffic-light controls.
- Window chrome exists only because the content is genuinely interactive. Every control must work.
- The page introduces Mahesa first. Technology is supporting evidence, not the hero message.
- Animation must clarify opening, focus, movement, closing, and section transitions.
- Important content must never be available only through client-side windows.
- Mobile is an intentional adaptation, not a squeezed desktop canvas.
- Private documents are research sources, not automatically public assets.

## 3. Core Experience

### 3.1 Page layer

The base page tells a concise professional story:

1. Compact navigation
2. Hero / identity
3. About / current direction
4. Journey / experience
5. Selected projects
6. Achievements and selected credentials
7. Skills / working capabilities
8. Beyond code
9. Contact
10. Understated footer

Each section contains enough visible information to stand on its own and includes contextual triggers for relevant detail windows. Do not cluster all window launchers in the hero.

### 3.2 Window layer

Desktop windows should support:

- open from the section that owns the content;
- close and reopen without losing the rest of the page;
- drag from a clear title-bar handle;
- bring-to-front on pointer or keyboard interaction;
- constrained movement so the title bar cannot become unreachable;
- content-aware sizes instead of one universal size;
- resize only when it benefits the content;
- scrollable content with a stationary, compact title bar;
- sensible cascading positions when several windows are open;
- reset/rearrange action when the workspace becomes cluttered;
- Escape to close the active window and reliable focus restoration;
- state persistence only if it improves repeat visits; never let stale coordinates break a changed viewport.

Do not implement non-functional minimize or maximize controls. A close control with an accessible label is required. A resize handle is preferable to extra decorative chrome.

Suggested window types:

| Window | Purpose | Suggested size |
| --- | --- | --- |
| Profile | Extended introduction, focus, personal working philosophy | Medium |
| Experience | Responsibilities, learning, and impact for one role | Medium / large |
| Project case study | Problem, role, technical decisions, outcome, gallery, links | Wide / tall |
| Achievement | Context, significance, and supporting image | Medium |
| Credentials | Curated certifications grouped by capability | Medium / tall |
| Beyond code | Robotics, teaching, bridge, collaboration, organizations | Medium |
| Contact | Email and verified external profiles | Small |

### 3.3 Mobile behavior

At small breakpoints, free dragging and arbitrary resizing should be disabled. Windows become accessible modal sheets or near-fullscreen panels with:

- a visible close button;
- a sticky title bar;
- internal scrolling;
- safe viewport height and device inset handling;
- focus trap and focus restoration;
- the same content and information hierarchy as desktop.

Do not render every window permanently in a vertical stack. The page itself already provides the mobile narrative; detail opens on demand.

## 4. Visual Direction

### 4.1 Dark design system

The current `globals.css` palette is light pastel and should be deliberately revised before component styling. Define semantic tokens for at least:

- page background;
- elevated surface;
- window surface;
- title-bar surface;
- primary text;
- muted text;
- subtle border;
- strong border / active window;
- one restrained personal accent;
- focus ring;
- success or availability state;
- overlay / scrim for mobile.

Use flat colors only. Favor deep neutral charcoal or ink over pure black, warm off-white text over pure white, and one muted accent that can reference the existing purple/pink personality without preserving the current pastel look wholesale. Verify contrast before finalizing tokens.

Radius and shadow should be restrained. Active-window hierarchy can be expressed with border contrast and a small, soft elevation; inactive windows should recede without becoming translucent glass.

### 4.2 Typography and composition

- Keep Space Grotesk and Plus Jakarta Sans initially; reevaluate only if real content shows a clear need.
- Use large editorial type in the hero, compact labels, readable long-form window content, and controlled line lengths.
- Avoid repeating the same rounded-card grid in every section.
- Suggested variation: editorial hero, two-column profile, vertical journey, large project rows, structured achievement list, typographic skill groups, minimal contact ending.

### 4.3 Motion

- Window open: short scale/opacity/position transition from its trigger context.
- Window focus: subtle border/elevation response.
- Drag: immediate tracking with no spring lag; a small lift is acceptable.
- Close: brief reverse transition, then restore focus.
- Section reveal: limited to meaningful hierarchy, not every child element.
- Hover: never the only method of discovering or opening content.
- Respect `prefers-reduced-motion`; dragging remains functional without decorative animation.

## 5. Content Source Audit

### 5.1 Sources reviewed

- `public/CV Mahesa Yuztar 16 Maret 2026.docx`
- `public/Portofolio Webdev English.pdf`
- Existing structured content in `src/data`
- Existing and deleted window implementation visible in Git (`ModalContext`, `Modal`, `WindowChrome`, content windows, and related types/hooks)
- File inventory from `D:/Dokumen Pribadi`, especially recent CV/portfolio variants and `Foto diri`
- File inventory from `D:/Sertifikat`, including competition, robotics, teaching, conference, networking, Oracle, and DQLab evidence

The DOCX is the newest authoritative résumé source. The portfolio PDF and existing project data provide project narratives and technology details. Certificate filenames provide evidence and additional candidate milestones, but their exact public wording must be verified from the underlying certificate before publication.

### 5.2 Public-safety rule

Never expose KTP, KTM, student ID, phone number, home address, signatures, transcripts, diplomas, application letters, recommendation letters, health documents, scholarship portal files, or credential IDs by default. The phone number and certificate IDs found in the CV are intentionally excluded from the planned public UI. Copy only selected approved images or public-facing documents into `public` when implementation reaches that content.

## 6. Content Inventory

### 6.1 Identity and positioning

- Name: Mahesa Yuztar
- Location: Malang, Indonesia
- Primary positioning: Software Engineer / Fullstack Developer with backend depth
- Supporting domains: data analysis, robotics, IoT, infrastructure, teaching, and technical leadership
- Education: Bachelor of Informatics Engineering, Universitas Negeri Malang, 2022–2026
- GPA: 3.90 / 4.00
- Earlier education: SMA Negeri 1 Kota Pasuruan, Science, 2019–2022; omit from the main page unless it adds useful context
- English evidence: TOEFL ITP 553 (2026); present as supporting communication evidence, not a hero statistic
- Email: `mahesayuztar@gmail.com`
- GitHub, LinkedIn, résumé URL, project repositories, and live-project URLs are still unverified and must not ship as `#` placeholders

Recommended positioning copy direction:

> A software engineer who turns real operational needs into maintainable systems, shaped by backend work, teaching, robotics, and data.

Final copy should sound natural to Mahesa and must not overclaim seniority or outcomes.

### 6.2 Professional and formative journey

#### Backend Programmer — Solveit.id

- July 2025 – February 2026
- Developed and handled 7+ Laravel backend projects based on client requirements.
- Integrated Midtrans payment flows.
- Built a complex interactive CBT system.
- Migrated a system from Laravel 10 to Laravel 12, including middleware and authentication changes.
- Standardized team APIs toward RESTful conventions and maintainability.
- Translated client requirements into realistic and scalable technical solutions.
- This is the strongest professional experience and should lead the Journey section.

#### Teacher — Bimbingan Belajar Get Ready Malang

- September 2025 – December 2025
- Supported students with demanding non-academic schedules.
- Developed adaptive, directed learning methods.
- Improved one documented student's grade from C to B+ through consistent mentoring and evaluation.
- Use this to demonstrate communication, empathy, and measurable impact.

#### IT Intern — PLN Nusantara Power UP Brantas

- March 2025 – June 2025
- Supported server-house operations for province-level power-generation systems.
- Monitored servers and installed/configured switches and hubs.
- Learned and assisted with network administration and infrastructure troubleshooting in an industrial-energy environment.
- Do not imply responsibility for critical infrastructure beyond the documented internship scope.

#### Robotic Delegate / Team Lead — 2nd Global Project Based Learning, UiTM Penang

- August 2024 – September 2024
- International collaboration across Malaysia, Japan, and Indonesia.
- Used National Instruments equipment/engine in robot implementation.
- Built an automatic transporter robot that navigated environmental obstacles using EV3 color and distance sensing.
- Led troubleshooting, communication, and project execution.
- Strong candidate for a visual story using approved Malaysia/GPBL photos.

#### Teaching Assistant — Algorithms and Programming, DTEI UM

- January 2023 – June 2023
- Guided students in algorithm concepts using C++ and Python.
- Evaluated assignments and practical work.
- Helped students solve technical problems during lab sessions.

### 6.3 Selected projects

Prioritize four deeper web case studies on the initial release. The other documented projects can appear in an archive/list window after their facts and visuals are verified.

#### Mentorin — Education / CBT platform

- Role: Fullstack development
- Stack currently documented: Laravel, MySQL, Bootstrap, jQuery, Midtrans
- Need: reproduce real entrance-exam conditions rather than provide only a static question bank
- Scope: timed exams, authentication, payment, scoring, result recap, answer discussion, and VPS deployment
- Case-study angle: managing a high-complexity end-to-end learning and transaction flow

#### Solusi Desa — Civic complaint platform

- Role: Fullstack development
- Stack currently documented: Laravel, MySQL, Bootstrap, jQuery
- Need: let citizens submit public complaints with evidence and track what happens afterward
- Scope: image attachments, user complaint history, authentication, and integrated administration/response tools
- Case-study angle: closing the feedback loop between citizens and administrators

#### FruitGuard+ — Commercial innovation website

- Role: Fullstack development
- Stack currently documented: HTML, Tailwind CSS, jQuery, Netlify
- Need: clearly communicate a product innovation to potential adopters
- Scope: responsive information architecture and lightweight deployment
- Case-study angle: translating a technical innovation into a usable public narrative

#### Govind Abra Enterprise — Company and certification platform

- Role: Fullstack development
- Stack currently documented: Laravel, Tailwind CSS, MySQL, Docker, Laravel Sail, Midtrans
- Need: unify company profile, participant registration, certification administration, and payment
- Scope: registration, certification management, admin panel, automated payment, and containerized development/deployment
- Case-study angle: replacing disconnected operational tools with one maintainable platform

#### Additional documented projects requiring verification

- Skin-disease detection website using Learning Vector Quantization (LVQ)
- Citizen-utility and village-profile system for Bunulrejo, Malang
- Carrom Board and Shogi recreations with Pygame
- Local multiplayer shooting game with Pygame
- Learning information system for competitive programming

For every project, confirm dates, ownership/team context, role, actual stack, outcome, repository/live URL, and permission to publish screenshots before writing final copy. Remove placeholder images from the current data.

### 6.4 Achievements

Confirmed in the latest CV:

- 2nd place, Data Science Competition MCF ITB, 2024
- 1st place, East Java Provincial Open Pairs Bridge Championship, 2024
- 3rd place, Batu Mayor's Cup Junior Pairs Bridge, 2024
- Finalist, Kontes Robot Indonesia — KRSBI-H, 2024

Additional evidence found and worth validating:

- Presenter at a FORTEI / IEEE conference, 2024
- POMPROV participation or result, 2025
- GEMASTIK participation, 2022
- PCE and Fesmaro activities, 2023
- Copyright/IP documents for Sikomp and Bunulrejo projects

Present achievements as evidence of data reasoning, engineering persistence, public communication, and strategic thinking. Do not build a generic certificate gallery.

### 6.5 Certifications and learning

Selected certifications documented by the latest CV:

- IIEF — TOEFL ITP, score 553 (2026)
- IBM — Introduction to Data Science Specialization (2025)
- Cisco Networking Academy — Network Automation Engineering Fundamentals Specialization (2025)
- Oracle — Oracle Cloud Infrastructure Data Certified Foundations Associate (2025)
- IBM — Generative AI for Data Engineers Specialization (2025)
- DeepLearning.AI — Mathematics for Machine Learning and Data Science Specialization (2025)
- DQLab — Data Analyst Project: Business Decision Research (2025)
- Cisco Networking Academy — IT Essentials (2024)

The certificate archive also contains multiple DQLab certificates, Oracle files, AMD Classroom, Capstone, GPBL, and competition certificates. Curate by relevance; do not publish every item or expose certificate IDs unless explicitly desired.

### 6.6 Skills and capabilities

Group skills by work performed, not percentages or an oversized badge wall:

- Backend systems: Laravel, PHP, Golang, CodeIgniter, RESTful APIs, authentication, payment integration
- Frontend delivery: Next.js, React, TypeScript, Tailwind CSS, Bootstrap, jQuery
- Data and analysis: Python, SQL, SPSS, Microsoft Excel, RapidMiner, statistics
- Databases and delivery: MySQL, SQL Server where verified, Docker, Laravel Sail, Linux, VPS, Git
- Infrastructure: server monitoring, switches/hubs, networking fundamentals, troubleshooting
- Robotics and IoT: EV3, National Instruments tools, sensors, automation, hardware/software integration
- Human capabilities: requirement analysis, client communication, public speaking, teaching, leadership, international collaboration

Before publishing, reconcile Next.js/React/TypeScript claims with demonstrable projects and confirm any item currently present only in source code rather than the CV or portfolio.

### 6.7 Organizations and beyond-code narrative

- Basreng Basah Nusantara — Front Crew, 2025–2026
- Dewantara Research Team — Humanoid Soccer Robot Division, Programming subdivision, 2023–2025
- Forum Mahasiswa Pasuruan — Member, 2022–2023
- Bridge is a distinctive personal thread supported by two 2024 competitive achievements.
- Teaching, robotics, international teamwork, and bridge form a stronger personal story than a generic hobby list.

### 6.8 Candidate visual assets

Potentially useful, subject to review and explicit selection:

- `D:/Dokumen Pribadi/Foto diri/foto-gpbl.jpg`
- `D:/Dokumen Pribadi/Foto diri/foto_malaysia1.jpg`
- `D:/Dokumen Pribadi/Foto diri/foto_malaysia2.jpg`
- `D:/Dokumen Pribadi/Foto diri/foto_malaysia3.jpg`
- `D:/Dokumen Pribadi/Foto diri/mcf.jpg`
- `D:/Dokumen Pribadi/Foto diri/bawa piala.jpg`
- `D:/Dokumen Pribadi/Foto diri/fortei.jpg`
- `D:/Dokumen Pribadi/Foto diri/pce1.jpg` and related PCE photos
- `D:/Dokumen Pribadi/Foto diri/foto_pdh*.jpg` for a professional portrait option
- `D:/Dokumen Pribadi/Foto random/logo_mentorin.png`
- Approved certificate images from `D:/Sertifikat` for evidence inside achievement windows

Do not copy all source files. First inspect composition and resolution, choose only assets that strengthen a specific story, optimize them, give them meaningful names, and place the selected copies under a clear `public/images/...` structure.

## 7. Information Architecture and Window Mapping

| Page section | Visible content | Contextual window |
| --- | --- | --- |
| Hero | Name, positioning, location, primary actions | Optional short “currently” profile window only |
| About | Concise multidisciplinary story | Profile / working philosophy |
| Journey | Role, organization, date, one-line impact | One experience-detail window per selected role |
| Projects | Four curated project summaries | Wide case-study window per project |
| Achievements | Four verified achievements | Achievement story with approved evidence |
| Skills | Grouped capabilities connected to work | Credentials / learning window |
| Beyond code | Robotics, teaching, bridge, organizations | Personal story / photo window |
| Contact | Email and verified public links | Compact contact window if useful |

Keep window definitions data-driven enough to manage initial position, dimensions, type, and content identity, but keep actual section content close to its section. Do not create a generic abstraction that makes the UI hard to trace.

## 8. Technical Architecture

- Keep Next.js App Router and strict TypeScript.
- Render the page narrative primarily with Server Components.
- Place the interactive window manager behind the smallest practical client boundary.
- Reuse `react-rnd`, already installed, for desktop drag/resize unless accessibility or viewport constraints prove it unsuitable.
- Rebuild the previous window concepts carefully instead of blindly restoring deleted code. The prior version lacked a working close control, robust bounds, keyboard behavior, and a complete mobile modal experience.
- Use a reducer or cohesive state hook for window open/closed state, position, size, and z-order if it keeps transitions atomic and traceable.
- Separate static content records from ephemeral UI state.
- Store only serializable state. Never place React nodes in persisted window data.
- Validate persisted coordinates and sizes against the current viewport before applying them.
- Avoid adding another state, animation, or component library unless a concrete limitation is proven.

Suggested state shape:

```ts
type WindowState = {
  id: string;
  contentType: WindowContentType;
  contentId?: string;
  isOpen: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
};
```

Exact types should follow actual implementation needs; do not create separate types for trivial variations.

## 9. Accessibility Requirements

- Use semantic page sections and correct heading hierarchy.
- Window triggers must be buttons or links with clear accessible names.
- The close control must be a real button with a visible focus state.
- Announce window titles and associate them with their dialog/container.
- Desktop non-modal windows must remain reachable in a sensible keyboard order.
- Mobile modal windows must trap focus, close with Escape, and restore focus to their trigger.
- Dragging cannot be the only way to use or recover a window.
- Provide a reset/rearrange action usable by keyboard.
- Preserve sufficient text, border, and focus contrast in the dark theme.
- Images need contextual alt text; certificates that are only evidence may use concise descriptions rather than transcribing decorative details.

## 10. SEO and Metadata

- Keep name, professional role, selected experience, project names, and achievements in server-rendered page content.
- Update metadata to accurately reflect Mahesa's backend/fullstack focus and location.
- Add canonical metadata only after the production domain is known.
- Populate Open Graph/Twitter imagery using an intentional dark-theme composition.
- Add Person and WebSite structured data only with verified public URLs and profiles.
- Do not use structured data for certificates or projects unless the visible page supports the same claims.
- Ensure window content supplements rather than replaces indexable project summaries.

## 11. Implementation Roadmap

### Commit and delivery policy

- After every substantial, coherent change, create a commit and push it to `main` before starting the next major phase.
- Keep commits scoped so each checkpoint can be reviewed and reverted independently.
- Commit messages must use this exact pattern: `+/- Action actual message`.
- `Action` must start with a capital letter and be one of: `Add`, `Fix`, `Chore`, `Update`, `Remove`, or `Feat`.
- Use `+` for additions, features, fixes, chores, and updates; use `-` for removals.
- Examples: `+ Add portfolio implementation plan`, `+ Feat interactive window workspace`, `- Remove obsolete modal implementation`.
- Run checks appropriate to the changed scope before committing. Do not knowingly push broken lint, TypeScript, or build output.
- Push only project work related to this roadmap. Preserve unrelated user changes and never rewrite shared Git history.

### Phase 0 — Correct the baseline

- [ ] Preserve the current dirty worktree and review the unwanted last edit before changing implementation files.
- [ ] Decide which parts of the pre-edit window system are worth restoring and which require replacement.
- [ ] Fix existing text-encoding artifacts such as `Â·`, `â€”`, and broken résumé labels.
- [ ] Reconcile current `src/data` claims against the content inventory above.
- [ ] Replace placeholder links and images only when verified values/assets are available.

### Phase 1 — Dark foundation and static narrative

- [ ] Replace the light pastel root palette with semantic dark tokens.
- [ ] Establish typography, spacing, focus, border, radius, and elevation rules.
- [ ] Build/refine the compact navigation, hero, and semantic vertical sections.
- [ ] Populate visible content from verified data without requiring windows.
- [ ] Check desktop and mobile compositions before introducing interaction complexity.

### Phase 2 — Window system

- [ ] Implement a focused client-side window provider/manager.
- [ ] Implement working open, focus, drag, close, reopen, bounds, and reset behavior.
- [ ] Add content-aware default dimensions and optional resizing.
- [ ] Add keyboard behavior, focus restoration, and active-window semantics.
- [ ] Implement mobile sheet/dialog adaptation.
- [ ] Add reduced-motion behavior and verify that functionality remains intact.

### Phase 3 — Contextual content windows

- [ ] Build the Profile window.
- [ ] Build experience-detail content for Solveit.id, Get Ready Malang, PLN, UiTM GPBL, and teaching assistant work.
- [ ] Build four project case-study windows.
- [ ] Build achievement and curated-credential windows.
- [ ] Build Beyond Code content around robotics, teaching, bridge, and collaboration.
- [ ] Build a compact Contact window only after public links are verified.

### Phase 4 — Real assets and editorial polish

- [ ] Review candidate photos and certificate images visually.
- [ ] Obtain/confirm project screenshots and publication permission.
- [ ] Copy only selected, optimized assets into `public/images` with meaningful filenames.
- [ ] Replace all placeholders and write accurate alt text/captions.
- [ ] Refine copy so it sounds personal, concise, and evidence-based.
- [ ] Tune animation duration and window placement using real content.

### Phase 5 — SEO, quality, and release

- [ ] Finalize metadata and social preview image.
- [ ] Add verified structured data if appropriate.
- [ ] Test keyboard navigation, focus, Escape, close/reopen, reset, and viewport changes.
- [ ] Test touch/mobile modal behavior and long-content scrolling.
- [ ] Test contrast and `prefers-reduced-motion`.
- [ ] Run lint, TypeScript/build checks, and inspect production output.
- [ ] Check for private data, broken links, placeholder text, and unsupported claims before deployment.

## 12. Definition of Done

- The first screen clearly identifies Mahesa and his professional direction.
- The one-page narrative is coherent without opening any window.
- Windows are the memorable interaction and all visible controls work.
- Desktop windows can be dragged, focused, closed, reopened, and recovered safely.
- Mobile detail panels are readable, keyboard/touch accessible, and do not rely on dragging.
- The design is predominantly dark, flat-color, elegant, and restrained, with no gradients.
- The site uses real, approved content and imagery rather than placeholders.
- The four primary projects explain need, role, decisions, and outcome.
- Solveit.id experience is accurately represented as the primary professional milestone.
- Teaching, robotics, data, bridge, and international collaboration make the profile feel personal without diluting its software focus.
- Critical content remains server-rendered and crawlable.
- No sensitive personal records or IDs are published.
- Lint, TypeScript, production build, responsive checks, reduced-motion checks, and keyboard checks pass.

## 13. Open Items Requiring Mahesa's Confirmation

- Preferred public title: Software Engineer, Backend Engineer, Fullstack Developer, or a combination.
- Final GitHub and LinkedIn URLs.
- Whether a downloadable résumé should be public and which sanitized version to use.
- Project dates, team/individual ownership, repository/live URLs, measurable outcomes, and screenshot permissions.
- Whether the Solveit.id company/client work may be described and shown beyond the résumé-level details.
- Whether the grade improvement from C to B+ may be published.
- Which professional portrait and event photos best represent Mahesa.
- Exact context/result for FORTEI, POMPROV, GEMASTIK, PCE, Fesmaro, and the two copyright/IP documents before adding them to visible content.
- Whether light mode is wanted after the primary dark experience is complete.
