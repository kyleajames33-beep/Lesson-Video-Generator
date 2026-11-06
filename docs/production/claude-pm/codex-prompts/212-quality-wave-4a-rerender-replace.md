# Brief 212: quality fix wave 4a (B grades), re-render and replace three Biology Module 7 practicals and three Biology Module 8 videos

**SHELVED (owner, 6 Nov evening): do not run until root re-queues it.** B-grade polish re-renders wait until render time is free; the scene fixes stay committed.

Read `00-standing-rules.md` and brief 198 (its method). Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time. Run after brief 211.

Claude fixed the scene code of these B-graded videos on their existing narration and measured timing (commits ee596579 and 821dd335). Notes and fixed contact sheets are in `quality-fixes/<id>-notes.md` and `-sheet.jpg`. The six videos are:
- `bio-m7-p01`, `bio-m7-p02` and `bio-m7-p05`: Biology Module 7 playlist.
- `bio-m8-b02`, `bio-m8-b03` and `bio-m8-b04`: Biology Module 8 playlist.

For each, follow brief 198 steps 1 to 4:
1. render v2;
2. run the defect scan;
3. compare the 16-frame sheet with Claude's, then do a normal-speed playback check of the changed scenes;
4. replace v1 on YouTube (owner approved): unlist v1, never delete it, and read the playlist back.

**Expect a duration change for b03 and b04.** Their quiet key-notes hold is now a 40 s minimum instead of 60 s, so each v2 is about 20 s shorter than v1. This is intended; narration is unchanged.

**Check at playback speed:**
- b02: the skin plate settling into its column, and the trend animals shrinking into the left column;
- b03: the term list and the plates moving together;
- b04: the collecting-duct plate drawing fully in scene 14. One early still showed it part-drawn; treat it as a defect if it repeats.

**Hand-in:** to `status.md`, one line per video: the v2 path, the scan result, the playback notes and the new link. Then the readback of both playlists.
