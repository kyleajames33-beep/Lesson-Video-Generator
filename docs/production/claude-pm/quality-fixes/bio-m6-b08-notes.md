# bio-m6-b08 (mutation, gene flow and drift): quality fix, 6 Nov 2026

Grade before: B (audit frames 2, 6, 11 and 13). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b08-sheet.jpg`. It holds 16 stills at the audit frames (435 to 13474). I also checked mid-scene stills in the mutation scene and both exam questions.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues in `docs/production/claude-pm/lessons/m6b08/measured/lesson.json`.

## Changes by scene

- **2. Two gene pools (frame 2).** The 25-panther counting grid is about 1.5 times larger. The panthers are 134 px wide (they were 84) on a 196 x 152 grid, and the allele rings are r 19 (they were 13). "25 x 2 = 50 copies" and "10 / 50 = 0.2" are 64 px, and the frequency bar is 440 px wide. A "25 panthers, one gene" tag (44 px) arrives with the grid. The Texas and Florida pool rings are r 18 (they were 13).
- **5. Mutation (frame 6).** The Florida pool opens in the centre at 1320 x 420, with r 24 rings. The new allele drops into it, tagged "one new allele: a single copy" (44 px), and "1 / 50 = 0.02" is 64 px. Just before "a population of a million", the pool eases back to its old place and size at the left, beside the million pool. The drift lines that follow are unchanged.
- **9a. Exam question 1 (frame 11).** A new lesson-local `SkinkIsland` draws the givens in the empty card while the stem is read:
  - the painted grassy island with 20 painted skinks (blue-tongue lizard plate, with a light halo so they read on the grass) and "500 skinks";
  - a coded cyclone symbol, labelled, on "A cyclone kills";
  - ten skinks stay while the others grey and fade, and "10 survivors" lands on "The ten survivors carry".
  - No allele, frequency or process is drawn, because that is the answer. On "Calculate", the picture moves to the right column at 0.58 scale. The answer boxes narrow to 1020 px, and the countdown moves to (1660, 900).
- **9c. Exam question 2 (frame 13).** A new `PossumPlan` draws the givens: a small island with five painted possums ("30 possums, isolated", "lost much variation") and a larger island with 12 ("large population, same species"). On "bring in ten possums", a dashed arc draws and three possums travel along it, tagged "bring in 10 possums". On "Evaluate", the picture moves to the right column at 0.52 scale, and the answer box narrows to 900 px.
- **11. Key notes.** Seven one-line bullets at 34 px replace five paragraphs at 29 px. The framed memory aid is unchanged.

Scenes 1, 3, 4 and 6 to 10 are unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b08/s1.tsx` (scene 2), `s2.tsx` (scene 5), `s3.tsx` (items 1 and 2, key notes).
- `assets.ts`: adds `skink` (`y11-blue-tongue-lizard-v1.png`), `possum` (`y11-brushtail-possum-v1.png`) and `island` (`y11-grassy-island-v1.png`), with alpha boxes measured from the real files. The existing keys are unchanged.
- New: `exam.tsx` (`SkinkIsland`, `PossumPlan`).
- `parts.tsx` is untouched, because B13 imports it.

The typecheck passes on the B08, B09, B10, B12, B13 and B15 graphs.

## Plates needed

None. The blue-tongue lizard is a skink, so it fits item 1.

## Still to check

- Judge at playback speed: the pool easing left in scene 5, the skinks fading after the cyclone, and the two pictures moving right on the demand cue.
- Ready for Codex to re-render on the existing narration.
