# Brief 28m: upload B9, C11 and C14

Read `00-standing-rules.md` and `28-youtube-upload-c4a-b4-and-ledger.md` first. The owner approved all three on 18 October. Upload each exactly as in brief 28, with chapters and an end screen as in brief 42 (skip the end screen if the final key notes fill the screen).

| Video | File | Length | sha256 | Metadata entry | Captions |
|---|---|---|---|---|---|
| B9, Punnett squares and pedigrees | `out/explainer/Explainer-bio-m5-b09/Explainer-bio-m5-b09-v1.mp4` | 8:19 | `0643970bf00b16b7df8bfcf6f025815bf14a39ad46c9dc335bdbeea862d554ec` | `bio-m5-b09` | `docs/production/claude-pm/lessons/b9/measured/captions.srt` |
| C11, how ionic compounds dissolve | `out/explainer/Explainer-chem-m5-c11/Explainer-chem-m5-c11-v1.mp4` | 8:59 | `143323f444e91122b0bc079bab3caac050c68f254b1588583c2c8053c4eaf967` | `chem-m5-c11` | `docs/production/claude-pm/lessons/c11/measured/captions.srt` |
| C14, Ksp and molar solubility | `out/explainer/Explainer-chem-m5-c14/Explainer-chem-m5-c14-v1.mp4` | 9:25 | `d48019867ed9ced2fd299fd4080cb8fb145dd5453f7b5cecbc5aa62a03fe111d` | `chem-m5-c14` | `docs/production/claude-pm/lessons/c14/measured/captions.srt` |

For each video:
- Check the sha256 before uploading.
- Take the metadata from `docs/production/claude-pm/youtube/wave4-metadata-draft.json`, and check each dotpoint word for word against `docs/production/programme/syllabus/`.
- If brief 65 is done, add its site-lesson link as the first line of the description. If not, brief 65 will add it later.

**Playlist order:** follow `playlistOrder` in `docs/production/module5-video-route-2026-10-10.json`, not upload order. Several earlier videos (C10, C12, C13, B6b to B8) are not uploaded yet, so place each new video after the latest published video that comes before it in the route.

Add entries to `docs/production/claude-pm/youtube/wave4-uploads.json` and append a short hand-in to `status.md`.
