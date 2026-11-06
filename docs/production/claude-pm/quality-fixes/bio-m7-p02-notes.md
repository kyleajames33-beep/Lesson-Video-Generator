# bio-m7-p02 (microbial testing of water practical): quality fix, 6 Nov 2026

Grade before: B (audit frames 4, 6, 10, 11, 13, 15). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m7-p02-sheet.jpg` (16 stills at the audit frames 448 to 13902). Extra checks: 3008, 5136, 8854, 9094, 9234, 11038, 13220, 13420.
Narration, audio and measured timing are unchanged; existing word cues only.

## Changes
- **Serial dilution (frame 4, `s1.tsx`).** The dilution rack (creek bottle and four tubes) is on the bench from the first frame. "creek sample: millions of microbes per mL" sits over the bottle on "millions of microbes". The lawn plate arrives on "Plated straight" in the right zone, with "undiluted: a solid film, can't count", then shrinks into the corner when "dilute in steps" begins. The drops, labels and ×10 arrows are unchanged.
- **Controls (frame 6, `s2.tsx`).** The negative row now shows two plates side by side: the clear plate ("expected: clear") and, on "If it grows colonies", the colony plate ("if colonies grow"). The positive row adds the painted micropipette with its culture tube on "known harmless culture". The text moves right and wraps at 1000 px.
- **Risk assessment (frame 10, `s3.tsx`).** Before the table: the taped known-culture plate ("school culture: risk group 1, the lowest") and the creek plate ("a water sample: could hold anything") on their cues. They clear as the table arrives. The table frame grows with its rows. Text is 28 px hand (was 24 px). The copy is slightly shortened.
- **Exam question 1 (frame 11, `s4.tsx`).** The whole question and the answer box arrive with the card. The text narrows to 1080 px. The right side shows the rack with the 10⁻² tube marked, and three sealed plates labelled 41, 47 and 53 ("0.1 mL on each plate").
- **Exam question 2 (frame 13).** The whole question and the answer box arrive with the card. The right side shows the creek bottle and an arrow to the lawn plate ("1 mL, undiluted"; "37 °C, 48 h"). Nothing in either panel gives away an answer.
- **Decision rule (frame 15).** The rows narrow to 1160 px. A right panel is there from the first frame and changes on each row's cue: the rack, then three plates and both controls, then the incubator, then the countable plate ("about 30 to 300 colonies"; "culturable, not pathogens").
- **Key notes (frame 16).** Eight one-line bullets at 34 px replace five paragraphs at 28 px. The memory aid is unchanged.

`parts.tsx` and `assets.ts` are unchanged (bio-m7-p01 and p05 import them). The typecheck passes on `out/explainer/tsconfig.m7p010205.json`.

## Plates needed
None.

## Still to check
Check the lawn plate's move in scene 5 and the decision panel crossfades at playback speed. Ready to re-render.
