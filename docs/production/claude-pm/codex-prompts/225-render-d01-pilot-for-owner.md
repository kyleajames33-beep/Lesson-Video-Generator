# Brief 225 (top priority): render the d01 Maths pilot for the owner to watch

Read `00-standing-rules.md` and `maths-visual-standard.md` (its build gate). Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time. **Run this next, as soon as the brief you are on finishes**, ahead of everything else in the queue.

Claude rebuilt math-a12-d01 on the maths studio kit, using your brief 213 measured narration (commit af143625), and graded its 16-frame still sheet A. The sheet and notes are `docs/production/claude-pm/builds/math-a12-d01-sheet.jpg` and `-notes.md`. This is the owner's pilot for the whole Maths course: the owner watches it and decides whether Maths goes ahead.

1. **Pre-render.**
   - Run the export-stage brief check, and the asset and font guard.
   - The composition id is `Explainer-math-a12-d01`.
   - Confirm free RAM and disk; C: should have plenty of space now.
2. **Render.**
   - Render v2 with `node scripts/render-explainer.mjs Explainer-math-a12-d01 --confirm --revision=v2`, `RENDER_CONCURRENCY=2`. v1 is the rejected render; keep it.
   - Export captions from the Revision 6 measured data.
3. **Check.**
   - Run the defect scan (broken images, blank frames, serif text).
   - Make a 16-frame sheet and compare it with Claude's; report any frame that falls below A.
   - Watch the whole video at normal speed. Report anything that moves wrongly, lands off its cue, overlaps or clips, with timestamps. Check in particular:
     - scene 1, the first cell division;
     - scene 4, the squash morph;
     - scene 5, the slider sweeps and the mirror fold (the readouts dim and never show a = 0);
     - scene 6, the slide and the overtaking race;
     - scene 7, the stretch;
     - feedback 1, the "slope 8" tangent;
     - the pronunciation of the letter a as "ay".
4. **Hand to the owner.**
   - Upload v2 to YouTube as **Unlisted**, not public and not in any playlist, with the design's draft title and description, and the captions.
   - Record the link in `status.md` and in `work/youtube-pending.json` marked "owner pilot, unlisted".
   - If YouTube access is still broken, give the local MP4 path instead.
   - Then back up the master to Drive.

**Hand-in:** to `status.md`: the master path, duration, scan result, sheet comparison, your full playback notes with timestamps, and the unlisted link or local path.
