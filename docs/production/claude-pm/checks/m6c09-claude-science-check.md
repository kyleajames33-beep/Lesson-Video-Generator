# m6c09 science check (chem-m6-c09, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 20 Oct 2026.
Inspected: `lessons/chem-m6-c09.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (20 Oct; NBS formation enthalpies and entropies, `math.log`, the temperature-rise and Hess arithmetic). Site lesson 10 quotes in the corrections list were spot-checked against `C:/Users/kygs/hscscience/subjects/chemistry/year12/module6/lesson10.sa.html` ("never become more negative than −57", "always a positive value", "T_max = 27.2°C", the Thomsen "28 calorimetry experiments" hook): all present as quoted. The Module 6 bank clause quoted under "Memory aid check" was confirmed in `docs/production/module6-memory-aids-2026-10-11.md` (line 120). Web and reference sources consulted 20 Oct 2026 are listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

Ledger entry `C6-IQ1-05` (Module 6, "What is an acid and what is a base?", Properties of Acids and Bases, page 52, practical): "conduct a practical investigation to measure the enthalpy of neutralisation (ACSCH093)".

Ledger entry `C6-IQ3-03` ("How are solutions of acids and bases analysed?", Quantitative Analysis, page 53): "model neutralisation of strong and weak acids and bases using a variety of media".

Design text (lines 9 and 11, and the YouTube description) matches both word for word; pages 52 and 53 match. The design correctly says the IDs are local catalogue IDs. The practical itself is chem-m6-p02 (boundary), so this video supports the practical dotpoint rather than conducting it; the description's verbatim quote is in line with the owner rule.

## Em dashes

None found (U+2014 count 0). Minus signs are U+2212.

## Convention

Project manager decision 1: step values are the measured neutralisation value minus −57 (the HSC water-step value; C03 author note a gives −57.3 at 18 °C and −55.8 at 25 °C). Checked: the design applies this consistently for ethanoic acid (+1), HF (−11) and ammonia (+5). It does **not** for HCN in attempt 2 (S1).

## Reference values

NBS (Wagman et al. 1982) ΔfH°, 25 °C, kJ/mol: H₂O(l) −285.83; OH⁻(aq) −229.99; HF(aq) −320.08; F⁻(aq) −332.63; CH₃COOH(aq) −485.76; CH₃COO⁻(aq) −486.01; HCOOH(aq) −425.43; HCOO⁻(aq) −425.55; HCN(aq) +107.1; CN⁻(aq) +150.6; NH₃(aq) −80.29; NH₄⁺(aq) −132.51; HSO₄⁻(aq) −887.34; SO₄²⁻(aq) −909.27; H₃PO₄(aq) −1288.34; H₂PO₄⁻(aq) −1296.29. All match the design's author note a.

| Claim in design | Recomputed | Verdict | Source |
| --- | --- | --- | --- |
| H⁺ + OH⁻ → H₂O −55.84 (25 °C); HSC −57 | −55.84 | Correct | NBS; Chemguide (strong acid with strong alkali −57 to −58) |
| HCl + NaOH −57 kJ/mol | (convention) | Correct as the HSC value; Chemguide −57.9 | Chemguide |
| Ethanoic acid + NaOH about −56; ionisation −0.25 (25 °C); step on convention about +1 | −56.09; −0.25; +0.91 | Correct | NBS; Chemguide −56.1 |
| HF + NaOH about −68; ionisation −12.55; step on convention about −11 | −68.39; −12.55; −11.39 | Correct | NBS |
| HCN + NaOH about −12; ionisation +43.5 | −12.34; +43.5; on convention **+44.7** | Values correct; attempt 2 mixes conventions (S1) | NBS; Chemguide (HCN + KOH −11.7) |
| HCl + NH₃ about −52 per mol NH₃; NH₃ + H₂O → NH₄⁺ + OH⁻ +3.6; step on convention about +5 | −52.22; +3.62; +4.78 | Correct | NBS |
| Methanoic acid + NaOH about −56; ionisation −0.12 | −55.96; −0.12 | Correct | NBS |
| CH₃COOH + NH₃ about −52.5 (site new correction 5) | −52.47 | Correct | NBS |
| HSO₄⁻ + OH⁻ about −78; H₃PO₄ first ionisation about −8 (author notes) | −77.77; −7.95 | Correct | NBS |
| Methanoic and ethanoic acid Ka 1.8 × 10⁻⁴ and 1.8 × 10⁻⁵, ratio 10 | 10.0 | Correct (tabulated 1.77 × 10⁻⁴ and 1.75 × 10⁻⁵) | CRC dissociation constants; M5 C10 |
| HF ionisation ΔS° about −88 J K⁻¹ mol⁻¹; ΔG° +18 kJ/mol (author note e) | ΔG° = −RT ln(6.8 × 10⁻⁴) = +18.08; ΔS° = (−12.55 − 18.08) ÷ 298.15 = −102.7; NBS S° gives −13.8 − 88.7 = −102.5 | ΔG° correct; **ΔS° wrong** (M1) | NBS entropies |
| F⁻ hydration about −500 against about −360 for Cl⁻ (note d) | literature about −504 to −515 and −367 to −381 | Correct as "about", with the convention caveat | Marcus 1991 (ion hydration) |
| Ethanoic acid at 1.00 mol/L about 0.4% ionised (note c) | √(1.8 × 10⁻⁵) = 0.42% | Correct | (calculation) |
| Site 0.5 mol/L "~0.1%" is about 0.6% | 0.60% | Correct | (calculation) |

## Chemistry claims and equations

All equations balance in atoms and charge (checked independently).

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| H⁺(aq) + OH⁻(aq) → H₂O(l) (2, notes) | balanced; 0 = 0 | correct | OK |
| CH₃COOH(aq) + OH⁻(aq) → CH₃COO⁻(aq) + H₂O(l) (3) | C 2/2, H 5/5, O 3/3; −1 = −1 | correct | OK |
| Staircase: HA(aq) + OH⁻(aq) → H⁺(aq) + A⁻(aq) + OH⁻(aq) → A⁻(aq) + H₂O(l) (4) | each level balanced; charge −1 throughout | correct | OK |
| NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq) (8) | N 1/1, H 5/5, O 1/1; 0 = 0 | correct | OK |
| Scene 8 staircase, top level "NH₃(aq) + H⁺(aq)" | levels below not specified | the cycle needs a water molecule in step 1 | M3 |
| HCN(aq) → H⁺(aq) + CN⁻(aq) (A2) | balanced; 0 = 0 | correct; → acceptable for the enthalpy of the process | OK |

Other claims:

- "A weak acid doesn't react incompletely. It just has one extra step": correct (neutralisation by a strong base goes to completion; K for CH₃COOH + OH⁻ is about 1.8 × 10⁹).
- "Most of the ionising happens during the reaction": correct (0.4% ionised before mixing). Author note c correctly adds that OH⁻ also takes protons directly; Hess's law does not depend on the route.
- Scene 5, energy in to break the bond and energy out as water surrounds the new ions: a correct Year 12 description of the ionisation enthalpy as a balance (Module 5 C11 level).
- Scene 7, fluoride's small size and strong hydration outweigh the H–F bond: correct at this level; "how far an acid ionises depends on more than the heat" is true (entropy, author note e).
- Scene 9, heat does not rank strength: correct (methanoic acid tenfold stronger, same heat; HF most exothermic, still weak).
- Scene 8 and the memory aid say the extra step is "ammonia taking a proton from water" and "every neutralisation ends with" H⁺ + OH⁻ → H₂O. In HCl + NH₃ the actual reaction is NH₃ + H₃O⁺ → NH₄⁺ + H₂O; the two-step route is a valid Hess cycle, not the mechanism (author note f says so). Learner copy should mark it as a way of counting (M2).
- Site corrections (Decisions, new 1 to 11): checked against the recomputed values above. New 1 to 4 correct (HF and HSO₄⁻ more negative than −57; −57 is not a bond energy alone; ionisation can be negative). New 5 correct (−52.47). New 6: 6.2 °C gives −51.8 (arithmetic right) and −56.1 needs 6.7 °C (6.71). New 7 correct (1.6 kJ/mol inside the page's own ±2 to 3). New 8: HF T_max 26.2 gives −51.8 against −68.4 (ΔT 8.2, T_max about 28.2 °C from 20.0 °C; the design says 28.1 using −68, which is fine as "about"); HCN T_max 24.1 gives −34.3 against −12.3 (ΔT 1.5). New 9 to 11 correct as stated.

## Arithmetic and significant figures

Every calculation re-done by script.

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Ideal rises, 50.0 + 50.0 mL of 1.00 mol/L (m 100.0 g, c 4.18) | HCl 6.8; ethanoic 6.7; HF 8.1; HCl + NH₃ 6.2 °C | 6.82; 6.71; 8.13 (8.18 for −68.4); 6.22 | Correct |
| Scene 1 readouts | 21.0 to 27.8 °C (ΔT 6.8); 21.0 to 27.7 °C (ΔT 6.7) | consistent | Correct |
| A1 mass | 100.0 g | 100.0 | Correct |
| A1 q | 2800.6 J | 100.0 × 4.18 × 6.7 = 2800.6 | Correct |
| A1 n(H₂O) | 0.0500 mol | 1.00 × 0.0500 | Correct (equal amounts, neither in excess) |
| A1 ΔH | −56.01 → −56 kJ/mol (2 s.f., from ΔT 6.7) | −56.012 | Correct |
| A1 step | −56 − (−57) = +1, "about +1, close to zero" | +1 | Correct; agrees with the scene 6 value (+0.9 on convention) |
| A1 crossed | −57 − (−56) = −1 | −1 | Correct as the wrong-order slip |
| A2 (supplied +43) | −57 + 43 = −14; crossed −100 | −14; −100 | Arithmetic right; inconsistent with the convention and the measured −12 (S1) |
| A2 on convention | (not in design) | +45 − 57 = −12; crossed −102 | Use (S1) |

## Findings

### S1. Should fix: attempt 2's supplied HCN value is off the −57 convention (project manager decision 1)

- Exact text: "Its ionisation, HCN(aq) → H⁺(aq) + CN⁻(aq), absorbs about 43 kJ/mol. Using −57 kJ/mol for H⁺(aq) + OH⁻(aq) → H₂O(l)"; answer "−14 kJ/mol".
- Problem: +43.5 is measured against −55.8 (25 °C). Pairing it with −57 gives −14, but measured HCN neutralisation is about −12 (NBS −12.3; Chemguide −11.7 with KOH). Every other step in the video is "measured minus −57"; on that convention the HCN step is +44.7, about +45.
- Replacement: "absorbs about 45 kJ/mol"; answer −57 + 45 = −12 kJ/mol; crossed "−57 − 45 = −102 kJ/mol". Author note a records both conventions.

### M1. Minor (author note only): HF ionisation entropy

- Exact text (note e): "ΔS° about −88 J K⁻¹ mol⁻¹".
- Correct value: about −103 J K⁻¹ mol⁻¹ (NBS S°: HF(aq) 88.7, F⁻(aq) −13.8; consistent with ΔH° −12.55 and ΔG° +18.08). The −88 appears to be S° of HF(aq) itself.

### M2. Minor: mark the water step as a way of counting, not the mechanism, for the base case

- Exact text: scene 8 "Here the extra step is ammonia taking a proton from water"; scene 10 "Every neutralisation ends with hydrogen ion plus hydroxide ion making water"; key note 1 "ends with".
- Replacement: scene 8 "Here we count the extra step as ammonia taking a proton from water"; scene 10 and key note 1 "can be counted as ending with".

### M3. Minor: write out the ammonia staircase levels

- Replacement: top "NH₃(aq) + H₂O(l) + H⁺(aq)", middle "NH₄⁺(aq) + OH⁻(aq) + H⁺(aq)", bottom "NH₄⁺(aq) + H₂O(l)" (each level balanced, charge +1).

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger: `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ1-05 and C6-IQ3-03
- Wagman et al., The NBS tables of chemical thermodynamic properties, J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) (formation enthalpies and entropies listed above)
- Chemguide, Enthalpy changes of neutralisation (HCl + NaOH −57.9; ethanoic acid + NaOH −56.1; HCN + KOH −11.7 kJ/mol; read 20 Oct 2026): https://www.chemguide.co.uk/physical/energetics/neutralisation.html
- Christensen, Hansen and Izatt, Handbook of Proton Ionization Heats (Wiley, 1976) (HCN ionisation about +43.6 kJ/mol; ethanoic acid near zero at 25 °C)
- Marcus, Y., Thermodynamics of solvation of ions, J. Chem. Soc. Faraday Trans. 87 (1991) 2995 (single-ion hydration enthalpies)
- CRC Handbook of Chemistry and Physics, Dissociation constants of organic acids in aqueous solution (methanoic and ethanoic acid)

## Verdict

**Ready to voice after fixes** (S1 before recording; M1 to M3 are cheap and should be applied).

## Resolution (20 Oct)

Applied in `lessons/chem-m6-c09.md` Revision 2 (20 Oct).

- **S1, applied:** attempt 2 card and narration "absorbs about 45 kJ/mol"; feedback 2 "about minus twelve", staircase "+45", "−57", net "−12 kJ/mol"; crossed "−57 − 45 = −102 kJ/mol"; author note a explains the change and keeps the 25 °C values; numbers tables and memory aid check updated.
- **M1, applied:** note e gives ΔS° about −103 J K⁻¹ mol⁻¹ with its NBS basis.
- **M2, applied:** "we count the extra step as" (scene 8); "can be counted as ending with" (scene 10, key note 1).
- **M3, applied:** the three ammonia staircase levels are written in the scene 8 shot.

No em dashes (U+2014 count 0).
