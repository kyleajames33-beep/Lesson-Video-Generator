# Brief 78: caption quality check for every published video

Read `00-standing-rules.md` first. For each published video, compare its published SRT (`lessons/<key>/measured/captions.srt`) with the narration in `lessons/<key>/measured/lesson.json`. Check:
- spelling of scientific terms and names;
- chemical formulas and charges read sensibly in captions (for example "Ksp", "Fe3+", "SO4 2-");
- cue timing gaps or overlaps;
- line length (at most 2 lines, about 42 characters each);
- em dashes;
- numbers matching the narration.

Fix caption-only problems by making `captions-fixed.srt` beside the original, then update the YouTube captions for that video. **Never change narration or audio.**

Write `docs/production/claude-pm/youtube/captions-qa-2026-10.md`, listing per video what you fixed. Hand in to `status.md`.
