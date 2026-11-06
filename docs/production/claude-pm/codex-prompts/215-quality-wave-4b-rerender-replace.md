# Brief 215: quality fix wave 4b (B grades), re-render and replace six Chemistry Module 5 videos

**SHELVED (owner, 6 Nov evening): do not run until root re-queues it.** B-grade polish re-renders wait until render time is free; the scene fixes stay committed.

Read `00-standing-rules.md` and brief 198 (its method). Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time. Run after brief 212.

Claude fixed the scene code of these B-graded videos on their existing narration and measured timing. Notes and fixed contact sheets are in `quality-fixes/<id>-notes.md` and `-sheet.jpg`. The six videos, all in the Chemistry Module 5 playlist, are `chem-m5-c05`, `chem-m5-c07`, `chem-m5-c11`, `chem-m5-c13`, `chem-m5-p01` and `chem-m5-p03`.

For each, follow brief 198 steps 1 to 4:
1. render v2;
2. run the defect scan;
3. compare the 16-frame sheet with Claude's, then do a normal-speed playback check of the changed scenes;
4. replace v1 on YouTube (owner approved): unlist v1, never delete it, and read the playlist back. If access is still broken, add each checked master to `work/youtube-pending.json` instead.

**Settle the c05 link first.** The fix plan lists chem-m5-c05 at https://youtu.be/NJjEgjilgAE, but brief 199 found that link may belong to chem-m5-c10. Use your brief 199 resolution, and unlist only the video whose title matches c05.

**Expect durations to change.** Each video's quiet key-notes hold is now at least 40 s, so each v2 is about 15 s longer than v1. Narration is unchanged.

**Check at playback speed:**
- c05: the particles moving in the carbon vessel, and "K = ?" changing to the real values.
- c07: the coloured curves drawing over the grey previews.
- c11: the lattice spreading into the water.
- c13: the ion tokens crossing the swap diagram, and the bottles crossfading to the Cu(OH)2 tube.
- All of them: whether the faint step text on the decision boards reads as a preview rather than clutter.
- p01 and p03: the risk-table cells writing in after their rows, with the row glow following the narration.

**Hand-in:** to `status.md`, one line per video: the v2 path, the scan result, the playback notes and the new link. Then the playlist readback.
