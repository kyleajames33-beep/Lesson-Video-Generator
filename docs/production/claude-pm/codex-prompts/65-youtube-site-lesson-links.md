# Brief 65: link each YouTube video to its HSCScience lesson

Read `00-standing-rules.md` first. The owner approved this on 18 October 2026: every video description links to the matching lesson on the site.

**The link line.** Put it as the first line of the description, so it shows above "...more":

`Full lesson, notes and practice questions: https://hscscience.com.au/subjects/<subject>/year12/<module>/lessonNN`

- Use the clean URL (no `.sa`). The site's `_redirects` forwards it to the lesson page.
- For a practice video (G series) or a practical video (P series), link the lesson it practises. If one video covers two lessons, put both links on separate lines.
- Before using a URL, check that the lesson file exists in `C:/Users/kygs/hscscience/subjects/` (read-only). Map each video to its lesson using `docs/production/module5-video-route-2026-10-10.json`, the site extracts and the lesson design's source line.

**Do:**
1. Make a table in `docs/production/claude-pm/youtube/site-links.md` with the lesson id, YouTube URL, site lesson URL, and how you matched them. Flag any video you can't match with confidence, and skip it.
2. Update the description of every published video in `wave1-uploads.json` to `wave4-uploads.json` with the YouTube Data API. Add the link line only. Keep the title, tags, captions, playlist and the rest of the description unchanged.
3. Add the link line to every unpublished entry in `wave4-metadata-draft.json`, and to the description template that future upload briefs use.
4. Afterwards, fetch each video's description again to check that the change stuck.

No em dashes. Hand in to `status.md` with the number of videos updated and any you skipped.
