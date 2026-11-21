# phys-y12-m6-v17 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `bf40c77468f4dca367ffff1f885ca290f4e5500509330919f2febd529aa2e37e`.

Compared: the Revision 2 source approved by `p-y12-m6-v17-rev2-error-check.md` (SHA256 `d8dbb6f0...`, commit `2df27a06`) against the current file (Revision 3, commit `039f0bbb`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, "Schematics stay coded; apparatus is painted", "The jam is a plate", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 8 (painted wooden block), scene 11 (the value-free circuit confirmed as the picture), scene 13 and scene 14 (the bench in painted plates instead of a silhouette); a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or a video number.

Revision 3 visuals: the circuits-engine model is consistent with the design's numbers: 12 V supply, R = 2.0 Ω, a back-emf battery opposing the supply gives I = (12 − ε)/2.0, 6.0 A at ε = 0 and 1.0 A at ε = 10 V; with R_start = 4.0 Ω, I_start = 2.0 A. `solveCircuit`, the `rheostat` part and smooth `over` changes exist in `src/explainer/sims/circuits.ts`. The attempt 2 bench shows only what the card states (an extra mass on the hanger) and no readouts. Feedback numbers unchanged and correct: ε_back = 9.0 − 0.80 × 1.5 = 7.8 V; jammed I = 6.0 A; slip IR = 1.2 V. `phys-y11-wooden-block-v1.png` and the other named plates exist under `public/`.

Mechanical: 6,556 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** Scene 16 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 1 optional.
