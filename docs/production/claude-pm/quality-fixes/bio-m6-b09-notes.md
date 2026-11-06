# bio-m6-b09 (what counts as biotechnology): quality fix, 6 Nov 2026

Grade before: B (audit frames 4 to 8, 10, 11 and 13). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b09-sheet.jpg`. It holds 16 stills at the audit frames (442 to 13715). I also checked extra stills in the insulin scene and in exam question 2.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues in `docs/production/claude-pm/lessons/m6b09/measured/lesson.json`.

## Changes by scene

- **2 to 7. The four-lane board (frames 4 to 8).** A new lesson-local `big.tsx` holds copies of the board parts with larger type, used in place of the `parts.tsx` versions:
  - lane labels are 40 px (they were 32);
  - lane terms are 32 px grey and 40 px when lit (they were 28 and 36);
  - the "DNA" strip label is 26 px (it was 20) and sits above the strip;
  - the tick words ("unchanged", "no new alleles") are 32 px (they were 26);
  - the advantage chips are 34 px (they were 32);
  - the scene grey tags are 30 to 34 px (they were 22 to 28).
- **4. Selective breeding.** The parent and lamb strips are larger (pitch 36), with r 15 allele rings. The "parent" and "lamb" labels are 34 px, and the "generation" labels 30 px.
- **8. Timeline.** The timeline fills the frame:
  - the plates are two to three times larger (pancreas 280, bread and sheep 180, today's cluster 84 to 150);
  - the ticks are 36 px;
  - the cheese is drawn at 1.5 scale;
  - "DNA tests" is labelled;
  - the rennet and chymosin tags are 34 px;
  - the sector words are 46 px, with larger icons.
- **9. Memory (frame 10, "two lines").** Line one gets its timeline. A line draws under "Biotechnology is older than GMOs." Bread, cheese and the merino sit at "thousands of years ago", landing on "bread, cheese and selective breeding". The bacterium and the insulin vial sit at "1982: first GMO medicine", landing on "GMOs". Line two keeps its strip, now larger (pitch 38, r 16 rings). The tags are 34 and 50 px.
- **10a. Exam question 1 (frame 11, the "late text" pattern).** The narration reads demand (a) before uses A to D, so the card used to show the stem and (a) with an empty gap for about 14 s. Now:
  - the four uses arrive with the card;
  - a column of four painted tiles (A: milk and bacterium; B: bull and straw; C: the seedless Cavendish half; D: cotton and bacterium) waits at 35% and lights as each use is read;
  - the text keeps clear of the tile column;
  - the answer table text is 30 px.
  - The tiles show only what is used, never what is changed.
- **10c. Exam question 2 (frame 13).** While the stem is read, the painted cotton plant and the Helicoverpa larva boring into a boll fill the empty card ("cotton plant", "caterpillar pest in a boll", 50 px). On "Compare", they move to the right column at 0.56 scale, and the answer box narrows to 1080 px.
- **12. Key notes.** Seven one-line bullets at 34 px replace five paragraphs at 29 px. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b09/s1.tsx`, `s2.tsx`, `s3.tsx`.
- `assets.ts`: adds `cavendish` (the Cavendish half of `m6-banana-wild-vs-cavendish-v1.png`, box clipped at B12's measured gap, natural x 1055) and `larva` (`m6-helicoverpa-larva-boll-v1.png`, B10's box). The existing keys are unchanged; B10, B12, B13 and B15 pick individual keys only.
- New: `big.tsx` (lesson-local board parts) and `exam.tsx` (`UseTiles`, `CottonPest`).
- `parts.tsx` is untouched, because B10 to B19, P01 and M7 import it.

The typecheck passes on the B08, B09, B10, B12, B13 and B15 graphs.

## Plates needed

None. An optional upgrade for item 1 C is a banana plant with a sucker at its base.

## Still to check

- Judge at playback speed: the tiles lighting on each use, the picture moving on "Compare", and the memory timeline drawing in.
- One batch of stills rendered frame 5 with the plates not yet loaded. A re-render of the same frame was correct, so this was a still-render loading race, not a scene fault.
- Ready for Codex to re-render on the existing narration.
