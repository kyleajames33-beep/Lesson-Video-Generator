# Source provenance, cohort mapping and quantitative corrections

This pass continues C12, C13 and C19 to C21 without rendering, generating speech,
opening recordings, decoding audio or changing production lesson JSON. Review
packages are proposals with explicit limits, not approved replacements.

## C12: current narration versus stored alignment

The read-only text-provenance audit compared 643 wired narration segments:

| Result | Segments | Meaning |
| --- | --- | --- |
| Exact text/alignment-character match | 418 | Text agrees with the stored sidecar; actual speech and take settings remain unverified |
| Alignment sidecar missing | 224 | No text comparison is possible on this path |
| Substantive text mismatch | 1 | Requires investigation before reuse |

The mismatch is `chemistry-y12-m6-l9-ka-kb-ice-tables.json`, scene `hook`.
Current text has SHA-256 prefix `0ccbbef403e4` and says “over twenty times
smaller”. Stored alignment text has prefix `ff723acb3db6` and says “ten times
smaller”, matching the referenced filename `hook.ff723acb3db6.mp3`.
This establishes a current-text/sidecar mismatch. The recording itself was not
inspected, so its actual contents are not certified. No generation-settings
sidecar was found for this reference.

[Catalogue diagnostics](../../out/review/narration-provenance/catalogue.json)
record full source/text/sidecar hashes. The [C12 handoff](../../out/review/narration-provenance/C12-handoff.json)
preserves the current text as a review candidate with voice/model unset. It
does not authorise or generate a take. Review the scientific hook first, select
final settings, then later rebuild the affected recording, alignment, duration,
cues and captions. C12 remains open; no reference was silently rewired.

## C13: three selected new-course Biology lessons

NESA's [course implementation advice](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview/course)
sets the new Biology Year 11 start at Term 1, 2027, Year 12 start at Term 4,
2027 and first new-syllabus HSC in 2028. The outgoing Year 12 cohort continues
the 2017 syllabus during 2027 before that course transition. A neutral screen
title or legacy filename alone does not identify the intended cohort.

The official [Year 11 Cells as the basis of life content](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c)
places the selected enzyme experiment, enzyme-graph analysis and DNA-replication
modelling/evaluation topics in Year 11. Each selected source's dot-point metadata
matches the corresponding published content item after HTML/whitespace
normalisation. All listed codes exist as published Year 11 outcomes on the
[official outcomes page](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/outcomes).

| Selected lesson | Official content identifiers | Current codes | Delivery still needed |
| --- | --- | --- | --- |
| Y11 M1 L17 enzyme practical | `ci75e851a5`, Biochemical processes | BI-11-01, BI-11WS-02, BI-11WS-03 | Learners conduct supervised experiments and collect data across the specified factors; the video currently supports planning |
| Y11 M1 L18 enzyme graphs | `cia9a328b1`, Biochemical processes | BI-11-01, BI-11WS-05 | Independent analysis with assay context and justified explanations, after C06 qualifications |
| Y11 M1 L20 DNA replication | `cif2b03f19`, `cicf152a3d`, Cell division | BI-11-01, BI-11WS-02 | A learner-built model with polarity/enzyme roles and a justified assessment of its limitations, after C05 review |

The delivery judgments in the table are our reading of the selected source
activities. Matching a topic or an outcome code is not evidence that a learner
has completed an investigation or achieved that outcome. In particular,
discussing a bead model does not itself supply a complete investigation method.

[Selected mapping evidence](../../out/review/curriculum/selected-biology.json)
records exact lesson hashes, official content identifiers, match results and
the remaining activities. Public HTML response bytes are cached with URLs,
fetch times and SHA-256 values in `out/research/curriculum/sources.json`.
The audit verifies those hashes before using embedded page data and fails if a
selected metadata match changes. Refreshing a source is not automatic approval
of a changed curriculum mapping.

This checks three selected new-course lessons. It does not certify all Biology
lessons, the earlier crossover document, legacy 2017 alignment or classroom
assessment. Their new-course topic placement is confirmed; C13's wider cohort
and delivery review remains open. No filenames, narration or registrations changed.

## C19 to C21: six targeted scene proposals

[Side-by-side quantitative review](../../out/review/quantitative-corrections/review.md)
and its [manifest](../../out/review/quantitative-corrections/manifest.json)
contain six source-hash-pinned scene proposals. Each preserves the selected
scene type, artwork and geometry, removes media/caption/cue wiring and keeps
duration only as an unvalidated placeholder. These are scene revision packages,
not complete lesson JSONs or replacements for the four earlier full drafts.

| Correction | Concrete proposal and recalculation |
| --- | --- |
| C19, empirical formula quick check | Use the supplied C 12.01 and H 1.008 consistently. C amount is 6.66112 mol; H:C ratio is 2.97867. CH₃ calculation mass is 15.034, reported 15.03 g mol⁻¹, rather than 15.04. Explicitly approximate composition/molar-mass data support multiplier 2 and C₂H₆ |
| C19, gravimetry second example | Keep 143.323 as calculation molar mass, report 143.32. Chloride mass is 0.354967835 g before rounding. Clarify the sample as 500.0 mL, giving 0.3550 g and 709.9 mg L⁻¹ to four significant figures |
| C20, combustion worked example | Explicit idealised constant-pressure, water-only heat balance. Water heat is 9781.2 J; ethanol amount 0.01562839 mol. Estimate −625.86095 kJ mol⁻¹, reported −6.3 × 10² kJ mol⁻¹ to the requested two significant figures |
| C20, neutralisation quick check | Explicit solution heat model and J-to-kJ conversion: 2884.2 J = 2.8842 kJ, reported +2.9 kJ for solution heat. Net complete-neutralisation stoichiometry gives 0.100 mol water. Reaction heat has opposite sign under the stated assumptions |
| C20, dissolution quick check | Use total solution mass 105.0 g and explicitly assumed solution heat capacity 4.18 J g⁻¹ °C⁻¹. Heat gain 4169.55 J; amount 0.04505316 mol. Estimate −92.5473318 kJ mol⁻¹, reported −93 to two significant figures |
| C21, back titration worked example | State selective, complete CaCO₃ reaction and titration of the full excess. Unrounded carbonate mass 395.395 mg gives 63.7734%, reported 395 mg and 63.8% under the requested three-significant-figure convention. No supplied label amount supports a label-compliance conclusion |

The dissolution proposal deliberately changes the calculation model: it no
longer ignores the solute mass while leaving that approximation unstated. The
old water-only approach gives −88.140316 kJ mol⁻¹ before rounding. It could be
taught as an explicitly stated approximation; it is not the selected proposal.
Real solution heat capacity, heat exchange and vessel heat capacity still need
measurement or supplied assumptions for an experimental determination.

[OpenStax's calorimetry treatment](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry)
supports using the material's mass, heat capacity and temperature change, with
reaction/solution heat balances bounded by vessel and external heat-transfer
assumptions. Our scene questions make the chosen approximations explicit;
they do not establish experimental accuracy or a standard-state reference value.

The empirical question now explicitly uses approximate composition data. Its
original decimal percentages suggested more precision than the proposed C₂H₆
formula reproduces. The gravimetry question specifies sample-volume precision;
the concentration changes accordingly. These are visible question revisions,
not repairs that can be paired with old recorded questions.

Before production, review and integrate each scene with the rest of its lesson:
formula summaries, model labels, supplied values, rounding conventions and
questions must agree. The inherited pacing needs a fresh narration/response-hold
plan. Scientific approval and final media remain pending, so C19 to C21 stay open.

## Reproduce this source-only pass

```powershell
npm run audit:narration-provenance
npm run research:biology-curriculum
npm run audit:selected-curriculum
npm run prepare:quantitative-corrections
npm run test:source
npm run check
```

The research command fetches only public curriculum HTML. The audit command
uses the cached pages and refuses altered response hashes. The other commands
read lesson JSON, calculate, write proposals or check source code. None invokes
a renderer, speech provider or audio decoder. All 39 source tests pass, including
independent recalculation, stale-source refusal and media invalidation. TypeScript
checks the component contracts. All six proposals pass the existing lesson
schema when inserted into unvoiced check fixtures. The validator reports 11
narration-length warnings across those full fixtures, including inherited
scenes. That confirms the need for fresh pacing; it does not validate durations.
The arithmetic diagnostic also now skips unsupported symbolic/bracketed
numerator tails rather than flagging a partial expression as a complete equality.
Its refreshed catalogue screen supports 173 numeric expressions, with the same
661 diagnostic occurrences and seven numeric flags as the initial source pass.
No selected release or catalogue lesson was approved.

## Subsequent complete-lesson integration

The six scene proposals have since been integrated into complete isolated
unvoiced lessons. The [integration report](quantitative-lesson-integration-2026-10-03.md)
records broader consistency corrections, revised estimated pacing, separate
response-take plans and missing artwork dependencies. The earlier 39-test and
11-warning results above describe the scene-fixture baseline, not the newer
full-draft results. Production sources and media remain unchanged.
