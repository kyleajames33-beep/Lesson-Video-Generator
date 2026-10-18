# Brief 28r: upload Biology B10, B12 and G02

Read `00-standing-rules.md` and `28-youtube-upload-c4a-b4-and-ledger.md` first. The owner approved all three on 18 October, after the HSC-style Punnett squares (B10, G02), the new repeat graphics (B12) and the Codex check 66 and 67 fixes.

| Video | File | Length | sha256 | Captions |
|---|---|---|---|---|
| B10, sex linkage, co-dominance, incomplete dominance, multiple alleles | `out/explainer/Explainer-bio-m5-b10/Explainer-bio-m5-b10-v1.mp4` | 8:23 | `8b42d662a95edf3efdf3ae0c2cbd3febac736e6a2e94f3aaf209ccdf8c22ab46` | `docs/production/claude-pm/lessons/b10/measured/captions.srt` |
| B12, DNA sequencing and profiling for inheritance | `out/explainer/Explainer-bio-m5-b12/Explainer-bio-m5-b12-v1.mp4` | 7:53 | `4016f74a5e4546abb40975c19c1ebfd165c190eb95b9bedf086e1d78ef0c9b60` | `docs/production/claude-pm/lessons/b12/measured/captions.srt` |
| G02, inheritance probability practice | `out/explainer/Explainer-bio-m5-g02/Explainer-bio-m5-g02-v1.mp4` | 8:14 | `ecccff79bf073df03db0db0c27aaccc64884383546e554c6e4dc27022eeda1b5` | `docs/production/claude-pm/lessons/g02b/measured/captions.srt` |

**Metadata:** write any missing entries in `youtube/wave4-metadata-draft.json` from each design's "YouTube metadata" section (`lessons/bio-m5-b10.md`, `bio-m5-b12.md`, `bio-m5-g02.md`). B10's design has none, so write it in the style of the B9 entry.
- Quote every dotpoint word for word, with its bullets.
- Put the site-lesson link first.
- G02's description says its questions are written for HSCScience in the HSC style, not official NESA questions, as G01's does.

Upload each as in brief 28, with chapters (one per question for G02) and an end screen (skip it if the key notes fill the screen). Order the playlist by `playlistOrder` in the Module 5 route.

Add the records to `wave4-uploads.json` and a hand-in to `status.md` with the links.
