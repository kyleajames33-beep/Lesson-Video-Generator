# YouTube release-readiness audit, 10 October 2026

No saved new or unlisted package is ready for public posting under the current
full-package review gate. This audit is read-only apart from this report and
its [JSON record](youtube-ready-audit-2026-10-10.json). It performs no human
listening, live channel check, upload or visibility change.

The channel is HSCScience, @HSCScience-u7i. Existing saved public uploads
[Mole Concept Part A](https://youtu.be/MCmEsRHKtTU) and
[Molar Mass](https://youtu.be/g9zmc5w7kQU) need no duplicate posting.
Historical acceptance and publication evidence remain preserved.

## Current selected calculation batch

All four current paced packages have short worked pilots. None has a full
render record. The existing production-brief checker at export stage reports
`BRIEF_REVIEW_PENDING: Exact voiced preview: pending` for each. Human listening
is separately pending. Prepared titles, captions and chapters do not close
these gates.

| Current candidate | Exact package folder | Full MP4 | Exact preview | Listening |
| --- | --- | --- | --- | --- |
| Empirical formulas | `out/prototypes/empirical-formulas-paced-2026-10-10/` | Absent | Pending | Pending |
| Mole ratios | `out/prototypes/mole-ratios-paced-2026-10-10/` | Absent | Pending | Pending |
| Mass-to-mass | `out/prototypes/mass-to-mass-paced-2026-10-10/` | Absent | Pending | Pending |
| Limiting reagents | `out/prototypes/limiting-paced-2026-10-10/` | Absent | Pending | Pending |

The teacher's general good feedback and script-direction acceptance do not
establish full listening approval for these exact revised paced packages.

## Historical full exports and unlisted uploads

| Exact full export | Saved YouTube ID | Saved review boundary |
| --- | --- | --- |
| `out/prototypes/enzyme-story-feedback-2026-10-09/render-03/video.mp4` | `ZTxQP7kI5_o`, unlisted | Complete user watch-through and human listening pending |
| `out/prototypes/limiting-reagents-feedback-2026-10-09/render-04/video.mp4` | `b7OCuLsXgG8`, unlisted | Complete user watch-through and human listening pending |
| `out/prototypes/limiting-conversational-2026-10-09/full-render-01/video.mp4` | No saved upload for this exact export | Full browser UI playback recorded, human listening pending |
| `out/prototypes/continuity-batch-01/enzyme-models/render-01/video.mp4` | `tXBotBaNakU`, unlisted | Earlier review superseded, complete watch-through pending |
| `out/prototypes/continuity-batch-01/limiting-reagents/render-01/video.mp4` | `sijXK98W_9w`, unlisted | Earlier review superseded, complete watch-through pending |
| `out/prototypes/molar-mass-continuity-handoff/narrated-render-02/video.mp4` | `g9zmc5w7kQU`, public | Historical exact-export user acceptance; already posted |

The revised enzyme final MP4 hash is
`5757b2e50bda1c82291a501f6fb48b77b861f482ab99d1983d7b89688d93dd34`.
The revised limiting final MP4 hash is
`56471cc9c65bc65381783b188094271b6a1743a85ac5afa1a0d527fc87eeab0a`.
Their snapshot package hashes match the saved publication record. The full
machine-readable audit records all six exact paths and hashes.

## Gate checks and their interpretation

Parsed 504 primary JSON files across `out/prototypes`, `out/production` and
`docs/production`, excluding copied public media, bundles and dependency folders.
Found six full render records and no hashed release-review records for the
required science, listening, motion, device or accessibility scopes. The only
gate config found was the intentionally incomplete example.

Called the existing `checkReleaseEvidence` adapter on each real full package
with the review records actually found: none. All six return
`release-evidence-incomplete`. The current gate reports missing scoped reviews,
missing or invalid teaching briefs, input/export dependency drift and
`RENDER_VIDEO_MISMATCH`. The conversational limiting brief additionally reports
`BRIEF_PREVIEW_CHANGED`. No required file is missing, and snapshot verification
reports no changed export file for these six packages. Drift concerns shared
source and production tools in the current workspace.

The video mismatch has a separate tooling cause: `scripts/lib/release-gate.mjs`
sets the selected video hash only when the export snapshot contains exactly one
MP4. All six normalized packages preserve multiple MP4 exports. The revised
pair preserve silent, unmastered and final videos. Their final MP4s match their
recorded hashes. Repair final-video selection prospectively without removing
preserved intermediate exports. This does not supply missing listening,
scoped reviews or teaching briefs.

The current gate findings do not retroactively remove the molar-mass user's
historical acceptance, change an existing public upload or prove that old
uploaded MP4s were mutated. No old evidence was edited.

## Next release work

Complete the current exact paced preview review against the preserved runtime,
resolve findings, freeze inputs and use the enforced export-stage brief check.
Then render the full packages and complete actual scoped full-package reviews,
including human listening. Root can post an exact final export once the full
gate passes and the live channel state is verified.

Sources: [saved publication state](../../out/prototypes/continuity-batch-01/youtube/publication-state.json),
[current queue](youtube-queue-2026-10-10.json),
[preview-first rule](preview-first-review.md),
[release gate specification](physics-and-release-gate-2026-10-03.md),
[enzyme revision](enzyme-feedback-2026-10-09.md),
[limiting revision](limiting-reagents-feedback-2026-10-09.md).

## Code-fix addendum, 10 October 2026

The observations above describe the gate before the follow-up correction.
`scripts/lib/release-gate.mjs` now selects only the unique tracked MP4 export
whose hash equals `videoSha256` in the hashed render record. There is no
filename or export-count fallback. An absent hash, unmatched hash, duplicate
matching exports or a matching input without export status continues to block.
Snapshot verification still rejects changed selected media.

`npm run test:release-gate` passes all 12 focused tests. Rechecking the two
revised full packages removes their structural `RENDER_VIDEO_MISMATCH` finding.
Both still return `ready: false`: source/input drift, missing teaching briefs
and all five missing full-package review scopes remain. No old render record,
snapshot, export or review was edited. No new approval or ready-to-post claim
was recorded.
