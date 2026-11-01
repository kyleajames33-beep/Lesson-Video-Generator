# Brief 132: error-only check of math-a12-d02 Revision 2

Checked 1 November 2026. Input SHA256 `e504ebf196f878eb21a93473f10eb7f267eccd616dc4ddcf7c06ac7ab561a6ef`. Read all narration, Visual paragraphs, cards, feedback, notes, numbers and metadata against brief 131 findings. No design edits, speech or renders.

## Error 1: exact/approximate distinction still missed in two scene 6 graphics

The main algebra is repaired to 2 = e^(ln 2) and 2^x = e^(x ln 2), but the e^(?x) chip still fills with 0.693 and the tag says “stretch × 1.44 = 1 ÷ 0.693”. These are still rounded substitutions in exact forms. Fill the exponential slot with ln 2 and keep “ln 2 ≈ 0.693” beside it. Replace the tag with “stretch × (1/ln 2) ≈ 1.44”. Use exact ln 2 coordinates and 1/ln 2 internally, with decimals only in readouts. The new row 3 cue “natural log of two” exists in the revised speech; no stranded old x cue remains. Source: ln 2 = .693147180560, 1/ln 2 = 1.442695040889; the design's repaired exact identity and brief 131 maths finding 1.

## Error 2: selected run 0.5 repair not applied to the scene 9 shot

The status says root selected run 0.5 and rise 4 ln 2, but scene 9 Visual still orders run 1/rise 5.55 in a window ending at x = 3.5, y = 12. From (3, 8), that triangle ends at (4, 13.5451774445), outside both bounds. Replace with run 0.5, rise 4 ln 2 ≈ 2.77, endpoint (3.5, 10.7725887222). Update the Numbers-used row and make the Open-decisions entry settled rather than conditional. This changes only the visual specification, not speech or time. Source: slope 8 ln 2; rise = (8 ln 2)(.5) = 4 ln 2; brief 131 learning review's accepted build choice.

## Author-note cleanup

The scene 13 note still says part (b) gives the sign away by design. The revised card now says “Explain the sign of g′(2)”, so delete the obsolete note or state that the sign is not supplied. This is an author-only contradiction, not a remaining learner-answer leak.

## Repairs and checks

Main scene 6 identities are exact; memory scene 10 explicitly excludes base 1; both attempt 2 card versions say “Explain the sign”; feedback underlines “sign”, which exists. No cue depends on removed speech. Base 1 remains included in the derivative rule for a > 0. All numeric values and answers are unchanged and correct: secants .828427124746, .717734625363, .695555005672; ratios ln 2 = .693147180560, ln 3 = 1.098612288668, ln e = 1, ln 4 = 1.386294361120; 8 ln 2 = 5.545177444480; ln 5 = 1.609437912434;-(ln 2)/4 = -.173286795140. Fresh official ci31a76d4a sourceHtml byte-matches the route; the linear quote is faithful. No outgoing 2017 material or stale course identity. U+2014 count 0.

Scene counts 453, 353, 559, 459, 451, 618, 627, 560, 511, 444, 125, 347, 128, 395, 223, 75: 6328 excluding joining spaces, 6343 including 15. Within 5500 to 6800. At 13.3 characters/s plus 93 seconds of holds, 569.9 seconds, about 570. The current status count 6344 differs by 1 and an older top count remains; these do not change the timing conclusion. Exact voiced timing and human listening remain pending.

Count: 2 learner-visual/build errors, plus 1 author-only stale note. Claude owns repairs.
