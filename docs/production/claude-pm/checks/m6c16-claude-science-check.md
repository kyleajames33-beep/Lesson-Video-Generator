# m6c16 science check (chem-m6-c16, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-c16.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (21 Oct). The script covered the Nernst slope at 25 °C and 37 °C (R 8.314462618, F 96485.33212), the vinegar estimate from pH 2.40 (Ka 1.8 × 10⁻⁵, exact quadratic form c = x + x² ÷ Ka), the Think First check at pH 2.87 and the aspirin hydrolysis atom balance. The wine titratable acidity endpoint was checked against the OIV method listing and secondary sources (web, 21 Oct). Site lesson 19 card 6 was read in the raw HTML (read-only) for the cultural question. No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

Ledger `C6-IQ3-05` (page 53): "explore acid/base analysis techniques that are applied:" with "in industries", "by Aboriginal and Torres Strait Islander Peoples", "using digital probes and instruments". These are listed applications, not "for example" items, so each must be addressed. Ledger `C6-IQ3-06` (page 53): "conduct a chemical analysis of a common household substance for its acidity or basicity (ACSCH080)   , for example:" with "soft drink", "wine", "juice", "medicine". The ledger's stray spaces before the comma are closed up in the design. Apart from that, the design text and the YouTube description match the ledger exactly (checked by script). Coverage: industries (scene 5), digital probes (scenes 3 to 5, 7), wine (7), medicine (A2), soft drink (one line, project manager decision). The Aboriginal and Torres Strait Islander application is covered at the level of principle after B1 (see `m6c16-cultural-review.md`).

## Em dashes

None found (U+2014 count 0).

## Numbers and reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| "about fifty nine millivolts" per pH unit at 25 °C | 2.303RT/F = 59.16 mV at 298.15 K | Correct ("about 59"; the site's "exactly 59.2" is corrected, new correction 4) | Nernst equation; Bates, Determination of pH |
| 61.5 mV at 37 °C (author note a) | 61.54 mV at 310.15 K | Correct | as above |
| Vinegar pH 2.40 → about 0.88 mol/L, under 1% ionised | [H₃O⁺] = 3.98 × 10⁻³; c = 0.00398 + 0.8805 = 0.8845 mol/L (2 s.f. from Ka: 0.88); 0.45% | Correct | C08 method |
| 5.28% by mass at 1.005 g/mL (register correction) | 0.8845 × 60.05 ÷ 1005 × 100 = 5.285 | Correct | arithmetic |
| Think First, pH 2.87 → about 0.10 mol/L (new correction 1) | 0.1024 mol/L | Correct | arithmetic |
| Aspirin hydrolysis C₉H₈O₄ + H₂O → CH₃COOH + C₇H₆O₃ | C 9/9, H 10/10, O 5/5 | Correct | arithmetic |
| One NaOH per intact aspirin, two per hydrolysed molecule (salicylic acid's phenol, pKa about 13.6, does not react by a phenolphthalein endpoint) | as stated | Correct; "too high" is right | Harris; British Pharmacopoeia assay principle |
| CaCO₃ solubility about 0.013 g/L at 25 °C (author note j) | about 0.013 to 0.015 g/L in CO₂-free water | Correct | CRC Handbook |
| Calibration roles: pH 7.00 sets the zero point (offset), pH 4.00 or 10.00 sets the slope | standard two-point practice | Correct (fixes draft correction 3) | Mettler Toledo, A Guide to pH Measurement |
| Wine total acidity by NaOH to a pH endpoint on a meter (new correction 11) | OIV-MA-AS313-01: degassed wine titrated to pH 7.0, endpoint detected potentiometrically or with bromothymol blue against a colour standard. pH 8.2 is the usual convention in Australia and the US (secondary sources; no AWRI page specifying it was retrieved) | Correct that it is a **fixed pH endpoint**, usually read on a meter for red wine. Scene 7's "ring at the jump" is not how it is done (S1) | OIV Compendium of International Methods of Wine and Must Analysis (oiv.int); Iland et al., Techniques for chemical analysis and quality monitoring during winemaking |

## Chemistry claims

- "Sometimes it's how acidic the sample is right now, its pH ... Other times it's how much acid or base is there in total": correct.
- "a weak acid's pH reflects only the small fraction that has ionised, but a titration reacts every acid molecule": correct.
- "Hydronium ions interact with the outer surface of the glass, and that sets up a small voltage across it. The meter measures the voltage and converts it into a pH": correct at this level (it avoids the site's "selectively permeable to H⁺").
- "because it reads a voltage, not a colour, a dark or cloudy sample doesn't matter": colour does not matter. Suspended solids can coat the glass or block the reference junction, so "doesn't matter" overstates it for cloudy samples (M2).
- "that drifts as the glass ages and as the temperature changes": correct. Temperature changes the theoretical slope, and ageing shifts the offset and slope.
- "A pH seven buffer sets the zero point. A second buffer, pH four for acidic samples, sets the slope": correct.
- "Choose buffers on either side of your samples": a correct practice, but the video's own vinegar (pH 2.40) lies outside the 4.00 to 7.00 range shown (S2).
- "a probe sits in the outlet pipe and logs the pH every few seconds, and a controller adds acid or base whenever the pH drifts outside the range on the plant's licence": as written, the controller acts after a breach. Dosing control keeps the pH inside the range (M1).
- "an autotitrator adds base, records the pH curve and finds the jump itself": correct (or stops at a preset pH; author note f).
- Scene 6's three branches and "with a soft drink, boil off the carbon dioxide first, or it titrates as carbonic acid too": correct.
- Scene 7: "Wine reacts quickly with sodium hydroxide, but it's dark red, so phenolphthalein's pink would be hard to see": correct. "So titrate it while a pH probe follows the curve" with a ring at the jump: wine's mixture of weak, partly diprotic acids (tartaric, malic) gives no sharp jump, and titratable acidity is read at a fixed pH (S1). "The titre gives the total moles of acid that reacted": the titre counts the acidic protons removed (tartaric acid gives two), reported as tartaric acid equivalents, so "total moles of acid" is loose (S1). "It doesn't tell you which acids, or the wine's pH": correct.
- Scene 8 (Revision 1): the pituri chemistry is plausible (nicotine's pyrrolidine nitrogen pKa about 8.0; alkaline ash favours the neutral free base). The example is excluded by project manager decision, so it is not assessed further (learning B1; cultural review).
- Scene 9: "For a strong acid the two agree": imprecise (learning S3). The intended claim (for a monoprotic strong acid, [H₃O⁺] = c) is correct.
- Feedback 1: "Calcium carbonate barely dissolves, so the pH shows only the tiny amount in solution": correct (author note j). "A direct titration is the trap: the solid reacts too slowly for a clean endpoint": acceptable at HSC level, consistent with C15.
- Feedback 2: correct reasoning (each hydrolysed molecule gives two acids, each reacting with one OH⁻).

## Equations

| Equation | Atoms and charge | Verdict |
| --- | --- | --- |
| C₉H₈O₄ + H₂O → CH₃COOH + C₇H₆O₃ (author note i) | balanced | OK |
| "nicotine-H⁺ + base ⇌ nicotine + base-H⁺" (Revision 1 scene 8) | charge 1+ = 1+ | Removed with B1; replaced by the generic "acid-H⁺ + base ⇌ acid⁻ + base-H⁺" (charge 0 = 0) |

No states appear on these word strips; the C06 style allows that.

## Findings

### S1. Should fix: the wine endpoint and "total moles of acid" (scene 7)

- Exact text: "So titrate it while a **pH probe** follows the curve. The titre gives the total moles of acid that reacted with the base". Visual: "a small curve drawing to a ring at the jump".
- Replacement (with learning S2): "So put a **pH probe** in the wine, and stop the titration at a set pH on the meter, not at a colour. The titre counts all the acid that reacted with the base". The curve meets a dashed, unlabelled "set endpoint pH" line. Author note g records OIV pH 7.0 and the pH 8.2 convention (Codex to confirm the Australian source). No number goes on screen (project manager: no industry specification numbers).

### S2. Should fix: buffers "on either side" with a pH 2.40 sample (scene 4)

- Replacement (with learning S1): "Choose buffers close to your samples, ideally on either side". Author note c records that a pH 1.68 or 2.00 buffer would bracket vinegar.

### M1. Minor: dosing acts before a breach (scene 5)

- Replacement: "a controller adds acid or base before the pH can drift outside the range on the plant's licence."

### M2. Minor: cloudy samples (scene 3)

- Replacement: "a dark or cloudy sample doesn't hide the reading." Add an author note on fouling of the glass and junction.

### M3. Minor: Decisions cites "new correction 18" for wine

- The corrections list ends at 17; wine is new correction 11. Correct the reference.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ3-05 and C6-IQ3-06 (page 53); route draft `docs/production/module6-video-route-draft.json`
- OIV, Compendium of International Methods of Wine and Must Analysis, method OIV-MA-AS313-01 (total acidity): https://www.oiv.int/public/medias/3731/oiv-ma-as313-01.pdf (listing and summary read 21 Oct; full PDF not opened)
- Iland, Bruer, Edwards, Caloghiris and Wilkes, Chemical Analysis of Grapes and Wine: Techniques and Concepts (Patrick Iland Wine Promotions): titratable acidity to pH 8.2 (secondary citation; Codex to confirm)
- Mettler Toledo, A Guide to pH Measurement: two-point calibration, offset and slope
- Bates, Determination of pH: Theory and Practice: glass electrode response
- Harris, Quantitative Chemical Analysis: weak-acid titrations; carbonate
- CRC Handbook of Chemistry and Physics: solubility of CaCO₃; pKa of salicylic acid
- Site lesson 19 (`C:/Users/kygs/hscscience/subjects/chemistry/year12/module6/lesson19.sa.html`, read-only), card 6

## Verdict

**Ready to voice after fixes and the cultural owner confirmation** (S1 and S2 before recording; M1 to M3 are cheap and should be applied; learning B1 governs scene 8). The Codex error check is still required.

## Resolution (21 Oct)

Applied in `lessons/chem-m6-c16.md` Revision 2 (21 Oct).

- **S1, applied** with learning S2: scene 7 narration and visual; author note g records the OIV and pH 8.2 endpoints and the "counts all the acid" wording; teaching checks updated.
- **S2, applied** with learning S1: scene 4 narration and tag; author note c.
- **M1, applied:** scene 5.
- **M2, applied:** scene 3, with the new sentence in author note f.
- **M3, applied:** Decisions now cites new correction 11.
- **Scene 8:** rewritten under learning B1 and the cultural review. The generic proton-hop strip is balanced.

No em dashes (U+2014 count 0). Narration 5,846 characters, about 9.0 minutes.
