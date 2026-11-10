# Brief 239: render and publish the first Maths videos (d02 onward)

Read `00-standing-rules.md`, `maths-visual-standard.md` (its build gate), and briefs 225 and 228 to 231 (the render, check and publish method). Do not spawn sub-agents. Make no design, narration or scene-code edits, no new speech and no commits. One render at a time.

**Background.** The owner approved the Maths pilot (d01) on 7 Nov. Claude builds each redesigned lesson on the studio kit and grades its 16-frame sheet A before listing it here. Sheets and notes are in `docs/production/claude-pm/builds/math-a12-dNN-sheet.jpg` and `-notes.md`. Claude appends lessons to this list as each one passes; run them in list order.

**Ready to render:**
1. `math-a12-d02`: the derivative of aˣ (savings coin jar). Graded A on 10 Nov.
2. `math-a12-d03`: the derivative of ln x (app users, "how long until?"). Graded A on 10 Nov.
3. `math-a12-d04`: changing the log base (guitar octaves and bels). Graded A on 10 Nov.
4. `math-a12-d05`: the derivatives of sin and cos (Ferris wheel). Graded A on 10 Nov.
5. `math-a12-d06`: the chain rule (bike crank). Graded A on 10 Nov.
6. `math-a12-d07`: the product rule (timber deck). Graded A on 10 Nov.
7. `math-a12-d08`: the quotient rule and its domain (road trip). Graded A on 10 Nov.
8. `math-a12-d09`: derivative signs, stationary and turning points (hike). Graded A on 10 Nov.
9. `math-a12-d10`: global maximum and minimum on a closed interval (roller coaster). Graded A on 11 Nov.
10. `math-a12-d11`: the derivative of tan x (lighthouse beam). Graded A on 11 Nov.
11. `math-a12-d12`: reciprocal trig derivatives (sun, tower and shadow). Graded A on 11 Nov.
12. `math-a12-d13`: the remaining composites (drone camera). Graded A on 11 Nov.
13. `math-a12-d14`: tangent and normal lines (headlights on a curving road). Graded A on 11 Nov.
14. `math-a12-d15`: differentiability at a join (skate tracks). Graded A on 11 Nov.
15. `math-a12-d16`: concavity and inflection (vase filling). Graded A on 11 Nov.
16. `math-a12-d17`: sketching from f, f′ and f″ (video views). Graded A on 11 Nov.
17. `math-a12-d18`: optimisation with a constraint (sheep pen). Graded A on 11 Nov. **Before rendering, re-voice scene 3 only** (Google voice, as in brief 235): its design sentence was corrected on 11 Nov to "near twenty it closes into a narrow strip sticking out from the wall". Rewrite the measured `lesson.json` for that scene. The build reads cue phrases from that file, so it retimes itself. Then render.
18. `math-a12-d19`: exponential growth and decay, dQ/dt = kQ (car depreciation). Graded A on 11 Nov.
19. `math-a12-i02`: power primitives and the reverse chain rule (sourdough starter). Graded A on 11 Nov. Its playlist position follows i01, which is not built yet; publish it now and Claude will slot i01 before it.
20. `math-a12-i03`: exponential primitives (phone charging). Graded A on 11 Nov.
21. `math-a12-i04`: the reciprocal primitive, ln|x| (fundraiser). Graded A on 11 Nov.
22. `math-a12-i05`: trig primitives (solar panels). Graded A on 11 Nov.
23. `math-a12-i06`: rectangles and trapezia estimating accumulated change (rain gauge). Graded A on 11 Nov.

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
