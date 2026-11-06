# Brief 226: render and publish chem-m8-c06 and chem-m8-c08 (new Module 8 videos)

**Hold released (root, 6 Nov late):** the key notes are trimmed to five short bullets at 44 px.

Read `00-standing-rules.md`, `maths-visual-standard.md` (its build gate) and brief 196 (the pre-render asset and font guard). Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time.

Claude built both lessons on their brief 194 measured narration and graded each 16-frame still sheet A (`docs/production/claude-pm/builds/chem-m8-c0{6,8}-sheet.jpg` and `-notes.md`). They are new videos, not replacements.

**For each lesson:**
1. **Pre-render.**
   - Run the export-stage brief check, and the asset and font guard.
   - Confirm C: has at least 3 GB free. If not, stop and report.
2. **Render.**
   - Render v1 with `node scripts/render-explainer.mjs Explainer-chem-m8-c0N (N = 6, 8) --confirm --revision=v1`, `RENDER_CONCURRENCY=2`.
   - Export captions.
   - Delete the chunk folder once the master checks pass.
3. **Check.**
   - Run the automated defect scan (broken images, blank frames, serif text).
   - Make a 16-frame sheet and compare it with Claude's sheet; report any frame that falls below A.
   - Play the scenes listed under "Check at playback" in each notes file at normal speed, in particular: c06's Winkler colour sequence (yellow, then pale straw, then blue, then clear exactly on "disappears") and the readout counting from 8.4 to 4.9; c08's bromine fade, the limewater going milky, and the strikes timed to each "out".
3b. **Back up.** Run the masters backup to Drive (`scripts/backup-masters.mjs`), so the master is safe before it leaves C:.
4. **Publish** (normal release; owner pre-approved Module 8):
   - upload v1 with the design's YouTube metadata, with the dotpoints quoted verbatim, the AI disclosure and the captions;
   - add it to the Chemistry Module 8 playlist in route order;
   - read the playlist back and record the link.

   If YouTube access is still broken, add both to `work/youtube-pending.json` instead.

**Hand-in:** to `status.md`, one line per video: the master path, duration, scan result, playback notes, and the link or pending status.
