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

Never ship placeholder art. If a design-named plate is missing, stop that scene and report it.
