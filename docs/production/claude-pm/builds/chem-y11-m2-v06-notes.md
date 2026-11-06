# chem-y11-m2-v06 (mole ratios): Year 11 Chemistry course pilot, new build, 6 Nov 2026

Sheet: `chem-y11-m2-v06-sheet.jpg`. It shows 16 evenly spaced stills over 14,338 frames: frame (i + 0.5) x 14,338 / 16, so 448, 1344, and so on to 13890. The key-notes scene is 1,767 measured frames, above the 1,200 floor.
Builder's grade: A on all 16 frames, pending root sign-off. Nothing has been watched at playback speed. A second round of 8 spot stills was checked inside the simulations and at scene ends.

## Root polish round (6 Nov, after root review): re-sheeted
Root numbered the attempt-2 card frame 13 and its feedback frame 14. On this sheet they are frames 12 and 13; the content is the same.
- **Scene 8, using a mole ratio (sheet frame 6).** The g01 working board is under the equation from the first frame:
  - the navy givens card, "n(Al) = 0.40 mol";
  - a teal ratio strip, "ratio 2 Al : 3 Cl2", whose 2 and 3 are ringed on "two to three";
  - the rule line;
  - the working row, built term by term;
  - a dashed answer frame, "n(Cl2) = ? mol", that becomes "n(Cl2) = 0.60 mol" framed green with a tick on "which is zero point six";
  - the crossed slip "0.40 × 2 ÷ 3 = 0.27 mol" with "ratio upside down".

  The particle panel is about 1.5x larger: Al radius 72, Cl2 radius 54, labels 56 px. The old "Al : Cl2 = 2 : 3" line is folded into the ratio strip.
- **Scene 9, testing it: continuous variation (sheet frame 7).** The hero cup and small run sheet are replaced in this scene by the seven cups at 340 px tall, about 2x. They sit in a row across the middle with their navy and violet fills already drawn and "5 + 35" to "35 + 5" labels. The question line is above them and the definition box beneath. The ΔT readout sits beside the box, with an arrow to the 30 + 10 cup. The equation and the "heat released" tag sit along the bottom. Scene 10 still opens on the hero cup with the small run sheet, a stage change.
- **Scene 14, attempt 2 card (sheet frame 12).** The card shows these from the first frame:
  - the N2 + 3H2 → 2NH3 particle picture at 1.75x, top right;
  - the data line under the equation;
  - a dashed "your working" box.

  The 10 s countdown ring and "Pause here to answer." show through the hold; the hold still was checked at frame 10843.
- **Scene 15, feedback 2 (sheet frame 13).** A "masses, to scale" bar panel sits on the right from the first frame:
  - N2 given, 28.0 g;
  - the H2 the student claims, 84.0 g, struck through in red on "mass ratio";
  - the H2 that reacts, which grows on "six grams" to 6.04 g with a green tick.

  Under the panel: "coefficients are moles, not grams". Root's note said 6.05 g. I kept **6.04 g**, which matches the design (Revision 3) and the framed answer. 6.05 is the value from early rounding, and the screen's grey tag explains it.
- **Contrast.**
  - The default rich-text weight is now 800, and question cards use weight 700.
  - Amber text is darker (#a35c00).
  - Recap and condition lines (feedback 1 recap, the N and H data, the card captions) are now full ink, not grey.
  - The safety-glasses plate is now 200 px tall.

  Plates carrying the idea are 300 px or more: balance 424 to 510, cups 340 to 620, bike 400, jar 340, crucible 300. Small plates appear only as recap thumbnails.

## Files created
- `src/explainer/lessons/chem-y11-m2-v06/`:
  - `common.ts`: measured lesson lookups, response holds taken from `holdSeconds`, plates with measured alpha boxes and anchors.
  - `parts.tsx`: rich multi-colour text with per-segment cues, chips with a red strike, write-on hand tags, pen rings and arrows, the framed answer (dark-ink box and green tick), readouts, ball molecules in HSC colours, the mixing slider, and the two-colour cup fill for the painted foam cup. It imports the C5 text, M8 C01 plate and M8 C04 graph parts read-only.
  - `widths.ts`: real advance widths from the repo's Inter Tight and Caveat fonts, so boxes and strikes fit their text.
  - `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 11), `s3.tsx` (12 to 17), `scenes.tsx`, `assets.ts`, `config.ts`.
  - `config.ts` sets id `Explainer-chem-y11-m2-v06` and the key notes to `Math.max(1200, d)`.
- `src/explainer/registry.ts` gets `import {config_y11c_m2v06} from './lessons/chem-y11-m2-v06/config';`, and `config_y11c_m2v06` is appended to `explainers`.

## Plates
All the plates the design names exist, and each was inspected:
- top-pan balance
- beaker of water (36 mL)
- bike frame and bike wheel. The wheel's stray low-alpha pixels are invisible on paper.
- foam cup calorimeter
- safety glasses
- old copper sulfate crystals
- white-powder crucible

None are missing and none are stretched (uniform scale from the alpha box).

## Departures from the design (with reasons)
- **Scene 1:** the balance slides in on "Now look at a reaction" (about 6 s), not on "two grams". The first sheet frame (12 s in) would otherwise catch it mid-entry. The plan tags still write on their cue words.
- **Opening frame:** v05's final frame is not built yet, so it is approximated. The Fe2O3 panel shows 2 Fe : 3 O by count and a mass-share bar (Fe 69.9%, O 30.1%, checked: 111.69 / 159.69). The coefficients turn from amber to teal on "coefficients".
- **Scene 3:**
  - The particle counter panel (H2 2, O2 1, H2O 2, with a "H2 : O2 = 2 : 1" readout) is live from the scene start. A third H2O counter is added because the design relabels three counters to 2, 1 and 2 mol.
  - The count-up ticks H2 and O2 together, so the ratio readout really stays 2 : 1.
  - The "mole ratio 2 : 1 : 2" chip arrives on "mole ratio", because the final "two" is only 0.7 s before the scene ends.
- **Late final cues moved to the nearest earlier spoken words.** Each of these final words falls under 1 s before its scene cut:
  - scene 4, two-pan comparison: on "each oxygen molecule" and "sixteen"
  - scene 5, crossed third line: written on "never", crossed on "ratio"
  - scene 6, equation strip and "2 : 1, count the parts": on "A chemical equation". There is no shrink of the bike group.
  - scene 7, H2O to H2O2: on "never subscripts" and "changing a subscript"
  - scene 8, crossed slip: on "Flip" and "zero point two seven"
  - scene 9, equation: on "For hydrochloric acid"
  - scene 11, crossed "highest point" chip and ghost point: on "single highest point" and "because the true ratio"
  - scene 13, crossed 1 : 1 chip: on "Saying one to one" and "classic slip"
  - scene 15, crossed 84.0 g: on "The student treated" and "mass ratio"
- **Scene 8:**
  - A coded particle panel (2 grey Al, 3 green Cl2) is added, with "2 : 3 = 0.40 : 0.60, same ratio, scaled", so the opening frame is not text only.
  - The working line shows "n(Cl2) = ?" until the numbers are spoken.
  - The row builds term by term on the spoken numbers ("So zero point four zero", "times three", "over two") rather than all on "chlorine". "wanted ÷ given" writes on "chlorine".
- **Scene 9:**
  - The "continuous variation" gloss box shows from the scene start, beside the heading it defines, so the opening frame carries it.
  - The run-sheet cups are present at once.
- **Scene 10:**
  - The mixing slider and its readouts appear on "That makes a volume ratio" (about 2 s early) at 20 + 20, then jump to 5 + 35 on "five millilitres".
  - The handle steps 5 to 35 as the mixtures are spoken, then sweeps 35 back to 5 on "split".
  - The ΔT readout is not shown in this scene.
- **Scene 11:** "most heat" sits by the graph peak with an arrow, not under the cup, for space.
- **Scenes 12 and 14:** each card carries a non-answer picture: the foam cup ("same method") on card 1, and N2 + 3H2 → 2NH3 drawn as molecules on card 2, which shows only the given equation.
- **Scene 13:** the card is replaced by a compact recap (data table, conditions, demands) at 32 to 34 px, rather than the card shrunk to unreadable text.
- **Scene 16:**
  - The recap strip has three picture panels: molecules, balance, and cup with a mini peak.
  - On "moles", "molar mass" and "and ratios", the three model chips write under the panels.
  - On "old jar" the strip clears to the design's final frame: jar and crucible, the "lost only 30.2%" and "formula: 36.1%" chips, an amber "?", the model panel and the Next chip.
- **Scene 17:** five bullets at 38 px in role colours and the framed memory card. The last 70 frames cross-fade to scene 16's final frame, held with `Freeze` at its last frames.

## Cue check
Every `cues()` phrase resolves against `docs/production/claude-pm/lessons/c-y11-m2-v06/measured/lesson.json`. The config builds, and a missing cue would throw. The response holds are measured, each from the end of speech to the scene end:
- prediction: 3 s, frames 174 to 264
- attempt 1: 10 s, frames 603 to 903
- attempt 2: 10 s, frames 598 to 898

They use the shared countdown, with "Pause here to answer." on "Pause here". Audio comes from `public/audio/chem-y11-m2-v06/*.wav`. The key-notes line uses `public/audio/math-a12-d01/scene-16.wav`, as the measured JSON specifies.

## Grade per frame (final sheet)
1. hook (balance at 0.00 g, Fe2O3 panel, first plan tag): A
2. particles (rearranged molecules, tallies ringed, live counter panel): A
3. masses (beaker landing, display ticking, bars to scale): A
4. conservation (bars joined, framed sum): A. The bottom-centre is the emptiest of the set, about 30%.
5. bike plates with tags and crossed chip: A
6. scaling opening (task, equation, givens card, ratio strip, dashed answer frame, large particle panel): A
7. continuous-variation opening (seven large filled cups with labels, question, definition box): A
8. method (labels, gloss, live slider at 20 + 20): A
9. peak (sweep done, "base left over: 30 mL", 6.6 point ringed): A
10. attempt 1 card: A
11. feedback 1 (graph crossing, row a, tags): A
12. attempt 2 card (large particle picture, your-working box): A
13. feedback 2 (rows 1 and 2, tag, molecules, mass-bar panel): A
14. conclusion (memory card, strip with plates, model chips): A
15. key notes: A
16. key notes: A

Type: current lines 44 to 60 px, readouts 50 to 52 px, the 2H2O callout 150 px. Tags are 26 to 30 px (illustrative data, source tags, small grey notes); nothing is smaller. No em dashes, people or hands.

## Check at playback speed
- Scene 1: the balance slide-in and the plan tags with arrows to the strip.
- Scene 3: atoms flying from H2 and O2 into two waters. The count-up, 2 to 24 then a log run to 1.20 x 10^24, with blur. The ratio readout ring.
- Scene 4: the display ticking to 36.03 g as the beaker sets down. The beam tipping to the O2 side.
- Scene 5: the O2 bar sliding to join the H2 bar, then the group shrinking up.
- Scene 10: the handle steps keyed to the spoken mixtures, and the run-sheet labels filling in. The cup's navy and violet layers trading height on the sweep back.
- Scene 11: the 105-frame sweep with points dropping from the readout onto the graph, which is fast and needs a playback judgement. The leftover readout changes. The best-fit lines and the framed 20 : 20.
- Scene 8: the dashed answer frame swapping to the green-framed 0.60 mol.
- Scene 9 to 10: the cut from seven large cups to the hero cup and small run sheet.
- Scene 15: the 84.0 g bar strike and the 6.04 g bar growing.
- Scene 17: the cross-fade back to the handoff's final frame.
- At sheet scale, scene 13's ring on the 2 before NaOH and scene 8's ring on the 3 sit slightly off-centre. Confirm at full size.
