# Brief 258: remove the run-on tails that brief 257's re-scan found

Read `00-standing-rules.md`, brief 236 and brief 257. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Audio work runs alone (no Remotion work at the same time; root holds `work/brief245/root/stills.lock` while rendering, so wait for it to be free). Root reviewed the eight re-scan failures on 21 November 2026.

## Root's decision on the eight scenes

Root read the recognised words. Seven scenes contain real unscripted speech after the script ends. One is a false positive.

| Lesson folder | Scene | What the voice added after the script | Published? |
| --- | --- | --- | --- |
| c-y11-m1-v08 | feedback-1 | 30 words of nonsense ("getting it right then you can get up to the body to go ...") | YouTube public |
| c-y11-m1-v09 | sense-check | "and we'll see you at him" | YouTube public |
| c-y11-m1-v16 | spectroscope | "right way so you can see" | not yet (held) |
| math-a12-d02 | scene-07 | "Now, I'm going to go to dead, right. Well, thank you. I'm going to ask a question." | YouTube and Bunny |
| math-a12-d02 | scene-08 | "I'll see you in a little bit." | YouTube and Bunny |
| math-a12-d04 | scene-01 | the closing question repeated ("So how does the base set the slope, and by exactly how much?") | YouTube and Bunny (v3) |
| math-a12-s04 | scene-16 | "We'll see you in the next video." | YouTube and Bunny |
| math-a12-f07 | scene-08 | **none.** The recogniser split numbers ("2700ths", "0 .2727"). False positive: record it in `status.md` as root-reviewed; do not change the gate or the take. |

## Step 1: trim, do not re-voice (no speech requests)

For each of the seven scenes, cut the take after the end of the last scripted word, using the recognition word times:

1. Find the last recognised word that matches the script's final word, and the first inserted word after it.
2. If there is a silence of at least 0.15 s between them, cut at the scripted word's end plus 0.35 s (never past the start of the first inserted word), with a 40 ms fade-out. Keep the original sample rate and format.
3. Re-run the brief 257 gate on the trimmed take. It must pass with 0 trailing inserted words. Listen-free checks only; human listening stays pending.
4. If any scene has no clean gap (an inserted word joined to the final scripted word, or a cut word), stop for that scene and report it. Do not request speech: root decides whether to spend its one retry.

Rename the old takes with `.before-brief258` (do not delete them) and note the SHA-256 of old and new takes in `status.md`.

## Step 2: rebuild the measured outputs

For each affected lesson (chem-y11-m1-v08, v09, v16; math-a12-d02, d04, s04), rebuild the measured lesson, captions and validation exactly as brief 236 (Chemistry) and the Maths hand-in path did originally, from the trimmed audio. Only the trimmed scenes' durations and their trailing word times may change. Every scripted word time, bold cue time, hold and notes duration elsewhere must be identical; prove it with a diff in the hand-in. Back up the old measured files with `.before-brief258`.

## Hand-in to `status.md`

Per scene: old and new duration, the cut time, the gate result and both SHA-256. Per lesson: the new measured lesson SHA-256 and the word-time diff result. List any scene you stopped on. Root then renders new revisions (v08 v2, v09 v2, v16 v2, d02 v2, d04 v4, s04 v2), reviews them, and the release chat replaces the public videos on YouTube and Bunny.

Tonight's 19:00 voicing (wave 2, v17 onward) runs as normal and takes priority; do this before 18:45 or after the voicing run ends.
