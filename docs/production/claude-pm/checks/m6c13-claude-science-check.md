# m6c13 science check (chem-m6-c13, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-c13.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (21 Oct; `math.log10`, `math.sqrt`, bisection on the full charge balance with Kw 1.0 × 10⁻¹⁴, Ka(CH₃COOH) 1.8 × 10⁻⁵, Kb(NH₃) 1.8 × 10⁻⁵). This covered the equivalence pH, every curve point, every indicator crossing volume and the site-correction arithmetic.

Site quotes in the new corrections list were spot-checked against `C:/Users/kygs/hscscience/subjects/chemistry/year12/module6/lesson15.sa.html` and `lesson17.sa.html` (read-only). All were found:

- L15: "far too small", "[Colour A]", "Too large", "earns zero", "methyl orange (range 3.1–4.4)", "Phenolphthalein (8.3–10.0)", worked example 2's 8.67 and 5.56;
- L17: "15–20%", "methyl orange or BTB", the 8.2 lower bound for phenolphthalein.

The sources consulted are listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

- Ledger `C6-IQ1-02` (page 52, practical): "conduct an investigation to demonstrate the preparation and use of indicators as illustrators of the characteristics and properties of acids and bases and their reversible reactions (ACSCH101)". The design text and the YouTube description match word for word.
- Ledger `C6-IQ3-02` (page 53, practical): "investigate titration curves and conductivity graphs to analyse data to indicate characteristic reaction profiles, for example:" with the examples "strong acid/strong base", "strong acid/weak base", "weak acid/strong base (ACSCH080, ACSCH102)". The design matches; the YouTube description runs the examples into one line, which keeps the words.
- The design correctly says neither C13 nor P01 (for `C6-IQ1-02`), and neither C13 nor C14 (for `C6-IQ3-02`), alone is full coverage. The page numbers 52 and 53 agree with the ledger.

## Em dashes

None found (U+2014 count 0). En dashes appear in ranges such as "3.1–4.4"; they are not em dashes.

## Reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| Ka(CH₃COOH) 1.8 × 10⁻⁵ at 25 °C | tabulated about 1.75 × 10⁻⁵ (pKa about 4.76) | Consistent with C10 and C11 | CRC Handbook, dissociation constants |
| Kb(NH₃) 1.8 × 10⁻⁵; Ka(NH₄⁺) = 5.6 × 10⁻¹⁰, pKa 9.25 | as stated | Correct | CRC Handbook |
| Kw 1.0 × 10⁻¹⁴ at 25 °C | as stated | Correct | CRC Handbook |
| Methyl orange 3.1–4.4, red to yellow; pKa | usual table range 3.1 (or 3.2) to 4.4; pKa commonly given as about 3.4 to 3.7 | Correct; the range is not centred on pKa, as author note e says | Harris, Quantitative Chemical Analysis (indicator table); CRC Handbook (acid-base indicators) |
| Methyl red 4.4–6.2, red to yellow; pKa | ranges in common tables from 4.2–6.3 to 4.8–6.0; pKa about 5.0 to 5.1 | Correct as a common school-table range; author note f records the variants | Harris; CRC Handbook |
| Bromothymol blue 6.0–7.6, yellow to blue; pKIn about 7.1 | 6.0–7.6; pKa about 7.0 to 7.3 | Correct | Harris; CRC Handbook |
| Phenolphthalein 8.3–10.0, colourless to pink; pKa | ranges from 8.0–9.6 to 8.3–10.0 in different tables; pKa commonly about 9.3 to 9.7 | Correct as the site's and a common Australian range; the scene 4 marker "at about 9" is fair | Harris; CRC Handbook |

The range midpoints (3.75, 5.3, 6.8, 9.15) all lie within about half a unit of the tabulated pKa values, so "roughly two pH units around the indicator's pKa" (scene 4, key note 2) is a fair approximation with "roughly" and "usually". These values are recalled from standard tables and are listed for Codex to confirm against a data source, as the design already requests.

## Equivalence pH (worked example)

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| n(CH₃COO⁻) | 2.50 × 10⁻³ mol | 0.100 × 0.02500 = 2.500 × 10⁻³ | Correct |
| [CH₃COO⁻] in 50.00 mL | 0.0500 mol/L | 0.05000 | Correct (3 s.f.) |
| Kb | 5.6 × 10⁻¹⁰ | 5.556 × 10⁻¹⁰ | Correct (2 s.f. from Ka) |
| [OH⁻] | 5.3 × 10⁻⁶ mol/L | 5.270 × 10⁻⁶ (with rounded Kb 5.292 × 10⁻⁶) | Correct either way |
| pOH | 5.28 | −log(5.3 × 10⁻⁶) = 5.276; unrounded 5.278 | Correct (2 d.p. for 2 s.f.) |
| pH | 8.72 | 8.722; full charge balance 8.722 | Correct |
| x small check | 0.011% | 0.0105% | Correct |

## Curve points and indicator crossings

| Item | Design value | Recomputed (full charge balance) | Verdict |
| --- | --- | --- | --- |
| CH₃COOH start | 2.87 shown (full 2.88) | shortcut 2.872; full 2.875 | Correct; shared with C14 |
| CH₃COOH 2, 5, 10, 12.5, 15, 20, 24, 24.5 mL | 3.70, 4.14, 4.57, 4.75, 4.92, 5.35, 6.13, 6.44 | 3.697, 4.145, 4.569, 4.745, 4.921, 5.347, 6.125, 6.435 | Correct |
| CH₃COOH 24.95, 25.00, 25.05 mL | 7.44, 8.72, 10.00 | 7.442, 8.722, 10.001 | Correct |
| CH₃COOH 26, 30, 35, 40, 50 mL | 11.29, 11.96, 12.22, 12.36, 12.52 | 11.292, 11.959, 12.222, 12.363, 12.523 | Correct |
| Methyl orange in the ethanoic flask | "red to yellow between about two and eight millilitres" | pH 3.1 at 0.35 mL, 3.7 at 2.02 mL, 4.4 at 7.77 mL | The end is right; the start is not (S1) |
| Reported c with a 7.8 mL methyl orange endpoint | "far too low" (about 0.031) | 0.0311 mol/L | Correct; no figure in narration |
| Phenolphthalein in the ethanoic flask | 8.3 at 24.994 mL, 10.0 at 25.05 mL | 24.994, 25.050 | Correct: "pink within a drop" |
| Bromothymol blue in the ethanoic flask (new correction 1) | 6.0 at 23.68, 7.0 at 24.86, 7.6 at 24.965 mL | 23.684, 24.862, 24.965 | Correct; the site's "near pKa ± 1" claim is wrong, as the author says |
| HCl curve 0, 10, 20, 24, 24.95, 25.00, 25.05 mL | 1.00, 1.37, 1.95, 2.69, 4.00, 7.00, 10.00 | 1.000, 1.368, 1.954, 2.690, 4.000, 7.000, 10.000 | Correct |
| Methyl orange in the HCl flask | 4.4 at 24.98 mL | 3.1 at 24.61, 3.7 at 24.90, 4.4 at 24.98 mL | Correct; "finish changing within about a drop" is accurate because it says "finish" (the change starts about 0.4 mL early) |
| Bromothymol blue, phenolphthalein in the HCl flask | between 25.00 and 25.05 mL | 6.0 at 24.9995; 7.6 at 25.0002; 8.3 at 25.001; 10.0 at 25.050 | Correct |
| 0.0010 mol/L HCl, one drop each side (author note d) | about 6 to 8 | 5.995, 8.004 | Correct |
| A2: NH₃ flask, HCl burette | start 11.12; 10.0 at 3.8; 8.3 at 22.5; 7.6 at 24.46; 6.56 at 24.95; 5.28 at 25.00; 4.00 at 25.05 mL | 11.125; 3.785; 22.504; 24.459; 6.558; 5.278; 3.999 | Correct |
| A2 methyl red and methyl orange | MR 6.2 at 24.978, 4.4 at 25.02; MO 4.4 at 25.02, 3.1 at 25.4 mL | 24.978; 25.020; 25.020; 25.400 | Correct: methyl red lies wholly inside the stated 6.6 to 4.0 jump |
| A1: bromothymol blue ratio at pH 4 and 10 (pKIn 7.1) | about a thousand to one | 1,259 : 1 and 794 : 1 | Correct as "about a thousand" |
| New correction 5 (aspirin) | 27% and 88% | pKa 3.523; 0.274 and 0.883 | Correct |

## Chemistry claims and equations

All on-screen equations balance in atoms and charge (checked independently).

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| HIn(aq) + H₂O(l) ⇌ H₃O⁺(aq) + In⁻(aq) (2, 14, key note 1) | H and O balance; 0 = 0 | correct | OK (single-step model; M3) |
| CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l) (6) | C 2/2, H 5/5, O 3/3, Na 1/1 | correct | OK |
| CH₃COO⁻(aq) + H₂O(l) ⇌ CH₃COOH(aq) + OH⁻(aq) (6, 9) | C 2/2, H 5/5, O 3/3; −1 = −1 | correct | OK |
| NH₄⁺(aq) + H₂O(l) ⇌ NH₃(aq) + H₃O⁺(aq) (7, 16) | N 1/1, H 6/6, O 1/1; +1 = +1 | correct | OK |
| Column labels "CH₃COOH + NaOH → CH₃COONa", "HCl + NaOH → NaCl" (7) | water missing | none | Unbalanced as written (M1) |
| Key note 3 equations | balanced | no states | M2 |

Other claims:

- "An indicator is itself a weak acid ... the two forms are different colours": correct at Stage 6 level. Phenolphthalein's colourless form is a lactone and its pink form a dianion; author note e records it.
- "hydroxide removes hydronium. The equilibrium shifts right ... the indicator isn't used up": correct; the indicator is present in tiny amounts and is regenerated.
- "Your eye usually sees one colour clearly once that form is about ten times the other": a standard approximation; "usually" keeps it appropriately hedged.
- "Sodium ions don't react with water ... ethanoate ... takes protons back ... from water": correct.
- "Chloride, from a strong acid, barely takes protons ... neutral, pH seven at twenty five degrees": correct with the temperature condition.
- "Ammonium, the conjugate acid of a weak base, gives protons to water, making hydronium": correct.
- "Near equivalence, the pH leaps: one drop before, it's about seven point four, and one drop after, it's ten": correct for 0.05 mL drops.
- "Methyl orange changes way back here, in the buffer region, while most of the acid is still there": correct (at 7.8 mL about 69% of the acid remains).
- "Its range doesn't have to contain the exact equivalence pH": correct, and it fixes the site's rule (draft correction 3). For HCl with NaOH, methyl orange's range (3.1 to 4.4) does not contain 7.00, yet the endpoint error is under about 0.1 mL.
- Feedback 2, "Phenolphthalein ... goes colourless while ammonia is still in excess": correct (fully colourless by 22.5 mL; it fades from about 3.8 mL).
- Memory aid "The salt takes after its stronger parent", with its conditions: holds for all three cases shown.

## Findings

### S1. Should fix: methyl orange's change starts almost at once (scenes 1 and 10, numbers tables)

- Exact text: "the colour drifts from red to yellow between about two and eight millilitres"; scene 10 "lights orange between about 2 and 8 mL".
- Problem: the flask starts at pH 2.87 (red), reaches 3.1 at 0.35 mL and 3.7 (orange) at 2.0 mL. "Between two and eight" places the start of the red-to-yellow change at 2 mL, which is the orange midpoint.
- Replacement: "the colour drifts from red, through orange, to yellow over the first eight millilitres"; scene 10's stretch at about 0.4 to 8 mL; author note a and the tables record 0.35, 2.0 and 7.8 mL.

### M1. Minor: balance the scene 7 column labels

- Replacement: "CH₃COOH + NaOH → CH₃COONa + H₂O" and "HCl + NaOH → NaCl + H₂O". ("HCl + NH₃ → NH₄Cl" is already balanced.)

### M2. Minor: state symbols in key note 3

- Replacement: "CH₃COO⁻(aq) + H₂O(l) ⇌ CH₃COOH(aq) + OH⁻(aq)" and "NH₄⁺(aq) + H₂O(l) ⇌ NH₃(aq) + H₃O⁺(aq)", matching the on-screen strips.

### M3. Minor: record the bromothymol blue model in the author notes

- Bromothymol blue's yellow form is usually written HIn⁻ (with In²⁻ blue) in fuller treatments. The single-step HIn ⇌ In⁻ model is the standard HSC treatment and is what A1 states, so no learner change is needed. Add this to author note g.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ1-02 (page 52) and C6-IQ3-02 (page 53); route draft `docs/production/module6-video-route-draft.json`
- CRC Handbook of Chemistry and Physics: dissociation constants of acids and bases, acid-base indicators, Kw
- Harris, Quantitative Chemical Analysis: acid-base indicator table and titration-curve treatment
- Skoog, West, Holler and Crouch, Fundamentals of Analytical Chemistry: indicator transition ranges (the tenfold-ratio approximation) and titration curves
- Site lessons 15 and 17 (read-only), spot-checked as listed above

## Verdict

**Ready to voice after fixes** (S1 before recording; M1 to M3 are cheap and should be applied). The Codex error check is still required.

## Resolution (21 Oct)

Applied in `lessons/chem-m6-c13.md` Revision 2 (21 Oct).

- **S1, applied:** hook narration and chip, scene 10's stretch and drop line, author note a, the cause chain, the numbers tables and "Numbers to verify" (pH 3.1 at 0.35 mL added).
- **M1, applied:** scene 7's two labels now include "+ H₂O".
- **M2, applied:** key note 3 equations carry states.
- **M3, applied:** author note g records the HIn⁻/In²⁻ form and why the single-step model is kept.

No em dashes (U+2014 count 0). Narration 6,254 characters, about 9.5 minutes.
