# phys-y12-m7-v11 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `9dd0313609a2c90ab663e75fe96e8950588ba83abcf48eaef9e226e22e9de0a7`.

Compared: the Revision 2 source approved by `p-y12-m7-v11-rev2-error-check.md` (Codex, 9 November; that check records no hash, but its evidence file `work/brief233/v11-calculations.json` names SHA256 `b4a88436...`, the version in commit `bd8ce5b5`) against the current file (Revision 3, commit `2339843a`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to H, simulation engines, root rules R1 to R4, question-card and notes-scene rules); a recorded kit gap (no photocell engine); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections. No scene Visual line changed.

Narration: all 17 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number. On-screen course tag only, mentioned for the build rule: scene 3's chip "W = qV (Module 6)".

Revision 3 visuals: the stage times agree with the scene lengths (scenes 3 and 4, 887 characters, about 67 s). The `uniform` field kind exists in `src/explainer/sims/field-motion.ts`. No numbers, pictures or givens strips changed. All named plates exist under `public/`.

Mechanical: 6,158 characters, equal to the sum of the 17 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Should fix.** "Visual upgrade (Revision 3)", Simulation engines bullet: "each electron starts with the speed its K_max gives and either reaches the collector or slows, stops and turns back, so the photocurrent readout falls to zero exactly when the slider reaches the stopping voltage." If every electron leaves with the K_max speed, all of them reach the anode until the slider reaches V_stop, and then all fail together: the current stays flat and drops in one step. Scene 3's narration says the opposite: "Turn the voltage up, and fewer electrons make it, so the photocurrent **falls**. At one voltage, even the fastest electrons just fail". Scene 4's traced curve also falls gradually to "−V_stop". Photoelectrons leave with a spread of kinetic energies, from zero up to K_max. Proposed fix: "each electron starts with its own kinetic energy, spread from 0 up to K_max (only the fastest have K_max), and either reaches the collector or slows, stops and turns back; as the slider rises, a growing share turn back, so the photocurrent readout falls steadily and reaches zero exactly when eV equals K_max, the stopping voltage."

2. **Optional.** Scene 17 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 1 should fix, 1 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `49dcc984a42e2ec9fc40722efd79c989b7ad9b81a8fe55dc16b73ce8f0f90cbb`.

Compared the current file (commit `3075bfe7`) against the version checked above (`9dd03136...`) by git diff. The only changes are the Simulation engines bullet and a dated root note. Each electron now starts "with its own kinetic energy, spread from 0 up to K_max (only the fastest have K_max)", and "as the slider rises, a growing share turn back, so the photocurrent readout falls steadily and reaches zero exactly when eV equals K_max". That resolves finding 1. The run now agrees with scene 3's narration ("fewer electrons make it, so the photocurrent falls"; "even the fastest electrons just fail") and with scene 4's sloping trace to "−V_stop". Narration is unchanged (all 17 scene strings identical; 6,158 characters). No U+2014. Finding 2 (optional) stands, not taken.

Result: 0 blockers, 0 should fix, 1 optional.
