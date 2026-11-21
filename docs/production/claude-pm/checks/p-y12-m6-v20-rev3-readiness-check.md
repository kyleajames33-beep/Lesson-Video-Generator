# phys-y12-m6-v20 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `f02dcd977b5987e4a8e86fd67f583134f295f109c276bea2a3bf6a3937b33d64`.

Compared: the Revision 2 source approved by `p-y12-m6-v20-rev2-error-check.md` (SHA256 `d07fb3c1...`, commit `2df27a06`) against the current file (Revision 3, commit `039f0bbb`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, "Stands and clamps are plates", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 1 and 5 (painted stands with a plain release ledge instead of clamps), scene 7 (painted metal plate as the copper sheet), and scenes 11 and 13 (painted coaster car and brake rail; the two painted tubes with magnets, as the attempt pictures); a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or a video number (the "(Module 7)" after scene 15's chip and the "### 15." heading are author notes, not spoken).

Revision 3 visuals: neither attempt picture gives the answer away (the car's fin is short of the rail with no currents, forces or bars; both magnets are still, with no timers or eddy rings), and each shows only what its card states. The release ledge does not conflict with any cue ("Drop a strong magnet", "plastic tube"). Linking "K" and "heat in the fins" so their sum stays fixed agrees with scene 8's narration. Numbers unchanged and correct: t = √(2 × 0.30 / 9.8) = 0.25 s. All plates named for building exist under `public/` (`phys-y11-retort-stand-v1.png`, `phys-y11-boss-crossbar-v1.png`, `phys-y11-metal-plate-v1.png`, `y12p-coaster-car-v1.png`, `y12p-coaster-brake-rail-v1.png`, `y12p-copper-tube-v1.png`, `y12p-copper-tube-slotted-v1.png`, `y12p-neodymium-magnet-v1.png`).

Mechanical: 6,502 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** The Codex asset brief still lists item 6, `y12p-plastic-tube-v1.png` (not delivered), while scene 5 and "Visual upgrade (Revision 3)" keep the plastic tube coded under root decision 15. A plate worker could paint an unused plate. Proposed fix: mark item 6 "withdrawn: the plastic tube stays coded (root decision 15)".

2. **Optional.** Scene 16 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 2 optional.
