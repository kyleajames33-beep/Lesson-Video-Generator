# Brief 239: render and publish the first Maths videos (d02 onward)

Read `00-standing-rules.md`, `maths-visual-standard.md` (its build gate), and briefs 225 and 228 to 231 (the render, check and publish method). Do not spawn sub-agents. Make no design, narration or scene-code edits, no new speech and no commits. One render at a time.

**Background.** The owner approved the Maths pilot (d01) on 7 Nov. Claude builds each redesigned lesson on the studio kit and grades its 16-frame sheet A before listing it here. Sheets and notes are in `docs/production/claude-pm/builds/math-a12-dNN-sheet.jpg` and `-notes.md`. Claude appends lessons to this list as each one passes; run them in list order.

**Ready to render:**
1. `math-a12-d02`: the derivative of aˣ (savings coin jar). Graded A on 10 Nov.
2. `math-a12-d03`: the derivative of ln x (app users, "how long until?"). Graded A on 10 Nov.
3. `math-a12-d04`: changing the log base (guitar octaves and bels). Graded A on 10 Nov.

**First, d01.** If `math-a12-d01` v2 is still unlisted, make it public now. Add it at position 1 of the Year 12 Maths Advanced playlist, and use the full title, description and syllabus dotpoint quoted verbatim, as for the science videos. If no Maths playlist exists yet, create "HSC Maths Advanced Year 12" and record its id in `status.md`.

**Per lesson:**
1. **Pre-render.** Run the export-stage brief check, and the asset and font guard. The composition id is `Explainer-<key>`. Confirm free RAM and disk.
2. **Render v1** with `node scripts/render-explainer.mjs Explainer-<key> --confirm --revision=v1`, `RENDER_CONCURRENCY=2` (use 1 if free RAM is under about 1 GB). Export captions from the measured data.
3. **Check.**
   - Run the defect scan (broken images, blank frames, serif text).
   - Make a 16-frame sheet and compare it with Claude's; report any frame that falls below A.
   - Watch at normal speed, and report with timestamps anything that moves wrongly, lands off its cue, overlaps or clips. Also check every pronunciation of the letter a ("ay").
   - Check the items in the build notes' "check at playback speed" list.
4. **Publish.**
   - Upload to YouTube as public, in the Maths playlist at the design's playlist order.
   - Use the design's title and description, with the syllabus dotpoint(s) quoted verbatim.
   - Upload captions as SRT and do not burn them in.
   - Record the link in `status.md`.
   - Back up the master to Drive.
   - If a check finds a real defect (anything below A, or a wrong cue), hold that video, report it, and continue with the next one.

**Hand-in** to `status.md`, per lesson: the master path, duration, scan result, sheet comparison, playback notes with timestamps, and the link.
