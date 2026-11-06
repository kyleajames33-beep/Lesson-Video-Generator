# Root decisions: Year 11 Chemistry Module 1, v01 to v10 (first designs)

Claude (root), 5 November 2026. Designs written to `chem-y11-design-brief.md`.

1. **Learner questions.** The reworded questions for v01, v02, v06, v07 and v10 are approved (sharper or causal forms of the route wording). v03, v04, v05, v08 and v09 keep the route wording.
2. **Plate prefix.** Year 11 Chemistry plates use `y11c-`. v03's set (sand and salt water beaker, filter funnel pair, evaporating basin pair, three watch glasses) is the shared separation set; v06 reuses it. The glass rod is coded, not painted.
3. **v05 to v06 join.** Root reconciled v06's opening to v05's actual final frame (dimmed black-ink chromatogram, blank balance, sand and salt watch glasses, "Next" chip). v06 scene 1 clears the balance and watch glasses on "together"; the narration stands because v05 used a black ink.
4. **v01 alloy.** The Australian $1 and $2 coins (aluminium bronze, about 92% copper, 6% aluminium, 2% nickel) replace the site's brass, as a familiar Australian example. Science check to confirm the composition; brass is the fallback.
5. **Checks requested from the science check.** v02 salt-water boiling readings (ideal estimates, tagged); v03's teaching that salt crystallises mainly as water is removed (corrects the site); v04's interpolated ethanol enrichment steps; v02's candle plate reading as wax; v07 and v09 spoken formulae and "A r" for the Google voice (each design has a fallback).
6. **v04 distillation plate.** The new aligned simple/fractional pair is requested; `m7-school-distillation-setup` stays the fallback.
7. **v05 worked example context** ("a green food colouring") is accepted; numbers unchanged.
8. **v10 to ws-v01 join.** v10 ends on the three-model timeline with "new evidence → better model"; the ws-v01 design must open on it.
9. **Site corrections.** The designs' Decisions sections list site notes. Codex logs them in `site-corrections-chem-y11.md`, first the lesson 14 lithium answer (94% should be 6%) and lesson 3 Q7's impossible 80 g KCl in 100 mL. Codex also fixes the broken replacement characters ("atom's", "Schrödinger") in the ledger and route JSON.
10. **Long scenes.** v07 scene 8 and v08 scene 10 are long (about 750 characters); the learning review decides whether to split or trim.

## Wave 2: ws-v01 to ws-v03 and m1-v11 to v17 (5 November 2026)

11. **Running investigation.** ws-v01 to ws-v03 share one case, heating copper sulfate crystals to find their water content (36.1%, from v07); practice questions use the sand and salt separation. Accepted.
12. **Course definitions.** valid, reliable, accurate and precise keep the meanings stated in ws-v01 to ws-v03 (matching the Year 11 Physics skills set). ws-v04 to ws-v07 must use them; ws-v05 owns error types.
13. **Plate prefix.** Root renamed every `chem-y11-*.png` plate in the designs to `y11c-` (balance, copper sulfate crucibles, hydrogen discharge tube, lit filament lamp). One prefix for the course.
14. **v12 to v13 join.** Root reconciled v13's opening to v12's actual final frame (period 3 row and Li to K column outlined, Na, Cl and K shell diagrams in dashed "radius?" circles). Scene 1 keeps K for the down-group beat.
15. **v13 core charge** (protons minus inner electrons) stays as a countable estimate beside "effective nuclear charge". **v14** keeps the subshell explanation of the Mg to Al and P to S dips; the learning review may shrink it to a tag.
16. **v11** shows the Aufbau, Pauli and Hund names on screen only. **ws-v03** names APA as one common style, with "the style your school uses" spoken. **v16** keeps the cobalt-glass tag. **v17** reworded question, the added potassium-40 and americium-241, and the Lucas Heights mention are accepted; v17 is about 559 s with three named reserve cuts.
17. **Safety.** v15 (teacher demonstration behind a screen, no rubidium or caesium) and v16 (approved dilute chlorides, nichrome loop cleaned in dilute hydrochloric acid, a blank first) go to the science check against current NSW school chemical-safety guidance.
18. **Plates.** v12 keeps all six period 3 samples (each is seen while its configuration is spoken). v15's aligned trough set and v16's aligned v2 flame copies (translation only) are approved.
19. **Shared components.** v11's subshell ladder and `PeriodicGrid` (also used by v12 to v14) go into one build brief before these lessons are built.
20. **Key-notes hold** is timed at about 52 s; ws-v01 to ws-v03 sit near the cap, so the hold must not grow.
21. **Site corrections** found in this wave (lessons 13, 15, 16, 17, 18, 20) are listed in each design's Decisions; Codex logs them.

## Wave 3: m1-v18 to v27 (5 November 2026)

22. **Learner questions.** v22's reworded question (hard, brittle, and conducting only when ions can move) is accepted; v21's final chip already uses it. The others keep the route wording.
23. **v22 to v23 join.** Root reconciled v23's opening to v22's actual final frame (bent water and straight CO₂ already drawn in 2D with bond-dipole arrows and "net?" marks). Scene 1 keeps them and lifts them into 3D on "shape".
24. **3D shapes.** The legacy `molecule3d` type is frozen; v23 uses the explainer's `BallStick`, `Lobes` and `AngleArc` (`src/explainer/lessons/chem-m7-c01/molecules.tsx`), with only the shape-direction table ported (legacy policy). Adding B, N, F, Si, P and S to that kit is a build item. VSEPR is taught from OpenStax because the site never teaches shapes. BCl₃ replaces BF₃ (B–F's difference is above the site's 1.7 guide).
25. **MgO melting point.** Keep the site's 2852 °C (a common textbook value) on the card and "about two thousand eight hundred and fifty" in narration; the CRC's 2825 °C stays in the author note.
26. **v18.** Gamma written as γ alone (no ⁰₀γ); the N-14 + neutron → C-14 + proton missing-particle example is accepted.
27. **v19 and v20 overlap.** v19 works a charge out from a formula only as far as v20 needs; v20 owns Roman numerals. Accepted.
28. **v21.** Lewis diagrams keep amber dots for shared or moving electrons. The 0.4 and 1.7 electronegativity guides are labelled guides, not boundaries. The CO₂ double-bond scene stays unless the learning review finds the video too full. The coded rope line stays (no `c7-tug` plates: `c7-tug-scene` shows children).
29. **v24 to v27.** v24's coin callback, essential lit-lamp plate and optional sodium versus magnesium beat stay. v25 shows "above 3500 °C" for carbon, with no single melting point. v26's 18-electron fair test (F₂, CH₃F, CH₃OH) replaces the site trio; "methoxymethane (dimethyl ether)" is spoken. v27 uses AgCl as the "not a law" example, entropy as one grey tag, and ends on the balance reading 110.0 g with "Module 1 complete"; `chem-y11-m2-v01` opens on it.
30. **Safety.** v22: molten salt is footage-style plate only and the solution test uses a low-voltage tester; science check against current NSW school guidance.
31. **Plate dependencies.** v17's lead-shielded vial (v18), v10's lit lamp (v22, v24), v06's balance (v27), v02's dry ice (v25). Check `phys-y11` battery-holder alpha before reuse.
32. **Site corrections** found in this wave (lessons 7, 8, 9, 10, 12, 18, 19, 20, 21) are listed in each design's Decisions; Codex logs them, with lesson 10's butane/dimethyl ether ranking and HCl electronegativity claim, and lesson 12's "if and only if" first.

## Brief 177 and 178 repairs (6 November 2026)

33. All brief 177 and 178 findings are repaired at Revision 2. Calls accepted: **v09** speaks rounded intermediates (26.52, 8.97) while the screen keeps guard digits and a tag notes that rounding first gives 35.49; result 35.48. **v10** spectrum runs energy increasing left to right (red left, violet right, ultraviolet beyond violet). **v15** uses the approved-video route: "short video clips" spoken, painted troughs in a coded clip frame tagged "illustrated clip", no sizes, distances or screen; safety-screen plate dropped. **v16** method follows the school's risk assessment and the teacher's approved solutions; bottle labels stay, tagged "examples: your teacher chooses the approved solutions". ws-v03 (+28) and v17 (+24) grew slightly and stay within band and cap. If the owner has CSIS staff access, v15 and v16 may later name the verified method.

## Voicing readiness (7 November 2026)

34. **Readiness.** `checks/chem-y11-voicing-readiness.md` is the voicing evidence for Year 11 Chemistry. 73 designs are ready; m2-v06 is already voiced. The recording gate hashes the current source; older check hashes are superseded where root fixed counts or findings.
35. **m3-v13** speech change ("becomes less concentrated") is accepted by root; no separate Codex confirmation is needed before recording.
36. **m3-v07 safety screen** stays. Decision 33's drop applied to m1-v15's approved-video route only.
37. **m1-v18 to v20 and v22 to v27** were never repaired after brief 179. Root's calls for the repair:
    - **v20:** Stock naming (copper(II) chloride) is the taught route. Compositional names such as copper dichloride are valid IUPAC names and are never called wrong; the video says students will see them elsewhere. The error task and memory aid switch to a genuine slip, such as "copper chloride" with no charge, which is ambiguous.
    - **v22:** halite is brittle, not hard. The conductivity comparison is framed as a teacher demonstration or an approved video, not a student method.
    - **v18:** gamma is γ alone (decision 26).
    - **v25 to v27:** decision 29's framing choices stand (carbon "above 3500 °C", the 18-electron fair test, entropy as one grey tag) unless a finding shows a factual error. Factual errors are fixed and reported.
