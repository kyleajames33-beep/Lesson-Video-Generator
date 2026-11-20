# chem-y11-m1-v09 build notes (built on the measured narration)

Builder: Claude build agent, 20 November 2026. Explainer id `Explainer-chem-y11-m1-v09` (16 scenes, 14,338 frames, about 478 s; key notes 1,350 frames = 45 s, config also enforces `Math.max(1200, durationInFrames)`). Sheet: `work/quality-audit/fixed/chem-y11-m1-v09-sheet.jpg` (no frame stamps). Grade report: `out/explainer/Explainer-chem-y11-m1-v09/grade/Explainer-chem-y11-m1-v09-grade.md`. No MP4 built. Narration text unchanged.

## Files
`src/explainer/lessons/chem-y11-m1-v09/`:
- `common.ts`: measured lesson lookups, response holds, plates with measured alpha boxes (chlorine jar from V08, silicon lump, hydrogen discharge tube lit, mass spectrometer).
- `parts.tsx`: V08 parts re-exported; new: the isotope colour key (chlorine greens, boron tan and brown, silicon grey and slate, model elements violet), atom tokens, `BalanceBeam` (number-line bar with token stacks; pivot readout; the bar tilts by how far the pivot is from the stacks' weighted mean, computed from the same counts, so it is level only at the computed Ar), `WRow` (current row 52 px, shrinking to a solid 38 px when the next lands), `ERow` (rows aligned on "="), `DataTable`.
- `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16), `scenes.tsx`, `assets.ts`, `config.ts` (`config_y11c_m1v09`).
- `src/explainer/registry.ts`: import and entry added after V08 (one edit).

Scene 8 uses the chance engine (`sims/chance.ts`, weighted outcomes 10 at 19.9 and 11 at 80.1, seed 3, 500 trials, `TrialView`, `ChanceHistogram`, a running-mean line drawn from `run.total`). Seed 3 was chosen by looking: the first slow draws are 11, 10, 11, 10, 11, 11 (both isotopes early), the average wobbles to 10.58 and finishes at 10.80.

## Plates
All design-named plates exist; never stretched (uniform scale from measured alpha boxes). None missing.

## Departures from the design (with reasons)
- Hydrogen discharge tube (scene 15): the plate is 5 : 1, so at 1000 px wide it is about 195 px tall (the design asks about 420 px; that height would need a 2100 px width). Not stretched; accepted by root.
- Scene 15 strip and crossed rainbow run red on the left (656, 486, 434, 410 nm left to right; gradient red to violet) at root's request, to match V10's strips exactly. Positions and sizes are unchanged (V10 copied them).
- Scene 15 gains a heading ("Next: what are the electrons doing?"), a "hydrogen gas, glowing" label, and a small chlorine balance recap ("nuclei + how common each isotope is") that fades before the tube arrives, to fill the opening of the scene.
- Scene 1: after V08's final frame, the 35Cl nucleus slides right to make room for the jar; the 37Cl nucleus stays. The number line runs 35 to 37 under the nuclei.
- Scene 2: live "chlorine-35 atoms", "chlorine-37 atoms" and "atoms in the sample" counters fill the right column while the grid fills, then hand over to the tally.
- Scene 3: the scene 2 sum carries over at the lower right ("a weighted average: 76 × 35 + 24 × 37 = 3548; 3548 ÷ 100 = 35.48; each mass counted as often as it occurs") until the data table arrives; the definition is at 42 to 52 px; the mass spectrometer stays large through the scene (the design's step back to 200 px was dropped to keep the frame full; the data table sits beside it). A pen ring marks the abundance column on "which sorts atoms by mass".
- Scene 4: the percent-to-fraction conversions and the 100-atom result fill the lower left before the product rows.
- Scene 5: larger stacks (76 and 24 tokens) hover above the beam from the first frame and drop on "stack each one"; a "from the 100-atom count" block sits top right until the memory card; before the pivot slides, "pivot starts at 36, the simple average" and "Each token is one atom: the beam carries all 100." explain the opening; "Ar = where the beam balances" writes on "The relative atomic mass".
- Scene 6 (root ruling): no tokens on the empty beam (one of each read as "equal numbers, balances at 10.5"). A solid data card "boron-10: 19.9% | boron-11: 80.1%" (46 px, full ink) sits above the beam, with the navy "which way does it lean?" line; the 3 s ring is shown full from "Boron has" and counts down over the hold. Nothing answer-bearing (pivot readout "?").
- Scene 7: an ink tag "boron-11 is the crowd" shows until the fractions row lands.
- Scene 8: closing chip arrives on "Ten point eight is the average"; the sense-check tag carries two ticks on "both tests".
- Scenes 9 and 10: a large silicon plate fills the lower left until the rows need the space; a small plate stays top right. In scene 10 both stacks grow together in the 78 : 22 ratio so the beam stays level at 28.22 throughout.
- Attempt cards show "(2 marks)".
- Feedback 1 and 2: a task line under the givens strip from frame 0 and a one-line method reminder at the bottom left (navy, 36 px). Feedback 2 also shows the template "Ar = 63 × x + 65 × (1 − x)" from frame 0 until the stated equation lands.
- Key notes: shortened to five two-line notes (the checker flagged 492 characters).

## Cue check
Every cue resolves against the measured word timings (the cue helper throws on a missing phrase; the build and stills ran without errors). Repeated phrases take a stated occurrence: scene 1 "five" #2, scene 4 "percent" #2 and "Add them" #2 (the first "add them" is in "then add them up"; the first sweep caught the final row arriving 18 s early and it was fixed), scene 10 "percent" #1 and #2. Prediction ring shown from "Have a think", 3 s countdown over the hold; attempt rings full from "Pause here", 10 s countdown.

## Dense sweep (3 s)
Full sweep twice (160 stills each, chunks of 40 under `out/explainer/.stills-lock`, released between chunks), then partial re-sweeps of the scenes changed afterwards (2, 5, 6, 11, 13, 15, 16). Defects found and fixed:
1. Scene 4 final row arrived on the wrong "add them" (cue fixed).
2. Sparse openings over 40% bare: scenes 1 (right third), 2, 3, 4, 5, 6, 7, 9, 10, feedback 1 (fills listed above).
3. Scene 2: the green pen arrow landed on the "35" tick label, then on the "35.48" label (rerouted under the line).
4. Scene 3: the pen ring sat off "76 ×"; the abundance ring cut the column heading.
5. Scene 8: the first tick landed on "11,"; the readout ring covered its label.
6. Scene 9: the "x" tag in the outline was too small to read (now 96 px); "silicon" label clashed with the struck chip (moved).
7. Scene 10: the beam tilted while the stacks filled (contradicting "the pivot holds 28.22").
8. Feedback beams enlarged; the "nearer 22" tag moved clear of the readout.
9. Scene 15: the spectrum band sat empty for about 5 s (lines now draw just after the tube); rainbow strike kept inside the margin.
10. Key notes: the "balance point = Ar" label touched the pivot.
11. Scene 5: a jar added at the beam end clashed with the tilted bar; removed.
12. Handoff: scene 15 re-swept after the red-left flip (lines and rainbow match V10); final frame confirmed.
13. Root rulings round: scenes 3, 5, 6, 12, 14 and 15 re-swept at 3 s after the last changes; no overlaps or clipped labels found.

## Things to check at playback speed
Scene 2 token sort (about 1 s, staggered); scene 5 drop, tilt and pivot slide 36.00 to 35.48 with the bar levelling; scene 7 pivot slide to 10.80; scene 8 draws (six slow, then fast) and the average settling; scene 10 stacks growing while level; scene 1 nucleus slide at the start (0.3 to 1.3 s).

## Grade checker (final run, 20 Nov 2026, about 22:48 Sydney)
`npm run grade:explainer -- Explainer-chem-y11-m1-v09`: **PASS, 0 failures, 0 warnings.** Report: `out/explainer/Explainer-chem-y11-m1-v09/grade/Explainer-chem-y11-m1-v09-grade.md`. Earlier runs warned on sparse frames (weighted-average definition, balance opening, prediction hold) and failed once on the balance opening at 65% bare; all fixed with teaching content (above).

## Builder's sheet grade
A. Every one of the 16 frames carries a painted plate, a live beam with its readout, or the chance run; worked rows at 52 px with green frames and crossed slips; question cards whole with a picture; key notes five two-line bullets with the framed memory card and a 45 s hold. Plates are not present in scenes 5 to 8 and the feedback scenes (the coded beam and the simulation are the live pictures there, as the design specifies).
