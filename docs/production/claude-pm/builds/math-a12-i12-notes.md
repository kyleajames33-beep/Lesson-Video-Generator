# math-a12-i12 build notes (Revision 2, measured narration)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i12-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 15,517 frames (517 s); the notes scene is 1,350 frames. Header topic label: "INTEGRAL CALCULUS".

## Files
- `src/explainer/lessons/math-a12-i12/`:
  - `common.ts`, `cuemap.ts`, `config.ts`, `assets.ts`, `scenes.tsx`;
  - `parts.tsx`: load-time checks (∫₋₁¹ x³ cos x = 0 numerically; the profile table values; 2; 16 both ways; 67/60 and 47/30; Tₙ 4/3, 7/6, 67/60, 1.1032; the tool's primitive differentiates to x³ cos x and gives 0 on [−1, 1]; A1 6π; A2 5.25, 10.5 and the slip 6.25); `GardenRig`; `BridgeRig`. Re-exports i10's parts and `BPlot` read-only;
  - `s1.tsx` (1 to 4 and `I11FinalFrameStandIn`), `s2.tsx` (5 to 9), `s3.tsx` (10 to 16 and `I12FinalFrame`, i13's opening).
- `src/explainer/registry.ts`: one import and one array entry, after i10.

## Joins
- Frames 0 to about 162 are `I11FinalFrameStandIn` (exported from `s1.tsx`), built from the i11 design's scene 12: y = x³ on [−2, 2] with the teal and red-orange pieces, "∫₋₂² x³ dx = ?", chips "Next: symmetry" and "?", and a hand tag "the two pieces look exactly alike". When i11 is built, replace it with i11's export.
- The final frame (`I12FinalFrame`) follows the i13 design: P(t) = 4 sin(πt/12) kW on 0 ≤ t ≤ 12, "power P (kW)", "time after 8 am, t (h)", the tag "P = 4 sin(πt/12)", "Next: how much energy?" and "?". **`ma12-air-conditioner-v1.png` is not in `public/assets/maths/`, so the plate is left out**; a "a hot day" card and a two-row board (0 kW at 8 am, 4 kW at 2 pm) take its place. When the plate exists, add it to the board (upper left of the right column) and match i13's opening.

## Plate fit (root decision 30, 238-I12-PLATE-PROFILES)
- **Garden:** never warped. The blue profile is a smooth curve through Codex's nine measured surface samples; the soil tints are the region between that curve and the measured string line (y 467), teal above (cut) and orange below (fill). The maths (x³ cos x, equal units) is drawn on a separate coded plot beside the plate, where the kit `StudioSymmetryPairs` does the half-turn, the strip pair and the slice transfer.
- **Footbridge:** never warped. The opening fill (drawn behind the plate) and the blue profile follow a smooth curve through the measured springing points, quarter points and crown; the strip pair sits at the measured quarter points. The even mirror and pair also run on a coded cos x plot with the kit `StudioSymmetryPairs`.

## Departures from the design
- **Plate plus plot, not plate-aligned axes:** the kit's plate mode maps maths to a plate linearly, which would not land on these painted profiles, so the garden and bridge carry the fitted profiles and the kit part runs on a plot beside them.
- **Cut and fill board:** the kit readout labels the positive part "fill" and the negative part "cut", the reverse of this anchor (the mound is cut); a lesson board shows "soil cut (mound)", "soil filled (hollow)" and "net" (0.172, 0.172, 0 m²).
- **Scene 4:** the garden thumbnail for "the soil still moves" is a coded strip of x³ cos x with both pieces outlined amber (a plate thumbnail would be under 380 px).
- **Scene 5:** the reference-sheet form chip (open decision 2) is not shown. A "from the strips video" card and an "add four trapezia" question card fill the column until the rule.
- **Scene 7:** the strip slider is the kit stepper 1, 2, 4, 8 on the 1/x graph with a board (n, estimate, ln 3), present from the scene start at n = 4; the inflection sketch is a grey hand line, not a drawn curve.
- **Scenes 8 and 9:** the kit `StudioToolPanel` (dark frame, "online tool"); each panel arrives just before its input types, with explanation cards in its place before that, so no empty panel is on screen. The long primitive is split over two output lines. The derivative check strikes the three cancelling pairs in turn.
- **Memory card:** the garden plate (760 px wide) and an even cos plot illustrate line 1; a full kit ledger 1, 2, 2, 2, 1 illustrates line 2.
- **Attempt 2's picture** is the coded half-arch outline; the table is in the question text and the givens card.
- **Feedback cards** show worded short forms; feedback 1 keeps a "plan" card in the mistake slot until the mistake.

## Cue check
`cuecheck.sh` resolves every phrase, 0 missing. Checked by hand: "sixteen" (4) occurrence 1 is "or sixteen" (559); "Here minus x" (2) ignores the comma; "A stone" (3) is the footbridge sentence; "If there's no" (5).

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i12`: **PASS WITH WARNINGS (0 failures, 3 warnings)**: feedback 1 at local 200 (58% bare) and feedback 2 at local 411 (54% bare), both answer scenes mid-working; "Few pictures" (coded graphs not counted). Earlier runs failed scenes 7 and 9 openers (63%, 67%: empty tool panels); fixed. Report copy: scratchpad `build-i08/Explainer-math-a12-i12-grade.md`.

## Brief 238 findings handled
- **238-I12-NOTES-FIT (should fix):** six short bullets at 38 px in the left 1,060 px (55%), each one line (the long trapezoidal bullet is split into "Trapezoidal: (h/2)[ends + 2 × insides]." and "n strips need n + 1 values. Concave up: over."); the framed card starts at x 1200 and nothing crosses it (root decision 58).
- **238-I12-PLATE-PROFILES:** handled by the fits above.

## Kit issues
- `StudioSymmetryPairs` readout labels: "fill" is the positive part and "cut" the negative part, which reads backwards for a cut-and-fill anchor; label props would fix it. Its plate mode assumes a linear plate scale, so it cannot follow a hand-painted profile; a measured-sample option would help.
- `StudioCoefficientLedger` shows all-zero tallies before its first add; an option to hide untouched columns would avoid the "empty box" look.
- `StudioToolPanel` has a fixed 52 px output size; long outputs need manual line breaks.
- I edited no kit files.

## Check at playback speed
- Scene 2: the half-turn, the strip pair and the slice lifting from the mound into the hollow.
- Scene 3: the mirror ghost on the plot and the strip pair on the bridge.
- Scene 5: the trapezia adding one by one with the ledger ticking 1, 2, 2, 2, 1.
- Scene 7: n stepping 1 → 8 with the estimate falling towards ln 3 but staying above.
- Scenes 8 and 9: the typing, "working…" pulse and output timing against the narration.

## Root review round (11 Nov)
3. Scene 8: the y = 1/x graph with the ln 3 area is 900 × 440. The kit `StudioToolPanel` is beside it from the first frame: the input types from frame 20, and "log(3)" shows 30 frames after "Type in" (before "it returns log three"), so the panel is never empty and the "working…" pulse stays short. The "how it works" card is removed.
4. Feedback 2: the working runs down the left at 44 px ("ends once: 4, 0", "insides twice: 3.5 + 3 + 2 = 8.5", "half ≈ (0.5/2)[4 + 2(8.5) + 0] = 5.25", then the framed answer and the crossed slip). The half-arch picture is enlarged to 810 × 600 and scales with its box.
Grade checker re-run: PASS WITH WARNINGS (0 failures; feedback 1 at 58% bare and attempt 2 at 54% bare, plus "Few pictures"). Sheet re-made.

## Repair 12 Nov (Codex hold)
Hold moment: asset and font guard before rendering ("height 170 below minimum 180, Invalid graph window").
- Hold: scene 4's small soil graph was 170 px high, below the 180 px minimum in `graphTransform`. Fix: height 180 (y 846, so it still ends at 1026) (s1.tsx:126). The whole composition now renders (the 1 fps sweep and the grade run both complete).
- Sweep also found: scene 1 the countdown ring and its "think it through" label sat on the curve and reached the right edge (moved below the axis, s1.tsx:55); scene 2 "half-turn: same graph" touched the y label (s1.tsx:70).
- Sheet re-made: `docs/production/claude-pm/builds/math-a12-i12-sheet.jpg` (the grade checker's 16 sheet stills, no stamps). `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 3 warnings).
- Verification: a 1 frame per second sweep of the whole composition (every frame rendered with a text and card probe that flags text on text, cards over text, text within 30 px of the frame edge and text under 30 px; every flag inspected visually, plus overview sheets), fixes applied, then the affected lessons swept again until no real collision remained. Before and after full-resolution stills of the hold moment: `work/brief239/i12/repair-12nov/` (before = Codex evidence frame, after = rebuilt still). Scoped typecheck clean. Not re-voiced; narration, measured lesson.json and design files unchanged.
- Codex recheck: play the hold moment and the scenes named above at 1x. Not committed (root commits).

## Repair 13 Nov (Codex hold 2)
Held moment: scene 4, about 2:41 (frame 4830): the blue soil curve struck through "area > 0: the soil still moves".
- Fix: Tag moved below the axis, in the clear lower right of its strip (s1.tsx).
- Other probe hits fixed: Plot labels share i10's PLabel (16 px paper stroke).
- Other probe hits fixed: Attempt picture: "x² sin x + 3" given a paper stroke (s3.tsx).
- Probe: the new line-through-text check (`out/explainer/.repair-sweep/ink-check.sh`): 1 fps normal, text-hidden and text-only renders; a hit is a drawn graphic still visible beside glyph ink. It flags all seven Codex hold-2 defects on the unrepaired source. Whole lesson: 13 runs before, 7 after. Accepted: red strike-outs, the kit StudioSymmetryPairs value labels "+0.02", "−0.02" and "+0.11" (a kit item, reported), the final crossfade frame.
- Sheet: `docs/production/claude-pm/builds/math-a12-i12-sheet-repair2-2026-11-13.jpg`. `npm run grade:explainer`: PASS WITH WARNINGS: 0 failures, 3 warnings.
- Lesson-folder changes only; no kit edits. Not re-voiced; narration and timing unchanged. Codex recheck: play the hold moment and the scenes above at 1x.
