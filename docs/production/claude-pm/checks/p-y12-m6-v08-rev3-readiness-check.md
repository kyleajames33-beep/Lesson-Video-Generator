# phys-y12-m6-v08 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `eba32c8d734b580864f20200de0ad40d74bf8757d7035d840b8af5c9ab304a7a`.

Compared: the Revision 2 source approved by `p-y12-m6-v08-rev2-error-check.md` (SHA256 `887b35ec...`, commit `7500810a`) against the current file (Revision 3, commit `039f0bbb`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, "Bench parts are plates", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 1 (the strips hang from the painted boss and crossbar) and scene 8 (painted wooden blocks on the pan; the multimeter shows the circuit run's current); scene 15 heading hold 60 s to 45 s; a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 15 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or a video number (scene 2's "Year 11" reference is allowed).

Revision 3 visuals: the circuits-engine runs fit the narration. Scene 1's strips carry the same-direction currents ("both carry a current upwards"), then one is reversed. Scene 8's rods in series carry opposite currents ("out along one and back along the other"), which repel, so the reading rises. Scene 8 numbers unchanged and correct: F = 0.10 × 10⁻³ × 9.8 = 9.8 × 10⁻⁴ N, F/l = 1.96 × 10⁻³ N m⁻¹, gradient 2.0 × 10⁻⁷ N A⁻². Keeping the foil strips coded because they must bow is a sound call. No new pictures or strips. All named plates exist under `public/`.

Mechanical: 6,308 characters, equal to the sum of the 15 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** Scene 15 (key notes) still reads "Bullets 36 px", "framed card under the notes" and "The quiet hold is about 60 s (at least 40 s)", and the "Holds" line says "key-notes (about 60 s)", while the heading and Revision 3 set 45 s, 34 px and the card beside the notes. Proposed fix: change "Bullets 36 px" to "Bullets 34 px", "framed card under the notes" to "framed card beside the notes", "about 60 s (at least 40 s)" to "45 s in all", and "about 60 s" in the Holds line to "45 s in all".

Result: 0 blockers, 0 should fix, 1 optional.
