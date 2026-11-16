# Year 11 Maths Advanced e01 to e08: learning review resolution

17 November 2026. This is the design author's resolution of `m-a11-e01-e08-learning-review-summary.md` and the per-design files `m-a11-e0N-learning-review.md`. It applies root's rulings for this round: every spoken "ln" is "the natural log of", introduced once in e03; e07 applies ruling 4; e04's irrationality reason and attempt 1 picture are fixed as ruled; the review evidence paths are corrected. All eight designs now carry "Revision 2 (17 Nov): learning review resolved" at the top, and their Status lines say "learning review resolved". Each Revision 2 section has the detail. This round changed documents only: no speech, build, render or commit. Changed values were rechecked with SymPy 1.14 (scratchpad `e-rev2/verify.py`), and narration was recounted by script (`e-rev2/count.py`). Codex's maths check remains the authority.

**Totals:** 26 findings (0 blockers, 16 should fix, 10 optional). Should fix: all 16 applied. 10 use the reviewer's wording, 4 follow root's rulings (e03 #1, e04 #1, e04 #2, e07 #1), and 2 are adapted (e05 #1, e06 #2). Optional: 9 applied, and 1 kept as written on the reviewer's advice (e07 #3). None declined.

## Should fix

- e01 #1, scene 4 ("a bigger base rises faster"): accepted, reviewer's narration. The new cue "left" rings the points at x = −1 on 2ˣ and 5ˣ (½, ⅕), and a hand tag reads "all pivot through (0, 1)".
- e01 #2, scene 5 (base and k change in one beat): accepted, reviewer's narration and visual. y = 2 × 3ˣ is held as a ghost, then k sweeps to −2, so the ghost and its flip are both visible.
- e02 #1, scene 3 ("Like every exponential ... grows to the right"): accepted, reviewer's sentence ("Like two to the x and three to the x ... because its base is bigger than one").
- e02 #2, scene 4 (the stretch skips the slide): accepted, reviewer's narration. The visual now runs the slide (same slope) and the stretch (doubled slope) on their own words. Open decision 1 is closed: keep the stretch.
- e02 #3, scene 5 (why k is the gradient at (0, 1)): accepted, reviewer's narration and the grey row "x = 0: k × a⁰ = k".
- e03 #1, scene 5 and strand-wide (spoken "ln"): accepted as root ruled, not with the reviewer's "ell en". e03 says "We write this l n, the natural log." once. Every other narration says "the natural log of": e03 scenes 5 and 6 and feedback 1, e04 scene 4, e06 scenes 5 and 6 and feedback 2, e07 scenes 4, 5 and 7 and feedback 1, and e08 scene 4. e02 and e05 already complied. The screen keeps "ln".
- e03 #2, scene 3 (a fractional log is asked in A1 (c) but never shown): accepted, reviewer's sentence. The row "log₄ 2 = ½" (4^½ = √4 = 2) has the chip "w01: a^½ = √a" and the new cue "half".
- e03 #3, scene 5 (the x ≈ 1.61 callback): accepted, reviewer's discovery wording. e02 also gains the readout (e02 #4).
- e04 #1, scene 6 and feedback 2 (the irrationality reason fails for fraction powers): accepted as root ruled. If 2^(p/q) = 100, then 2ᵖ = 100^q, which is impossible because only the right side has a factor of 5. Raising to the power q is said aloud. The new cue "impossible" strikes through 2ᵖ = 100^q on the reason card. Feedback 2 applies the same reason to 40 ("2ᵖ ≠ 40^q").
- e04 #2, attempt 1 picture (answer-bearing): accepted as root ruled. The countdown shows y = 3ˣ with no level line, no marked height and no y scale. Feedback 1 draws the level line at 20.
- e05 #1, scene 1 ("underneath it is six"): accepted, adapted. The reviewer's sentence is used ("the cursor lines it up with six on the fixed scale"). The sentence before it also changes ("lines up with two on the fixed scale"), so neither sentence assumes which strip is drawn on top. The joined frame is unchanged.
- e05 #2, scene 3 (n means two things on one screen): accepted, reviewer's narration. "n = a^q" fades from the linking strip, and a magenta chip "n: any power (syllabus letter)" is added. Open decision 1 is closed.
- e06 #1, scene 5 (why taking logs of both sides is allowed): accepted, reviewer's sentence and the chip "both sides > 0". Scene 6 also says "Both sides are positive".
- e06 #2, scenes 5, 6 and feedback 2 (brackets lost by ear): accepted, adapted. The reviewer's "the bracket" wording is kept, with each ln spoken as "the natural log of". Feedback 2 then ran to about 32.6 s, so it was trimmed to about 27.4 s ("Take natural logs"; "Expand, collect x, and"; the slip line is now "Multiplying only the x, not the whole bracket, is the slip."). The crossed slip on screen is unchanged.
- e07 #1, root ruling 4 (early rounding is still learner copy): accepted. Scene 4's warning and the 1.7707 against 1.7712 comparison move to author note (g), and the cue moves to "thirds". Key note 5 now reads "Check: raise a to your answer; you should get x back." The hand-tag list, mistake list, teaching checks, numbers tables and boundary are cleaned, and open decision 2 is closed.
- e08 #1, scene 1 (old axis labels on the swapped points): accepted, reviewer's visual. On "Swap every pair" the axes relabel to plain x and y, with grey sub-labels "value (hundreds of $)" and "years", and the teal curve is labelled "y = 2ˣ".

## Optional

- e01 #3, scene 4 (zero as a base): applied. Zero and negative bases now have separate reasons, including "no real value at powers like a half".
- e01 #4, "Start at k": applied. The aid is now "Cross at k" on the card, in the narration, in the tags and in feedback 1.
- e02 #4, scene 6 (show x at height 5): applied. A blue readout "x ≈ 1.61" sits at the rider's height-5 stop.
- e04 #3, scene 6 ("The same goes for e to the one point seven ..."): applied, reviewer's wording ("irrational too, though proving that is beyond this course").
- e05 #3, scene 1 (a length of 0.301 of what?): applied ("measuring the whole scale, from one to ten, as one unit"), with a "1 unit" bracket.
- e06 #3, scene 1 ("Last time's method"): applied, "The method from two videos ago".
- e07 #2, scene 6 (a skipped inequality step): applied, reviewer's wording. The row splits into "10ᵈ ≤ 2³²" and "d ≤ log₁₀ 2³²".
- e07 #3, A2 (rule picture): kept as written. The reviewer judged it fine: it names the method, not the answer.
- e08 #2, scene 4 (a hard-to-hear coordinate pair): applied ("about two point seven one eight across, and one up"). The cue moves to "up".
- e08 #3, scene 5 (units for the plain card): applied. The tag reads "value V (hundreds of $) = (½)ˣ".

## Housekeeping

- Review evidence paths: all eight `learning_review` paths now read `checks/m-a11-e0N-learning-review.md`. The `science_check` paths still read `checks/m-a11e0N-maths-check.md`, as they do in c01 to c18. They were outside this brief, so Codex's brief 248 naming should be matched when those files land.
- Open decisions answered by the review are closed in each design: e02 (1), e03 (1), e04 (2), e05 (1, 2), e06 (1), e07 (1, 2) and e08 (3).
- Small corrections found while editing: the memory aid checks in e04 and e07 named the wrong scene (now scene 7), and the reserve-trim notes in e01 and e04 quoted sentences that changed (now updated).
- No em dash (U+2014) and no spoken "ln" remain in any narration (scripted check). Every bold cue is quoted in its scene's Visual in spoken order (scripted check).

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Speech before notes | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| e01 | 5,742 | 5,957 | about 535 s | about 442 s | 25 s, 23 s |
| e02 | 5,604 | 5,765 | about 521 s | about 428 s | 25 s, 25 s |
| e03 | 5,573 | 5,834 | about 526 s | about 433 s | 27 s, 22 s |
| e04 | 5,519 | 5,839 | about 526 s | about 433 s | 26 s, 28 s |
| e05 | 5,579 | 5,765 | about 521 s | about 428 s | 27 s, 23 s |
| e06 | 5,517 | 6,045 | about 542 s | about 449 s | 25 s, 27 s |
| e07 | 5,694 | 5,889 | about 530 s | about 437 s | 26 s, 24 s |
| e08 | 5,528 | 5,632 | about 511 s | about 418 s | 26 s, 27 s |

All eight are within 5,500 to 6,800 characters and under 570 s of speech. The longest single scenes are now e04 scene 6 (972 characters, about 73 s) and e06 scene 5 (964 characters, about 72 s), both with named reserve trims. These are speech-only estimates; measure them on the Year 11 voice.

## Joins

No opening or final frame changed, so no neighbouring design needed a frame-text edit. c18 → e01, each e0N → e0(N+1), and e08 → t01 (root ruling 3) hold as the review found them. Two changes sit next to joins without altering a frame. e05's first sentences no longer say "underneath", but e04's final slide-rule frame is unchanged. e08 relabels its axes on "Swap every pair", after it opens on e07's frame. e03's x ≈ 1.61 callback now matches a readout that e02 shows.

Nothing recorded; human listening pending.
