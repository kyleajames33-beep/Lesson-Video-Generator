# m7p03c science check (chem-m7-p03, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 22 Oct 2026.
Inspected: `lessons/chem-m7-p03.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; `pre-design/chem-m7-l11-methanol-dataset.md`; site lesson 11 (`hscscience/subjects/chemistry/year12/module7/lesson11.sa.html`), read as stripped text at every passage the design quotes; `research/question-types-chem-m7.md`; web sources listed below. Every mass, temperature, q, n, ΔH, mean, percentage, spread and gap was recomputed by script (Python, unrounded until the end). No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

| Ledger | Ledger text | Design and YouTube description | Verdict |
| --- | --- | --- | --- |
| `C7-IQ4-03` (p55) | "conduct a practical investigation to measure and reliably compare the enthalpy of combustion for a range of alcohols" | identical | Match |
| `C7-IQ2-05` (p55) | "describe the procedures required to safely handle and dispose of organic substances (ACSCH075)" | identical | Match |

Both entries are on p55; the scope line's "pp55 and 56" is slightly wrong (M4). The route entry's `syllabusActions` lists only C7-IQ4-03 (learning M4).

## Em dashes and spelling

U+2014 count 0. Australian spelling ("draught", "vapour", "colour", "minimise"). En dashes appear only as minus signs.

## Datasets

| Item | Recomputed | Verdict |
| --- | --- | --- |
| Codex hook: 100.0 g, ΔT 20.0 °C, 0.74 g | q 8360 J; n 0.0230961 mol; −361.97 → −3.6 × 10² kJ/mol; 49.9% recovery; 50.1% difference | Correct |
| Codex practice: 150.0 g, ΔT 20.0 °C, 1.05 g | q 12 540 J; n 0.0327715 mol; −382.65 → −383 kJ/mol; 52.7%; 47.3% | Correct |
| 4/3 scaling: 200.0 g, 1.40 g, same temperatures | q 16 720 J = 16.72 kJ; n = 1.40 ÷ 32.04 = 0.043695 mol; −382.65 → −383 kJ/mol; 52.7% | Correct; identical result, as claimed |
| Methanol trials 1.40, 1.42, 1.38 g | −382.65, −377.26, −388.19; mean −382.70 → −383; 52.71% | Correct |
| Ethanol 1.12, 1.14, 1.10 g | −687.76, −675.69, −700.26; mean −687.91 → −688; 50.32% | Correct |
| Propan-1-ol 1.02, 1.03, 1.01 g | −985.00, −975.44, −994.76; mean −985.07 → −985; 48.74% | Correct |
| Butan-1-ol 1.03, 1.04, 1.02 g | −1203.19, −1191.62, −1214.99; mean −1203.27 → −1.20 × 10³; 44.97% | Correct |
| Means of the displayed (rounded) trials | −382.7, −688.0, −985.0, −1.20 × 10³ | Same as shown |
| Largest deviation from mean | 1.44%, 1.80%, 0.98%, 0.97% ("within about 2%") | Correct |
| Spreads (max − min) | 10.9, 24.6, 19.3, 23.4 kJ/mol ("about 25") | Correct |
| Gaps between means | 305.2, 297.2, 218.2 kJ/mol ("two to three hundred"; brace "about 300" for ethanol to propan-1-ol) | Correct |
| Gap against spread | smallest gap ÷ largest spread = 218.2 ÷ 24.6 = 8.9; typical about 12 ("about ten times", Decisions) | Correct |
| A1: 200.0 g, 20.3 → 38.9 °C, 158.42 → 157.36 g, M 46.07 | ΔT 18.6 °C; q 15 549.6 J; Δm 1.06 g; n 0.0230085 mol; −675.82 → −676 kJ/mol (3 s.f.); 49.4% | Correct |
| A1 crossed: fuel mass in q | 1.06 × 4.18 × 18.6 = 82.41 J; −3.58 kJ/mol ("about minus three point six") | Correct |
| A2: −310 and −1050 against −726 and −2676 | 42.7% and 39.2%; plausible for an unshielded, uncovered can | Correct |
| Counter-example: 190.0 g held, 200.0 g recorded | true q 15 884 J against 16 720 J; calculated ΔH about 5% too negative | Correct |
| Copper can heat capacity | 50 × 0.385 = 19.25 J/°C against 836 J/°C; 2.3% | Correct |
| Equation | CH₃OH(l) + 3/2 O₂(g) → CO₂(g) + 2H₂O(l): C 1/1, H 4/4, O 4/4 | Correct |
| Data values −726, −1367, −2021, −2676 | as checked in `m7c07-claude-science-check.md` (butan-1-ol NIST −2670 ± 20) | Correct |

The constructed ratios (52.7 to 45.0%) sit within the range the Open University and RSC sources in the Codex dataset describe for this apparatus.

## Error directions

| Error (scene 8) | Effect | Verdict |
| --- | --- | --- |
| Heat to can, clamp and air | water absorbs less than released; q too small; ΔH less negative | Correct |
| Incomplete combustion and soot | less energy released per mole burnt; soot insulates the base; q too small; ΔH less negative | Correct |
| Evaporation from the wick | Δm includes unburnt fuel; n too large; ΔH less negative | Correct |
| Water recorded higher than it was | calculated q too large; ΔH too negative | Correct (and a different case from p02's starting temperature) |
| "Most errors ... but not every one" | correctly hedged (site correction 6 respected) | Correct |
| Repeats improve reliability, not accuracy | systematic losses lower every trial | Correct |

## Method checks

- **Fixed temperature rise (scene 4, correction 15):** a fixed rise from a similar start near room temperature keeps the water's temperature history and its cooling loss comparable; this is the method the RSC lesson uses. The narration's reason ("Heat escapes faster the hotter the water gets above the room, so equal rises keep the losses similar") covers only heat lost from the water. In a spirit burner most of the flame's heat is carried away by hot combustion gas passing the can, which scales with burn time and flame size, not water temperature, and is controlled by flame distance and the shield (already on the controlled list). M1.
- **Capping the burner when weighing (scene 3, correction 16):** correct. The cap stops evaporation from the wick between weighing and lighting and after the flame is out; capping also extinguishes the flame safely. Reweighing at once is right.
- **Highest temperature (scene 3):** correct principle; see learning S1 for the method-data mismatch.
- **Extrapolation (scene 9):** correct. Extending the post-flame cooling line back to flame-out corrects only cooling after extinction; losses during minutes of heating are not recovered. Author note f is accurate.
- **Water volume (scene 3):** "200.0 mL water (≈ 200.0 g)" from a measuring cylinder overstates precision: a 250 mL cylinder reads to about ±1 mL (and water at 22 °C is 0.998 g/mL). 200.0 g implies weighing the water. Answers stay 3 s.f. either way (M2).
- **Wick trimming (scene 10):** "trim the wick for a smaller, cleaner flame" is standard advice but stated as certain (M3).

## GHS classifications (scene 12)

| Substance | Design | Reference | Verdict |
| --- | --- | --- | --- |
| Methanol (603-001-00-X) | Flam. Liq. 2 H225; Acute Tox. 3 H301, H311, H331; STOT SE 1 H370 | CLP Annex VI harmonised entry (reviewer knowledge); SDSs name optic nerve and CNS | Correct |
| Ethanol (603-002-00-5) | Flam. Liq. 2 H225 harmonised; Eye Irrit. 2 H319 self-classified on most SDSs | CLP Annex VI and supplier SDSs | Correct; covering H319 by the glasses row is acceptable |
| Propan-1-ol (603-003-00-0) | Flam. Liq. 2 H225; Eye Dam. 1 H318; STOT SE 3 H336 | CLP Annex VI (reviewer knowledge) | Correct |
| Butan-1-ol (603-004-00-6) | Flam. Liq. 3 H226; Acute Tox. 4 H302; Skin Irrit. 2 H315; Eye Dam. 1 H318; STOT SE 3 H335, H336 | BASF SDS (CLP, rev. 2026) and Labbox SDS list the same six codes under index 603-004-00-6 | Correct |

"All four alcohols are flammable, and three are highly flammable": correct. "Methanol is also toxic: swallowed, breathed in or through the skin, it can damage organs, including eyesight": correct. Disposal to the labelled organic waste container, never the sink: correct. Flash points in the safety check (methanol about 9 to 11 °C, ethanol about 13 °C, propan-1-ol about 15 to 22 °C, butan-1-ol about 35 °C) are consistent with SDS ranges. Australia applies GHS (Revision 7) through the WHS regulations, so the CLP codes are the right ones to quote.

## Absolute claims

- "equal rises keep the losses similar" (scene 4): too broad. M1.
- "only the alcohol changes, so the losses are similar each time" (scene 11): contradicted by the on-screen percentages. Learning S2.
- "trim the wick for a smaller, cleaner flame" (scene 10): M3.
- "metal lets heat through easily"; "Repeats can't fix any of these"; "All three make delta H less negative": true.
- No other absolute claims found; site correction 6 ("ALWAYS lower") is correctly avoided.

## Site errors logged by the author (new, 15 to 17; 1 to 14 in chem-m7-c07)

| Logged correction | Site text found (22 Oct) | Verdict |
| --- | --- | --- |
| 15. "burn for a set time or until a target temperature rise"; "same apparatus, same water mass, same duration" | Both present (card 01) | Partly real. A fixed rise is the better control, but a fixed time (or fixed fuel mass) is also a valid fair-test design, and the site's own Worked Example 3 lists "Duration of burning / target temperature rise". Better logged as a method improvement than an error (M5) |
| 16. "Record initial mass of spirit burner + alcohol (m₁)" with no cap | Present | Real omission. Agreed |
| 17. "Early temperature reading: Temperature read before reaching true maximum (calorimeter already cooling)" | Present (card 03 table) | Real but small (the parenthesis describes the opposite situation). Agreed as minor |
| Note: calorimeter heat capacity folded into "heat warms the can" | Present as a separate row | Agreed: same effect on q |

Corrections 1, 2, 4, 5, 6, 11 and 12 as acted on here are confirmed in `m7c07-claude-science-check.md` (with that file's M3 and M4 on corrections 6 and 11).

## Exam style

A1 (molar enthalpy of ethanol from burner data) and A2 (explain the low values and suggest an improvement) are original HSC Section II style items with syllabus verbs (calculate, explain, suggest). A1 targets the 2019 Q23 marker-reported mistake (confirmed in `research/question-types-chem-m7.md`); its numbers are new and it does not copy the 2019 item as far as this reviewer knows (the paper was not re-read). A2's "Each was repeated three times" is a fair distractor for the crossed answer. No mark-allocation talk.

## YouTube metadata

Title 95 characters (limit 100): pass. Description quotes both dotpoints verbatim.

## Findings

No blocker. No should-fix on science alone; learning S1 (stop heating just before the 20 °C rise) and S2 (the drifting percentages) are the two changes needed before voicing.

### M1. Minor: the fixed-rise reason covers only heat lost from the water

- Exact text (scene 4): "Why the same rise? Heat escapes faster the hotter the water gets above the room, so equal rises keep the **losses** similar."
- Replacement: "Why the same rise? Hotter water loses heat faster, so equal rises keep the heat **lost** from the water similar." (about +5 characters; learning M3.)
- Add to author note d: "Most of the flame's heat is lost as hot combustion gas passing the can; that loss depends on flame distance, shielding and burn time, so the fixed rise controls only the water's own cooling loss."

### M2. Minor: 200.0 g from a measuring cylinder

- Exact text (scene 3 step 1): "1 200.0 mL water (≈ 200.0 g)".
- Replacement: "1 200 mL water, or weigh it: 200.0 g". Add to author note a: "200.0 g (4 s.f.) implies the water is weighed; a measuring cylinder gives about ±1 mL. Answers are limited to 3 s.f. by Δm in any case."

### M3. Minor: wick trimming stated as certain

- Exact text (scene 10): "so trim the wick for a smaller, cleaner flame, and wipe the can's base."
- Replacement: "so trim the wick for a smaller flame, which usually burns cleaner, and wipe the can's base." (+15 characters.)

### M4. Minor: page reference

- Exact text (scope): "Syllabus (NSW Chemistry Stage 6, 2017, pp55 and 56; ..."
- Replacement: "Syllabus (NSW Chemistry Stage 6, 2017, p55; ..."

### M5. Minor: correction 15 overstates the site's error

- Replace the last sentence of correction 15 with: "Both designs are valid fair tests; a fixed rise keeps the water's cooling loss more comparable. Recommended wording: 'Heat until the same temperature rise (for example about 20 °C) for each alcohol, so the heat lost from the water is similar.' (A method improvement, not a factual error.)"

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C7-IQ4-03 and C7-IQ2-05 (p55)
- Codex dataset sources (read via `pre-design/chem-m7-l11-methanol-dataset.md`): Open University teacher notes, https://www.open.edu/openlearncreate/mod/page/view.php?id=191528; RSC spirit-burner lesson, https://edu.rsc.org/lesson-plans/where-does-energy-come-from-16-18-years/124.article; RSC enthalpy practical notes, https://edu.rsc.org/practical/enthalpy-change-determination-practical-videos-16-18-students/4012296.article
- NIST Chemistry WebBook, 1-butanol (ΔcH°liquid −2670 ± 20 kJ/mol): https://webbook.nist.gov/cgi/cbook.cgi?ID=C71363&Mask=2
- Butan-1-ol classification (index 603-004-00-6): BASF n-Butanol SDS, https://download.basf.com/p1/000000000030034729_SDS_GEN_IE/en_IE/n-BUTANOL_30034729_SDS_GEN_IE_en_5-0.pdf; Labbox 1-Butanol SDS, https://labbox.es/wp-content/uploads/FDS/SDS_EN_10114.pdf; ECHA CoRAP document, https://chesar.echa.europa.eu/documents/10162/7a14f659-46bc-d5f5-e946-1754012a782a
- Reviewer knowledge, not re-fetched: CLP Annex VI harmonised entries for methanol, ethanol and propan-1-ol; copper specific heat capacity (0.385 J g⁻¹ °C⁻¹); water density at 22 °C; Safe Work Australia's adoption of GHS Revision 7.

## Verdict

**Ready to voice after learning S1 and S2.** M1 to M5 are small. No science blocker. The Codex error check and the GHS confirmation against CLP Annex VI (Codex asset brief item 2) are still required.

## Resolution

Resolved by the design author in `lessons/chem-m7-p03.md` Revision 2 (22 Oct). Narration 6,240 characters, about 568 s (9.5 min); U+2014 count 0. Learning S1 and S2 are applied (see `m7p03c-learning-review.md`, Resolution).

- **M1 (applied):** scene 4 narration as given; author note (d) adds: "Most of the flame's heat is lost as hot combustion gas passing the can; that loss depends on flame distance, shielding and burn time, so the fixed rise controls only the water's own cooling loss."
- **M2 (applied):** scene 3 step 1 "200 mL water, or weigh it: 200.0 g"; author note (a) records that 200.0 g implies weighing, that a measuring cylinder gives about ±1 mL, and that Δm limits answers to 3 s.f. Narration unchanged ("two hundred millilitres ... two hundred grams" carries no false precision).
- **M3 (applied):** scene 10: "trim the wick for a smaller flame, which usually burns cleaner".
- **M4 (applied):** scope page reference "p55".
- **M5 (applied):** correction 15 reclassified as a method improvement, not a factual error, using the reviewer's recommended wording.
- The ethanol H319 Open decision is closed as designed (covered by the glasses row), per this check.

Declined: none. Pending: Codex error check, and GHS confirmation against CLP Annex VI (asset brief item 2). New author note (l) (drift against gap, scene 11) is for Codex to check.
