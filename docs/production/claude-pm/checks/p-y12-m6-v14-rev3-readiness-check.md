# phys-y12-m6-v14 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `82c803e911a93674a607f019e825c575c0c8dc8c6869a7def3fdfc3fbae14444`.

Compared: the Revision 2 source approved by `p-y12-m6-v14-rev2-error-check.md` (SHA256 `618b35a1...`, commit `2df27a06`) against the current file (Revision 3, commit `039f0bbb`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, "Meters are plates; readouts are chips", "Small pictures in the table are diagrams", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 1 (painted multimeters with coded readouts; a temperature readout chip), scene 3 (pole-transformer inset replaces coded fins), scene 11 (lamination sheets and soft-iron rod as the picture) and scene 13 (the painted transformer as the picture); a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module or "the syllabus" (scene 3's "Year 11" reference is allowed).

Revision 3 visuals: the attempt 1 picture shows the two constructions the card names, with no current loops, so the answer is not given away; the attempt 2 picture is the transformer with plain "in" and "out" leads and no values. The existing Revision 2 givens strips still match their cards (thin sheets, insulated, soft iron; I_p = 2.0 A, V_p = 230 V, I_s = 19 A, V_s = 23 V). Numbers re-checked: P_in = 460 W, P_out = 437 W, η = 95 %, 23 W lost; the reversed slip gives 105 %. The pole-transformer inset matches its tag "cooling: oil, fins". All named plates (`phys-y11-digital-multimeter-v1.png`, `y12p-pole-transformer-v1.png`, `y12p-lamination-sheets-v1.png`, `phys-y11-rod-soft-iron-v1.png`, `y12p-transformer-v1.png`) exist under `public/`.

Mechanical: 5,841 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** "Visual upgrade (Revision 3)" and the kit-gap note say the circuits engine "has no alternating supply and no transformer part". Since 14 November `circuits.ts` has an `'ac'` source and an ideal transformer (losses are still not modelled, so the lesson-coded readouts remain the right choice). Proposed fix: change the sentence to "the circuits engine's ideal transformer has no losses, so the loss readouts stay lesson-coded".

2. **Optional.** Scene 16 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

3. **Optional.** Scene 7 narration names an earlier video by number: "The fix is the closed iron core from video twelve". This is not a module label, but the Revision 3 rule keeps video codes off screen, and the number may not match a 2025 playlist. Proposed fix: "The fix is the closed iron core we met earlier".

Result: 0 blockers, 0 should fix, 3 optional.
