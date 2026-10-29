# m7p05b science check: antibiotic disc interpretation

Independent Codex review, 28 October 2026, Revision 1. Checked narration, planned screen text, questions, feedback, notes, number list and metadata. No source edits, audio or playback. Scope is educational interpretation and safety critique, not validation or optimisation of a culture method. Teacher approval against the school's current procedure remains required.

## Dotpoint check

The pharmaceutical-effectiveness stem and examples antivirals/antibiotics match official Biology 2017 DOCX and programme JSON. Official text was downloaded and extracted to `../assets/brief109-qa/bio-syllabus-source.txt`. Working Scientifically descriptions correspond to planning, conducting, processing, analysing and problem solving. Watching is appropriately distinguished from performing an investigation.

## Findings

| # | Severity | Claim | Error and repair |
| --- | --- | --- | --- |
| 1 | blocker | 9/10/feedback/conclusion: "A inhibited this bacterium more than B" | Different-drug zone diameters do not isolate comparative inhibitory potency because dose and diffusion differ. Replace throughout with "A produced a larger clear zone than B under these conditions." Keep the clinical-effectiveness limitation. |
| 2 | blocker | Safety check: no NSW document found; "tape don't seal" as universal rule | Current official NSW Stage 5 resource is available and permits sealing approaches, contrary to the blanket mnemonic. Its temperature statements are internally inconsistent: narration says "no more than 30" and "30 or lower", while screen summaries use a strict below-30 symbol. The chosen 28 C example fits both; inclusive 30 alone is not a definite error. Teacher must reconcile safety instructions and sealing advice with current school policy before recording. |
| 3 | should fix | Risk header: "AS/NZS 2243.3:2022: school cultures are risk group 1" | A standard does not classify everything cultured at school as risk group 1. Classification depends on agent/strain; containment describes the facility. Say "Use only the teaching culture approved in the school's risk assessment. Treat grown plates as potentially contaminated." Full standard clauses were not accessed, so clause-level compliance is unverified. |
| 4 | should fix | 9 overlay: "small molecules spread further" | Size affects diffusion but does not establish a universal zone ranking. Solubility, binding and biological activity also matter. Use "diffusion differs between drugs" instead of a categorical two-cloud ranking. Spoken "can" is more defensible than the absolute screen tag. |
| 5 | should fix | 8: "the blank's six tells you the zones came from the antibiotics" | Control supports absence of inhibition from paper/water under these conditions, not proof of every causal assumption. Say "The blank produced no clear region beyond the disc, so the paper and water did not explain the clear zones." |

Two blockers, three should-fix findings.

## Data and interpretation checks

A: (24+26+25)/3 = 25 mm. B: (15+14+16)/3 = 15 mm. Both ranges 2 mm; gap between means 10 mm. C and blank remain 6 mm under the explicitly including-disc convention. Two perpendicular example readings average to 25 mm and match the plate-3 entry. The convention must stay visible so no halo is not mistaken for a six-millimetre halo. Repeat agreement supports reliability, not guaranteed accuracy.

The author's geometry calculation is wrong: in a 90 mm circle, points 22 mm inward from the rim have radial distance 23 mm. Adjacent diagonal positions are about 32.5 mm apart, not 46 mm; opposite positions are 46 mm apart. This is a correction to the author calculation, not an operational placement recommendation. Painted ratios are illustrative and do not validate the method.

A clear region shows growth inhibition, not necessarily death or sterility. No zone does not establish that a drug is universally useless. Clinical interpretation requires validated drug/organism-specific breakpoints and appropriate conditions; the school illustration is not such a test. Clinical effectiveness also depends on safe exposure at the infection and evidence for the actual infection. These distinctions are sound after finding 1 is resolved.

## Risk-table check

Contamination, allergy, live-culture disposal and ethanol/fire categories are relevant. Keeping grown plates closed, supervised handling and teacher-managed decontamination are appropriate protective messages. Do not infer that a temperature alone makes an unknown culture harmless, or that naming a decontamination temperature validates a load. Showing sterile forceps avoids introducing a flaming procedure. Unused Bunsen/ethanol rows should be teacher-context notes rather than imply those actions occur in the method shown. Specific strain suitability, loading volumes and detailed procedural compliance were not certified.

The official NSW resource explicitly supports closed-plate observation and disposal controls. It differs from the author's claim that all cited jurisdictions agree, and from the blanket opposition to sealing. Learner replacement: "Follow your teacher's approved school procedure. Keep cultured plates closed and never open them to measure the zones." This check does not supply a replacement growth protocol.

## Site findings and limits

L16's lack of a disc practical is a coverage note, not an incorrect scientific statement. L05's school-temperature problem is already logged; no duplicate. The register should acknowledge the official resource's inclusive spoken wording and strict screen wording rather than assert only one version. Fleming's clear-zone description is acceptable historical shorthand, but does not establish sterility.

Narration recount 5,728 characters; zero U+2014. Title within 100 characters. Cached 2019 to 2025 Chemistry/Biology exam text was searched, hits retained in `../assets/brief109-qa/exam-text-hits.txt`. Closest Biology 2019 Q7 uses two patient isolates/four discs and asks for a treatment choice; P05 instead evaluates the limits of a two-drug school result and repairs a flawed method. Biology 2021 Q8 tests an animal-to-human inference, with a distinct stimulus. No close copied wording found in inspected matches; complete visual comparison of all graph-only pages remains unperformed. Operational details were intentionally not endorsed or optimised.

## Sources checked

- [NSW DoE microbiology investigation](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-curriculum-resources-k-12/science-7-10-curriculum-resources/science-s5-microbiology-investigation).
- [EUCAST methodology](https://www.eucast.org/bacteria/methodology-and-instructions/), [EUCAST zone distributions](https://www.eucast.org/bacteria/mic-and-zone-distributions-ecoffs/), [EUCAST zone calibration](https://www.eucast.org/bacteria/development-of-clinical-breakpoints-and-ecoffs/mic-zone-diameter-correlations/). Consulted for interpretation, not to create a practical protocol.
- [Official Biology 2017 syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx).

## Resolution

Resolved in `../lessons/bio-m7-p05.md` Revision 2 (30 Oct; root resolver, Claude PM). Overlapping fixes with `m7p05b-learning-review.md` were merged into one edit each. Recount by script: 5,832 characters, about 568 s; zero U+2014.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (merged with learning 1) | "A produced a larger clear zone than B under these conditions" replaces every activity ranking (scenes 9, 10, 11, 14, feedback 1, key note 4, A1 model answer). The clinical-effectiveness limit is kept (scene 10, feedback 1, key note 4). |
| 2 | Fixed (merged with learning 2; root-pending) | Learner copy uses the check's replacement ("Follow your teacher's approved school procedure. Keep cultured plates closed and never open them to measure the zones."); the blanket "tape don't seal" line is removed. The NSW resource's inclusive narration and strict screen symbol are both recorded in Decisions; 28 °C fits both and is kept. Teacher reconciliation with current school policy is logged as root-pending in Decisions and Open decisions. |
| 3 | Fixed (merged with learning 3) | The AS/NZS header is replaced by "Use only the teaching culture approved in the school's risk assessment. Treat grown plates as potentially contaminated." Scene 5's tube tag, the plan card and key note 5 say "approved teaching culture". The Safety facts check records why (classification by agent and strain; containment describes the facility). |
| 4 | Fixed | Narration: "a drug that spreads slowly through agar can make a small zone even when it works well". The halo pair is labelled only "drug 1" and "drug 2", tag "diffusion differs between drugs"; no size ranking. |
| 5 | Fixed | Scene 8: "And the blank made no clear zone beyond the disc, so the paper and water didn't cause the zones." Feedback 1's answer row: "paper and water alone made no zone". |

Also changed: the plate geometry author note is corrected (centres 23 mm from the dish centre; adjacent about 32.5 mm, opposite 46 mm), and marked illustrative, not a placement recommendation.
