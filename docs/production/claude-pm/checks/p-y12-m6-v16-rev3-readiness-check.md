# phys-y12-m6-v16 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `63d130785fcb526400400e49b9d0d518398138e54ff29e62edbd1b46ae963c5e`.

Compared: the Revision 2 source approved by `p-y12-m6-v16-rev2-error-check.md` (SHA256 `6a923109...`, commit `2df27a06`) against the current file (Revision 3 plus root's 21 November label edit, commit `d1b643f3`), by git diff. Also read against the syllabus reuse audit (`docs/production/programme/syllabus-reuse-audit-2026-11-21.md`, row `phys-y12-m6-v16` and recommendation 2). Text-only review; no build, render or listening.

What changed: Status line; headline 6,398 to 6,401 characters; a new "Visual upgrade (Revision 3)" section (stage list A to J, simulation engines, "Schematics stay coded; apparatus is painted", root rules R1 to R4, question-card and notes-scene rules); an "Upgrade (Revision 3)" paragraph on scene 13 (the commutator end of the painted motor as the picture); a recorded kit gap; Revision 3 notes; and the root label edit to scene 4's narration: "From Module five, torque is r F sine theta." became "You've met torque before: it's r F sine theta."

Narration: 15 of 16 scene strings are byte-identical to the approved Revision 2 source. Scene 4's change removes the module label, reads naturally aloud and is scientifically the same. Recount: scene 4 is 489 characters and the 16 scene strings sum to 6,401, equal to the headline and under 7,000. Bold cues in scene 4 ("nine", "theta", "sheet") are unchanged and in spoken order. No narration now names a module or "the syllabus".

Revision 3 visuals: the attempt 2 picture (the commutator crop, unlabelled, no current arrows) gives nothing away. Numbers re-checked: A = 1.2 × 10⁻³ m², τ_max = 3.6 × 10⁻² N m, τ = 3.6 × 10⁻² × sin 60° = 3.1 × 10⁻² N m; attempt 1: A = 1.0 × 10⁻³ m², τ = 0.045 × sin 30° = 2.25 × 10⁻² ≈ 2.3 × 10⁻² N m, slip 3.9 × 10⁻² N m. `y12p-dc-motor-model-v1.png` and the other named plates exist under `public/`.

Mechanical: both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Should fix.** Scene 4 Visual still cues on the old wording and still shows a module label: "On "torque is r F sine theta" a chip "τ = rF sin θ (Module 5)"". After root's edit the narration says "it's r F sine theta", so the quoted cue no longer occurs, and the chip puts "Module 5" on screen, which the label-free edit was meant to remove. Proposed fix: "On "it's r F sine theta" a chip "τ = rF sin θ (met before)"."

2. **Should fix.** Scene 4 narration: "That's the formula on your data sheet." The reuse audit records that the 2025 course writes this rule as τ = nBIA cos θ with the angle measured differently, and asks for the angle wording to be settled in this video before voicing, so that one take serves both courses. As voiced, the line would be false for 2025 students. Scene 6's "Some books measure the angle from the plane and use cos" already covers the other form, so only small edits are needed. Proposed fix (scene 4 489 to 514 characters, scene 6 703 to 719, total 6,401 to 6,442): scene 4 "That's the form we'll use, with theta measured from the **normal**." (cue "sheet" becomes "normal"; the strip on that cue keeps "τ = nIA⊥B = nIAB sin θ" and its tag "θ: area normal to B"); scene 6 "Some books and data sheets measure the angle from the plane and use cos." If root instead decides to keep the 2017 data-sheet wording and voice a separate 2025 take, record that decision in the design, and this finding is then closed.

3. **Optional.** Narration names earlier videos by number: scene 3 "From video seven", scene 4 "from video nine", scene 5 "Notice the contrast with video nine." This is not a module label, but the Revision 3 rule keeps video codes off screen, and numbers may not match a 2025 playlist. Proposed fix: "From an earlier video", "from the flux video", "Notice the contrast with flux".

4. **Optional.** Scene 16 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 2 should fix, 2 optional.
