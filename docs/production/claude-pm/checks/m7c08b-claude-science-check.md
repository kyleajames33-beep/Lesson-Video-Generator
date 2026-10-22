# m7c08b science check (chem-m7-c08b, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 23 Oct 2026.
Inspected: `lessons/chem-m7-c08b.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; site lesson 13 (`hscscience/subjects/chemistry/year12/module7/lesson13.sa.html`), read as stripped text at every passage the design quotes; `lessons/chem-m7-c08a.md` for the recalled reactions; web sources listed below. Every formula, name, locant, electron count and test equation was re-derived by hand. No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

| Ledger | Ledger text | Design and YouTube description | Verdict |
| --- | --- | --- | --- |
| `C7-IQ1-01` (p54) | "investigate the nomenclature of organic chemicals, up to C8, using IUPAC conventions, including simple methyl and ethyl branched chains, including: (ACSCH127)" with the eight examples, including "aldehydes and ketones" | identical | Match |
| `C7-IQ5-01` (p56) | "investigate the structural formulae, properties and functional group including:" with "primary, secondary and tertiary alcohols", "aldehydes and ketones (ACSCH127)", "amines and amides", "carboxylic acids" | identical | Match |
| `C7-IQ4-06` (p56) | "investigate the products of the oxidation of primary and secondary alcohols" | identical | Match |

The scope line's "p54 and p56" is right.

## Em dashes and spelling

U+2014 count 0. Australian spelling throughout. En dashes appear only as bond lines, "dipole–dipole" on screen and minus signs.

## Naming (every name checked)

| Name | Structure | Check | Verdict |
| --- | --- | --- | --- |
| methanal, ethanal, propanal, butanal | HCHO; CH₃CHO; CH₃CH₂CHO; CH₃CH₂CH₂CHO | CHO carbon is C1; no locant | Correct |
| 2-methylpropanal | (CH₃)₂CHCHO, C₄H₈O | branch on C2 counting from CHO | Correct |
| propanone | CH₃COCH₃ | C=O can only be C2 | Correct (see M3 on the IUPAC 2013 preferred name) |
| butanone / butan-2-one | CH₃COCH₂CH₃, C₄H₈O | only one ketone position | Correct; both forms in use |
| pentan-2-one, pentan-3-one | CH₃COCH₂CH₂CH₃; CH₃CH₂COCH₂CH₃ | lowest locant to C=O | Correct |
| 2-methylpentan-3-one (A1); crossed 4-methylpentan-3-one | CH₃CH₂COCH(CH₃)CH₃, C₆H₁₂O (H 3 + 2 + 1 + 3 + 3 = 12) | C=O at 3 from both ends, so the branch takes the lower number | Correct; crossed name correctly wrong |
| butanal (A2 A), butan-2-one (A2 B) | both C₄H₈O | with "contains a C=O" and "unbranched", A is butanal (not 2-methylpropanal); the only C₄H₈O ketone is butanone | Correct; the evidence is sufficient |

Rules: "find the longest chain that includes the carbonyl carbon" matches IUPAC (the principal chain carries the suffix group). "From five carbons, the position matters" and "number from the end nearer the carbonyl" are correct. Functional group isomers from three carbons; ethanal has no ketone isomer: correct. "Once there are three or more carbons, every aldehyde has a ketone isomer": true (CₙH₂ₙO, n ≥ 3, always has a ketone).

## Carbonyl properties

| Claim | Check | Verdict |
| --- | --- | --- |
| C=O polar: O δ−, C δ+, oxygen more electronegative | O 3.44, C 2.55 (difference 0.89) | Correct |
| Dipole–dipole plus dispersion; no O–H, so no hydrogen bonding between their own molecules | standard | Correct |
| Aldehyde H is on carbon, not positive enough to donate a hydrogen bond | standard | Correct |
| Water hydrogen bonds to the carbonyl O's lone pairs; small ones dissolve, less as the chain grows | propanone, ethanal, methanal miscible; propanal about 30, butanone about 27, butanal about 7, pentan-3-one about 5 g per 100 mL | Correct. "small aldehydes and ketones, like propanone, mix with water" is fair (propanal is very soluble but not fully miscible; not claimed) |
| Boiling points: butane −0.5 ("near minus one"), butanal 74.8 (75), butanone 79.6 (80), butan-1-ol 117.7 (118), butanoic acid 163.5 (164) °C | CRC | Correct values. Butane's 34 electrons against 40 and 42 makes the comparison unfair by c05's own standard; pentane (36.1 °C, 42 electrons, 72.1 g/mol) is the fair alkane (M1) |
| "close" for butanal and butanone, no rule drawn | dipole moments about 2.72 D and 2.78 D | Correct; site correction 5 agreed |
| Propanal and propanone colourless liquids (48 and 56 °C) | CRC | Correct |

## Tests

| Claim | Check | Verdict |
| --- | --- | --- |
| Tollens' reagent: silver ions in ammonia solution ([Ag(NH₃)₂]⁺), warmed in a water bath; aldehyde reduces Ag⁺ to Ag, a silver mirror; ketone, no change | Chemguide: "a grey precipitate of silver, or a silver mirror"; ketone "no change in the colourless solution" | Correct. Chemguide notes a grey precipitate is common and a clean mirror is partly luck (M4, for p04 expectations) |
| Tollens' equation (author note d, site correction 1): RCHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → RCOO⁻ + 2Ag + 4NH₃ + 2H₂O | O 4 = 4; H (excluding R) 1 + 12 + 3 = 16, 12 + 4 = 16; Ag 2 = 2; N 4 = 4; charge −1 = −1 | Balanced. The site's version (2OH⁻, one H₂O) has charge 0 against −1 and does not balance O or H: real error |
| Fehling's or Benedict's: blue copper(II); aldehyde gives a brick-red precipitate of copper(I) oxide; ketone stays blue | Chemguide: "dark red precipitate of copper(I) oxide"; "No change in the blue solution" | Correct. "the copper is reduced to copper one oxide" is loose wording (M2) |
| Fehling's equation: RCHO + 2Cu²⁺ + 5OH⁻ → RCOO⁻ + Cu₂O + 3H₂O | O 6 = 6; H 6 = 6; Cu 2 = 2; charge −1 = −1 | Balanced (site's, agreed) |
| Alkaline tests give the carboxylate, so "oxidised", not "to a carboxylic acid" | Chemguide | Correct and careful |
| Acidified dichromate: aldehyde green, ketone orange | standard | Correct |
| "A ketone usually does nothing" | simple aliphatic ketones negative; α-hydroxy ketones can be positive; methanal can reduce Fehling's to copper metal (Chemguide) | Correctly hedged; add methanal to author note f (M4) |
| Test the distilled product: mirror means aldehyde, so primary; no mirror means ketone, so secondary; dichromate cannot decide because the alcohols turn it green too | standard | Correct, given the dichromate turned green first (learning M1) |

## Hazard wording

Scene 9: "Tollens' reagent is made fresh, just before use, and disposed of straight after, because on standing it can form an explosive solid." Correct: ammoniacal silver solutions can deposit silver nitride (Ag₃N, "fulminating silver"), a contact explosive when dry; school guidance is never to store the reagent and to acidify residues with dilute nitric acid promptly (RSC Education safety note; Wikipedia, silver nitride). Site correction 2 is right: Ag₃N is silver nitride; silver azide is AgN₃. "Fehling's: alkaline, corrosive" chip: correct (NaOH).

## Absolute claims

- "The carbonyl carbon is always carbon one" (aldehydes): true for open-chain aldehydes.
- "every aldehyde has a ketone isomer" (three or more carbons): true.
- "So having a C double bond O isn't enough. It takes that hydrogen.": true for these tests.
- "So all three tests really ask one question": true only for aldehydes against ketones; dichromate also oxidises alcohols (learning M2).
- "A ketone usually does nothing": hedged; good.
- "it isn't positive enough to hydrogen bond": true.
- No other absolute claims found.

## Site errors logged by the author

| Logged correction | Site text found (23 Oct) | Verdict |
| --- | --- | --- |
| 1. Tollens' equation with 2OH⁻ and one H₂O | Present (card 3) | Real error (charge and atoms). Correction balanced and agreed |
| 2. "explosive silver azide (Ag₃N)" | Present (Must Do, Safety) | Real error (formula is silver nitride). Correction agreed |
| 3. "electronegativity difference ~1.0), significantly more polar than C=C (~0.4)" | Present (card 1) | Real error (C=C difference is 0; C=O is 0.89). Correction agreed |
| 4. WE3 "C = butan-2-ol" from Tollens' −, Fehling's −, dichromate green | Present | Real error (any primary or secondary C₄H₁₀O alcohol fits). Correction agreed |
| 5. "butan-2-one slightly above butanal, internal C=O ... slightly more polar" | Present (card 2, WE2) | Real (unsupported explanation; dipoles nearly equal). Correction agreed |
| 6. "Primary path: Alkane → Alcohol → Aldehyde → Carboxylic acid" | Present (card 4) | Real error (these oxidants do not convert alkanes to alcohols). Correction agreed |
| 7. "locant needed (C5+)" beside "butan-2-one" | Present | Minor inconsistency, agreed |
| 8. Hook asks about the silver mirror; reflection answers smell | Both present | Real (mismatch; vanillin and raspberry ketone also carry a phenol OH). Agreed |
| Note: Fehling's equation balances | Present | Agreed |

## Exam style

- A1 (classify CH₃CH₂COCH(CH₃)CH₃ with a reason and give its IUPAC name) and A2 (two C₄H₈O carbonyl compounds, Tollens' results, unbranched A; identify and explain) are original HSC Section II items using the verbs state, give, identify and explain. A2 follows the site's WE3 and SA Q8 pattern with the site's ambiguity removed. Neither copies a NESA item known to this reviewer (no exhaustive past-paper search was made). No mark-allocation talk.
- The 2019 Q21 marker-reported "missed isomer pair" is cited from the question-type bank (not re-checked here).

## YouTube metadata

- Title: 94 characters (limit 100). Pass.
- Description quotes all three dotpoints verbatim. Good.

## Findings

No blocker or should-fix science error. The design is accurate; the findings below improve fairness and precision.

### M1. Minor: pentane is the fair alkane comparison

- Exact text (scene 6, key note 3): "butane boils near minus one degree"; "butane −1 °C".
- Problem: butane has 34 electrons and 58 g/mol against butanal's 40 and 72; part of its low boiling point is size. Pentane (36.1 °C, 42 electrons, 72.1 g/mol) matches butanal, butanone (40, 72.1) and butan-1-ol (42, 74.1).
- Replacement: learning S2 ("pentane boils at thirty six degrees"; key note "pentane 36 °C < butanal 75 °C ≈ butan-2-one 80 °C < butan-1-ol 118 °C"). Update author note a and "Numbers to verify".

### M2. Minor: copper wording in scene 10

- Exact text: "Warm it with an aldehyde, and the copper is reduced to copper one oxide, a **brick-red** precipitate, ..."
- Replacement: "Warm it with an aldehyde, and the copper two ions are reduced to copper one, which forms copper one oxide, a **brick-red** precipitate, ..." (+about 30 characters.) The screen label "Cu²⁺ → Cu₂O" can stay.

### M3. Minor: author note on IUPAC 2013 names

- Add to author note h: "Under the IUPAC 2013 Recommendations the preferred names keep the locant (propan-2-one, butan-2-one); 'acetone' is retained for general use and 'propanone' and 'butanone' are widely used in Australian texts. The narration's 'needs no number' is the common HSC convention; accept either form." No learner change.

### M4. Minor: author note f additions (for p04 expectations)

- Add: "Methanal is a strong enough reductant to take Fehling's copper(II) to copper metal and is itself oxidised further, to CO₂ and water. In practice Tollens' often gives a grey precipitate of silver rather than a clean mirror, and the Fehling's precipitate can look dark red and be hard to see (Chemguide)." The plates show the idealised results, which is acceptable here; p04 should show realistic outcomes.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C7-IQ1-01 (p54), C7-IQ5-01 and C7-IQ4-06 (p56)
- Chemguide, oxidation of aldehydes and ketones (Tollens', Fehling's, methanal, practical outcomes): https://www.chemguide.co.uk/organicprops/carbonyls/oxidation.html
- Silver nitride (contact explosive; forms from silver salts in concentrated ammonia): https://en.wikipedia.org/wiki/Silver_nitride
- Tollens' reagent (prepare fresh; not stored): https://en.wikipedia.org/wiki/Tollens%27_reagent
- RSC Education, "Silver mirror test: a safety note" (letters, March 2007): https://edu.rsc.org/feedback/letters-march-2007/2020299.article
- Acetone (preferred IUPAC name propan-2-one), secondary source: https://simple.wikipedia.com/wiki/Acetone
- Reviewer knowledge, not re-fetched: CRC boiling points (butane, pentane, butanal, butanone, butan-1-ol, butanoic acid, propanal, propanone); water solubilities of propanal, butanal, butanone and pentan-3-one; dipole moments of butanal and butanone; Pauling electronegativities.

## Verdict

**Ready to voice** once learning S1 to S3 are applied (S2 is the same change as M1 here). M2 to M4 are wording and author-note fixes. No science blocker. The Codex error check is still required, including the silver nitride reference and the test-negative scope in author note f.

## Resolution

Resolved by the resolving author, 23 Oct 2026, in `lessons/chem-m7-c08b.md` Revision 2 (see its "Revision 2 changes" list). Narration 5,968 characters, about 544 s with holds.

- **M1 (applied, with learning S2):** pentane (36.1 °C, 42 electrons, 72.1 g/mol) replaces butane in scene 6, key note 3, author note a, "Numbers used" and "Numbers to verify" (which now lists electrons and molar masses for all four compounds).
- **M2 (applied):** scene 10: "the copper two ions are reduced to copper one, which forms copper one oxide, a **brick-red** precipitate". The screen label "Cu²⁺ → Cu₂O" stays.
- **M3 (applied):** author note h adds the IUPAC 2013 preferred names (propan-2-one, butan-2-one), "acetone" retained, "propanone" and "butanone" widely used in Australian texts; accept either form. No learner change.
- **M4 (applied):** author note f adds methanal reducing Fehling's copper(II) to copper metal (and itself oxidised to CO₂ and water), and the practical outcomes (grey silver precipitate; dark red, hard-to-see Fehling's precipitate) for p04 expectations.
- Also applied from the learning review: the hook callback (S1), the dipole-dipole clause (S3), the "for an aldehyde or a ketone" scoping in scene 11 (the absolute claim noted above) and the dichromate first check in scene 12.

U+2014 count 0. The Codex error check is still required, including the silver nitride reference and the test-negative scope in author note f.
