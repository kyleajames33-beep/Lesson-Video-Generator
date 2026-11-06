# Brief 223: render and publish chem-m8-c04 and chem-m8-c05 (new Module 8 videos)

**ON HOLD (root, 6 Nov late): do not render until Claude commits a key-notes trim for these lessons and removes this line.** The key-notes screens are too dense for the A standard.

Read `00-standing-rules.md`, `maths-visual-standard.md` (its build gate) and brief 196 (the pre-render asset and font guard). Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time.

Claude built both lessons on their brief 194 measured narration and graded each 16-frame still sheet A (`docs/production/claude-pm/builds/chem-m8-c0{4,5}-sheet.jpg` and `-notes.md`). They are new videos, not replacements.

**For each lesson:**
1. **Pre-render.**
   - Run the export-stage brief check, and the asset and font guard.
   - Confirm C: has at least 3 GB free. If not, stop and report.
2. **Render.**
   - Render v1 with `node scripts/render-explainer.mjs Explainer-chem-m8-c0N --confirm --revision=v1`, `RENDER_CONCURRENCY=2`.
   - Export captions.
   - Delete the chunk folder once the master checks pass.
3. **Check.**
   - Run the automated defect scan (broken images, blank frames, serif text).
   - Make a 16-frame sheet and compare it with Claude's sheet; report any frame that falls below A.
   - Play the scenes listed under "Check at playback" in each notes file at normal speed, in particular: c04's concentration chip stepping with the readout and cuvette colour; c05's scene 5 crash-lake plate, which once rendered blank in a still.
3b. **Back up.** Run the masters backup to Drive (`scripts/backup-masters.mjs`), so the master is safe before it leaves C:.
4. **Publish** (normal release; owner pre-approved Module 8):
   - upload v1 with the design's YouTube metadata, with the dotpoints quoted verbatim, the AI disclosure and the captions;
   - add it to the Chemistry Module 8 playlist in route order;
   - read the playlist back and record the link.

   If YouTube access is still broken, add both to `work/youtube-pending.json` instead.

**Hand-in:** to `status.md`, one line per video: the master path, duration, scan result, playback notes, and the link or pending status.
