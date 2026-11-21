# phys-y12-m7-v02 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `4a9f3d2d0de0c5ec9d520608464ff53135857a30934508d56145115a4e7a1cbc`.

Compared: the Revision 2 source approved by `p-y12-m7-v02-rev2-error-check.md` (Codex, 9 November; its evidence file `work/brief233/v02-calculations.json` names SHA256 `db450311...`, the version in commit `bd8ce5b5`) against the current file (Revision 3, commit `2339843a`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to H, simulation engines, "Small pictures are plates", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 4 (painted ray box as the source), scene 7 (painted satellite), scene 8 (small toothed-wheel plate) and scene 13 (small wheel and oscilloscope plates in the row of four; final-frame wording unchanged); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 14 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number (scene 4 says "a later video"). On-screen video code only, covered by the build rule: scene 4's chip "water tube: see v05".

Revision 3 visuals: the plate swaps contradict no cue. Scene 13 keeps the same four items in the same order, so the join to v03 is unchanged. Running Earth and Jupiter as `central` runs on one clock is buildable. Scene 2 numbers unchanged and correct: 3.0 × 10¹¹ m / 1000 s = 3.0 × 10⁸ m s⁻¹; 3.0 × 10¹¹ / 1320 s = 2.3 × 10⁸ m s⁻¹. `phys-y11-ray-box-v1.png`, `y12p-satellite-v1.png` and the other named plates exist under `public/`.

Mechanical: 6,123 characters, equal to the sum of the 14 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Should fix.** "Visual upgrade (Revision 3)", Simulation engines bullet: "The "runs late" readout is the Earth to Jupiter distance from the two runs divided by c". That is the whole light travel time from Jupiter to Earth: about 2,100 s at the nearest (about 6.3 × 10¹¹ m) and about 3,100 s at the farthest (about 9.3 × 10¹¹ m). The lateness is the extra time compared with the nearest position. Scene 2 shows "delay ≈ 1000 s", and the narration says "Today, that delay is measured at about a thousand seconds", which is the extra path (the orbit's diameter, 3.0 × 10¹¹ m) divided by c. A readout built as written would show about 3,100 s on the far side, contradicting both. Proposed fix: "The "runs late" readout is the Earth to Jupiter distance from the two runs minus its value at closest approach, divided by c, so it starts at 0 and reaches about 1000 s with Earth on the far side, because the picture does."

2. **Optional.** Scene 14 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 1 should fix, 1 optional.
