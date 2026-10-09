# Biology Module 5 opening: author notes

Prepared 10 October 2026 as an additive silent source draft. Root coordinator owns independent accuracy review and integration. No catalogue source, shared component, old recording, alignment, frozen release, ledger or upload was changed.

## Exact origin and selected inputs

- Original: `src/data/biology-y12-m5-l1-reproduction-continuity.json`.
- Original SHA-256: `104d48a5c1308965859ac7ac2035fc9a586bbd4faffb370e98dfba35ab6bdf02`.
- Selected draft: `docs/production/drafts/module5-biology-l1-2026-10-10/lesson.json`.
- Teaching brief: `production-brief.json`, schema version 2, binding the exact current draft hash.
- All eleven original scene IDs and their types are retained. The ten original scene recordings are detached. Intro narration, background music and timed caption/alignment tracks are absent. Each new `voiceover` contains text only. Scalar `caption` strings are newly written teaching summaries, not accessible timed transcripts.
- `create-draft.mjs` regenerates the additive files from the hash-checked original. Run from the repository root. It intentionally overwrites only files within this dated draft directory. Review evidence stays pending after regeneration.

## Entry, boundary and next handoff

Use B1 in `year12-module5-teaching-priority-2026-10-10.md`, with the course plan, ledger and content checklist. The learner brings the idea that cells contain DNA and offspring inherit information, plus an individual/population distinction. The definition scene provides a brief prerequisite reminder. A reviewed supporting cell/DNA video link remains to be selected, rather than claiming one is already public.

Start with a useful crop-risk question and the distinction between an individual's lifetime and a continuing lineage. Stop once the learner can explain inheritance across generations, classify a reproductive event by gamete fusion, and compare inherited variation and survival risk under stated conditions. Do not expand this introduction into detailed fertilisation, DNA replication, chromosome division, gene expression or disease-management mechanisms.

Next: animal reproductive mechanisms, using L2 as a source candidate. Follow with separately scoped plants/fungi/bacteria/protists mechanisms from L3. These source candidates are not approved uploads. This opening neither completes the full legacy reproduction point nor establishes practical conduct, required model construction or full Module 5 coverage. The dated ledger remains source-present-unreviewed; the content checklist has not yet completed point-level mapping for this module.

## Scientific repairs in this draft

The original says essentially all clones are infected and uniformity removes any chance of a resistant survivor. The revised nursery application states an explicit inherited-susceptibility assumption, explains the conditional shared risk and bounds the outcome by exposure, pathogen and environment. Sexual reproduction can reshuffle available inherited alleles; it does not guarantee resistant offspring or manufacture a resistance allele in response to need. Mutation can create DNA differences in cells contributing to offspring. Environmental differences can alter characteristics without establishing a new inherited allele.

The clone/sexual contrast no longer makes universal speed, mate-number or survival rankings. Self-fertilisation illustrates why gamete fusion is a better classification criterion than adult parent count. Viability and fertility are distinguished; species persistence needs sufficient descendants to reproduce, rather than requiring each individual offspring to reproduce. The lineage is explicitly one schematic ancestry path, not proof every family or species persists indefinitely.

The hook retains the grower/crop teaching context as a hypothetical scenario. It removes the original unsupported claims about all Cavendish plants descending from one plant, an old country count and no possible resistance. No dated TR4 factual story is needed for this introductory causal comparison.

Foundational checks used the official [OpenStax reproduction-methods chapter](https://openstax.org/books/biology-2e/pages/43-1-reproduction-methods) for gamete fusion, self-fertilisation and conditional reproductive trade-offs, and [OpenStax sexual reproduction](https://openstax.org/books/biology-2e/pages/11-2-sexual-reproduction) for reshuffling of genetic combinations. The [FAO TR4 basics page](https://www.fao.org/tr4gn/tr4-basics/en/) supports treating crop susceptibility as an actual concern, while the draft deliberately uses a hypothetical case. These author checks do not constitute independent science review. Formal curriculum scope follows the existing cached project evidence and priority plan; source presence is not reviewed dotpoint coverage.

## Per-scene visual decisions and remaining limits

The machine-readable brief records one decision, reference, purpose, narration cue and hold for every scene. Useful title, definition, worked-example, misconception, summary and comparison layouts remain. All timing below is an estimate for a silent draft, not audio alignment.

| Scene | Decision and purpose | Exact limitation or next check |
| --- | --- | --- |
| title | Reuse existing identity layout. | Native early/final title fit still pending. |
| hook | Adjust existing comparison cards to show two same-parent clones and a risk question. | Original crop image `bioM5L1BananaClone` is registered but missing locally. Explicit `comparison` and `comparisonIsPrompt` prevent HookSlide's unrelated atom default. Inspect card/heading fit. |
| concept-continuity | Reuse connected generations and DNA handoffs in `bio12m5Lineage`. | Existing `at.viable=1000000` suppresses a hardcoded label that equates viable with surviving to reproduce. The scene is 1770 frames. Preserve that suppression if retiming; do not re-enable the label. Narration identifies lifetime compression and a selected lineage. Small generation/rule labels need phone inspection. |
| definition | Adjust to three essential vocabulary groups. | Check definition reading hold; no automatic parent-count rule. |
| concept-asexual | Adjust to existing two-column table/concept layout. | Native clone population binding withheld because it makes every clone fall and says genotype is preserved exactly. Original model remains untouched. |
| concept-sexual | Adjust to existing two-column table/concept layout. | Native varied population binding withheld because fixed genotype colours guarantee selected survivors and the cost label is absolute. Original model remains untouched. |
| concept-tradeoff | Reuse original comparison-table structure with qualified entries. | Three columns can shrink; short labels are deliberate, but essential text still needs native phone-size inspection. |
| worked-example | Adjust copy and estimated `stepAts` for runner, coral fusion and self-fertilisation. | Align each reason with fresh speech; inspect longest question and final board. |
| misconception | Reuse mistake/repair board. | Verify repair text clears caption region and does not inherit an overstrong adjacent visual. |
| quick-check | Reuse protected-answer renderer with neutral caption and `answerVisibleStart=960`. | Silent-preview reveal estimate only. No `responseHold` is claimed as measured. Fresh prompt/gap/feedback assembly must replace this estimate. |
| summary | Reuse takeaway/next board. | Check final five rows and caption clearance. |

Desired later isolated population correction: opt-in, fully reviewable labels and user-supplied susceptibility/exposure/outcome assumptions. Preserve existing default catalogue behaviour until selected review. A model should label allele-combination tokens, avoid universal death/survival outcomes and describe mutation/environment limits. This is a recommendation, not an implemented shared change.

## Recording and preview plan

`narration.md` is human-readable speech. `recording-segments.json` splits the nursery prompt and feedback and proposes an eight-second silent response interval. The joined `voiceover.text` is source text for a transcript; generating it as one continuous take will not create the required gap. Generate fresh separate segments only after independent script review and the recording-stage gate, then assemble measured silence. Keep the prompt visible, and withhold answer text, captions, diagrams and feedback to the actual earliest answer boundary. Rebuild alignment, timed captions, scene length and all reveal cues from the new assembly.

First difficult pilot recommendation: the conditional crop trade-off plus misconception/transfer boundary, bounded to a suitable 60 to 90 seconds after recording. Play the exact voiced input in Remotion or a short encoded pilot. A silent source/still check cannot establish voice naturalness, normal-speed motion, caption timing, actual device readability or human listening.

The current scene allowances total about 503.7 seconds, excluding renderer-managed identity/transition behaviour. This is a drafting allowance, not the final duration, a target speed or a promised chapter timeline. Keep a gentler pace for inheritance-versus-environment and conditional-risk reasoning, with useful thinking holds; replace estimates after actual recordings.

## Verification status

- Lesson schema check: `node scripts/validate-lesson.mjs docs/production/drafts/module5-biology-l1-2026-10-10/lesson.json` passed.
- Draft brief check: `node scripts/check-production-brief.mjs docs/production/drafts/module5-biology-l1-2026-10-10/production-brief.json --stage=draft` passed, with script/source, exact voiced preview and human listening pending.
- Check the final directory for prohibited U+2014 and old audio/alignment/caption bindings before handoff. The final check result is saved separately.
- Independent science, native visual, continuous playback, external-caption/device and human listening reviews remain pending. No paid narration, full render, upload or approval is claimed.
