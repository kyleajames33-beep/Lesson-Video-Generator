# phys-y12-m5-v17 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `b822dd6e04f6b63871b93cd364b18cde4bf75aa99ddf0fda426f870435748770`.

Compared: the Revision 2 source approved by `p-y12-m5-v17-rev2-error-check.md` (SHA256 `5c9d47bf...dca4`, commit `8d79c0dd`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to K, simulation engines, "Planets are plates", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 13 and 15 (painted Mars and Earth plates as the attempt pictures) and 14 and 16 (navy givens strips); scene 18 heading hold 50 s to 45 s; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 18 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. ("the HSC data sheet" in scene 9 is unchanged and names a resource, not a course label.)

Revision 3 visuals: the scene 14 givens strip repeats the card exactly (M = 6.42 × 10²³ kg, r = 3.40 × 10⁶ m, g = 9.8 N kg⁻¹, G = 6.67 × 10⁻¹¹ N m² kg⁻²); the scene 16 strip repeats the card's condition and R_E = 6.371 × 10⁶ m. The Mars picture carries only the supplied radius; the Earth picture carries no line, mark or arrow. Feedback numbers re-checked: GM = 4.282 × 10¹³, r² = 1.156 × 10¹³, g = 3.70 N kg⁻¹, 3.70 / 9.8 = 0.378 (38 %), unsquared slip 1.26 × 10⁷; h = 2R − R = 6.371 × 10⁶ m, slip 1.274 × 10⁷ m. The simulation note (inverse-square arithmetic for the slider and probe; a `central` run for the handoff satellite) is buildable. `y12p-mars-v1.png` and `phys-y11-earth-v1.png` exist under `public/`.

Mechanical: 6,320 characters, equal to the sum of the 18 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. No course labels in narration.

Findings:

1. **Optional.** Scene 16 (feedback 2) Visual still says "On the outline a navy r line to a dashed circle at 2R", but Revision 3 replaces the coded outline with the painted Earth plate on the card, which has shrunk to the top. Proposed fix: change "On the outline" to "On the Earth plate (enlarged beside the working)".

2. **Optional.** Scene 18 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", and the "Holds" line still says "key-notes (about 50 s)", while Revision 3 sets "34 px", "the framed memory card beside them" and 45 s. Proposed fix: change "32 px" to "34 px", "framed card under the notes" to "framed card beside the notes" and "about 50 s" to "45 s in all".

Result: 0 blockers, 0 should fix, 2 optional.
