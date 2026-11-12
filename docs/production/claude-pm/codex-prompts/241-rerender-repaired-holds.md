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
