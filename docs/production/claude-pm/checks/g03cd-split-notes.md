# G03c split into G03c (part 1) and G03d (part 2), 16 Oct

G03c take01 (Revision 2, the full practice set) was voiced and measured at about 13:58 (`../lessons/g03c/measured/lesson.json`, 25 158 frames at 30 fps). Following the owner's choice for G03 (`g03ab-split-notes.md`), the set is split into two videos of about 6 to 8 minutes. Designs: `../lessons/chem-m5-g03c.md` (part 1, questions 1 and 2) and `../lessons/chem-m5-g03d.md` (part 2, questions 3, 4a and 4b), both Revision 3, "split for length; ready to voice". Text and config only: no render, still, preview or speech. No em dash.

Reuse is matched by exact scene text against the take01 voice manifest (moved to `../lessons/g03c/take01-superseded/voice-manifest.json`, with `request-options.json`) and `../lessons/g03c/measured/lesson.json` (left in place for the registry). Checked by script after the build: every scene marked "reuse take" below has `voiceover.text` identical to both. Character counts are the built `voiceover.text` (bold removed). Measured durations include about 2 s of scene padding and any 10 s hold. New-scene estimates use the take01 hook rate (443 characters in 31 s of speech, about 14 characters per second) plus 2 s padding.

## G03c: part 1 (questions 1 and 2)

| # | id | source | chars | seconds |
|---|---|---|---|---|
| 1 | hook-traps | new (trimmed: two questions, part 1 traps; "four HSC-style questions" and "a K written for the other equation" no longer fit) | 438 | about 33 (est) |
| 2a | q1-question | reuse take (g03c take01 q1-question), 10 s hold | 347 | 42.2 |
| 2b | q1-expression | reuse take (g03c take01 q1-expression) | 482 | 45.7 |
| 2c | q1-solve | reuse take (g03c take01 q1-solve) | 332 | 47.6 |
| 2d | q1-mass | reuse take (g03c take01 q1-mass) | 395 | 36.4 |
| 3a | q2-question | reuse take (g03c take01 q2-question), 10 s hold | 319 | 43.9 |
| 3b | q2-initial | reuse take (g03c take01 q2-initial) | 430 | 44.3 |
| 3c | q2-change-and-k | reuse take (g03c take01 q2-change-and-k) | 416 | 53.3 |
| 3d | q2-mistake | reuse take (g03c take01 q2-mistake) | 235 | 18.7 |
| 4 | decision-board | new (part 1 traps; "Next: part two") | 403 | about 31 (est) |
| 5 | key-notes | reuse take (key-notes, standard line) | 75 | 25.3 |

Total 3872 characters (714 words); new to voice 841 characters in 2 scenes. Estimated runtime about 7.0 minutes (357.4 s measured plus about 64 s new), about 7.4 if the notes hold runs the designed 45 s.

## G03d: part 2 (questions 3, 4a and 4b)

| # | id | source | chars | seconds |
|---|---|---|---|---|
| 1 | hook-traps | new (names flipping K, tiny K with the 5 per cent check on two x, and a two-part question with a hidden perfect square; restates I for initial, C for change, E for equilibrium) | 532 | about 40 (est) |
| 2a | q3-question | reuse take (g03c take01 q3-question), 10 s hold | 321 | 38.1 |
| 2b | q3-flip-and-table | reuse take (g03c take01 q3-flip-and-table) | 631 | 56.3 |
| 2c | q3-drop-and-solve | reuse take (g03c take01 q3-drop-and-solve) | 462 | 47.9 |
| 2d | q3-check-and-moles | reuse take (g03c take01 q3-check-and-moles) | 446 | 43.5 |
| 3a | q4a-question | reuse take (g03c take01 q4a-question), 10 s hold | 306 | 44.7 |
| 3b | q4a-answer | reuse take (g03c take01 q4a-answer) | 255 | 44.5 |
| 4a | q4b-question | reuse take (g03c take01 q4b-question), 10 s hold | 196 | 30.0 |
| 4b | q4b-square | reuse take (g03c take01 q4b-square) | 489 | 43.9 |
| 4c | q4b-solve | reuse take (g03c take01 q4b-solve) | 447 | 53.2 |
| 5 | decision-board | new (part 2 traps; "Next: how temperature changes K") | 407 | about 31 (est) |
| 6 | key-notes | reuse take (key-notes, standard line) | 75 | 25.3 |

Total 4567 characters (930 words); new to voice 939 characters in 2 scenes. Estimated runtime about 8.3 minutes (427.5 s measured plus about 71 s new), about 8.6 if the notes hold runs 45 s. At the top of the target because both hard question types (reversed tiny K, two-part perfect square) are here. No reserve cut is proposed: every reused scene is a reasoning stage, a check or a classic mistake. If the owner wants it shorter, the cheapest cut is the new hook's method sentence (about 9 s), not a recorded scene.

## Take01 scenes not used

| id | seconds | why |
|---|---|---|
| hook-traps (take01) | 33.0 | says "four HSC-style questions, and the last one has two parts" and names the part 2 trap; each part has its own hook |
| decision-board (take01) | 46.1 | covers all four questions; each part has a short board for its own traps |

## Notes on the split

- Question numbers stay 1 to 4 across the two parts, so the recorded "Question three" and "Question four" lines remain true. G03d's hook says "questions three and four".
- G03d scene 2b (reused) says "Question two ran backwards too". The visual adds a labelled part 1 thumbnail ("Q2 (part 1): K = 14.6, equation kept"), and the G03d entry knowledge names G03c.
- Owner rules: "I for initial, C for change, E for equilibrium" in G03c 2b (reused) and G03d scene 1 (new); E row first in G03c 3b and both boards' key notes; "multiply both sides by the bottom, then divide" in G03c 2c and G03d 2c, 4c; the approved quadratic line in G03d 4b; "Pause here to answer." with a 10 s countdown on all five questions; no mark-allocation talk.
- Handoffs: G03b to G03c (unchanged), G03c to G03d ("Next: part two, ..."), G03d to C9 ("Next: how temperature changes K").
- Reviews: G03c keeps `g03c-learning-review.md` and `g03c-claude-science-check.md` (split note appended). G03d has `g03d-learning-review.md` and `g03d-claude-science-check.md`, copied from the G03c reviews for questions 3 and 4, each with a split note and a `## Resolution` section. The four new scenes are designer self-reviewed only; the independent review of each exact voiced preview is pending.
- Build: `build_wave5_chem.py` keeps the take01 rows as `G03CD_ROWS` and builds `G03C_ROWS` and `G03D_ROWS` as subsets plus new rows for the new hooks and decision boards. Every narrationCue phrase appears in its scene text (checked by script).

## New characters to voice, summary

| lesson | total chars | new chars | new scenes | est. runtime |
|---|---|---|---|---|
| g03c | 3872 | 841 | 2 (hook-traps, decision-board) | about 7.0 min |
| g03d | 4567 | 939 | 2 (hook-traps, decision-board) | about 8.3 min |
| both | 8439 | 1780 | 4 | about 15.3 min |
