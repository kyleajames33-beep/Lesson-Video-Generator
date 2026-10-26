# Local caption review utility

Implemented 25 October 2026. The initial task owned the server, its tests and this report. Root has now integrated the selected 91-entry catalog and started the server at the URL below. The current browser tab is paused on B2a with corrected captions selected.

Start from the repository root:

```powershell
npm run review:captions -- out/caption-repairs/review-catalog-2026-10-25-v4/review-1.json out/caption-repairs/review-catalog-2026-10-25-v4/review-2.json out/caption-repairs/review-catalog-2026-10-25-v4/review-3.json
```

Open `http://127.0.0.1:8784/`. With no manifest arguments, the tool uses the wave 5 manifest. Port 8784 is the default. It binds to `127.0.0.1` only; there is no host override.

## Behaviour

- Native video controls, a lesson selector, and corrected, reference or disabled captions. Corrected WebVTT comes from the prepared manifest file. Original SRT is converted to alternate WebVTT in memory, with original timing preserved.
- Response-hold buttons seek and play from six seconds before each hold's start, calculated from cumulative scene durations and the exact measured lesson. There is no autoplay when changing lessons or opening the page.
- Desktop and phone width buttons change the player width. Phone width is a layout preview, not device emulation.
- Missing MP4s and uncertain uploaded-caption identity are labelled in the selector and detail area. Explicit pending identity flags and absent recorded caption hashes remain pending. Historical upload-input caption hashes identify a matching recorded original. Five saved Studio tracks have independent raw SBV captures, evidence snapshots and exact converted-reference checks. The other 26 QA replacement identities remain pending. These checks do not establish public playback or listening approval.
- At load, validates hashes for the manifest's input/source records, measured lesson, original caption and both prepared caption files. Invalid sources block resource serving for that entry. Validated caption bytes stay in memory as the review snapshot.
- Checks the selected MP4's recorded SHA256 lazily before playback and blocks a mismatch. The result is cached while the file's size and modification/identity metadata remain unchanged. A changed file is checked again.
- Only opaque manifest-entry routes expose media and captions. There is no directory browsing or general file endpoint. GET and HEAD are the only accepted methods. Video routes support bounded, open-ended and suffix byte ranges. Nonlocal Host headers are rejected.
- No publishing or approval controls. Loading or playing a lesson does not write review evidence or mark any gate passed.

## Verification

Ran `node --test scripts/serve-caption-review.test.mjs`: **10 server tests passed**. Temporary fixtures cover:

1. Native player HTML, valid client script syntax, hold calculations, original SRT conversion and lazy video hashing.
2. Full video requests, byte ranges, suffix/open ranges, HEAD and invalid-range responses.
3. Whitelisted routes, rejected write methods and nonlocal Host rejection.
4. Missing videos and absent recorded caption-hash labels.
5. Source-caption hash mismatch blocking both captions and video.
6. MP4 hash mismatch and cache invalidation after a video changes.
7. Multiple manifests with distinct keys, including duplicate lesson IDs.
8. CLI defaults, explicit manifest/port arguments and rejected host/invalid-port options.

Fixtures test HTTP behaviour using synthetic bytes. Root then loaded the actual catalog in Chrome and played targeted C15, C4b and B03a segments at 1x. The observations and B03a caption-layer collision are in `codex-interim-caption-playback-review.md`. This supplies no full-video, listening or release approval.

## Current selection

The v3 catalog contains 41 wave 5 tracks, 19 other earlier tracks and 31 replacements that preserve the published 18 October QA text and line breaks. It selects 91 unique video IDs. All caption/source hashes validate. Five saved Studio references validate against their raw downloads; 26 other QA saved-track identities remain pending. Four MP4s are missing. B03a needs a presentation decision because its MP4 already contains captions.

The v3 catalog freezes lesson and reference-caption bytes, alongside metadata snapshots. The archive is `out/archives/caption-timing-review-qa-preserved-2026-10-25.zip`; restore into `out/caption-repairs`. Original MP4s remain separate dependencies. Historical draft tracks are included for provenance and are superseded by the v3 selection. See `codex-interim-qa-caption-repair.json` for exact archive evidence.

Added two server tests for saved-track identity: a captured SBV can establish the reference independently of a missing historical upload hash; changed download bytes block serving. Together with the exporter, provenance and QA-retiming fixtures, 25 focused tests pass. The current Chrome UI was checked on B2a: saved reference verified, QA content preserved, MP4 hash verified, no autoplay. No new playback or listening approval is claimed.

## Caption-layer addendum

The current selection is `out/caption-repairs/review-catalog-2026-10-25-v4/catalog.json`. It preserves every v3 caption byte and adds six presentation warnings, supported by nine decoded frames. B2a, B2b, B2c, B03a, C3 and C4a have a caption band baked into sampled MP4 pixels. No band was visible in the sampled B03a2, B03b and C4b frames; whole-video absence is unverified. The four missing early MP4s remain unsampled.

Restore the original QA-preserved archive into `out/caption-repairs`, then `out/archives/caption-layer-review-addendum-2026-10-25.zip` into the repository root. All 14 addendum members match local hashes. Both archives are local only. The complete checkpoint records exact hashes and current selection. The page was checked through its HTTP API; browser reconnection timed out, so no new UI or motion pass is claimed.
