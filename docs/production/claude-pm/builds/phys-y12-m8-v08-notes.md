# phys-y12-m8-v08 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v08.md` (Revision 3; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v08/common.ts` imports `work/physics-prebuild/p-y12-m8-v08/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (`cuecheck-m8b.py v08`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v08/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 5,918 characters, 17 scenes).
- **Holds.** (1) Hook 3 s prediction: the prepared hold sits at the scene end, after "tiny dense nucleus?"; the design wants it on "prediction" with the answer following at once (misplaced; ring over the answer, tick after the ring). Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 4 detector arm runs inside its narration (no hold named).
- **Opening frame:** v07's `M8V07FinalFrame` at frame 0; from frame 1 the "tiny, negative, light" hand tag fades; the sphere pulses on "Here's Thomson's atom"; on "gold foil" the sphere and alpha fade into a foil edge of gold atoms and the painted chamber appears; the heading is already this lesson's question; the "Next" chip fades on "So why did scattering require" (capped).
- **Plates:** the scattering chamber and its arm layer (one canvas; the arm turned about its own hub). **Plate requests: none.** The bowling-ball inset (two coded spheres) and the cricket oval (a top-down outline, no players) are coded as the design and root call 1 record.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v08/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 11, `s3.tsx` 12 to 17, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v08`, topic "THE NUCLEAR ATOM". Registry: after m8-v07.
- New shared kit file: `src/explainer/physics/atom/scattering.tsx` (chamber and arm specs with anchors; `Chamber` with the arm at θ, beam and flash; `chamberAt`, `armScreenAt`; field motion runs `pointRun` (1/r² from a point charge) and `sphereRun` (the same charge spread through a sphere), `deflection`, `runPath`).
- Lesson parts: `PlumAtom`, `NucPlus`, `Alpha`, lazy Rutherford, Thomson and large-nucleus runs, `RunPath`, a seeded random-nudge `zigzag`, the coded `Oval`.

## Stages built

1 sphere pulse; names (words only); the foil edge of gold atoms with "≈ 10⁻⁷ m: a few hundred atoms"; the painted chamber with its foil ringed; 3 s ring with three chips; straight paths on "nudged by tiny angles"; one alpha reversing at the foil on "back", "observed!", tick after the ring. 2 an alpha with its two electrons drifting off, "the bullets", +2e, a mass bar (α ≈ 7300 mₑ against an electron speck), 2 × 10⁷ m s⁻¹ (7.7 MeV: 1.93 × 10⁷); the painted chamber with labels, the beam from the slit to the foil, a scintillation flash, the arm sweeping 0°, 45°, 90°, 150° about its hub with a θ scale. 3 nine plum-pudding atoms with paths from the field motion engine (spread charge; bends exaggerated, tagged), a short push arrow, a bowling-ball inset, "< 0.01° per atom" (one electron at most 0.0079°), a zigzag of nudges, the exit fan, "Thomson: small deflections only". 4 the live detector arm (θ and relative count-rate readouts; flashes thinning: about 240 000, 3000, 41, 3.5, 1), "fits Thomson and Rutherford", "rarer and rarer", framed "thin gold: about 1 in 20 000 near 90°", slate-crossed Thomson counter, a small reversing layer, Rutherford's words (site wording). 5 Thomson's atoms beside a computed reversal; "needed: one huge push"; slate crosses on the weak push and the light electron; the total-turn sliver; framed "Thomson's model: ruled out" as the atoms grey. 6 the wash collapsing to a tiny "+"; Coulomb's law chip and an F against r sketch; the alpha at the edge of Thomson's atom (r ≈ 10⁻¹⁰ m); an alpha approaching a tiny core on a log distance path with a live "push compared with at 10⁻¹⁰ m" readout rising to 1.1 × 10⁷, the arrow too long for the screen; rows 3.3 × 10³ (over 3000), framed 1.1 × 10⁷ (about ten million); slate-crossed "so about 3300 times stronger". 7 two collision insets (1D elastic): the alpha shoves a light centre aside and carries on; it rebounds from a heavy centre at nearly full speed; the chamber's flash stays bright, "still fast", "about 92% of its energy"; purple mass chips; "nucleus" with "tiny", "positive", "nearly all the mass". 8 the Rutherford stage (paths on the field motion engine past one nucleus: far, about 20°, about 161°), nuclei enlarged and tagged, distance brackets, the small chamber's arm matching. 9 a large-nucleus stage (wrong idea, slate-crossed "large angles: common") against the tiny-nucleus stage (framed rare result), a log size scale (nucleus 10⁻¹⁵ to 10⁻¹⁴ m, atom 10⁻¹⁰ m), the cricket oval with a pea (7.6 mm for a 160 m oval; pea drawn larger, tagged). 10 the nuclear model (+Ze, electrons on dashed paths, mostly empty), the paths greying with "?" and "not settled". 11 the chamber, straight and reversing path icons, hand lines. 12 to 15 cards (arm at a large angle with one faint flash; arm at 0° with many flashes) and brief feedback. 16 a gold nucleus (+79e) filling with proton discs, charge and mass bars (79 mₚ of 197 mₚ, a dashed grey gap, "≈ 118 mₚ missing", "charge 0?"); heading changes to v09's question. 17 key notes with the memory card.

## Deviations

- **Handoff heading carries v09's learner question** (root rule), on "So what evidence established" (capped).
- Scene 2: the chamber is on screen from the first frame (sparse-frame fix); the beam starts on "a narrow beam".
- Scene 3 and 5: Thomson-atom bends are exaggerated (true values under 0.01° per atom) and tagged.
- Scene 4: the rates are the design's illustrative 1/sin⁴(θ/2) values (tagged); flash frequency follows the log of the rate; the arm turns in the plane of the picture about its hub.
- Scene 6: the bottom panels appear on "Coulomb's law" (sparse-frame fix); the live readout uses the displayed distances.
- Scene 7: lesson-coded one-dimensional elastic collisions (the design's recorded kit gap: no two-body engine); both insets are set up from the first frame.
- Scene 8: one nucleus's paths are computed; the other nuclei are context.
- Scene 9: sizes on a labelled log scale; the stage paths are clipped to their panels.
- Scene 16: the empty charge and mass bars are outlined from the first frame, and a small chamber recap sits at the lower right until "called them protons" (sparse-frame fix).
- Hook: no heading underline.
- Feedback lines split into short framed rows so they do not run under the picture.

## Final frame (exported as `M8V08FinalFrame` in `s3.tsx`)

`<HandoffBoard08 f={end} final />`: heading "What evidence established an uncharged massive particle in the nucleus?"; a gold nucleus (400, 560, r 220, pale red with a red rim, "enlarged") labelled "gold nucleus: +79e" and partly filled with red "p" discs; "proton: charge +e, mass mₚ (Rutherford, 1920)"; charge bar (760, 360, 1000 × 60) with 79/197 filled red and "79 protons → +79e ✓"; mass bar (760, 580) with "79 protons → 79 mₚ" red, a grey dashed gap to "197 mₚ", the grey hand tag "≈ 118 mₚ missing" with a grey pen line, "charge 0?"; chip "Next: what evidence established an uncharged massive particle in the nucleus?".

## Numbers (all from `common.ts`, checked against "Numbers used")

α 6.65 × 10⁻²⁷ kg ≈ 7297 mₑ (≈ 7300); 7.7 MeV: 1.93 × 10⁷ m s⁻¹ (≈ 2 × 10⁷); electron limit 0.0079°; foil 10⁻⁷ m ≈ 345 atoms; 1 in 20 000 near 90°; rates 2.4 × 10⁵, 3.0 × 10³, 40.6, 3.48, 1; closest approach 2.96 × 10⁻¹⁴ m (≈ 3 × 10⁻¹⁴); 3.3 × 10³; 1.1 × 10⁷; slip 3300; energy kept 0.92; gold nucleus 1.4 × 10⁻¹⁴ m across, ratio 20 770 (screen "about 20 000"), pea 7.6 mm; 79, 197, 118.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v08` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 4 warnings** (sparse frames in concentrate-charge, concentrate-mass, memory aid and attempt 1). Earlier runs failed on sparse apparatus, concentrate-charge, concentrate-mass and handoff frames, a label under the heading, feedback lines running under the picture and paths leaving the scene 9 panels; all fixed. Report: `out/explainer/Explainer-phys-y12-m8-v08/grade/Explainer-phys-y12-m8-v08-grade.md`.

**Honest grade: B on provisional timing.** The detector arm with thinning flashes, the computed reversal against Thomson's nudges, the live Coulomb readout and the light and heavy targets carry the reasoning; motion needs judging at playback speed.

## For root

- Hook pause position (as v04 to v06).
- Root call 1 (cricket oval as a coded outline) built as designed.
- m8-v09 opens on `M8V08FinalFrame`.
