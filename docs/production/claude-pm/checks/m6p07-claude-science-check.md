# m6p07 science check (chem-m6-p07, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-p07.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; `lessons/chem-m6-c12.md`, `chem-m6-c16.md` and `chem-m6-p06.md` (recalled values and claims); `checks/m6p04-claude-science-check.md` (series hazard conventions). Every number was recomputed with a Python script (21 Oct), covering: M(CH₃COOH); the label estimate and both titre estimates; titres, mean and spread; n, c(diluted), c(vinegar); g/L, g per 100 mL and the label difference; g per 100 g at 1.005 g/mL; the Ka check by exact quadratic with Ka 1.8 × 10⁻⁵ and with pKa 4.756, plus a Davies activity correction; c back-calculated from pH 2.40 to 2.47; the equivalence-point pH; A1; solution strengths for the hazard cut-offs. No audio, stills, site files or design files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C6-IQ3-06` (page 53): "conduct a chemical analysis of a common household substance for its acidity or basicity (ACSCH080)   , for example:" with examples "soft drink", "wine", "juice", "medicine". The design's quotation matches the ledger exactly, including the extra spaces. The YouTube description closes the spaces up, as C16's does (the author asks root to confirm against the official DOCX; that is a typesetting artefact, not wording). Basicity is exercised in A2, and the four examples are acknowledged in scene 18's tag. The boundary ("watching is not conducting") is right.

## Em dashes

None found (U+2014 count 0; U+2013 count 0).

## Calculation (strict significant figures)

| Item | Design | Recomputed | Verdict |
| --- | --- | --- | --- |
| M(CH₃COOH) | 60.05 g/mol | 60.052 → 60.05 | Correct |
| Label estimate | about 0.67 mol/L | 40 ÷ 60.05 = 0.6661 | Correct as "about" (label is 1 s.f.) |
| Neat titre (25.00 mL, 0.09940 mol/L) | about 170 mL, more than three fills | 167.5 mL; 3.35 fills | Correct |
| Diluted titre estimate | about 17 mL | 16.75 mL | Correct |
| Dilution factor | 10 | 250.0 ÷ 25.00 = 10.00 (4 s.f.) | Correct |
| Titres | 17.05, 17.10, 17.15; rough 17.4 | 17.25 − 0.20, 17.60 − 0.50, 17.25 − 0.10 | Correct; readings all on 0.05 mL steps |
| Concordance | within 0.10 mL | spread 0.10 (inclusive convention, C12 note g) | Correct |
| Mean titre | 17.10 mL | 51.30 ÷ 3 = 17.10 (exact) | Correct |
| n(NaOH) = n(CH₃COOH) | 1.6997 × 10⁻³ mol | 1.69974 × 10⁻³ (guard digit; 1.700 × 10⁻³ to 4 s.f.) | Correct |
| c(diluted) | 0.06799 mol/L | 0.0679896 → 0.06799 | Correct, 4 s.f. |
| c(vinegar) | 0.6799 mol/L | 0.679896 → 0.6799 | Correct, 4 s.f. |
| Mass concentration | 40.83 g/L; 4.083 g per 100 mL | 40.829 → 40.83; 4.083 | Correct, 4 s.f. |
| Compared with the label | about 2 % above 4 | (4.0829 − 4) ÷ 4 = 2.07 % | Correct as "about two percent" (see learning review M2 on wording) |
| Per 100 g (author note f) | 4.063 % by mass | 4.0829 ÷ 1.005 = 4.063 | Correct |
| Ka check, neat | pH 2.457 → 2.46 (0.51 % ionised) | quadratic 2.4573; pKa 4.756: 2.4629; activity-corrected 2.463 | Correct; 2 s.f. Ka supports 2 d.p. pH |
| Diluted pH | 2.96 | 2.9597 (Ka 1.8 × 10⁻⁵); 2.965 (pKa 4.756, also activity-corrected) | Correct; rise 0.50 |
| Equivalence pH | near 8.7 | [CH₃COO⁻] 0.0404 mol/L, pH 8.68 | Correct; phenolphthalein's faint pink from about 8.2 is close enough for a 1 : 1 weak acid titration |
| pH readings | 2.46, 2.45, 2.46 → 2.46 | 2.4567 → 2.46 | Correct |
| A1 | about 1.0 mol/L; 0.025 mol; about 250 mL; five fills; about 25 mL | 0.9991; 0.02498; 251.3 mL; 5.03; 25.13 | Correct; "about one" would match the 1 s.f. label better than "1.0" on screen (minor, optional) |
| A2 direction | too low | NH₃ lost → fewer moles in the 25.00 mL → smaller HCl titre → c calculated × 10 is low | Correct |
| A2 volatility (author note i) | p(NH₃) about 0.017 bar over 1 mol/kg; water 0.031 bar; NH₃ under 2 % of liquid molecules | Henry's constant about 59 mol kg⁻¹ bar⁻¹ gives 0.017 bar; x(NH₃) = 1 ÷ 56.5 = 1.8 %; vapour about 35 % NH₃ | Correct; "much faster" holds |
| Equations | balanced | C 2/2, H 5/5, O 3/3, Na 1/1; N 1/1, H 4/4, Cl 1/1 | Correct |
| Back-calculation (for S1) | not in design | pH 2.45 → 0.703; 2.46 → 0.671; 2.47 → 0.641 mol/L | About ±5 % per 0.01 pH |

## Reference claims

| Claim | Finding | Verdict |
| --- | --- | --- |
| "4% acidity" means grams per 100 mL on Australian labels (scene 9, C12 correction 6) | The Australia New Zealand Food Standards Code, Standard 2.10.1, requires vinegar to contain no less than **40 g/kg** of acetic acid, a mass-per-mass basis. The g per 100 mL convention is the United States one (FDA "grain" strength). Australian labels say "4% acidity" without stating a basis; the difference here is 0.5 % (4.083 g per 100 mL = 4.063 g per 100 g). | Not secure as stated (S3) |
| Buffers pH 7.00 and 2.00 | pH 2.00 buffers are sold commercially (glycine/HCl or citrate/HCl types); the IUPAC primary standard near 2 is potassium tetroxalate (1.68). Bracketing the sample is correct practice. Some school bench meters auto-recognise only 4.01, 7.00 and 10.01 and may not accept a 2.00 point. | Correct; Codex to confirm an Australian school supplier, and the fallback in author note c stays (M2) |
| NaOH absorbs CO₂, so it is standardised | 2NaOH + CO₂ → Na₂CO₃ + H₂O | Correct |
| Pink fades as CO₂ dissolves; 30 s rule | Standard practice | Correct |
| Probe follows activity, readings may differ by a few hundredths | Correct; for this vinegar the activity correction and the thermodynamic Ka cancel to within 0.01 | Correct |
| "Vinegar this dilute isn't classified" | Acetic acid Annex VI specific limits: Skin Irrit. 2 and Eye Irrit. 2 from 10 % | Correct |
| Phenolphthalein "classified as possibly causing cancer" | See hazard table and S1 | Needs rewording (S1) |

## Hazard classifications

| Reagent | Strength | Finding | Verdict |
| --- | --- | --- | --- |
| 0.09940 mol/L NaOH | 3.976 g/L, 0.40 % | EU CLP Annex VI specific limits: Skin Irrit. 2 and Eye Irrit. 2 from 0.5 % to < 2 %; so not classified. But the CLEAPSS HazCard 91 school banding treats **0.05 to < 0.5 mol/L as IRRITANT** and **≥ 0.5 mol/L as CORROSIVE**. | The design uses school guidance for 0.5 mol/L (scene 5) and the EU limit for 0.1 mol/L (scene 13); by the school guide 0.1 mol/L is an irritant (M1) |
| 0.5 mol/L NaOH (rejected) | 20.0 g/L; about 1.96 % w/w | Under the EU specific limits it is Skin Irrit. 2 (just under the 2 % corrosive limit); CLEAPSS treats it as corrosive. "counts as corrosive in school safety guides" is accurate as worded. | Correct as worded |
| Vinegar 4 % and its dilution | 4.1 % and 0.41 % w/v | Below 10 % | Not classified. Correct |
| Phenolphthalein (solid) | | Annex VI index 604-076-00-1: Carc. 1B (H350), Muta. 2 (H341), Repr. 2 (H361f); **specific concentration limit Carc. 1B: C ≥ 1 %** (Labbox SDS section 2, "1 ≤ C < 100") | The design's "H350 applies at 0.1 % or more (generic limit)" is wrong under EU CLP (S1) |
| Phenolphthalein indicator, about 0.5 % in ethanol | | Supplier sheets vary: Bernd Kraft 0.5 % in 90 % ethanol lists **H225 and H319 only** (consistent with the 1 % limit); Flinn and Carolina (US GHS, generic 0.1 % cut-off) list Carc. 1B, H350; some denatured-ethanol solutions add methanol hazards (Loba: H301 + H311 + H331, H370). IARC places phenolphthalein in Group 2B, "possibly carcinogenic to humans". | Classification of the solution depends on supplier and jurisdiction (S1) |
| Flammability | | H225 (higher ethanol) or H226 (lower ethanol), by flash point | Correct |
| Buffers | | Usually not classified; "check the label" | Correct |

## Exam style

A1 ("Use the label to estimate the expected titre, and explain how the student should change the plan") and A2 ("Explain the effect of leaving the cleaner in the open beaker on her calculated concentration of ammonia in the cleaner") use HSC Section II verbs and structure, keep every condition on the card, and are original. A search found no NESA paper with either scenario; the ammonia window-cleaner titration with methyl orange is a common textbook context, but the open-beaker error, numbers and wording are new. A1 needs its model answer widened (learning review S2).

## Absolute claims

- Scene 1 "neither one tells you how much acid is in the bottle" (S2).
- Scene 9 "Labels give grams per hundred millilitres" (S3).
- Scene 13 "never taste lab samples", "never by mouth": correct rules; keep.
- Scene 11 "the pH is only for the temperature you measured it at": acceptable.
- Scene 18 tag "wine (pH endpoint)": acceptable as a tag.

## Memory aid

- *pH on the sample as it is; amount on a dilution, scaled back up.* Assumptions (1) dilution changes pH and (2) dilution keeps the moles are true (for (1), any solution away from pH 7; here +0.50 units). Assumption (3), that the amount is measured "on a dilution", is not generally true (C12 titrated neat vinegar). The learning review's M3 wording fixes it. Condition tag "pH changes when you dilute; moles don't" is correct.

## Findings

No blockers.

### S1. Should fix: phenolphthalein's cancer classification is worded loosely and the concentration rule is wrong

- Exact text, scene 13 narration: "and phenolphthalein is classified as possibly causing cancer." Screen: "phenolphthalein indicator (about 0.5 % in ethanol): flammable (H225 or H226 by ethanol content); may cause cancer (H350)". Safety facts: "H350 applies at 0.1 % or more (generic limit for Carc. 1B)".
- Problems: (a) H350's statement is "May cause cancer" (Carc. 1B, "presumed" human carcinogen); "possibly causing cancer" is IARC's Group 2B wording, a weaker category, so the narration mixes two systems. (b) Under EU CLP, phenolphthalein has a specific concentration limit of 1 % for Carc. 1B, so a 0.5 % indicator solution is not H350 there; under the GHS generic 0.1 % cut-off (US sheets, and some Australian ones) it is. The school's bottle could carry either.
- Replacement narration: "Phenolphthalein solution is usually made with ethanol, so it's **flammable**, and phenolphthalein itself is classified as a substance that may cause cancer." (+17 characters.)
- Replacement screen row: "phenolphthalein indicator (about 0.5 % in ethanol)" / "flammable (H225 or H226); the solid is Carc. 1B, may cause cancer (H350); the solution's label varies by supplier, so check yours" / harm and control unchanged.
- Safety facts bullet: replace "H350 applies at 0.1 % or more (generic limit for Carc. 1B)" with "EU CLP Annex VI 604-076-00-1 sets a specific limit for Carc. 1B of C ≥ 1 %, so 0.5 % solutions are not H350 under CLP (Bernd Kraft 0.5 % in 90 % ethanol: H225, H319 only); US GHS sheets apply the generic 0.1 % cut-off and list H350 (Flinn, Carolina). Denatured-ethanol solutions may add methanol hazards. Codex to record the school supplier's sheet."
- Key note 5: "phenolphthalein solution flammable, H350" becomes "phenolphthalein flammable; the solid may cause cancer (H350)".

### S2. Should fix: "neither one tells you how much acid" is absolute, and the Ka check implies the reverse is possible

- See the learning review S1 for the narration (scene 1 "measures"; scene 10 "Why not run that backwards? A reading just zero point zero one out shifts the answer by about five percent.").
- Science basis: c = [H₃O⁺]² ÷ Ka + [H₃O⁺]; pH 2.45, 2.46 and 2.47 give 0.703, 0.671 and 0.641 mol/L (about ±4.7 % per 0.01 unit), before any uncertainty in Ka or other acids. "about five percent" is correct.

### S3. Should fix: the label basis is stated as fact, but the Australian standard is mass per mass

- Exact text, scene 9: "Labels give grams per hundred millilitres, so convert." Author note b: "'4% acidity' on Australian vinegar labels means about 4 g of acid per 100 mL (C12 correction 6)".
- Problem: FSANZ Standard 2.10.1 sets the minimum as 40 g/kg; labels state "4% acidity" without a basis. The video's comparison still holds on either basis (4.083 g per 100 mL, 4.063 g per 100 g), so only the wording changes.
- Replacement, scene 9: "The label's four percent means about four grams per hundred millilitres, so convert." (+30 characters.) Scene 4 already says "four grams of ethanoic acid in every hundred millilitres"; make it "about four grams of ethanoic acid in every hundred millilitres".
- Author note b replacement: "The Food Standards Code (Standard 2.10.1) requires at least 40 g/kg acetic acid; labels state '4% acidity' without a basis. At density about 1.005 g/mL, 4 g per 100 g and 4 g per 100 mL differ by 0.5 %, so the video treats the label as about 4 g per 100 mL and names the density as a limitation (scene 11). The measured 4.063 g per 100 g is above the 40 g/kg minimum."
- Root note (outside this design): C12 correction 6 and C12 scene 7 rely on the same claim. C12 says "The label's five per cent means five grams", which is acceptable as worded; its correction 6 rationale should be updated in the same way.

### M1. Minor: two hazard systems for NaOH

- Scene 5 cites school guides for 0.5 mol/L (corrosive); scene 13 cites the EU limit for 0.1 mol/L ("just below the irritant limit"). By the same school guide (CLEAPSS HazCard 91), 0.05 to < 0.5 mol/L is irritant.
- Replacement narration, scene 13: "This sodium hydroxide is dilute, but school guides still treat it as an irritant, and a splash can harm your eyes, so wear safety glasses." Screen row: "0.09940 mol/L NaOH (0.40 %): below the EU irritant limit (0.5 %), but school guides treat 0.05 to 0.5 mol/L as an irritant; supplier sheets vary, so check yours". If root prefers series consistency with P04, keep P04's wording and add only the screen clause.

### M2. Minor: pH 2.00 buffer availability and meter compatibility

- Add to author note c: "Some school meters auto-recognise only 4.01, 7.00 and 10.01. If a pH 2.00 point cannot be entered, use the fallback line." Codex task (3) already covers supplier availability.

### M3. Minor: A1 screen estimate precision

- "c ≈ 60 ÷ 60.05 ≈ 1.0 mol/L" from a one-figure label: "≈ 1 mol/L" matches the data better. Optional; the narration already says "about one".

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx; local ledger `chem-2017-y12.json`, entry C6-IQ3-06 (page 53)
- Food Standards Code, Standard 2.10.1, Vinegar and related products (F2015L00484), section 2.10.1-3 ("no less than 40 g/kg of acetic acid"): https://www.legislation.gov.au/F2015L00484/asmade/2015-04-02/text/original/epub/OEBPS/document_1/document_1.html
- CLEAPSS HazCard 91, sodium hydroxide (archived 2007 copy: ≥ 0.5 mol/dm³ corrosive; 0.05 to < 0.5 mol/dm³ irritant): https://resources.hwb.gov.wales/VTC/2009-10/science/irf09-08/course_files/workbook/hazcards/091-sodium-hydroxide.pdf ; current CLEAPSS listing SSS031: https://science.cleapss.org.uk/Resource-Info/SSS031-Sodium-hydroxide.aspx
- Labbox phenolphthalein SDS (CLP index 604-076-00-1; Carc. 1B, Muta. 2, Repr. 2; specific limit Carc. 1B 1 ≤ C < 100 %): https://labbox.es/wp-content/uploads/FDS/SDS_EN_10374.pdf
- Bernd Kraft phenolphthalein indicator 0.5 % in 90 % ethanol (H225, H319): https://www.analytics-shop.com/gb/bk03256-2700
- Flinn phenolphthalein solution SDS (Carc. 1B, H350): https://employees.delta.edu/facilities/_safety-data-sheets/phenolphthalein-0.1-solution-flinn.pdf
- Carolina phenolphthalein solution in 50 % ethanol SDS: https://beta.lakeland.edu/AboutUs/MSDS/PDFs/2342/Phenolphthalein%20Solution%2050pct%20in%2050pct%20Ethanol%20[87-9965]%20(Carolina)%209-3-14.pdf
- Loba Chemie phenolphthalein indicator SDS (methanol-containing; H225, H301 + H311 + H331, H370): https://www.lobachemie.com/lab-chemical-msds/MSDS-PHENOLPHTHALEIN-INDICATOR-SOLUTION-CASNO-05173-EN.aspx
- IARC Monographs vol. 76 (2000): phenolphthalein, Group 2B (from reviewer knowledge; not re-fetched this session)
- Sander, R. (2015), Compilation of Henry's law constants for water as solvent, Atmos. Chem. Phys. 15, 4399 (ammonia about 59 mol kg⁻¹ bar⁻¹; from reviewer knowledge, not re-fetched)
- CRC Handbook dissociation constants (ethanoic acid pKa 4.756) via the series' C10 check; IUPAC 2002 pH recommendations (Buck et al., Pure Appl. Chem. 74, 2169) for the 1.68 tetroxalate standard
- Local: `lessons/chem-m6-c12.md` (hook and author note a, back-calculation), `lessons/chem-m6-c16.md` (scenes 2, 4, 9), `checks/m6p04-claude-science-check.md`

## Verdict

**Ready to voice after fixes.** S1 to S3 change narration or learner screen text and must be applied before recording; M1 to M3 are cheap. The Codex error check is still required.

## Resolution

Resolved by the design author in `lessons/chem-m6-p07.md` Revision 2 (21 Oct). Narration recounted by script (only `> ` lines): 6,273 characters, about 570 s (9.5 minutes). No em dash or en dash.

- **S1 (resolved):** narration now says "phenolphthalein itself is classified as a substance that may cause cancer" (H350's wording; IARC's "possibly" removed). Screen row: "phenolphthalein indicator (about 0.5 % in ethanol): flammable (H225 or H226); the solid is Carc. 1B, may cause cancer (H350); the solution's label varies by supplier, so check yours". Key note 5: "phenolphthalein flammable, the solid may cause cancer (H350)". The Safety facts bullet now records the EU CLP specific limit (C ≥ 1 %, so 0.5 % solutions are not H350 under CLP), the US GHS 0.1 % generic cut-off (Flinn, Carolina list H350) and the methanol caveat, as author material only; the concentration-limit nuance is kept out of learner copy because "check yours" already covers it.
- **S2 (resolved):** as learning review S1 (scene 1 "measures"; scene 10's backwards sentence and the 0.70 / 0.67 / 0.64 strip). The back-calculation (0.703, 0.671, 0.641 mol/L; about ±4.7 % per 0.01) is in "Numbers to verify".
- **S3 (resolved):** scene 4 says "about four grams of ethanoic acid in every hundred millilitres"; scene 9 says "The label's four percent means about four grams per hundred millilitres, so convert." Author note b now cites Food Standards Code Standard 2.10.1 (at least 40 g/kg) and states that the result holds on either basis: 4.083 g per 100 mL is 4.063 g per 100 g, above the 40 g/kg minimum, so "close to the label" and "consistent with the label" stand. The Decisions references to C12 correction 6 and the reference-facts line are reworded. The C12 root note is carried in Decisions (outside this design; C12 not edited).
- **M1 (resolved, P04 consistency chosen):** scene 13 narration now uses P04's exact wording ("sits just under the irritant limit, so treat a splash as harmful and wear safety glasses"); the screen row keeps P04's "just below the EU irritant limit (0.5 %) ... supplier sheets vary, so check yours" and adds "school guides treat 0.05 to < 0.5 mol/L as an irritant", so scenes 5 and 13 rest on the same school guide. Safety facts bullet updated with the CLEAPSS HazCard 91 banding.
- **M2 (resolved):** author note c adds the meter auto-recognition fallback; Codex request (3) now also asks whether common school meters accept a pH 2.00 point.
- **M3 (resolved):** A1 screen estimate now "c ≈ 60 ÷ 60.05 ≈ 1 mol/L" and "n ≈ 1 × 0.02500"; model answer and "Numbers to verify" say "about 1".

Still required: Codex error check (numbers, SDS confirmations, supplier availability) before voicing.
