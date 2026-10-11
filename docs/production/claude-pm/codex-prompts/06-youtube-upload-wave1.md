# Brief 06: upload the first three Claude-directed videos to YouTube

Read `00-standing-rules.md` first. The owner has approved these three finished videos for upload (11 October 2026). You own the upload job end to end: metadata, upload, playlists, captions and the record. Do not re-render or edit any video.

Channel: HSCScience, @HSCScience-u7i (Studio channel `UCNUGtH2mgBMCRLG9fiqWm8Q`). Read `docs/production/youtube-publishing-plan-2026-10-09.md` for playlist naming, syllabus-version labels and description rules, and copy the description format used in `docs/production/youtube-queue-2026-10-10.md`. Check the channel first so you do not create duplicate playlists or videos.

## Syllabus versions (owner, 11 October 2026)

- Chemistry: 2017 syllabus for Year 11 and Year 12.
- Biology: 2025 syllabus for Year 11, 2017 syllabus for Year 12.

All three videos here are Year 12 Module 5, so they map to the 2017 syllabus only. Name playlists accordingly (for example "Year 12 Biology: Module 5, Heredity (2017 syllabus)").

## Videos

| Order in Module 5 | File | Captions | Content source |
| --- | --- | --- | --- |
| Chemistry M5, video 1 | `out/explainer/Explainer-chem-m5-c01/Explainer-chem-m5-c01-v1.mp4` | `docs/production/claude-pm/lessons/c1/measured/captions.srt` (if missing, build one from the `captions` in `measured/lesson.json`) | `docs/production/claude-pm/lessons/chem-m5-c01.md`, `site-extracts/chem-m5-l01.md` |
| Biology M5, video 1 | `out/explainer/Explainer-bio-m5-b01/Explainer-bio-m5-b01-v1.mp4` | `docs/production/claude-pm/lessons/b1/measured/captions.srt` (same fallback) | `docs/production/claude-pm/lessons/bio-m5-b01.md`, `site-extracts/bio-m5-l01.md` |
| Biology M5, fungi (bread mould) | `out/explainer/Explainer-bio-m5-mould/Explainer-bio-m5-mould-v1.mp4` | `docs/production/fungi-design-reset-2026-10-11/teaching-reset-take02/measured/captions.srt` | that folder's `lesson.json`, `site-extracts/bio-m5-l03.md` |

If an MP4 path differs, use the newest MP4 in that `out/explainer/<id>/` folder and say so in your hand-in.

## For each video

1. Title: plain student question or topic first, then `| Year 12 Chemistry` or `| Year 12 Biology`. No clickbait, no em dashes.
2. Description: two or three sentences on what the student will be able to do, the syllabus mapping line (**2017 syllabus only**: Year 12 Module 5, with the official 2017 course link; do not add 2025 mapping lines, see Syllabus versions below), the prerequisite and the next video, then hashtags. Facts must come from the lesson files above. Do not claim practical coverage.
3. Visibility: Public. Audience: not made for kids. Category: Education. Language: English (Australia).
4. Upload the SRT as English captions.
5. Thumbnail: use a clear frame from the video (YouTube's frame picker is fine). Do not generate new thumbnail art.
6. Playlists: add to the Year 12 Module 5 playlist for that subject, creating it if absent, in learner order (Biology: B1 before the mould video, leaving room for videos between them).

## Record

Write `docs/production/claude-pm/youtube/wave1-uploads.json` with, per video: file, sha256, title, description, visibility, playlist and position, caption file, video ID and URL, upload date. Append a short hand-in to `status.md` with the three URLs and anything you could not complete. Questions for Claude go at the end of the hand-in, not as guesses in the metadata.
