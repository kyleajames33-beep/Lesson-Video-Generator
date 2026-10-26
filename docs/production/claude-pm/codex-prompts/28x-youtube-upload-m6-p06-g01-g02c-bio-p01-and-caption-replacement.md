# Brief 28x: upload Chem M6 P06, G01, G02 and Bio M6 P01, then replace the drifted public captions

Read `00-standing-rules.md`, `28w-youtube-upload-m6-c15-c16-b13-b15-b16-b18-b19-g02b-p02-p05.md` and your own 25 October hand-ins in `status.md` first.

## Part 1: upload the four owner-approved videos

The owner passed these four previews and authorised publishing on 25 October 2026 (`checks/owner-approval-2026-10-25.json`). Your frozen-workspace renders passed `audit-final-export.py` with no errors, and their captions come from the cumulative-timing exporter with no captions inside a response hold. Claude has reviewed the audits and clears them for upload.

| Video | MP4 (under `out/checks/owner-release-2026-10-25/frozen-workspace/out/explainer/`) | sha256 |
|---|---|---|
| Chem M6 P06 | `Explainer-chem-m6-p06/Explainer-chem-m6-p06-v1.mp4` | `acf940e80e40d0d18713f95c7c20c4b6a319f81ba09ba593312f5bd440b7e2a0` |
| Chem M6 G01 | `Explainer-chem-m6-g01/Explainer-chem-m6-g01-v1.mp4` | `14f38526e8ffebfa9ff60eacc009e9cf332358861ef06915a67f835975a6abf5` |
| Chem M6 G02 | `Explainer-chem-m6-g02/Explainer-chem-m6-g02-v1.mp4` | `cec7397c375cf265f642bf602b0eb5ae287c0597a3ac83a4f2d732304374e40d` |
| Bio M6 P01 | `Explainer-bio-m6-p01/Explainer-bio-m6-p01-v1.mp4` | `3e4b0f51f81f7972bbf90bb10688bb400f25c04a2dc49b3890132725369f15f6` |

- Verify each hash before uploading.
- Use your prepared metadata in `youtube/owner-approved-oct25-metadata-draft.json` and the caption files it names. Check the titles are 100 characters or fewer, the dotpoints are quoted verbatim, and the `.sa` site link comes first.
- Use the same category, audience, AI disclosure, thumbnail and end-screen settings as 28w.
- Playlists: insert each video at its route position in `module6-video-route-draft.json`, as amended by `module6-route-review-claude.md`. Keep the existing manual order. Read back both playlists.
- Do these four uploads only. The other new previews are not yet passed.
- Add the records to `wave5-uploads.json`.

## Part 2: replace the public caption tracks (the owner confirms this in chat first)

Your 25 October audit found that public SRTs from the legacy exporter drift 0.8 s earlier per scene, so answer captions appear during thinking pauses. Claude accepts the finding. The fix is caption-only, with no re-render or re-voice.

**Before you change any public track, ask the owner in chat: "Replace the public caption tracks on the 41 wave 5 videos (and the earlier-wave set) with the corrected QA-preserving tracks?" Do nothing in Part 2 without a yes.**

On a yes:
1. Use the current selection, `out/caption-repairs/review-catalog-2026-10-25-v4/catalog.json`. It carries the QA text with the 213 notation edits. Never use the v2 candidates.
2. Do the wave 5 set first, in the 28t to 28w upload order.
3. For each video:
   - confirm the saved track identity;
   - replace the English (Australia) track;
   - read back that the saved cue at the first feedback scene now starts after its response hold.
4. Earlier waves next, with these exceptions:
   - Skip B2a, B2b, B2c, B03a, C3 and C4a. They have baked-in captions, so an external track would double up. List them for Claude.
   - Skip any video whose saved-track identity you cannot capture.
5. Record every replacement (video ID, old and new track hashes, readback) in `youtube/caption-replacement-2026-10.json`.

If the daily limit or a browser timeout stops you, stop cleanly and record where you got to.

Hand in to `status.md` with the four new links, both playlist read-backs and the caption replacement count.
