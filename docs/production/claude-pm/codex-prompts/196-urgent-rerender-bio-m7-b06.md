# Brief 196 (urgent): re-render bio-m7-b06, which went public with broken images and fallback fonts

Read `00-standing-rules.md`. Do not spawn sub-agents. No design or narration edits, no new speech, no commits. Render one job at a time.

**Problem (Claude, 6 November, from the rendered-video audit).** `Explainer-bio-m7-b06-v1.mp4` (published at https://youtu.be/iNiVBNVSRvs) shows broken-image icons at about 3/16, 6/16 and 7/16 of its length (frame 7 is a full-screen broken image), plus small broken icons inside the timeline cards. Its text renders in a Times-like serif fallback instead of the house fonts. The contact sheet is `work/quality-audit/sheets/bio-m7-b06.jpg`. At least one plate path and the font load both failed during the render, and nothing caught it.

**Fix:**
1. Find every missing asset: compare the lesson's asset references with the slim public folder that the render used, and record the result in `work/brief196/missing.json`. Restore or correct the paths without changing the design. Explain why the fonts fell back.
2. Re-render as v2 with `node scripts/render-explainer.mjs Explainer-bio-m7-b06 --confirm --revision=v2`, `RENDER_CONCURRENCY=2`, on the existing measured lesson and audio, and export captions. Keep v1 unchanged.
3. Make a 16-frame contact sheet of v2 (`work/brief196/v2-sheet.jpg`). Confirm there are no broken images, no blank frames and no serif text anywhere. Also scan at least 120 evenly spaced frames automatically for the broken-image icon or blank frames.
4. Also check `Explainer-bio-m5-b06b-v1.mp4` (https://youtu.be/o0hwEiJjqrg), which seems to end on a black frame: say whether that is an intended fade or a defect. Do not re-render it.
5. Add a pre-render guard to `scripts/render-explainer.mjs`: fail before rendering if any referenced asset is missing from the slim public folder or a required font fails to load. Report the change.

Do not upload. Replacing a public video is the owner's decision: report the v2 path and wait.

**Hand-in:** to `status.md`: the missing assets and their cause, the v2 path, duration and sheet, the b06b verdict and the guard change.
