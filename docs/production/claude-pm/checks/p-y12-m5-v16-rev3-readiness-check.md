# phys-y12-m5-v16 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `d0fba0cfb28c15bdfe708d0ba6a010a7ed1e7846b4eca1d12a47127e3b44961d`.

Compared: the Revision 2 source approved by `p-y12-m5-v16-rev2-error-check.md` (SHA256 `6124eb6a...72d9`, commit `8d79c0dd`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 11 (the wrong Mg against ω graph solid in a dashed inset card, slate scribble), scene 12 (painted apparatus as the attempt picture), scenes 13 and 15 (navy givens strips) and scene 14 (graph sketch confirmed as the picture); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 18 scene strings (1, 2, 2a, 3 to 17, build parser rules) are byte-identical to the approved Revision 2 source.

Revision 3 visuals: both givens strips repeat their card values exactly ("bung 20 g | L = 0.50 m | hanging mass 100 g | 20 revolutions in 14.0 s"; "L = 0.40 m | Mg against ω²: straight line through the origin | gradient = 0.0080 kg m"). The attempt 1 painted apparatus carries only supplied values and no lap count, stopwatch reading or arrows; the attempt 2 sketch shows only the stated line and gradient. Feedback numbers re-checked with g = 9.8: T = 0.70 s, ω = 8.976 rad s⁻¹, mω²L = 0.806 N (0.81 N) against Mg = 0.98 N, 17.8 % less; m = 0.0080 / 0.40 = 0.020 kg, slip 0.0032 kg. The scene 11 inset keeps the narration's "curve" and the cue "line" unchanged. The `custom` field kind exists in `src/explainer/sims/field-motion.ts`. All named plates exist under `public/`.

Mechanical: 6,422 characters, equal to the sum of the 18 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. No course labels in narration.

Findings:

1. **Should fix.** "Visual upgrade (Revision 3)", Simulation engines bullet: "The bung's laps (scenes 1, 2 and 4) are one circular run on the field motion engine ... so the lap counter and the stopwatch readout read the same clock and 20 laps take the tabled time." Scene 1 ends with "the stack returns to 50 g", and the 50 g model gives 20 laps in about 25.4 s (ω = 4.95 rad s⁻¹), but scene 4's stopwatch "runs to 18.1 s", which is the 100 g row (ω = 6.94 rad s⁻¹). One constant run cannot give both, and scene 4 never says which mass hangs, so a builder will either show 18.1 s against a 50 g stack or lap the bung at the 100 g speed under 50 g. Narration is not affected. Proposed fix: replace the sentence with "The bung's laps are a circular run on the field motion engine (`field-motion.ts`, a `custom` inward pull of ω²r) at ω from the hanging stack: 50 g (ω = 4.95 rad s⁻¹) in scenes 1 and 2; in scene 4 the stack shows 100 g and the run uses the 100 g row (ω = 6.943 rad s⁻¹), so 20 laps on the lap counter read 18.1 s on the stopwatch."

2. **Optional.** Scene 17 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", while "Visual upgrade (Revision 3)" sets "34 px" and "the framed memory card beside them". Proposed fix: in scene 17 change "32 px" to "34 px" and "framed card under the notes" to "framed card beside the notes".

Result: 0 blockers, 1 should fix, 1 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `db4bf7384a569271b9602dd3163c75cd8547bc18adb3aead8f019729f47bc8c3`.

Compared the current file against the version checked above (`d0fba0cf...`, HEAD) by git diff. The only change is the Simulation engines bullet, which now reads: a circular run "at ω from the hanging stack: 50 g (ω = 4.95 rad s⁻¹) in scenes 1 and 2; in scene 4 the stack shows 100 g and the run uses the 100 g row (ω = 6.943 rad s⁻¹), so 20 laps on the lap counter read 18.1 s on the stopwatch." This resolves finding 1: 2π / 6.943 × 20 = 18.10 s, matching the table and scene 4's stopwatch, and the scene 1 and 2 speed matches the 50 g stack and scene 2a's 30° droop. Narration is unchanged (all 18 scene strings identical; 6,422 characters). No U+2014. Finding 2 (optional) stands, not taken.

Result: 0 blockers, 0 should fix, 1 optional.
