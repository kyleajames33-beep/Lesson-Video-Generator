# PR #38 reconciliation and source-only handoff

This report supersedes the production instructions in the September 30 audit
files. Those files remain historical evidence, including their old status and
323-scene counts. They are not current approval to generate narration.

## Preserved baseline and decisions

- Current main: `ca58c157f0349b29774f93a76cd041aefab3a2a2`.
- Historical draft #38: `858b8163d5ba199b8d39933e786c1b7fe88d09cc`.
- Their shared baseline: `b3796f22c311e30df3778732a9cd254cc5029a22`.
- All 308 current catalogue JSON files are retained, including
  the merged Biology #39 fixes, Chemistry timing updates and newer scientific
  models. Two medicine diagrams, the reference-band/food-chain diagrams
  and two polymer diagrams add narrow opt-ins with unchanged legacy markup. The later water-health batch adds guarded BOD, water-body, treatment-train and chlorine-speciation variants; defaults remain unchanged. No recorded narration, media wiring,
  scene duration or registry is changed by this reconciliation.
- Current main deliberately uses CRLF working files for selected catalogue
  lessons while Git stores LF. The ledger records both canonical Git blob IDs
  and exact working-byte hashes. Existing proposal source guards stay intact.
- All 125 historical changed files have dispositions. These include 108 lesson
  files, of which 105 contain the 323 historical narration edits. Exact old
  lesson bytes remain recoverable from the pinned parent commit; the optional
  archive export writes them with a `.historical` extension, never as production
  inputs or unvoiced drafts.

[Machine-readable file and scene ledger](pr38-reconciliation-2026-10-04.json)
contains current and historical fingerprints, exact scene IDs, conflict flags,
source links and per-lesson dispositions. Six misnamed semantic-review scene
references are now mapped to real current IDs, with the old aliases retained
in the evidence and a regression check covering all 99 groups. No historical
work is silently erased.

## What is actually resolved?

Narration byte inequality is not a defect classifier. Of the 323 old narration
changes, 222 Chemistry and 51 Biology scenes still have the old baseline text;
50 Biology records differ from both versions, including two old IDs replaced
by newer scenes. This does not mean those 50 scenes need to be rewritten.

The separate [semantic review](pr38-semantic-review-2026-10-04.json) assesses
claims and residual fields. It covers the 28 original finding groups and keeps
the 71 historical Chemistry groups distinct from the newer correction register,
whose C-number identifiers have a different meaning.

| Original audit groups | Current source disposition |
| --- | --- |
| 7 | Original narrow claim resolved in main |
| 16 | Mixed: preserve repaired fields, review specified residual claims |
| 4 | Still present: recombinant-DNA restrictions/insulin and two Chemistry claims |
| 1 | Cultural-source correspondence not fully verified in this pass |

All 71 Chemistry-specific groups now have source-level dispositions: 52 have
confirmed remaining claims, 10 mix valid existing qualifications with residual
problems, and 9 need narrower scope or clarification rather than wholesale
acceptance of the old audit. Individual unverified subclaims remain explicitly
identified. Counts are finding groups, not distinct defects, lessons or audio
jobs; some groups overlap. Selected Chemistry remedies are covered by existing or
updated complete unvoiced proposals; medicine curriculum attribution is now
covered for L11-L14 by four isolated enrichment proposals. Five further isolated scene amendments
cover four groups. The two enzyme lessons use newer Biology proposals; another
original finding is only partly covered by them. None is a production fix.

The seven resolved original claims are A01, A04, A06, A07, A14, A18 and A21.
Their scopes and remaining qualifications are recorded individually. A07's
illustrative-data provenance wording and A14's implied organ candidate set
still deserve editorial review; this is not whole-lesson approval.

A05, Biology Y11 M2 L25, now has a complete isolated proposal that preserves
its three repaired narration scenes while correcting the residual summary,
definitions, pH limits and diagrams. The recorded catalogue remains unchanged. Other residuals include diffusion-only dialysis wording,
urea left-behind wording, one-cell-type tissues and universal transmembrane
claims. Retain correct fields and fix the named residuals in isolated drafts;
do not restore historical full lessons over #39.

## Review entries are not an audio-generation queue

The 454 traceability entries comprise 323 historical narration intents, six
additional indicator scenes, eleven additional medicine scenes, sixteen additions
from priority-science drafts, seventeen from foundations Chemistry, twenty-seven
from water-health, nineteen from safety-medicine, thirty from analytical-inference,
and five current renderer gaps.

Two historical candidates still use partial scene amendments. Complete proposals
supersede nine historical candidates in medicine, nineteen in priority science,
eighteen in foundations Chemistry, eleven in water-health, ten in safety-medicine
and fourteen in analytical inference. Three of those fourteen analytical entries
previously used C17/C19 partial amendments; they now route to the full drafts.
These entries include resolved/superseded claims and two obsolete scene IDs.
They are not 454 unresolved scientific defects or recordings to buy.

Seven priority-science narration texts, three foundations texts, two water-health
texts, one safety-medicine text and three analytical-inference texts remain
byte-identical to main. Their conditional audio action is review for possible
reuse, never automatic regeneration.

The approved executable lists are empty: ready 0, generate 0, regenerate 0.
Each review entry includes reasons for withholding production and the source
hash it concerns. A conditional audio implication says only what would be
needed if that exact candidate were eventually adopted. Do not use it as a
batch manifest. Choose final source, consolidate overlapping proposals and
approve voice/model/settings before preparing a real generation queue.

## Bounded source corrections implemented

### Complete indicator lesson proposal

`prepare:indicator-corrections` builds one isolated nine-scene lesson with eight
revised narration scenes and nine proposed text takes. It preserves scene types,
artwork references and current timing floors. It fixes the entire teaching
throughline, not just the historical two-scene change:

- Replaces the unsubstantiated laboratory incident and chemically reversed hook
  with a clearly hypothetical ethanoic-acid/NaOH example.
- Separates stoichiometric equivalence from the observed endpoint.
- Removes universal exact-pH bracketing and automatic indicator-choice rules.
- Scopes neutral pH 7 to the stated 25-degree ideal model.
- Uses an original charge-balance calculation to test a stated volume tolerance.
- Separates quick-check prompt and answer planning, with a 45-second thinking
  target. This is not a measured silence or approved final boundary.

For 25.00 mL of 0.100 mol/L HCl with 0.100 mol/L NaOH, the ideal calculation gives
25.000995 mL at pH 8.3 and 25.050050 mL at pH 10.0. Neither endpoint pH is 7, but
the specified illustrative 0.10 mL tolerance is met. Independent forward
substitution checks the charge balance. No empirical precision is implied.

All inherited audio, captions, alignment and speech cues are removed from the
isolated proposal. The indicator diagram retains one newly authored stationary
midpoint keyframe at frame zero because its API requires a sweep. It is an
explicit placeholder, not narration alignment; rebuild and inspect the animated
sweep before any preview. The original hook image is retained but absent here,
so its visual consistency with the new hypothetical example is unverified.

Sources: [IUPAC titrimetric recommendations](https://publications.iupac.org/pac/pdf/1969/pdf/1803x0427.pdf),
[IUPAC titration principles](https://media.iupac.org/publications/analytical_compendium/Cha06sec2.pdf),
and the [authored OpenStax titration discussion](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations).
The 2017 Module 6 metadata is preserved. The new Chemistry Year 11 course starts
in 2028, unlike Biology Year 11 in 2027; neither course is relabelled here.
[NESA Chemistry](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/overview/course),
[NESA Biology](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview/course).

### Complete back-titration proposal

The newer quantitative package already states selective carbonate reaction and
full-sample accounting. The historical C36 check exposed one omitted assumption:
carbonate-derived dissolved CO2 must not contribute to the NaOH titre used to
infer remaining HCl. The updated isolated package states removal without acid
loss in the explanation, worked question, quick-check prompt and summary.
It does not prescribe a laboratory treatment or claim one is validated.
[University of California Santa Cruz authored laboratory manual](https://www.webassign.net/sample/ucsclgc1ed1/lab_4/manual.html).
Production JSON and recorded questions are unchanged. Rebuild the six-lesson
review package to obtain new export/take hashes; old exports must not be reused.

### Further precision and missing-data scene amendments

`prepare:reconciled-chemistry-scenes` builds five isolated scene proposals:

| Historical group | Scene amendment |
| --- | --- |
| C10 | Bromine worked example explicitly supplies mass-number approximations; 79.9862 rounds to 79.99, while measured isotope masses give a different atomic-weight estimate. |
| C17 | Titration concept distinguishes endpoint, equivalence, repeatability and accuracy; its worked question explicitly requests an unrounded mean and four significant figures, giving 0.07391 mol/L. |
| C19 | Back-calculation worked example retains the valid 0.0893 mol/L answer and repairs its incompatible rounded-intermediate equality. |
| C28 | Hess quick-check asks whether the data are sufficient. Hydrogen combustion data with consistent phases are necessary; the two supplied combustion equations cannot create an H2 reactant. |

The C17 reporting convention and C28 task prompt are visible question revisions.
All five proposals strip inherited media/cues and retain current duration floors.
The Hess prompt and feedback are planned separately with an unmeasured
40-second thinking target. These were partial amendments, not four complete
replacement lessons. The later analytical-inference package now integrates all
three C17/C19 amended scenes into their two complete lessons. The isotope and
Hess amendments remain partial. Their four full-source schema fixtures still contain
unreviewed original scenes and 15 inherited/proposal warnings; never render or
generate from those fixtures. Six tests cover drift refusal, media invalidation,
precision and the independent Hess stoichiometric-vector proof.

The broader semantic pass preserves useful qualifications already in main,
including multiple-bond naming priority, gradual alcohol solubility change,
thalidomide interconversion and restricted analytical claims. It does not replace
valid existing content just because an old audit described it too broadly.
Medicine mechanism/safety, ionisation and attribution repairs are now isolated
as described below. Remaining high-priority source work includes other ambiguous
identification exercises. The later water-health and safety-medicine batches
below address environmental-observation claims and the remaining L13/L14
medicine attribution and safety/science claims. Exact current
scene references and primary sources are in the semantic ledger.

### Complete medicine-enrichment proposals and opt-in diagrams

`prepare:medicine-lessons` and `validate:medicine-package` cover Module 8 L11
and L12 as two full isolated drafts: 22 scenes, 20 revised narrated scenes and
22 proposed text takes. The current production JSON is unchanged. Drafts retain
scene IDs/types, artwork references and duration floors while removing every
inherited media reference and speech cue. Quick-check prompt and feedback have
separate takes and estimated 35/40-second thinking plans.

The drafts replace the single-COOH pharmacophore claim, aspirin safety and
coating guarantees, ambiguous ibuprofen identification, absorption predictions,
and the 99.7% arithmetic. For supplied pKa 3.5, pH 1.5 gives 99.01% HA; pH 6.5
gives 99.90% A-. These are ideal single-site equilibrium fractions, not clinical
absorption estimates. The solubility chart uses explicitly invented 3 and
30 g/L teaching values, deriving the tenfold ratio instead of presenting
unsupported aspirin measurements. The original curriculum assertions are kept
in the review evidence, while isolated drafts explicitly say enrichment and
omit disputed dot-point/outcome claims. The later safety-medicine batch covers L13/L14. Prescribed spectroscopy
coverage remains a separate gap.

Primary evidence: [IUPAC pharmacophore terminology](https://goldbook.iupac.org/terms/view/11485),
[original aspirin enzyme experiments](https://pubmed.ncbi.nlm.nih.gov/810797/),
[formulation crossover study](https://pubmed.ncbi.nlm.nih.gov/3733281/),
[clinical gastrointestinal complication study](https://pubmed.ncbi.nlm.nih.gov/11228592/),
and [short-term endoscopic study](https://pubmed.ncbi.nlm.nih.gov/1888645/).
The last two examine different endpoints; less local damage cannot be treated
as proof of less serious clinical harm. No treatment recommendation is made.

The shared diagrams add a narrow `reviewedMedicine` opt-in for these proposals.
Default rendering preserves existing recorded lessons, including the uncorrected
legacy labels, which remain held. Schema checks reject unrelated modes,
contradictory fold labels, implicit sample values and out-of-range comparisons.
Actual React/SVG output tests check all nine modes and nine authored uses at
four frames against frozen main-baseline hashes (72 comparisons), plus visible
corrected labels, arithmetic and unchanged molecule paths. These are synthetic
frame/component-output checks, not pixel, font-fit, device or playback QA.
No existing source-package guard was refreshed.

An independent source/code review verified the main-baseline snapshots,
primary scientific evidence and package integrity. It found a filename-based
hold gap, now fixed and regression-tested: renamed/assembled JSON retains the
medicine hold through its stable composition identity. This review does not
replace teacher/specialist or actual visual/media approval.

The release preflight keeps both medicine composition identities under
`MEDICINE_SOURCE_REVIEW_PENDING` and opt-in diagrams under
`MEDICINE_VISUAL_REVIEW_PENDING`. A specialist/teacher must review the content;
actual image inspection, new audio/alignment/captions, cue rebuilding and visual
fit are still required. Neither legacy medicine content nor the new draft is
approved for release.

### Four consequential science/marking repairs

After confirming main still at `ca58c157` and #38 still at `858b816`, the next
bounded batch prepares four complete isolated drafts through
`prepare:priority-science-lessons` and `validate:priority-science-package`.
Together they contain 39 scenes, 35 narrated scenes, 28 narration changes and
39 unapproved text-take segments. Seven narrated scenes remain byte-identical,
including the three previously repaired temperature explanations. Inherited
media and custom speech cues are removed from the proposals, not the catalogue.

| Lesson | Confirmed corrections and preserved scope |
| --- | --- |
| Biology Y11 M2 L25 tolerance | Removes fixed 40/42/28-degree safety or survival rules, universal irreversible denaturation and invented pH survival bounds. Preserves repaired narration. Diagrams highlight reference bands without critical-boundary lines or a universal enzyme curve. |
| Biology Y12 M6 L16 recombinant DNA | Compatible ends replace the universal same-enzyme rule. Distinguishes copying, expression and processed product. The early insulin account uses synthetic A/B-chain sequences and fusion expression, rather than unprocessed human genomic DNA. |
| Chemistry Y11 M2 L8 concentration | 0.0500 g/L as nitrate equals 50.0 mg/L, matching the WHO 50 mg/L nitrate guideline rather than being tenfold lower. Corrects ppm density/reporting basis and the mg-to-g factor, including top-level exam-skill metadata. No overall water-safety conclusion. |
| Chemistry Y12 M8 L8 trace elements | 0.125 mg/L arsenic is 12.5 times the stated NHMRC 0.010 mg/L benchmark. Removes unsupported universal arsenic biomagnification, unverified Minamata measurements and universal AAS detection limits. Treatment choices use explicitly supplied validation evidence and residual-waste limits. |

Evidence includes [NIOSH heat physiology](https://www.cdc.gov/niosh/docs/2016-106/default.html),
[Anfinsen's original protein-folding account](https://www.nobelprize.org/uploads/2018/06/anfinsen-lecture.pdf),
[UW Medicine's arterial pH reference](https://dlmp.uw.edu/test-guide/view/PH),
[NEB compatible-end reference](https://www.neb.com/en-ca/tools-and-resources/selection-charts/compatible-cohesive-ends-and-generation-of-new-restriction-sites),
[original insulin research](https://pubmed.ncbi.nlm.nih.gov/85300/),
[WHO nitrate guidance](https://cdn.who.int/media/docs/default-source/wash-documents/water-safety-and-quality/chemical-fact-sheets-2022/nitrate-and-nitrite-fact-sheet-2022.pdf),
[NHMRC arsenic guideline](https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/physical-chemical-characteristics/arsenic),
[EPA's AAS method](https://www.epa.gov/sites/production/files/2015-08/documents/method_200-9_rev_2-2_1994.pdf),
and [Japan's Minamata institute](https://nimd.env.go.jp/archives/english/faq/medicine/).
Reference intervals vary by laboratory: UW explicitly supports the chosen
7.35–7.45 interval; MedlinePlus lists a narrower interval and is not cited as
support for the wider one. A reference interval does not establish prognosis.

The existing diagrams retain their layout and default output. Narrow opt-ins
remove asserted clinical cutoffs and distinguish water uptake from trophic
transfer in a qualitative methylmercury example. Sixteen additional actual
React/SVG baseline comparisons cover all current uses of these components.
The zone diagrams contain newly authored stationary frame-zero annotation
placeholders, not inherited speech timing. Other custom cues remain removed
and must be rebuilt before a meaningful preview. Source/schema tests cannot
establish font fit, artwork consistency, motion, audio or playback quality.

Independent review checked the scientific sources, calculations and exact
main-baseline markup. It caught and corrected concentration metadata missing
the mg-to-g factor and a pH citation/interval mismatch. No priority finding
remains from that bounded review; this is not clinical or media approval.

All four stable composition IDs carry `PRIORITY_SOURCE_REVIEW_PENDING`,
including renamed or assembled copies. Opt-in diagrams separately carry
`PRIORITY_VISUAL_REVIEW_PENDING`. Teacher/specialist and curriculum mapping
review remain open; the draft's retained syllabus metadata is not a new claim
of complete practical delivery or course coverage.

### Four foundations Chemistry proposals

`prepare:foundations-chemistry` and `validate:foundations-chemistry` cover
Y11 M4 L13 Gibbs free energy and CP3, Y12 M7 L21 addition polymers, and Y12 M6
L2 naming/indicators/acid reactions. They contain 37 scenes, 35 narrated scenes,
32 narration changes and 39 unapproved text-take segments. Three source
narrations are retained; one changed checkpoint narration is punctuation-only
and is explicitly identified because even that changes its provenance hash.

- Gibbs: distinguish standard reaction ΔG° from actual-composition ΔG. At
  constant T and p, ΔG = ΔG° + RT ln Q. Q is dimensionless and activity-based.
  Standard-reference calculations use Q = 1; rate and completion remain separate.
  The Haber example gives −33.097965 kJ/mol at 298.15 K, rounded to −33.1.
  T0 = 464.555... K assumes constant ΔH° and ΔS°. The ethene example gives
  −101.013295 kJ/mol and an explicitly approximate T0 ≈ 1.14 × 10³ K.
  Gibbs energy is not presented as heat released. An independent numerical
  counterexample shows the same negative ΔG° can accompany positive actual ΔG
  at a different Q.
- Polymers: scope the saturated repeat-unit rule to the selected monoalkenes.
  A 1,4-diene repeat can retain C=C. Reversing a monoalkene repeat removes its
  continuation bonds and restores C=C without adding H. The PVC thermal claim
  becomes formulation-dependent; recycling and biodegradation statements are
  qualified by material, process and environment.
- Acids/indicators: replace unsupported colour/aspirin inferences, the
  four-only strong-base list and the unsupported HNO3/Al hydrogen example.
  Use a balanced Mg/dilute HCl example and explicitly qualify oxidising acids,
  ammonia neutralisation and acid amount for carbonates. Naming is scoped to
  common aqueous inorganic examples. Phenolphthalein can fade in alkaline
  solution; pH 12 alone establishes neither permanent pink nor instantaneous
  colourlessness. Observation time and conditions matter.

Primary evidence is recorded with limits in
`scripts/data/foundations-chemistry-evidence.json`: [IUPAC standard equilibrium
constant](https://goldbook.iupac.org/terms/view/S05915), [original diene
study](https://pubs.rsc.org/en/content/articlehtml/2021/ra/d1ra02467a), [PVC
plasticisation experiments](https://pubs.acs.org/doi/10.1021/acsomega.0c00826),
[specified PVC thermal measurements](https://www.hitachi-hightech.com/file/global/pdf/products/science/appli/ana/thermal/application_DMS_008e.pdf),
[EPA recycling limitations](https://www.epa.gov/plastics/advanced-recycling-plastics),
[original alkaline fading study](https://pubs.acs.org/doi/10.1021/ed066p725),
[ILO/WHO LiOH identification](https://www.inchem.org/documents/icsc/icsc/eics0913.htm),
and [UW's nitric-acid/copper observation](https://demolab.chem.wisc.edu/types-of-chemical-reactions-nitric-acid-acts-on-copper/).
Where a direct source returned 403, the evidence record distinguishes available
indexed official text from unavailable full text. No denied route was bypassed,
and no rate constants or exact time-dependent colour were invented.

The 2017 curriculum scope is retained and tied to the pinned official syllabus
paragraphs. RT ln Q is included as a scientific qualification, not an invented
additional Year 11 calculation requirement. Stored teacher-summary dot points
are not claimed verbatim. Practical investigations, learner outcomes and formal
marking suitability remain unapproved.

The polymer `reviewedPolymer` flag is limited to properties and the polyethylene
thermoplastic example. Shared default output remains unchanged. Actual
React/SVG tests compare all four current uses and four default/mode cases at
five frames with components loaded directly from preserved main: 40 baseline
comparisons, plus false-flag equivalence. Corrected acid diagrams are also
checked for finite actual markup and consistent question/answer labels. These
checks do not establish pixel layout, font fit, motion or playback readiness.
The indicator remains a qualitative colour guide; stationary frame-zero acid
annotations are new placeholders, not inherited or measured speech cues.

All four stable composition identities, including renamed assembled files,
carry `FOUNDATIONS_SOURCE_REVIEW_PENDING`; polymer opt-ins additionally carry
`FOUNDATIONS_VISUAL_REVIEW_PENDING`. Independent review caught a sorter
question/bin mismatch and a missing coefficient in one visible magnesium
reaction bullet. Both are corrected and regression-tested. The final independent review found
no outstanding priority issue in this bounded source candidate; it does not
replace teacher or actual visual/audio approval.

### Source-verified remaining claims

The semantic ledger includes current scene references and refreshed sources for:

- The [current SI mole definition](https://www.bipm.org/en/si-base-units/mole).
- [Compatible ends made by different restriction enzymes](https://www.neb.com/en-ca/tools-and-resources/selection-charts/compatible-cohesive-ends-and-generation-of-new-restriction-sites).
- [Original synthetic insulin gene expression](https://pubmed.ncbi.nlm.nih.gov/85300/).
- [WHO nitrate guidance](https://cdn.who.int/media/docs/default-source/wash-documents/water-safety-and-quality/chemical-fact-sheets-2022/nitrate-and-nitrite-fact-sheet-2022.pdf): 50 mg/L as nitrate, with no water-safety conclusion from one analyte alone.
- [NHMRC arsenic guidance](https://www.nhmrc.gov.au/sites/default/files/documents/attachments/publications/Australian-drinking-water-guidelines-6-Version%204.pdf): 0.01 mg/L, so 0.125 mg/L is 12.5 times this value.
- [Published alkaline phenolphthalein fading](https://pubs.acs.org/doi/10.1021/ed066p725), contradicting a universal denial of fading.

These are reviewed remaining source issues, not newly applied production edits.

## Renderer gaps and other open PRs

PR #1's diagram integration is not in current main. Five authored diagrams are
ignored by the current WorkedExample/Summary components:

| Lesson | Scene | Diagram |
| --- | --- | --- |
| Biology Y12 M5 L11 translation | summary | table |
| Biology Y12 M5 L13 sources of genetic variation | summary | table |
| Biology Y12 M5 L14 Mendelian patterns | worked-example | table |
| Biology Y12 M5 L15 non-Mendelian patterns | worked-example | table |
| Biology Y12 M5 L16 frequency data/SNP analysis | worked-example | bar chart |

The release preflight now blocks these with `DIAGRAM_HOST_UNSUPPORTED`. This
repairs the gate, not their layouts. No old layout patch is copied, and no
component render is claimed verified. A later scoped integration must retain
current text fitting, assets and timeline work and inspect real component output.
The legacy `check-render-readiness.mjs` delegates to the stronger current gate,
including JSON output; failed inputs cannot return a stale previous report.

PR #35 is registry-only; the current generated 308-lesson registry is already
preserved. PRs #36 and #37 overlap the historical #38 work and should not be
merged independently. This continuation stays in #38; no new PR is needed.

### Four complete water/health source proposals

`prepare:water-health` and `validate:water-health` cover four complete isolated
lessons: Y12 M6 L13 buffers, M8 L7 dissolved oxygen/BOD, M8 L9 nutrient pollution
and M8 L10 water treatment. They contain 42 scenes, 38 narrated scenes,
36 narration changes and 42 unapproved text-take segments. Two unchanged
narrations retain conditional reuse review. Production JSON remains unchanged.

This bounded batch addresses C33, C57, C59, C60 and C71 throughout the teaching
sequence, including contradictory hooks, summaries and diagrams:

- The physiological apparent pK near 6.1 is used with dissolved CO2, rather
  than intact H2CO3 alone. Acidemia is separated from an acidifying process;
  a ratio alone cannot identify the cause. Unsupported blood-pH survival
  guarantees and invented numerical beaker results are removed. Buffer
  components do neutralise added strong acid/base, despite the old false
  distinction between neutralisation and pH resistance. Independent arithmetic
  also corrects premature rounding: the supplied acetate example gives
  approximately 4.568636, reported as 4.57, then 4.639992, reported as 4.64.
- The BOD assay states undiluted/unseeded assumptions for simple subtraction,
  distinguishes dilution and seed corrections, and identifies possible
  nitrification. The 3.6 mg/L answer is retained. Unsupported universal
  pollution bands and a literal fish-kill forecast are removed from copy and
  the opt-in diagram. The valid 6.40 mg/L Winkler calculation is preserved.
- Nutrient snapshot values are explicitly invented teaching data. They support
  relative concern at C, not invented blooms, dead fish or a time sequence.
  Living algae respire; decomposition also consumes oxygen. Outcomes depend
  on the oxygen balance, and toxins are a distinct possible mechanism.
  Unsupported Toledo and spending claims are removed. Ion chromatography is
  an enrichment example with commonly conductivity-based detection, not a
  named requirement or a universal precision improvement over colorimetry.
- Treatment decisions require pathogen targets, conditions and adequate
  concentration-contact time. Monochloramine can provide primary disinfection
  where suitable validated conditions are achieved before the first customer;
  its persistent residual does not prove that requirement. Chlorinated DBP
  reduction is balanced against NDMA and nitrification risks. The original
  chlorination diagram's claim that dose does not matter is corrected only
  when explicitly opted in. Unsupported Flint costs and a universal safety
  limit are removed rather than substituted with another anecdote.

Sources and exact published curriculum paragraph hashes are in
`scripts/data/water-health-evidence.json`. The official 2017 fixture retains
its existing SHA-256 and is extended with relevant paragraph excerpts. The
three environmental drafts retain the verified monitoring dot point while
preserving unsupported original attributions in review evidence. No practical
completion, clinical judgement, operational water-treatment procedure or
2025 remapping is claimed.

The unsuitable open-blood beaker/solver illustration is replaced only inside
that draft by the existing card layout. Acetate diagrams retain static initial
states with the stale action and working cues removed, pending a measured
animation rebuild. Other proposed diagrams use unmeasured fallback timing.
The four new component opt-ins preserve default React/SVG output and retained
apparatus geometry; the inaccurate BOD classification scale is intentionally
removed from the opt-in. Synthetic markup checks cannot establish actual
font fit, pixel appearance, cue alignment, device behavior or playback.

An independent source/integration review verified the exact four draft hashes,
primary/official evidence, unchanged catalogue hashes and opt-in tests. It found
a retained exam-target claim and a lesson-level reconciliation route mismatch;
both are corrected and regression-checked. The review does not replace teacher
or visual/media approval.

Composition-based source holds survive renamed/assembled lessons, and opt-in
visual holds prevent source review from being treated as release approval.
All ready/generate/regenerate lists remain empty. The 454 ledger entries are
traceability records, not 454 confirmed defects or recordings to purchase.

### Separation safety and remaining medicine-enrichment proposals

`prepare:safety-medicine` and `validate:safety-medicine` prepare/check three
complete isolated lessons: Y11 M1 L3 physical separation, Y12 M8 L13 chirality
and Y12 M8 L14 delivery. They contain 32 scenes, 29 narrated scenes,
28 narration changes and 32 unapproved text-take segments. The correctly
qualified chiral-receptor narration is retained byte-for-byte; reuse still
requires provenance verification. All recorded catalogue bytes are preserved.

- C02: the distillation-to-dryness instruction is removed. The conceptual
  sequence stops at the approved point with liquid remaining and treats later
  salt recovery as a separate teacher-approved operation. It is not a complete
  practical procedure. NaCl's modest temperature-solubility dependence,
  filter-pore limitations, impurity retention and yield/purity tradeoffs are
  carried through the lesson. The supplied ideal KNO3 result remains 49 g.
- C63: thalidomide R/S interconversion is supported by the direct human study,
  Eriksson et al. 1995 (PMID 7702998), rather than confusing it with the later
  mechanistic paper (PMID 9860497). The safe-R/harmful-S guarantee is removed.
  The reviewed diagram's two status stamps become neutral assessment prompts.
  Zero optical rotation establishes neither purity nor a unique 50:50 ratio
  without analyte, reference, concentration, path-length, condition and
  uncertainty assumptions. R/S configuration is not the sign of rotation.
- C64: original Lipinski risk thresholds use strictly exceeded boundaries,
  so mass 500, calculated logP 5, five donors and ten acceptors are not violations.
  The rule remains a heuristic. logP is a logarithm, rather than the raw
  concentration ratio; logD has a specified pH. Codeine has intrinsic activity,
  with morphine formation contributing to effects. A patch avoids initial
  intestinal/portal first-pass exposure, not subsequent liver metabolism.
  Skin delivery needs dose, permeability, formulation and performance evidence;
  an oral formulation can also provide controlled release. The worked task
  now recognises insufficient information instead of prescribing a route.
- C67: all four medicine lessons L11-L14 now have isolated enrichment proposals
  that preserve disputed original metadata in evidence and remove invented
  mandatory dot points/outcomes from the draft. This does not supply the missing
  prescribed IR, NMR or mass-spectrometry teaching.

Primary/official links and exact official syllabus paragraph hashes are in
`scripts/data/safety-medicine-evidence.json`. The two medicine draft schema
warnings deliberately reflect absent dot-point tracking, not an invented
replacement syllabus claim. No medication choice, dose, patient advice or
clinical safety certification is provided.

Independent review verified the exact three final draft hashes, primary safety
and medicine evidence, all 308 unchanged catalogue hashes and non-executable
ledger routes. It caught two overbroad enantiomer-property labels, a quick-check
question/answer scope mismatch and a stale C67 assessment. Each was corrected
and rechecked. Earlier isolated SVG contact sheets preceded the final label
changes and are not final visual evidence; actual lesson/artwork and playback
approval remain pending.

### Five complete analytical-inference proposals

`prepare:analytical-inference` and `validate:analytical-inference` prepare/check
five complete isolated lessons: Year 11 M2 L10 volumetric analysis and L17 back
calculations, Year 12 M6 L16 titration curves and L17 mastery, and M8 L3 qualitative
ion tests. Together they contain 49 scenes, 44 narrated scenes, 41 narration
changes and 49 unapproved text-take segments. Three unchanged narrations retain
conditional provenance review, not automatic regeneration.

C17 and C19 now have whole-lesson integration. Their previously reviewed
concept/worked-example narration and numerical working are imported exactly;
no original guard is refreshed. The old partial artifacts remain historical
review evidence, while both lesson and scene ledger routes point to the
complete package. The stale partial-integration blocker is removed only for
those full replacements; teacher, visual and media holds remain.

The batch carries these corrections through metadata, visible copy, questions,
answers, summaries and associated diagrams:

- Repeatability is distinguished from accuracy, and endpoint from stoichiometric
  equivalence. Titre acceptance and significant-figure conventions are explicit.
  The C17 result is 0.07391 mol/L; C19 retains 0.0893 mol/L with consistent working.
- The back-calculation lesson no longer says never divide by a titre. Its own
  carbonate example contains the unknown acid in the burette, so the acid titre
  is the correct denominator. Sodium carbonate is the standard in that example.
  Pure anhydrous material, quantitative preparation and complete-neutralisation
  assumptions are explicit; the final 0.102 mol/L result remains correct.
- C35's pH-bound averaging is rejected in source and reviewed diagram schema.
  For 25.00 mL of 0.100 M HA, pKa 4.74, titrated with 0.100 M NaOH in the ideal
  25-degree model, charge balance gives pH 8.719541 at equivalence and 4.740474
  at half-equivalence. A separate 30.00 mL, pKa 4.20 example gives 8.449747 and
  4.201638. The half-volume relation is approximate and system-specific.
- Curve shapes do not uniquely identify every sample. Concentration, titration
  direction and temperature matter. Strong acid titrated by weak base can form
  a post-equivalence buffer, and a pH meter does not manufacture a sharp chemical
  transition. Equivalence is not defined by an inflection or a selected jump.
- Indicator suitability uses the actual endpoint volume and an explicit tolerance.
  A supplied pH-9 endpoint in the 25.00 mL HCl/NaOH model has about +0.00500 mL
  error, despite differing from neutral equivalence pH. A different endpoint can
  produce a different error. No universal laboratory tolerance is prescribed.
- C54's white-precipitate inference becomes conditional: the worked example has
  explicit candidates and valid controls, while the quiz recognises that Mg2+
  and sulfate are not uniquely established. Fresh aliquots, suitable acid choice,
  reagent-introduced contamination and gas confirmation are explicit. Nobody
  is instructed to identify gases by direct smell. Known-ion diagrams illustrate
  conditional evidence; sodium masking and emitting-species wording are qualified.

Source evidence is split between `analytical-titration-evidence.json` and
`analytical-qualitative-evidence.json`. The NESA source hierarchy is retained,
including the prescribed cation/anion lists. Selected examples do not certify
complete ion coverage or a completed practical. The weak/weak titration remains
an explicitly bounded comparison, not an invented additional named requirement.

The reviewed curve uses the unchanged charge-balance solver. Incorrect old
`jumpRead`, automatic indicator verdicts and unsupported wrong-answer markers
are rejected. New zero-time series/reading markers are source-review placeholders,
not inherited or measured narration alignment. Final cues, drawings, image fit,
listening and continuous playback remain unapproved. All 308 catalogue files
and default renderer output are preserved.

Separate independent reviewers checked the four titration drafts/integration
and the qualitative science. Titration review verified the unchanged solver
at 28 independent charge-balance points and retained C17/C19 content. The
qualitative review verified controlled candidate reasoning, safe gas evidence
and a live official syllabus hash. Its suggested limewater observation was
added to narration, visible copy and accessible diagram text, then rechecked.
Direct-source retrieval failures are disclosed in evidence rather than reported
as full document reads. These are source/component checks, not practical,
teacher, image-fit, audio or playback approval.

### Remaining source-work inventory

The [source-remedy inventory](source-remedy-inventory-2026-10-04.json) ties its
classification to the exact semantic-ledger hash and covers all 99 historical
finding groups. It separates source preparation from production correction:

- 7 original narrow claims are already resolved in main.
- 31 finding groups have complete isolated source proposals.
- 1 additional named claim has a partial scene remedy (C28),
  with whole-lesson integration still pending. C17/C19 are now integrated.
- 51 groups still contain substantive unaddressed claims or residual fields.
- 8 further groups need narrower qualifications; 1 correspondence claim
  remains unverified.

These are overlapping finding groups, not distinct defects, lessons or audio
jobs. C10 remains substantive because its calculation amendment does not fix
its isotope-behaviour claim. The estimate uses verified unchanged source and
existing claim-level assessments; it is not a fresh independent re-audit of
all groups. High-value remaining work includes equilibrium/titration inference,
ambiguous identification exercises, basic SI/phase-change claims and the
remaining Biology definitions/physiology contradictions. The eight narrower
qualification groups should not be promoted into large rewrites simply to
increase a correction count. Teacher/media production remains held for every
isolated proposal regardless of source-remedy category.

## Verification and limits

- `check:all`: registry generation, TypeScript and all 308 lesson validators
  pass, with inherited timing/presentation warnings.
- `test:source`: 214 tests pass after reconciliation, water-health component-output
  checks and semantic-ledger checks.
- `test:production`: 32 tests pass, including the unsupported-host guard and
  old-command JSON/error behavior. Existing synthetic media-fixture tests run;
  no user's recordings are generated, opened or decoded.
- Indicator package: 9 scenes, 8 narrated scenes, 9 text takes; schema passes.
- Updated quantitative package: 6 lessons, 53 text takes, zero schema errors
  or narration-budget warnings. Pacing remains estimated.
- The existing 3-lesson Biology and 6-lesson thermochemistry packages also
  regenerate and validate against freshly retrieved, still-matching pinned
  curriculum sources with zero errors/warnings. No guard hashes changed.
- Medicine package: 2 lessons, 22 scenes, 20 narrated scenes, 22 text takes.
  Schema passes with two deliberate missing-dot-point mapping warnings.
- All 308 catalogue working hashes and canonical Git identities match main.
  Fourteen opt-in diagram components and their pure validation/model helpers
  change under `src/`. The earlier 128 legacy/default comparisons still pass;
  the water-health suite adds 155 main-baseline cases, including some overlapping
  ionisation cases, plus explicit-false and previous medicine-candidate checks.
  The safety-medicine suite adds 80 cases across seven authored uses and nine
  default/mode cases at five frames, checked against both main and the prior
  local checkpoint, including explicit false. The two misleading thalidomide
  status stamps are the intentional safety-medicine reviewed geometry exception.
  Analytical tests add 90 main/prior-baseline cases (six authored uses and
  twelve defaults at five frames), plus all six generated reviewed uses. The
  existing charge-balance solver and shared illustration dependencies remain
  byte-identical. Source props intentionally remove incorrect old jump/answer
  markers; preservation concerns omitted/false legacy output, not those errors.
- Both readiness commands return the same local 308-lesson report. This checkout
  has no ignored production audio and assets, so it cannot establish physical
  readiness on the media-owning computer. Locally 0 pass; the report records
  2,152 unwired narration occurrences, 638 missing referenced audio, 630 missing
  media occurrences, 276 intro-caption errors, 478 punctuation occurrences and
  five unsupported hosts, two medicine source-review holds and four
  priority-science source-review holds, four foundations source-review holds and four water-health source-review holds and three safety-medicine source-review holds and five analytical source-review holds. Counts overlap and are not distinct media totals.
- The narration-provenance audit finds 643 missing alignment sidecars here.
  Earlier main's media-owning audit is historical evidence, not reverified.
- Actual render, continuous/device QA, artwork review, listening, pronunciation
  and final speech/caption/animation alignment have not run. No browser socket
  restriction was bypassed. No ElevenLabs calls, credits, final renders,
  deployments or main-branch merge occur in this work.

## Reproduce

```sh
npm ci
npm run check:all
npm run test:source
npm run test:production
npm run prepare:medicine-lessons
npm run validate:medicine-package
npm run test:medicine-lessons
npm run prepare:priority-science-lessons
npm run validate:priority-science-package
npm run test:priority-science
npm run prepare:foundations-chemistry
npm run validate:foundations-chemistry
npm run test:foundations-chemistry
npm run prepare:water-health
npm run validate:water-health
npm run test:water-health
npm run prepare:safety-medicine
npm run validate:safety-medicine
npm run test:safety-medicine
npm run prepare:analytical-inference
npm run validate:analytical-inference
npm run test:analytical-inference
npm run audit:reconciliation -- --check-snapshot
npm run prepare:indicator-corrections
npm run validate:indicator-package
npm run prepare:quantitative-lessons
npm run validate:quantitative-package
npm run prepare:reconciled-chemistry-scenes
npm run validate:reconciled-chemistry-scenes
node scripts/release-preflight.mjs --all --json
```

The historical audit needs a full Git history containing the three pinned
commits. It refuses changed catalogue content rather than silently refreshing
source guards. `--export-historical` writes exact historical review bytes under
`out/review/pr38-reconciliation/historical-source`; those files must never be
passed to audio or rendering commands. Reviewed current proposals are generated
separately under the named package commands.
