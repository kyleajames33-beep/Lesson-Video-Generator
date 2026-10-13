# Brief 18b: finish the C3 and B2c YouTube uploads (resume brief 18)

Read `00-standing-rules.md` and `18-youtube-upload-c3-b2c.md` first. Brief 18 stopped part-way when the Chrome automation disconnected. The record is `docs/production/claude-pm/youtube/wave3-uploads.json`; read it before doing anything. Check the channel's Studio content list first so you do not create duplicates.

1. C3 (already uploaded as https://youtu.be/w0GzgApQhQY). Do NOT upload it again. Open that exact video in Studio and confirm or finish: visibility Public, the timed SRT caption published, and its place in the Year 12 Chemistry Module 5 (2017 syllabus) playlist after C2. Check the saved metadata still matches the JSON.
2. B2c (not uploaded yet). Upload `out/explainer/Explainer-bio-m5-b02c/Explainer-bio-m5-b02c-v1.mp4` with the metadata and caption already prepared in the JSON, following brief 18 exactly: Public, not made for kids, Education, English (Australia), AI disclosure, timed SRT captions, the Year 12 Biology Module 5 (2017 syllabus) playlist after B2a. Check the file's sha256 against the JSON first.
3. Update `wave3-uploads.json` (status, visibility, URL, playlist position, caption state for both) and append a short hand-in to `status.md` with both URLs and anything still not confirmed.

If the browser disconnects again, stop, record exactly what was and was not saved, and do not retry an upload whose state you cannot see.
