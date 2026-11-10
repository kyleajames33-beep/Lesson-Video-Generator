# Build agent brief: new explainer lessons to grade A (Claude build agents, from 6 November 2026)

You build the Remotion scene code for voiced lessons. Root (Claude) reviews your contact sheets and commits. Do not spawn agents. Do not commit.

## Read first
- `AGENTS.md`;
- `docs/production/motion-design-standard.md` and `docs/visual-design-handbook.md`;
- `docs/production/claude-pm/maths-visual-standard.md`, especially **"Grade A before any render"** in its build gate. Your sheet must reach A, not B+;
- brief 125 (`codex-prompts/125-build-m8-b03-b04-b05-scenes.md`), for the house pattern, rules and machine limits. Follow it, except that you report to root instead of `status.md`, and you do not build the preview MP4.

Look at the reference sheets `docs/production/claude-pm/assets/maths-std-ref-chem-m5-g01.jpg` and `maths-std-ref-bio-m5-b06a.jpg`, and at recent finished fixes in `docs/production/claude-pm/quality-fixes/` (for example `chem-m5-c13-sheet.jpg` and `bio-m8-b02-sheet.jpg`).

## Inputs per lesson
- **The visual specification:** the design, `docs/production/claude-pm/lessons/<id>.md`.
- **The measured narration:** `docs/production/claude-pm/lessons/<key>/measured/lesson.json`, giving scene ids, durations and word timings. Key every change to its cue word's measured time.
- **The pattern to copy:** the nearest built lessons, for example `src/explainer/lessons/chem-m8-c03b/`, `chem-m8-p02/`, `bio-m8-b05/` and the shared `src/explainer/lessons/m8-shared/parts.tsx` (import it read-only).

## A-grade rules
Every one of the 16 sheet frames must pass:
- no title-only or near-empty frame, and question cards arrive with their full text;
- a painted plate, or a live simulation with readouts, on screen in most teaching frames;
- a new visual idea every 60 to 90 s;
- worked examples in the g01 layout, with a framed answer and a crossed slip;
- type at 44 px or more for the current line, about 52 px readouts, nothing below 26 px;
- key notes as about five short bullets, with the framed memory card;
- a key-notes hold of at least 40 s (`Math.max(1200, durationInFrames)` in `config.ts`);
- no frame more than about 40% empty while teaching.

Also:
- no people, hands, thumbs or faces;
- never stretch a plate;
- no em dashes;
- animate only with `useCurrentFrame`, `interpolate` and `spring`.

## Files
- Create `src/explainer/lessons/<id>/`. Do not edit other lessons' files.
- Add your registry import and entry to `src/explainer/registry.ts` with a single small edit. Re-read the file immediately before editing, because another agent may be editing it too.
- Typecheck with a scoped tsconfig kept in your scratchpad subfolder.

## Verify
- Render 16 evenly spaced stills per lesson:
  - under the stills lock (`out/explainer/.stills-lock`), at concurrency 1, one process at a time;
  - after a free-memory check (wait if free RAM is under about 1 GB);
  - after a free-disk check (stop and report if C: has under 1 GB free).
- Make a montage at `work/quality-audit/fixed/<id>-sheet.jpg` and grade it honestly against the A rules. Fix and re-sheet until every frame passes.
- Write `work/quality-audit/fixed/<id>-notes.md`: the files created, any departures from the design with reasons, any plate truly missing, the cue check, and things to check at playback speed.

## Root rules added after the first builds (6 November)
- **Key notes:** about five SHORT bullets, each one line or at most two short lines, at 34 px or more, with the framed memory card. Notes are on-screen only, so trim the design's longer note text to its core fact. Dense paragraph bullets fail A even when they match the design.
- **Fill from the first frame:** every stage shows its main picture (plate, apparatus, diagram or simulation) from its first frame, with labels and answers arriving on cue. Empty boxes or bare panels waiting for a later cue fail A.
- **Contrast:** use full-ink text for content students must read (no pale grey). Plates that carry the idea should be at least about 300 px tall.
- **Sheets:** no frame-number stamps on the final sheet.
- **Faint previews are for secondary items only** (small chips, labels, later answers). Each stage's main visual (the plate, apparatus, organ, diagram or chart frame) is solid, in full ink and colour, from the first frame. A frame that is mostly faint reads as washed out and fails A.
- **Countdown:** show the ring full from "Pause here to answer." until the timed countdown starts, so it appears in every hold frame.

Never ship placeholder art. If a design-named plate is missing, stop that scene and report it.

## Shared parts and the automatic check (root, 10 November 2026)

Use these in every new build. Do not refactor finished lessons onto them.

- **Sizes and colours:** `src/explainer/shared/tokens.ts`. Pick a type size by purpose (`TYPE.working`, `TYPE.current`, `TYPE.body`) and a named tone per idea (`TONES`). Do not invent new hex colours or font sizes for text.
- **Repeated scenes:** `src/explainer/shared/scenes.tsx` has `QuestionScene` (full question, "Pause here to answer." and a ring that stays on screen through the hold), `FeedbackScene` (answer, one or two reasons, a crossed mistake), `WorkedExample` (the g01 layout) and `KeyNotesScene` with `MemoryCard`. They throw an error if you pass more than six notes, a note over 95 characters, or more than two feedback reasons. Fix the content; do not work around the error.
- **Simulations:** read `src/explainer/sims/README.md` before coding any particle, gas, reaction-rate, equilibrium, diffusion, wave, probability or dice, projectile, orbit or charged-particle animation. Use the engine there and read every on-screen number from its run. Copy the nearest scene in `src/explainer/lessons/SimGallery/scenes.tsx`.
- **Before you send a sheet to root, run the check:** `npm run grade:explainer -- <explainer id>`. It takes the stills lock itself, so do not wrap it in your own lock. Fix every failure and look at every warning. Attach `out/explainer/<id>/grade/<id>-grade.md` to your notes. A pass is required but is not the grade: root still judges the sheet. Details: `docs/production/claude-pm/grade-checker.md`.

