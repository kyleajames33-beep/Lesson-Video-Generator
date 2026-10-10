# Repo guide for agents

Read this first to orient yourself. [AGENTS.md](AGENTS.md) holds the binding working rules; this file tells you what is here, what matters and what to ignore. Snapshot taken 10 October 2026 from a read-only audit. Counts are approximate.

## What this repo is

The video half of HSCScience. A Remotion (React) project that turns lesson JSON into narrated HSC Chemistry and Biology lesson videos. The student-facing website is a separate repo (`C:\Users\kygs\hscscience`, deployed at hscscience.com.au).

Pipeline: lesson JSON → scene types → slide and diagram components → ElevenLabs narration and alignment → Remotion render → MP4 plus captions → YouTube.

## State of play (the important part)

- 308 lesson scripts exist (`src/data/`): Biology 159, Chemistry 149, Year 11 M1 to Year 12 M8.
- Only about 9 have a reviewed script. 299 are `source-present-unreviewed`.
- 6 videos are public on YouTube: Part A, molar mass and the four approved calculation lessons. Superseded limiting revisions remain unlisted. Preferred enzymes revision ZTxQP7kI5_o is owner-approved but held by one unavailable historical source dependency. See the current board and publication queue.
- The four calculation packages pass the full release gate. Chemistry C3's original upload remains private. The bounded axis property fix passes source/pilot/UI checks and its corrected full render is running; replacement package checks remain pending.
- 0 videos are embedded on the website. No site file references any YouTube ID. A plan exists (`docs/site-video-integration-plan.md`) but has not been carried out.
- Active priority: earliest missing Chemistry C1 and Biology B1 public starters, then C2/B2a in two independent subject tracks. Fresh measured C1/B1 voiced previews have independent source/timing/PCM passes, with human listening, full voiced/export/package review pending. See [release priority](docs/production/module5-release-priority-2026-10-10.md), [starter Player](http://127.0.0.1:8778/module5-starter-voiced-review-2026-10-10/) and the current board. C3 correction and later C4A/plant preparation can continue in parallel; later public videos require their earlier learner prerequisites.

The main risk is not code quality. It is that review artefacts (100+ files) vastly outnumber shipped videos. Favour work that moves a video to students over work that adds another review document.

## Where things live

| Path | What | Status |
|---|---|---|
| `src/data/*.json` | 308 lesson sources + generated `lessonRegistry.ts` | Core |
| `src/Root.tsx`, `src/LessonVideo.tsx` | Registers one Composition per lesson | Core |
| `src/slides/` | Slide components; `diagrams/kinds/` (about 320 diagrams, wired through `lane-*.ts` and `dioramaKinds/index.ts`) | Core |
| `src/lesson/`, `src/audio/`, `src/animations/`, `src/transitions/`, `src/styles/` | Timing, audio, motion, styling | Core |
| `src/dev/` | Release and preview entry points | Core |
| `src/prototypes/` | Review screens and experiments (separate `prototype:studio` entry). Module 5 review files are one-offs | Experimental |
| `scripts/` | About 210 scripts. About 120 are wired in `package.json`; others are documented in HANDOFF or docs. 60 old one-off patches were moved to `scripts/archive/one-off/` (paths inside them are not maintained) | Mixed |
| `public/audio/` | Narration MP3 + alignment (about 1.1 GB, gitignored) | Generated media |
| `public/assets/` | Artwork, lottie, fonts | Core media |
| `out/` | Renders (gitignored). About 26 GB after the 10 October cleanup: `out/prototypes/` 13 GB (exports and previews), `out/checks/` about 12 GB (pinned runtimes named in HANDOFF; do not touch). Media ZIPs were removed locally from `out/archives/`; they live on the GitHub release `workspace-media-2026-10-09` and download via `scripts/github-media-transfer.py` (see `out/archives/github-media-release-notes.md`) | Generated |
| `docs/` | Loose docs, indexed in [docs/README.md](docs/README.md); stale ones carry a "Historical" banner | Mixed |
| `docs/production/` | Briefs, reviews, gates, board, drafts (about 550 files) | Active but sprawling |
| `HANDOFF.md` | Cross-computer restore notes, stacked "Latest" paragraphs | Read top paragraphs only |
| `archive/` | Retired Biology Y11 JSON; `archive/root-leftovers/` holds old root helpers and logs | Archive |
| Root `image-prompts-*.md` | Image prompt sheets; Y12 ones are read by asset scripts | Keep, do not add more at root |
| `lesson-video-generator-app/`, `tmp/`, `tmp-m3site/` | Unused leftovers (gitignored) | Ignore |

## Which docs are current

Full index: [docs/README.md](docs/README.md). Read these (all named in AGENTS.md):

1. `docs/visual-design-handbook.md` (light theme, motion rules). This overrides older docs that describe a dark palette.
2. `docs/animation-planning.md`
3. `docs/research/hsc-video-production-standard-2026-10-02.md` and `docs/research/library-implementation-plan.md`
4. `docs/production/teaching-templates.md`, `docs/production/teaching-visual-brief-template.md`, `docs/production/preview-first-review.md`
5. `docs/production/course-progression-plan-2026-10-09.md` and `docs/production/module5-video-route-2026-10-10.json`
6. `docs/production-memory.md` (decision log)

Treat as historical unless a current doc points to them: `pipeline-plan.md` (dark palette, superseded), the `gold-standard-*` and `lesson-reference-style.md` set, `catalogue-build-status.md`, `module-2-build-status.md`, `claude-design-handoff.md`, `lesson-build-checklist.md` (old repo paths), `docs/module-plans/`, `docs/design-canvas-reference/`.

When several versioned files exist (`-v2`, `-v3`, `revision-02`, `-clear`, `-rich`), the newest one named in the board or the current selection record wins. Do not infer currency from filename alone.

## Core commands

| Step | Command |
|---|---|
| Type check | `npm run check` |
| Validate lessons | `npm run validate:lessons` |
| Narration (paid, dry-run first) | `npm run voiceover:generate` |
| Timing | `npm run voiceover:fit`, `voiceover:timing`, `voiceover:autosync` |
| Assemble playback | `npm run voiceover:assemble` |
| Release | `npm run release:preflight`, `render:release`, `gate:release` |
| Exports | `npm run build:captions`, `export:srt`, `export:youtube`, `export:transcript` |
| Site manifest | `npm run export:site-manifest` |

Do not render, generate paid narration or upload without explicit permission from the owner for that specific output.

## How to work here

1. Read AGENTS.md, then this file, then the board JSON for current task state.
2. Before creating a new file, check whether an existing one should be updated instead. Do not create a new dated or versioned copy unless the old one must stay frozen as release evidence.
3. Put one-off scripts under `scripts/` with a clear name and a comment saying what they were for; wire reusable ones into `package.json`.
4. Do not add files at the repo root.
5. Keep pinned runtimes under `out/checks/` untouched; HANDOFF names which ones.
6. End each work session by updating the board's task state, so status lives in one place.
7. Remember the goal: finished videos embedded on hscscience.com.au lesson pages.
