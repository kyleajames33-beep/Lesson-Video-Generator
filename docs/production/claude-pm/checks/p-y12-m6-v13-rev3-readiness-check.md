# phys-y12-m6-v13 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `fcb2e86db9976ca61868ca375a008b8860c34d88dae53f7d5cf0a37bc37da2a2`.

Compared: the Revision 2 source approved by `p-y12-m6-v13-rev2-error-check.md` (SHA256 `5f2183cb...`, commit `2df27a06`) against the current file (Revision 3, commit `039f0bbb`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to H, simulation engines, "No balance picture", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 1 and 6 (the balance icon becomes a trade strip of two linked chips "V" and "I" over "P fixed"); a recorded kit gap (no transformer part); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module or "the syllabus" (scene 5's "Year 11" reference is allowed). Neither scene 1 nor scene 6 speaks the word "balance", so the trade strip contradicts no narration.

Revision 3 visuals: the trade strip is physically right (step-up: V rises, I falls, P = VI fixed). Slider readouts unchanged and correct for 10 W at V_p = 10 V: N_s = 50, 100, 200, 400 gives V_s = 5.0, 10, 20, 40 V and I_s = 2.0, 1.0, 0.50, 0.25 A; I_p = 1.0 A. Stage times agree with the scene lengths (scene 2, 794 characters, about 60 s; scenes 8 and 9, about 73 s). No new pictures or givens strips. All named plates exist under `public/`.

Mechanical: 6,349 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** Scene 6 "Upgrade (Revision 3)": "as the slider moves, the "V" chip's arrow grows upward while the "I" chip's arrow grows downward". The scene 6 Visual brings the strip in "On "current"" (the scene's last word), after the slider has finished, so the two lines give different timings. Proposed fix: "On "current" the trade strip returns; its "V" arrow grows upward and its "I" arrow downward, and "P fixed" does not change." (or move the strip onto the slider stage from "Try it live").

2. **Optional.** "Visual upgrade (Revision 3)" and the kit-gap note say the circuits engine "has no alternating supply and no transformer part". Since 14 November `circuits.ts` has an `'ac'` source and an ideal transformer. The lesson-coded arithmetic is still correct. Proposed fix: note that the slider and load switch may use the engine's `transformer` part.

3. **Optional.** Scene 16 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 3 optional.
