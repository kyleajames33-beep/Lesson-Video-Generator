# Brief 200: quality fix wave 2b, re-render and replace bio-m6-b07 and bio-m6-b10

Read `00-standing-rules.md`. Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time. Run this after brief 198, so that brief 196's pre-render asset and font guard is in place.

**Background.** The owner asked for every published video below the Module 5 standard to be fixed and replaced (6 November). Claude rebuilt the scenes of these two C-graded videos on their existing narration and measured timing (see the git log for these lesson folders). Notes and contact sheets of the fixed builds are in `quality-fixes/bio-m6-{b07,b10}-notes.md` and `-sheet.jpg`.

**For each video:**
1. Render v2 with `node scripts/render-explainer.mjs Explainer-bio-m6-bNN --confirm --revision=v2`, `RENDER_CONCURRENCY=2`. Keep v1 unchanged. Export captions.
2. Run the same automated defect scan as brief 196 (broken-image icon, blank frames, serif text). Make a 16-frame contact sheet (`work/brief200/<id>-v2-sheet.jpg`) and confirm it matches Claude's fixed sheet. Report any frame that does not.
3. Play the scenes that changed at normal speed (a frame range is enough) and note anything that moves wrongly, appears late or overlaps. Report it; do not fix scene code.
4. YouTube (owner approved the fix-and-replace process on 6 November). Upload v2 with v1's title, description (dotpoints verbatim), captions, settings and AI disclosure, and publish it. Put v2 in v1's position in the Biology Module 6 playlist and unlist v1 (do not delete it). Read the playlist back and record the new links wherever the old ones are recorded.

**Hand-in:** to `status.md`, for each video: the v2 path, duration, the scan result, the playback notes and the new link with the playlist readback.
