# phys-y12-m7-v03 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `d65d6b9bd1afc3f558584f8afd62c40491cc0ccfcddf81bd775e60a1dceedc27`.

Compared: the Revision 2 source approved by `p-y12-m7-v03-rev2-error-check.md` (Codex, 9 November; its evidence file `work/brief233/v03-calculations.json` names SHA256 `8cd4a764...`, the version in commit `bd8ce5b5`) against the current file (Revision 3, commit `2339843a`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, "Sources and cards are plates", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 2 (painted filament lamp at the slit), scene 6 (painted vapour cell with the particle-box run in its window, plus a fallback), scenes 7 and 9 (painted paper sheet as the white card) and scene 8 (small plate copies as the row pictures); a new plate request and its specification; a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 15 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number.

Revision 3 visuals: thin gases as a few widely spaced particles in `particle-box.ts` (hot for the discharge tube, cool for the vapour) fit the narration's "thin" sources. Keeping the dense filament lesson-coded, because the engine has no attraction to hold a solid together, is correct. `ParticleBoxView` exists in `src/explainer/sims/views.tsx`. The requested vapour cell (`y12p-vapour-cell-v1.png`, with its sidecar) has been delivered, so the fallback is not needed. `phys-y11-filament-lamp-v1.png`, `phys-y11-paper-sheet-flat-v1.png` and `y12p-slide-holder-v1.png` exist. The only unmatched name, `y12p-filament-lamp-v1.png`, is a Revision 2 conditional request that applies only if the Year 11 lamp lacks alpha; it is not used by any scene. No numbers, card pictures or givens strips changed.

Mechanical: 6,291 characters, equal to the sum of the 15 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** Scene 15 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 1 optional.
