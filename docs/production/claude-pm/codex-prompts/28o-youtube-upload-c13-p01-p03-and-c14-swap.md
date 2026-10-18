# Brief 28o: upload C13 and Chemistry P03, and swap C14 for its corrected version

Read `00-standing-rules.md` and `28-youtube-upload-c4a-b4-and-ledger.md` first. The owner approved all of this on 18 October, including the C14 swap.

## New uploads

Chemistry P01 is held back for a fix (Codex check 73), and a separate brief will cover it.

| Video | File | Length | sha256 | Captions |
|---|---|---|---|---|
| C13, solubility rules and net ionic equations | `out/explainer/Explainer-chem-m5-c13/Explainer-chem-m5-c13-v1.mp4` | 9:17 | `cc716f75b476b948fb39da4ce9a605943d91b7e40d817a35e9d184a5ab9cdaef` | `docs/production/claude-pm/lessons/c13/measured/captions.srt` |
| P03, solubility rules practical (48-well plate) | `out/explainer/Explainer-chem-m5-p03/Explainer-chem-m5-p03-v1.mp4` | 8:41 | `31f66463d841d0fd54bfa19c57cd09be63ade72c1229ffac385dc972ed66df84` | `docs/production/claude-pm/lessons/p03/measured/captions.srt` |

**Metadata:** these two have no entries in `youtube/wave4-metadata-draft.json` yet.
- Write each entry from the "YouTube metadata" section of its design (`lessons/chem-m5-c13.md`, `chem-m5-p03.md`). If C13's design has no such section, write the entry in the style of the C11 entry.
- Quote every dotpoint word for word, with its example bullets, from `docs/production/programme/syllabus/chem-2017-y12.json`.
- Put the site-lesson link first (brief 65).
- Add the entries to the JSON before uploading.

## C14 swap

The live C14 (https://youtu.be/zIYzqE5XbaU) has two errors that are now fixed: an on-screen ratio label, and an overgeneral "square or cube root" rule.

1. Upload `out/explainer/Explainer-chem-m5-c14/Explainer-chem-m5-c14-v2.mp4` (9:27, sha256 `d4fcbb368571a2e579ed9ee9c8762c0e7faea193bd018dc496d6fccc9d5129a0`).
   - Use the same title, description, chapters and settings as the live one. Re-time the chapters if any scene moved: decision-rule is now about 2 s longer.
   - Use the captions at `lessons/c14/measured/captions.srt`, which are regenerated.
2. Put the new video in the same playlist position.
3. Check that it is fully processed and public.
4. Then delete the old video zIYzqE5XbaU.
5. Update `wave4-uploads.json`, marking the old record superseded with the date. Update any site-link or embed record that pointed at the old ID (`website-embeds/` if brief 75 has run).

## Playlists

Order every video by `playlistOrder` in `docs/production/module5-video-route-2026-10-10.json`, not by upload date.

Add the records to `wave4-uploads.json`. Hand in to `status.md`, listing all the new links and confirming the old C14 was deleted.
