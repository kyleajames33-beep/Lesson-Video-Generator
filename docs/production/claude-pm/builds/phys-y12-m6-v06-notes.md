# phys-y12-m6-v06 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m6-v06.md` (Revision 3 visuals win; root label edit of 21 November applied). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m6-v06/common.ts` imports `work/physics-prebuild/p-y12-m6-v06/lesson.json` (made with `python -I work/physics-prebuild/make-provisional.py phys-y12-m6-v06`) on one marked line (`// PROVISIONAL TIMING: switch to measured/lesson.json when voiced`) and exports `PROVISIONAL = true`. Every change is keyed to a cue phrase with `cueFrame` (83 cue phrases, all resolve); keyframe lists pass through `mono`, late offsets through `cap`. When the measured take lands at `docs/production/claude-pm/lessons/p-y12-m6-v06/measured/lesson.json`, change that import, set `PROVISIONAL = false`, then re-run the cue check, the grade and a still sweep.
- **Hook hold missing (as v01 to v05).** The proton and the "yes? / no? / depends on its mass?" chips arrive on a capped "would protons at that speed"; the 3 s countdown draws only if a `responseHold` appears.
- **Opening frame:** v05's exported `M6V05FinalFrame` at frame 0 (heading already this lesson's question). From frame 1 the dashed F_E and F_B arrows and the chip fade, the painted supply ("80 V") wires to the plates and the magnet inset arrives on "Here are our crossed fields"; the beam fires on "lots of different speeds".
- **Plates:** high-voltage supply (scenes 1, 6, 7, 14), horseshoe magnet inset (scenes 1, 14), mass spectrometer `public/assets/chemistry/m8-mass-spectrometer-v1.png` (scene 8, alpha box (161, 520) to (1839, 1479), drawn 420 px wide, about 240 px tall). All uniform scale. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m6-v06/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 9, `s3.tsx` 10 to 16, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m6-v06`, export `config_phys_y12_m6_v06`, PHYSICS, topic "CROSSED FIELDS", accent `#9c5a00`, key notes at least 1350 frames. Registry: after m6-v05.
- Shared: `crossed.tsx` (`CrossedStage`, `crossedRun`; see v05 notes) and `magnetic.tsx` (`Wire`, `SlitBarrier`, `Horseshoe`, `Arrow2`; see v04 notes). Lesson parts: `SupplyRig` (the painted supply wired + to the top plate), `RunOn` (a run's dashed trail, the particle and its velocity arrow), `ForcePair` (F_E amber, F_B rose), `MassSpec`.
- **Simulation:** every beam particle is a `crossedRun` on the field motion engine (`custom` field: electric plus magnetic acceleration, schematic screen units, `selRun`), so the E/B run is a straight line and faster or slower runs curve towards F_B or F_E (slow ones reach the top plate); scene 6's path is recomputed from the slider speed every frame, and the deflection flag is read from the net force. The readouts v, F_E, F_B and F_net are exact arithmetic (`forcesAt`). The proton and the heavier ion are runs with both forces reversed and a smaller q/m (still straight).
- All values from `common.ts` with e = 1.602 × 10⁻¹⁹ C, checked against "Numbers used": E = 80/0.020 = 4.0 × 10³ V m⁻¹; F_E = F_B = 6.408 × 10⁻¹⁶ N ("6.41"); E/B = 2.0 × 10⁵ m s⁻¹; slip B/E 5 × 10⁻⁶; 4.0 × 10⁵: F_B 1.2816 × 10⁻¹⁵ ("1.28"), net 6.41 × 10⁻¹⁶ down; 1.0 × 10⁵: F_B 3.204 × 10⁻¹⁶ ("3.20"), net 3.20 × 10⁻¹⁶ up; A1 3.0 × 10⁴ V m⁻¹, 6.0 × 10⁵ m s⁻¹, slip 1.2 × 10⁴. Directions checked: electron F_E up, F_B down; positive ion F_E down, F_B up; electrons drifting left in a wire with B into the page are pushed up, as is conventional current to the right.

## Stages built

1 last time's stage wired to the painted supply ("80 V across 2.0 cm"), the magnet inset, five electrons fired at 0.6 to 1.7 × E/B on their runs ("many speeds", "slow", "fast"), one straight through the slit ("v = ?", "one gets through"), the waiting proton and three chips, "initial deflection, not to scale"; 2 the comparison table (row labels and empty panels from the start; rows writing in on their cues), mini panels (a resting + pushed between plates; a resting + in crosses, "F = 0 at rest"), the fixed F_E bar against the F_B bar growing with speed ("same at any v", "grows with v"); 3 the crossed stage, labels, F_E up ("−: against E"), the positive ghost's dashed rose arrow up ("+: palm rule"), the electron's F_B down ("−: reverse", "flip for −"), framed "F_E up, F_B down", "opposed"; 4 F_E = F_B, the q's struck, framed v = E/B, the electron running straight through the slit ("F_net = 0"), "q cancels, m never appears", the same-way panel (E up) with the crossed "both forces the same way: balance" ("must oppose"); 5 calculation layout with the stage at the right: both force rows framed, "equal: net 0", the framed 2.0 × 10⁵ m s⁻¹, the crossed "v = B/E" ("E on top"); 6 the live slider on the full stage with the supply: v, F_E, F_B, F_net and deflection every frame, the path from the engine, the ink net arrow, "× 2" and "÷ 2", "electric force never moves", the framed win rule; 7 a proton with both forces flipped running straight ("both flip"), the heavier ion following, framed "yes" and "velocity selector: selects v = E/B only", "speed, not mass", the crossed "heavier ion is deflected"; 8 the small selector feeding an analyser region of crosses: two +e ions on semicircles (the heavier wider), "same v, same q: r ∝ m", "r = mv/(qB) ∝ m/q", the painted mass spectrometer, the Thomson chip; 9 the framed memory card (v = E/B, the two bars, "fast → follows F_B", "slow → follows F_E" pulsing); 10 to 13 question cards (plates with crosses, "2.0 cm", "600 V", a beam and a slit; plates with a + ion moving right) and brief feedback (equal arrows on a particle passing the slit; qE down and 2qE up); 14 the beam again: only E/B through ("only E/B"), then the proton and the heavier ion; 15 the handoff (final frame); 16 five notes and the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): "Why does a current-carrying wire feel a magnetic force?". The design's final frame kept this lesson's question; v07's designer should open on the heading above.
- Every mistake and crossed chip is slate (root rule R1), not red.
- Scene 2 is a full-width table (the stage leaves for that scene); the F_B bar is driven by a speed ratio readout ("v = 1.0 × E/B").
- Hand tags that would need a subscript are worded out: "electric force never moves" (design "F_E never moves"), "fast follows the magnetic push" (feedback 2).
- The mass spectrometer plate is drawn 420 px wide (about 240 px tall); the design's "about 360 px tall" would make it 630 px wide beside the analyser.
- The hook's proton waits under the entrance (the inset sits where the design put it).
- Cue moves: hook chips on a capped "would protons"; scene 2's last row capped; scene 5's framed speed on a capped "exactly its speed"; scene 6's second win row on a capped "Too slow, electric wins".

## Final frame (exported as `M6V06FinalFrame` in `s3.tsx`)

`<HandoffBoard />`: heading "Why does a current-carrying wire feel a magnetic force?"; a cross region (560, 200, 800 × 660) with "B into page" at its top left; a coded copper wire (44 px bar, ink outline) along y 560 from x 520 to 1400; an orange arrow "I" pointing right above it (x 580 to 800, y 430) with "conventional current"; "−" charges every 110 px inside the wire drifting left (phase follows the frame, so the frame holds them in motion), each with a small amber arrow up; "electrons drift left" under the wire; a large dashed amber outline arrow up from the wire at x 1020 labelled "F = ?"; chip "Next: why does a current-carrying wire feel a magnetic force?" at (96, 890). No plates, supply or magnet poles.

## Sweep fixes (stills pass 1)

20 stills at half scale. Fixed: "one gets through" and "only E/B" on the stage label; the hook proton on the magnet inset; scene 4's label on the plate signs; scene 5's brace running into the speed row; scene 6's ring off its readout; scene 7's crossed chip on the ions leaving the slit; the analyser tag on the ion labels.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m6-v06` (25 November 2026, src build, provisional timing): PASS WITH WARNINGS: 0 failures, 6 warnings (sparse frames 54 to 56%: compare-forces, worked-selector, attempt 1, feedback 2; attempt 2 at 60% bare (question-scene warning); the 16 px "s" subscripts in feedback 2's shrunk card). Report: `out/explainer/Explainer-phys-y12-m6-v06/grade/Explainer-phys-y12-m6-v06-grade.md`. Scoped typecheck clean; cue check: all 83 cue phrases resolve.

The first grade failed once: the comparison table early in scene 2 was 67% bare. Fixed by drawing the row labels, the two panel cards and the bar tracks from "To see why".

**Honest grade: B+ on provisional timing.** The beam of many speeds on the engine with only E/B through the slit, the fixed F_E bar against the growing F_B bar, the flipped ghost charge, the live slider with readouts and recomputed path, the flipped proton and heavier ion running straight, and the analyser sorting by mass each carry their idea. Soft spots: deflections are schematic (open decision 1), four frames at 54 to 56% bare, and motion needs judging at playback speed.
