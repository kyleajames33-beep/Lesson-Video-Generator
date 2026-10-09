# Module 5 opening drafts: independent science and teaching review

Prepared 10 October 2026 by the independent science/teaching reviewer, task `/root/m5_science_teaching_review`. The reviewer did not author either selected script. This is source inspection and a scientific/script assessment, not still-image, continuous visual playback, human listening or release approval. Root owns findings resolution and any changes to review flags.

## Exact versions and verdicts

| Lesson | Reviewed lesson SHA-256 | Science finding | Script finding | Recording decision from this review |
| --- | --- | --- | --- | --- |
| Chemistry, Static and Dynamic Equilibrium | `1bbd79a6b9f8ca574df39967855784aa9b63044ba69911c3c21ab73fdddf7972` | Scientifically sound within the stated closed, constant-temperature, constant-volume, reversible one-to-one model. No essential factual correction found. | Connected causal explanation is usable. Some repeated evidence-limit language can be tightened. | Science/script source review is ready, with optional improvements below. This does not clear unresolved visual findings or the recording-stage gate. |
| Biology, Reproduction: Continuity and Variation | `921923cfabfb29cc27c693f9b59bb1e364e16b3b02854ca2b9d36ba1965b6af6` | Core concepts and repairs are sound. Nursery inference needs explicit parental diversity and clearer inherited-response wording. | Revision required. Repeated risk, mutation, environmental and survival caveats swamp the main explanation, despite individually reasonable statements. | Hold this exact script before paid narration. Resolve B1 to B3 and independently check the new hash. |

The original reviewed packages are `docs/production/drafts/module5-chemistry-l1-2026-10-10/` and `docs/production/drafts/module5-biology-l1-2026-10-10/`. Root subsequently assigned Biology author revision and preservation of the initial inputs under that package's `initial-review/` directory. This report binds the hashes above, not an edited file at the same path. No draft, shared component, brief approval flag, audio, export or publication was changed by this reviewer.

## Evidence and scope

Inspected the entire lesson JSON, all narration and displayed copy, production brief, author notes and planned response segments for both packages. Inspected the active `chem12m5Exchange` binding and its simulation, and the active `bio12m5Lineage` implementation and props. The other active diagrams are tables. Verified both lesson hashes before revision. Both entire draft directories contained no U+2014 at that inspection. This is a source scan, not a statement about later revised files or future captions.

Read AGENTS.md and the HANDOFF.md takeover/production guidance, the 10 October Year 12 priority plan, teaching templates and exact-lesson brief contract, preview-first review, visual/animation guidance, and the existing research standard and implementation plan. Applied the current brief's entry/start/stop/next boundaries. Read the cached official 2017 syllabus extracts at `out/research/continuity-2026-10-08/` and checked the official live NESA course pages. Detailed source paragraph extraction does not preserve all document formatting.

No media restore was needed to inspect these additive text-only drafts. The missing original bottle/crop images are inactive; this review does not judge those missing artworks. Old recorded catalogue narration was not altered or treated as matching the new words.

## Chemistry findings

### C1. Core science and model: ready at source level

`concept-two-states`, `worked-example`, `misconception`, `quick-check` and `summary` correctly distinguish rates from concentrations. The forward process removes A while the reverse process replaces it at the same average rate. Equal non-zero rates therefore produce zero net change for this one-to-one system. Equal concentrations are neither required nor prohibited. The quantities 0.60 and 0.20 mol L⁻¹ do not conflict with equal rates, because the forward and reverse rate constants need not be identical. No unintroduced rate law or equilibrium expression is imposed.

IUPAC defines chemical equilibrium through equal opposing rates and apparently static composition. The draft's operational school model is consistent with that definition. [IUPAC chemical equilibrium](https://www.old.goldbook.iupac.org/html/C/C01023.html). The current Gold Book endpoint returned an access error during review; the accessible official archival entry was used for this stable definition, with its date visible.

The supported book is explicitly a static mechanical model. The text does not claim its particles are motionless, or that consumed magnesium is a static chemical equilibrium. This is a useful contrast at the declared opening scope. It is not a complete thermodynamics lesson.

`definition` and `concept-conditions` correctly distinguish closed from insulated and open from necessarily changing. The bottle exchange is a physical dissolution/gas transfer context, while A ⇌ B supplies the subsequent chemical model. The draft does not describe CO₂ dissolution as the chemical interconversion A ⇌ B. Opening allows overall dissolved-gas loss under the supplied drink/room conditions; reverse dissolution is retained. A lid alone does not prove that equilibrium has been reached.

`worked-example-2` correctly treats unchanged colour as an observation compatible with several explanations, including a process too slow to detect. Its conclusion does not require real experiments to directly count individual forward/reverse events: indirect discriminating process evidence can also support the explanation. Retain that interpretation in later lessons.

### C2. Script tightening: recommended, not a factual blocker

The script contains 892 whitespace-counted spoken words. Length alone is not a defect, and there is no imposed duration ceiling. The strongest passage is `worked-example`: equal traffic can maintain different amounts. Keep that memorable relationship.

The evidence-limit conclusion is explained in `concept-conditions`, `worked-example-2`, `misconception`, `quick-check` and `summary`. The repetitions are not all doing a different job. Keep the complete observation/process contrast in `worked-example-2`, apply it in `quick-check`, and use one short summary line. Suggested shorter `misconception` speech:

> The trap is mixing up a rate with an amount. Rate describes the traffic between A and B; concentration describes how much of each is present per volume. At equilibrium the traffic balances, so the concentrations stay steady. They can be equal or unequal. A reaction that looks finished needs a different explanation if a reactant has been used up or the remaining change is too slow to detect.

`concept-two-states` ends with two useful model-limit sentences. They are justified by the separated plinth artwork, but should not be surrounded by additional qualifications in every following sentence. The source already uses a workable balance.

`quick-check` changes A/B to C/D and four conversions to three, while retaining the same logic as the two worked examples. It is a valid explanation/retrieval task, but limited transfer evidence. An optional later application could supply unequal non-zero rates and ask whether composition should remain steady, without teaching the full approach-to-equilibrium mechanism. Do not label the present renamed case a demonstrated far-transfer test.

The numerical conversion counts are synthetic schematic evidence, not experimental data. Keep that provenance explicit in notes and displayed example labelling. They should not be interpreted as deriving macroscopic concentrations from four visible particles, or read from animation speed.

### C3. Active diagram source check and later visual questions

The active `concept-two-states` props set `left0=6`, `right0=2`, `startAtEq=true`, no graph and no rate meter. The implementation sets the equilibrium ratio from those starting amounts and gives equal simulated rates. The animation emits paired hops by construction. Its caption and spoken explanation disclose one mixture, average balance and schematic paths, so this is not a source-level contradiction.

The plinths can still suggest separate containers, and synchronous hops can suggest obligatory one-for-one paired molecular events. Continuous preview must confirm that the one-mixture caption is readable when the exchange is introduced and that the narration/visual together support the intended average model. Check the diagram entrance against the recorded cue. The withheld bottle/static-dynamic diagrams are not active and cannot cause their historical science defects in this exact draft.

`worked-example` and `quick-check` have long compact question strings containing system conditions, quantities and multiple demands. Inspect native layout and phone-size fit before recording an avoidable layout-dependent script. Prefer stable grouped conditions and evidence; no full problem should become an oversized heading. These are inspection requirements, not observed clipping.

## Biology findings requiring revision before recording

### B1. Nursery assumption and question wording: essential clarification

Affected fields: `quick-check.question`, `quick-check.voiceover.text`, `quick-check.answerSteps`, `recording-segments.json`, narration.md and corresponding brief/check descriptions.

The displayed question asks which group is more likely to “vary genetically in response”. The spoken prompt asks which is more likely to contain “genetic differences in response”. Those phrases can imply that disease creates the inherited variation being compared. The explanation actually depends on allele combinations already present before exposure. Also, “several crosses” does not establish that parental genotypes differ. Repeated crossing among identical homozygous parents can retain the same combinations. The predicted wider range needs the diversity premise.

Suggested prompt:

> A nursery grows cuttings from one parent and seedlings from crosses among genetically different parents. Some inherited combinations reduce susceptibility to a new disease. Which group is likely to show a wider range of inherited susceptibility, and why does that not promise every plant will survive? Pause here to explain your reasoning.

Suggested feedback:

> The crossed seedlings can inherit a wider range of allele combinations. Some may reduce susceptibility under the conditions given. The cuttings usually retain the one parent's combination, so they can share its vulnerability. Inherited susceptibility affects risk, while exposure and growing conditions also affect which plants become infected and survive.

That retains conditional reasoning without suggesting adaptive mutation on demand. Recombination produces new combinations of available sequence variants; it cannot provide a differing allele that is absent from the contributing genomes just because it is useful. [NHGRI homologous recombination](https://www.genome.gov/genetics-glossary/homologous-recombination), [NHGRI genomic variation](https://www.genome.gov/genetics-glossary/Genomic-Variation). The explicit-parent correction is the reviewer's inference from that genetic model, not a directly quoted crop experiment.

### B2. Repeated caveats obscure the explanation: essential editorial repair

The 1008-word script revisits uncertainty about infection/survival in `hook`, `concept-continuity`, `concept-asexual`, `concept-sexual`, `concept-tradeoff`, `misconception`, `quick-check` and `summary`. Mutation versus environment also recurs in four teaching/feedback beats. There are six spoken occurrences of the stem “guarantee”, plus further equivalent qualifications. The problem is the cumulative lesson structure, not the correctness of each cautious sentence.

Use a connected chain with distinct jobs:

| Scene | Keep its teaching job | Consolidate or remove |
| --- | --- | --- |
| `hook` | Productive crop, copying it, new disease and a useful question. | Stop at the question. Omit the immediate abstract answer about risk versus guarantee. |
| `concept-continuity` | DNA handoff and enough descendants surviving and reproducing. | End on population continuity. Remove the final species-persistence disclaimer. Viability/fertility vocabulary is optional at this opening scope; do not expand it just to repair an inactive label. |
| `definition` | Gamete fusion, zygote, self-fertilisation exception to the parent-count shortcut, allele vocabulary. | Replace “So count gamete fusion” with “That is why gamete fusion is the useful distinction.” |
| `concept-asexual` | Strawberry runner retains a useful combination. Explain mutation changes DNA while different light/water can change growth. | This is the one place for the mutation/environment distinction. Avoid adding another identical-characteristics guarantee recital. |
| `concept-sexual` | Gamete formation and fertilisation reshuffle available alleles. | Remove every-gene uniqueness and the repeated disease/resistance discussion. Save the disease consequence for the trade-off. |
| `concept-tradeoff` | Return to grower, connect retained/reshuffled combinations to conditional susceptibility. | Keep one clear limit: relevant variation must exist, and infection also depends on exposure/conditions. |
| `worked-example` | Runner, coral fertilisation and plant self-fertilisation classified with reasons. | Preserve these worthwhile concrete examples. |
| `misconception` | Repair the one-clone-infected to every-clone-infected inference. | Use a short diagnosis, not the full mutation/environment/sexual-resistance explanation again. |
| `quick-check` | Apply to the explicit nursery case, with answer-free response time. | Explain the supplied answer and one disease-outcome limit. Omit the extra mutation recap. |
| `summary` | Lineage, fusion, retained versus reshuffled combinations, next mechanisms. | One concise condition reminder is enough. Omit procedural commentary and another full caveat sequence. |

Suggested central replacement speech, preserving the causal relationships:

`concept-asexual`:

> A strawberry runner grows into a new plant without gametes fusing. It usually carries the parent's allele combination, which is useful when that combination already performs well. A mutation can change the copied DNA. Light or water can also change how a clone grows, without changing its allele combination. Those are two different causes of differences.

`concept-sexual`:

> Sexual reproduction combines inherited information. In outcrossing, gametes from different individuals fuse. Gamete formation and fertilisation can put the available alleles into new combinations, so offspring can differ genetically. Mutation changes the DNA itself; sexual reproduction reshuffles what is available. We will follow those mechanisms later.

`concept-tradeoff`:

> Now the grower's decision makes sense. Cloning preserves a productive combination. If it also preserves susceptibility to a disease, many plants share that vulnerability. Crosses among genetically different parents can produce a wider range of inherited responses, and some combinations may cope better. That advantage depends on relevant variation being present. Infection also depends on exposure and growing conditions, so genetic risk does not settle every plant's outcome.

`misconception`:

> One clone is infected. Does that tell us every clone must become infected? Their similar inherited genes can give them a shared vulnerability, but they may not all encounter the pathogen under the same conditions. Shared susceptibility explains a common risk; it does not establish every individual outcome.

These are proposed edits for author/root integration. Do not treat them as already selected speech. Update adjacent bullets, tables and captions so they support the shorter chain instead of retaining a second caveat-heavy lesson on screen. Retain deliberate reading/thinking holds where useful; cutting repetitive words is not a direction to rush difficult reasoning.

### B3. Teacher-to-student phrasing: essential within the requested script repair

Replace or omit the meta instructions “A good comparison names the conditions”, “Then your prediction can be precise”, “The useful answer connects inheritance to risk, then bounds the prediction” and “That is our stopping point”. They describe how to construct an answer rather than advancing this concept, and contribute to the robotic feeling the user rejected. The causal example and specific feedback already teach that reasoning. “Pause here to explain your reasoning” is useful response guidance and can stay.

## Biology science confirmed, and remaining visual limits

Gamete fusion correctly distinguishes the supplied sexual events from the runner event; self-fertilisation remains sexual despite one adult parent. Allele as a version of a gene is an appropriate entry definition. Mutation can create DNA differences in cells contributing to offspring. The wording deliberately permits plant vegetative inheritance and does not incorrectly insist all inheritable plant mutations must originate in a pre-separated animal-style germline. Original research documents somatic variation in clonal plants. [A somatic genetic clock for clonal species](https://www.nature.com/articles/s41559-024-02439-z). Do not introduce epigenetics or detailed plant life cycles just to qualify this introductory comparison.

The named examples are sound: runners make strawberry daughter plants; coral eggs and sperm can undergo fertilisation; flowering-plant fertilisation joins sperm and egg, including the stated self-fertilising case. [UC strawberry daughter plants](https://ipm.ucanr.edu/home-and-landscape/strawberry-planting/), [NOAA coral reproduction](https://oceanservice.noaa.gov/education/tutorial_corals/coral06_reproduction.html), [USDA pollination and fertilisation handbook](https://www.ars.usda.gov/arsuserfiles/20220500/onlinepollinationhandbook.pdf). The draft says specific events, not that every coral reproduces only sexually or every strawberry event is asexual.

Shared inherited susceptibility is correctly separated from certain infection. The nursery case is hypothetical, not a dated Cavendish/TR4 factual claim. Exposure and growing conditions can affect actual infection. [UC strawberry transplant/pathogen and growing-condition guidance](https://ipm.ucanr.edu/agriculture/strawberry/handling-strawberry-transplants/). This supports the conditional interpretation, not an invented numerical probability.

The active lineage props put `at.viable=1000000`, outside the 1770-frame scene. That suppresses the implementation's incorrect “viable: survives to reproduce again” label. Keep the suppression through retiming, or use a separately reviewed corrected label. The late hardcoded slogan about species persistence is simplified; the accompanying narration must retain enough descendants reproducing, rather than DNA transmission alone being sufficient. The compressed generations and selected lineage are disclosed. Actual cue order, early DNA handoffs, death transitions, slogan fit and small labels need continuous visual inspection. This source check does not establish that narration and motion currently arrive together.

The clone/population disease dioramas are inactive. Their historical deterministic all-clone death or guaranteed varied survivors therefore do not contradict the new draft. Inspect the tables' full-frame/phone fit and captions after editorial shortening. No new decorative diagram is required to pass this review.

## Curriculum boundaries and prerequisite honesty

The cached Chemistry 2017 extract p1057 matches the selected static/dynamic and open/closed modelling point. p1052 to p1056 separately require practical reversibility work; p1059 to p1062 cover non-equilibrium examples and collision theory. The opening contributes to p1057 but does not complete that whole investigation/content cluster. Keep the plan's later entropy/enthalpy and rate work visible rather than deleting it as irrelevant. [NESA Chemistry 2017 course and download](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017).

The cached Biology 2017 p1025 to p1030 requires actual mechanisms across animals, plants, fungi, bacteria and protists. p1031 adds mammalian fertilisation, implantation and hormonal control; p1032 adds reproductive manipulation evaluation. The opening supplies vocabulary, continuity and a conditional comparison, not those complete mechanisms or agricultural evaluation. The declared next animal and separate other-organism lessons are an appropriate handoff. [NESA Biology 2017 course and download](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017).

This review accepts the priority plan's current 2017-cohort scope. It does not recertify all future 2025 placements or turn catalogue presence into coverage. No learner practical conduct, required model construction/evaluation, practical-hour completion or module completion is established by these videos.

Both briefs acknowledge missing reviewed support links. Biology's “check the starting idea” is a narrated reminder, not an elicited entry response. Chemistry's arrow entry question is presently in the brief rather than visibly tested in the lesson. Describe these honestly as orientation unless an actual short response is added. Supply a reviewed prerequisite route before public course placement; do not narrate an unavailable upload as already present. These are progression/packaging issues, not reasons to add a long foundational lesson here.

## Required next evidence

Before recording, root resolves Biology B1 to B3, synchronises all speech/display/segment files and the brief hash, then obtains a bounded independent review of the new exact source. Resolve any material visual-source findings from the separate visual review. Scan selected copy again and run the recording-stage brief check. Chemistry can retain its reviewed words if optional tightening is not selected; changed words require a new source review and fresh matching takes.

Before export, play the exact voiced revision or a short measured pilot, align diagram/board cues, and assemble each planned prompt and feedback with the actual eight-second answer-free gap. Estimated frame numbers and joined `voiceover.text` do not establish silence or protection. Check no answer leakage in speech, displayed copy, diagrams or captions. Inspect full worked/check boards and lineage/exchange model meaning in continuous playback, with captions and phone-size fit. Freeze the resolved inputs only after findings are closed.

Listening, take naturalness, pronunciation, audio continuity, exact caption agreement, full-package review and public release remain pending. Nothing in this source review supplies those missing observations.

## Addendum: revised Biology source review

Reviewed 10 October 2026 after the independent findings were integrated by the author/root. **Current reviewed Biology lesson SHA-256: `712a505e6c41fb5acb0d670c25614c88162dd5895013174c7b0d9988a872fb26`.** Active lesson path remains `docs/production/drafts/module5-biology-l1-2026-10-10/lesson.json`. This addendum supersedes the recording hold for the initial Biology script above only at the science/script source level. The initial verdict and its input hash remain historical evidence.

**Verdict: science and teaching-script source review pass for this exact final hash.** No essential factual, conditional-model, causal-explanation or narration-quality finding remains in the revised source. The lesson is ready for root to use as science/script evidence when other prerequisites for the recording-stage gate are satisfied. This does not by itself authorise recording, certify visual readiness or approve audio/export/release.

Read the full revised narration and displayed copy, planned prompt/feedback segments and updated progression/teaching descriptions. The immediately preceding revision, `cc5775a46315187b5ae54b3c5039f8f751d3da83542c7cb5941429416b721610`, had one displayed answer that asserted not every seedling inherited the relevant combinations, despite speech correctly saying some might not. Root corrected that display to “Some combinations reduce susceptibility; seedlings may not inherit them.” Confirmed that correction in the final source, the exact final hash and the brief's matching source hash. No spoken passage needed changing for that final correction.

| Initial finding | Resolution in the reviewed revision |
| --- | --- |
| B1, ambiguous disease-induced genetic-response wording | Both displayed and spoken question now ask about the range of inherited susceptibility. Genetic differences are supplied before the disease comparison, rather than being produced in response to need. |
| B1, unspecified diversity among cross parents | The question and separate prompt explicitly state crosses among genetically different parents. Feedback explains allele combination diversity with conditional inheritance and reduced susceptibility rather than complete protection. |
| B2, repeated caveats | Mutation/environment has its main explanation in `concept-asexual`; available-allele reshuffling is developed in `concept-sexual`; relevant variation and exposure/conditions are connected to the grower in `concept-tradeoff`. The short misconception diagnoses one inference. Feedback and the four-item summary retain the main reasoning without repeating the whole list. |
| B3, teacher-meta speech | The identified “count”, answer-construction and stopping-point recitals are removed. The nursery pause instruction remains useful response guidance. |
| Entry-check honesty | The brief and author notes now identify a short teacher-use DNA prerequisite question. They do not claim the video contains a measured entry response interval. Reviewed support-video availability remains pending. |

The revised 799-word narration has a clearer progression than the 1008-word initial version. This count is descriptive, not a duration or quality threshold. The crop question now motivates inheritance; the lineage explains continuity; the two reproductive routes establish the comparison; and the grower scenario applies its consequence. The card-hand comparison in `concept-sexual` is a useful analogy for rearranging an available set. It is not an asserted molecular mechanism. The runner, coral fusion and plant self-fertilisation examples are retained and remain scientifically appropriate at this scope.

The response-plan prompt plus feedback concatenates exactly to the selected quick-check voiceover text. The displayed answer now retains conditional language consistently with the feedback. No U+2014 was found in any active top-level package file. Confirmed that `initial-review/lesson.json` and the preserved initial brief bind the original `921923cfabfb29cc27c693f9b59bb1e364e16b3b02854ca2b9d36ba1965b6af6` lesson. Mechanics are separately owned and checked by root; this reviewer changed no script, generator, brief flag or validation file.

The curriculum/start/stop/next assessment is unchanged: this is a 2017 Module 5 opening contribution, with detailed reproductive mechanisms and practical/model actions still outside its completed scope. It does not establish full dotpoint or practical coverage.

Outstanding visual/model checks remain for the lineage and boards: keep the incorrect viable label inactive, inspect the late hardcoded persistence slogan in the context of enough descendants reproducing, align DNA handoffs/generation cues to selected narration, and check table/question/answer text with actual captions and phone-size playback. Scene durations and answer reveal frames are estimates. The separate eight-second silence must still be assembled from measured prompt and feedback audio and checked for earliest visible/audible answer exposure. Exact voiced preview, delivery, term pronunciation, human listening, exports and public release remain pending. Any later relevant lesson or shared-diagram change needs a review scoped to the new inputs.

## Addendum: Chemistry grouped-display source review

Bounded display/source review, 10 October 2026. **Current reviewed Chemistry lesson SHA-256: `bb97d2349e3088da83b2581662dc2237876a1ed41fec27b51af86898660ea3aa`.** Active path remains `docs/production/drafts/module5-chemistry-l1-2026-10-10/lesson.json`. Confirmed the final hash before and after inspection, matching brief source hash, and preserved initial lesson hash `1bbd79a6b9f8ca574df39967855784aa9b63044ba69911c3c21ab73fdddf7972` under `initial-review/`. Compared every scene's voiceover text: all ten are unchanged from the initially reviewed source.

**Verdict: science/script source pass extends to this exact display revision.** The new displayed data, stages and units agree with the unchanged narration and original model. No new unsupported inference or source-level prompt-answer leakage was found. This is not a native layout, exact cue alignment or playback pass; the independent visual reviewer owns those observations.

`concept-two-states` now reveals its static bullet at 2 seconds and dynamic bullet at 22 seconds. `BulletReveal` interprets those explicit `at` fields as seconds. At 30 fps the dynamic bullet corresponds to frame 660, also the revised exchange delay; the outer diagram entrance begins at 640. These are deliberate source cues for the transition to the dynamic explanation, rather than default immediately visible contrast labels. They remain estimates until selected speech/alignment exists. The unchanged equilibrium starting amounts and simulation settings still meet C1/C3's reviewed model limits.

`worked-example.calculationPresentation` separates the short task, one-to-one A ⇌ B equation, opposing conversion data and concentrations. Both conversion givens are 4 particles s⁻¹, with arrow direction attached. The supplied concentrations are correctly associated with [A] = 0.60 mol L⁻¹ and [B] = 0.20 mol L⁻¹. The note preserves closed, constant-temperature and constant-volume conditions and the time-averaged synthetic evidence. Its three stages correctly establish replacement, zero net concentration change and different amounts despite balanced traffic. The data do not purport to calculate concentrations from visible token counts.

`quick-check.calculationPresentation` displays only the supplied one-to-one C ⇌ D model, two opposing 3 particles s⁻¹ rates, steady/different concentrations and fixed system conditions before feedback. Its question asks for classification, explanation and the inference limit. Those givens are the evidence students must use, not an answer annotation. The dynamic classification, replacement explanation and observation-only limit are confined to answer stages.

Inspected the active grouped-board code: `CalculationProblem` renders task/equation/givens/references/note, while `FocusedWorking` returns no answer board until a stage cue is reached. The quick-check clamps those stages to `answerVisibleStart`; the unchanged estimated hold is 1128 to 1368, with stage cues 1368, 1608 and 1848. That source logic supports the intended answer-free interval. It does not verify future assembled audio, captions, measured timing or all actual-frame exposure.

No U+2014 was found in the active top-level Chemistry package files. All earlier curriculum and synthetic-data limitations remain. Native phone fit, text/diagram clearance, actual static-to-dynamic cue timing, continuous exchange interpretation, matching fresh audio, measured response silence, exact voiced preview and human listening remain separate unresolved gates. Root must resolve any material findings from those checks before the relevant recording/export/release stages.

## Addendum: final compact Chemistry prompt confirmation

Final bounded source confirmation, 10 October 2026. **Reviewed Chemistry lesson SHA-256: `14e05ef9c9f6808bb07565d1d9d3030515f157cfc161c24e58ddd9e5f43b497a`.** Confirmed the matching brief source hash and preserved `bb97d2349e3088da83b2581662dc2237876a1ed41fec27b51af86898660ea3aa` input at `grouped-board-review/lesson.json`.

An independent recursive JSON comparison found exactly two changes: the quick-check grouped-board note is now “Average rates. Why unequal? What if only steady readings were supplied?”, and its duplicate `pausePrompt` was removed. The full source/spoken question, opposing conversion data, concentration/system reference labels, narration, stage cues and 1368-frame answer boundary are unchanged.

**Science/script source pass extends to this exact final hash.** “Why unequal?” is valid contextual shorthand for the explicitly supplied steady/different concentrations and the unchanged spoken question asking why concentrations can differ. It does not assert unequal rates; the two displayed rate values remain equal. Removing duplicate pause copy changes neither the task nor the answer-bearing stage boundary. No new factual, inference or source-level answer-leakage issue was found, and no U+2014 was found in active top-level package files.

This confirmation adds no native phone-typography, exact audio timing, listening, recording-gate, export or release approval. All previously recorded visual/model and media requirements remain open until separately resolved against the final inputs.

## Addendum: final grouped Biology nursery source confirmation

Final bounded display/source confirmation, 10 October 2026. **Reviewed Biology lesson SHA-256: `17591531e1050b33a758f5a43a470b217330c7e969240a991d08bf5d1d3c826e`.** Verified the current hash and matching brief source hash, and the prior source-reviewed lesson `712a505e6c41fb5acb0d670c25614c88162dd5895013174c7b0d9988a872fb26` preserved at `source-reviewed/lesson.json`. All eleven scenes' narration text is unchanged.

**Science and teaching-script source pass extends to this exact final display revision.** The nursery board groups cuttings from one parent and seedlings from crosses among genetically different parents. Its supplied condition retains inherited combinations reducing disease susceptibility. The short question asks students to compare the inherited susceptibility range and explain the survival limit, faithfully abbreviating the full unchanged source/spoken question. Interpret the compact range question and headings with that question's likelihood language, rather than as experimentally measured offspring outcomes.

The four staged explanations preserve the reviewed reasoning: crossing combines parental alleles; cuttings usually retain one parent's combination; particular seedlings may not inherit relevant protective combinations; and reduced susceptibility is not complete protection. There is no new arithmetic task, numerical probability, directed-mutation claim or certain survival/death prediction. The conditional “may not inherit” repair is retained.

The pre-answer board contains only the task, supplied group information and condition. The answer-bearing labels, reasons and summaries are in `calculationPresentation.stages`. The previously inspected active `QuickCheckSlide` and `FocusedWorking` source clamps those stages to the answer boundary and returns no working before the first cue. The current cues are 960, 1190, 1410 and 1640, with estimated response frames 720 to 960. No source-level answer leakage before 960 was found. Removing duplicate pause text does not alter the spoken prompt or feedback. Actual assembled audio and caption exposure still require measured checks.

No U+2014 was found in active top-level package files. The earlier 2017 curriculum contribution, entry/support-route limits and later mechanism handoff are unchanged. This final source confirmation does not establish native phone typography, lineage reading/cue correctness, exact response silence, recording-stage completion, voiced preview, human listening, export or release approval. Those gates remain with root and their separately scoped reviewers. This closes the assigned independent source-review wave; no source, shared component or approval flag was modified by this reviewer.
