# phys-y12-m8-v14 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `ec2ba7228e6743701206b45513ac676d92274cefc6f20a16240e4871529ac70c`.

Compared: the Revision 2 source reviewed by `p-y12-m8-v14-rev2-error-check.md` (Codex, 9 November, brief 234; its evidence file `work/brief234/v14-calculations.json` names SHA256 `c2766a88...`, the version in commit `770e3c57`) against the current file (Revision 3, commit `a31af64d`), by git diff. That Revision 2 check ended "0 blockers, 3 should fix", so this check also tests whether those three findings were resolved. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to J, simulation engines, "No balance picture", root rules R1 to R4, question-card and notes-scene rules); an "Upgrade (Revision 3)" paragraph on scene 11 (two mass bars replace the coded balance); scene 9's "underline on" became "underline under" (visual text only); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections. Nothing addressing the three Revision 2 findings changed.

Narration: all 18 scene strings (build parser rules) are byte-identical to the reviewed Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number.

Revision 3 visuals: the field-motion runs (`magnetic` kind in `src/explainer/sims/field-motion.ts`) give the right picture: opposite charges curve opposite ways, and the beta's far smaller mv/q (about 0.0047 T m against about 0.32 T m for the alpha) makes it curve far more tightly; the gamma goes straight. Random Geiger clicks from the `coins` experiment in `chance.ts` are a sound model. The mass bars contradict nothing spoken. All named plates exist under `public/`.

Mechanical: 5,620 characters, equal to the sum of the 18 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings (1 to 3 are the Revision 2 findings, still open):

1. **Should fix (carried from Revision 2, learner copy).** Scene 18 key-notes bullet 5: "Products have less mass: the difference → kinetic energy." This summary also covers gamma decay, where the energy leaves mainly as the photon, and scene 11's narration already says so. Proposed fix: "Products have less mass: the difference → kinetic energy and γ-ray energy." No speech change.

2. **Should fix (carried from Revision 2, author arithmetic).** "Numbers to verify": "Q(F-18 β⁺) = (18.000937 − 17.999160 − 2 × 0.000549) × 931.5 = 0.634 MeV." With those inputs the result is 0.000679 × 931.5 = 0.6325 MeV, not 0.634. The full-precision masses give 0.6339 MeV. Proposed fix: write the substitution with the full masses, or change the line to "= 0.6325 MeV with these rounded masses (0.634 MeV with full AME2020 values)". The "Numbers used" table entry "Q = 0.634 MeV" can stay. No speech change.

3. **Should fix (carried from Revision 2, author arithmetic).** Author note (e): "mv/q = 3.2 × 10⁻¹⁹ / 3.2 × 10⁻¹⁹ ≈ 0.32". The numerator mv = 6.64 × 10⁻²⁷ × 1.55 × 10⁷ = 1.03 × 10⁻¹⁹ kg m s⁻¹, so mv/q = 1.03 × 10⁻¹⁹ / 3.2 × 10⁻¹⁹ ≈ 0.32 T m. Proposed fix: replace the first "3.2 × 10⁻¹⁹" with "1.03 × 10⁻¹⁹". The conclusion (the alpha's radius is about 70 times the beta's) is unchanged. No speech change.

4. **Optional.** Scene 18 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 3 should fix, 1 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `0b9e283719afdc7be3b88200a1414b67e136a27d56010c82eaed90643a4c6d41`.

Compared the current file (commit `3575b452`) against the version checked above (`ec2ba722...`) by git diff. Narration is byte-identical (18 scene strings, 5,620 characters, equal to the headline); bold cues are unchanged.

- Finding 1 is resolved. Key-notes bullet 5 now reads "Products have less mass: the difference → kinetic energy and γ-ray energy.", which is correct for alpha, beta and gamma decay.
- Finding 2 is resolved, and the stated deviation is correct. (18.000937 − 17.999160 − 2 × 0.000549) × 931.5 = 0.000679 × 931.5 = 0.6325 MeV with these rounded masses; full AME2020 values give 0.6339 MeV, about 0.634 MeV. The "Numbers used" entry "Q = 0.634 MeV" stays consistent with the full-mass value.
- Finding 3 is resolved: 6.64 × 10⁻²⁷ × 1.55 × 10⁷ = 1.03 × 10⁻¹⁹ kg m s⁻¹, and 1.03 × 10⁻¹⁹ / 3.2 × 10⁻¹⁹ = 0.32 T m. The comparison with the beta's 0.0047 T m (a radius ratio of about 70) is unchanged.

No U+2014. Finding 4 (optional, "framed card under the notes") was not applied and stands.

Result: 0 blockers, 0 should fix, 1 optional.
