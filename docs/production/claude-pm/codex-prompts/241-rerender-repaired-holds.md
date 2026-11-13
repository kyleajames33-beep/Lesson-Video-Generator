# Brief 241: re-render the repaired held videos (v2)

Read `00-standing-rules.md`, brief 239 (the render, check and publish method) and the "Release standard" section of `checks/root-signoff-maths-builds.md`. Do not spawn sub-agents. Make no source, narration or design edits, no new speech and no commits. One render at a time, never alongside voicing.

**Background (root, 12 Nov).** Your normal-speed playback found real defects in videos that root had graded A: 13 Maths videos and Chemistry M8 c05, c08, p04 and g02. They were short collisions, clipped labels and stale or contradictory values that fell between the 16-frame sheet's samples. Root is repairing each one in scene code. Root also now sweeps every video at 1 frame per second before grading A. Root adds a lesson to the list below only after:
- its repair is graded A on a fresh sheet;
- its 1 fps sweep is clean.

Each lesson's build notes (`builds/<id>-notes.md`) have a "Repair 12 Nov (Codex hold)" section naming the held moment and its fix. **Check that exact moment first** at native speed.

**Working this list overnight.** Re-read this file after every job. If no unprocessed entry remains, return to your other queued work and check again after it. Root appends entries through the night.

**Per lesson:**
1. Render **v2**: `--revision=v2`.
2. Run the full brief 239 check:
   - the defect scan;
   - sheet comparison with root's new sheet;
   - the held moment at native speed;
   - sampled native playback of the build notes' items;
   - alignment and captions.
3. If it passes:
   - Keep the v1 private upload private (don't delete it).
   - Upload v2 as public into its playlist position, with the same metadata and SRT. Add it to the focus playlist as well.
   - Record the result in `status.md`.
4. If a real defect remains, hold it again with the timestamp and evidence, as before, and continue.

**Ready to re-render (root appends below):**
1. `chem-m8-c05` (brief 223 method): opening table now present from frame 0; extra fixes at about 186 to 200 s, 233 to 236 s and 382 s. Root A, 12 Nov. Sheet `builds/chem-m8-c05-sheet-repair-2026-11-12.jpg`; recheck windows in `builds/chem-m8-c05-notes.md`. The checker's small-text flag is the shrunken question card in feedback, accepted by root as before.
2. `chem-m8-c08` (brief 226 method): two-groups skeleton from scene start (210 s); fixes at about 111 to 114 s, 207 to 210 s and 269 to 275 s. Root A, 12 Nov. Same note on the shrunken feedback card.
3. `chem-m8-p04` (brief 228 method): burettes raised clear of "5.00 mL + 5.00 mL"; extend-line box and risk line (about 278 to 296 s) moved inside the frame. Root A, 12 Nov. Small 0.02 ticks on the mini graphs accepted.
4. `chem-m8-g02` (brief 231 method): the slope label "3.00 mg L⁻¹" now sits above the leg, clear of "standards' range"; fixes at about 100 to 123 s, 229 to 237 s and 352 to 358 s. Root A, 12 Nov. The key-notes opening is the shared catalogue board, accepted by root (231-CHEM-G02-NOTES-OPENING is not a hold).
5. `math-a12-d07`: the panel is retitled "area added in that half day" after the clock rewinds (about 65 s); the sweep fixes are in the notes. Root A, 12 Nov.
6. `math-a12-d12`: the sunbeam label is on two lines inside the diagram (about 372 s). Root A, 12 Nov.
7. `math-a12-d15`: the feedback 2 label is on two lines inside the graph (about 455 s); the gradient table is narrower. Root A, 12 Nov.
8. `math-a12-d16`: the "every nearby point is higher" tag is clear of the inflection label (about 254 s). Root A, 12 Nov.
9. `math-a12-d17`: "x = 0: no point" is below the axis, clear of the local min (about 227 s). Root A, 12 Nov.
10. `math-a12-i02`: the kit fix means the scene 3 readout now shows the plotted f′ (3.1 vs 1.5 at the held frame; 8 vs 4 at x = 0.5). Recheck sheet frame 4 and scene 3. Root A, 12 Nov.
11. `math-a12-i03`: the tag leaves before the answer box arrives (about 81 s); the scene 3 heading is reworded because the hand font has no superscript. Root A, 12 Nov.
12. `math-a12-i10`: the hand tags are below THE LIFT card (about 22 s). Root A, 12 Nov.
13. `math-a12-i12`: the graph height is now 180, so the asset guard passes. This is its first render (v1). Root A, 12 Nov.
d03, d04, d14, i08 and i14 follow after one more small-collision pass.
14. `math-a12-d03`: the phone text wraps inside the screen (about 71 s); the mistake cards in scenes 7 and 13 now end before the graph's "x" label. Root A, 12 Nov.
15. `math-a12-d04`: the full rise label is left of the triangle's leg (about 152 s); the scene 9 graph sits below the pitch card. Root A, 12 Nov.
16. `math-a12-d14`: the Plan card sits below the GIVENS card, and the domain line is clear (about 273 s); the 1.50 tick is dropped beside the x = π/2 line. Root A, 12 Nov.
17. `math-a12-i08`: the definition box is clear of "after noon: more cars leave" (about 29 s); the scene 3 marker label is below the axis. Root A, 12 Nov.
18. `math-a12-i14`: the replay stops at t = 2.9 (v −2.97, a −0.6), so every label is true (about 129 s); "(cm)" is inside the margin. Root A, 12 Nov.
All 13 held Maths videos and i12 are now on this list.

**New queued work (root, 13 Nov):**
- Brief 239 has four new entries, 29 to 32: i01, i07, i11 and i13, each graded A with a clean 1 fps sweep. Render them after this list, in brief 239's method.
- Brief 242 (Year 11 upgrade error check and plates) is light work with no speech. Run it in gaps when no render or voicing job can run, for example while the Google quota is spent.
- Brief 239 also has entries 33 to 35 (f01, f02, f03), graded A on 13 Nov.
- Brief 243 (Year 11 Maths crosswalk, outline and packs) is light research with no speech. Run it after brief 242, in the same kind of gaps.
- Brief 244 (Year 12 Physics plate QA and two plates) is light work. Run it after 242 and before 243.

**Pause (root, 13 Nov afternoon).** Do not render brief 239 entries 31 to 35 (i11, i13, f01, f02, f03) yet. Your holds on d15, i10, i12, d03, d04, d14, i14 and i01 were real. Most were a curve, axis or leader line striking through a label, which root's sweep probe could not see. Root is adding a line-through-text check to the sweep, then repairing all eight and re-checking entries 31 to 35. Root will append each one here when it is ready. Entries 29 and 30 (i01, i07) are already done or held. Keep voicing brief 240 and working briefs 242, 244 and 243 meanwhile.

**Ready to re-render as v3 (root, 13 Nov evening).** Root's new line-through-text check (`out/explainer/.repair-sweep/ink-check.sh`) caught every one of your seven collision holds on the old source. These four repairs then swept clean with it: every remaining hit is a deliberate red strike-out, a ring round an answer, a 4 to 7 px touch or a one-frame crossfade. Render each as **v3** (`--revision=v3`), check the held moment first, and then run the full brief 239 check. Keep v1 and v2 private.
19. `math-a12-d03` v3: the scene 13 formula label sits off the top axis (about 432 s).
20. `math-a12-d04` v3: the scene 8 "y = log base ½ x" label sits above its curve (about 306 s).
21. `math-a12-d14` v3: "y = √2" sits right of the normal, clear of the axis (about 406 s).
22. `math-a12-i10` v3: "net 0, travelled 4" sits inside the memory card, above the shaft (about 451 s).
The other four holds (d15, i12, i01, i14) and the paused entries 31 to 35 follow when their checks finish.

**Font change (root, 13 Nov night, commit 2691ebe6).** Every new render now draws subscripts, superscripts and Greek letters in the lesson's own fonts:
- New files: `public/fonts/inter-tight-subsup-wght-normal.woff2`, `caveat-subsup-wght-normal.woff2`, and the already-present `inter-tight-greek-wght-normal.woff2`.
- These are registered in `src/explainer/kit.tsx`, the slim-public `FONTS` list and the bundle font check.
- Before this, aₙ, Sₙ, S₁₀, 10⁻³, π and θ fell back to a system font, which was a serif n at heavy weights.

This is an intended source change for every render from now on, including the v3 re-renders. In sheet comparisons, expect small differences in subscript and superscript shapes and in π. Your font scan should now find no serif fallback in those characters; report any it does find.

**Ready to render (root, 14 Nov small hours).** These are swept clean with the line-through-text check and graded A on fresh sheets (`builds/<id>-sheet-repair2-2026-11-13.jpg`). Each notes file has a "Repair 13 Nov (Codex hold 2)" or "Probe check 13 Nov" section listing the held moment, the fix and the accepted remaining hits. Check the held moment first, then run the full brief 239 check. All of these use the new font files.
23. `math-a12-d15` **v3**: the right panel's formula sits clear of the zoom leader (about 35 s).
24. `math-a12-i12` **v2** (its first good master): the soil tag sits below the axis (about 161 s).
25. `math-a12-i14` **v2**: the "same signs: speeding up" chip fades before the jump to t = 1, and the slowing run ends at t = 1.9, so every sign chip matches the live v and a (about 136 s). Also do the scene 2 re-voice from brief 239 entry 28 if it is not done yet.
26. `math-a12-i11` v1 (brief 239 entry 31, unpaused).
27. `math-a12-i13` v1 (brief 239 entry 32, unpaused).
28. `math-a12-f01` v1 (brief 239 entry 33, unpaused).
29. `math-a12-f02` v1 (brief 239 entry 34, unpaused).

Still waiting: `math-a12-i01` (one small label touch being fixed) and `math-a12-f03` (its final frame now joins f04, which is still being graded).
30. `math-a12-f03` v1 (brief 239 entry 35, unpaused). Its final frame now draws f04's real opening, so check that the join matches f04 frame 0.
31. `math-a12-f04` v1: arithmetic sequences as linear models (planting strip, visitors, a machine's output, a tree). Graded A on 13 Nov. Its scene 8 readout heights equal 120 + 45 × the displayed t.
32. `math-a12-f05` v1: geometric sequences (folded paper, a chessboard). Graded A on 14 Nov.
Every number on these sheets was rechecked by root. Each was swept with the line-through-text check; only deliberate strike-outs and answer rings remain.
