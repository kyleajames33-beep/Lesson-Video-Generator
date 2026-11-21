# phys-y12-m5-v15 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `a0f7f6f093ee1c7882c57af4947176b2e598621a647282a6c80b3894f1b37e05`.

Compared: the Revision 2 source approved by `p-y12-m5-v15-rev2-error-check.md` (SHA256 `25fbde74...dd1f`, commit `8d79c0dd`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to H, simulation engines, root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 11 and 13 (exam-style diagrams confirmed as the attempt pictures, steel ball plate on attempt 1) and 12 and 14 (navy givens strips); scene 16 heading hold 50 s to 45 s; a recorded kit gap (no string or track constraint, so the vertical circle stays lesson-coded); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source.

Revision 3 visuals: both givens strips repeat their card values and conditions (m = 0.30 kg, smooth horizontal table, r = 0.60 m, constant 4.0 m s⁻¹; m = 0.40 kg, string 0.50 m, vertical circle, 3.0 m s⁻¹ at the top, air resistance negligible). The attempt pictures show only supplied values, with no tension arrow and no bottom speed. Numbers re-checked with g = 9.8: 2π × 80 = 503 m, 2.50 × 10³ × 503 = 1.26 × 10⁶ J; F_T = 8.0 N, slip 30 J, K = 2.4 J; v² = 9.0 + 19.6 = 28.6, v = 5.35 m s⁻¹. The block's W = Fs cos θ control and the lesson-coded vertical circle are buildable. All named plates exist under `public/`.

Mechanical: 5,683 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. No course labels in narration.

Findings:

1. **Should fix.** "Visual upgrade (Revision 3)", Simulation engines bullet: "In scene 3 the running total of work is summed from the run's own force and displacement at each of the 24 steps, so it stays at zero because the force in the run is at right angles to every step." That is only true for vanishingly small steps. Over a finite step the displacement is a chord, which leans inwards by half the step angle, so the force at the start of each step times the chord is not zero: with F = 2.50 × 10³ N and r = 80 m the sum is about 1.6 × 10⁵ J for 24 steps and about 5.5 × 10⁴ J for 72 steps. A builder following the sentence literally would show a growing total beside narration that says "the total over a whole lap is zero too" and the "total W = 0 J" tag. Proposed fix: "In scene 3 the running total of work adds, for each step, the run's force dotted with its instantaneous velocity times the step time (F · v Δt), which is zero at every step because the force is at right angles to the velocity; the readout stays at "total W = 0 J"."

2. **Optional.** Scene 16 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", and the "Holds" line still says "key-notes (about 50 s)", while Revision 3 sets "34 px", "the framed memory card beside them" and 45 s. Proposed fix: change "32 px" to "34 px", "framed card under the notes" to "framed card beside the notes" and "about 50 s" to "45 s in all".

Result: 0 blockers, 1 should fix, 1 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `3f3df0e97e8ee71aaab7153db039eac5721fc899f8634b53c1dcd34fea3acd66`.

Compared the current file against the version checked above (`a0f7f6f0...`, HEAD) by git diff. The only change is the Simulation engines bullet: the scene 3 running total now "adds, for each step, the run's force dotted with its instantaneous velocity times the step time (F · v Δt), which is zero at every step because the force is at right angles to the velocity; the readout stays at "total W = 0 J"." This resolves finding 1: F · v is zero for a circular run at every instant, so the readout agrees with the narration ("the total over a whole lap is zero too") and the "total W = 0 J" tag. Narration is unchanged (all 16 scene strings identical; 5,683 characters). No U+2014. Finding 2 (optional) stands, not taken.

Result: 0 blockers, 0 should fix, 1 optional.
