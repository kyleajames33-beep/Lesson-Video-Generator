# phys-y12-m8-v22 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `f3d9bb0f175d5bc983086fe94f4237eec98a0b6576b9abfc4169a6054c09890d`.

Compared: the Revision 2 source reviewed by `p-y12-m8-v22-rev2-error-check.md` (Codex, 9 November, brief 234; evidence `work/brief234/v22-calculations.json`, SHA256 `25f93789...`, commit `770e3c57`) against the current file (Revision 3, commit `a31af64d`), by git diff. That Revision 2 check ended "0 blockers, 1 should fix", so this check also tests whether that finding was resolved. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to M, simulation engines, root rules R1 to R4, question-card and notes-scene rules); an "Upgrade (Revision 3)" paragraph on scene 18 (navy givens strip); a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections. Nothing addressing the Revision 2 finding changed.

Narration: all 20 scene strings (build parser rules) are byte-identical to the reviewed Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number. Scene 20's "the end of Year 12 Physics" and "past HSC papers" are allowed (the reuse audit row for this video says they are fine for both syllabuses).

Revision 3 visuals: tracker tracks as `magnetic` runs, with opposite charges curving opposite ways and higher momentum curving less, are right (r = p/qB holds with relativistic momentum; the run only needs the right radius and sense), and neutral photons and neutrinos go straight. Keeping the synchrotron ring and field ramp as arithmetic (B = p/(qr) at fixed r) is correct because the engine is not relativistic. The scene 18 givens strip restates the card's two demands. Numbers unchanged and correct: p = 1.602 × 10⁻¹⁸ kg m s⁻¹ at 3.0 GeV, B = 1.25 T at r = 8.0 m, 0.0417 T at 0.1 GeV. All named plates exist under `public/`.

Mechanical: 6,432 characters, equal to the sum of the 20 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Should fix (carried from Revision 2, author unit).** "Numbers used", Crossed slip row: "p left as 3.0 × 10⁹ (GeV, not SI)". The number 3.0 × 10⁹ is the energy in eV (3.0 GeV); the slip is using that energy number as an SI momentum. Proposed fix: "p left as 3.0 × 10⁹ (the energy in eV, not an SI momentum)". The crossed calculation and the correct method stay. No speech change.

2. **Optional.** Scene 19 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 1 should fix, 1 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `cfdd6e1587c1c4faca1bddebfce271439270adb166e1fe38ab24b953f8d3f984`.

Compared the current file (commit `3575b452`) against the version checked above (`f3d9bb0f...`) by git diff. Narration is byte-identical (20 scene strings, 6,432 characters, equal to the headline); bold cues are unchanged.

- Finding 1 is resolved. The slip row now reads "p left as 3.0 × 10⁹ (the energy in eV, not an SI momentum)". The crossed value 3.0 × 10⁹ / (1.602 × 10⁻¹⁹ × 8.0) = 2.34 × 10²⁷ T rechecks.
- Finding 2 (optional) is applied: the memory card is "beside the notes".

No U+2014.

Result: 0 blockers, 0 should fix, 0 optional.
