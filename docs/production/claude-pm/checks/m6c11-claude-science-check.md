# m6c11 science check (chem-m6-c11, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 20 Oct 2026.
Inspected: `lessons/chem-m6-c11.md` (Revision 1), proposal text only, plus the following:

- the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`;
- the ledger audit `docs/production/programme/syllabus/ledger-audit-2026-10.md`;
- the route draft `docs/production/module6-video-route-draft.json`.

Every number was recomputed with a Python script (20 Oct; `math.log10`, `math.sqrt`). The script used the ratio shortcut and also a full quadratic equilibrium treatment for each buffer point. Site lesson 13 quotes in the new corrections list were spot-checked against `C:/Users/kygs/hscscience/subjects/chemistry/year12/module6/lesson13.sa.html`. All were present as quoted:

- "In 1908, Lawrence Henderson at Harvard discovered the equation that bears his name";
- "it does not neutralise them to completion";
- "the H⁺ is not neutralised to zero";
- "4.74 + log(0.0950/0.0800) ... = 4.81" and "a factor of ~83";
- "your answer must contain four elements";
- "the HSC marking guideline requires three things";
- "not a simple neutralisation";
- "pKa = 6.10";
- the Think First "pure water (pH 7.00)", 4.74 → 4.66;
- "quantitative buffer capacity, and detailed blood and ocean buffer calculations are Extension".

The sources consulted are listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

Ledger entry `C6-IQ3-07` (Module 6, "How are solutions of acids and bases analysed?", Quantitative Analysis, page 53, practical): "conduct a practical investigation to prepare a buffer and demonstrate its properties (ACSCH080)".

Ledger entry `C6-IQ3-08` (same inquiry question, page 53): "describe the importance of buffers in natural systems (ACSCH098, ACSCH102)".

The design text (lines 9 and 11, and the YouTube description) matches both word for word.

**ID shift confirmed.** The ledger audit table says it "Added `C6-IQ3-04`, the Ka/pKa point ... Renumbered the next four points `C6-IQ3-05` to `C6-IQ3-08`". The route draft still uses the pre-audit numbering:

- chem-m6-c11 lists `C6-IQ3-06` and `C6-IQ3-07`;
- chem-m6-p05 lists `C6-IQ3-06`;
- its own syllabus list gives `C6-IQ3-06` as the buffer practical and `C6-IQ3-07` as natural systems.

In the current ledger, `C6-IQ3-06` is "conduct a chemical analysis of a common household substance for its acidity or basicity (ACSCH080)". The author's statement therefore appears correct: the buffer points are now `C6-IQ3-07` and `C6-IQ3-08`. The route draft (and P05's entry) needs the route owner's correction. The quotes themselves are unaffected, because the design quotes text, not IDs.

## Em dashes

None found (U+2014 count 0).

## Reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| Ka(CH₃COOH) 1.8 × 10⁻⁵, pKa 4.74 (25 °C) | tabulated 1.75 × 10⁻⁵ (pKa 4.756); −log(1.8 × 10⁻⁵) = 4.7447 | Consistent with C10 and the site; correct at the course's two figures | CRC dissociation constants |
| pKa(NH₄⁺) 9.25 supplied in A1 | Kw ÷ Kb = 5.56 × 10⁻¹⁰, pKa 9.255; tabulated 9.24 to 9.25 | Correct as supplied | CRC; author note h |
| K for CH₃COO⁻ + H₃O⁺ → CH₃COOH + H₂O is 1/Ka ≈ 5.6 × 10⁴ | 5.56 × 10⁴ | Correct; supports "almost every added hydronium is used up" | (calculation) |
| Blood pH 7.35 to 7.45; HCO₃⁻ about 24 mmol/L, dissolved CO₂ about 1.2 mmol/L, ratio about 20 : 1 | 24 ÷ 1.2 = 20 | Correct as typical arterial values | OpenStax Anatomy and Physiology 2e, 26.4 |
| Lungs within minutes; kidneys over hours to days | as stated | Correct | OpenStax A&P 2e, 26.4 |
| H₂PO₄⁻ / HPO₄²⁻ intracellular buffer, pKa 7.21 | 7.2 (pKa₂ of phosphoric acid) | Correct; proteins are also major intracellular buffers (M2) | CRC; OpenStax A&P 2e, 26.4 |
| Surface ocean pH down about 0.1 since pre-industrial (author note l) | about 0.1 | Correct; not in learner copy | NOAA Ocean acidification |
| Henderson 1908, Sørensen 1909, Hasselbalch 1916 (new correction 1) | as stated | Correct; the site's "discovered the equation that bears his name" with pH in 1908 is anachronistic, as the author says | Henderson, Am. J. Physiol. 21 (1908) 173; Sørensen, Biochem. Z. 21 (1909) 131; Hasselbalch, Biochem. Z. 78 (1916) 112 |
| Site worked example: 4.87 → 4.81, factor about 83 (new correction 3) | 4.7447 + log(0.1000/0.0750) = 4.870; 4.7447 + log(0.0950/0.0800) = 4.819; ΔpH −0.05, factor about 100 | Author's correction confirmed (4.82, −0.05, about 100) | (calculation) |

## Chemistry claims and equations

All equations balance in atoms and charge (checked independently).

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq) (2, 3) | C 2/2, H 6/6, O 3/3; 0 = 0 | correct | OK |
| CH₃COO⁻(aq) + H₃O⁺(aq) → CH₃COOH(aq) + H₂O(l) (3, notes) | C 2/2, H 6/6, O 3/3; 0 = 0 | correct | OK |
| CH₃COOH(aq) + OH⁻(aq) → CH₃COO⁻(aq) + H₂O(l) (4, notes) | C 2/2, H 5/5, O 3/3; −1 = −1 | correct | OK |
| H₂CO₃(aq) + H₂O(l) ⇌ H₃O⁺(aq) + HCO₃⁻(aq) (9) | H 4/4, C 1/1, O 4/4; 0 = 0 | correct | OK |
| HCO₃⁻(aq) + H₃O⁺(aq) → H₂CO₃(aq) + H₂O(l) (9) | H 4/4, C 1/1, O 4/4; 0 = 0 | correct | OK |
| H₂CO₃(aq) → CO₂(aq) + H₂O(l) (9) | balanced | correct; an equilibrium in general, written → as the net direction while the lungs remove CO₂, which is acceptable | OK |
| NH₃(aq) + H₃O⁺(aq) → NH₄⁺(aq) + H₂O(l) (feedback 1) | N 1/1, H 6/6, O 1/1; +1 = +1 | correct | OK |
| NH₄⁺(aq) + OH⁻(aq) → NH₃(aq) + H₂O(l) (feedback 1) | N 1/1, H 5/5, O 1/1; 0 = 0 | correct | OK |
| Chips "cells: H₂PO₄⁻ / HPO₄²⁻", "oceans: CO₃²⁻ / HCO₃⁻" (10) | charges correct | the ocean chip is written base / acid, the reverse of every other pair | M5 |

Other claims:

- "A weak acid and its conjugate base, both in large amounts: that's a buffer": correct at this level (site card 1: "comparable concentrations").
- "Almost every added hydronium is used up": correct (K about 5.6 × 10⁴). This also avoids the site's "not neutralised to zero" error (new correction 2, confirmed).
- "In Module 5 terms, adding a product pushed the equilibrium back to the left": an acceptable Le Chatelier reading of the same result.
- [H₃O⁺] = Ka × n(HA) / n(A⁻), with moles because the volume cancels: correct. Using the amounts added assumes the partners barely react with water. The full treatment differs by at most 0.0004 in pH at the start and after one dose (below), so the assumption appears safe here. The learner copy does not state it (learning review S3).
- "When the two partners are equal, the pH equals the pKa": correct.
- "More acid than base puts the pH below the pKa, more base puts it above": correct.
- "Chloride is the conjugate base of a strong acid, so it doesn't take protons back": correct (C06).
- Capacity "before one partner runs out" (scene 8, key note 4): the pH has already fallen by more than one unit at 9 mL, while 10% of the ethanoate is still present. A buffer usually counts as failing before a partner is exhausted (M1).
- "It depends on how much of each partner there is, not on the pH": correct.
- Blood: "enzymes and haemoglobin work best in a narrow range", phrased as a tendency: acceptable. The 20 : 1 tilt means "far more acid than base" capacity in the closed-buffer sense: correct. The open system (lungs and kidneys) is stated. "Twenty hydrogencarbonate ions for every carbonic acid molecule" follows the physiology convention that counts dissolved CO₂ as "carbonic acid". True H₂CO₃ is a small fraction of that pool. The convention is standard, so keep it in learner copy and record it in the author note (M3).
- "Cells rely on a phosphate buffer": proteins also buffer strongly inside cells, so "rely on" overstates phosphate's share (M2).
- Ocean clause ("oceans on carbonate"): correct as a statement that carbonate takes up added acid. It has no number and no threshold, so it avoids the worksheet 04 problems. It is kept by the project manager's decision.
- Indicator choices, primary standards, concordance: not applicable (no titration in this video).

## Arithmetic and significant figures

Every calculation was re-done by script.

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Hook water + 1.0 mL of 1.0 mol/L HCl in 101 mL | pH 2.00 | [H₃O⁺] 9.901 × 10⁻³; pH 2.004 | Correct |
| Hook water + NaOH | pH 12.00 | 11.996 | Correct |
| Water rise | about 100,000 times | 99,010 | Correct |
| Buffer start | 4.74 | ratio 4.7447; full treatment 4.7449 | Correct |
| After 0.0010 mol H₃O⁺ | HA 0.0110, A⁻ 0.0090; ratio 1.22; [H₃O⁺] 2.2 × 10⁻⁵; pH 4.66; "about 20%" | 1.222; 2.200 × 10⁻⁵; 4.6576 (full 4.6578); 22% | Correct |
| Hook bracket | −0.08 | from rounded readouts 0.08; unrounded 0.087 | Correct as a difference of displayed readouts; "less than a tenth" holds |
| After 0.0010 mol OH⁻ | 4.83 | 1.473 × 10⁻⁵; 4.8319 | Correct |
| Capacity curve, buffer | 4.74, 4.57, 4.38, 4.14, 3.79, 3.47, 2.74, 2.05, 1.75 at 0, 2, 4, 6, 8, 9, 10, 11, 12 mL | ratio 4.7447, 4.5686, 4.3768, 4.1427, 3.7905, 3.4660; 10 mL weak acid 2.7447; 11 mL 2.045 (2.029 with the acid's own contribution); 12 mL 1.748 (1.744) | Correct to two decimal places (full treatment gives 3.48 at 9 mL and 2.03 at 11 mL; plotted shape unchanged) |
| Capacity curve, water | 2.00, 1.71, 1.42, 1.25, 1.13, 1.04, 0.97 | 2.004, 1.708, 1.415, 1.247, 1.130, 1.041, 0.970 | Correct |
| Author note g, "8 mL is where the fall first exceeds one unit (0.95 at 8 mL, 1.27 at 9 mL)" | | fall 0.954 at 8 mL, 1.279 at 9 mL | The fall first exceeds one unit at 9 mL; the note's wording is reversed (M4). The site's "eight doses before the pH has fallen by a full unit" agrees with 9 mL. |
| A1 | pH ≈ 9.25 | equal amounts: pH = pKa = 9.25 | Correct |
| A2, X | HA 0.012, A⁻ 0.008; pH 4.57 | 2.7 × 10⁻⁵; 4.5686 | Correct; show 0.0080 to two significant figures (learning M3) |
| A2, Y | excess 0.0010 mol, 0.010 mol/L, pH ≈ 2.00 | common-ion x = 3.58 × 10⁻⁵; pH 1.998 | Correct |
| Inset "same pH, one tenth the capacity" | 0.0100 against 0.0010 mol each | ratio 10 | Correct |

pH decimal places follow the two significant figures of Ka (C07 rule), applied consistently.

## Findings

No blocker or should-fix science errors were found. The minor items follow.

### M1. Minor: capacity is reached before a partner is completely used up

- Exact text: scene 8 "before one partner runs out is its **capacity**"; gloss "before a partner runs out"; key note 4 "before one partner is used up".
- Replacement: "before one partner is nearly used up" in all three places.

### M2. Minor: phosphate is one intracellular buffer, not the only one

- Exact text (scene 10): "Cells rely on a **phosphate** buffer".
- Replacement: "Inside cells, a **phosphate** buffer helps too"; author note l records protein buffering.

### M3. Minor (author note): the "carbonic acid" convention in the 20 : 1 ratio

- Add to author note j: the ratio counts dissolved CO₂ with H₂CO₃ (the physiology convention); true H₂CO₃ is a small fraction of that pool.

### M4. Minor (author note): the one-unit point is 9 mL, not 8 mL

- Replacement for note g: "the fall from the start is still under one unit after 8 mL (0.95) and first exceeds it at 9 mL (1.28)".

### M5. Minor: write the ocean pair as acid / base

- Replacement: "oceans: HCO₃⁻ / CO₃²⁻", matching "H₂PO₄⁻ / HPO₄²⁻".

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ3-06 to C6-IQ3-08; ledger audit `docs/production/programme/syllabus/ledger-audit-2026-10.md` (renumbering row)
- CRC Handbook of Chemistry and Physics, Dissociation constants of organic acids and of inorganic acids and bases in aqueous solution (ethanoic acid, ammonium, phosphoric acid)
- OpenStax, Anatomy and Physiology 2e, section 26.4, Acid-base balance (blood pH range, HCO₃⁻ and CO₂ values, respiratory and renal timescales, intracellular protein and phosphate buffers): https://openstax.org/books/anatomy-and-physiology-2e/pages/26-4-acid-base-balance
- NOAA, Ocean acidification (surface ocean pH change of about 0.1): https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-acidification
- Henderson, L. J., Am. J. Physiol. 21 (1908) 173; Sørensen, S. P. L., Biochem. Z. 21 (1909) 131; Hasselbalch, K. A., Biochem. Z. 78 (1916) 112
- Site lesson 13 (read-only), spot-checked as listed above

## Verdict

**Ready to voice after minor fixes** (M1, M2 and M5 touch learner copy and should be applied; M3 and M4 are author notes). The route-ID shift is confirmed and is for the route owner.

## Resolution (20 Oct)

Applied in `lessons/chem-m6-c11.md` Revision 2 (20 Oct).

- **M1, applied:** "nearly used up" in scene 8's narration and gloss, and in key note 4.
- **M2, applied:** "Inside cells, a phosphate buffer helps too"; author note l records protein buffering.
- **M3, applied:** author note j records the carbonic acid convention.
- **M4, applied:** author note g now says the fall first exceeds one unit at 9 mL, with the full-treatment values.
- **M5, applied:** ocean chip "HCO₃⁻ / CO₃²⁻ (each written acid / base)".
- **ID shift:** recorded in the design's scope line; the route draft and P05's entry are not changed here (outside this task's files).

No em dashes (U+2014 count 0).
