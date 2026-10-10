# Independent review: beginner C3 and plant preparation

Reviewed 10 October 2026 by Sol 6.1, `/root/chem_c2_selected_implementation`, in a separate reviewer assignment from root. Decision: **PASS for the exact human-readable preparations below, with no blocking science or beginner-teaching finding.** Selected-source, recording, visual, voiced-preview, human-listening and release gates remain pending. This decision does not approve practical conduct, completed syllabus coverage or paid generation.

The current beginner scripts were written by a different author. This reviewer did not edit them. The reviewer authored the earlier C3 parent preparation and therefore does not claim independence from that historical source-inspection inventory. This review independently checks the other author's new spoken revision, its model mathematics, response opportunities and course boundaries. Historical visual findings were selectively rechecked against current component source as described below. No renderer or audio was created for these candidates.

## Exact reviewed inputs

Paths are repository-relative. SHA-256 is calculated from file bytes, including line endings. A changed script requires a bounded follow-up against its new hash.

| Input | SHA-256 |
| --- | --- |
| `docs/production/drafts/module5-beginner-preparation-2026-10-10/chemistry-c3.md` | `22bcd7f9a2d7279dd2f7c8df7f9a9e091fcff11e23d4df20b4012d8420f98ff2` |
| `docs/production/drafts/module5-beginner-preparation-2026-10-10/biology-b3-plants.md` | `0a2ab244ed56d890953bf65424208aa51dad2e1c285be54a80d2373283472aad` |
| `docs/production/drafts/module5-beginner-preparation-2026-10-10/revision-record.json` | `b8e10fff62d2afac0221ff60c3b8c5f4a5e87e1124218c3b766c2522e85303e3` |
| Current `docs/production/module5-video-route-2026-10-10.json` | `28458a3f7ca9124bbf2c0ce08baa0a651baa6d9870d171270a997a2c4d4e7b49` |

The source documents and revision record contain no U+2014 or Unicode replacement character. Whitespace-delimited counts were independently repeated using only marked spoken paragraphs. They match the revision record: C3 has 1,184 words across 12 recording segments; plants has 1,081 words across 11 recording segments. Titles, directions, proposed silence and silent mathematics are excluded.

Applied project criteria: `AGENTS.md`, `HANDOFF.md`, the HSC video production standard and `docs/research/library-implementation-plan.md`, teaching templates and visual brief, visual-design handbook, animation planning, preview-first review, course progression plan/ledger/content checklist and the current focused route. The beginner additions in the current project rules and teaching templates were read for this review.

## C3 decision and evidence

The new speech explains rate and concentration before relying on those terms. It moves from the directly imposed change to the initial rate imbalance and then to the later response. Addition and removal are separate reset experiments. The original-state comparison prevents a rightward response being mistaken for a guarantee that the final product amount exceeds its original value. The repeated phrase "in this model" and the silent first-order specification bound the conclusions; no real reaction rate law is inferred from its balanced equation.

Independent mathematical check uses the declared rates `forward = A`, `reverse = 2B`, fixed volume and a closed mixture after transfer. Thus `A_limit = 2 total / 3` and `B_limit = total / 3`. The three silent reference cases are correct:

| Case | Immediately after transfer | Limiting reference | Consequence |
| --- | --- | --- | --- |
| Add A = 3 to A = 2, B = 1 | A = 5, B = 1 | A = 4, B = 2 | Only A jumps; both final amounts exceed original, while A falls from its jump. |
| Remove B = 0.5 from the original state | A = 2, B = 0.5 | A = 5/3, B = 5/6 | B partly recovers and remains below its original value; A falls. |
| Independently remove A = 1 | A = 1, B = 1 | A = 4/3, B = 2/3 | Net reverse conversion partly restores A and lowers B. |

The finite trace `A(t) = A_limit + (A_immediate - A_limit) exp(-3t)` conserves the post-transfer total with `B = total - A`. Its asymptote is a reference, not an exact finite arrival time. The instruction to draw the transfer step separately and keep a limiting reference is scientifically useful.

K is introduced qualitatively before the transfer asks about it. Fixed-temperature addition/removal retains K; the written reaction and temperature remain explicit. The separate temperature example correctly uses `2NO₂(g) ⇌ N₂O₄(g)` with a heat-releasing forward direction. Heating favours dissociation and lowers K for that written direction; cooling favours association and raises K. [OpenStax Chemistry 2e, shifting equilibria](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle) supports the concentration/rate distinction, fixed-temperature K and heat-direction reasoning.

The idealised rapid temperature change retains fixed volume and material, so concentration has no imposed jump while reaction proceeds afterwards. K belongs to the new temperature rather than conversion progress. The barrier explanation does not imply that heating lowers the barrier. The oven scene identifies heating plus possible water removal as a confound; it supplies no invented colour result or practical-completion claim.

Both transfer attempts supply their own complete conditions and demands. Attempt A asks immediate concentration, subsequent direction with the model's rate reason, and K. Attempt B independently supplies the written heat-releasing reaction, cooling, closure and fixed volume, then asks composition and K. Each has its own proposed 12-second silence, feedback segment and reset visual. Their feedback follows the required causal steps. These proposed intervals have not been measured or validated with learners.

`chem-m5-c03` remains playlist position 4 after C2. The current route's concentration/temperature boundary and next C4 handoff agree with this preparation. Gas-volume/pressure treatment, catalyst comparison, K-expression construction, Q, ICE calculations, temperature/K data investigation and supervised practical work remain outside it. The entry enthalpy requirement is bridged by explaining released/absorbed heat and the sign before relying on it.

## Plant decision and evidence

The opening defines gametes and fusion before classifying the runner and self-fertilisation. Necessary first-use terms receive short meanings: anther, stigma, style, ovary/ovule/embryo-sac locations, compatible, pollen germination, zygote, embryo, node, mitosis and vegetative propagation. This is a supported introduction, not a terminology list that substitutes for explanation.

Pollen and sperm have separate identities. Ovary, ovule and embryo sac are nested locations, rather than successive transformations. The pollen grain can contain a generative cell that produces sperm, or already contain sperm, so "produces or carries" is a suitable brief formulation. [OpenStax Biology 2e, reproductive structure](https://openstax.org/books/biology-2e/pages/32-1-reproductive-development-and-structure) supports these locations and identities.

The speech separates pollen transfer, tube delivery, sperm-egg fusion, zygote-to-embryo development and ovule-to-seed development. Ovary-to-fruit remains distinct. Self/cross refer to pollen source and destination; the supplied confirmed fusion, rather than plant count or a transfer arrow, establishes sexual reproduction. This follows the mechanism described in [OpenStax Biology 2e, pollination and fertilisation](https://openstax.org/books/biology-2e/pages/32-2-pollination-and-fertilization). Depict the cross example using compatible plants of the same species; this is not a lesson about interspecific crosses.

The runner is a stem with a node, roots and a shoot that can form an independent plant. Mitosis is identified as nuclear division after the speech has established cells dividing. The genetic-combination statement allows mutation; later establishment is conditional. The model excludes apomixis rather than declaring that every seed requires fusion. [OpenStax Biology 2e, asexual reproduction](https://openstax.org/books/biology-2e/pages/32-3-asexual-reproduction) supports strawberry stolons and the seed-without-fertilisation boundary.

The three worked classifications supply their evidence before classification and clear unrelated cases. The quick check supplies compatible viable pollen, arrival on stigma, all tubes stopped before ovules, unfertilised eggs, no other pollen route and the model's fusion requirement. It retains both pollination and fusion/embryo demands. The causal feedback does not infer surviving-plant counts. The proposed answer-free interval still requires actual audio, caption and visual-boundary inspection.

The shortened sexual pathway explicitly follows embryo-forming fusion. It does not claim to explain every flowering-plant life-cycle event or double fertilisation. The eventual visual must retain this focus and cannot imply that the zygote alone makes seed coat or stored resources. This is a required model boundary, not a demand to expand the spoken script into a different lesson.

The plant contribution belongs to `bio-m5-b02b`, not the mammalian `bio-m5-b03a`. The current route now contains four ordered delivery parts inside `bio-m5-b02b`; the preparation's retained statement that root will reconcile subdivision is historical planning language. The current first plant part and next fungi, bacteria and protists contributions agree with this script. Those remaining groups, mammalian development and agricultural evaluation remain open.

## Source evidence and curriculum limits

The official cached DOCX and paragraph-extract hashes were rechecked. Relevant extracted paragraph content was inspected: chemistry p1040, p1067-p1072 and p1079; biology p1022, p1025 and p1027-p1032. The candidate mapping preserves the verbs and gaps. In particular, an explained concentration/temperature model is not evidence of conducting the chemistry investigation, and a plant contribution is not evidence for all four organism groups or agricultural evaluation. Paragraph IDs are local extraction references. No fresh complete live-syllabus or transition verification is claimed.

| Cached input | SHA-256 |
| --- | --- |
| `out/research/continuity-2026-10-08/chemistry-2017.docx` | `7c75fc806d4d8154499b0c596eda048ce4367547922bbd4058da075d9c319d42` |
| `out/research/continuity-2026-10-08/chemistry-2017-paragraphs.json` | `8f945689294fe87ac22786cbaee17cae7ffb52be4a14ca38f76e4e7048d8eef1` |
| `out/research/continuity-2026-10-08/biology-2017.docx` | `0314aff268e37fea5e75dfeb689326c4bcfbc6ff07c0d960b5ebabc07cf3e3b7` |
| `out/research/continuity-2026-10-08/biology-2017-paragraphs.json` | `1d3a94b77ef662892ef058032f1ef51980c85779efe6043011cc7f5af652c8a8` |

Selective fresh code inspection confirms the stated reuse restrictions. `ExchangeDiagram` uses a 4% rate-difference tolerance with exact-sounding markers. `SignaturesDiagram` uses `flatAfter` thresholds and a distinct A ⇌ 2B simulation. `HeatShiftDiagram` links its K meter to particle-movement progress. `FlowerDiagram` still labels whole ovule to zygote and runner to identical clone, with small embedded text and a split scene. Retiming these components alone cannot implement the accepted model. These are source findings; their actual appearance has not been reviewed for the new scripts.

| Freshly inspected component | SHA-256 |
| --- | --- |
| `src/slides/diagrams/kinds/chem-y12-m5/ExchangeDiagram.tsx` | `550f20f17681ff2f8c95d5dd75208f848fe5427706e09f74afc567e527d9598d` |
| `src/slides/diagrams/kinds/chem-y12-m5/SignaturesDiagram.tsx` | `53aff909590092faf599d6ed8473e5197496e85298b2913b587ad056ded665e0` |
| `src/slides/diagrams/kinds/chem-y12-m5/HeatShiftDiagram.tsx` | `312fc6de8a323b697ff3239256054963cf9e823ca60f6c8a6f208a95c77307d2` |
| `src/slides/diagrams/kinds/bio-y12-m5/FlowerDiagram.tsx` | `749fa2399823f135c86cf9425c250878f09a0122533e5092fbc80bf6617c0640` |

## Pacing and downstream checks

C3's longest segment is addition at 151 words; the temperature-response segment has 137. Plants' longest segment is the runner at 135, with delivery at 126 and flower locations at 115. These lengths allow explanations rather than compressed answer labels, but do not establish comfortable pacing. For planning only, a hypothetical 130-150 spoken words per minute gives C3 about 7.9-9.1 minutes of speech and plants about 7.2-8.3 minutes. Proposed response holds add 24 and 12 seconds respectively; title, reading, transition and final holds are additional. These are arithmetic scenarios, not voice measurements or instructions to impose a universal speed.

The eventual preview should particularly check flower-location vocabulary, pollen/sperm identity, the runner's node/mitosis explanation, C3's K introduction, and temperature versus subsequent composition. Stage the nearby labels and show only current reasoning plus needed facts. Clear unrelated cases instead of shrinking text. Retain all conditions and question demands during each attempt. Dense first-use passages need actual listening and narrow-player observations; no comprehension pass is inferred from this written review.

| Gate | Status after this review |
| --- | --- |
| Exact human-readable preparation science and beginner teaching | PASS, bounded to the hashes above; no required spoken-word correction found |
| Exact selected lesson JSON and schema-v2 teaching brief | Pending creation, integration and independent exact-source review |
| Corrected visual model and native/narrow observations | Pending; legacy default components are not approved substitutes |
| Recording-stage brief check | Pending for the actual selected source and visual decisions |
| Fresh voice, alignments, captions and measured response intervals | Pending; old audio does not belong to these words |
| Exact voiced preview and human listening | Separately pending |
| Teacher/action coverage, practical conduct, full export and public release | Pending under existing project gates |

Only this review document was created in this assignment. The two authored scripts, revision record, sources, components, audio, route, ledger, previous briefs and media remain unchanged.
