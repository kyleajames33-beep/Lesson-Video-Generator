# bio-m8-b04 (kidneys and water balance): quality fix, 6 Nov 2026

Grade before: B (audit frames 10, 14, 15 and 16). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m8-b04-sheet.jpg` (16 stills at frames 428 to 13256, spread over the new 13,684-frame length). Extra checks: 6414, 8400, 9172, 10200, 10314, 12682.
Narration, audio and measured scene timing are unchanged. New animation uses word cues in `docs/production/claude-pm/lessons/m8b04/measured/lesson.json`.

## Timing note (root to confirm)
As in b03, `config.ts` no longer stretches the key notes scene to 1,800 frames, so there is no silent 35 s second hold. The scene keeps its measured 759 frames. The video is now 456.1 s (was 490.8 s). To restore the hold, revert the three lines in `config.ts`.

## Changes
- **Exam question 1 (frame 10, empty loop).** The empty ring is removed. The question's own objects arrive on cue and give nothing away: the pale and dark urine samples ("volume? concentration?") on "student's urine", and the water glass ("(b) drinking water") on "why drinking water".
- **Feedback 1 (the exam loop drawn as narrated).** The loop now fills slot by slot as the answer is spoken: "osmolarity rises" (absorbed salt), "osmoreceptors detect", "pituitary releases more ADH", "ducts: more water back" and "osmolarity falls (once water is drunk)". The minus arrow comes on "Drinking supplies". The answer rows narrow to 960 px.
- **Decision rule (frame 14, title only).** The osmolarity gauge and the kidney are there from the first frame. The gauge marker swings on "blood concentration". ADH pulses run to the kidney on "which way ADH". The collecting duct plate opens (closed to open) on "collecting ducts". On "Next" the panel clears for the wilted potted plant.
- **Memory (new frame 10, title only).** The dark urine sample is there from the first frame ("ADH: less urine, more concentrated"). The kidney-with-adrenal plate arrives with "water follows salt".
- **Key notes (frames 15 and 16).** Eight one-line bullets at 34 px replace five paragraphs at 30 px. The memory aid is unchanged, and the silent hold is gone (see above).
- The "HSC-style question" tag is now 26 px (was 22).

## Files
- Edited: `src/explainer/lessons/bio-m8-b04/assets.ts` (adds `m8-potted-plant-wilted-v1.png`, already used by b05), `s2.tsx` (memory only), `s3.tsx` and `config.ts`.
- The typecheck passes.

## Plates needed
None.

## Still to check
One early still of the "After a big drink" scene showed the duct plate partly drawn. A re-render of that frame (6414) was correct, so it was a loading artifact. Check at playback speed. Ready to re-render.


Root note (6 Nov): the notes hold is restored at a 40 s minimum (1,200 frames), not dropped and not the earlier 60 s. Two notes frames on the 16-frame sheet are expected for a copy hold.
