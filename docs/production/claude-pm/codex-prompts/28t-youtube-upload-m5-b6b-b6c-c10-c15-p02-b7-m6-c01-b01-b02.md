# Brief 28t: upload B6b, B6c, C10, C15, Chemistry P02, B7, and Module 6 C01, B01, B02; publish Biology P01

Read `00-standing-rules.md` and `28-youtube-upload-c4a-b4-and-ledger.md` first. The owner approved all of these on 20 October. C01 includes the timeline fix (dates above the line). All have the light declutter pass.

| Video | File | sha256 | Captions | Design (metadata) |
|---|---|---|---|---|
| Bio B6b, transcription | `out/explainer/Explainer-bio-m5-b06b/Explainer-bio-m5-b06b-v3.mp4` | `172c353f472d5665005c213d81b9a9d10aa45e6ec02b3d918b974484807c5149` | `lessons/b6b/measured/captions.srt` | `lessons/bio-m5-b06b.md` |
| Bio B6c, translation | `out/explainer/Explainer-bio-m5-b06c/Explainer-bio-m5-b06c-v3.mp4` | `c16ff73d35baf9e4da23fc4c3db6a2bd4bf64e83b4b7da3524c7553af0fed2f6` | `lessons/b6c/measured/captions.srt` | `lessons/bio-m5-b06c.md` |
| Chem C10, Ka | `out/explainer/Explainer-chem-m5-c10/Explainer-chem-m5-c10-v3.mp4` | `62aa5e0c5b7cd78b93625b556087793d3361b986581a5e8912b104331b3e6afa` | `lessons/c10/measured/captions.srt` | `lessons/chem-m5-c10.md` |
| Chem C15, precipitation | `out/explainer/Explainer-chem-m5-c15/Explainer-chem-m5-c15-v2.mp4` | `00483dbc000a20d36bf7e22053058ff75e04d17e12f7f22516da8d9202c2a96f` | `lessons/c15/measured/captions.srt` | `lessons/chem-m5-c15.md` |
| Chem P02, K from colour | `out/explainer/Explainer-chem-m5-p02/Explainer-chem-m5-p02-v6.mp4` | `a63df09a23458036fb6883960da95b001d20e39ee1bb8af0dfa67365591ed53c` | `lessons/p02/measured/captions.srt` | `lessons/chem-m5-p02.md` |
| Chem M6 C01, acid and base models | `out/explainer/Explainer-chem-m6-c01/Explainer-chem-m6-c01-v3.mp4` | `5e89b09bf75b059d19724e9c60470a49b76fe5fa7536bf45d1cb2eb9e3540ccc` | `lessons/m6c01/measured/captions.srt` | `lessons/chem-m6-c01.md` |
| Bio M6 B01, mutation and new alleles | `out/explainer/Explainer-bio-m6-b01/Explainer-bio-m6-b01-v2.mp4` | `c87911ecccfead3c7fb9daf4bfc792e34330772101bb65a0f483e634142cf8c0` | `lessons/m6b01/measured/captions.srt` | `lessons/bio-m6-b01.md` |
| Bio M6 B02, mutagens | `out/explainer/Explainer-bio-m6-b02/Explainer-bio-m6-b02-v2.mp4` | `d2d6ac76fa092b249e816680d21e4f6c0208376f567bf8492c91e735be0f276c` | `lessons/m6b02/measured/captions.srt` | `lessons/bio-m6-b02.md` |

All paths are under `docs/production/claude-pm/` except the MP4s. Verify every hash before uploading.

**Also from earlier briefs:**
- **Bio B7:** brief 28p, already rendered and hash-listed there. Upload it once B6c is public, because B6c is its prerequisite.
- **Bio P01:** it is already a Private draft. Make it Public once B6c is public.
- **Still held:** B8 and Bio P02 wait for B5b, which is being rebuilt after brief 88. Do not publish them.

**Metadata:** write any missing entries in `youtube/wave4-metadata-draft.json` (or a new `wave5-metadata-draft.json` for Module 6) from each design's YouTube metadata section:
- Quote each dotpoint word for word, with its bullets, against the syllabus ledger.
- Put the site-lesson link first.
- Use scene-timed chapters from the measured scenes.

Use the same Education category, audience setting, AI disclosure, captions and thumbnail rules as brief 28s. Skip end screens where the key notes fill the screen.

**Playlists:**
- **Module 5:** insert each video at its `playlistOrder` from the Module 5 route.
- **Module 6:** if Year 12 Chemistry Module 6 and Biology Module 6 playlists don't exist yet, create them. Name and describe them in the same style as the Module 5 playlists, and set them Public. Order by the Module 6 route (`module6-video-route-draft.json`, amended by `module6-route-review-claude.md`). For now C01 is first in Chemistry, and B01 then B02 are first in Biology.
- **Upload limit:** if the daily limit hits, upload in this order and stop:
  1. B6c
  2. B6b
  3. B7
  4. P01 to Public
  5. C10
  6. C15
  7. Chem P02
  8. C01
  9. B01
  10. B02

Add the records to `wave4-uploads.json` (and a wave 5 file for Module 6 if you create one), and a hand-in to `status.md` with the links.
