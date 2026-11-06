# bio-m7-b02 (Pasteur, Koch and germ theory): quality fix, 6 Nov 2026

Grade before: B (audit frames 3 to 10, 11, 13, 14, 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m7-b02-sheet.jpg` (16 stills at the audit frames 448 to 13896). Extra checks: 7900, 8300, 9700, 11700, 12250, 12700.

Narration, audio and measured timing are unchanged. All new animation uses word cues in `docs/production/claude-pm/lessons/m7b02/measured/lesson.json`.

## Changes
- **Labels (frames 3 to 10).** Grey tags go from 22 to 28 px up to 32 to 40 px. The Koch and Pasteur side cards go to 32 and 40 px. The growth inset label goes from 18 to 26 px, and the clock label from 28 to 36 px. Tags that would collide were moved: the scene 5 "same broth" and "same air" pair, the scene 6 boil, sterilise and cover tags, the 1-in-7 dots, and "healthy tissue: none".
- **Postulate labels.** Koch's step labels in `KochBays` keep a constant screen size of about 38 px at any scale. Before, they were 40 px times the scale, so about 29 px when shrunk.
- **Scene 9 (limits).** The bench grows from 0.72 to 0.86 scale over the first 24 frames, so it fills the bay. "Koch's postulates" is 46 px, and the limit tags are 36 px. The DNA evidence is drawn larger: 250 px strips and a bigger host.
- **Exam 1 (frame 11).**
  - The first stem sentence now lands with the card, on "First". It used to wait 1.1 s for "Sheep on a farm".
  - A givens panel on the right fills as each given is read: the sheep; the TB-field plate ("sick: 20/20"); the healthy-tissue plate ("healthy: 0/20"); the serum tube ("pure culture"); five small sheep, four ringed ("given to 5: 4 ill").
  - The demand is narrowed so it stays clear of the panel.
- **Exam 2 (frame 13).**
  - The koala lands with the card, and "eye, urinary disease" follows.
  - Then the cell plate fills with small bacteria ("only in living cells"), and the "endangered (NSW)" tag appears on its cue.
- **Feedback 2 (frame 14).** Two picture cards sit under the reasons:
  - Step 2: the cell with bacteria inside, then an agar dish crossed on "can't be grown" ("step 2: no pure culture").
  - Step 3: a serum tube, a dashed arrow to a koala crossed on "hard to justify", and an "endangered" tag ("step 3: infect healthy koalas?").
- **Decision rule (frame 15).** The rows are tighter. Under them sit two evidence cards. The Pasteur card shows the clear and cloudy flasks. The Koch card shows four step plates with arrows. Each card lights with its row. The next chip moved down.
- **Key notes.** Eight one-line bullets at 34 px replace five paragraphs at 30 px. The memory aid is unchanged.

## Files
- `src/explainer/lessons/bio-m7-b02/parts.tsx`, `s1.tsx`, `s2.tsx` and `s3.tsx`, all lesson-local. Nothing imports B02 parts.
- The typecheck passes on the scoped config `out/explainer/tsconfig.m7b020305.json`, which covers B02, B03, B05 and their importers B04, B06, B10 and P02.

## Notes
- One still from the first batch (11207) caught the koala plate half-decoded. That is an SVG `<image>` load artefact in still capture. The rerendered still is complete.
- No new plates are needed.
- Judge at playback speed: the bench growing in scene 9, and the panel rows arriving in exam 1.
- Ready to re-render.
