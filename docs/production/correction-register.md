# Production correction register

Opened 2 October 2026. Findings are based on the [research audit](../research/hsc-video-production-standard-2026-10-02.md) and [current factual inventory](catalogue-summary.md). No lesson, recording or artwork has been repaired by creating this register. Existing publication status is unknown.

Severity: **P0** blocks release of affected material because science or playback could mislead/fail. **P1** blocks the selected production package until resolved. **P2** is a contextual review/improvement. Priorities describe affected scope, not a demand to rebuild the whole catalogue.

| ID | Priority and scope | Finding and source | Required action and completion evidence | Owner/status |
| --- | --- | --- | --- | --- |
| C01 | P0, molar mass original | `src/data/chemistry-y11-m2-l2-molar-mass.json`: compound arithmetic, supplied oxygen values and reporting are inconsistent | Independent recalculation from one supplied value set; compound total 234.044 then 234.04 g mol⁻¹ under the stated convention; source, displayed result and fresh narration agree | Agent prepares; science reviewer confirms. Open |
| C02 | P0, molar mass original | Historical mole definition and overstrong unit-check explanation | Use current fixed-entity definition where definition is taught; distinguish dimensionless relative atomic mass from molar mass; units support but do not prove the whole answer. New speech/alignment/captions for changed passages | Agent/teacher. Open |
| C03 | P0, limiting reagents | `chemistry-y11-m2-l13-limiting-reagents.json`: Cl₂ value 70.91 conflicts with supplied Cl 35.45; coefficient-normalised quiz ratio described as nearly four rather than about two | Recompute examples retaining guard digits; explain raw moles versus capacity; make toastie recipe explicit; rebuild affected narration and dependent timings | Agent/teacher. Open |
| C04 | P0, practical inference | `biology-y11-m1-l17-enzyme-activity-practical.json`: unjustified 37 °C optimum, repeats guarantee reliability, overly conclusive boiled-control claim | Specify enzyme source/conditions; qualify hypotheses and inference; distinguish variation/systematic error and tissue mass/active enzyme. Reviewer signs scientific rationale | Agent/teacher. Open |
| C05 | P0, molecular model scope | DNA lesson and `HdDnaReplication.tsx`: pairing presented as complete explanation of fidelity; moving model omits several named enzymes | Correct fidelity explanation; identify model scope/omissions; verify synthesis direction, pairing and fragments in continuous playback; add capability only if objective requires it | Agent/teacher plus motion reviewer. Open |
| C06 | P0, selected enzyme graph account | `biology-y11-m1-l18-reading-enzyme-graphs.json`: universal permanence, saturation and “only” claims exceed model | Bound account to assay conditions; separate observation/model/test; align teaching caption with spoken misconceptions; regenerate changed speech | Agent/teacher. Open |
| C07 | P0 before Physics component use | `Circuit3DDiagram.tsx` supports voltmeter in one series ring | Add a correct branch or constrain supported use; validate topology, polarity and current model; approve representative continuous playback | Agent/Physics reviewer. Open, no Physics lesson found |
| C08 | P1 before orbit model use | `OrbitDiagram.tsx` uses labelled circular trajectories | Document limited model and choose an objective it can represent; avoid implying literal modern trajectories; review narration and caption interpretation | Agent/Physics reviewer. Open |
| C09 | P1, every selected response task | `QuickCheckSlide.tsx` answer fade starts before nominal answerStart; prompts do not establish actual silence | Verify earliest answer cue; enforce measured prompt-end to answer interval; test audio and visual boundary, including transitions | Agent. Open, T1/T2 |
| C10 | P1, selected accessible exports | `export-captions-srt.mjs` covers scene tokens but not narrated intro; teaching summary guidance conflicts with faithful captions | Cover actual speech and sound in a distinct track; inspect scientific tokens, assembled gap offsets and intro; caption-on/off review | Agent/access reviewer. Open, T3/T4 |
| C11 | P1, dependency system | Text filename hash does not cover voice/model/settings/dictionary or final audio | Version final package and invalidate affected downstream alignment/captions/cues on input change; no reuse of old recording for new text | Agent. Open, T5 |
| C12 | P1, one additional diagnostic | `Chemistry-Y12-M6-L9`, hook: inventory found a filename/current-text hash mismatch | Inspect exact text/take provenance; repair wiring only if a correct matching take exists, otherwise regenerate later; no automatic silent change to narration | Agent/listening reviewer. Open, diagnostic not listened |
| C13 | P1, cohort mapping | Biology source has new-format codes with legacy-shaped filenames; exact new content mapping remains pending | Verify official content and applicable cohort before selected release; preserve assets separately from course mapping | Teacher/agent. Open |
| C14 | P1, approval records | Existing readiness scores and retrospective files may be automated/template-only | Keep factual stages separate; require named actual review evidence for selected release; do not promote using scene quotas or fixed length | Agent/release reviewer. Open |
| C15 | P2, openings | Nine-second stinger precedes hook-first scene JSON | Trial an explicit opening option later; compare useful opening and retained identity; verify intro/caption timeline | Agent/designer. Planned after required timeline fixes |
| C16 | P1/P2, selected copy | Unsupported marking/prevalence claims and U+2014 occur beyond audited samples | Inspect selected flagged fields in context; remove unsupported claims; rebuild audio/alignment/captions whenever spoken copy changes | Agent/editor. Open batch queue |
| C17 | P1, selected device/access review | Small notation/caption collisions cannot be cleared from source font sizes or sampled stills | Review full selected exports on actual phone with captions/controls; preserve labels and colour-independent meaning | Device reviewer/agent. Pending exports |
| C18 | P1 before repeatable batch | Referenced art provenance and media restore evidence are incomplete | Record source/licence/tool/creator and review scope; archive selected package and perform restore check | Agent/project owner. Pending selected release |

## Diagnostic triage baseline

The first run found 6,746 occurrences. This count includes unfinished drafts and repeat flags in multiple fields; it is not 6,746 confirmed defects. For refreshable counts use [catalogue-status.json](catalogue-status.json).

| Queue | First-run evidence | Handling |
| --- | --- | --- |
| Copy punctuation | 478 fields across 120 lessons | Selected spoken-copy fixes require fresh media; no blanket text replacement |
| Possible unsupported claims | 63 fields across 38 lessons | Human context check, including whether a passage critiques rather than asserts a claim |
| Missing referenced images | 232 references across 229 lessons | Inspect intended asset and registration; reuse suitable existing work before creating art |
| Missing alignment sidecars for present audio | 224 segments across 32 lessons | Locate provenance or rebuild alignment from the actual selected recording; check decoding/listening separately |
| Missing timed scene captions | 2,746 segments | Build only after selected final audio/timeline; presence is not fidelity |
| Intro captions needing review | 276 segments | Local tokens absent; inspect actual export path before concluding exported captions are absent |
| Unwired spoken text | 2,423 segments | Production backlog, not an instruction to generate all now |
| Unverified response holds | 303 scenes | Verify selected prompts against actual earliest visible/audible answer |

All 308 lessons remain triage-pending in the factual inventory. That deliberately avoids declaring untouched material approved or forcing every lesson into rework. The first manual dispositions should cover molar mass, limiting reagents, DNA, enzyme practical and enzyme graphs. A recorded/rendered lesson can still need scientific repair.

## Closing a correction

Record affected lesson/scene, before/after source hashes, rationale, reviewer/date and evidence. For changed speech, record new take/audio, alignment/caption hashes and playback findings. Mark scope clearly: a corrected isolated draft does not close an error in the original release. Do not change open items to complete because a planned fix appears in a proposal.

Next action: prepare and review the corrected isolated molar-mass package, then implement C09 to C11 on that path. Continue catalogue triage independently while expert review, listening and learner recruitment are arranged.

## Engineering update, 3 October 2026

C09 now has measured scene assembly, real PCM response gaps and an explicit
answer boundary. A 450-frame labelled tone fixture was rendered through the
actual quick-check component; extracted frames verify no solution before the
boundary. Catalogue response tasks and final narrated pilot review stay open.

C10 now uses one renderer/export timeline. Intro coverage, delayed narration,
overlapping transitions and faithful Unicode captions are supported. Transcript
VTT exports aligned speech, with missing coverage reported explicitly. Actual
selected scientific speech and caption/device review remain open.

C11 now has immutable assembly fingerprints, source/take/alignment/settings
dependency checks, render input/output records and review evidence tied to the
package hash. These are version checks, not listening or scientific approval.
The final v3 molar mass manifest has 13 segments; all 13 final recording paths
were missing when checked. Earlier auditions are not substitutes for new text.

See [playback-and-release.md](playback-and-release.md) for executable commands,
tests and limits. None of these engineering changes closes the original lesson's
scientific corrections or declares a catalogue lesson released.

## Scientific source update, 3 October 2026

C03 to C06 now have isolated, unvoiced correction drafts and scene-level
before/after copy records. Original lessons and media are unchanged. Source
hash checks prevent these revisions being reapplied to newer source without
review. Scientific review and all final media/model verification remain open.

The [source review and evidence](science-audit-2026-10-03.md) records independent
calculations, four priority dispositions, the 308-lesson diagnostic screen and
its limitations. The screen found 661 occurrences across 172 lessons, including
478 punctuation fields. This is a narrower rule set than the original factual
inventory, so its count does not replace or contradict the earlier 6,746 flags.

Additional reviewed queue items:

| ID | Priority and scope | Finding | Required action and status |
| --- | --- | --- | --- |
| C19 | P2, selected Chemistry working | Empirical-formula quiz uses 6.67 for 80 / 12.01; gravimetric working substitutes rounded moles into an equality that needs guard digits | Align supplied, spoken and displayed values. Preserve valid final formula/mass. Details and recalculation in the source review. Open; no production copy changed |
| C20 | P1 before selected calorimetry release | Combustion/dissolution mole intermediates are misrounded; reporting precision and idealised heat-balance assumptions are unstated. Neutralisation caption omits explicit J-to-kJ conversion | Establish assumptions and reporting convention, use guard digits, make conversion visible, then rebuild affected speech/captions. Open |
| C21 | P1 before selected back-titration release | 63.8% follows unrounded 395.395 mg, not the displayed 395 mg substitution. Spoken claim that the tablet is short of its label has no label value in the question | Expose guard-digit working and remove or substantiate the label inference. Final 63.8% is not itself an arithmetic error. Open |
| C22 | P1 before selected quantitative preview/release | Calorimetry default water shortcut, unscoped conductometric labels/motion and undefined required reveal cues identified | Shared defaults/model checks repaired at source level; eight quantitative catalogue uses inventoried. Original custom shortcut, final cue alignment and science/visual review remain open. [Repair evidence](quantitative-model-repairs-2026-10-03.md) |
| C23 | P1 before selected Chemistry curriculum claims/release | Year 11 gravimetry has an invented Module 2 point; named neutralisation practical is Year 12 Module 6; three calorimetry sources lack outcomes. Nine of ten stored statements are paraphrases/scope proposals | Six official-source mappings and unapplied metadata proposals prepared. Teacher confirms extension labels, cohort and task evidence before integration. [Curriculum evidence](quantitative-curriculum-and-delivery-2026-10-03.md). Open |
| C24 | P1 before Year 11 Module 4 L1 release | Enthalpy described as stored heat; written-equation scaling and per-substance molar values need distinct bases | Isolated complete draft states H = U + pV, heat/work conditions and explicit bases. Subject review and fresh media remain open |
| C25 | P1 before Year 11 Module 4 L6 release | Bond-accounting diagram risks implying an actual reaction pathway/barrier; approximation and product-mole basis need scope | Isolated complete draft labels hypothetical gas-phase cycle and named bases. Subject/visual review and fresh media remain open |
| C26 | P1 before Year 11 Module 4 L7 release | Standard state conflated with fixed temperature/legacy pressure and all elemental forms assigned zero | Isolated complete draft states 1 bar, separate temperature and elemental reference forms. Subject review and fresh media remain open |
| C27 | P0 before Year 11 Module 4 L9 release | Overall photosynthesis/respiration reversal conflated with biological pathways and reverse process described as impossible | Isolated complete draft distinguishes matched overall states, actual pathways, feasibility and usable energy. Subject/visual review and fresh media remain open |
| C28 | P0 before Year 12 Module 6 L3/L10 release | Universal neutralisation maximum, assumed weak-ionisation signs and heat-based strength classifications overstate evidence | Shared reference drawing/model repaired; two isolated complete drafts bound heat comparisons and cycle assumptions. [Thermochemistry evidence](thermochemistry-repairs-2026-10-03.md). Original labels/copy, subject review and fresh media remain open |

No render, audio generation or audio decoding was performed for this source
review. The next non-media action is expert review of the four drafts and a
source-level decision about the model limitations described in the report.

## Visual-model source update, 3 October 2026

C05 and C06 now also have implemented component corrections. Enzyme graph
insets no longer equate every pH/temperature rate fall with unfolding; the
substrate model approaches its limit without finite-range full occupancy.
The fork separates RNA-primer replacement from ligase sealing. The hand-drawn
DNA model preserves fragment boundaries until a later joining beat. The strand
inheritance diagram now states its limited purpose.

TypeScript and 18 source/model tests pass. The usage report identifies five
catalogue lessons that reference these component files. This is source evidence,
not visual approval. Original lesson narration, media and registrations remain
unchanged. C05/C06 stay open for scientific approval, source/media integration,
cue validation, continuous playback and device review.

See [model repairs and the review plan](scientific-model-repairs-2026-10-03.md).
No render or audio work was performed. C07/C08 remain open.

## Physics and evidence-gate update, 3 October 2026

C07 now has a constrained series-only API and matching runtime/source/preflight
checks. A voltmeter is rejected until a parallel-branch model exists. Conventional
current direction and switch closure were also corrected. C08 now uses stationary
shell-occupancy markers with explicit model limits and shell-capacity checks.
Neither component is referenced by the current catalogue JSON. Physics and
continuous/device review remain open before use.

C14 now has `gate:release`, which checks full-render provenance and named evidence
for five scopes against one exact package. The old scoring gate is explicitly
diagnostic. No real review evidence was created or lesson approved by this work.

See [Physics constraints and release gate](physics-and-release-gate-2026-10-03.md).
All checks in this pass were source-only; no render or audio work was performed.

## Provenance, selected cohort and quantitative update, 3 October 2026

C12 is now a confirmed current-text/alignment mismatch in the selected hook:
the current “over twenty times smaller” text differs from the stored “ten times
smaller” alignment, whose hash matches the old filename. No recording was
opened. Across 643 wired segments, 418 text matches and 224 missing sidecars
were recorded alongside that one mismatch. A source-hashed replacement-take
handoff is prepared with voice/model unset; review and later media work stay open.

C13 now has directly checked official new-course content and published Year 11
codes for the selected L17 enzyme practical, L18 enzyme graphs and L20 DNA
replication. All three metadata mappings match. Complete learner investigations
and assessment coverage remain unverified. This does not certify the earlier
catalogue crossover analysis or outgoing 2017 mapping.

C19 to C21 now have six isolated scene proposals with corrected arithmetic,
guard digits, explicit heat/analytical assumptions and reporting conventions.
The empirical example also had 15.04 for a CH₃ molar-mass calculation that gives
15.034, reported 15.03. The dissolution proposal uses total solution mass and
changes its estimate accordingly. Question precision changes are explicit.
Original lesson JSON, recordings, artwork and registrations are unchanged.

See [source evidence and proposals](provenance-curriculum-and-quantitative-2026-10-03.md).
The 39 source tests pass. All affected corrections remain open for review,
full-lesson integration and final production checks. No render or audio work
was performed.

## Complete quantitative draft update, 3 October 2026

C19 to C21 now have six complete isolated unvoiced lesson proposals covering
50 scenes and 53 planned narration segments. Hooks, explanations, summaries,
questions and scoped diagram labels agree with the proposed guard-digit working
and reporting conventions. The neutralisation account no longer uses a universal
1:1 water shortcut; dissolution uses total solution mass throughout. All six
drafts pass source schema checks with zero errors or narration-budget warnings;
47 source tests and TypeScript pass. These are estimates, not approved pacing.

C18 now has a source-hashed selected inventory of four top-level scene image
references. All four registered files are missing from their expected public
paths; no matching filename copies were located in the repository. Source,
licence, visual review and restore evidence remain open. This inventory does
not cover component-internal assets, title heroes or fonts.

See [complete lesson proposals and dependencies](quantitative-lesson-integration-2026-10-03.md).
Production sources, recordings and registrations remain unchanged. Removed
speech cues must be rebuilt; preserved component defaults may be incomplete
or unaligned. C19 to C21 stay open for subject review and later media integration.

The [science-review checklist](quantitative-science-review-checklist.md) now
records per-lesson decisions and the C22 component findings. Next source priority:
repair those shared defaults with affected-use checks. Locate existing missing
artwork/source evidence before choosing replacements. Media work remains
deferred under the user's instruction.

## Quantitative component update, 3 October 2026

C22 now has shared default repairs, a scoped HCl/NaOH model, consistent
post-equivalence graph/ion timing and runtime/preflight reveal-cue checks.
The source inventory identifies eight quantitative catalogue references,
one retained original custom water shortcut and four isolated draft scenes
with 17 missing custom cues. No model errors were found by the selected checks.

All 56 source tests and TypeScript pass. The six complete draft packages still
pass source schema checks. Production lesson JSON, recordings, assets and
registrations remain unchanged. No rendering or audio work was performed.
Science approval, original-copy integration, final cues and visual/device
review remain open. See [quantitative component repairs](quantitative-model-repairs-2026-10-03.md).

Next non-media priority: reproducible source packaging and a source-only restore
check for the selected drafts/dependencies. C18's full media restore and missing
artwork provenance remain separate pending work.

## Source recovery update, 3 October 2026

C18/T8 now has a source-only archive and verified fresh-directory restoration.
The selected six unvoiced packages validate from the restored files, and all
60 source tests pass there. Exact file/payload hashes and check outputs are
recorded. Original production sources and media remain unchanged.

See [source archive and restore evidence](source-archive-and-restore-2026-10-03.md).
Public assets/fonts/recordings, dependency installation, finished exports,
rights evidence and off-machine storage are excluded. C18 remains open for
the full media package. No rendering or audio work was performed.

## Chemistry curriculum and learner-task update, 3 October 2026

The six quantitative drafts now have a hash-pinned official 2017 syllabus audit,
unapplied metadata proposals and six original formative student sheets with a
separate teacher key. One of ten stored points matches published wording; the
others are paraphrases or scope proposals. Three calorimetry sources have no
outcome list. No source/draft metadata or recorded copy was changed.

Gravimetry needs an explicit Year 11 extension label: its named syllabus point
is in Year 12 Module 8. The named neutralisation practical is in Year 12 Module 6,
while the Year 11 lesson is a Module 4 calorimetry application. These are selected
curriculum labelling findings, not catalogue-wide scope verdicts or science
approval. C19 to C22 remain open for the relevant subject and integration reviews.

The learner tasks use unseen synthetic data, checked calculations, reasoning
rubrics and supervised practical planning briefs. No learner results, school
practical completion or formal-assessment compliance were inferred. Three
new curriculum checks bring the source suite to 63. See
[curriculum and delivery evidence](quantitative-curriculum-and-delivery-2026-10-03.md).
No rendering or audio work was performed.

## Thermochemistry update, 3 October 2026

C24 to C28 now have six complete isolated unvoiced proposals, 52 scenes and
58 planned text takes, plus separate official-source mapping proposals and
student/teacher transfer materials. The heat-ledger component no longer treats
its comparison reference as a universal maximum and validates balance/geometry.
All 73 source tests pass; six new drafts have zero schema errors or narration
budget warnings. Production lesson JSON and recorded text remain unchanged.

The selected quantitative impact inventory now covers ten catalogue lessons
and eleven references. Seven new draft diagram scenes have 35 deliberately
removed cues, in addition to the earlier 17. Six new top-level image references
are registered but missing at their expected paths. C18, C22 and C24 to C28
remain open for their scoped science, media, asset and visual evidence.
See [thermochemistry repair handoff](thermochemistry-repairs-2026-10-03.md).
No rendering or audio work was performed.

## Complete Biology integration update, 4 October 2026

C04, C05 and C06 now have three complete isolated proposals with 30 scenes,
33 planned text takes, separate prompt/answer plans and independent learner
materials. The enzyme draft corrects catalase's reaction-label role, distinguishes
interval-average from initial rate and shows matched control assay temperatures.
The DNA draft distinguishes the represented inheritance/fork features and their
fidelity omissions. No original source, recorded text or registration changed.

All 81 source tests pass. Three new drafts have zero schema errors or narration
budget warnings. Selected official content/outcome records are hash-pinned;
additional task targets are unapplied. Student worksheets are not evidence that
the required laboratory or model investigations have actually been conducted.
The shared enzyme image is missing at its registered path. The DNA image is
present, with provenance and scientific visual review open. See
[Biology integration evidence](biology-lesson-integration-2026-10-04.md).
C04 to C06 and C18 remain open for their scoped subject, learner, asset and media
evidence. No rendering or audio work was performed.
