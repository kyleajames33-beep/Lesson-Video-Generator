# bio-m7-p05 (antimicrobial disc practical): quality fix, 6 Nov 2026

Grade before: B (audit frames 8, 10, 11, 13, 14). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m7-p05-sheet.jpg` (16 stills at the audit frames 441 to 13656). Extra checks: 6907, 8128, 8858, 9007, 10876, 12022, 12302, 12945.
Narration, audio and measured timing are unchanged; existing word cues only.

## Changes
- **A plate isn't a patient (frame 8, `s2.tsx`).** The "as a medicine" card now grows with its rows and the clinical-trials line, so it is never an empty red box. Its heading is "as a medicine, a drug must:", and the rows are plain actions at 34 px: reach the infected tissue, be safe at that dose, work on the real pathogen.
- **Risk assessment (frame 10, `s3.tsx`).** Before the table: the micropipette with the approved culture ("the approved harmless culture") and the zones plate ("a grown plate: can pick up a contaminant") on their cues. They clear when the table arrives. Rows now stay once they are said, with earlier rows dimmed a little, so the table fills as it is narrated (it no longer shows one row at a time). The frame grows with the rows, and the collapsed grey chips are gone.
- **Exam question 1 (frame 11, `s4.tsx`).** The whole question and the answer box arrive with the card. The right side shows the lawn plate ("agar spread with a harmless bacterium") and a bar chart of the given means: P 22 mm, Q 13 mm, water 6 mm. These are data only, with no verdict.
- **Exam question 2 (frame 13).** The whole question and the answer box arrive with the card. The right side shows one lawn plate with the two discs labelled X and Y, "X: soaked 1 min · Y: soaked 10 min" and "one plate, 37 °C, 48 h".
- **Feedback 2 (frame 14).** A fix card appears only with its fix, so no empty card waits. Each problem card carries its plate: the lawn plate with the 1 min and 10 min discs, and the zones plate. The "measure through the base" fix carries the ruler plate.
- **Decision rule.** The rows narrow to 1170 px. A right panel is there from the first frame and changes on each row's cue: the lawn plate and micropipette, then the fresh disc plate, then the incubator, then the zones plate with the ruler.
- **Key notes.** Seven one-line bullets at 34 px replace five paragraphs at 30 px. The memory aid is unchanged.

All edits are in this lesson's own `s2.tsx`, `s3.tsx` and `s4.tsx`. The typecheck passes on `out/explainer/tsconfig.m7p010205.json`.

## Plates needed
None. The two discs in exam question 2 are coded white circles on the painted lawn plate, because no painted plate shows exactly two discs.

## Still to check
Check the growing card and table at playback speed. Ready to re-render.
