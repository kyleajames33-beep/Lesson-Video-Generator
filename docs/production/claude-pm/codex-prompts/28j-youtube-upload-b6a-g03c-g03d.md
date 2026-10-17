# Brief 28j: upload B6a, G03c and G03d

Read `00-standing-rules.md` and `28-youtube-upload-c4a-b4-and-ledger.md` first. Upload all three exactly as in brief 28. The owner approved them on 16 October, and all are loudness normalised. Check each sha256 before uploading. Use the matching entries in `docs/production/claude-pm/youtube/wave4-metadata-draft.json`.

| Video | File | Length | sha256 | Captions |
|---|---|---|---|---|
| B6a | `out/explainer/Explainer-bio-m5-b06a/Explainer-bio-m5-b06a-v1.mp4` | 9:36 | `37fabb2c2187401eddc9a4de4c63e47c0abdfac8d88821c97cabe93182329650` | `docs/production/claude-pm/lessons/b6a/measured/captions.srt` (take02) |
| G03c | `out/explainer/Explainer-chem-m5-g03c/Explainer-chem-m5-g03c-v1.mp4` | 7:03 | `ccf85a4d945d59a199397c0e12a871b22526920e854bd7c03e1df27e9448e8ef` | `docs/production/claude-pm/lessons/g03c/measured/captions.srt` |
| G03d | `out/explainer/Explainer-chem-m5-g03d/Explainer-chem-m5-g03d-v1.mp4` | 8:19 | `54c976604e33a64941a34f779dd12de85b09b5683e86cef3a4f6299eecaaffbe` | `docs/production/claude-pm/lessons/g03d/measured/captions.srt` |

Check the dotpoint wording word for word:
- B6a has `verifyWording` true. If the official Biology wording differs, use the official text and correct the draft JSON.
- G03c and G03d use the Chemistry calculation dotpoint.

Playlists, in syllabus order:
- **Biology Module 5:** B6a goes after B4 (DNA replication), or after the last uploaded Biology video in syllabus order if B5a or B5b are not up yet.
- **Chemistry Module 5:** G03c and then G03d go after C9, as the practice set. G03b, "All 5 types", will go before G03c later.

Add all three to `docs/production/claude-pm/youtube/wave4-uploads.json` and append a short hand-in to `status.md`. If brief 42 (chapters and end screens) is done, give these three the same treatment.
