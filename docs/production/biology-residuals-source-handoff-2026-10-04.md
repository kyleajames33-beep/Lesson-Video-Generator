# Biology residual source candidate

## Status and provenance

This source proposal began from reviewed commit
`013bb2984e1ac371c201dcd46733cb91850443ab` and is included in the cumulative
PR #38 source candidate. The preceding checkpoint `da8383f` contained 214
source tests; `013bb29` adds the self-contained baseline-fixture repair.

A read-only GitHub check on 5 October 2026 confirmed current main at
`ca58c157f0349b29774f93a76cd041aefab3a2a2` and draft PR #38 at
`858b8163d5ba199b8d39933e786c1b7fe88d09cc`. Both are ancestors of the
cumulative candidate. Actual main was checked separately from PR base metadata.
Publication of source proposals does not authorize merging, generating audio
or releasing videos.

Five historical Biology residual groups are addressed with complete isolated
source proposals: 50 scenes, 55 unapproved text takes and 15 reused diagram
instances. The original 308 catalogue JSON files, recordings and registrations
remain byte-for-byte unchanged. The historical semantic ledger is unchanged;
its findings remain open against the recorded catalogue. Prepared proposal
coverage is not scientific approval, audio readiness or release approval.

## Findings and complete-lesson corrections

| Key | Lesson | Scope |
| --- | --- | --- |
| A02 | Year 11 M2 L19, The Nephron | Some urea is reabsorbed/recycled despite net excretion. Physical filtration selectivity replaces claims of no selectivity or passage of every small molecule. Matched-interval amount balances replace an over-specific glucose/diabetes inference. |
| A03 | Year 11 M2 L20, Renal Dialysis | Haemodialysis solute diffusion, water ultrafiltration and convection are distinguished in every relevant scene. Universal matched-glucose/salt guarantees, treatment schedules, survival deadlines and transplant recommendations are removed. Source assessment is claim-specific. |
| A10 | Year 11 M1 L07, Fluid Mosaic Membrane | Integral means embedded; transmembrane means spanning. Definition, summary, answer and visual labels agree. Sodium transport and cholesterol predictions have appropriate scope. |
| A13 | Year 11 M2 L11, Potometer | Uptake is a conditional proxy; storage can change the bias direction. Linear bubble rate differs from volume flow. Unequal times, capillary calibration, repeats, controls and causal inference are treated separately. |
| A23 | Year 11 M1 L24, Meiosis | Possible chromosome-origin combinations across many meioses are separated from four products of one meiosis and from allele genotype counts. Uniqueness is not guaranteed. Non-sister crossover, named phases, two-pair modelling and life-cycle limits are explicit. |

These five were selected from substantive unresolved Biology entries, rather
than duplicating the enzyme, DNA-replication, recombinant-DNA or Chemistry
proposals already present at the base.

## Source evidence and curriculum

The machine-readable evidence record is
`scripts/data/biology-residuals-evidence.json`. Each selected claim has a
reviewed source location, evidence type, narrow support and inference limit.
Sources were checked on 4 October 2026; full scientific article byte caches
are not claimed.

- [Entova et al. 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6133551/)
  supplies a primary monotopic membrane-protein counterexample.
- [Lei et al. 2011](https://pubmed.ncbi.nlm.nih.gov/21849488/)
  investigates urea transport and recycling in mice. No mouse percentage is
  transferred into a universal human value.
- [Primary haemodialysis modelling](https://pmc.ncbi.nlm.nih.gov/articles/PMC6310262/)
  distinguishes ultrafiltration, diffusion and convection. The
  [NIDDK patient resource](https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis)
  supplies official treatment-scope context.
- [Ehrler, van Bavel and Nakayama 1966](https://academic.oup.com/plphys/article/41/1/71/6090660)
  reports absorption/transpiration lag and changing plant water storage. This
  supports possible divergence, not a measured bias for every school apparatus.
- [Bell et al. 2020](https://www.nature.com/articles/s41586-020-2347-0)
  reports variable meiotic outcomes in sampled human sperm. The explicit
  no-crossover countermodel and 2ⁿ calculations are independent mathematical
  constructions, not claims that the sample proves universal uniqueness.

The existing selected metadata targets Biology 11–12 (2025), Year 11.
The [official course guidance](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview/course)
starts Year 11 in Term 1 2027 and Year 12 in Term 4 2027, with first new HSC
in 2028. The outgoing 2017 course is still current in 2026. No current cohort
was silently retagged. The two official focus-area pages were inspected:
[Cells as the basis of life](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c)
and [Cells to systems](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa79a477bc).
Original selected wording and outcome metadata are preserved, including the
potometer lesson's absence of listed outcome codes. A new code was not invented.

The practical/model/secondary-investigation verbs require actual learner work,
records and teacher review. Viewing these source proposals or their synthetic
examples does not establish achievement. No complete syllabus coverage is claimed.

## Illustration preservation and two explicit opt-ins

The membrane, nephron, exchange, comparison and potometer illustrations are
reused through corrected props. Their component source is unchanged. Newly
staged diagram markers are source-review estimates, not retained narration
alignment. Some props are immediately visible for review; final measured
narration cues must be rebuilt.

Only `ReshuffleDiagram.tsx` and `AssortmentDiagram.tsx` add the optional boolean
`reviewedBiologyResiduals`. Omitted and false preserve baseline markup. True:

- shows a single chromatid in post-meiosis gamete glyphs;
- labels assortment displays as possible types;
- distinguishes later offspring variation from gamete formation.

Exact pre-change component source is retained in a pinned fixture, allowing
regression tests to run without hidden historical Git objects. Invalid explicit
flag types, schedules, mixed review flags and out-of-scope human pair counts fail closed.
Composition-based release holds apply to all five original/proposed lessons even
when files are renamed; the two diagram opt-ins also retain a visual-review hold. The tests use real React markup and Remotion numerical
functions with synthetic clock hooks. They are source/component checks, not
movie, screenshot, motion-clarity or phone-size visual approval.

## Reproduce and inspect

```sh
npm ci
npm run prepare:biology-residuals
npm run validate:biology-residuals
npm run test:biology-residuals
npm run test:source
npm run check:all
npm run test:production
```

The candidate was tested using the already installed dependency set through a
local symlink, not by a fresh network install. Package-lock is unchanged.
The five drafts, changes, pacing, text takes and reviews are generated beneath
`out/review/biology-residuals-lessons/`, along with a manifest and readable
`review.md`. Generated outputs are isolated and unregistered. No speech service,
paid image generation or final video rendering was invoked. Existing production
tests include local synthetic media/decoder smoke checks; these are not reviewed
lesson recordings.

Verified before independent review:

- 22 focused tests, including all 308 catalogue hashes and independent balances,
  rate conversions, repeat statistics, chromosome-combination enumeration and
  the no-crossover repeated-product model.
- 239 full source tests and 32 production tests passed.
- TypeScript, registry generation and schema validation for all 308 catalogue
  files passed. Existing catalogue pacing warnings remain.
- Five isolated drafts validate with no schema errors or narration-budget
  warnings. All 15 proposed diagrams have finite markup at five sampled frames.
- The two changed components preserve authored catalogue uses and omitted/false
  defaults at five frames against the pinned pre-change source.

## Required review and pre-audio work

The corrected Biology source was independently rechecked before integration
into the cumulative candidate, as recorded in the production-tools handoff.
Source review does not clear the production requirements below.

Teacher science and curriculum approval, artwork availability/provenance and
pixel inspection, visual fit, continuous motion and phone-size review are still
required. The prompt and answer text takes are split, but actual thinking silence,
answer/caption concealment and measured cue boundaries are not assembled.
Authorised final recording, alignment, caption rebuild, timing, listening and
full playback checks remain future work. No traceability entry is an executable
or approved audio-generation job.

## Bounded independent-review corrections

The first independent review of 911668d identified two source-level fixes.
Both are now implemented for focused re-review:

1. Nephron 60/40-unit interval calculations explicitly require unchanged tubular
   solute content and no other sources or sinks, including production or
   consumption. The assumptions appear in the teaching equation, diagram,
   worked question, quick check, answers, narration, split takes, evidence
   record and restricted calculation-helper contract. Without zero accumulation,
   the dynamic conservation equation requires an additional storage-change term.
2. Reviewed partial diagram schedules are merged with the exact component
   defaults before ordering is checked. Both validator and direct-component
   tests reject cross=1000 and one=1000, plus reverse-neighbour cases. Valid
   partial schedules remain accepted, and omitted/false legacy output remains
   identical, including for those previously accepted legacy inputs.

No new findings were added to the batch. The later production-tools handoff
records the independent recheck of this corrected Biology source. Teacher,
visual, narration and full-playback approvals remain outstanding.
