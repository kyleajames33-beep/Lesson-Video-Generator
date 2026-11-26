# Brief 280: re-check Maths Standard d13 and Physics m6-v17a after root's fixes

Read briefs 275 and 277. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key.

Root fixed both should-fix items on 26 November. Neither fix changes the narration.

- **`lessons/math-s11-d13.md`, Revision 3b.** Scene 4 now labels Bus A's deviation arms in dot-plot order: 1, 0, 0, 0, 0, 1.
- **`lessons/phys-y12-m6-v17a.md`, Revision 2a.** Scene 11's ammeter readings now carry an "illustrative values" screen tag.

## Task

1. **d13.** Re-run the brief 275 check. If it finds 0 blockers and 0 should-fix items, prepare d13 and put it back in its route position.
2. **m6-v17a.** Re-run the brief 277 error check. If it finds 0 blockers and 0 should-fix items:
   - paint the magnet cradle plate from the design's asset brief, with its anchors and the pan-fit inspection;
   - prepare the lesson as brief 259 did, including the designed holds and the hook hold straight after the prediction prompt (brief 278);
   - queue it in the Physics nightly order between m6-v17 and m6-v18.
3. **Find out why the 25 November voicing produced nothing.** No new speech has appeared in `public/audio` since 07:11 on 25 November. That night's planned P5 voicing (62 requests, starting 19:00 Sydney time) left no measured lessons and no record in `status.md`. Check whether:
   - the dispatcher ran;
   - it failed, and on what error;
   - it hit the quota or billing;
   - the machine was asleep.
   Fix anything that is yours to fix. Confirm tonight's run will start, and say which lessons it will voice. Report anything only the owner can fix, such as Google billing or quota, or the PC sleeping, as an owner step.

## Hand-in to `status.md`

For each design, give the check result, its SHA-256, whether it was prepared and its planned night. Also list the plates. Human listening stays pending.
