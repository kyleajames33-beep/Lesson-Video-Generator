# P03 science check (Claude): investigating solubility rules and mixed solutions

Checked 18 October 2026 by an independent reviewer. Input: `../lessons/chem-m5-p03.md` (Revision 1), `../site-extracts/chem-m5-l16.md`, `chem-m5-c13.md` (rules card and author notes). Method: in-well concentrations and ion products recomputed by a Python script (scratch, below); hazards against supplier SDSs on the web; colours and categories against standard data and the C13 check. No renders. No em dash in the design or here. Syllabus (2017) C5-IQ4-03: "conduct an investigation to determine solubility rules, and predict and analyse the composition of substances when two ionic solutions are mixed, for example: potassium chloride and silver nitrate; potassium iodide and lead nitrate; sodium sulfate and barium nitrate".

## Summary

- The expected matrix is correct for 0.1 mol/L stocks mixed drop for drop (about 0.05 mol/L of each ion in the well). The four marginal cells (CaSO4, Ca(OH)2, Ag2SO4, PbCl2) all exceed Ksp on paper, by factors of about 51, 25, 10 and 7, but slow nucleation and activity effects make them faint, slow or absent in practice; "faint cloud, or none" is the honest expectation, and the design says so on screen.
- One narration sentence implied a lead chloride solid (fixed). One chip overstated the composition test (fixed).
- The design logic (always-soluble partners, stock checks, predict first, black background, composition test) is sound.

## Findings

Severity: M = change before recording; L = wording or author-note fix.

| # | sev | where | problem | correct statement | source | resolution |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | M | Scene 5 narration | "Silver and lead give solids with the halides" includes PbCl2. | At 0.05 mol/L each, Q(PbCl2) = 1.25 x 10^-4 against Ksp about 1.7 x 10^-5 (about 7 times); PbCl2 solubility about 1.0 g per 100 mL at 20 C (about 0.036 mol/L), so a white solid may form slowly or not be seen. Not a reliable spoken expectation. | Script; C13 author note (a) | Narration: "Silver gives a solid with both halides ... and lead gives bright yellow lead iodide." |
| 2 | L | Scene 8 chip | "only one test can go cloudy". | If the reagents happen to be in exact proportion, neither test gives a visible solid. "At most one" is correct. A trace of the other ion always remains (a Ksp idea, C14). | Logic | "at most one test goes cloudy". |
| 3 | L | Attempt 1 (Revision 2) | New system check. | K+ + Cl- + Ag+ + NO3-: KNO3 soluble, AgCl insoluble (white). Clear liquid plus Cl- gives more AgCl only if Ag+ remains, so silver nitrate was in excess; the liquid holds K+, NO3- and Ag+ (chloride essentially used up). AgCl darkens in light over minutes (record promptly; not spoken). | C13 rules card; standard data | Applied. |
| 4 | L | Scene 5 matrix | Colours. | AgCl white; AgI pale yellow; PbI2 bright yellow; BaSO4, PbSO4 white; CaCO3, BaCO3 white; lead carbonate white (sodium carbonate solution is basic, so a basic lead carbonate forms; still white); Ag2CO3 pale yellow to cream (darkens in light); silver with hydroxide gives brown Ag2O; Pb(OH)2 white; Ca(OH)2 faint white; Ba(OH)2 stays clear (solubility about 3.9 g per 100 mL as the octahydrate, about 0.12 mol/L, above 0.05). | C13 science check; script | Keep. |
| 5 | L | Author note (a), scene 4, 7, 15 | Marginal cells and "concentration matters most". | Q/Ksp at 0.05 mol/L: CaSO4 51 (Ksp 4.9 x 10^-5), Ca(OH)2 25 (Ksp 5.0 x 10^-6), Ag2SO4 10 (Ksp 1.2 x 10^-5), PbCl2 7 (Ksp 1.7 x 10^-5). With smaller drops or a short wait, the cloud may not appear; with clean wells and equal drops, groups converge. The CaSO4 two-group attempt is therefore a fair reliability question. | Script; standard Ksp tables | Keep. |
| 6 | L | Scene 2 | Partners always dissolve. | NaNO3 and all nitrates and sodium salts are soluble (no common exceptions), so the by-product pair in every well is soluble. The stock check catches a cloudy stock (for example carbonate stock absorbing CO2 does not cloud; silver nitrate stock can darken in light, hence "fresh solutions"). | C13 rules | Keep. |
| 7 | L | Scene 3 | Black background. | White precipitates show against black; a white tile hides them. Correct and standard well-plate practice. The site's "white background" alone is a correction, recorded in the design only. | School practice | Keep. |
| 8 | L | Scene 10 | Lead nitrate hazards. | Supplier classifications vary: H272, H302 + H332, H318, H360 or H360Df, H373 or H372, H410, with some adding H317 or H351. "Toxic, builds up in the body and can harm an unborn baby", plus "eye damage" on screen, is common to all. | Sigma-Aldrich 228621 (2013): https://beta.lakeland.edu/AboutUs/MSDS/PDFs/1900/Lead%20(II)%20Nitrate%20%5B228621%5D%20(Sigma%20Aldrich)%201-3-2013.pdf ; Fisher: https://deca.upc.edu/en/laboratories/latem/security/reactius-quimics/lead-ii-nitrate-fisher-scientific.pdf ; Molekula: https://molekula.com/index.php/product/lead-ii-nitrate | Keep. |
| 9 | L | Scene 10 | Silver nitrate. | H272, H314 (severe skin burns and eye damage, solid), H410; some current versions add H290 and H360. Stains skin dark. "Stains skin and can damage eyes" is correct; the reproductive class is not spoken (glasses, gloves and drops-only already apply). | Sigma-Aldrich 209139: https://sigmaaldrich.com/US/en/sds/sigald/209139 ; Vanderbilt copy: https://www.vanderbilt.edu/vinse/facilities/safety_data_sheets/Silver_nitrate.pdf | Keep; author note. |
| 10 | L | Scene 10 | Barium nitrate. | H272, H302 + H332, H319 (Flinn, Strem; Strem also lists H350). "Harmful if swallowed" is common to all. | Flinn SDS 96: https://www.flinnsci.com/sds_96-barium-nitrate/sds_96 ; Strem: https://www.strem.com/uploads/sds/sd93-5624_US.pdf | Keep. |
| 11 | L | Scene 10 | Sodium hydroxide 0.1 mol/L and sodium carbonate. | NaOH at about 0.4 percent is below the 0.5 percent CLP irritation band, but glasses are standard; sodium carbonate H319. | NaOH bands (Neofroxx): https://shop.neofroxx.com/msds/EN/MSDS_LC-4856_GB_en.pdf | Keep. |
| 12 | L | School rules | NSW CSIS categories for lead and barium nitrate. | Not confirmable from an official source by web search; learner copy says "follow school rules (some schools use a teacher demo or supplied results)", which is the site's wording and true either way. | NSW CSIS search: https://ecmjsp.education.nsw.gov.au/ecmjsp/chemicals | Owner or Codex check; not a recording blocker. |

## Script results (Python, 18 Oct)

- In-well concentration: 0.1 x 3 / 6 = 0.05 mol/L for each ion.
- Ion products at 0.05 mol/L: CaSO4 2.5 x 10^-3; Ca(OH)2, Ag2SO4 and PbCl2 1.25 x 10^-4. Ratios to Ksp: 50.7, 25.0, 10.4, 7.4.
- Solubility checks: PbCl2 10 g/L = 0.036 mol/L; Ag2SO4 8 g/L = 0.026 mol/L; Ba(OH)2·8H2O 39 g/L = 0.12 mol/L (anhydrous basis would be 0.23 mol/L): all marginal or above 0.05 as stated.
- Narration (Revision 2): 6442 characters, 17 scenes; about 594 s.

## Resolution

Applied in Revision 2 of `../lessons/chem-m5-p03.md` (18 Oct).

1. Finding 1: resolved (scene 5 narration).
2. Finding 2: resolved (scene 8 chip).
3. Finding 3: attempt 1 rewritten and checked.
4. Findings 4 to 11: no change needed.
5. Finding 12: open owner check; learner copy is safe as written.

No open science question blocks recording. Human listening and the voiced-preview check remain pending.
