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
