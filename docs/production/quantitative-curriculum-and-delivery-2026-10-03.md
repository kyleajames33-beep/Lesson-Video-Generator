# Selected Chemistry curriculum and learner delivery

Six isolated quantitative drafts now have an evidence-backed curriculum audit,
unapplied metadata proposals and separate formative learner tasks. Production
lesson JSON, recordings, layouts and registrations were not changed. No rendering,
audio generation or playback was performed.

## Curriculum findings

The six sources declare Chemistry Stage 6 Syllabus (2017). The audit uses the
syllabus currently linked from the [official NESA course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017),
plus its [record of changes](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017/record-of-changes).
The record includes the Module 2 molar-mass notation clarification and later
Module 7/8 amendments. The downloaded document includes the amended Module 8
mass-spectrometry term. No historical edition was silently substituted.

| Lesson | Source-backed disposition |
| --- | --- |
| Empirical/molecular formulas | Module 2 explicitly includes percentage composition and empirical formulae under the mole point. Molecular-formula inference is a related extension. Both stored points paraphrase/reorder published wording. |
| Gravimetry | Gravimetric analysis is explicitly named in Year 12 Module 8, not Module 2. Keep this Year 11 lesson as a labelled quantitative-method extension. A Year 12 edition would need a separate brief and CH12-15 mapping. |
| Combustion calorimetry | Module 4 explicitly includes combustion temperature investigations and calorimetry analysis/reference comparison. Stored points are teacher summaries; outcome list and linked inquiry question are absent. |
| Neutralisation calorimetry | Suitable Module 4 calorimetry application. The specifically named neutralisation practical is in Year 12 Module 6. Stored points are summaries; outcome list and linked inquiry question are absent. |
| Dissolution calorimetry | Module 4 explicitly includes ionic dissociation in aqueous solution and calorimetry. Stored points are teacher summaries; outcome list and linked inquiry question are absent. |
| Back/conductometric titration | Stored titration wording matches. Add the conductivity parent and strong-acid/strong-base child to the proposed scope. Back titration is an application, not a separately named point. Existing outcome codes exist, but investigation achievement remains unverified. |

One of ten stored content statements matches published wording after whitespace
and apostrophe normalisation. This is a metadata observation, not evidence that
the other nine lessons or statements are scientifically wrong. All existing
outcome codes in this selected batch exist in the reviewed edition. Three
calorimetry sources have no outcome list. Proposed target codes describe what
the planned learner task can elicit; they do not certify achieved outcomes.

The [new-course implementation guidance](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/overview/course)
starts Year 11 in Term 1 2028 and Year 12 in Term 4 2028, with the first new HSC
in 2029. Keep edition/cohort records separate. This batch does not convert the
lessons to the 2025 syllabus.

The 2017 course requires 15 depth-study hours and at least 35 practical hours
in each year. Practical work in depth studies can contribute to the practical
total; these are course requirements, not allocations to individual videos.
Viewing a demonstration or answering synthetic-data questions does not prove
practical completion. School formal-assessment rules and suitability were not
assessed by this work.

## Concrete learner follow-up

The [six student sheets and separate teacher key](quantitative-learner-tasks/README.md)
apply the teaching templates with entry checks, unseen numbers, independent
working, qualified conclusions, scoring and diagnostic follow-up. They include:

- Empirical ratio and molecular multiplier, with a composition back-check and
  limits on identity/purity claims.
- Gravimetric concentration, constant-mass interpretation and conflicting errors
  whose combined bias is unknown.
- Combustion heat/fuel inference with a cited NIST comparison and a distinction
  between a magnitude ratio and measured capture efficiency.
- Neutralisation with unequal reagent amounts and a second non-1:1 base case.
- Dissolution heat signs, solution/water mass comparison and finite-concentration
  reference limitations.
- Back-titration aliquot scaling plus conductivity data, an estimated intersection
  and explicit limits on endpoint precision.

Numerical answers were recomputed with guard digits before writing the key.
The synthetic exercises have supplied assumptions and reporting conventions.
They are original formative drafts, not official NESA items, validated assessment
instruments or actual learner/practical evidence. Suggested timing and point
totals are planning choices. Teacher review and observed student responses
remain pending.

Each practical follow-up asks for a reviewed school procedure, appropriate
measurements/controls and a raw-data record. No unsupervised laboratory procedure
or practical-completion claim is supplied. Actual measurements and matching
reliable reference comparisons are still needed for the investigation verbs.

## Evidence and reproducibility

```powershell
npm run research:chemistry-curriculum
npm run audit:chemistry-curriculum
npm run test:source
```

The research command explicitly refreshes four public NESA sources and extracts
body paragraphs from the official DOCX using Python's standard library. Original
response bytes, URLs, retrieval time and SHA-256 values are retained in
`out/research/curriculum/chemistry-sources.json`. Biology cache and review files
are preserved. This is text extraction without office rendering.

The offline audit is pinned to the reviewed source hashes. A changed page,
document, extraction, extractor, selected original or draft requires regeneration
and review. Refreshing a source is not automatic approval of changed content or
transition dates. The extraction preserves linear equation text but not fraction,
superscript or layout structure. Use the original DOCX for structured equations;
the linearised molarity paragraph is deliberately excluded from proposed copy.

`out/review/curriculum/selected-chemistry.json` stores original/draft hashes,
published paragraph identifiers and parent/child references, scope distinctions,
existing-code checks, task hashes and unapplied metadata proposals.
`chemistry-queue.md` provides the human review queue. No proposal was applied
to production or draft lesson JSON.

Three curriculum tests check extension boundaries and unresolved delivery,
reject edited sources/unreviewed editions/duplicate evidence identifiers, and
verify nested conductivity content plus the extracted heat-capacity formula.
The full source suite now has 63 tests. Source recovery also includes these
reviews, learner tasks and the single explicitly allowed official Chemistry
DOCX. The restored offline audit runs alongside package validation and source
tests; exact evidence remains in the archive receipt and restore report.

The three tests use a small checked-in selection of reviewed paragraphs and
rebuild draft bytes in memory, so clean-checkout CI needs neither ignored caches
nor network access for tests. The actual offline audit still requires all four
cached official sources and checks the fixture against the full extraction.

## Remaining plan

C19 to C23 still require subject review and later integration, and C18 still
requires a complete media restore and separate storage. The next source-only
priority is the newly identified curriculum labelling gap and broader verification
of the eight quantitative component users, followed by an independently reviewed
school practical route and real learner responses. Missing artwork provenance
and 17 planned component cues also remain open. Media work stays deferred.
