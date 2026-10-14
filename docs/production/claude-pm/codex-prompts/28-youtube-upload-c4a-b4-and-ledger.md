# Brief 28: upload G01, C4a and B4 to YouTube, then refresh the coverage ledger

Read `00-standing-rules.md` first. Only start part A once all three MP4s exist (check the files; G01 was the last to render).

## Part A: upload three owner-approved videos

| Video | File | Metadata |
| --- | --- | --- |
| G01, enthalpy, entropy and non-equilibrium reactions | `out/explainer/Explainer-chem-m5-g01/Explainer-chem-m5-g01-v1.mp4` | entry `chem-m5-g01` in `docs/production/claude-pm/youtube/wave4-metadata-draft.json`; captions `lessons/g01/measured/captions.srt` |
| C4a, squeezing a gas mixture at equilibrium | `out/explainer/Explainer-chem-m5-c04a/Explainer-chem-m5-c04a-v1.mp4` | entry `chem-m5-c04a` in `docs/production/claude-pm/youtube/wave4-metadata-draft.json` |
| B4, DNA structure and replication | `out/explainer/Explainer-bio-m5-b04/Explainer-bio-m5-b04-v1.mp4` | entry `bio-m5-b04` in the same file |

Follow exactly what you did for briefs 11 and 18 (see `wave2-uploads.json` and `wave3-uploads.json`): Public, not made for kids, Education, English (Australia), AI disclosure, the Module 5 (2017 syllabus) playlist for the subject, timed SRT captions from `docs/production/claude-pm/lessons/c4a/measured/captions.srt` and `lessons/b4/measured/captions.srt`, and a thumbnail frame you choose (not the first frame).

- Check each MP4's sha256 before uploading and record it.
- Descriptions must include the syllabus dotpoint block (standing rule). The draft's Biology dotpoints are marked `verifyWording`: check them word for word against `out/research/continuity-2026-10-08/biology-2017-paragraphs.json` and the official 2017 syllabus.
- Playlist position follows the syllabus order, not upload order. Chemistry: C1, C2, G01, C3, C4a, C4b, C5... (put G01 between C2 and C3, and C4a straight after C3). Biology: B1, B2a, B2b, B2c, mould, B3a, B3a part 2, B3b, B4, B5a... (several are not uploaded yet; put B4 after the last uploaded Biology video and note in the hand-in that later inserts will be needed).
- These three renders are the first with loudness normalised to about -14 LUFS. If Studio shows any audio warning, record it.

Write `docs/production/claude-pm/youtube/wave4-uploads.json` (same fields as wave3) and append a hand-in with all three URLs.

## Part B: refresh the coverage ledger

Update `docs/production/claude-pm/coverage-ledger.md` as in brief 17: read the current designs and the lesson folders under `docs/production/claude-pm/lessons/` and set each video record's state correctly (released with URL, rendered, built, voiced, designed, planned). New since brief 17: C5 to C9, B3b, B4, B5a, B5b, B6a designs; G01, C4a and B4 released after part A. Keep the syllabus rows; flag any dotpoint whose owning video changed or any new overlap (the known one: B2b scene 8 re-explains B1's conditions comparison). Do not edit designs or the route.

Append one hand-in to `status.md` covering both parts.
