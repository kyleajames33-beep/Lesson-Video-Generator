# Brief 28v: upload Module 6 C09 to C14, B09 to B12, and exam skills S03, S04

Read `00-standing-rules.md`, `28-youtube-upload-c4a-b4-and-ledger.md` and `28u-youtube-upload-b5a-b5b-b8-p02-m6-batch-skills.md` first. The owner passed all 12 videos below at preview, and they were rendered afterwards (21 October 2026).

| Video | File (under `out/explainer/`) | sha256 | Captions (under `docs/production/claude-pm/lessons/`) | Design |
|---|---|---|---|---|
| Chem M6 C09, Ka, pKa and percentage ionisation | `Explainer-chem-m6-c09/Explainer-chem-m6-c09-v1.mp4` | `ef34b1d978c75b8dc40ba6114911629336b9dac3f0e8cc19849af0f93ad224b0` | `m6c09/measured/captions.srt` | `chem-m6-c09.md` |
| Chem M6 C10 | `Explainer-chem-m6-c10/Explainer-chem-m6-c10-v1.mp4` | `4e0808e971d6066db898b62a13c10aa5832873a13639976815d36f1961561131` | `m6c10/measured/captions.srt` | `chem-m6-c10.md` |
| Chem M6 C11, buffers | `Explainer-chem-m6-c11/Explainer-chem-m6-c11-v1.mp4` | `a959b5bd6ca62aaf7ca2747aed08c18597f48cadf2ad9aa83c1c71ac8966b209` | `m6c11/measured/captions.srt` | `chem-m6-c11.md` |
| Chem M6 C12, titration | `Explainer-chem-m6-c12/Explainer-chem-m6-c12-v1.mp4` | `71ba5d06bc1981ec8010979547760924ccbff9a8127d702d9478cdf53d91082e` | `m6c12/measured/captions.srt` | `chem-m6-c12.md` |
| Chem M6 C13, choosing an indicator | `Explainer-chem-m6-c13/Explainer-chem-m6-c13-v1.mp4` | `6b4695b9131b759a128c6c0daa13c7ceac3ccf85834caec65c92596531e5c2e1` | `m6c13/measured/captions.srt` | `chem-m6-c13.md` |
| Chem M6 C14, titration curves and conductivity | `Explainer-chem-m6-c14/Explainer-chem-m6-c14-v1.mp4` | `8ba1b4e26c4eb6d5c1bdccf7fdd8cc4238aca5e3e6d1dbb9acdace72d05de302` | `m6c14/measured/captions.srt` | `chem-m6-c14.md` |
| Bio M6 B09 | `Explainer-bio-m6-b09/Explainer-bio-m6-b09-v1.mp4` | `5cd07ff0fa78f1ff28e30efd6c6ede8cae3d1bdabc30efe94792addf88a6f216` | `m6b09/measured/captions.srt` | `bio-m6-b09.md` |
| Bio M6 B10 | `Explainer-bio-m6-b10/Explainer-bio-m6-b10-v1.mp4` | `0b8f6e5afca7dfcb232b28902cec467485aec711e3a9b095116cff3c8a138ae0` | `m6b10/measured/captions.srt` | `bio-m6-b10.md` |
| Bio M6 B11, plausible future uses | `Explainer-bio-m6-b11/Explainer-bio-m6-b11-v1.mp4` | `459bfed0bdeac2b94c4503284ab0a696dcf5e18cefcd831f47d4ea218316fa6a` | `m6b11/measured/captions.srt` | `bio-m6-b11.md` |
| Bio M6 B12, biotechnology and biodiversity | `Explainer-bio-m6-b12/Explainer-bio-m6-b12-v1.mp4` | `98bd2597f74b09c49c7f0d89c027513d71438ed1c20a7828009fc836f8ad1f60` | `m6b12/measured/captions.srt` | `bio-m6-b12.md` |
| Skills S03, compare, contrast, distinguish | `Explainer-skills-s03/Explainer-skills-s03-v1.mp4` | `89dfd89d414d859cf273ab5c3ab55c7ab85d5603c77502d970d48f1ee7b06778` | `skills03/measured/captions.srt` | `skills-s03.md` |
| Skills S04, analyse, assess, evaluate, justify | `Explainer-skills-s04/Explainer-skills-s04-v1.mp4` | `925d962d4502c3830844f382471c7e015f3824636bdea199f20a3db23035a188` | `skills04/measured/captions.srt` | `skills-s04.md` |

**Titles:** take each title from its design's YouTube metadata section; the short names in the table are only labels.

Verify every hash before uploading. Durations: 7.8 to 8.7 minutes.

**Metadata:** write the entries in `youtube/wave5-metadata-draft.json` from each design's YouTube metadata section:
- Quote every dotpoint word for word, with its bullets, against the ledger.
- Put the site-lesson link first, using the live `.sa` URL form (see the brief 28u hand-in, where an extensionless link 404'd).
- The skills videos link the site's main Chemistry and Biology Year 12 pages.
- Use scene-timed chapters from each `measured/` folder.

Use the same Education category, audience setting, AI disclosure, captions, thumbnail and end-screen rules as briefs 28t and 28u.

**Playlists:**
- **Module 6 Chemistry and Biology:** order by `module6-video-route-draft.json`, amended by `module6-route-review-claude.md`. Practicals not yet made leave gaps, so keep relative route order.
- **HSC exam skills:** add S03 (order 3) and S04 (order 4).
- **Interleaving** (owner and root decisions recorded in the designs):
  - S03: after C12 in Chemistry Module 6, and after B10 in Biology Module 6.
  - S04: after C11 in Chemistry Module 6, and after B03 in Biology Module 6.

  So in Chemistry the order runs C11, S04, C12, S03.

**If the daily upload limit hits,** upload in this order and stop:
1. C09
2. B09
3. C10
4. B10
5. C11
6. S04
7. B11
8. C12
9. S03
10. B12
11. C13
12. C14

Add the records to `wave5-uploads.json`, and a hand-in to `status.md` with all the links.
