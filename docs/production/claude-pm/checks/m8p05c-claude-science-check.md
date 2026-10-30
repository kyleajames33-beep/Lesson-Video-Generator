# m8p05c: independent science check

Checked 30 October 2026 by Codex, against Revision 1. Source SHA-256: `3d923e319b69fcf518a10435e7c39ae98801c198586dfa695f56b28bf6ffb3cd`. All narration lines, planned on-screen copy, attempts, feedback, notes, number lists and metadata were inspected. This is a source review; no laboratory experiment, voiced preview, full playback or human listening pass is claimed.

## Findings

| # | Severity | Location | Problem | Repair and source |
| --- | --- | --- | --- | --- |
| 1 | blocker | 6-9; A2 | Cyclohexene is assigned a guaranteed orange endpoint after five minutes at 60 degrees, and itsOH result is then called negative. | Use the omission/unresolved fallback. A blank and ethanol known do not validate specificity against cyclohexene. Preserve the teacher-only Cr(VI) decision. See C08 science finding 1 and its primary teaching sources. |
| 2 | should fix | 10 | Validity is equated with each reagent responding only to its group. | Use S07 purpose/claim language; interferences and candidate restrictions can make a non-specific test useful. Controls establish contamination/reagent behaviour, not universal selectivity. |
| 3 | should fix | 5 | Gas collection is fitted after fast gas evolution. | Arrange the apparatus before triggering the reaction, with an open gas path and a safe teacher-approved method for adding reagent. Retain the suck-back precaution. |
| 4 | should fix | risk table: Cr(VI) | "Wipe spills at once" lacks a safe role and procedure. | Tell students to keep clear and notify the teacher. Teacher uses SDS spill controls and hazardous-waste collection, not a general wipe instruction. [Merck P5271 SDS](https://www.sigmaaldrich.com/AU/en/sds/sigald/p5271). |
| 5 | should fix | Decisions: unknowns | The set is called low-hazard although it includes highly flammable liquids, aspiration-hazard cyclohexene and a carcinogenic chromium reagent in the procedure. | Delete "Low-hazard". Keep named controls and teacher demonstration, with exact local SDS and school assessment. This author note should not create a false general safety description. |
| 6 | optional | risk table: SDS evidence | Retain the exact product and concentration distinction. | The current Merck P5271 Australian product page matches the complete solid code list, including H350 and H360FD. Merck 09158matches H225,H318,H336;360538matches H225,H319,H332,H335,H336; Scharlab 7015matches H290,H315,H319. A school must still use its actual bottle SDS. [Merck P5271](https://www.sigmaaldrich.com/AU/en/product/sigald/p5271); [Merck 09158](https://www.sigmaaldrich.com/US/en/product/sial/09158); [Scharlab 7015](https://www.scharlab.com/in/en/chemicals/volumetric-solutions/sulfuric_acid_solution_1_mol_l_2_n_7015). |

**Counts: 1 blocker, 4 should fix.** These overlap the learning review where they concern the same repair.

## Exact syllabus check

conduct qualitative investigations to test for the presence in organic molecules of the following functional groups:
- carbon–carbon double bonds
- hydroxyl groups
- carboxylic acids (ACSCH130)

C8-IQ2-01; the design explicitly distinguishes watching from conducting. The official 2017 DOCX paragraph extract was checked word for word against the local syllabus ledger and design quotation. Source SHA-256: `7c75fc806d4d8154499b0c596eda048ce4367547922bbd4058da075d9c319d42`; extract path: `out\research\continuity-2026-10-08\chemistry-2017-paragraphs.json`. Relevant paragraphs are recorded in `../assets/brief118-source-audit.json`. The Chemistry extraction contains U+FFFD for some dash glyphs, so it establishes the words and list but cannot independently certify that dash character. No substitution of 2025 syllabus content was made. [Official course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017).

## Fact and figure checks

- The plan contains aim, independent variable (liquid), dependent observation and controlled volumes, temperature, time, light and background. TheS07 reliability and accuracy language is appropriate for qualitative observations once validity is repaired.
- Cr(VI) teacher demonstration in a fume cupboard is the settled approach and is retained. Solid potassium dichromate is carcinogenicH350, not suspectedH351. [Merck hazard meanings](https://www.sigmaaldrich.com/GB/en/life-science/safety/hazard-and-precautionary-statements).
- The1 mol/L sulfuric acid and dilute bromine classifications depend on their exact formulation/SDS. Solid calcium hydroxide codes must not be silently transferred to saturated limewater. The design distinguishes solid versus mixture but still needs exact local SDS documentation.
- 2-methylpropan-2-ol may be solid near room temperature; gentle water-bath warming is consistent with its use. No flame, small amounts, closed bottles, no smell identification and separate labelled chromium/organic waste are appropriate. Do not pour chromium-containing organics into a general waste bottle without the school's specified stream.
- No exact bottle-mixture SDS, teacher trial or bromine concentration was inspected. Consequently the complete risk table and demonstrated colour timing are not certified.

## Recalculation

2 mL x1 mol/L = 0.002 mol ethanoic acid; 0.5/84.01 = 0.00595 mol NaHCO3, so bicarbonate is in excess; CO2 is 0.002 mol, about 49 mL near 25 degrees and 1 atm. 1 mol/L acid is about 60.05 g/L = 6.005% w/v. A quantitative reaction prediction is not evidence for the exact demonstration selectivity.

Narration recount: 6,251 characters, 18 scenes; U+2014 count 0. No numerical or chemical spelling change was made to a source lesson. Exact scenes and counts are retained in the source audit.

## Site-error decisions

Read-only HTML was checked, with file hashes and normalized full text retained in `../assets/brief118-source-audit.json`. Confirmed new rows, and rejected or unresolved author suggestions, are in `../assets/brief118-site-corrections-proposed.md`. That file is for root integration; this review does not change the site or shared log. Missing source support is labelled unresolved rather than asserted false.

## Remaining checks

Resolve the numbered findings before recording. Exact procedural colour timing, current mixture SDS s, missing annual dataset rows and dash glyph certification remain open where stated. Question wording is HSC-style; originality against every historical exam has not been exhaustively established. Check the revised source, then the exact voiced preview for learning, timing, motion and captions. Human listening and release approval remain pending.

## Resolution

Resolved in `../lessons/chem-m8-p05.md` Revision 2 (31 Oct; root resolver, Claude PM). Findings 1 to 4 are merged with the learning review's repairs. Recount by script: 6,235 characters, about 567 s.

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | Blocker: cyclohexene assigned a guaranteed orange dichromate endpoint | Fixed (omission fallback, as the check directs). C is not tested with dichromate; its OH is "can't tell"; A2 has no dichromate result. Teacher-only Cr(VI) in a fume cupboard is preserved. | Scenes 7, 9, 15, 16; Decisions; author note (e) |
| 2 | Validity equated with each reagent responding only to its group | Fixed (as learning 2). s07 claim language; controls establish contamination and reagent behaviour, and the candidate list names possible interference. | Scene 10 |
| 3 | Gas collection fitted after fast gas evolution | Fixed (as learning 3). Apparatus ready before addition, open gas path, teacher's addition method, suck-back precaution kept. | Scene 5 |
| 4 | "Wipe spills at once" lacks a safe role and procedure | Fixed (as learning 4). Keep clear, tell the teacher; teacher uses the SDS spill procedure and hazardous-waste collection. | Risk table |
| 5 | Unknowns called low-hazard | Fixed. "Low-hazard" deleted; hazards named as controlled by the risk table, the school's assessment and each bottle's SDS. | Decisions (unknowns) |
| 6 | SDS product and concentration distinction (optional) | No change needed: the check confirms the listed codes, including P5271's H350 and H360FD. The footer requiring the school's actual bottle SDS stays. | Risk table |

Open items for the Codex error check: exact local SDSs for the bromine water and the made-up acidified dichromate, and teacher-trial colour timing (as above); the school's addition and closure method for the fizz test is named on screen, not specified.
