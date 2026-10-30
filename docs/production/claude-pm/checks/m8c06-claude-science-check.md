# m8c06: independent science check

Checked 30 October 2026 by Codex, against Revision 1. Source SHA-256: `52280503f23711a77522f7cba1aad942295fd398b9c8fc586c95c68f2b30229e`. All narration lines, planned on-screen copy, attempts, feedback, notes, number lists and metadata were inspected. This is a source review; no laboratory experiment, voiced preview, full playback or human listening pass is claimed.

## Findings

| # | Severity | Location | Problem | Repair and source |
| --- | --- | --- | --- | --- |
| 1 | should fix | 12,14,20 and metadata | The how-fast shorthand needs the actual fixed-interval measured quantity. | Define the measured five-day oxygen demand in mg/L, with sealed dark, 20-degree conditions. It is not an in-situ rate forecast. [EPA BOD method](https://archive.epa.gov/water/archive/web/html/vms52.html). |
| 2 | should fix | 2,11,17 and Numbers to verify | Air saturation is treated as an absolute maximum. | Water can be supersaturated. Use air-equilibrium wording and correct the crossed1:1 sense check. [California DO guidance](https://www.waterboards.ca.gov/water_issues/programs/swamp/docs/cwt/guidance/3110en.pdf). |
| 3 | should fix | 13; guide bands | Below 2,2-8,above 8 are not verified universal pollution categories or legal limits. | Use "the teaching guide on this card", make its boundaries unambiguous, and keep clear that lowBOD cannot establish safe water. Do not claim many courses use these exact thresholds without evidence. |
| 4 | should fix | A2 and feedback | P depletion 0.9 mg/L fails the stated ordinary method criterion of at least2 mg/L depletion, although the subtraction is right. | Label the exercise oxygen depletion rather than an unqualified valid standardBOD result, or state a suitable validated low-level method. Q depletion 5.8 and residual 1.8 meet the common2/1 rule. [Wisconsin laboratory guidance](https://dnr.wisconsin.gov/topic/labCert/BODPreTreatment.html). |
| 5 | should fix | 14 | "Metals, pesticides and germs do not show up" is an overbroad exclusion. | BOD does not identify them or establish their safety; some chemicals affect microbial demand or toxicity. Replace with "BOD does not identify metals, pesticides or disease-causing microbes". [EPA method](https://archive.epa.gov/water/archive/web/html/vms52.html). |

**Counts: 0 blocker, 5 should fix.** These overlap the learning review where they concern the same repair.

## Exact syllabus check

analyse the need for monitoring the environment

C8-IQ1-01; the syllabus does not specifically name Winkler, DO or BOD. The official 2017 DOCX paragraph extract was checked word for word against the local syllabus ledger and design quotation. Source SHA-256: `7c75fc806d4d8154499b0c596eda048ce4367547922bbd4058da075d9c319d42`; extract path: `out\research\continuity-2026-10-08\chemistry-2017-paragraphs.json`. Relevant paragraphs are recorded in `../assets/brief118-source-audit.json`. The Chemistry extraction contains U+FFFD for some dash glyphs, so it establishes the words and list but cannot independently certify that dash character. No substitution of 2025 syllabus content was made. [Official course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017).

## Fact and figure checks

- March 2023 Menindee: hypoxia most likely proximate cause is confirmed by the [Chief Scientist executive summary](https://www.chiefscientist.nsw.gov.au/__data/assets/pdf_file/0022/1597/Menindee-Fish-Deaths-Report_Findings-and-Recommendations.pdf). The [DPI July 2023 submission p4](https://www.chiefscientist.nsw.gov.au/__data/assets/pdf_file/0013/1606/DPI-Fisheries-Submission-to-Independent-Review-into-Menindee-Fish-Deaths-2023.pdf) specifically records first-light observations. Attribute observation toDPI rather than asserting a new precise time series.
- Winkler: all three displayed equations balance atom and charge counts. MnO(OH)2 is an accepted representation of the brown product. The1:4 oxygen:thiosulfate ratio is confirmed by the [UBC protocol](https://www.eoas.ubc.ca/~swaterma/473-573/Handouts/Winkler.pdf) and [Hach method](https://cdn.hach.com/7FYZVWYB/at/5nh4tqx6sz6p35zs64xs959/ex_oxydissolved.pdf). Immediate fixing without bubbles, starch near the endpoint and calibrated probe checks are appropriate.
- About 9.1 mg/L at 20 degrees and 7.6 at 30 degrees fit fresh-water air-saturation tables at normal pressure. See finding 2 for the limit.
- Dark,20 degrees, five-day conditions are confirmed; simple subtraction needs an undiluted sample and usable residual oxygen. Method interferences remain author notes unless necessary for the question. No azide handling is taught.

## Recalculation

Worked titre: 0.0100 x 0.00800 = 8.00e-5 mol thiosulfate; /4 = 2.00e-5 mol O2; x 32.00 x 1000 = 0.640 mg; /0.1000 = 6.40 mg/L. 6.40/9.09 x100 = 70.41%. A1: 0.00500 x0.01040 /4 x 32.00 x 1000 /0.05000 = 8.32 mg/L; wrong 1:1 gives 33.28, rounded 33.3. BOD differences 3.5, 0.9 and 5.8 mg/L are arithmetically correct. P needs the reporting distinction in finding 3.

Narration recount: 6,254 characters, 21 scenes; U+2014 count 0. No numerical or chemical spelling change was made to a source lesson. Exact scenes and counts are retained in the source audit.

## Site-error decisions

Read-only HTML was checked, with file hashes and normalized full text retained in `../assets/brief118-source-audit.json`. Confirmed new rows, and rejected or unresolved author suggestions, are in `../assets/brief118-site-corrections-proposed.md`. That file is for root integration; this review does not change the site or shared log. Missing source support is labelled unresolved rather than asserted false.

## Remaining checks

Resolve the numbered findings before recording. Exact procedural colour timing, current mixture SDS s, missing annual dataset rows and dash glyph certification remain open where stated. Question wording is HSC-style; originality against every historical exam has not been exhaustively established. Check the revised source, then the exact voiced preview for learning, timing, motion and captions. Human listening and release approval remain pending.

## Resolution

Resolved in `../lessons/chem-m8-c06.md` Revision 2 (31 Oct; root resolver, Claude PM). Findings 1, 2 and 4 are merged with the learning review's repairs. Recount by script: 6,269 characters, about 569 s.

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | How-fast shorthand lacks the fixed-interval measured quantity | Fixed (as learning 1). Five-day oxygen use in mg/L under sealed, dark, 20 °C conditions; scene 20 matches. The YouTube description already describes the 5-day test. | Scenes 12, 20 |
| 2 | Air saturation treated as an absolute maximum | Fixed (as learning 2). Air-saturation wording; the crossed 1 : 1 check now says "about four times the right answer"; Numbers used notes photosynthesis can supersaturate water. | Scenes 2, 11, 17; Numbers used |
| 3 | Guide bands not verified as universal categories | Fixed. "Moderate on this card's teaching guide"; zones "under 2", "2 to under 8", "8 or more"; caption "this card's teaching guide: not a legal limit, and a low BOD doesn't mean safe". | Scene 13; Decisions; Numbers to verify |
| 4 | P's 0.9 mg/L depletion fails the 2 mg/L criterion | Fixed (as learning 3). Asked as the five-day oxygen decrease; P's line tagged as too small for a standard BOD result; Q (5.8, residual 1.8) is a valid BOD₅. | Scenes 18, 19; Decisions A2 |
| 5 | "Metals, pesticides and germs do not show up" overbroad | Fixed (as proposed). Scene 14: "BOD doesn't identify metals, pesticides or disease-causing microbes"; limits card matches. | Scene 14; Decisions |

Fact note applied: the hook now says "fisheries reports noted deaths around first light" (was "the biggest die-offs came around first light"), with a grey chip citing the NSW DPI Fisheries July 2023 submission, p4. Open item for the Codex error check: confirm that wording against p4. The general remaining checks above carry over.
