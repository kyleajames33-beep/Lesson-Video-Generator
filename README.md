# Lesson Video Generator

For the current production state, accepted teaching rules, course plans and
setup on another computer, start with [HANDOFF.md](HANDOFF.md). Restore the
ignored state and media described there before resuming selected-video work.

Remotion-based pipeline that turns HSC Science lesson JSON into narrated MP4
lesson videos. Part of a two-repo system — the rendered output is consumed by
the separate site at hscscience.com.au.

## How it works

```
src/data/*.json  →  scene types  →  slide components  →  Remotion composition  →  MP4
```

- Each lesson is **one JSON file** in [`src/data/`](src/data) describing a list of
  `scenes` plus lesson-level metadata (subject, module, syllabus mapping).
- The schema is defined in [`src/lesson/types.ts`](src/lesson/types.ts). Each
  scene has a `type` (`title`, `hook`, `concept`, `definition`, `formula`,
  `workedExample`, `misconception`, `quickCheck`, `summary`, `marginalia`,
  `labFootage`, `endCard`, `mnemonic`).
- [`src/LessonVideo.tsx`](src/LessonVideo.tsx) maps each scene `type` to a slide
  component in [`src/slides/`](src/slides) and stitches them into a
  `TransitionSeries`, preceded by an intro stinger.
- [`src/data/lessonRegistry.ts`](src/data/lessonRegistry.ts) is **auto-generated**
  (`npm run generate:registry`) — one Remotion `<Composition>` per lesson,
  registered in [`src/Root.tsx`](src/Root.tsx). Composition id = e.g.
  `Chemistry-Y11-M2-L2` (derived from subject/year/module/lesson).
- Subject theming (`src/styles/theme.ts`) resolves an accent colour once per
  lesson via `useAccent()`; design tokens live in `src/styles/tokens.ts`.

## Setup

```powershell
npm install
npm start          # open Remotion Studio to preview
```

## Authoring a lesson

1. Add a JSON file to `src/data/` following `src/lesson/types.ts`
   (`{subject}-{year}-m{module}-l{lesson}-{slug}.json`).
2. `npm run generate:registry` to register the new composition.
3. `npm run validate:lessons` to check structure and pacing.
4. Preview in `npm start`; render with
   `npx remotion render src/index.ts <CompositionId> out/lesson.mp4`.

## Voiceover / audio

- Scene narration text lives in each scene's `voiceover.text`.
- Audio is generated with ElevenLabs (`scripts/generate-elevenlabs-*.mjs`,
  needs `ELEVENLABS_API_KEY`) into `public/audio/<CompositionId>/`, named
  `<sceneId>.<textHash>.mp3` (hash of the narration text).
- `npm run voiceover:sync -- src/data/<lesson>.json` links on-disk audio back
  into the JSON's `voiceover.audioFile` — hash-safe, so edited scripts whose
  audio is stale are left unwired for regeneration.

## Quality gate

```powershell
npm run check:all    # generate:registry + tsc --noEmit + validate:lessons
```

Run before committing. This also runs in CI on every push/PR
([.github/workflows/check.yml](.github/workflows/check.yml)).

Before a final render, check the selected lesson's physical media separately:

```powershell
npm run release:preflight -- src/data/chemistry-y11-m2-l2-molar-mass.json
npm run test:production
```

`release:preflight` blocks missing registered images, missing or stale narration,
invalid alignment, clipped playback and missing/invalid timed captions. Use
`--all` for the catalogue inventory in `out/audits/release-preflight.json`.
`audit:production` scores editorial structure; it does not verify media or
replace watching the finished video. Media checks do not decode MP3s or approve
scientific accuracy, pronunciation, loudness, diagram legibility or motion.

Voice generation now defaults to Eleven Flash v2.5. Existing recordings are
preserved. To compare current models on the same scene without replacing them:

```powershell
npm run voiceover:manifest -- src/data/chemistry-y11-m2-l2-molar-mass.json
npm run voiceover:generate -- out/voiceover/Chemistry-Y11-M2-L2.manifest.json --scene=hook --model=eleven_v4 --output-dir=out/voice-tests/v4 --dry-run
```

Set `ELEVENLABS_API_KEY` and `ELEVENLABS_VOICE_ID`, then remove `--dry-run` to
generate a paid sample. Compare `eleven_v4`, `eleven_v3`,
`eleven_multilingual_v2` and `eleven_flash_v2_5` in separate output directories.
The main generator uses the timestamped Dialogue API for a single v4 narrator;
v4 requests over 2,000 characters are rejected locally. Native multi-speaker
v4 dialogue is a separate future migration; the existing tagged-dialogue script
still generates individual segments. New main-generator outputs include
`.generation.json` provenance alongside their alignment. The model/voice of
older recordings cannot be verified from text hashes alone.

Review policy and the current release priorities are recorded in
[`docs/production-memory.md`](docs/production-memory.md).

## Design direction prototypes

The [prototype plan](docs/design-prototypes-plan.md) defines three controlled
visual studies: editorial diorama, hand-drawn explanation and painted laboratory.
Each uses the same limiting-reagents content and 24-second timing.

```powershell
npm run prototype:studio
npm run prototype:render
```

Open `out/prototypes/index.html` for synchronized comparison, single-direction
focus, teaching-beat jumps and a phone-size view. The clips are silent 720p
design tests; the next stage is a narrated pilot and a second-subject test.
The experimental entry point is separate from the lesson catalogue.

The [molar mass pilot plan](docs/molar-mass-pilot-plan.md) maps three connected
teaching moments onto existing artwork and recorded narration:

```powershell
npm run prototype:pilot
```

Open `out/prototypes/molar-mass-pilot/index.html` to review the narrated clip,
optional captions, scene jumps and phone-size view. Source recordings are
preserved; the final export receives measured audio normalization. The saved
review report records loudness before and after. This pilot does not replace
the original lesson or establish readiness for bulk publication.

For reliable video seeking, run `npm run prototype:review` and open
`http://127.0.0.1:8778/molar-mass-pilot/`. This server binds only to localhost.

Additional [capability comparisons](docs/capability-tests-plan.md) test native
hand-drawn DNA and the same existing diorama with and without painted context:

```powershell
npm run prototype:capabilities
npm run voice:compare -- --prepare
```

Review them at `/capability-tests/` and `/voice-comparison/` on the local server.
The voice preparation command does not generate new speech. Configure
`ELEVENLABS_API_KEY` and `ELEVENLABS_VOICE_ID`, then run `npm run voice:compare`
to generate four short model samples without overwriting source recordings.

## Repo conventions

- `out/` (renders) and the large media dirs `public/audio/` (~591MB) and
  `public/assets/` (~253MB) are **not committed** — audio regenerates from the
  scripts, images from the `image-prompts-*.md`. Back these up separately:

  ```powershell
  # Incremental mirror to an external drive or a cloud-synced folder
  # (OneDrive / Google Drive / Dropbox) = off-machine backup for free.
  npm run backup:media -- "D:/Backups/hscscience-media"
  npm run backup:media -- "$HOME/OneDrive/hscscience-media" --prune
  ```

  Re-running only copies changed/new files. `--prune` also removes destination
  files no longer in source (off by default).
- `scripts/_*.mjs` are one-off/throwaway patch scripts, not part of the durable
  pipeline. The durable commands are the ones wired into `package.json`.
- Production docs live in [`docs/`](docs).

## Measured playback and release packages

Use `npm run voiceover:assemble` to join selected recordings with exact silent
response gaps, merged alignment and faithful captions into a separate lesson
draft. Use `npm run render:release` for a render with matching subtitles and
dependency snapshots. `release:snapshot` detects changed source/media/settings;
`release:review` records named review evidence against an exact package.

Commands, configuration, verification evidence and the current molar mass
handoff are in [playback-and-release.md](docs/production/playback-and-release.md).
Original catalogue JSONs and recordings are preserved. Final v3 molar mass
recordings and listening review remain pending.

## Scientific source review

`npm run audit:science` produces a source diagnostic queue with exact lesson
hashes, scene/field locations and explicit review limits. Flags are candidates
for context review, not automatic corrections or scientific approval.
`npm run prepare:science-corrections` stages four source-checked, unvoiced
correction drafts separately from the catalogue. `npm run test:science` checks
arithmetic, rounding boundaries, source guards and media/cue invalidation.
These commands perform no audio or rendering work.

See the [scientific review](docs/production/science-audit-2026-10-03.md) for
confirmed findings, independent calculations, review links and pending work.

Scientific diagram state is covered by `npm run test:scientific-models`.
`npm run audit:scientific-models` records affected scenes and source hashes.
See [model repairs](docs/production/scientific-model-repairs-2026-10-03.md) for
the enzyme/DNA changes and later visual-review requirements. Both commands run
without rendering or audio work.

`npm run test:source` runs all scientific source/model and review-gate tests
without media fixtures. `npm run gate:release -- gate-config.json` checks named
review evidence for one exact full-render package. Editorial scores remain
diagnostic. See [Physics constraints and the evidence gate](docs/production/physics-and-release-gate-2026-10-03.md).

`npm run audit:narration-provenance` compares current narration against stored
alignment text without opening audio. `npm run research:biology-curriculum`
caches the official pages for the selected new-course mapping;
`npm run audit:selected-curriculum` verifies their hashes and three selected
lesson metadata mappings. `npm run prepare:quantitative-corrections` writes six
isolated scene proposals with independent guard-digit working and explicit
assumptions. See [provenance, curriculum and quantitative review](docs/production/provenance-curriculum-and-quantitative-2026-10-03.md)
for findings, changed question conventions and review limits. These commands
perform no render or audio work and do not change catalogue lessons.

`npm run prepare:quantitative-lessons` integrates those six proposals into
complete isolated drafts with response, motion and unvoiced take plans.
`npm run validate:quantitative-package` checks source/export hashes and the
lesson schema; `npm run audit:selected-artwork` records their top-level image
dependencies. See the [complete lesson integration](docs/production/quantitative-lesson-integration-2026-10-03.md)
for further corrections, missing assets and review requirements. These commands
perform no rendering or audio work.

`npm run test:quantitative-models` checks the scoped HCl/NaOH illustration,
graph/ion timing and required reveal cues. `npm run audit:scientific-models`
also records the affected quantitative lessons and missing draft cues.
See [quantitative component repairs](docs/production/quantitative-model-repairs-2026-10-03.md)
for implemented source fixes and the remaining science/media review.

`npm run archive:source` preserves repository source and selected ignored review
packages in a compressed, hashed archive. `npm run check:source-restore` restores
it into a fresh local directory and checks exact bytes, the unvoiced package
and source tests. See [source recovery evidence](docs/production/source-archive-and-restore-2026-10-03.md).
These commands exclude public media/assets/fonts and perform no rendering or
audio work. Full media restoration and separate storage remain pending.

`npm run prepare:thermochemistry-lessons` prepares six further complete unvoiced
proposals for energy profiles, bond/formation enthalpies, biological Hess-law
inference and Year 12 neutralisation. `npm run validate:thermochemistry-package`
checks their source/export hashes and schema. The shared heat-ledger reference
no longer implies a universal maximum. See the [thermochemistry handoff](docs/production/thermochemistry-repairs-2026-10-03.md)
for science sources, independent student tasks, missing retained assets and
later review requirements. All 73 source tests run without media work; the
source archive includes both six-lesson packages.

`npm run prepare:biology-lessons` completes the three isolated enzyme/DNA
proposals with 30 scenes, response plans, hashed curriculum records and learner
tasks. `npm run validate:biology-package` also refuses stale text, reordered
feedback and changed teacher/student material. See the [Biology handoff](docs/production/biology-lesson-integration-2026-10-04.md).
The source suite now has 81 tests. Source recovery includes all three complete
review packages and both selected curriculum audits, without rendering or audio.

## PR #38 reconciliation and held source proposals

The [current reconciliation](docs/production/pr38-reconciliation-2026-10-04.md)
preserves all current catalogue bytes and legacy renderer output while retaining every
historical correction intent. The old 323-scene handoff is not an audio queue.
Run `npm run audit:reconciliation` with full Git history to inspect exact source
dispositions. `prepare:indicator-corrections` and `validate:indicator-package`
produce and check a complete isolated unvoiced indicator proposal. The existing
quantitative package also now states the carbonate/CO2 back-titration assumption.
No final source, voice, media or release approval is implied.

The semantic continuation now covers all 71 historical Chemistry groups,
including cases where the earlier audit was overbroad.
`prepare:reconciled-chemistry-scenes` and `validate:reconciled-chemistry-scenes`
prepare/check five partial amendments for precision and missing-data questions.
Their schema fixtures contain unreviewed original scenes and are not render inputs.

`prepare:medicine-lessons` and `validate:medicine-package` prepare/check two
complete medicine-enrichment proposals. Narrow opt-in diagram corrections are
covered by actual React/SVG output tests, including 72 preserved-main baseline
comparisons. These are not visual-fit or playback approval. Both legacy medicine
lessons and new proposals remain release-held; no audio is authorised.

`prepare:priority-science-lessons` and `validate:priority-science-package` cover
four complete drafts for tolerance limits, recombinant DNA, nitrate/purity and
trace-element analysis. They preserve seven current narration texts, correct
28, and retain strict media/release holds. Sixteen further main-baseline
component comparisons protect the default reference-band/food-chain diagrams.

`prepare:water-health` and `validate:water-health` prepare/check four complete
source-only proposals for buffers, dissolved oxygen/BOD, eutrophication and
water treatment. These correct bounded health/environmental inferences and
retain the 2017 curriculum context without inventing named requirements.
`test:water-health` covers source guards, arithmetic, catalogue preservation,
release holds and opt-in component output. Teacher/science, visual and media
approval remain pending; no executable narration queue is authorised.

`prepare:safety-medicine` and `validate:safety-medicine` prepare/check the
separation-safety and remaining chirality/delivery enrichment drafts.
`test:safety-medicine` protects original catalogue bytes and default diagram
output while checking qualified evidence, strict Lipinski boundaries and
non-executable review holds. The source-remedy inventory separates prepared
claims from 51 remaining substantive finding groups, eight qualifications
and one unverified correspondence; these overlapping counts are not audio jobs.

`prepare:analytical-inference` and `validate:analytical-inference` integrate the
two titration scene-repair packages into complete lessons and prepare both
curve-reading lessons plus qualitative ion analysis. `test:analytical-inference`
checks exact prior amendments, independent arithmetic, inference conditions,
legacy output and release holds. C17/C19 are fully integrated as source drafts;
the Hess C28 remedy remains a partial scene proposal.
