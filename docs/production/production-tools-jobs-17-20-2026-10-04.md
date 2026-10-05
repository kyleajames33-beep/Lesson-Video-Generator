# Production tools: jobs 17 to 20

## Source and boundaries

The production tools build on `ee186e42bc818ff4c05c0b2ec9c7df4fc3e55f55`
(tree `910348aaacf08058f5ddd927dfcdee8c80e2208e`) and are included in the
cumulative PR #38 source candidate. The Biology fixes were
independently rechecked first: 22 focused, 239 source and 32 production tests;
all 1,334 tracked files and 27 generated outputs matched the restored candidate.

Read-only GitHub inspection on 4 October 2026 found:

- main at `ca58c157f0349b29774f93a76cd041aefab3a2a2`;
- PR #38 still draft, unmerged and conflicted at
  `858b8163d5ba199b8d39933e786c1b7fe88d09cc`;
- the existing preflight, release gate, snapshots, playback assembler, caption
  builder and narration-provenance audit already present on main.

The new work extends those paths. It does not create a second approval ledger,
a voice-generation queue or a replacement renderer. No recorded catalogue
JSON, audio, artwork, component or default diagram output is modified. The
new active-learning material is an isolated unvoiced source proposal.

## 17. One-command readiness report: implemented

```sh
npm run report:readiness -- path/to/lesson.json
npm run report:readiness -- path/to/lesson.json --gate=path/to/existing-gate.json
npm run report:readiness -- --all
```

The command runs fresh existing `release:preflight`, inspects exact narration
pairings, applies existing source-triage rules, and optionally calls the existing
`gate:release` decision layer. Both gate snapshots must belong to the selected
lesson. Source byte hashes are checked again after the scan. Outputs are
`out/audits/production-readiness.json` and `.txt`; existing preflight also writes
its normal report. Exit 1 means evidence is incomplete, not tool failure by itself.

Six stages are explicit: science, artwork, narration, audio, captions and render.
They carry blockers, next actions and review limits. Source scores cannot make
a stage approved. Without complete verified existing gate evidence, unblocked
stages remain unverified. Publication permission and generation permission are
always false. There is no production-wide ready/zero-ready count: absent local
media means its availability elsewhere is unknown.

## 18. Exact draft invalidation: implemented

```sh
npm run draft:invalidate -- before.json edited.json --output=out/review/new-draft
```

Inputs are read-only. A fresh directory receives `lesson.json` and an
`invalidation.json` report. Changed primary narration, changed translations,
new scenes and changed fps invalidate selected audio references, including
translated recordings, timed captions, alignment references, measured response
holds and nested speech/reveal cues. Unchanged scene objects are preserved.
Authored translation text is retained for review; its recording references are
cleared. Deleted scenes and whole-render invalidation are reported. This utility
does not delete recordings or overwrite any source. It rejects duplicate IDs,
existing output directories, source destinations, traversal and symlink routes.

Existing `release:preflight` now checks exact alignment text and caption-token
pairing for ordinary recordings as well as assembled takes, including intros.
Whitespace, punctuation and scientific Unicode changes are deliberately exact.
An unversioned recording remains explicitly unknown. Missing local media does
not hide a stale alignment/text pairing.

Existing `build:captions` refuses stale text, orphan captions and missing selected
alignment before writing. It validates every selected segment before its single
write, so a later bad segment cannot partially update the input. Dry run still
preserves source bytes. Rebuild audio/alignment before changing captions to
match new words; do not relabel an old take.

Two old synthetic fixtures were made truthful under the stricter check: the
preflight success fixture now uses actual `alignmentToCaptions` output, and the
intro-removal fixture removes its now-orphan intro captions too. The tests were
not relaxed to accept stale media.

## 19. Visual-science checklist: implemented, actual reviews pending

Each scene with artwork or a diagram receives a source/scene/diagram hash and
five mandatory unreviewed dimensions: labels, arrows, units, scales and
cross-scene/copy/narration/caption consistency. Authored diagram strings are
listed as review aids. This does not inventory hardcoded component labels or
image pixels, establish provenance or certify scientific correctness.

The checklist calls for before/during/after keyframes, actual narrated continuous
clips, phone-size inspection and prompt/hold/feedback boundary checks. Empty
reviewer/evidence fields and `approval: false` cannot be treated as review passes.
Existing package-bound review records and release gates remain authoritative.

## 20. Pause, predict and retrieval: source proposal implemented

```sh
npm run prepare:active-learning -- out/review/new-active-learning-proposal
npm run validate:lessons -- out/review/new-active-learning-proposal/lesson.json
npm run report:readiness -- out/review/new-active-learning-proposal/lesson.json
```

The worked sample reuses the reviewed-but-unapproved nephron source proposal
and the current quick-check layout. Its original arithmetic pause is retained;
a prediction asks how 10 extra secreted units change the same synthetic balance;
a retrieval prompt asks for transport directions without replaying. All finite-
interval calculations retain unchanged tubular-solute-content and no-other-
source/sink assumptions. Values are synthetic, not physiological measurements.

The output has 12 scenes, three interactions and 15 split unapproved text takes.
It includes a visual checklist and inherited source evidence. A full prompt and
feedback split concatenates exactly to each proposed narration. No `responseHold`,
measured reveal boundary, selected voice/model/settings or audio path is asserted.
Thinking durations are estimates. The existing assembler must later establish
sample-exact silence and cues from authorised recordings, followed by actual
answer/caption concealment, visual, listening and full-playback review.

The output is not registered and existing composition-based Biology release holds
still apply. It cannot be mistaken for an executable generation manifest.

## Verification and remaining holds

Run:

```sh
npm run test:production-tools
npm run test:source
npm run test:production
npm run check:all
```

Focused negative controls cover punctuation/whitespace/Unicode drift, stale
captions, missing media/sidecars, stale intro, atomic caption failure, invalid
paths and duplicate IDs, fps/translation changes, misleading readiness facts,
unrelated release evidence and unsupported interaction plans. Inherited source
tests retain all 308 catalogue-byte pins and legacy component-output fixtures.
No new audio, paid generation, full lesson rendering, GitHub writes or deployment
is part of this work. Installed dependencies are reused locally, not installed
fresh. Independent source review of the functional candidate was completed
on 5 October 2026, as detailed below.

Final local verification after the first independent-review correction: 22 focused tests, 261 full
source tests, 32 production tests, TypeScript, registry regeneration and all 308
catalogue schemas. The isolated 12-scene proposal validates without warnings.
A one-command all-catalogue run inspected 308 records and retained unknown
production availability and false generation/publication permissions on every
record. Missing local media was not converted into a production-zero claim.


## Independent-review correction: selected recording filename

Review of 8cf4191 found that the caption builder could accept new narration and
new matching alignment while still selecting an old text-hashed recording.
Preflight already blocked this as AUDIO_STALE, but the builder itself must not
rewrite captions for the provably stale selection. It now uses the same shared
12-hex MP3/WAV filename-text-hash parser as narration integrity and preflight,
and compares the existing exact SHA-256 contract before any write. Both scenes
and intros are checked. Unversioned filenames remain unknown; this check does
not invent missing provenance or treat a filename as listening approval.

Two new atomic negative controls cover scene and intro cases, each with MP3 and
WAV suffixes and an earlier valid segment whose captions would otherwise be
added. A matching replacement alignment cannot override the old recording hash.
Both normal and dry-run calls reject; input lesson and recording bytes remain
unchanged.

## Independent source re-review, 5 October 2026

Independent review of `898f3cab3e0144c77fc3eb4f52728e2b9ffa412f`
found no blocking source defect in the production-tools changes. It passed 57
focused production/playback/caption/baseline checks and 30 additional caption
cases, including stale scene/intro recordings, MP3/WAV suffixes, valid pairs,
orphan captions, missing sidecars, exact Unicode mismatch, malformed timing,
unversioned legacy behavior and dry-run atomicity. All 23 frozen component
references matched their source Git blobs; all 308 catalogue working-byte pins
and canonical main blobs matched.

The cumulative source candidate also passed 261 source tests, 32 production
fixture tests, TypeScript and all 308 lesson schemas. Existing timing and
missing-media warnings remain. Public handoff wording and trailing whitespace
were cleaned separately without changing lesson, component or media behavior.
Publication is limited to the existing draft PR. Teacher/curriculum, physical
media, artwork, listening, motion and full-playback approvals remain held.
