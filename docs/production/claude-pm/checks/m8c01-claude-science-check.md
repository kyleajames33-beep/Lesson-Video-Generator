# m8c01 science check: Mohr titration

Independent Codex review, 28 October 2026. Input: `../lessons/chem-m8-c01.md`, Revision 1, read in full. Checked narration, Visual text, questions and feedback, notes, memory aid, equations, all numbers and metadata. Source review only; human listening and voiced playback remain pending.

## Dotpoint check

C8-IQ1-03, p58, `docs/production/programme/syllabus/chem-2017-y12.json`:
> conduct investigations and/or process data involving:
> - gravimetric analysis
> - precipitation titrations

The opening quotation matches word for word. Metadata has the same words with bullets flattened to a semicolon; preserve bullets for exact punctuation. This video owns precipitation titrations. [Official syllabus source](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx). Fresh official DOCX text downloaded for brief 110 was compared with the local JSON and this design. The wording and listed examples match. See assets/brief111-official-syllabus-check.json for file hashes and results.

## Findings

No material factual or numerical error found in the learner science. The learning review separately requests the concentrations behind scene 4's numerical thresholds and shorter feedback.

## Calculations checked

| Check | Independent result |
| --- | --- |
| Titration | Ag⁺ + Cl⁻ → AgCl(s), white, 1 : 1, balanced |
| Indicator | 2Ag⁺ + CrO₄²⁻ → Ag₂CrO₄(s), red-brown, balanced |
| Acid/base | 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O; 2Ag⁺ + 2OH⁻ → Ag₂O + H₂O, both balanced |
| Ksp | AgCl 1.77 × 10⁻¹⁰ and Ag₂CrO₄ 1.12 × 10⁻¹² match the [College of Alameda table](https://alameda.edu/wp-content/uploads/2023/07/Solubility_Product_Constants.pdf). |
| AgCl threshold | 1.77 × 10⁻¹⁰/0.074 = 2.3919 × 10⁻⁹ mol/L |
| Indicator threshold | √(1.12 × 10⁻¹²/0.005) = 1.49666 × 10⁻⁵ mol/L, about 6,257 times higher |
| Chloride remaining | At red onset, [Cl⁻] = 1.18262 × 10⁻⁵ mol/L; in about 0.045 L, 5.3218 × 10⁻⁷ mol, or 0.02877% of initial 0.001850 mol |
| Pure-water solubilities | AgCl √Ksp = 1.33041 × 10⁻⁵; Ag₂CrO₄ (Ksp/4)^(1/3) = 6.54213 × 10⁻⁵ mol/L |
| Indicator recipe | 50 g/L ÷ 194.19 = 0.25748 mol/L; 1 mL in about 50 mL gives about 0.005 mol/L |
| Worked titres | Mean 18.50 mL, range 0.10 mL, rough 19.10 excluded |
| Worked result | 0.1000 × 0.01850 = 0.001850 mol; ÷ 0.02500 = 0.07400 mol/L; × 35.45 = 2.6233 g/L |
| Attempt 1 | Mean 14.66 mL; range 0.08; 0.0003665 mol; 0.018325 mol/L; 0.64962125 g/L → 0.650 g/L |
| Wrong doubled ratio | 0.03665 → 0.0367 mol/L, correctly crossed out |

The free-ion thresholds are for the illustrative concentrations stated in the author notes. Concentrations in the actual mixture decide precipitation order, not the pure-water solubilities. The 45 mL is an approximation for the author calculation, not a datum used for the concentration answer. [Purdue's treatment](https://www.chem.purdue.edu/gchelp/howtosolveit/Equilibrium/Solubility_Products.htm) confirms the stoichiometric powers.

## Other facts

- Approximate pH 6.5 to 10 is a conventional Mohr window, not sharp universal limits. Acid lowers free chromate and delays or can obscure the endpoint; strong base favours silver oxide. [EPA 9253](https://www.epa.gov/sites/production/files/2015-12/documents/9253.pdf) uses pH 8.3 and the same 5% indicator dose; [the primary equilibrium study](https://www.scielo.org.mx/scielo.php?pid=S0187-893X2014000400006&script=sci_arttext) supports the pH chemistry.
- "First lasting red-brown" is acceptable for the second precipitate in yellow indicator. EPA calls the observed signal orange. Bromide and iodide interference and visible endpoint excess are supported by EPA 9253. A blank correction is appropriate. The exercises are idealised data calculations.
- At pH 3, a readable endpoint would be delayed and the answer high. Sodium hydrogen carbonate is a conventional near-neutral adjustment without adding chloride. The author note correctly excludes bases that overshoot the alkaline limit.
- Chromium(VI) carcinogen/mutagen hazards are confirmed by the [Merck chromate SDS](https://www.merckmillipore.com/Web-INTL-Site/en_US/-/USD/ShowDocument-File?Country=MY&DocumentId=119780_SDS_MY_EN.PDF&DocumentType=MSD&DocumentUID=17679915&Language=EN&Origin=PDP&ProductSKU=MDA_CHEM-119780). Silver nitrate also has oxidising, corrosive and aquatic hazards beyond staining: [manufacturer SDS](https://www.fishersci.co.uk/store/msds?countryCode=GB&language=en&partNumber=S%2F1240). This is not a full practical risk assessment. "Many schools" is a route rationale, not a survey verified here.
- M(Cl) = 35.45 agrees with [CIAAW](https://www.ciaaw.org/abridged-atomic-weights.htm). Approximately 19 g/L seawater chloride is a coarse contextual comparison; the author note distinguishes mass per kilogram from mass per litre.
- Both question stems differ from the site's example. No exhaustive originality claim against all NESA papers is made.

All three proposed site errors were located in the read-only HTML and logged in `../site-corrections-m8.md`; quotations/hashes are preserved in `../assets/brief111-site-evidence.json`. Narration scene sum 5,646, no U+2014. See the separate plate provenance and QA.

**Count: 0 blockers, 0 should fix, 0 optional.**

## Resolution

Resolved in `../lessons/chem-m8-c01.md` Revision 2 (30 Oct; root resolver, Claude PM). The check reported no findings and no required change; its one metadata note was applied. Recount by script: 5,541 characters (matches the Revision 2 design, not the 5,646 checked; the learning review's feedback cuts and one scene 4 addition account for the change).

| # | Outcome | Note |
| --- | --- | --- |
| Metadata note | Fixed (root decision) | The YouTube description now quotes the dotpoint with its two bullets kept ("conduct investigations and/or process data involving:" then "- gravimetric analysis", "- precipitation titrations"), not flattened to a semicolon. |
| Findings | None | 0 blockers, 0 should fix, 0 optional. All values rechecked by the reviewer are unchanged. The scene 4 thresholds (2.39 × 10⁻⁹ and 1.50 × 10⁻⁵ mol/L) now appear with their working on screen and use the check's confirmed Ksp values. |

Counts: 1 note fixed, 0 declined.
