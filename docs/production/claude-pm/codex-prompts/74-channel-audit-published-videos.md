# Brief 74: audit every published video on the channel

Read `00-standing-rules.md` first. Check every video in `docs/production/claude-pm/youtube/wave1-uploads.json` to `wave4-uploads.json` against the current standards:
- the site-lesson link is the first description line (brief 65);
- the syllabus dotpoints are quoted word for word with their codes;
- chapters match the scenes;
- the SRT captions are published and match `lessons/<key>/measured/captions.srt`;
- the title follows the pattern "<Topic> | Year 12 <Subject>";
- the playlist position follows `playlistOrder` in `docs/production/module5-video-route-2026-10-10.json`;
- the settings are Education, not made for kids, AI use disclosed;
- the description has no em dashes.

**Fix directly:** missing link lines, dotpoint wording, chapter typos and playlist order.
**List for the owner, don't change:** title changes or anything bigger.

Write `docs/production/claude-pm/youtube/channel-audit-2026-10.md` as a table, one row per video, showing each check, what you fixed and what is left for the owner. Hand in to `status.md`.
