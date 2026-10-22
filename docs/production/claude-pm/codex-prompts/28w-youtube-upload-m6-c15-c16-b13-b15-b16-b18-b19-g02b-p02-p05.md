# Brief 28w: upload Module 6 C15, C16, P02 to P05, B13, B15, B16, B18, B19 and Biology G02

Read `00-standing-rules.md`, `28-youtube-upload-c4a-b4-and-ledger.md` and `28v-youtube-upload-m6-c09-c14-b09-b12-skills-s03-s04.md` first. The owner passed all 12 videos below at preview on 22 October 2026, and they were rendered afterwards. C16 was re-rendered after a code fix in its hook that changed nothing visible.

| Video | File (under `out/explainer/`) | sha256 | Captions (under `docs/production/claude-pm/lessons/`) | Design |
|---|---|---|---|---|
| Chem M6 C15 | `Explainer-chem-m6-c15/Explainer-chem-m6-c15-v1.mp4` | `1845d3a5d572d27ab74c2363eb96b2d447b2278e22ebb9805350b8c5ff0f72af` | `m6c15/measured/captions.srt` | `chem-m6-c15.md` |
| Chem M6 C16 | `Explainer-chem-m6-c16/Explainer-chem-m6-c16-v1.mp4` | `abb348fad3ee033141049c8e1c5d15fc22bedee89391fc1ad33642d68d03c56b` | `m6c16/measured/captions.srt` | `chem-m6-c16.md` |
| Chem M6 P02 | `Explainer-chem-m6-p02/Explainer-chem-m6-p02-v1.mp4` | `7aba8ac69874f8694a06314fafc6bfaaf2bb1181706a15f5624020996669a744` | `m6p02/measured/captions.srt` | `chem-m6-p02.md` |
| Chem M6 P03 | `Explainer-chem-m6-p03/Explainer-chem-m6-p03-v1.mp4` | `84f3bad0db45fb14fa50086f3671b6338dd4582c32df6d8d2e864de588c88f02` | `m6p03/measured/captions.srt` | `chem-m6-p03.md` |
| Chem M6 P04 | `Explainer-chem-m6-p04/Explainer-chem-m6-p04-v1.mp4` | `df748a9f98b685e760358310e439e0ecf816a36673867af76fb5ca23e52ccc85` | `m6p04/measured/captions.srt` | `chem-m6-p04.md` |
| Chem M6 P05 | `Explainer-chem-m6-p05/Explainer-chem-m6-p05-v1.mp4` | `39e1d9c064d8c8c7698989e3716bd59e1a5fff6945c427e6f6beccb0d857c684` | `m6p05/measured/captions.srt` | `chem-m6-p05.md` |
| Bio M6 B13 | `Explainer-bio-m6-b13/Explainer-bio-m6-b13-v1.mp4` | `752de8c9ce5314fd60f2152d3c749b3f02f8bc2a6c1e8691bd6e059a6026bc45` | `m6b13/measured/captions.srt` | `bio-m6-b13.md` |
| Bio M6 B15 | `Explainer-bio-m6-b15/Explainer-bio-m6-b15-v1.mp4` | `426ecf6039bf289977354d366f6dd56f99e62b8629b7fd6bf6992fe7e15ee160` | `m6b15/measured/captions.srt` | `bio-m6-b15.md` |
| Bio M6 B16 | `Explainer-bio-m6-b16/Explainer-bio-m6-b16-v1.mp4` | `3da398e549ae5c57a0710464520539d787a9a889c557816c03b8fee58084ee0b` | `m6b16/measured/captions.srt` | `bio-m6-b16.md` |
| Bio M6 B18 | `Explainer-bio-m6-b18/Explainer-bio-m6-b18-v1.mp4` | `368fca0312874c95d785ae437002da58ce2078931a175f84095e9d8cc3ee0db8` | `m6b18/measured/captions.srt` | `bio-m6-b18.md` |
| Bio M6 B19 | `Explainer-bio-m6-b19/Explainer-bio-m6-b19-v1.mp4` | `9af537961fb780eab61b6b940f19cb2dd0901820507aa9c6a39d31f5a9c17e4b` | `m6b19/measured/captions.srt` | `bio-m6-b19.md` |
| Bio M6 G02 | `Explainer-bio-m6-g02/Explainer-bio-m6-g02-v1.mp4` | `9d9f08d30a185f5ed295bd53880d961445ae2876535ec7a9c91597b0b2501f6c` | `m6g02b/measured/captions.srt` | `bio-m6-g02.md` |

Verify every hash before uploading. Durations are 7.7 to 8.6 minutes. Take each title from its design's YouTube metadata section, using the latest revision. Keep titles to 100 characters or fewer, shortening minimally if needed and recording the original.

**Metadata:** write the entries in `youtube/wave5-metadata-draft.json` from each design's YouTube metadata section:
- Quote every dotpoint word for word, with its bullets, against the ledger.
- Put the site-lesson link first, in the live `.sa` URL form.
- Use scene-timed chapters from each `measured/` folder.

Use the same Education category, audience setting, AI disclosure, captions, thumbnail and end-screen rules as briefs 28t to 28v.

**Playlists:**
- **Module 6 Chemistry and Biology:** order by `module6-video-route-draft.json`, as amended by `module6-route-review-claude.md`. The practicals interleave at their route positions (for example Chem P02 after C03, P03 and P04 after C05, P05 after C11). Practicals and practice videos not yet made leave gaps, so keep relative route order.
- **Removed from the route:** bio-m6-b14 and b17 (merged into B16) and bio-m6-p02 (cut).
- Read back the final order of both playlists.

**If the daily upload limit hits,** upload in this order and stop:
1. C15
2. B13
3. C16
4. B15
5. P02
6. B16
7. P03
8. B18
9. P04
10. B19
11. P05
12. Bio G02

Add the records to `wave5-uploads.json`, and a hand-in to `status.md` with all the links.
