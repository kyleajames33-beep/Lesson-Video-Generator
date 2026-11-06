# chem-m6-c10 (Ka and pKa): quality fix, 6 Nov 2026

Grade before: C (audit frames 1, 2 and 5 to 10 untitled; 3 and 6 sparse working; 9 and 10 faded text only; 12 and 13 sparse; 15 one line in a large box). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/chem-m6-c10-sheet.jpg`. It holds 16 stills at the audit frames (485 to 15027). I also checked 10 stills from the middle of scenes.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues in `docs/production/claude-pm/lessons/m6c10/measured/lesson.json`.

## Changes by scene

- **Titles.** Every scene now has a hand-font title or a task line. The new titles are "Two acids: which is stronger?" (now shown from the start), "Ka: a number for the acid itself", "Back to the two acids", "pKa: Ka on a tidy scale", "Reading pKa", "Strong or weak?", "The conjugate base: Ka × Kb = Kw", "Ranking conjugate bases" and "A way to remember".
- **2. Ka is the number.** A particle lens (r 200) shows a weak acid at equilibrium: mostly whole molecules and two ion pairs. The ions ring teal on "hydronium times the anion", and the molecules ring amber on "over the whole acid". The Ka fraction is 60 px. The meter labels are 26 px. "HX: Ka = ?" is a 52 px chip.
- **3. Worked example, the hydronium.** The pH meter plate (h 290) reads 2.78 beside the working and pulses on "ten to the". The working is 56 px. On "three percent", a lens of 30 HX molecules shows one splitting into H₃O⁺ and X⁻ ("about 1 in 30 ionises"), beside the existing 3.3% bar.
- **4. ICE backwards.** The ICE cells are 36 to 40 px, with 84 px rows. A lens shows one HX splitting into one H₃O⁺ and one X⁻ on "one hydronium and one X minus". The Ka working is split into two 56 px lines, and the answer chip is 52 px.
- **5. Back to the hook.** The meters are larger (h 230).
- **6, 7. pKa.** The working is 54 to 60 px. The "about three, not five" bracket is 42 px, and the mistake chip is 40 px.
- **8. Strong and weak.** The two particle lenses grow from r 95 to r 145. The strong lens shows ions only, and the weak lens shows molecules plus one ion pair. The rule lines are 48 px.
- **9. Ka × Kb = Kw.** A lens (r 170) shows ethanoate taking a proton from water on "its own Kb". The proton hops, leaving CH₃COOH and OH⁻. The reaction lines dim to 55% (was 30%), and the working is 46 to 56 px.
- **10. Ranking.** The background dims to 55% (was 30%). The conclusion card is 46 px, and the mistake chip is 36 px.
- **12. Attempt 1.** A pH meter reading 2.28 for "lactic acid, 0.200 mol/L, 25 °C" arrives with the givens sentence. It is not answer-bearing.
- **13. Feedback 1.** The working is 48 px. The meter (2.28) sits beside the shrunk question. The answer chips are 50 px, and the crossed mistake is 40 px.
- **15. Feedback 2.** The working is 46 px, and the answer and mistake chips are larger.
- **16. Decision rule.** All four lines and the meter show from the start. Each line lights on its cue (the C07 pattern).
- **17. Key notes.** Nine one-line bullets at 33 px replace five paragraphs at 30 px. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/chem-m6-c10/s1.tsx`, `s2.tsx`, `s3.tsx`.
- New: `src/explainer/lessons/chem-m6-c10/lens.tsx`, which holds `AcidLens` and `ConjLens`. They sit in their own file because C11, C12 and G02 `export *` from C10's `parts.tsx`. `parts.tsx`, `assets.ts` and `LabMeter`'s signature are unchanged (C11 imports `LabMeter`).

The typecheck passes on the C10, C11, C12 and G02 graphs.

## Plates needed

None. The scenes use the existing pH meter and vinegar plates. Particle views are coded (HSC convention).

## Still to check

- Judge at playback speed: the lens splits, the ethanoate proton hop and the meter pulses.
- Attempt 2 (audit frame 13) is unchanged: a worded question card. Drawing its pKa values would give away the ranking.
- Ready for Codex to re-render on the existing narration.
