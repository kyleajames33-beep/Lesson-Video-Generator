# HSC science video production standard: research proposal

Research date: 2 October 2026. Status: proposed standard for pilot testing, not a release approval or replacement of the standing project instructions.

## Recommendation

Keep Simon as the preferred Australian narrator and retain the usable editorial, hand-drawn, painted and diorama assets. Make the next improvement at the teaching and script layer: ask students to make a specific decision, explain the relationship that justifies it, provide genuine time to respond, and give feedback that identifies the reasoning to repair. Use the existing visuals to make that reasoning visible. A more expressive voice cannot repair a script that merely reads the board.

Use several structures according to teaching task, rather than turning the molar-mass calculation into a template for every subject. Keep narration clean, essential labels stable and thinking holds quiet. Do not adopt a universal six-minute ceiling, speech rate or motion frequency. The research supports several instructional principles, but does not establish the best timing, art style or ElevenLabs model for these students.

Start with a 60 to 90 second, scientifically corrected molar-mass script comparison, holding Simon, model, visual treatment and response opportunity constant. Test a causal script against a concise descriptive script using a new problem and an explanation question. Both require new recordings. Follow with a separate same-script voice comparison and a Biology mechanism check. Batch production should wait for the formative evidence, complete lesson reviews and release gates described below.

Read this report with the [evidence matrix](evidence-matrix.md), [script proposals](script-proposals.md), [pilot protocol](pilot-protocol.md) and [audit inventory](audit-inventory.json).

The [library implementation plan](library-implementation-plan.md) turns these findings into catalogue-wide workstreams, dependencies, acceptance gates and a staged rollout. Molar mass is its first test case, followed by other teaching tasks before expansion.

## 1. What this audit establishes

This is a purposive sample and focused research synthesis, not a catalogue-wide scientific validation or an exhaustive systematic review. Searches favoured original papers, review authors' institutional records, publishers, NESA, official provider documentation and accessibility guidance. Publication dates come from the papers, not search-engine crawl labels. The matrix identifies abstract-only access and extrapolation. Effect sizes from different interventions are not a ranking of production features, and overlapping reviews are not independent replications.

Evidence labels used throughout:

- **Evidence:** externally researched findings, bounded by population and context.
- **Audit:** observations from named repository sources, saved images or media metadata.
- **Judgement:** proposed professional production choices.
- **Hypothesis:** choices requiring learner, playback or listening tests.
- **User feedback:** Simon's accent and pronunciation in the molar-mass trial were accepted; narration can feel boring or mechanically descriptive; mixed visual treatments are welcome. These are preferences and reported impressions, not measured learning outcomes.

### Scope and inspection method

Read `AGENTS.md` and all six requested design/review documents. Inspected `src/LessonVideo.tsx`, `src/lesson/types.ts`, timing constants, scene audio, quick-check rendering, caption export, release preflight and the ElevenLabs request builder. Inspected animation primitives, prototype implementations, native DNA replication, circuit and atom diagrams. Inventoried 308 lesson JSONs under `src/data`: 149 Chemistry and 159 Biology. No Physics lesson JSON was found there or by filename search elsewhere in this checkout. Physics conclusions below are component/source assessment and proposed transfer examples, not an audit of an existing Physics lesson.

Representative lesson source inspection:

| File under `src/data` | Teaching task | What was assessed |
| --- | --- | --- |
| `chemistry-y11-m2-l2-molar-mass.json` | Concept and calculation | Narration, arithmetic, captions, units, quiz and practical claims |
| `chemistry-y11-m2-l13-limiting-reagents.json` | Stoichiometric reasoning | Analogy, two examples, guard digits, coefficient logic and feedback |
| `biology-y11-m1-l20-dna-replication.json` | Biological mechanism | Enzyme sequence, directionality, model limitations and retrieval |
| `biology-y11-m1-l17-enzyme-activity-practical.json` | Investigation planning | Variables, controls, measurement, reliability and inference |
| `biology-y11-m1-l18-reading-enzyme-graphs.json` | Evidence interpretation | Observation versus explanation, graph traps and quiz timing |

Inspected V2 and V3 molar-mass drafts and voice selection. V2 contains 760 spoken words with 329 seconds of scene allowances. V3 contains 691 words with 352 seconds of allowances. Both have no scene audio paths or timed captions and no U+2014. Fewer words did not produce a shorter planned video; these are estimates, not measured speech durations.

Read review pages for design directions, capability tests, connected Chemistry, molar-mass V2 pilot, full-review calculation previews, V3 script and Australian voice auditions. Visually inspected saved PNGs: `painted-divide.png`, `capability-tests/dna-9.png`, `molar-mass-full-review/brackets-480.png` and `molar-mass-pilot-v2/formula.png`. These establish sampled layout appearance only. The bracket board preserves counts, contributions and the final sum together. The DNA still makes original and new strands distinguishable through labels as well as colour. Its small 5-prime/3-prime labels need phone testing; the bottom teaching line is close to the frame edge.

`ffprobe` verified 1280 by 720, 30 fps video in the three direction clips, DNA clip, V2 pilot and bracket preview. Container durations are approximately 24.043, 18.048, 72.933 and 18.000 seconds respectively. Direction and DNA clips contain AAC streams despite being described as silent tests; stream presence does not establish audible sound. The bundled FFmpeg lacks `volumedetect`, so that attempted measurement failed. The bracket preview has no audio stream. The saved pilot loudness report records about -18.15 LUFS and -1.76 dBTP after normalisation; this audit did not independently remeasure that report.

**No complete export was watched and no audio was assessed by listening in this audit.** The local HTTP review returned an empty response and browser security policy blocked the local-file route. No workaround was attempted. Timing, compression shimmer, motion continuity, scientific meaning between sampled frames, accent consistency and number pronunciation require actual playback/listening review. Earlier review documents' playback claims remain attributed historical records, not observations repeated here.

### Keep, improve, remove and investigate

| Decision | Finding and basis | Implication |
| --- | --- | --- |
| Keep | Existing calculation boards, coded scientific notation, original/new-strand labels, dioramas and reusable artwork [source/stills] | Reuse with scene-specific science and phone checks |
| Keep | Explicit learner targets, unit checks, mistake prevention and recall in the guides [source] | Make them serve a task, rather than tick a scene-count requirement |
| Improve | `lesson-reference-style.md` says captions are compact reinforcement, while SRT/VTT export derives word tokens [source] | Reserve `scene.caption` for teaching summaries. Accessible captions must represent the actual spoken content and meaningful sounds |
| Improve | Production always adds a 270-frame, nine-second stinger before the scene sequence [source] | V3's hook-first JSON still cannot open the production export directly with its hook. Trial a short identity cue, then useful teaching; record any change as a proposed renderer option |
| Improve | `SceneVoiceover` accepts one audio file and window per scene [source] | Assemble prompt, exact gap and answer into a new scene asset, or implement segmented playback later. A manifest alone does not insert silence |
| Improve | Quick-check answers begin fading before nominal `answerStart` [source] | Define the hold end as the first visible or audible answer cue, not the answer animation midpoint |
| Remove from future scripts | Unsupported claims about half the class, expensive errors, full marks or a guaranteed Band 6 answer [lesson sources] | Explain the consequence and correction without invented prevalence or marking certainty |
| Remove from selected scenes | Redundant bridge explanation, spoken metadata, decorative emphasis and unnecessary numerical recitation [molar-mass sources] | Preserve the assets; omit their use where it repeats the same point |
| Investigate | V3 improves decisions but answers the opening and oxygen-count question immediately [source] | Choose rhetorical question or actual prediction. Do not label instant disclosure as retrieval |
| Investigate | Single calculation and silent style comparisons [prototype sources] | They cannot establish a default for mechanisms, investigation analysis or narrated flow |
| Investigate | Fixed reading minima and scene durations in guides [source] | Treat as historical design defaults requiring adjustment to complexity, captions and response task |
| Investigate | Review-page audition footer still says the voice is not approved, despite the later selection JSON [source] | Make the eventual review status distinguish narrator selection, take selection and full-lesson approval |

### Science findings requiring action before those lessons are released

1. **Molar mass original:** inconsistent oxygen values, intermediate rounding and incorrect final compound arithmetic; invented wrong answer; historical mole definition presented as current; overly strong unit-check claims. The existing full-review document correctly identifies these. Independently recomputed: `40.08 + 4(1.008) + 2(30.97) + 8(15.999) = 234.044`, reported as `234.04 g mol⁻¹` under the explicitly chosen two-decimal convention. Do not promote that convention to a universal significant-figure rule. Carbon: `2.00 × 12.01 = 24.02`, reported as `24.0 g`. Chlorine: `71.0 / 70.90 = 1.001410...`, reported as `1.00 mol`.
2. **Limiting reagents:** the second example uses `70.91` for Cl₂ despite supplying Cl `35.45`, which gives `70.90`. The quiz says hydrogen has nearly four times the moles per coefficient. With its supplied values, the ratio of capacities is about `0.992 / 0.500 = 1.98`. Raw moles are about four times; the normalised comparison is about twice. Recalculate from supplied values with guard digits and regenerate affected narration later. The toastie analogy also needs an explicit recipe to establish how many bread slices each toastie requires.
3. **DNA replication:** template pairing supports fidelity, but saying it is “exactly why” copying is accurate obscures proofreading and repair. The native diagram omits primers, polymerase and ligase; the capability page acknowledges this. It can teach complementary pairing and semi-conservative products, but cannot alone teach all enzymes named in the lesson's own intended scope. Check 5-prime/3-prime direction and fragment formation during the movement.
4. **Enzyme practical:** an optimum near 37 °C is not justified merely by choosing liver or potato. Specify source, conditions and a testable hypothesis. Three repeats help estimate variability; they do not guarantee reliability or remove systematic error. Lack of oxygen from boiled tissue supports an enzyme explanation under controlled conditions, but does not prove it uniquely. Equal tissue mass need not mean equal active enzyme availability.
5. **Enzyme graphs:** narration defines denaturation as invariably permanent and uses a neat “every active site” saturation account. Avoid making simplified cartoons universal molecular claims. The pH explanation already usefully distinguishes charge effects from unfolding. The quick check immediately gives all answers, and the misconception teaching caption does not match the two risks discussed. “Only add more enzyme” should be bounded to the fixed assay conditions. See [OpenStax's enzyme account](https://openstax.org/books/biology-2e/pages/6-5-enzymes) for foundational conditions and saturation; specialist nuance needs subject review.
6. **Physics components:** `Circuit3DDiagram` places every listed component in one series loop, including its supported voltmeter option. It cannot represent an ordinary voltage measurement across a component correctly without a branch. Its moving dots should be labelled as a current model and checked against battery polarity. `OrbitDiagram` continually moves labelled electrons in circular paths. Use only with explicit model limitations, not as a literal modern atomic trajectory. These are source-identified risks, not claims about released Physics videos.

The current [BIPM mole definition](https://www.bipm.org/en/si-base-units/mole) uses exactly `6.02214076 × 10²³` specified entities. A school calculation can use supplied rounded atomic values without claiming dimensionless relative atomic mass and molar mass are exactly the same physical quantity.

## 2. Curriculum and audience

### Cohorts must be explicit

| Subject | 2026 and next outgoing cohort | New Year 11 teaching | New Year 12 teaching starts | First new-syllabus HSC |
| --- | --- | --- | --- | --- |
| Biology | 2017 syllabus for 2026; Year 12 remains 2017 in 2027 | Term 1, 2027 | Term 4, 2027 | 2028 |
| Physics | 2017 syllabus for 2026; Year 12 remains 2017 in 2027 | Term 1, 2027 | Term 4, 2027 | 2028 |
| Chemistry | 2017 syllabus through 2027; Year 12 remains 2017 in 2028 | Term 1, 2028 | Term 4, 2028 | 2029 |

Verified against NESA's [Biology implementation](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview/course), [Physics implementation](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/overview/course) and [Chemistry implementation](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/overview/course), accessed 2 October 2026. The subject transitions are staggered. Do not use publication year 2025 as the teaching year.

The official [Chemistry 2017 syllabus download](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx), extracted as text, confirms Year 11 quantitative chemistry includes mole/Avogadro relationships, masses, amounts, particle counts and limiting reactions, plus a practical molar-mass investigation. Its wording groups limiting reactions within the mole content rather than using the lesson's paraphrased standalone dot point. Map paraphrases to their actual source.

The 2017 courses require 15 hours of depth studies and at least 35 hours of practical investigations per year; Biology also mandates Year 11 fieldwork. The new Biology, Physics and Chemistry course descriptions specify 120 hours per year, integrated Working scientifically and 10 hours of depth studies; new Biology retains Year 11 fieldwork. Do not carry the old practical-hour rule into a new-syllabus label without checking its requirements. Sources: [Chemistry 2017](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017), [Biology 2017](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017), [Physics 2017](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/physics-stage-6-2017), and the three new course pages above.

Repository Biology sources use new-format `BI-11-01` codes alongside legacy module-shaped filenames, and `docs/biology-syllabus-crossover.md` records movement of topics. Treat that document as a useful working map, not independent NESA verification. This audit verified official dates and course requirements but did not obtain all dynamically loaded new Biology content points. Exact DNA placement, all codes and each claimed crossover remain release-gate checks against an official full download. Syllabus-neutral chrome may aid asset reuse; it does not remove the need for versioned course mapping on the lesson page.

### Define a video by the job the student must do

| Job | Evidence of understanding | Boundary |
| --- | --- | --- |
| Understand a concept | Explain what changes and what stays constant when the sample doubles | Repeating a definition is insufficient |
| Reason scientifically | Predict a result and justify it from a model or mechanism | A plausible story is not experimental evidence |
| Calculate | Select a relationship, substitute consistently, interpret units and precision on a new problem | Watching arithmetic is not application |
| Interpret evidence | Read axes and units, identify a trend, support an explanation and qualify an inference | A graph's shape does not uniquely identify a cause |
| Prepare for practical work | Choose controls, measurement and risk checks; diagnose an apparatus problem | Watching does not replace handling apparatus, gathering data or conducting required fieldwork |
| Apply to an exam question | Match the command and evidence to a reasoned response | Do not promise marks or present invented questions as official NESA items |

Use Year 11 foundations as prerequisite links for Year 12 tasks. New Biology and Physics course structures have three Year 11 focus areas, not four old modules. Year 12 videos should apply foundations in their current context, rather than repeat the entire introductory lesson. First-learning viewers need vocabulary and a complete example; returning viewers need chapters and a short retrieval route; confident viewers can go directly to transfer. Provide a one-question prerequisite check and a relevant support link. Do not assign learning styles or assume all HSC students already know algebra, subscripts, graph scales or scientific notation.

## 3. Proposed teaching and scripting standard

**Evidence-informed principles:** meaningful segmentation, nearby and timely labels, selective signalling, supported practice, self-explanation and corrective feedback. See E1 to E10 in the matrix. **Judgement:** every lesson brief should specify one primary observable student action, the prerequisite, one likely misconception, and an unseen check. Scenes can support more than one connected idea when splitting would destroy the relationship.

Open with a useful discrepancy or decision: “Same number of atoms. Which sample has more mass?” or “Does this plateau show damage?” Explain the relevance in the next beat. Avoid countdowns, false emergencies and exaggerated examination stakes. For a practical, begin with the measurement problem or a plausible flawed setup. For short revision, the challenge can be the opening itself. A historical anecdote is optional and should lead directly to the mechanism.

Explain **why** the method works. Molar mass is mass per mole, so multiplying by the number of moles produces sample mass. Coefficients express reaction proportions, so comparing amounts divided by coefficients compares how far each reactant can support the same reaction. DNA synthesis direction plus antiparallel templates explains continuous versus fragment construction. Graph interpretation separates what is seen from the proposed cause and what would test it.

Use a complete example, a closely related completion problem and an independent problem when the student is acquiring a procedure. Fade the step central to the learning goal. Do not call a problem with a new formula, a new molecule type and a new rearrangement a simple faded example. Move extra practice onto the lesson page when including it would break video flow. Experienced revisers may bypass the complete example; measure prior knowledge rather than infer it from age.

Give one concrete response instruction at a time: choose an operation, count one atom type, trace a new strand or name the control needed. Keep the prompt visible. Insert actual answer-free time. For self-explanation, ask a bounded “why” question and later provide the causal link. Vague “think about that” prompts make effort hard to observe. Feedback should state the correct response, the reason and the repair for a plausible error. Brief reassurance should be specific: “The bracket is doing two jobs. Count the atoms first.” Humour is optional, brief and related; avoid jokes about incompetence, disease or exam panic.

Use direct conversational Australian English with precise scientific terms. “You” can address a task without assigning a medical condition to the viewer. More personal language is not invariably better: a 2024 university study of diabetes materials found poorer transfer with personalisation. [Almeida, Münzer and Kühl](https://onlinelibrary.wiley.com/doi/10.1111/jcal.13026).

Read the information students need to identify the entity, understand the relationship and follow a critical numerical step. Let the board carry repeated contributions, labels and mechanical arithmetic. Never omit an essential quantity solely because it is visible; supply a descriptive transcript and narrate critical spatial relationships for viewers who cannot see the diagram. End by retrieving the decision rule and offering an unseen application or a relevant next lesson, not a long repeated list or generic encouragement.

### Structures by teaching task

| Structure | Sequence and concrete example | Assets and key check |
| --- | --- | --- |
| Concept with contrast | Molar mass: equal entity count, unequal mass; define mass per mole; double a same-composition sample; compare O atoms and O₂ molecules; explain what stays constant | Existing scale diorama and unit cards; ask whether M doubles |
| Procedure with fading | Molar mass: justify `m = nM`; complete carbon example; complete a missing operation for another atomic sample; independently solve molecular chlorine problem | Existing worked board; new transfer problem must not copy its numbers |
| Ratio reasoning | Limiting reagents: predict from raw Na/Cl₂ moles; derive coefficients as requirements; compare capacities; explain yield from the limiting amount; calculate leftover excess later | Existing coefficient bars and dashed original reference; explain why raw mole count fails |
| Causal mechanism | DNA: predict complementary bases; open templates; orient antiparallel ends; trace 5-prime to 3-prime synthesis; explain fragments; inspect semi-conservative products; critique omissions | Native hand-drawn fork; add enzyme stages only where scope needs them; trace direction on an unfamiliar sequence |
| Evidence interpretation | Enzyme graphs: read axes and assay conditions; describe rising/plateau regions; propose saturation explanation; contrast denaturation; predict an enzyme-concentration comparison | Existing enzyme-graph diorama; ask what extra observation distinguishes explanations |
| Investigation preparation | Catalase: present a confounded plan; choose IV/DV; fix controls and tissue preparation; distinguish endpoint gas volume from rate; discuss repeats and leakage; plan actual supervised practical | Existing apparatus artwork with coded connections; critique an unfamiliar flaw rather than recite variable names |
| Revision and exam application | Start with an unseen question; choose a method; short answer-free hold; compare reasoning to a response rubric; link prerequisite only if needed | Quiz/summary board; assess error diagnosis and an altered context |
| Physics transfer proposal | Series circuit: predict current at two points; explain conservation and energy transfer; compare readings; place ammeter in series and voltmeter across a component | Reuse circuit artwork only after correcting branch capability. No existing Physics lesson was available for this example |

## 4. Duration, pacing and flow

The following are **starting hypotheses**, not research-derived optimal ranges. Measure how long students need for the intended action. Guo et al.'s MOOC watching data concern engagement, not HSC learning or an experimentally established duration ceiling. E2 and E11 explain the distinction.

| Task | Initial complete-video allowance | Decision rule |
| --- | --- | --- |
| One concept or contrast | 3 to 6 minutes | One relationship plus contrast and application; split if a second independent relationship appears |
| Calculation | 4 to 8 minutes | Include rationale and supported practice; split when moving to a new procedure, not halfway through a worked example |
| Biological mechanism | 4 to 8 minutes | Keep causal chain and stable landmarks together; chapter sub-processes before making separate videos |
| Practical preparation/demonstration | 5 to 10 minutes | Preserve complete critical actions and safety context; link separate analysis lesson when data reasoning has its own objective |
| Data/exam application | 3 to 7 minutes | Retain stimulus through conclusion; chapter observation, reasoning and evaluation |
| Focused revision | 1 to 3 minutes | Assume and name prerequisites; one challenge and repair; link full explanation |

Initially audition plain-language explanation around 135 to 165 spoken words per minute, with dense numerical or symbolic passages around 110 to 140. These are planning bands for listening tests, not mandates or playback-speed targets. Count spoken words consistently, and measure articulation separately from pauses. Whole-video words per minute obscures useful holds. V3's 691 words over 352 seconds is about 118 words per planned minute, but says nothing reliable about the selected take's delivery.

Try answer-free holds of 3 to 5 seconds for a binary prediction, 5 to 8 for atom count or method choice, 8 to 15 for a short explanation, and 15 to 30 plus an explicit pause invitation for a multi-step calculation. These are hypotheses. Five seconds can be enough to start the chlorine problem, not a claim that every student can finish it. Reading holds begin after the display is fully stable. Add time for captions, notation, eye movement between references and the actual task. Do not run new narration over a thinking hold.

Alternate demonstration, learner action and feedback when the objective earns those beats. Change emphasis when the reasoning changes, not to satisfy a clock. Maintain the worked problem, original values and reference states long enough for comparison. Use chapters for returning viewers. Split when objectives or prerequisites are separable; retain a connected causal chain, a whole calculation or a practical sequence when splitting forces students to reconstruct it from memory.

## 5. Voice and sound

**Delivery judgement:** Simon should sound like a calm, attentive Australian science teacher. Invite a prediction with light curiosity; slow and emphasise the operation or contrast; settle on a conclusion. Avoid uniform stress on every noun, theatrical surprise, “easy” assertions or a constant upbeat pitch. Reassurance should explain how to proceed. Preserve useful silence and sentence variety instead of filling every gap.

Separate script decisions from generation controls. First remove repeated board-reading and add the reason for a decision. Then audition delivery controls on the same approved words. Simon's narrator selection persists; a model or take still needs scientific number, accent and listening review. The compound audition is V2 wording and cannot be attached to a V3 rewrite.

Official documentation checked on 2 October 2026:

- The [model catalogue](https://elevenlabs.io/docs/overview/models) offers v4, v3, Multilingual v2 and Flash v2.5. Provider quality descriptions are not educational comparisons. Offline rendering makes low inference latency a minor criterion; corrected minutes and failed-take rate matter more.
- [v4 documentation](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/eleven-v4) describes Stability and Similarity, but no Style/Speed sliders or SSML. Test v4 with Simon rather than carrying over legacy settings. Audio-tag adherence is imperfect.
- [Provider best practices](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices) describes v4 IPA and model-dependent pronunciation support. Verify terms in context. Generic speed/pause advice is not a guarantee for every model.
- The [timestamped dialogue endpoint](https://elevenlabs.io/docs/api-reference/text-to-dialogue/convert-with-timestamps) recommends at most 2,000 total text characters per request for reliable generation and only best-effort seeded determinism. This endpoint recommendation differs from catalogue model limits.
- [Forced alignment](https://elevenlabs.io/docs/overview/capabilities/forced-alignment) can align supplied text and audio. Alignment does not establish that the recording said the correct number.

Repository request construction currently sends v4 through timestamped dialogue with defaults and a conservative 2,000-character cap. It does not expose the two v4 controls in that branch. This is an implementation choice, not proof that v4 has no controls. The docs also show differing endpoint examples across pages; use the actual endpoint schema and a dry run before integrating changes. No new requests were generated in this task.

Use an approved pronunciation ledger: scientific written form, intended spoken form, entity meaning, reviewed audio example, model and dictionary version. Start with `mol`, `g mol⁻¹`, capital M versus lowercase m, O₂/Cl₂, `2.00`, `24.0`, `234.044`, `10²³`, Ca(H₂PO₄)₂, helicase, ligase, 5-prime/3-prime and Greek symbols relevant to future Physics. Distinguish an O₂ molecule from an oxygen atom. Read significant trailing zeros when they matter. A plain speech form can be used for generation, but preserve correct orthography in captions, with a versioned mapping and a check against the actual sound.

Default to speech without music during teaching and silent response holds. The renderer already confines optional background music to the stinger, which is a useful starting point. Background-music research is mixed across tasks and populations; this default is a conservative production judgement, not a claim that any music always harms learning. [Cheah et al., 2022](https://doi.org/10.1177/20592043221134392). Real apparatus sound can be instructional if the sound is part of the evidence. Sparse transition cues are optional; remove sounds that compete with words or imply molecular impacts, speeds or events the model does not establish.

As a starting engineering target, retain the pilot's roughly -18 LUFS integrated loudness and peak below -1.5 dBTP, then listen on phone speaker and headphones. This is a local target, not a claimed YouTube requirement. Check clip-to-clip consistency, clipping, hiss, sibilance and numeric intelligibility. Assemble exact digital silence on the timeline between prompt and answer; do not trust punctuation or an audio tag to produce exactly five seconds.

## 6. Visual design, animation and accessibility

**Evidence-informed:** align narration and relevant graphics in time, put labels close to their referents, signal the active relationship and remove irrelevant detail. Animation is useful when it represents a change students must understand; it is not superior for every still equation. E3 to E6 describe support and limits.

**Production judgement:** retain a bounded vocabulary of stable boards, before/after comparisons, coefficient bars, causal paths, progressive reveals, leader lines, one active highlight, original-state ghosts and a held prompt/answer board. Inspect the existing components first. Hand drawing can show construction and a teacher's attention, painted plates can locate a practical context, editorial boards support precision, and dioramas can compare quantities or relationships. None is an evidence-established universal winner. Change treatment at meaningful scene boundaries while maintaining entity colours, notation, typography and caption space.

Review animation at start, midpoint, turning points and final state, then in continuous playback. Check conservation, stoichiometry, connections, direction, sequence, relative scale and model omissions. For DNA, check each new strand's synthesis direction, template pairing, fragment starts and joins. For coefficient bars, distinguish a normalised capacity from physical reactant disappearing. For circuits, preserve correct topology and explain that moving dots are a representation rather than a measured electron-speed simulation. For balances, label schematic heaps and masked raster readings; no attractive illustration should masquerade as data.

The inspected painted limiting-reagent plate leaves the coded comparison visible and does not show an actual sodium/chlorine reaction. Retain this useful restraint. Do not stage reactive sodium and chlorine together in plausible open glassware simply for atmosphere. Remove or crop context when students need to inspect small labels, a graph or an equation. Backgrounds earn space when they locate the task; visual preference alone does not prove benefit. Recent evidence finds a small average penalty for irrelevant details with substantial contextual variation. [Cheng et al., 2026](https://link.springer.com/article/10.1007/s10648-025-10099-z).

A 28-pixel source body label at 1920 width becomes about 5.7 CSS pixels in a 390-wide player. Source font minimums cannot establish phone readability. For a landscape frame shown at 390 pixels wide, begin around 70 source pixels for essential labels and enlarge/crop until the device review succeeds; this is a test allowance, not an accessibility threshold. Review in an actual small player with captions and controls enabled, not only a 1080p still. Reduce information or use a full-frame detail before shrinking text. Stable glyphs, units, superscripts and subscripts matter more than chrome. Avoid moving readable text during holds, camera drift carrying labels, word-by-word hero shimmer and decorative tickers on precise results.

Use colour plus labels, patterns or shapes. Check contrast on the rendered artwork, not only token values, especially amber and small tertiary labels. Provide sufficient contrast using [WCAG 2.2 contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), and do not convey an answer by red/green alone. Reserve a lower caption region and review actual player placement. The bracket preview uses the lower portion for the result and guard-digit rule, so caption-on review remains necessary despite a clear standalone still.

Teaching text and accessible captions have different jobs. Concise on-screen text can summarise or label. Captions should faithfully convey audible language and relevant sound, with correct scientific notation and readable phrase grouping. Provide SRT/VTT, an accessible player and a descriptive transcript containing necessary visual information. Integrate important descriptions into narration where possible; provide further description when essential information remains visual. Follow [W3C media accessibility guidance](https://www.w3.org/WAI/media/av/). Test sound-off with captions, keyboard operation and diagrams that remain understandable when colours are hard to distinguish. Do not interpret redundancy research as permission to remove necessary captions.

## 7. YouTube and returning viewers

**Educational judgement:** put the actual question in the opening, make the solved board pausable, keep the stimulus through feedback, supply transcript/notes/practice and link prerequisites. A returning student should be able to find “count atoms”, “choose multiply or divide” and “try a new problem” without replaying identity material.

**Platform guidance:** use accurate topic titles and thumbnails that communicate the specific problem or relationship, with coherent subject naming and cohort in packaging. Avoid unsupported claims of guaranteed marks. Create chapters from the final export timeline, not raw scene totals. YouTube's [chapter instructions](https://support.google.com/youtube/answer/9884579?hl=en) require a first timestamp at 00:00, at least three ascending timestamps and chapters of at least ten seconds. Account feature availability still needs checking at publication.

Track impression click-through, early drop-off, completion, chapter returns and pauses as secondary diagnostic measures. A pause can mean useful calculation or confusing delivery; ask which. A retention spike can be revisiting a good example or struggling with a bad one. Satisfaction and perceived understanding can diverge from assessed learning. [Deslauriers et al., 2019](https://doi.org/10.1073/pnas.1821936116). Evaluate packaging separately after teaching variants are stable. Do not trade away an effective response hold merely to raise uninterrupted watch time.

## 8. Compact scene planning template

One row per meaningful teaching beat. Put uncertain timings in seconds during drafting, then resolve exact frames from the selected audio and the hold plan. This is a companion to `docs/animation-planning.md`, not a required new schema.

| Objective | Student decision/action | Narration and segment ID | Existing visual and treatment | Motion and scientific constraint | Reading/thinking hold | Evidence of understanding | Reviewer/status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Count atoms in a bracketed formula | Count O before calculating | `bracket-prompt`: “How many oxygen atoms?” | Existing bracket board, exact coded formula | Outline two groups; do not reveal count or contributions during response | 5 s exact answer-free gap, then optional longer pause | Gives 8 and explains 4 per group × 2 groups | Subject review pending |
| Use molar mass as mass per mole | Choose multiply or divide | `carbon-why`: “Each mole contributes 12.01 grams.” | Existing worked board | Reveal `2.00 × 12.01`; keep given values | Read after final line lands; duration to test | Explains operation and solves changed amount | Phone/caption review pending |
| Explain semi-conservative replication | Trace original strand into a daughter molecule | `dna-template` | Native hand-drawn fork | Antiparallel templates, valid pairing; disclose omitted enzymes | Hold reference strands; quiet prediction before reveal | Traces one original and one new strand correctly | Full motion review pending |

Blank fields to copy: lesson/cohort/source URL and retrieval date; objective; prerequisites; misconception; beat ID; student action; exact spoken and written forms; segment ID; asset/version/provenance; visual reference state; narration cue; reveal/transformation; earliest answer exposure; hold type/duration; assessment item and expected reasoning; science/accessibility/media reviewers; open issue and resolution.

## 9. Production system and review gates

Work through the existing four layers: lesson content, scene type, slide component and renderer. Put a changed explanation in an isolated draft first. Reuse a scene/component that serves it. Add a capability only when no existing design can explain the target correctly. Renderer changes should solve explicit playback/timeline needs, not conceal content defects.

| Gate | Required evidence before advancing | Human priority |
| --- | --- | --- |
| Content and cohort | Verified syllabus edition/year; source content point; objective, prerequisite and unseen check; no claims that viewing fulfils a conducting requirement | Subject teacher confirms scope and assessment interpretation |
| Science and script | Independent arithmetic; entities, units, assumptions and limitations; corrected misconceptions; no invented marking claims; punctuation check | Review calculations, molecular mechanisms, practical inference and health content first |
| Scene plan | Reuse/adjust/missing decision; exact visual meaning through motion; no answer leakage during holds | Teacher and designer inspect hardest teaching beats |
| Voice | Exact script version, model/settings/dictionary and selected take; listened checks of every critical number/term; delivery review | Every new recording needs human listening, not only its transcript |
| Alignment and access | Audio hash, alignment and caption versions linked; no unexplained token mismatch; inserted gaps accounted for; intro covered; descriptions and transcript | Check scientific notation, timing, caption collisions and accessibility needs |
| Media | Validation/type checks appropriate to promoted content, asset presence and decoding, complete timing, loudness measurement, endpoint behaviour | Watch the full exported MP4 on desktop and phone, with captions on/off |
| Pilot and release | Recorded learner results, unresolved defects closed, approved full lesson and packaging; retained release manifest | Release lead decides from evidence, not an average visual score |

The existing preflight catches missing/stale hashed audio, missing alignment, timing windows and invalid scene captions. It does not prove scientific accuracy, agreement between captions and actual speech, valid audio decoding, all artwork provenance or learning benefit. Its text hash covers the text, not every model/setting/dictionary change. Extend a release manifest later to include source JSON hash, scene/segment speech text, displayed text, voice ID, model, endpoint, settings, dictionary version, raw take hash, assembled audio hash, gap offsets, alignment hash, captions hash, assets/licences and render configuration. Changed text requires new audio, alignment and captions. Changed audio also invalidates downstream timing even if words are unchanged.

Caption export shifts scene tokens for intro and transition timing, but its inspected loop does not add intro voiceover cues. Before the first complete release, verify and cover the actual narrated intro, if retained. Do not assume an automatically exported SRT is complete merely because scene caption arrays pass preflight. Use one authoritative resolved timeline for audio, reveals, captions, chapter markers and assessment hold boundaries.

Automate schema/asset checks, arithmetic recomputation, notation consistency, punctuation checks, hash dependency checks, caption coverage, timeline bounds, frame samples and exports. Preserve original media and compare selected changes. Human judgement remains necessary for causal correctness, misleading models, curriculum applicability, response quality, pronunciation, pedagogical usefulness, cultural context and complete playback. Prioritise those risks over a decorative polish score.

## 10. Roadmap and resources

These are planning estimates in person-hours, not measured repository productivity or supplier quotes. They assume existing assets and one experienced developer/editor with subject-review access. Log actual work and rework during pilots before setting catalogue budgets. Workstreams may overlap; do not sum every allowance as a fixed quotation.

| Stage | Priority and concrete work | Initial allowance | Decision supported |
| --- | --- | --- | --- |
| Before next pilot | Correct comparison scripts and questions; lock one scientific value set and response task; audit chosen copy; finalise cohort label | 4 to 8 h plus 1 to 2 h teacher review | Safe, interpretable script comparison |
| Before next pilot | Plan prompt/gap/answer assembly, caption mapping and cue timing; reuse one board; prepare two isolated variants and questionnaire | 6 to 12 h plus render time | Variants differ in intended instructional wording |
| Before next pilot | Recruit 6 to 8 formative learners, handle required consent, run sessions and analyse failure patterns | 8 to 14 h, recruitment lead time additional | Understand comprehension/readability failures, not efficacy |
| Before first complete release | Resolve segmented/assembled audio path, caption coverage including intro, dependency manifest, science issues in selected lesson and phone review | 12 to 24 h engineering; 4 to 8 h editorial/teacher/listening review | One complete release survives all gates |
| Before first complete release | Complete molar mass plus a short Biology mechanism and investigation-analysis check; obtain real full playback review | 8 to 16 h for additional reused-asset clips, excluding large capability gaps | Check that the standard transfers beyond calculations |
| Before batch production | Conduct controlled learner comparison if recruitment permits; document results, teaching-task structures, reviewers, asset backup and rollback | 16 to 30 h staff for comparison and analysis; school approval/recruitment variable | Proceed to a monitored small batch or revise |
| Before batch production | Add only demonstrated automation gaps; pin validated renderer/tool versions; measure render, retake and review costs | 12 to 24 h initially | Repeatable outputs and defensible unit costs |

Budget labour as `sum(role hours × agreed AUD hourly rate)`. For illustration only, 20 hours at an assumed AUD 100/hour is AUD 2,000; neither number is a local wage claim or quote. Media cost is `approved generated characters × model/voice credit multiplier × marginal credit price`, plus failed takes and alignment charges. ElevenLabs [credit guidance](https://help.elevenlabs.io/hc/en-us/articles/27562020846481-What-are-credits) makes costs dependent on plan, model and product. Verify the actual account rate before authorised generation. Promotional credits are capped and are not a sustainable zero-cost production assumption.

Track cost per **accepted** finished minute, including script, review, retakes, rendering, correction and backup. Do not extrapolate silent prototype render time to whole-catalogue economics. Assets ignored by Git require a manifest-backed media archive and a restore test. Archive rights, creator/tool/prompt, source licence and scientific-review status; generated artwork provenance does not establish accuracy or unlimited reuse rights.

## 11. Uncertainties and next decision

Known gaps: compound take listening/selection; exact new Biology content mapping; available Physics lesson material; recruitable learners and consent route; account-level model access and marginal cost; best response-hold duration; actual phone/caption readability; whether the improved script helps transfer; and model-specific Simon reliability. These gaps are explicit release or experiment decisions, not reasons to overwrite the catalogue.

I would choose the mixed existing visual vocabulary, Simon, clean sound and task-specific scripts with causal explanations and genuine response opportunities. The strongest justification is the instructional evidence, the usable repository assets and the user's accepted voice preference. Neither visual polish nor an expressive-model advertisement establishes learning effectiveness.

The smallest next experiment is the matched molar-mass script pilot in the [protocol](pilot-protocol.md): one board, one Simon model, two corrected explanations and the same held question, assessed through one novel calculation and one “why this operation?” response. Test delivery separately afterward. If learner recruitment is unavailable, complete expert and device review first and keep all learning-effect conclusions unresolved.
