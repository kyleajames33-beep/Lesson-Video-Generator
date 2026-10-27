# Brief 28y: upload 20 videos (Module 6 practicals and practice, skills S05, the first Module 7 Chemistry and Biology)

Read these first:
- `00-standing-rules.md`
- `28w-youtube-upload-m6-c15-c16-b13-b15-b16-b18-b19-g02b-p02-p05.md`
- `28x-youtube-upload-m6-p06-g01-g02c-bio-p01-and-caption-replacement.md`

Finish 28x first: the four M6 uploads and the caption replacement.

The owner passed all 20 previews below on 27 October 2026, and they were rendered afterwards. Claude verified every MP4: 1920 by 1080, with an audio stream, and frame counts matching the lesson. Nine of them end 1 to 3 frames short of the scene total, on the final end hold. This is the same pattern as the uploaded 28w renders, for example C15, P02 and B19, so it isn't a problem.

**Captions:** use only the new `captions-cumulative.srt` files listed below. Claude exported them on 27 October with `scripts/export-explainer-captions.mjs`, which uses cumulative scene timing and rejects any caption inside a response hold. Never use the old `captions.srt` from these folders. That is the legacy timing that drifts 0.8 s per scene.

| Video | File (under `out/explainer/`) | sha256 | Captions (under `docs/production/claude-pm/lessons/`) | Design | Min |
|---|---|---|---|---|---|
| chem-m6-p01 | `Explainer-chem-m6-p01/Explainer-chem-m6-p01-v1.mp4` | `5870274b4fd35e81dbe25cc34b674d1781c245b246fb2a81ef796297a660f004` | `m6p01c/measured/captions-cumulative.srt` | `chem-m6-p01.md` | 8.3 |
| bio-m7-b01 | `Explainer-bio-m7-b01/Explainer-bio-m7-b01-v2.mp4` | `656549c96b5a008f59c67e1873aa256253bf5b901327a63afe66b3245b65a4aa` | `m7b01/measured/captions-cumulative.srt` | `bio-m7-b01.md` | 8.5 |
| chem-m6-p07 | `Explainer-chem-m6-p07/Explainer-chem-m6-p07-v1.mp4` | `6b8b702b5e508a3681b01607379de80fac246ac8f2decad97e72b6a8cb617ac9` | `m6p07/measured/captions-cumulative.srt` | `chem-m6-p07.md` | 8.4 |
| bio-m7-b02 | `Explainer-bio-m7-b02/Explainer-bio-m7-b02-v1.mp4` | `7145716240b24af2b767eb9464478a5aa0cd8d28db697977dc4f8f2d436da31c` | `m7b02/measured/captions-cumulative.srt` | `bio-m7-b02.md` | 8.0 |
| chem-m6-g03 | `Explainer-chem-m6-g03/Explainer-chem-m6-g03-v1.mp4` | `6a9d60ddb7651ef22273bc5ecac92225af7ee03894f97d19f0a8331281d043ec` | `m6g03c/measured/captions-cumulative.srt` | `chem-m6-g03.md` | 8.1 |
| bio-m7-b03 | `Explainer-bio-m7-b03/Explainer-bio-m7-b03-v1.mp4` | `4407b0ca561f36124fc63d6063edb83b255bbe1d43c00c1b7e800a98e9095f27` | `m7b03/measured/captions-cumulative.srt` | `bio-m7-b03.md` | 7.9 |
| chem-m6-g04 | `Explainer-chem-m6-g04/Explainer-chem-m6-g04-v1.mp4` | `64ac37a5007f1a0209c442ee8ff8ca22f256cb7d6d01e086a77925eef1584c1f` | `m6g04/measured/captions-cumulative.srt` | `chem-m6-g04.md` | 8.2 |
| bio-m7-p02 | `Explainer-bio-m7-p02/Explainer-bio-m7-p02-v1.mp4` | `87edc0f0968380bdbef97833289f5781574074f98ab29bd02c24e0670c2c7eae` | `m7p02b/measured/captions-cumulative.srt` | `bio-m7-p02.md` | 8.0 |
| skills-s05 | `Explainer-skills-s05/Explainer-skills-s05-v1.mp4` | `bae8c1620ad33cb5dfa3541057ca23d8a8d78f77155d119074c9addf980639da` | `skills05/measured/captions-cumulative.srt` | `skills-s05.md` | 8.4 |
| bio-m7-b04 | `Explainer-bio-m7-b04/Explainer-bio-m7-b04-v1.mp4` | `734453b0d40ddca0e8f02a64fd23b1af9ef61c5e19fd1924011a1138c282527b` | `m7b04/measured/captions-cumulative.srt` | `bio-m7-b04.md` | 8.1 |
| chem-m7-c01 | `Explainer-chem-m7-c01/Explainer-chem-m7-c01-v1.mp4` | `afef96ffc4aafc1996383b7dced80c9f2ba05f93d8275fb440b778766a147e9b` | `m7c01/measured/captions-cumulative.srt` | `chem-m7-c01.md` | 8.5 |
| bio-m7-b05 | `Explainer-bio-m7-b05/Explainer-bio-m7-b05-v2.mp4` | `a3913f67c7670e233cbcdaf6de352fa988fe83a44b0e3ae588b10cb71442ad19` | `m7b05/measured/captions-cumulative.srt` | `bio-m7-b05.md` | 7.8 |
| chem-m7-c02 | `Explainer-chem-m7-c02/Explainer-chem-m7-c02-v1.mp4` | `8e2bdea6b0f996ccbd9a520b8a7ee22796e90f648d32fe07fe03d3d5877aa2d8` | `m7c02/measured/captions-cumulative.srt` | `chem-m7-c02.md` | 8.3 |
| bio-m7-b06 | `Explainer-bio-m7-b06/Explainer-bio-m7-b06-v1.mp4` | `c8cf7940d8e96e5e06c3cf6d915adf1b09e1c1af32c21429a7e01acf35053371` | `m7b06/measured/captions-cumulative.srt` | `bio-m7-b06.md` | 7.8 |
| chem-m7-c03 | `Explainer-chem-m7-c03/Explainer-chem-m7-c03-v1.mp4` | `787c71576326b9829abe99e61461b5058bd60ebb208ae2d7ff3d92b916e4331b` | `m7c03/measured/captions-cumulative.srt` | `chem-m7-c03.md` | 8.6 |
| bio-m7-b07 | `Explainer-bio-m7-b07/Explainer-bio-m7-b07-v1.mp4` | `5103c8fea65d4ee9f856fa197d00966b8c7adc2a75930352045481fe3e50b4a6` | `m7b07/measured/captions-cumulative.srt` | `bio-m7-b07.md` | 7.7 |
| chem-m7-p01 | `Explainer-chem-m7-p01/Explainer-chem-m7-p01-v1.mp4` | `fb711618dc94fc01985f55fc5e64685325f18f0aee77c1b877830cbee6c0b047` | `m7p01c/measured/captions-cumulative.srt` | `chem-m7-p01.md` | 8.3 |
| chem-m7-c04a | `Explainer-chem-m7-c04a/Explainer-chem-m7-c04a-v1.mp4` | `133e3d4729b66eb9b034e24a402bbdc1decc7101e2653d56b5dec9e972fa2afa` | `m7c04a/measured/captions-cumulative.srt` | `chem-m7-c04a.md` | 8.0 |
| chem-m7-c04b | `Explainer-chem-m7-c04b/Explainer-chem-m7-c04b-v1.mp4` | `73a0f11e9d47ca0baf1b7c1a62a36311f607efbbf50f5719cb818a9e9b697031` | `m7c04b/measured/captions-cumulative.srt` | `chem-m7-c04b.md` | 8.1 |
| chem-m7-g01 | `Explainer-chem-m7-g01/Explainer-chem-m7-g01-v1.mp4` | `a292151faf00c1bace52bf2fab7266394a39c97babd8147e1a9aaa35b2219d9e` | `m7g01/measured/captions-cumulative.srt` | `chem-m7-g01.md` | 8.4 |

Verify every hash before uploading. Take each title from its design's YouTube metadata section, using the latest revision. Titles must be 100 characters or fewer: shorten minimally where needed and record the original.

**Metadata:** write the entries in `youtube/wave5-metadata-draft.json` from each design's YouTube metadata section:
- Quote every dotpoint word for word, with its bullets, against the ledger.
- Put the site-lesson link first, in the live `.sa` URL form.
- Use scene-timed chapters from each `measured/lesson.json`. Use cumulative scene starts with no transition deduction, matching the corrected captions.

Use the same Education category, audience, AI disclosure, thumbnail and end-screen rules as 28w.

**Playlists:**
- **Module 6 Chemistry:** P01, P07, G03 and G04 go at their positions in `module6-video-route-draft.json`, as amended by `module6-route-review-claude.md`.
- **Skills S05:** goes in the same playlist as S01 to S04, after S04.
- **Module 7:** create public playlists "Year 12 Chemistry: Module 7 Organic Chemistry" and "Year 12 Biology: Module 7 Infectious Disease". Match the naming of the existing Module 6 playlists if it differs. Order them by `module7-video-route-draft.json` and `module7-route-review-claude.md`, keeping relative route order. Videos not yet made leave gaps.
  - **Chemistry:** C01, C02, C03, P01, C04a, C04b, G01.
  - **Biology:** B01, B02, B03, P02, B04, B05, B06, B07.
- Read back the final order of every playlist you touch.

**If the daily upload limit hits,** upload in this order and stop:
1. chem-m7-c01
2. bio-m7-b01
3. chem-m7-c02
4. bio-m7-b02
5. chem-m7-c03
6. bio-m7-b03
7. chem-m7-p01
8. bio-m7-p02
9. chem-m7-c04a
10. bio-m7-b04
11. chem-m7-c04b
12. bio-m7-b05
13. chem-m7-g01
14. bio-m7-b06
15. bio-m7-b07
16. chem-m6-p01
17. chem-m6-p07
18. chem-m6-g03
19. chem-m6-g04
20. skills-s05

Add the records to `wave5-uploads.json`, and hand in to `status.md` with all the links.
