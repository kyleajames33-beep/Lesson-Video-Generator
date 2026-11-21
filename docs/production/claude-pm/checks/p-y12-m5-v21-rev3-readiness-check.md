# phys-y12-m5-v21 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `7b0424831c562261f9335e7c4b6ec2aaf2b5ed767af397bb751559e13c43dd23`.

Compared: the Revision 2 source approved by `p-y12-m5-v21-rev2-error-check.md` (SHA256 `ffd00149...e3de`, commit `bc52594c`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to G, simulation engines, root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 11 and 13 (Earth and satellite plates, and the spacecraft plate alone, as the attempt pictures) and 12 and 14 (navy givens strips); scene 16 heading hold 50 s to 45 s; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source.

Revision 3 visuals: the scene 12 givens strip repeats the card exactly (m = 500 kg, r₁ = 7.0 × 10⁶ m, r₂ = 9.0 × 10⁶ m, G, M_E); the scene 14 strip repeats the card's two energies. The attempt 1 picture shows only the two orbits the card states, with no radii, bars or arrows; the attempt 2 picture is the spacecraft alone, so part (a) cannot be read off. Numbers re-checked: GMm = 2.001 × 10¹⁷, 1/r₁ − 1/r₂ = 3.175 × 10⁻⁸ m⁻¹, ΔU = +6.35 × 10⁹ J; ΔU = +2.0 × 10¹⁰ J for attempt 2; GMm/R = 6.28 × 10¹⁰ J for 1000 kg, with ½, ⅔ and 9/10 of it at 2R, 3R and 10R. The stage times agree with the scene lengths (for example scenes 3 and 4, 960 characters, about 72 s). The simulation note (exact arithmetic, `central` runs only for the handoff orbits) is buildable. `y12p-spacecraft-v1.png` and the other named plates exist under `public/`.

Mechanical: 5,783 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. No course labels in narration.

Findings:

1. **Optional.** Scene 16 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", and the "Holds" line still says "key-notes (about 50 s)", while Revision 3 sets "34 px", "the framed memory card beside them" and 45 s. Proposed fix: change "32 px" to "34 px", "framed card under the notes" to "framed card beside the notes" and "about 50 s" to "45 s in all".

Result: 0 blockers, 0 should fix, 1 optional.
