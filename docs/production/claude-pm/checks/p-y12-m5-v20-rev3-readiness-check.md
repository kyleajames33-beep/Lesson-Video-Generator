# phys-y12-m5-v20 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `802608548aee141d689e0807e586bfd6b05d00aab39f002a2123b708dbbf62e3`.

Compared: the Revision 2 source approved by `p-y12-m5-v20-rev2-error-check.md` (SHA256 `dba900c1...8b28`, commit `bc52594c`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to H, simulation engines, "The Mars record is a table", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 13 (Mars plate as the attempt picture, no ellipse, Sun or arrows) and scenes 12 and 14 (navy givens strips); scene 16 heading hold 50 s to 45 s; a recorded kit gap (no swept-area option in `FieldMotionView`, so the sectors are lesson overlays); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source.

Revision 3 visuals: the scene 12 givens strip repeats the card exactly (Jupiter a = 5.20 AU; Earth a = 1.00 AU, T = 1.00 year); the scene 14 strip repeats the card's 1.381 AU and 1.666 AU. The attempt 2 picture omits the ellipse, the Sun and the arrows, so the faster point cannot be read off. Numbers re-checked: teaching orbit a = 1 AU, e = 0.6 gives r_p = 0.40 AU, r_a = 1.60 AU, v_p = 59.6 km s⁻¹, v_a = 14.9 km s⁻¹ and a monthly sector of πab / 12 = 0.209 AU², so r v matches at both ends as the run note says; Halley a = 17.92 AU, T = 75.8 years; Jupiter T² = 140.6, T = 11.9 years, slip 3.0 years; Mars v_p / v_a = 1.21, slip 0.83. Running every orbit on the `central` engine is consistent with the Revision 2 readouts. All named plates exist under `public/`.

Mechanical: 5,664 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. No course labels in narration.

Findings:

1. **Optional.** Scene 16 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", and the "Holds" line still says "key-notes (about 50 s)", while Revision 3 sets "34 px", "the framed memory card beside them" and 45 s. Proposed fix: change "32 px" to "34 px", "framed card under the notes" to "framed card beside the notes" and "about 50 s" to "45 s in all".

Result: 0 blockers, 0 should fix, 1 optional.
