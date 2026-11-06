# B-grade fix brief (Claude agents, from 6 Nov 2026)

The owner wants every published video brought up to the Year 12 Module 5 standard. The videos you are given were graded B (small fixes). Fix their scene code so they re-render on their EXISTING narration and measured timing. Do not change narration, audio or timing. Fix what the audit names (the row for each id in `fix-plan.md`; frames 1 to 16 count row by row in `work/quality-audit/sheets/<id>.jpg`) and anything else clearly below the bar. Don't rebuild scenes that already work.

Accepted examples (view the sheets): `bio-m6-b05-sheet.jpg`, `bio-m6-b12-sheet.jpg`, `bio-m6-b19-sheet.jpg`, `chem-m6-c10-sheet.jpg` in this folder. Moves that worked:
- the hero object fills the frame;
- labels 34 to 60 px in the hand font;
- painted plates carry each named thing;
- cards and tables filled as narrated, text 30 px or more;
- the current working line 44 px or more;
- short key notes (5 to 8 short bullets) plus a framed memory aid.

References: `../assets/maths-std-ref-bio-m5-b06a.jpg`, `../assets/maths-std-ref-chem-m5-g01.jpg`. Read `rubric.md`, each design (`../lessons/<id>.md`), each build under `src/explainer/lessons/<id>/` (found through `src/explainer/registry.ts`), and each measured `lesson.json`.

Rules:
- painted plates, never stretched (look in `public/assets/` first);
- NO people, hands (including thumbs icons), faces or body outlines; existing anatomical plates already in the video may stay;
- chromosomes painted at true scale, never coded bars over cells;
- Punnett squares letters-only;
- HSC-convention particle diagrams;
- no burned captions;
- every narrated change shown on cue;
- no em dashes;
- edit only these lessons' own files; if a parts file is imported by other lessons, add a lesson-local variant;
- leave legacy files alone;
- Remotion: animate only with useCurrentFrame, interpolate and spring.

Verify:
- typecheck;
- render 16 evenly spaced STILLS per lesson at concurrency 1, one process at a time, after a free-memory check (PowerShell `(Get-CimInstance Win32_OperatingSystem).FreePhysicalMemory` under about 1,000,000 KB: wait). No full render;
- montage to `work/quality-audit/fixed/<id>-sheet.jpg` and iterate to at least B+;
- write a short `work/quality-audit/fixed/<id>-notes.md`.

Never ship placeholder art; list any truly needed plate. Do not commit. Do not spawn agents.

## Root rule added 6 Nov (after bio-m8-b03 and b04)

- Never drop or shorten the quiet key-notes hold below 40 s in all; two notes frames on a 16-frame sheet are expected for a copy hold, not a defect. A hold longer than 40 s may be cut to a 40 s minimum (`Math.max(1200, durationInFrames)`).
