# phys-y12-m5-v19 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `faa2413c152adfba3da73302f69d1575fc7c60659a22ac8632bfa9c5aa906ccb`.

Compared: the Revision 2 source approved by `p-y12-m5-v19-rev2-error-check.md` (SHA256 `19d005b2...c6a5`, commit `bc52594c`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to J, simulation engines, "Memory card pictures are plain diagrams", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 10 (the "24 h" ring), scenes 11 and 13 (satellite and Earth plates as the attempt pictures) and 12 and 14 (navy givens strips); scene 16 heading hold 50 s to 45 s; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source.

Revision 3 visuals: the scene 12 givens strip repeats the card exactly (T = 12.0 h, circular orbit, G, M_E, R_E); the scene 14 strip repeats the card's period, circular orbit and 30° inclination. The attempt 1 picture deliberately omits the altitude bracket and any scaled circle; the attempt 2 picture shows only the supplied 30° tilt, with the satellite still and no ground track. Feedback numbers re-checked: T = 4.32 × 10⁴ s, r³ = 1.892 × 10²² m³, r = 2.66 × 10⁷ m, h = 2.03 × 10⁷ m. The polar-view drift readouts agree with the run rule stated (satellite turns minus ground turns per day: 12 h, 360° east; 20 h, 72° east; 24 h, 0°; 30 h, 72° west). The three true-scale runs in scene 8 give about 92 min (400 km), about 11.97 h (20,200 km) and about 23.9 h (35,900 km), in line with the table. `stateAt` and `useMotionTime` exist in `src/explainer/sims/`. All named plates exist under `public/`.

Mechanical: 5,630 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. No course labels in narration.

Findings:

1. **Optional.** Scene 16 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", and the "Holds" line still says "key-notes (about 50 s)", while Revision 3 sets "34 px", "the framed memory card beside them" and 45 s. Proposed fix: change "32 px" to "34 px", "framed card under the notes" to "framed card beside the notes" and "about 50 s" to "45 s in all".

Result: 0 blockers, 0 should fix, 1 optional.
