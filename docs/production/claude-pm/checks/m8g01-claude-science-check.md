# m8g01 science check

Input SHA-256: `2542506c0eb8c152ce48294d4b514df10ede21f2cff4f3306df36ba49a0f7b47`.

Independent Codex source review, 30 October 2026. `../lessons/chem-m8-g01.md`, Revision 1, read in full: all narration, Visual paragraphs, questions, model answers, notes, number checks and metadata. No recording or release approval.

## Findings

1. **Should fix: averaging can cancel opposite errors.** Here +0.0015 and -0.0013 mol/L nearly cancel, leaving a mean error +0.0001 mol/L. Use learning finding 1's replacement. This is one finding across both reviews, supported by direct arithmetic.

## Checks completed

Q1: mean 10.900 mL; 5.450e-4 mol in the aliquot; 5.450e-3 mol in the flask; 0.5450 mol/L original concentration; 19.32025 g/L, correctly 19.3 g/L. Wrong answer 0.02180 mol/L is the diluted solution. Q2: mean 0.7830 g; 0.0033548995 mol BaSO4; 0.0011182998 mol aluminium sulfate; mass 0.3826151 g; purity 95.6538%, correctly 95.7%. Incorrect 1:1 gives 286.961%, about 287%. Pure 0.400 g would give 0.8185772 g BaSO4. Q3 errors are +2.419% and -2.097%; mean 0.0621 mol/L. Formula masses and equations balance.

Water remaining in the burette lowers titrant concentration, so a calculation using the label concentration reads high. Lost precipitate reads low. The third mass has an unverified drying endpoint and a stated procedural reason for exclusion, rather than merely looking different. The seawater result is plausible. [CSUDH gravimetry](https://www2.csudh.edu/oliver/che230/labmanual/gravsulf.htm).

The official 2023 Q32 was read directly: it is an ammonium-fertiliser back titration, not a Mohr titration. Official 2025 Q23 evaluates a sulfate-fertiliser procedure. G01 does not reproduce either stem, data set or demand structure. Its damp-result idea is general, but the compound, mole ratio, values and calculation differ from site L02. [2023 paper](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2023-hsc-chemistry_20240318.pdf), [2025 paper](https://www.nsw.gov.au/sites/default/files/noindex/2025-11/2025-hsc-chemistry.pdf). Originality checks cover these named comparisons, not every past paper.

C8-IQ1-03 and both printed bullets match the official 2017 Chemistry DOCX, downloaded/read through its XML. Both G01 site links are first and use .sa.html. No new site error from this design.

## Earlier Revision 2 site links requested by brief 114

chem-m8-c01, chem-m8-c02, bio-m8-b01 and bio-m8-b02 each use an extensionless lesson01/lesson02 link in metadata. They differ from the required .sa.html form. Append .sa.html to those lesson names, preserving subject/path. This shared correction belongs to those four designs, not G01's error count.

## Mechanical checks

15 passages: 5,708 characters summed per scene, 5,722 joined between scenes. Both remain inside the band. No U+2014. The 547-second plan leaves space for this shorter repair; exact runtime awaits recording.

## Resolution

Resolved in `../lessons/chem-m8-g01.md` Revision 2 (30 Oct; root resolver, Claude PM). Recount by script: 5,720 characters, about 548 s.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (counted in the learning review) | Learning finding 1's replacement is used in 4d's narration, the crossed chip's caption and the decision board, so nothing on screen says averaging can't cancel errors. |
| (links) | Fixed (metadata link only) | chem-m8-c01 and chem-m8-c02 now use `lesson01.sa.html` and `lesson02.sa.html`, noted in each file's Revision 3 changes. bio-m8-b01 and bio-m8-b02 are outside this resolver's chemistry scope and remain for the Biology resolver. |
