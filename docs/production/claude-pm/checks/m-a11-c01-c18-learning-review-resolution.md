# Year 11 Maths Advanced c01 to c18: learning review resolution

17 November 2026. Design author's resolution of `m-a11-c01-c18-learning-review-summary.md` and the per-design files `m-a11-cNN-learning-review.md`. It also carries in two root rulings from `root-rulings-maths-a11-c-e-packs.md` that the designs had missed. All 18 designs now carry "Revision 2 (17 Nov): learning review resolved" at the top, and their Status lines say "learning review resolved" (the brief 248 voicing gate). Each Revision 2 section has the detail. This round changed documents only: no speech, build, render or commit. Changed values were rechecked with SymPy 1.14 (scratchpad `c-rev2/verify.py`). Codex's maths check remains the authority.

**Totals:** 33 findings (0 blockers, 11 should fix, 22 optional). Should fix: all 11 applied, 2 of them adapted. Optional: 16 applied (2 adapted), 6 kept as written on the reviewer's advice or as named reserve trims, 0 declined. Both missing root rulings are applied.

## Should fix

- c02 #1, scene 3 (slow-motion strip not narrated): accepted, reviewer's sentence; new cue "motion" with a hand tag.
- c03 #1, scene 6 (tangent read points at c01's secant ends): accepted, reviewer's wording. The tangent is read at (6:30, 5) and (9:30, 192): 187 ÷ 3 ≈ 62. A hand tag "on the tangent, not the curve" was added.
- c05 #1, scene 4 (slide kink and vertical drop): accepted, reviewer's narration. The inset is now a chute that turns straight down for an instant (the y = −∛x shape), never a vertical segment. The rounded platform join is written into c04's plate brief. "No corner, no cliff" is kept (root ruling 3).
- c06 #1, scene 4 (−5(t + h)² expansion skipped): accepted, reviewer's sentence, board row and hand tag.
- c06 #2, scene 11 (h used for a height): accepted. The chip now reads "distance ≈ 3.57√x km, x = height in m". This changes the join: c07's opening frame now quotes this chip.
- c07 #1, scenes 1 and 7 (h used for a height): accepted, reviewer's wording, with x for the height throughout c07. Adapted in one place: the opening chip copies c06's new chip instead of the reviewer's shorter one, so that the join matches.
- c07 #2, attempt 2 ("expand first" not taught before the countdown): accepted, adapted. The reviewer's sentence is used in scene 5. The grey row shows x(x + 4) → x² + 4x instead of x²(x − 3), because x²(x − 3) is attempt 2's own function and its expansion would give away A2's first step.
- c09 #1, attempt 2 (obtuse angle to gradient not taught): accepted, adapted. The reviewer's two sentences are used in scene 6. The row shows θ = 120° → acute 60° → m = −tan 60° ≈ −1.73 instead of 135° → −1, because 135° is A2's own angle. The memory card, scene 8 and key note 4 now include "m = −tan(acute angle)". Key note 4 drops "(0° ≤ θ < 180°)" so it fits on one line; the range stays on screen in scene 6.
- c10 #1, scene 2 ("each second, the area grows by π"): accepted, reviewer's wording ("at that moment ... is growing at"), plus the tag "at t = 2 s".
- c11 #1, scene 3 ("grows $38 a week, each month"): accepted, reviewer's wording ("right now ... growing at", and the first month adds $40), plus a chip showing the first month's $40. Scene 5 also changes from "each month" to "per month", which settles open decision 2.
- c13 #1, scenes 12 and 7 ("this year" and "next year"): accepted, reviewer's wording. Scene 12 now says "every rule for combining functions", and scene 7 says "Later ... like e to the x".

## Root rulings carried in

- c03: grey "model curve" tag (rulings on c01 to c09, item 2). It is added in scene 1 and kept in scenes 3 and 5. This is also the review's c03 #2.
- c10: scene 1 pond badge (rulings on c10 to c18, item 1). It is a 240 px pond thumbnail with a still ring, shown on "function inside a function". There is no narration change. This is also the review's c10 #2.

## Optional

- c02 #2, open decision 2 (A2's picture): kept as written on the reviewer's advice (the tangent stays). Decision closed.
- c02 #3, feedback 1 (about 29.6 s): kept. "At one second, it's travelled three metres." is now the named reserve trim.
- c03 #2, "model curve" tag: applied (root ruling, above).
- c04 #1, open decision 2 (spreadsheet decimals): kept as written on the reviewer's advice. Decision closed.
- c05 #2, open decision 2 (∛x chip): applied, as "∛8 = 2, ∛(−8) = −2". Decision closed.
- c06 #3, open decision 1 ("rising at"): kept as written on the reviewer's advice. Decision closed.
- c07 #3, scene 2 ("exact gradients" claim): applied by cutting the sentence.
- c08 #1, feedback 2 (slip reason not spoken): applied, adapted. The reviewer's sentence would push the feedback to about 31.8 s, so it says "Flip it too." instead (about 29.5 s).
- c09 #2, scene 3 (driveway breaks its own limit): applied, reviewer's sentence plus a red tag.
- c10 #2, pond badge: applied (root ruling, above).
- c10 #3, attempt 1 (spoken fraction): applied, as "two over the square of three x plus one".
- c11 #2, feedback 2: applied (an unspoken factorising row, and "one minus x, all cubed").
- c11 #3, scene 6 length: kept. The zeros sentence is the named reserve trim.
- c12 #1, scene 2 (the extra v): applied, reviewer's wording plus a grey side note.
- c12 #2, scene 3 (percentage points): applied, reviewer's sentence plus a chip (R(1) = 69/170 ≈ 40.6%).
- c13 #2, key note 1 (too long): applied, reviewer's shorter note.
- c13 #3, feedback 1 (common-bottom step): applied as an unspoken row.
- c14 #1, scene 5 ("only changes at zeros"): applied, as "For a polynomial, ...". The teaching check has the same condition.
- c15 #1, scene 4 ("About halfway"): applied, as "Exactly halfway".
- c16 #1, feedback 2 ("never negative"): applied, adapted. The reviewer's clause would push the feedback to about 30.7 s, so it says "and it's zero only at one" instead (about 29.3 s).
- c17 #1, scene 3a ("climbing speed"): applied, as "climbing rate".
- c18 #1, open decision 2 (instant turns): kept as written on the reviewer's advice. Decision closed.

## Lengths after Revision 2 (characters by script; about s with holds)

| Design | Rev 1 | Rev 2 | About s |
| --- | --- | --- | --- |
| c01 | 5,563 | 5,563 | 506 |
| c02 | 5,537 | 5,644 | 512 |
| c03 | 5,596 | 5,596 | 508 |
| c04 | 5,537 | 5,537 | 504 |
| c05 | 5,564 | 5,596 | 508 |
| c06 | 5,520 | 5,630 | 511 |
| c07 | 5,533 | 5,589 | 510 |
| c08 | 5,565 | 5,578 | 507 |
| c09 | 5,513 | 5,803 | 524 |
| c10 | 5,906 | 5,915 | 532 |
| c11 | 5,538 | 5,640 | 511 |
| c12 | 5,509 | 5,647 | 512 |
| c13 | 5,554 | 5,561 | 505 |
| c14 | 5,560 | 5,578 | 507 |
| c15 | 5,523 | 5,525 | 503 |
| c16 | 5,522 | 5,549 | 505 |
| c17 | 5,526 | 5,525 | 503 |
| c18 | 5,539 | 5,539 | 504 |

All are within 5,500 to 6,800 characters and under 570 s.

## Joins

- c06 to c07 changed. Both now show the chip "distance ≈ 3.57√x km, x = height in m".
- Every other end frame and opening frame is unchanged. Three changes nearby leave their joins as they were:
  - c10's pond badge appears after the opening frame.
  - c13's handoff change is narration only.
  - c04's plate-brief change does not alter the c04 to c05 frame text.

Every bold cue is still quoted in its scene's Visual in spoken order (scripted check). None of the designs contains an em dash.
