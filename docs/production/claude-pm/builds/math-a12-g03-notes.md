# math-a12-g03 build notes (built on the measured narration)

Builder: Claude build agent, 19 November 2026. No stills, grade run, bundle or MP4 by the builder (machine limit while the Google voicing worker runs); root runs the sheet and `npm run grade:explainer -- Explainer-math-a12-g03`. 13 scenes, 14,321 frames (477.4 s, key notes held at 1,350 frames).

## Files
`src/explainer/lessons/math-a12-g03/` (common, cuemap, config, assets, scenes, parts, s1 to s3). `parts.tsx` re-exports g02's parts read-only and adds the two series, the loan balance A_n = P(1.004)^n − 2800[(1.004)^n − 1]/0.004 (P* = 488,658.786..., balance −$0.02 at P = 488,658.78), the normal density, the finance and probability row icons, and the underline mark. It imports s01's spinner geometry, s06's `Cookie` and f13's `SuperSheet` read-only. Final frame (the course-end desk with three habit cards and "End of Year 12 Mathematics Advanced", no "Next" chip) exported as `G03FinalFrame` from `s3.tsx` (re-exported by `scenes.tsx`). No registry edit (root registers).

## Plates
None missing; none stretched. d02's coin jar, full twin and coin; exam desk; Physics house; s05's delivery van; s01's spinner base and pointer; s06's cookie and choc chip; f13's super statement; s08's chip bag; the skateboard (MATHS_KIT2_PLATES) and the Biology rainwater tank in the final frame.

## Joins
- Opens on `G02FinalFrame` (frame 0 of scene 1); the strips and jars ease to a compact top layout on "one phrase", and the plot draws below.
- Ends on `G03FinalFrame`; scene 13 cross-fades back to it over its last 40 frames.

## Departures (with reasons)
- Hook: the compound series runs after the simple series (phase B) while the simple jar holds $16,000; the readout's "year" row follows the series being drawn, and simple and compound are read at the same year in phase B. "same after year 1" is a hand tag.
- Worked scenes show the decision tree's lit branch as a top-right chip (`TreeChip`), as in g02; the full trees are scenes 2 and 4 (large, desk at the left) and scene 7 (in the card).
- Scene 2's test strip reads "The buyer can afford $2,800 a month." (design: "can afford $2,800 a month").
- Scene 3: the calculator's "(1.004)³⁰⁰ ≈ 3.3122" and "balance ≈ −$0.02: in credit" are a grey note and the live readout (balance after 300 months, "owing" or "in credit"), not the painted calculator. The P dial sweeps 530k (still owing) to 445k (paid off early) to 470k, then settles on 488,658.79 and rounds down to .78.
- Scene 5: the crossed slip reads "same threshold, same answer" (Revision 3 wording) with the caption "the model sets the shape".
- Scene 6: the spinner's sectors grow on the k dial using the kit's `SpinnerSectors` (scale k) over the painted base; the bars share one scale with a stacked "sum" column reaching the dashed 1.
- Scene 7's tree inside the card is one node "The words?" with four paired branches (two columns would not fit beside the main line).
- Scene 9: the annuity timeline is coded (ten blue deposits, amber caps proportional to 1.05^(10 − n) − 1, the last with none); f13's statement shows "$25,155.79" in its panel on "seventy-nine".
- Scene 12: the booklet on the desk stays open (the plate has no closed state).

## Cue check
Every cue phrase (134 across 13 scenes) resolves against `measured/lesson.json` (esbuild bundle of `cuemap.ts`, run in node; a missing phrase throws at load).

## Checks run
- Type check: `npx tsc --noEmit -p work/brief245/root/tsconfig.g02g03.json` clean.
- Server-render smoke test (remotion stubbed, no bundle): every scene at 16 evenly spaced frames, no exceptions, no NaN in the markup.
- No em dashes in the lesson folder.

## Look first on the sheet
Scene 1 frames 300 to 1300 (layout ease, the compact strips against the readout and the plot; chips on the strips), scene 3 frames 500 to 1450 (right column rows and the answer at y 748, the slip at the bottom left), scene 5 frames 800 to 1500 (block and bell, tags, answers), scene 6 frames 900 to 1500 (bars and sum column, cookie, triangle plot, slip at y 842), scene 12 (the final frame).

## Playback checks for root
Scene 1 jars rising with the dots and the amber gap bars; scene 3 P dial with the balance curve ending owing, early, then on zero at month 300; scene 5 block dimming, bell drawing, tails filling then one tail; scene 6 sectors and bars growing to fill the circle and reach 1, then the triangle area reaching 1.00.
