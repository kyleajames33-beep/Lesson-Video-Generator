# math-a12-d10 build notes (Revision 3, coaster)

Sheet: `work/quality-audit/fixed/math-a12-d10-sheet.jpg` (16 stills at (i − 0.5)/16 of 14,765 frames; key notes 1,350 frames). Stills rendered one batch of 4 at a time under `out/explainer/.stills-lock`.
Builder's grade: A (every frame has its main picture from its first frame; type at or above the floors). Frames root should look at: 5 (scene 4 just after "Here": graph at 0.72 scale with the method and "three kinds" cards, lower band only one working row) and 11/13 (attempt layout, which the checker calls sparse, 58% paper, same layout as d02 to d07).
Automatic check: `npm run grade:explainer -- Explainer-math-a12-d10`: PASS WITH WARNINGS (0 failures). Warnings: the attempt frame is sparse (accepted model layout), and a 21 px "ln 2" superscript in scene 12 (fixed afterwards: chip at 42 px). Report copied to `work/quality-audit/fixed/math-a12-d10-grade.md`.

## Files
- `src/explainer/lessons/math-a12-d10/`: `assets.ts`, `common.ts`, `config.ts` (key notes `Math.max(1350, …)`), `scenes.tsx`, `parts.tsx` (coaster rig, candidate table, height bars, interval picture, plan card, coaster badge), `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8, memory card), `s3.tsx` (9 to 14, plan view, `D10FinalFrame` for d11).
- `src/explainer/registry.ts`: one import and one entry.

## Coaster rig (decision 30: plate never warped)
- Measured the delivered track's rail top (first alpha > 128 per column) at 16 x values from −2 to 3: within 3 native px of the 11-point guide everywhere (largest at x = 3, the cut end). Native mapping: x → (300 + (x + 2)·480)·0.58167, y → (150 + (18 − y)·59.08)·0.58129.
- The coded plot is sized so its y-to-x pixel ratio equals the plate's: `rideH(w) = 120 + 24·((w − 126)/6)·(34.343/279.2)`. The plate is drawn at the plot's own x scale, so the blue curve lies on the rail. Ride stage 1340 × 717 (plot 1214 × 597). Scene 4 scales the whole stage by 0.72 (plate scales with it uniformly).
- The car (150 px) sits with both wheel contacts (manifest: 541.5 and 1001.5 at y 705) on the curve: the chord between the contacts is one wheelbase; contacts are clamped inside −2 ≤ x ≤ 3, so at the ends the car stays on the painted track. Tilt comes from that chord (unequal units included).

## Joins
- d10 frame 0 imports d09's `D09Final` (s4) plus d09's memory line and `Valley` badge, so frame 0 is d09's final frame exactly (stage `D10_STAGE` from d09 parts: 310, 190, 1300 × 640). On "Picture" (frame 296) it cross-fades (18 frames) to the d10 stage at the same geometry, which then grows to the plate-matched ride stage and the track fades in. This depends on d09's uncommitted files `math-a12-d09/s4.tsx` and `parts.tsx` (`D09Final`, `D10_STAGE`, `Valley`, `VALLEY`); commit them together, or tell me if d09 renames them.
- Final frame: scene 13 at rest, exported as `D10FinalFrame` (s3.tsx): heading "Next: a function from a real situation", the memory line small at the top, the ink fence plan view (wall, x, y, x) and the chips "40 m of fencing", "largest area?", "Later: optimisation problems (d18)", "Next: why tan x has gradient sec²x". The key notes cross-fade back to it over their last 40 frames (series rule 16). d11 imports it.

## Departures (with reasons)
- No faint outside ghost of the curve on "included": d09's final frame already removed the outside parts; the band outline and the endpoint rings pulse instead.
- Scene 2: the trial ceiling sits at 10 from "Picture a horizontal line"; parts of the track above any ceiling are tinted red whenever the line is shown (so the 10 line also shows the climb poking through), and the readout is "level line at" plus "track above the line? yes/no". Tag reads "ceiling: is anything above it?".
- Scene 2 opens with the definition card's first line ("the largest value over the whole domain") and two recap chips ("the hump: 2", "top of the climb: 18") so the frame is not empty before "A point".
- Scene 3: the candidate card builds line by line ("flats inside" on "So inside", "both ends" on "But at an end", "corners" on "sharp corner"), retitled "Candidates" on "candidates". The corner panel sits in the plot's empty upper left (the readout moved to the right column).
- Scene 4: the scanner bars stay on the graph beside the table (not slid into a row). The table rows appear as candidates are named and the values on their cues. A "Three kinds of candidate" card fills the table slot until "So the stationary". The answer frame runs full width on one line at 44 px.
- Scenes 5 to 7: kit `GivensCard` (title "Given"); a point on the curve with a live readout; in scene 6 the point hops to each candidate as it is evaluated. A Plan card (d07 pattern) fills the table slot in scene 7 and in both feedback scenes until the answer arrives.
- Scene 6's crossed slip starts on "Solving" (855), not "completely" (951), because the scene ends at 980. Scene 7's silent slip starts at 1170 (the scene ends at 1263).
- Scene 8: the scene 4 table (with its tags) and a coaster badge are on screen from the first frame; the keys light on their cues; the "compare" and "closed interval" lines glow on their cues.
- Scene 13: StrandMotifs (strand-parts) at native size; the coaster badge fades with them; a short ink hand caption names the strand.
- Attempt pictures: coded empty axes, band and filled endpoint dots, 720 × 380 (the design's 420 px picture enlarged to the accepted attempt layout). The design's "your working" box is dropped (root rule).

## Cue check
All cues come from the measured lesson.json through `cue()`; every phrase was checked by script against the captions, with the intended repeat. Repeats fixed to the right word: scene 3 "find it" (979), scene 4 "values are minus" (880), "two minus two and" (911), "minus two and eighteen" (927), "equals three" (1119), "x equals one" (1311), "both inside" (664); scene 5 "to four" (251), "or minus two" (564); scene 6 "eight and a half" (185), "plus two four" (278); scene 7 "equals one" (594); scene 8 "Then compare the" (449); scene 10 "maximum is zero" (554), "equals two" (714), "Sixteen from" (754); scene 12 "Zero is h" (798).

## Kit issues
- `QuestionCard` shrunk to the top is about 1,140 px wide, so a `GivensStrip` beside it must start at x ≥ 1,160 (moved there).
- `FunctionSimulator` always draws its main curve; for the coaster stage I pass a transparent colour and draw the curve myself over the plate (grid under the plate, curve over it). A `curveLayer: 'none'` option would be cleaner.
- `StudioCandidateTable` has one `winnerAt` for all winner rows, so separate max and min tags need a lesson table (`CandTable`).
- Untracked `src/explainer/math/strand-parts.tsx` has an unused `clamp` (noUnusedLocals only).

## Check at playback speed
- Scene 1: the cross-fade from d09's frame, the stage growing as the track fades in under the curve, the car's ride (−2 to −1 on "Near", then the dip and climb, about 4.5 s) with "highest so far" holding at 2.00 until x = 2.
- Scene 2: the ceiling dropping to 2 and rising to 18 with the red tint shrinking; the floor rising and stopping at −2.
- Scene 3: the car rolling back from (3, 18) to (0, 0), the short uphill roll, then to (−1, 2) and to the end with the steep stub and the arrow.
- Scene 4: the stage shrink, the scanner sweep, the bars on their value cues, the quick last ride on "On the coaster".
- Car on the steep climb: it sits perpendicular to the rail (seats pointing up and left), which is correct for a lift hill but should be judged in motion.
