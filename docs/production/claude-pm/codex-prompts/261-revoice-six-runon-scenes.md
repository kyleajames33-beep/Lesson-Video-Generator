# Brief 261: re-voice the six run-on scenes that brief 258 could not trim

Read `00-standing-rules.md`, briefs 236, 257 and 258. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Audio work runs alone: wait for `work/brief245/root/stills.lock` and `out/explainer/.stills-lock` to be free, and hold the shared lock as brief 258 did.

## Root's decision (21 November 2026)

Brief 258 stopped on six scenes because the inserted words run straight on from the final scripted word, with no gap to cut at. Root decided to re-voice them. Each costs about one Google request, and four of the six are in public videos.

| Lesson folder | Scene |
| --- | --- |
| c-y11-m1-v08 | feedback-1 |
| c-y11-m1-v09 | sense-check |
| c-y11-m1-v16 | spectroscope |
| math-a12-d02 | scene-07 |
| math-a12-d02 | scene-08 |
| math-a12-s04 | scene-16 |

## Task

1. **When:** first thing in the 22 November quota window, before the nightly dispatcher's first lesson (six requests, at most twelve with retries). If the dispatcher cannot be ordered that way, run this at 19:00 before it and let it continue afterwards.
2. **Voice:** for each scene, one new take of the exact recorded scene text with the lesson's original voice, model and settings (the Google voice the take was made with). Request each scene on its own, not in a batch. Run the brief 257 gate on the new take. If it fails, make one retry. If the retry also fails, stop for that scene, keep the old take and report it.
3. **Keep the old takes:** rename them and their generation and alignment files with `.before-brief261`; record both SHA-256 values.
4. **Rebuild:** for each lesson with an accepted take, rebuild the measured lesson, captions and validation exactly as brief 258 did for d04. Only the re-voiced scenes may change. Prove with a word-time diff that every other scene object, bold cue time, hold and notes duration is identical. Back up the old measured directory with `.before-brief261`.

## Hand-in to `status.md`

Per scene: old and new duration, the gate result (characters per second, inserted words, trailing inserted words), requests used and both SHA-256. Per lesson: the new measured SHA-256 and the diff result. Root then renders v08 v2, v09 v2, v16 v2, d02 v2 and s04 v2, and the release chat replaces the public videos on YouTube and Bunny. Human listening stays pending.
