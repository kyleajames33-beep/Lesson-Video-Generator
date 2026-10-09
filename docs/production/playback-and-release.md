# Playback assembly and versioned release packages

Implemented 3 October 2026. These tools support a selected lesson and preserve
its original JSON and recordings. They do not generate speech or publish videos.

## One timeline

`src/lesson/timeline.mjs` resolves the intro, scene starts, transition overlaps,
narration offsets and composition duration. Rendering, captions, transcripts,
site duration, chapters, review frames, stills and posters use it.

Existing lessons retain the 270-frame intro and 24-frame overlapping transitions.
Set `introDurationInFrames: 0` explicitly on a separate draft for a hook-first
opening. Intro narration, music and captions are omitted with that opening.
These settings are frames, so their duration in seconds depends on lesson fps.

Transcript JSON retains scene teaching text and adds aligned speech cues.
Transcript VTT now contains aligned speech only. Missing alignment is reported,
not converted into guessed subtitles spanning entire scenes. Both documented
lesson-first and legacy output-directory-first transcript commands work.

## Assemble selected recordings

The existing molar mass voice manifests and playback plans are accepted directly:

```powershell
npm run voiceover:assemble -- out/prototypes/molar-mass-script-v3/voice-manifest.json out/prototypes/molar-mass-script-v3/voice-playback-plan.json --output=out/production/molar-mass-v3/lesson.json --hook-first --dry-run
```

Remove `--dry-run` after the exact selected recordings and character alignment
exist at the manifest paths. Choose a new output lesson path for each assembly.
The command refuses to overwrite the source or an existing lesson output.
It also rejects a script/segment mismatch, unsupported response treatment,
incorrect selected voice/model provenance and alignment beyond decoded audio.

The assembler decodes recordings to mono 48 kHz signed 16-bit samples. Each
recording is padded by less than one frame, if necessary, before an exact
frame-counted gap. Alignment offsets use decoded sample duration, including
that padding, rather than the last spoken character or MP3 container length.
Supported fps must divide 48,000 into an integer number of samples per frame.

Final scene WAV filenames include an assembly fingerprint and narration hash.
Their `.alignment.json` and `.assembly.json` sidecars record selected audio,
alignment and generation-metadata hashes, measured item boundaries and gaps.
Assembly preserves source recordings; it does not normalize loudness or trim
their beginning/end silence. The output is lossless PCM, avoiding MP3 encoder
delay and raw MP3 byte concatenation.

Some v4 timestamp responses extend a terminal full stop up to 80 milliseconds
past the decoded audio. Assembly can bound a terminal punctuation/whitespace
overrun of at most 100 milliseconds to the decoded end. It preserves all spoken
character timings and raw alignment sidecars, and records the adjustment in
the assembled item provenance. Spoken-character overruns and larger overruns
still fail. This rule does not shift or rescale narration timestamps.

Quick checks use `answerVisibleStart`, plus the measured `responseHold`. Legacy
`answerStart` remains the midpoint of the old fade. New measured scenes use the
end of the silent interval as their first permitted answer boundary. The
countdown covers that actual interval. Worked examples with a response gap
defer their diagram, coach note and solution steps, clearing old per-step cues.
Durations include a final reading hold and transition allowance.

These are safe initial solution cues. Subject-specific diagrams, scientific
headings, images and word-by-word teaching cues still need scene review. A
generic timing check cannot establish that every displayed element is free of
answer hints or synchronised to the intended spoken reasoning.

## Render and track a package

Create a JSON configuration, for example:

```json
{
  "lessonPath": "out/production/molar-mass-v3/lesson.json",
  "entryPoint": "src/dev/release-entry.tsx",
  "compositionId": "Lesson-release",
  "codec": "h264",
  "scale": 0.5,
  "crf": 23,
  "inputs": [
    "out/prototypes/molar-mass-script-v3/voice-manifest.json",
    "out/prototypes/molar-mass-script-v3/voice-playback-plan.json"
  ]
}
```

```powershell
npm run render:release -- out/production/molar-mass-v3/render.json --output-dir=out/production/molar-mass-v3/render-01
```

The output directory must be new. The render command runs physical preflight,
requires caption coverage, stages the selected public dependencies and verifies
inputs have not changed during rendering. Concurrency defaults to one worker;
an explicit `concurrency` integer from 1 to 8 selects a different worker count.
The actual value is recorded with the render invocation.
It emits the video, matching SRT/VTT, input and export snapshots and a render
record linking their hashes. An optional inclusive `frameRange: [start, end]`
produces a preview with clipped, offset captions and `preview-unreviewed` status.
Unspecified encoding choices use the installed Remotion defaults and the hashed
environment. Loudness and true-peak approval remain separate checks.

An optional `normalizeAudio: true` masters the exported audio to the established
review target of -18 LUFS, using a -2 dBTP normalization ceiling. The renderer
measures the mastered result and requires an integrated level within 1 LU of
the target and true peak no higher than -1.5 dBTP. It retains the unmastered
video and source recordings, records measured results, and binds both video
versions and the audio report into the release snapshot. Listening review is
still required; these measurements do not approve pronunciation or delivery.

```powershell
npm run release:snapshot -- verify out/production/molar-mass-v3/render-01/release.snapshot.json
npm run release:preflight -- out/production/molar-mass-v3/lesson.json --snapshot=out/production/molar-mass-v3/render-01/release.snapshot.json
```

Snapshots track the selected lesson, audio, alignment, assembly sources,
generation sidecars, registered scene artwork, Lottie media, fonts, shared
render source, production tools, package lock, render configuration and explicit
inputs/exports. Changes invalidate the package, even when spoken text has not
changed. New shared source files and newly added optional provenance are also
detected. Tracking shared render code and production scripts is deliberately
conservative; an unrelated shared-code change can invalidate this package.

Add custom painted backgrounds, pronunciation dictionaries, props and other
nonstandard dependencies to `inputs`. External URLs and the complete installed
browser/system environment are not archived by the snapshot. A snapshot is a
local version inventory, not a backup. Standalone capture accepts repeated
`--input=file` and `--artifact=file`, but only the render command establishes
the recorded render invocation and checks input stability across that render.

Preflight verifies assembled audio/alignment/caption hashes and the selected
take/settings dependencies. It blocks changed gaps and early solution cues.
Selected copy containing U+2014 also blocks the check. The voice generator
rejects that punctuation and refuses reuse when saved request/settings differ.
Legacy recordings without settings provenance remain explicitly unknown.

## Review evidence

After an actual review, attach a named scope and its evidence to the exact
package. Scopes are `science`, `listening`, `motion`, `device` and `accessibility`.
An outcome is `pass` or `changes-required`.

```powershell
npm run release:review -- record out/production/molar-mass-v3/render-01/release.snapshot.json --reviewer="Reviewer name" --scope=motion --outcome=pass --evidence=out/production/molar-mass-v3/motion-review.md --output=out/production/molar-mass-v3/motion-review.json
npm run release:review -- verify out/production/molar-mass-v3/motion-review.json
```

Evidence must exist and the package must be unchanged, complete and contain a
rendered MP4. Review records are new files. Their hashes bind reviewer, scope,
outcome, evidence and package. Editing the evidence or an export invalidates the
record. The tool records a review statement; it cannot verify the judgement or
grant publication approval.

## Verified technical fixture and current pilot boundary

`node scripts/prepare-playback-smoke.mjs` prepares an explicitly labelled tone
fixture. Its two one-second tones are separated by 150 frames of zero samples.
The quick-check answer boundary is frame 180, after five silent seconds.
A full 450-frame export at 960 by 540 was rendered and inspected before the
boundary, during the reveal and at the final hold. The output contains test
tones, not narrated speech. AAC can add a short container tail; the inspected
15-second export reported 15.061333 seconds on the audio stream. The PCM gap
and visual timeline are the authoritative technical checks here.

See `out/checks/playback-release-smoke/` for fixture inputs and rendered evidence.
Production regression tests cover decoded silence, caption offsets, source
preservation, early reveals, alignment errors, changed settings/takes/assets,
snapshot integrity, changed review evidence and CLI preflight integration.

The revised molar mass lesson still needs its final selected recordings and
alignment. Voice auditions for earlier wording cannot stand in for the v3
script. These tools make that handoff executable without declaring the draft,
scientific review, actual listening or full lesson release complete.

## Evidence gate before release

`npm run gate:release -- gate-config.json` verifies unchanged input/export
snapshots, full-render provenance, caption exports and actual named reviews for
science, listening, motion, device and accessibility. Previews, stale evidence,
missing scopes and outstanding changes fail. It performs no rendering or audio
generation. See [the gate specification](physics-and-release-gate-2026-10-03.md)
and [example config](release-gate.example.json).

The older `gate:production` threshold check is a heuristic diagnostic. Its pass
does not establish scientific approval or publication readiness.
