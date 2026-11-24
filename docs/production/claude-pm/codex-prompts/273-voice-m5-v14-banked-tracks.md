# Brief 273: add Physics m5-v14 (banked tracks) to the end of wave P5

Read `00-standing-rules.md` and briefs 257, 259 and 261. Do not spawn sub-agents. Make no design edits and no commits. Never print or log a key.

## Root's decision (24 November 2026)

Brief 259 deferred `phys-y12-m5-v14` because banked tracks are missing from the 2025 syllabus. Students in Year 12 in 2026 are still on the 2017 syllabus, which does include banked tracks. The video belongs in the 2017 Module 5 playlist, so it is treated like the other 2017-only lessons (v10 and v15): it is voiced last in P5.

## Task

1. **Prepare.** Prepare `lessons/phys-y12-m5-v14.md` (Revision 3; its last error check is `checks/p-y12-m5-v14-rev2-error-check.md`, which found 0 blockers) exactly as the other P5 lessons were prepared. If the design's hash has changed since that check, run the brief 237 error-only check first.
2. **Queue.** Put it after v15 in the P5 order. Use the same Physics voice and model.
3. **Voice.** Voice it within the 99-request daily cap and run the brief 257 gate. Write `lessons/p-y12-m5-v14/measured/lesson.json`, plus its captions and validation, as brief 261 did.

## Hand-in to `status.md`

Report:
- the check result and SHA-256;
- the request count;
- the gate result;
- the measured SHA-256.

Root then switches the v14 build from provisional to measured timing. Human listening stays pending.
