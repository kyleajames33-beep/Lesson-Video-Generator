# Beginner teaching audit: selected Module 5 lessons

10 October 2026. Independent reviewer: Sol 6.1, `/root/bio_b2_independent_review_sol`. Scope: current C2/B2 v4 lesson content and the next C3/plant preparations. No source, recorded words, frozen evidence, media or gate was edited. Recommendations below are proposed changes, not implemented copy or recording approval.

**Priority: reduce concurrent reading before tightening geometry again.** The user's reported clutter is credible against the selected screens: a large task, givens, conditions, active explanation and established trail compete with speech and optional captions. Earlier science and native-fit reviews did not test beginner understanding. Keeping glyphs above a reserve does not resolve this teaching problem.

Read HANDOFF.md, the HSC research standard and implementation plan, teaching templates, visual handbook and animation planning. This recommendation applies their segmentation, nearby labels, causal explanation and supported-practice guidance. It is a scoped editorial judgement, not a measured learner-effect claim. Preserve useful diagrams and readable text sizes. Simplify the information, rather than making it smaller. Faithful accessible captions retain the recorded speech.

## Exact reviewed sources

| Source | SHA-256 |
| --- | --- |
| `out/prototypes/module5-c2-voiced-2026-10-10/narrated-v4.lesson.json` | `f4e473e210efdb0a53f10b6dd636e261ef112a7fca0f146a92da2557ce75a3ba` |
| `out/prototypes/module5-b2-voiced-2026-10-10/narrated-v4.lesson.json` | `ff680f50cf74fb6821a3244752599c718624158e42d93ed9db7b0dc19ce47496` |
| `docs/production/drafts/module5-next-preparation-2026-10-10/chemistry-c3.md` | `6e0da9cf486c5f9820783029d18459d7a1bd0ea7f5a24c92b664b929f8e1ffc7` |
| `docs/production/drafts/module5-next-preparation-2026-10-10/biology-b3-plants.md` | `62aabe6598a519a081b1ee8d0174003dc167fab0f8f346f1f487b242655224ba` |
| `src/slides/shared/Module5EvidenceBoard.tsx` | `1ac601329e7f1a742cb59437ba4246e1125c2c531c90334c7a4ce944a408a0c3` |
| `src/slides/QuickCheckSlide.tsx` | `072845ea3d934186a40725f7c3dbf2c79027d9a56a8b7db6385e698aadf7a5e2` |

C2/B2 contain existing selected recordings. C3/plants contain proposed, unrecorded speech. Silent title cards need no added vocabulary. This audit does not assess the separate completed calculation packages or certify syllabus-action coverage.

## First implementation: simpler screens with the existing C2/B2 audio

Keep the actual question, necessary conditions and supplied values visible through the attempt. During explanation, focus the current evidence and its consequence. Reduce repeated prose, large secondary headings and prior-result trails to the information used in the current comparison. Preserve a compact stimulus reference. Any changed display must still land at its corresponding recorded phrase, and future answers must stay hidden during the measured hold.

The copy below is proposed teaching text. It does not replace transcripts or timed captions. Arrows describe the stated model or mechanism, not a complete molecular simulation.

| C2 scene | Simpler proposed screen copy and decision |
| --- | --- |
| `c2-hook` | `Can B change back before A is gone?` Keep the A/B conversion picture; avoid a second paragraph asking the same question. |
| `c2-model` | `A ⇌ B`, then `One A becomes one B`. Compact conditions: `Matter stays inside. Temperature and volume fixed.` Show `No B yet → reverse rate is zero` on its spoken cue. Replace the prominent `Fixed first-order coefficients` teaching bullet with `In this model: rate depends on how much is present`; retain technical model limits in supporting notes. |
| `c2-collision` | Beside the relevant particles: `Meet + enough energy + suitable arrangement`. Then `Effective collision: a collision that produces reaction`. Show the NO₂ association example separately from the A/B conversion model. |
| `c2-rates` | On the labelled graph: `Less A → slower A to B`; `More B → faster B to A`. At balance, `Same rate in both directions`. Do not also require reading a full explanatory callout and qualifier paragraph. |
| `c2-amounts` | `Rate: how fast` versus `Concentration: how much per volume`, attached to the respective graphs. Final contrast: `Equal rates. Amounts can differ.` Keep axes, units/model labels and the unequal reference levels. |
| `c2-catalyst` | `Catalyst: equilibrium sooner`, then `Same final amounts` beside matching final levels. Retain the energy-pathway graphic only while it explains the barrier. Avoid asking students to inspect that pathway and a concentration comparison simultaneously. |
| `c2-transfer` | Short task: `Which increases first? Does the catalyst change final D?` Compact stimulus: `C → D: 2`, `D → C: 6`, `Same rate units; one-to-one`, fixed-condition strip. Feedback: `C made: 6. C used: 2.` Then `6 − 2 = 4: C increases.` Later replace that active explanation with `Catalyst: sooner. Same final D.` Retain the initial result as one small reference only when needed. Keep both original question demands visible. |
| `c2-summary` | `Both directions continue`; `Equal rates, not equal amounts`; `Catalyst: sooner, same final amounts`. Keep the C3 handoff separate. |

| B2 scene | Simpler proposed screen copy and decision |
| --- | --- |
| `hook` | `Where did sperm and egg join?` Keep frog/pond and bird/already-fertilised-egg stimuli. Avoid repeating the question in heading, body and card labels. |
| `concept-fertilisation` | `Sperm: 1 set` + `Egg: 1 set` → `Zygote: 2 sets`. Add `haploid` and `diploid` beside those already-explained set counts. Reveal the terms with their meanings, not an additional prose list. |
| `concept-asexual-animal` | On the hydra sequence: `Bud grows` → `Bud develops` → `New hydra can detach`, with `No sperm-egg fusion`. Retain the animal example and its scope. |
| `concept-external` | `Sperm and egg join outside`. Then point to the relevant setting: `Moisture reduces drying`; `Close in place and time: more chances to meet`. Show the later-survival distinction afterwards. |
| `concept-internal` | `Sperm and egg join inside`; `Moist tract reduces drying`. Later, `Sperm must be transferred`. Keep habitat and offspring-care qualifications in speech and supporting notes without a competing list. |
| `definition-comparison` | One bird sequence: `Join inside` → `Egg laid` → `Embryo develops outside`. Introduce care as a separate question after that distinction is stable. |
| `worked-example` | Present one case at a time with adjacent reason and classification: `Frog: pond water → outside → external`; `Kangaroo: inside female → internal`; `Bird: joined before laying → internal`. For the bird, add `Embryo develops outside` at its later cue. Remove the simultaneous full-size frog/kangaroo givens and long established trail; keep only a small comparison that serves the bird contrast. |
| `misconception` | `Better under which conditions?` with `Less drying` and `Transfer costs` revealed in sequence. Final `Fertilisation does not guarantee survival`. |
| `quick-check` | Stimulus: `Same gamete numbers`, `Same time able to fertilise`, `Group 2: current carries sperm away`. Keep two short questions: `Chance of fertilisation? Same surviving offspring?` Feedback: `Further apart → fewer meetings → fewer opportunities`, followed by `Fertilisation ≠ later survival`. Reveal the exact-count limitation separately. Do not stack three prose summaries beside the active explanation. |
| `summary` | `Budding: no fusion`; `Fusion: 1 set + 1 set → 2`; `Internal/external: where fusion happens`; `Explain the conditions`. |

Retain current animal and chromosome-model limitations without turning them into large simultaneous reading tasks.

## Recorded phrases that need a beginner bridge

These are **proposed unrecorded revisions**, not claims that current audio already says them. Review them before any new take. Several current explanations are already causal and should be kept, including B2's explicit outside/inside classification and C2's six-made/two-used comparison.

| Current phrase/location | Proposed clarification |
| --- | --- |
| C2 opening, `equal reaction rates` | Brief retrieval: `Rate means how much changes per unit time. At equilibrium, A changes to B just as fast as B changes to A.` Do not infer that the viewer completed C1. |
| C2 catalyst, `alternative reaction pathway with a lower effective activation barrier` | `A catalyst provides another way for the reaction to happen. That pathway has a lower energy barrier, so reaction can happen more readily in both directions.` Retain unchanged endpoint energies and final-composition conditions. |
| C2 transfer, `interconvert`, `net four units` | `C can change into D, and D can change into C.` Explain that both supplied rates use the same units before subtracting. `Six units make C while two use it, so the overall change is four units towards C.` |
| B2 hook, `gametes fusing` | `Gametes are reproductive cells, such as sperm and egg. Fusion means they join.` Introduce the word before relying on it. |
| B2 ploidy, `chromosome sets` | `Chromosomes carry DNA. This model shows one set from the sperm and one from the egg.` Point to the two sets before naming haploid and diploid. |
| B2 ploidy, `meiosis reduces the chromosome sets` | `Meiosis is the cell division that makes cells with one chromosome set in this animal pathway. Fertilisation joins two sets again.` Keep detailed meiosis for its own lesson. |
| B2 quick check, `broadcast-spawning`, `viable` | `Adults release eggs and sperm into the water.` Then `The gametes remain able to take part in fertilisation for the same time.` Explain the model's controlled condition without assuming those terms. |
| B2 quick feedback, `predation` | `Some developing offspring may be eaten, and other conditions can prevent survival.` Keep fertilisation and survival to reproduction distinct. |

## Next unrecorded preparations: prevent the same load

| C3 scene | Proposed screen copy / beginner support |
| --- | --- |
| `c3-hook` | `Add A: what changes immediately?` Show A's jump with B unchanged before the later response. |
| `c3-add` | `A added` → `A to B initially faster` → `A falls; B rises`. Keep the original and immediate references. Final `More A and B than before, in this model` only when explained. |
| `c3-remove` | `B removed` → `A to B initially faster` → `B partly recovers`. Preserve `B remains below its original level` beside the original reference. |
| `c3-principle` | `One direction temporarily faster`; `Same temperature: same K`. Before using K, explain in speech that it is the number describing the reaction's equilibrium relationship at that temperature. Do not introduce an incomplete products/reactants formula. |
| `c3-temperature` | Keep `2NO₂ ⇌ N₂O₄`. Translate beside the forward arrow: `Joining releases heat: exothermic`. Then `Heating favours splitting`; `Cooling favours joining`. Define endothermic as absorbing heat before using it. Retain reaction direction, gas labels and fixed conditions. |
| `c3-temperature-response` | Reveal `Temperature changes`, then `K for that temperature changes`, then `Composition adjusts`. Explain `Concentration does not jump: no species added or removed; volume fixed`. Avoid three animated bands competing with new terminology. |
| `c3-water` | `Heating only: material retained` versus `Water removal: temperature fixed`. Explain a hydrated material as a material containing water in its structure before the open-oven example. |
| `c3-transfer` | Split the two separate experiments into two response opportunities within the same boundary. A-removal task: immediate change, then rate reason and K. Cooling task: heat direction, then N₂O₄ and K. Do not ask a beginner to retain two equations, two disturbances and all conclusions during one 12-second attempt. Hold duration remains a hypothesis to test. |
| `c3-summary` | `What changed directly?` → `Which reaction is initially faster?` → `Same temperature or changed temperature?` |

| Plant scene | Proposed screen copy / beginner support |
| --- | --- |
| `hook` | `Runner: no fusion` versus `Self-fertilisation: fusion`. Explain fusion rather than relying on one visible parent. |
| `concept-flower` | Introduce nearby labels in sequence: `Anther makes pollen`; `Stigma receives pollen`; `Ovary contains ovules`. Zoom the nested egg location afterwards. Do not introduce anther, stigma, style, ovary, ovule and embryo sac as one simultaneous memorisation task. |
| `concept-delivery` | `Pollination: pollen reaches stigma` → `Tube delivers sperm` → `Fertilisation: sperm joins egg`. Keep pollen grain, tube and sperm visually distinct. Explain that pollen germination means it starts growing a tube in this context. |
| `concept-seed` | `Zygote → embryo`; then `Ovule → seed, containing embryo`; later `Ovary → fruit`. Speech bridge: the zygote is the cell formed by fusion, and the embryo is the developing plant. Preserve the nested structures and the embryo-forming scope. |
| `concept-runner` | `Runner = stem`; point to the node where this runner can form roots and a shoot; `Roots + shoot → new plant`; `No fusion`. Define mitosis briefly as division supporting growth, or link the foundation rather than relying on the name. |
| `definition-self-cross` | `Self: same plant`; `Cross: different plants`. Separate later `Fusion confirmed → sexual`. Explain compatible pollen as pollen that can complete this pathway with the receiving plant. |
| `worked-classification` | One case at a time: `Runner / no fusion / asexual`; `Same plant / fusion / sexual`; `Different plants / fusion / sexual`. Keep prior answers in one compact comparison only after their reasons are established. |
| `concept-conditions` | `Pollen transfer limited` beside the sexual pathway; `Runner conditions suitable` beside the vegetative pathway. No winner label. |
| `quick-check` | `Pollen arrived. Tubes stopped before ovules. No other route.` Retain questions about pollination and fusion/embryo formation. Reveal each reason in order. Preserve viable/compatible pollen and the model's fusion requirement in understandable stimulus notes. |
| `summary` | `Transfer → delivery → fusion → embryo`; `Ovule → seed`; `Runner: new plant without fusion`. Keep fungi/bacteria/protists as the next contributions, not completed content. |

## Root handoff

First make a display-only C2/B2 candidate using the existing recorded words, audio and measured holds. Compare the difficult worked/feedback screens during exact normal-speed playback with captions. Ask whether a beginner can explain the shown reason, not just read the final verdict. The tables are implementation guidance, not a requirement to apply every suggestion.

If the vocabulary bridges or reason-first speech revisions are selected, root must revise the exact script, regenerate the affected recording segments, rebuild alignment/captions and rederive dependent cues. Do not silently attach old recordings to new words. C3/plants can incorporate clarified vocabulary and staged reasoning before initial recording. Preserve scientific conditions, entry/start/stop/next boundaries and existing useful model limitations.

Source review, native stills, human listening, device/caption playback, learner understanding and release approval remain distinct. No claim of mastery, adequate universal hold time, complete syllabus coverage or full-export readiness is made here.
