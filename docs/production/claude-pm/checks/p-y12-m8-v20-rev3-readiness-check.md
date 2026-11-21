# phys-y12-m8-v20 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `51c44ed8c1d1c536ec42ad079671660d0fbccf8c133f01acf6d85e37cabb477c`.

Compared: the Revision 2 source reviewed by `p-y12-m8-v20-rev2-error-check.md` (Codex, 9 November, brief 234; evidence `work/brief234/v20-calculations.json`, SHA256 `f3783c00...`, commit `770e3c57`) against the current file (Revision 3, commit `a31af64d`), by git diff. That Revision 2 check ended "0 blockers, 1 should fix", so this check also tests whether that finding was resolved. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to K, simulation engines, "The reactor is a plate", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 12 (small painted reactor pool) and scene 16 (navy givens strip); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections. Nothing addressing the Revision 2 finding changed.

Narration: all 20 scene strings (build parser rules) are byte-identical to the reviewed Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number. On-screen video codes only, covered by the build rule (for example scene 3's chip "λ = h/p (v12)" and scene 10's tag "... (r = mv/qB, m6)").

Revision 3 visuals: the scene 16 givens strip repeats the card's demand. The probe wave in scene 3 follows λ = hc/E, matching the unchanged readouts (20 GeV gives 6.2 × 10⁻¹⁷ m, about 27 times smaller than the proton). Smooth-charge against hard-centre `custom` scattering runs for scene 5 are a sound model. `y12p-opal-reactor-pool-v1.png` and the other used plates exist under `public/`; the only unmatched name, `y12p-crt-tube-v1.png`, appears in "Checked, not used".

Mechanical: 6,190 characters, equal to the sum of the 20 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Should fix (carried from Revision 2, stale author summaries).** "Stops after: three lines of evidence, ..." still lists three, but the repaired lesson accepts two lines and explicitly rejects neutron decay as proof (scenes 7, 9 and 18). Decisions, "Attempts", A2 still gives the old crossed answer "the electron is also made of quarks (the contrast fails)", while scene 18 and the model answer now cross "neutron decay proves parts". Proposed fix: "Stops after: two lines of evidence (deep inelastic scattering and the hadron pattern; decay is not proof), ..." and in A2 "Crossed: "a neutron decays, so it must have parts" (fundamental particles such as the muon also decay)". No speech change.

2. **Optional.** "Visual upgrade (Revision 3)", Simulation engines bullet: "In scene 10 the two tracks in the chamber are `magnetic` runs with opposite signs of charge, so they curve opposite ways". Scene 10's Visual draws one positron track (plus a thickness comparison inset), so a builder could add an unnarrated second track. A run also cannot lose speed at the lead plate mid-run, so the track must be two joined runs. Proposed fix: "In scene 10 the positron's track is two joined `magnetic` runs, faster below the lead plate and slower, more tightly curved, above it; its sense of curvature is that of a positive charge."

3. **Optional.** Scene 20 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 1 should fix, 2 optional.
