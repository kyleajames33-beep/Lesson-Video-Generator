# phys-y12-m6-v15 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `825df002723b156365b5e023e89f59ba60ae9587cddc3c701b565d84c1016297`.

Compared: the Revision 2 source approved by `p-y12-m6-v15-rev2-error-check.md` (SHA256 `13a48ac2...`, commit `2df27a06`) against the current file (Revision 3, commit `039f0bbb`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, "No balance picture", root rules R1 to R4, question-card and notes-scene rules); an "Upgrade (Revision 3)" paragraph on scene 10 (the balance icon becomes two chips either side of "against"); a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 17 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module or "the syllabus".

Revision 3 visuals: the scene 10 chips are a fair replacement and contradict no narration. Numbers unchanged and correct: 500 MW at 250 kV gives 2000 A and 8.0 MW (1.6 %); at 500 kV, 1000 A and 2.0 MW (0.4 %); at 25 kV, 20 000 A and 800 MW; attempt 1 gives 1000 A and 3.0 MW, then 400 A and 0.48 MW; attempt 2's line drop is 1200 V, and 1200² / 3.0 = 0.48 MW. `solveCircuit`, `runCircuit` and `over` exist in `src/explainer/sims/circuits.ts`. All named plates exist under `public/`.

Mechanical: 5,899 characters, equal to the sum of the 17 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD (one U+2013 sits in a quoted site excerpt in the author notes, unchanged since Revision 2).

Findings:

1. **Should fix.** "Visual upgrade (Revision 3)", Simulation engines bullet: the station is "a battery", the line "R = 2.0 Ω" and the load "a resistor chosen so that the same power is sent", and "In scene 4 the voltage slider is a `runCircuit` change with `over`, so the moving charges thin out as the readouts fall and the point rides the 1/V² curve." In a battery and resistor circuit, raising only the battery voltage with the load fixed raises the current (I = V / R_total), so the loss rises as V². That is the exact misconception the lesson corrects ("More voltage, more loss"). The current falls as P/V only if the load resistance is reset at every voltage: R_load = V²/P − R_line, which is 123 Ω at 250 kV, 498 Ω at 500 kV, 1,998 Ω at 1,000 kV and 12,498 Ω at 2,500 kV. A linear `over` ramp of both values also leaves P off 500 MW between the stops. As written, a builder could produce a slider whose loss readout climbs while the narration says "Half the current gives a quarter of the loss." Proposed fix: replace the scene 4 sentence with "In scene 4 the slider steps V × 1, × 2, × 4, × 10 (250, 500, 1,000, 2,500 kV); at each step the load resistor is set to R_load = V²/P − R_line (123, 498, 1,998, 12,498 Ω) so that VI stays 500 MW, and `solveCircuit` then gives I = P/V and P_loss = I²R_line; between steps the readouts move only through the solved stops (no linear ramp of the battery alone)."

2. **Optional.** Scene 9 narration names an earlier video by number: "as we saw in video twelve". This is not a module label, but the Revision 3 rule keeps video codes off screen, and the number may not match a 2025 playlist. Proposed fix: "as we saw with mutual induction".

3. **Optional.** "Visual upgrade (Revision 3)" and the kit-gap note say the circuits engine "has no alternating supply and no transformer part". Since 14 November `circuits.ts` has an `'ac'` source and an ideal transformer, which could carry the step-up and step-down stages in scene 8. The lesson symbols remain acceptable. Proposed fix: update the sentence to name the engine's `ac` and `transformer` parts as available.

4. **Optional.** Scene 17 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 1 should fix, 3 optional.
