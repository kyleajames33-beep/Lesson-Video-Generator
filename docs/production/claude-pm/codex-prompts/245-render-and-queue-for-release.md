# Brief 245: render brief 241's waiting videos and queue them for the release chat

Read `00-standing-rules.md` and briefs 239 and 241. Do not spawn sub-agents. Make no design, narration or scene-code edits and no commits. One render at a time.

## What changes from today (14 Nov, owner)

Publishing moves to a separate release chat (Claude Sonnet), which uploads through the YouTube Data API.
- **Codex's job:** render, check and then **queue** each video. Codex no longer uploads in YouTube Studio.
- **If a check fails:** hold the video exactly as before, report it in `status.md` and continue with the next one.

## Order of work

1. **Disk.** Run `df -h /c` before each render. Under 2 GB free, stop and report.
   - After each render, delete that render's `chunks-*` folder.
   - Delete only your own render bundles and Temp webpack folders, never another session's.
2. **Render queue.** Render brief 241's entries 19 to 35 that have no checked master at their listed revision yet, in list order:
   d03 v3, d04 v3, d14 v3, i10 v3, d15 v3, i12 v2, i14 v2 (after its scene 2 re-voice), i11, i13, f01, f02, f03, f04, f05, i01 v2, f06, f07.
   Use the same per-lesson render and check method as brief 239 (steps 1 to 3), including the "check at playback speed" items listed in brief 241. Entries 1 to 18 that are already rendered but not yet public join the queue too, if they passed.
3. **Queue each passed video for release.** Write `work/release-queue/<lesson>-<rev>.json` (create the folder):
   ```json
   {
     "lesson": "math-a12-f01",
     "revision": "v1",
     "master": "out/explainer/Explainer-math-a12-f01/Explainer-math-a12-f01-v1.mp4",
     "masterSha256": "...",
     "captionFile": "work/brief241/f01/captions/captions.srt",
     "title": "... (exact, from the design's YouTube metadata section, with no prose edits)",
     "descriptionFile": "work/release-queue/math-a12-f01-v1.description.txt",
     "playlists": [{"id": "PL...", "position": 37}, {"id": "PL...", "position": 0}],
     "replaces": null,
     "checks": "pass",
     "checkedAt": "ISO time"
   }
   ```
   - **`descriptionFile`:** the full description with the dotpoint quoted verbatim, the same text you would have pasted into Studio.
   - **`playlists`:** zero-based positions in each playlist the video belongs in (the strand playlist and "HSC Maths Advanced Year 12: Full Course"), read back from the current playlists.
   - **`replaces`:** the old public video ID when this master supersedes one (for example d03 v2 or i08 v1), else null.
   
   Write the JSON last, so the release chat never sees a half-written entry. Add one line per queued video to `status.md`.
4. **Between renders**, resume brief 242 from Chemistry M2 v07, and voice per brief 240 as the daily Google quota allows.

## Never

- Upload, publish or edit anything in YouTube Studio for videos in this queue.
- Change a queue file after `"checks": "pass"` is written. If you later find a defect, write `work/release-queue/<lesson>-<rev>.HOLD.txt` saying why. The release chat skips any video with a HOLD file.
