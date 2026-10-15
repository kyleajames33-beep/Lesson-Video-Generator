# G03 split into G03a and G03b, and the C6b quadratic wording (15 Oct)

Owner decisions of 15 Oct: (A) soften the quadratic claim everywhere in learner copy; (B) split G03 (take01 voiced at 12:34) into two videos of about 6 to 7 minutes. Designs: `../lessons/chem-m5-g03a.md`, `../lessons/chem-m5-g03b.md`. The old `../lessons/chem-m5-g03.md` is marked superseded, not deleted. The unbuilt practice set formerly `chem-m5-g03b.md` is now `../lessons/chem-m5-g03c.md` (internal ids and titles updated). Text and config only: no render, still, preview or speech. No em dash.

Reuse is matched by exact scene text against `../lessons/g03/measured/lesson.json` (G03 take01) and `../lessons/c6b/take01-superseded/measured/lesson.json` (C6b take01), checked by script after the build. Character counts are the built `voiceover.text` (bold removed). Measured durations include about 2 s of scene padding and any 10 s hold. New-scene estimates use the take01 speaking rates: about 13 characters per second for prose, about 10 for number-heavy lines, plus 2 s padding and any 10 s hold.

## G03a: part 1, find K and compare Q (types 1, 2, 4)

| # | id | source | chars | seconds |
|---|---|---|---|---|
| 1 | hook-board | new | 352 | about 29 (est) |
| 2 | direct-k | reuse take (g03 direct-k) | 416 | 49.4 |
| 3 | ice-one-value | reuse take (g03 ice-one-value) | 521 | 55.9 |
| 4a | q-vs-k-question | reuse take (g03 q-vs-k-question), 10 s hold | 280 | 37.4 |
| 4b | q-vs-k-answer | reuse take (g03 q-vs-k-answer) | 290 | 30.7 |
| 5 | attempt | new, 10 s hold | 280 | about 40 (est) |
| 6 | feedback | new | 343 | about 33 (est) |
| 7 | decision-board | new | 287 | about 26 (est) |
| 8 | key-notes | reuse take (g03 key-notes) | 75 | 25.3 |

Total 2844 characters (529 words); new to voice 1262 characters in 4 scenes. Estimated runtime about 5.4 to 5.7 minutes (about 6.0 if the notes hold runs the designed 45 s). The new attempt uses the scene 2 concentrations at the scene 3 temperature, so it needs no new arithmetic.

## G03b: part 2, find concentrations and the amount added (types 3, 5)

| # | id | source | chars | seconds |
|---|---|---|---|---|
| 1 | hook-board | new | 267 | about 23 (est) |
| 2a | tiny-k-question | new (decision A wording), 10 s hold | 419 | about 46 (est; old take 42.8 at 390 chars) |
| 2b | tiny-k-setup | reuse take (g03 tiny-k-setup) | 280 | 31.6 |
| 2c | tiny-k-solve-and-test | reuse take (g03 tiny-k-solve-and-test) | 316 | 36.0 |
| 3a | huge-k-setup | reuse take (g03 huge-k-setup) | 271 | 26.5 |
| 3b | huge-k-solve | reuse take (g03 huge-k-solve) | 171 | 22.3 |
| 3c | huge-k-test-and-reactant-start | reuse take (g03 huge-k-test-and-reactant-start) | 323 | 28.7 |
| 4a | addition-setup | reuse take (g03 addition-setup) | 452 | 51.0 |
| 4b | addition-ice-table | reuse take (g03 addition-ice-table) | 506 | 47.6 |
| 4c | addition-k-equation | reuse take (g03 addition-k-equation), 10 s hold | 262 | 47.1 |
| 4d | addition-answer-and-slips | reuse take (g03 addition-answer-and-slips) | 364 | 50.3 |
| 5 | decision-board | new | 276 | about 25 (est) |
| 6 | key-notes | reuse take (g03 key-notes) | 75 | 25.3 |

Total 3982 characters (799 words); new to voice 962 characters in 3 scenes. Estimated runtime about 7.7 minutes. Over the 6 to 7 minute target because both hard types are here. Reserve cut (owner call): drop huge K (3a to 3c, about 78 s, no re-recording) for about 6.4 minutes.

## G03 take01 scenes not used

| id | seconds | why |
|---|---|---|
| hook-board | 36.3 | names all five types and "spend longest on the last one"; each half has its own hook |
| attempt, feedback (type five with a solid) | 46.0 + 52.7 | with them G03b would run about 9.3 minutes. Offered to G03c as an optional extra question (G03c open decisions). |
| decision-board | 37.1 | covers all five types; each half has a short board for its own types |

## C6b (owner decision A)

Only `no-quadratic` changes: 340 to 319 characters. The sentences "HSC Chemistry does not require it. You can use it if you like, but an HSC question should never need it." become "You can use it if you like, but HSC questions are written so you shouldn't need it." Every other scene is text-identical to C6b take01 (checked by script), so 319 characters are new to voice. Runtime about 11.1 minutes as measured, less about 2 s. Take01 files moved to `../lessons/c6b/take01-superseded/` (voice manifest, request options, measured). The coordinator restored a temporary copy of `c6b/measured/` (marked `.TEMP-COPY-delete-before-assembling`) because the shared registry imports it; it was left in place. Author note (e) fixed: the 800 K iodine value is Kp, not Kc (Kc about 4.6 x 10^-7).

## Quadratic wording, all files

Learner copy now says "You can use the quadratic formula if you like, but HSC questions are written so you shouldn't need it" (or "should not need it" on cards). Changed: C6b scene 10 narration and card, key note 4, title, decisions, teaching checks, author note (a), the build meta (title, lessonIntent, stopsAfter, conversationalApproach) and the no-quadratic row; G03 scene 4a (record only, superseded), decisions, cause chain, entry knowledge, author note (a), key note 4; G03b scene 2a and key notes; G03c scene 17 caption, decision-board footer, key note 5 and entry knowledge. Revision-history lines that quote the old wording are left as history.

## New characters to voice, summary

| lesson | total chars | new chars | new scenes |
|---|---|---|---|
| c6b | 6594 | 319 | 1 |
| g03a | 2844 | 1262 | 4 |
| g03b | 3982 | 962 | 3 |
| all | 13420 | 2543 | 8 |
