# Brief 227 (top priority, after 225): render the Year 11 Chemistry and Year 12 Physics pilots for the owner

Read `00-standing-rules.md`, `maths-visual-standard.md` (its build gate) and brief 225 (same method). Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time. **Run this straight after brief 225**, ahead of everything else.

Claude built both pilots on your brief 217 measured narration and graded each 16-frame still sheet A (commits ab347132 and bee72497). The sheets and notes are in `docs/production/claude-pm/builds/`:
- `chem-y11-m2-v06-sheet.jpg` and `-notes.md` (composition `Explainer-chem-y11-m2-v06`);
- `phys-y12-m5-v04-sheet.jpg` and `-notes.md` (composition `Explainer-phys-y12-m5-v04`).

The owner watches each pilot to decide whether its course goes ahead.

**Audio note.** Root copied the shared key-notes take into each pilot's own folder (`public/audio/<lesson>/key-notes.wav` and its sidecars; commit 2897dab7), and repointed both measured `lesson.json` files. The take is byte-identical to the one it replaces. Confirm both pilots resolve their audio before rendering. Add the new files to the voice manifests if the backup relies on them.

**For each pilot,** follow brief 225 steps 1 to 4:
1. Pre-render checks.
2. Render v1 with `node scripts/render-explainer.mjs Explainer-<id> --confirm --revision=v1`, `RENDER_CONCURRENCY=2`, and export captions.
3. Run the defect scan, compare the sheet with Claude's, and watch the whole video at normal speed. Note timestamps for anything that moves wrongly, lands off its cue, overlaps or clips. Check the items under "Check at playback" in each notes file, in particular:
   - **Chemistry:** the scene 10 slider and run-sheet; the scene 11 sweep (seven points in about 3.5 s: does it read?); the scene 4 balance ticking to 36.03 g.
   - **Physics:** the paired flights landing together while their clocks differ; the barrel tilt with the point riding the range curve; the shadow on the distance ruler; the cliff rise.
4. Upload each as **Unlisted** (not public, no playlist), with the design's draft metadata and captions. Record the links in `status.md` and `work/youtube-pending.json` ("owner pilot, unlisted"), or give the local MP4 paths if YouTube access is still broken. Back up both masters to Drive.

**Hand-in:** to `status.md`, per pilot: the master path, duration, scan result, sheet comparison, playback notes with timestamps, and the unlisted link or local path.
