# Brief 28k: upload G03b and B3b

Read `00-standing-rules.md` and `28-youtube-upload-c4a-b4-and-ledger.md` first. Upload both videos exactly as in brief 28. The owner approved both on 16 October, and both are loudness normalised. Check each sha256 before uploading. Use the matching entries in `docs/production/claude-pm/youtube/wave4-metadata-draft.json`, and give both the chapters and end screen treatment from brief 42.

| Video | File | Length | sha256 | Captions |
|---|---|---|---|---|
| G03b, "All 5 Types of HSC Equilibrium Calculation" | `out/explainer/Explainer-chem-m5-g03b/Explainer-chem-m5-g03b-v1.mp4` | 6:43 | `0c78fd14cebfff85e8d782538da37f2f00b05626499b8b4620723418a8000493` | `docs/production/claude-pm/lessons/g03b/measured/captions.srt` |
| B3b | `out/explainer/Explainer-bio-m5-b03b/Explainer-bio-m5-b03b-v1.mp4` | 9:02 | `9a5cff47868eea23313bc717e5f994aef24fe4565af18e59acf18a2c7450f86e` | `docs/production/claude-pm/lessons/b3b/measured/captions.srt` |

Notes:
- **G03a was dropped by the owner.** If an earlier draft mentions it, ignore that.
- **G03b's title changed** to "All 5 Types of HSC Equilibrium Calculation".

Playlists, in syllabus order:
- **Chemistry Module 5:** G03b goes directly before G03c (the hard practice part 1), after C9.
- **Biology Module 5:** B3b goes after B3a part 2 and before B4.

Add both entries to `docs/production/claude-pm/youtube/wave4-uploads.json` and append a short hand-in to `status.md`.
