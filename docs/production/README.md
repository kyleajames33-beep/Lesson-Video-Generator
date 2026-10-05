# Library execution workspace

First execution tranche prepared 2 October 2026. This workspace applies the [library implementation plan](../research/library-implementation-plan.md) without overwriting existing lessons or generating media.

## Start here

| Deliverable | Purpose/status |
| --- | --- |
| [Catalogue summary](catalogue-summary.md) | Factual local baseline: 308 sources, audio coverage, candidate exports and diagnostic queues |
| [Catalogue status](catalogue-status.json) | Per-lesson source hashes, declared cohort metadata, separate media stages and field-level flags |
| [Correction register](correction-register.md) | Ranked known findings, required evidence and owners; no repairs falsely marked complete |
| [Asset index](asset-index.json) | Referenced image registry entries and lesson uses; rights/science review pending |
| [Teaching templates](teaching-templates.md) | Seven task-specific structures and a common lesson/scene brief |
| [Molar-mass package](pilots/molar-mass/README.md) | Matched scripts, held question, scene plan, student forms and scoring |
| [Technical change list](technical-change-list.md) | T1 to T5 specification for timing, answer visibility, captions and dependencies |
| [Timeline implementation](timeline-implementation.md) | 3 October update: synthetic assembly, gap-safe captions, answer boundary, dependency checks and rendered stills |
| [Complete quantitative proposals](quantitative-lesson-integration-2026-10-03.md) | Six isolated full drafts, 50 scenes, response/motion plans and four missing artwork dependencies; subject/media review pending |
| [Quantitative component repairs](quantitative-model-repairs-2026-10-03.md) | Scoped model/default fixes, 56 source tests and eight affected catalogue lessons; cue/science/visual review pending |
| [Source archive and restore](source-archive-and-restore-2026-10-03.md) | Compressed source/review/curriculum package, verified recovery and 63 restored source tests; full media restore and separate storage pending |
| [Chemistry curriculum and learner delivery](quantitative-curriculum-and-delivery-2026-10-03.md) | Six evidence-backed mappings, unapplied metadata proposals and six formative task sheets with a separate key; 63 source tests, teacher/practical/learner review pending |

The first inventory finds 19 lessons with all referenced audio files present, 60 partial and 229 with none. Three lessons have canonical candidate full MP4s; eight have retrospective files. Review/release approval remains unverified. Existing reports were preserved.

The 6,746 diagnostic occurrences are a triage queue, including draft production backlog. They are not a catalogue-wide science verdict. Known science findings and the selected pilot lead the correction order. No fixed duration ceiling, scene quota or assumed engagement score determines readiness in this workspace.

## Reproduce and verify

```powershell
node scripts/inventory-library.mjs
node scripts/prepare-molar-mass-pilot-package.mjs
node --test scripts/inventory-library.test.mjs scripts/prepare-molar-mass-pilot-package.test.mjs
```

The inventory reads existing content/media and writes only its own three files here. The pilot preparation reads the research protocol and voice selection and writes its own six draft files. No external calls occur. Both generators retain unresolved review states.

Eight focused checks cover mistaken approval from file presence, stale speech/invalid alignment, path scope, invalid/colliding lesson sources, prohibited punctuation preservation, fair shared comparison elements, changed source rejection and assessment arithmetic. Original narration/audio/captions/artwork were not edited.

## Progress and next work

L1 baseline and L3 broad diagnostics are prepared; L4 register is prepared. L2 curriculum verification, manual dispositions and fuller asset/component provenance continue in selected batches. Phase 2 templates and isolated molar-mass package are drafts ready for subject review. T1 to T5 now have a locally verified fixture implementation; real recordings and complete release review remain pending. No paid media, full release, learner evidence or batch-production milestone has been claimed.

The next technical increment is now documented in [timeline implementation](timeline-implementation.md). Its local fixture checks do not close real speech, device, science or learner review. Teacher review, learner recruitment and budget information can be arranged alongside independent engineering. Physics source availability remains a separate gap; calculation success will not substitute for mechanism/investigation validation.

Source work now also includes [science corrections](science-audit-2026-10-03.md),
[model repairs](scientific-model-repairs-2026-10-03.md),
[Physics and release evidence](physics-and-release-gate-2026-10-03.md),
[selected provenance/curriculum checks](provenance-curriculum-and-quantitative-2026-10-03.md)
and [complete quantitative lesson integration](quantitative-lesson-integration-2026-10-03.md).
The six complete quantitative drafts pass source checks but remain unvoiced,
unregistered proposals. Missing selected artwork and component-cue integration
are recorded explicitly. Media work remains deferred under the user's instruction.
