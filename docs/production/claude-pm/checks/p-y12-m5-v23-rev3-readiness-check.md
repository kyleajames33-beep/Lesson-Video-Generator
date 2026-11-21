# phys-y12-m5-v23 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `fe2183db512b0f27fc0daff55f19396c56af621e31fd944749186ea78ac9310c`.

Compared: the Revision 2 source approved by `p-y12-m5-v23-rev2-error-check.md` (SHA256 `0012c647...c1a9`, commit `bc52594c`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening. Also checked against the owner-run syllabus reuse audit (`docs/production/programme/syllabus-reuse-audit-2026-11-21.md`, recommendation 2: remove course labels from narration before voicing).

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to H, simulation engines, root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 12 (satellite on a circle round a plain "planet" disc as the attempt picture) and scenes 11 and 13 (navy givens strips); scene 15 heading hold 50 s to 45 s; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 15 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. Because the take is about to be recorded, the unchanged lines were also read against the 21 November label-free rule (finding 1).

Revision 3 visuals: the scene 11 givens strip repeats the card exactly (M = 6.42 × 10²³ kg, r = 3.39 × 10⁶ m, G); the scene 13 strip repeats the card's three conditions. The attempt 2 picture is a still satellite on one circle with no arrow or escape path. Numbers re-checked with GM = 4.002 × 10¹⁴ and R = 6.371 × 10⁶ m: GM/R = 6.282 × 10⁷ J kg⁻¹; E per kg at 5, 8, 10 and 14 km s⁻¹ = −5.03, −3.08, −1.28 and +3.52 × 10⁷ J kg⁻¹; turn-back heights 1,600, 6,600 and 25,000 km; v_esc = 11.21 km s⁻¹; v∞ = 8.39 km s⁻¹; Mars v_esc = 5.03 × 10³ m s⁻¹, slip 3.55 × 10³ m s⁻¹; ratio √2 = 1.41. All named plates exist under `public/`.

Mechanical: 5,570 characters, equal to the sum of the 15 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Should fix.** Scene 14 narration carries course labels: "That completes Module five." and "Next, in Module six, we meet a different kind of field." The audit maps this video to 2025 points (FA1-CM-13 to 15) as "serves-2025-as-is", and recommendation 2 requires label-free narration before voicing so one take serves both syllabuses; the audit row missed this line. Proposed fix (narration, 366 to 357 characters, total 5,570 to 5,561): "That wraps up gravity and orbits. A gravitational field around every mass sets every orbit, and every escape. Next, we meet a different kind of field. Between two charged plates, the electric field is uniform, just like gravity close to the ground, so a charged particle accelerates steadily. So how does the voltage across the plates set that **acceleration**?" Also change the scene heading to "### 14. end of gravity, and the next field", and the chip in scene 14 and in "Final frame" from "Next (Module 6): how does voltage..." to "Next: how does voltage..."; root must make the same chip change in `phys-y12-m6-v01.md` "Opening frame" so the join still matches. Update the headline count and the per-scene list.

2. **Should fix.** "Visual upgrade (Revision 3)", Simulation engines bullet: ""E per kilogram" is ½v² − GM/r from the run, and at 11.2 km s⁻¹ and above the run never turns back." A run launched at exactly 11.2 km s⁻¹ has E = ½(11,200)² − 6.282 × 10⁷ = −9.6 × 10⁴ J kg⁻¹: it is bound (it turns back near r = 4.2 × 10⁹ m) and the readout computed from the run will not show the "0" that scene 6 tabulates and the narration states ("Exactly at escape velocity, the total is zero"). Proposed fix: "...and the escape stop runs at v_esc = √(2GM/R) = 11.21 km s⁻¹ (labelled "11.2 km s⁻¹"), whose E readout is shown as 0 (rounded to 0.01 × 10⁷ J kg⁻¹); at that speed and above the run never turns back."

3. **Optional.** "Visual upgrade (Revision 3)", Simulation engines bullet: "In scene 7 ... their speed against distance readouts match because the runs do." The scene 7 Visual has no speed against distance readouts, only arrows "v = 11.2 km s⁻¹". Proposed fix: either add "each probe carries a small teal speed readout that falls identically with distance from the centre" to the scene 7 Visual, or delete the clause.

4. **Optional.** Scene 15 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", and the "Holds" line still says "key-notes (about 50 s)", while Revision 3 sets "34 px", "the framed memory card beside them" and 45 s. Proposed fix: change "32 px" to "34 px", "framed card under the notes" to "framed card beside the notes" and "about 50 s" to "45 s in all".

Result: 0 blockers, 2 should fix, 2 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `a97a452cf0635a254bcae237e606eb1791ff4ea9830f5bd67e8a98ea5912493f`.

Compared the current file against the version checked above (`fe2183db...`, HEAD) by git diff, and `phys-y12-m6-v01.md` against HEAD for the join.

Changes: scene 14 heading "### 14. end of gravity, and the next field"; scene 14 narration "That wraps up gravity and orbits. ... Next, we meet a different kind of field. ..." (the rest of the line is unchanged); the scene 14 and "Final frame" chip "Next: how does voltage between parallel plates determine a charged particle's acceleration?"; the escape stop at v_esc = √(2GM/R) = 11.21 km s⁻¹ with E shown as 0; the headline count and a dated root note.

Finding 1 resolved: no "Module" or "syllabus" remains in any narration line. The new line reads naturally aloud and states nothing new to check scientifically. Recount by the build parser rules: scene 14 is 357 characters (was 366), and the sum of the 15 scene strings is 5,561 (408, 523, 531, 470, 470, 492, 347, 434, 269, 262, 399, 221, 303, 357, 75), equal to the headline and under 7,000. Bold cues are unchanged in every scene and in spoken order; scene 14's only cue, "acceleration", is still the last word, and the visual cue "Between two charged plates" is still spoken. The chip text in scene 14, in "Final frame" and in `phys-y12-m6-v01.md` "Opening frame" is identical, so the join holds. No U+2014 in either file.

Finding 2 resolved: ½(11,209)² − GM/R = 0 to within rounding, so the run escapes and the E readout of 0 agrees with scene 6's narration. 11.21 km s⁻¹ is labelled "11.2 km s⁻¹", consistent with the other on-screen values.

Root should note that `phys-y12-m6-v01.md` has a new SHA256 (`13b0c0d5...4406`). No existing check names its old or new SHA, so no gate is lost now, but its readiness check must cite the new SHA.

Findings 3 and 4 (optional) stand, not taken. One further optional: the headline duration "about 503 s" was not updated after Revision 3 (about 498 s) or this edit (9 fewer characters, about 497 s). Proposed fix: change "about 503 s" to "about 497 s" in the headline.

Result: 0 blockers, 0 should fix, 3 optional.
