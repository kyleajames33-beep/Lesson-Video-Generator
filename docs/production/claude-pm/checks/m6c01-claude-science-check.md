# m6c01 science check (chem-m6-c01, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 18 Oct 2026.
Inspected: `lessons/chem-m6-c01.md` (Revision 1), proposal text only. Web sources consulted 18 Oct 2026 and listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoint (checked word for word)

Source: official NESA Chemistry Stage 6 Syllabus (2017), Word version downloaded from nsw.gov.au (`chemistry-stage6-syllabus-word.docx`), Module 6: Acid/Base Reactions, Inquiry question "What is an acid and what is a base?" (Properties of Acids and Bases).

Official text: "explore the changes in definitions and models of an acid and a base over time to explain the limitations of each model, including but not limited to:" / "Arrhenius’ theory" / "Brønsted–Lowry theory (ACSCH064, ACSCH067)".

Design text matches word for word, including the en dash in "Brønsted–Lowry". One typographic difference: the official apostrophe in "Arrhenius’ theory" is a curly right single quote (U+2019); the design (lines 10 and 230) uses a straight apostrophe. See M1. The local ledger entry (C6-IQ1-06) now reads correctly in the working tree ("Arrhenius’ theory", "Brønsted–Lowry"), so author note (h)'s encoding complaint appears already fixed; confirm against brief 81 before removing the note. Page 53 matches the ledger; I could not confirm the printed page number from the Word file.

## Em dashes

None found (U+2014 count 0). En dashes appear only inside the syllabus quotation, as in the official text.

## History

| Claim in design | Verdict | Source |
| --- | --- | --- |
| Lavoisier (Paris), oxygen theory of acids, late 1700s, card "1770s" | Correct. Theory developed 1777 to 1779; Lavoisier coined "oxygène" in 1777 as a Greek calque of "principe acidifiant". | Etymonline "oxygen"; ChemTeam early acid-base theories |
| "oxygen means 'acid maker'" (Greek oxys + -genēs) | Correct. | Etymonline |
| Lavoisier studied sulfuric, nitric and phosphoric acid; all contain oxygen | Correct (acids from burning sulfur and phosphorus, and nitric acid). | ChemTeam early acid-base theories |
| "in 1810, Humphry Davy showed that hydrochloric acid contains only hydrogen and chlorine" | Correct in substance. Davy showed "oxymuriatic acid" contains no oxygen and is an element (Royal Society, 1810, named chlorine), so muriatic acid is hydrogen plus chlorine. | ChemTeam; vanderkrogt elements (chlorine) |
| Davy (London), hydrogen as the key ingredient, "1810s" | Correct. Davy worked at the Royal Institution, London; hydrogen as the acidifying principle argued in the 1810s. | ChemTeam early acid-base theories |
| Methane as Davy's counterexample; "no bases" | Acceptable as the standard textbook limitation. It is not the historical event that ended Davy's idea (Liebig's 1838 "replaceable hydrogen" refined it). The narration says "plenty of hydrogen compounds aren't acids", which is a limitation, not a history claim. The memory aid "Hydrogen, broken by methane" is a teaching shorthand; acceptable. | (teaching convention) |
| Arrhenius (Sweden), 1880s; dissertation 1884, theory 1887 | Correct. | Nobel Prize biography; Kenndler, Substantia 2022 |
| Arrhenius explained neutralisation as H⁺ + OH⁻ → H₂O, and shared acid behaviour by a common ion | Correct (he used heat-of-neutralisation data). | Kenndler 2022 |
| Brønsted (Copenhagen) and Lowry (Cambridge), 1923, independently | Correct. Lowry: "The uniqueness of hydrogen", Chemistry and Industry 42 (19 Jan 1923) 43 to 47. Brønsted: Recueil des Travaux Chimiques des Pays-Bas 42 (1923) 718 to 728 (received 4 May 1923), in German. Not the same day. | ChemTeam (Lowry, Brønsted article); Wikipedia (Martin Lowry, J. N. Brønsted) |
| Lowry at Cambridge in 1923 | Correct. First holder of the Cambridge chair of physical chemistry, 1920 to 1936. | Cambridge University archive; Nature obituary 1936 |
| "about a hundred and fifty years" (1777 to 1923) | Correct (146 years). | arithmetic |
| "To make it fit, chemists wrote ammonia solution as 'ammonium hydroxide'" (scene 6) | Partly inaccurate. NH₄OH was written in the 19th century, before Arrhenius, so ammonia would fit "acid + base (hydroxide) → salt + water"; it was carried into Arrhenius-era treatments. See S1. | Cosandey, CHIMIA 2021, 75, 679 |
| "no one has ever isolated a substance made of ammonium ions and hydroxide ions" | Correct. Solid ammonia hydrates are hydrogen-bonded NH₃·H₂O, not [NH₄⁺][OH⁻]. | Wikipedia "Ammonia solution"; Cosandey 2021 |

The design's site corrections 1 to 3 (no "same day", Cambridge not London, not 1,200 km) are supported by the sources above.

## Chemistry claims and equations

All equations balance in atoms and charge (checked independently).

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| HCl → H⁺(aq) + Cl⁻(aq) (scene 5) | balanced | reactant state missing | M2 |
| NaOH → Na⁺(aq) + OH⁻(aq) (scene 5) | balanced | reactant state missing | M2 |
| H⁺ + OH⁻ → H₂O (scene 5) | balanced | none shown; acceptable as a shorthand tag | OK |
| HCl(aq) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq) (scene 9) | balanced | acceptable in HSC; narration says "Hydrogen chloride dissolves", which describes HCl(g) | M3 |
| NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq) (scene 10) | balanced | correct | OK |
| HCl(g) + NH₃(g) → NH₄Cl(s) (scene 11) | balanced | correct (corrects the site's aqueous states) | OK |
| CO₃²⁻(aq) + H₂O(l) ⇌ HCO₃⁻(aq) + OH⁻(aq) (scene 11) | balanced, charge −2 = −2 | correct | OK |
| CaO(s) + SO₃(g) → CaSO₄(s) (scene 13) | balanced | SO₃ is a liquid at room temperature (mp 16.9 °C, bp 45 °C); "(g)" is right only for the heated reaction | M4 |
| HCO₃⁻(aq) + H₂O(l) ⇌ H₂CO₃(aq) + OH⁻(aq) (attempt 1) | balanced, charge −1 = −1 | correct | OK |

Other claims:

- Ammonia turns red litmus blue; NH₃ has no oxygen: correct.
- Baking soda (NaHCO₃) and washing soda (Na₂CO₃) solutions are basic and contain no hydroxide: correct (NaHCO₃ about pH 8.3; Na₂CO₃ about pH 11).
- HCO₃⁻ acting as a Brønsted-Lowry base with water (attempt 1): correct; HCO₃⁻ is amphiprotic but its base reaction dominates in water (Kb about 2 × 10⁻⁸ against Ka about 5 × 10⁻¹¹). Water is the acid in the forward reaction. The answer key (acid H₂O, base HCO₃⁻) is correct.
- White NH₄Cl ring in the tube, nearer the HCl end (author note c, plate brief): correct; NH₃ (17 g/mol) diffuses faster than HCl (36.5 g/mol).
- "A hydrogen ion is a hydrogen atom that has lost its only electron, so it's just a proton": correct for ordinary hydrogen (protium); appropriate at this level.
- "a proton in water is always attached to water": correct as a teaching statement; H⁺(aq) and H₃O⁺(aq) are equivalent in HSC usage.
- "Only some ammonia molecules do this at any moment": correct (about 0.4% in 1 mol/L solution).
- CaO + SO₃ → CaSO₄ as a Brønsted-Lowry limit: correct and acceptable at HSC level. Basic oxides react directly with acidic oxides with no protons; this is a Lewis acid-base reaction (oxide ion donates an electron pair to sulfur). The author's narrowing to the direct, water-free reaction is right, because SO₃ in water forms H₂SO₄.
- Arrhenius definition wording: scene 5's "a base produces hydroxide ions in water" is a common textbook phrasing, but ammonia solution does produce OH⁻ in water, so this wording does not support the scene 6 limitation. The scientifically accurate Arrhenius idea is dissociation of the base to release the hydroxide it contains. Flagged as a blocker in the learning review (B1); repeated here as S2 because it is also an accuracy issue.

## Findings

### S1. Should fix: NH₄OH history (scene 6)

- Exact text: "To make it fit, chemists wrote ammonia solution as "**ammonium hydroxide**", N H four O H."
- Problem: the NH₄OH formula predates Arrhenius (Cosandey 2021). The sentence implies it was invented to fit the Arrhenius model.
- Replacement: "To make it fit, chemists kept writing ammonia solution as "**ammonium hydroxide**", N H four O H."
- Also revise the author note "Historically, chemists fitted aqueous ammonia to the Arrhenius model by writing it as 'ammonium hydroxide'" to: "NH₄OH was written before Arrhenius and kept under his model to fit ammonia."

### S2. Should fix (blocker in the learning review): Arrhenius base definition (scene 5, card, key note 3)

- Exact text: "and a base produces **hydroxide ions** in water."
- Problem: ammonia satisfies this wording, so the stated limitation does not follow.
- Replacement: "and a base breaks apart in water to release its own **hydroxide ions**." (Full sentence in learning review B1.)

### M1. Minor: apostrophe in the dotpoint quotation (lines 10 and 230)

- Exact text: "- Arrhenius' theory"
- Replacement: "- Arrhenius’ theory" (curly U+2019, as printed).

### M2. Minor: missing reactant states in scene 5

- Exact text: "HCl → H⁺(aq) + Cl⁻(aq)" and "NaOH → Na⁺(aq) + OH⁻(aq)"
- Replacement: "HCl(g) → H⁺(aq) + Cl⁻(aq)" and "NaOH(s) → Na⁺(aq) + OH⁻(aq)" (the "in water" context stays in the tag).

### M3. Minor: HCl state in scene 9 against the narration

- Exact text: "HCl(aq) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)"
- Replacement: "HCl(g) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)" (matches "Hydrogen chloride dissolves in water"; HCl(aq) is also accepted in HSC marking, so this is minor).

### M4. Minor: SO₃ state in scene 13

- Exact text: "CaO(s) + SO₃(g) → CaSO₄(s)" with the tag "salt forms"
- Replacement: "CaO(s) + SO₃(g) → CaSO₄(s)" with the tag "heated; salt forms" (SO₃ is a gas only above 45 °C).

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Etymonline, "oxygen": https://www.etymonline.com/search?q=oxygen
- ChemTeam, early acid-base theories (Lavoisier, Davy): https://web.chemteam.info/AcidBase/Early-Acid-Base.html
- Elementymology, chlorine (Davy 1810): https://www.vanderkrogt.net/elements/element.php?num=17
- Nobel Prize, Svante Arrhenius biographical: https://www.nobelprize.org/prizes/chemistry/1903/arrhenius/biographical/
- Kenndler, "From 56 Theses (1884) to Theory (1887)", Substantia 6(2), 2022: https://riviste.fupress.net/index.php/subs/article/view/1679
- ChemTeam, the Brønsted-Lowry theory (Lowry 1923 citation): https://web.chemteam.info/AcidBase/Bronsted-Lowry-AcidBase.html
- ChemTeam, Brønsted 1923 article translation: https://web.chemteam.info/Chem-History/Bronsted-Article.html
- Wikipedia, Martin Lowry: https://en.wikipedia.org/wiki/Martin_Lowry
- Wikipedia, Johannes Nicolaus Brønsted: https://en.wikipedia.org/wiki/Johannes_Nicolaus_Br%C3%B8nsted
- University of Cambridge archive, Lowry 1874 to 1936: https://archivesearch.lib.cam.ac.uk/agents/people/9024
- Nature obituary (Lowry, 1936): https://www.nature.com/articles/138912a0
- Cosandey, "Why We Are all Using a Nonexistent Substance: NH₄OH", CHIMIA 2021, 75, 679: https://chimia.ch/chimia/article/download/2021_679/6/10502
- Wikipedia, Ammonia solution: https://en.wikipedia.org/wiki/Ammonia_solution
- UW-Madison general chemistry, Lewis theory (oxide neutralisation not Brønsted): https://www2.chem.wisc.edu/deptfiles/genchem/netorial/rottosen/tutorial/modules/acid_base/06lewis/lewis3.htm
- Texas A&M lecture notes, basic oxide plus acidic oxide (CaO + SO₃): https://www.chem.tamu.edu/rgroup/marcetta/chem362/lectures/Lecture%2022%20Acids%20and%20Bases
- Wikipedia, Sulfur trioxide (mp, bp): https://en.wikipedia.org/wiki/Sulfur_trioxide

## Verdict

**Ready to voice after fixes** (S1 and S2 before recording; M1 to M4 are screen or metadata edits).

## Resolution (18 Oct)

Applied in `lessons/chem-m6-c01.md` Revision 2 (author, 18 Oct).

- **S1, applied:** scene 6 "chemists kept writing"; the author note now reads that NH₄OH was written before Arrhenius and kept under his model (Cosandey, CHIMIA 2021).
- **S2, applied:** the Arrhenius definitions now describe a base releasing its own hydroxide ions in scene 5 narration, on the card and in key note 3 (same change as learning review B1).
- **M1, applied:** "Arrhenius’ theory" uses the printed curly apostrophe in the dotpoint quotation and the YouTube description. Author note (h) now records that the ledger reads correctly in the working tree, to be confirmed against brief 81.
- **M2, applied:** scene 5 shows "HCl(g) → H⁺(aq) + Cl⁻(aq)" (tag "in water") and "NaOH(s) → Na⁺(aq) + OH⁻(aq)".
- **M3, applied:** scene 9 shows "HCl(g) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)".
- **M4, applied:** scene 13 tag reads "heated; salt forms".

No em dashes (U+2014 count 0).
