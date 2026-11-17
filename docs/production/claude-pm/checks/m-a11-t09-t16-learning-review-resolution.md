# Year 11 Maths Advanced t09 to t16: learning review resolution

17 November 2026. This is the design author's resolution of `m-a11-t09-t16-learning-review-summary.md` and the per-design files `m-a11-t09-learning-review.md` to `m-a11-t16-learning-review.md` (with t14a, t14b, t15a and t15b). It applies root's decisions for this round: (1) the ruling 25 layout, with the phone plate at the left and its screen shown enlarged in a wide landscape "app view" panel linked by a thin cone, identical in t14a's final frame and t14b's opening; (2) the clock convention, with the minute hand's angle measured clockwise from twelve with cosine, said aloud once in each of t14b, t15a and t15b, and the quadrant step done on a small standard circle beside the clock; (3) fractions read "over"; (4) "radians" always said after a radian answer; (5) t09's 6,318 becomes 6,319 and t12's 23.03 becomes 23.04, and t10 opens with the fork already on screen; (6) every other should-fix applied, optional findings applied where cheap and helpful. All ten designs now carry "Revision 2 (17 Nov 2026): learning review resolved" in their Status lines and a "Revision 2" section at the top with the detail. This round changed documents only: no speech, build, render or commit. Changed values were rechecked with SymPy 1.14 (`work/brief-resolve-t2/verify.py`, all checks pass), and narration was recounted by script (`work/brief-resolve-t2/count.py`, which reproduces e08's 5,632). Codex's maths check remains the authority.

**Totals:** 45 findings (0 blockers, 22 should fix, 23 optional). Should fix: all 22 applied. 14 use the reviewer's wording, 6 follow root's decisions (t09 #1, t10 #4, t14a #1, t14b #1, t14b #3, t15a #1, with t15a #3 and t15b #1 also matching root's radians ruling), and 2 are adapted (t10 #3's period reason, t14a #2's triangle reason). Optional: 22 applied, 1 kept as written on the reviewer's advice (t15b #3, a builder check). None declined.

## Should fix

- t09 #1, scene 6 (6,318 does not match 7854 − 1535 on screen): accepted, as root ruled. Narration, row, decisions, author note (d), "Numbers used" and "Numbers to verify" all read 6,319 (6,318.52 unrounded).
- t09 #2, attempt 2 ("subtends" first heard in the question): accepted, reviewer's wording. Scene 5 says "cuts off, or subtends", with a grey tag "subtends: cuts off at the centre".
- t09 #3, scene 5 (the exact form asked for in A2 but never heard): accepted, reviewer's sentence, with the cue "three" on the exact row and a grey chip "t08: sin(2π/3) = √3/2". Open decision 2 is closed.
- t09 #4, scene 2 ("only works in radians" without a reason): accepted, reviewer's sentence; the dimmed row "θ = l/r" pulses on "radian's definition".
- t10 #1, scene 3 (the turned circle contradicts the narration): accepted, reviewer's visual. The circle stays upright; cos θ is a horizontal violet bar whose ghost copy swings up to stand as the graph's height.
- t10 #2, scene 6 (x as both angle and coordinate; "tan x metres" asserted): accepted, reviewer's wording. The torch angle is θ, with the right-angled-triangle reason (adjacent 1 m, opposite = the spot); the graph scene opens "On the graph we call the angle x again".
- t10 #3, scene 6 (too dense; tan's x-intercepts never said): accepted. Scene 6 splits into scene 6 (the torch) and scene 7 (the graph), so t10 now has 14 scene headings and every scene reference is renumbered. Scene 7 says "Tangent is zero wherever the height is zero: at zero, pi and minus pi radians". Adapted: the period reason says "both coordinates switched in sign, and the two minus signs cancel in the height over the x-coordinate" (plainer than "negated", and it avoids "y over x" now that x names the angle).
- t10 #4, the t09 join (the fork appears twice): accepted, as root ruled. The fork is in t10's boundary and opening frame and stays still, with no re-entry cue.
- t12 #1, scene 3 ("identity" and "excluded" before their meanings): accepted, reviewer's sentences, now scene 3's opening, with the new cue "excluded" and two grey tags.
- t12 #2, scene 5 (two exact values skip their steps aloud): accepted, reviewer's wording, with rows "3π/4 = 135°: related angle 45°" and "11π/6 = 330°: related angle 30°".
- t12 #3, scene 5 (sec 120° = −2 not tied back to the floodlight): accepted, reviewer's sentences, replacing "The minus sign comes from x being negative". Open decision 2 is closed.
- t13 #1, scene 3 (four of six identities asserted for any angle): accepted, reviewer's wording for tan(90° − θ) = cot θ with "sin θ ≠ 0". The reviewer's named trim was taken to hold the scene: the spoken coordinates for 150° and −60° become "look at the two points' coordinates. They're swapped exactly." (labels stay on screen, enlarged).
- t14a #1, scene 12 and the t14b join (ruling 25): accepted, with root's layout (phone plate at the left with a coded miniature, thin grey cone, landscape `ScreenApp` panel 1,280 × 720 px). The frame text is word for word the same in t14a's handoff and t14b's boundary.
- t14a #2, scene 3 (three rescaled triangles at once, sides unexplained): accepted, adapted. One triangle only, after the first division, with "opposite over adjacent is just the opposite side, so that side is tangent theta" added to the reviewer's wording so the label has a cause. The other two rescalings stay small and silent on the memory card.
- t14b #1, scenes 1 and 6 (ruling 25): accepted, with root's layout; the zoom-out and the counterexample run in the panel and are mirrored on the phone. Open decision 1 is superseded.
- t14b #2, scene 2 ("one side only" needs a reason): accepted, reviewer's sentences, on a small "−2 = 2" / "4 = 4" board crossed on "Reaching".
- t14b #3, scene 12 (the clock's cosine unexplained): accepted, as root ruled. The convention sentence and the cosine reason are said once; a right-angled triangle shows "adjacent = height", with a grey tag "angle from 12, clockwise". No quadrant is named in t14b.
- t15a #1, scenes 1 and 4 (quadrant names on the clock): accepted, as root ruled. Scene 1 says the convention once (t14b's sentence). Scene 4 does the quadrant step on a small standard circle (300 px) beside the clock, measured anticlockwise from the positive x-axis, with the quadrant labels on that circle only; dotted links carry 60° and 300° to the clock's hands. Open decision 2 is closed.
- t15a #2, scene 2 ("the positive value" is a rule): accepted, reviewer's sentences, with a grey tag "acute: sin α > 0".
- t15a #3, scene 5 and feedback 2 (radian answers without "radians"): accepted, as root ruled; "thirty-six point nine degrees" also gains its unit. Feedback 2 is about 27 s.
- t15b #1, scene 4 (radian answers without "radians"): accepted, as root ruled ("one point two six six radians", "five point six five radians").
- t16 #1, scene 4 (no reason for converting towards cosine; c not reintroduced): accepted, reviewer's wording, with a lightly struck grey row "cos θ = ±√(1 − sin² θ)" and "Let c equal cosine theta" said before the factorised form.

## Optional

- t09 #5, feedback 2 (bracket and unit by ear): applied, adapted. "times, in brackets," and "square centimetres" are said; "That's" and "Writing" are cut, but "is the rest" stays because it is the key reason. About 29 s.
- t09 #6, scene 6 ("the reflex angle"): applied ("the angle the long way round").
- t10 #5, scene 4 ("odd multiples" against "x = π/2 + kπ"): applied on screen only ("x = π/2 + kπ (odd multiples of π/2)").
- t10 #6, units and coordinates by ear: applied ("At zero degrees, it's zero"; "at the point zero, one").
- t10 #7, key notes 3 and 5: applied ("(k an integer)").
- t11 #1, scene 1 (cable formula reason): applied, reviewer's wording, with a grey row "opp × hyp/opp = hyp".
- t11 #2, scene 4 (cot 60° never said): applied, with its own cue "cotangent sixty degrees".
- t12 #4, key note 5 mixes three ideas: applied (split into key notes 3 and 5).
- t12 #5, "Numbers to verify" 23.03: applied, as root ruled (23.04).
- t13 #2, the equal-angle sentence: applied (the 2 s hold of the two labelled equal arcs is now standard). Open decision 2 is closed.
- t13 #3, "degrees" on both numbers: applied in scenes 3 and 6.
- t13 #4, scene 5 ("tan times its own cot"): applied ("because cotangent is one over tangent").
- t14a #3, "five on four": applied, as root ruled (22 readings changed to "over").
- t14a #4, scene 5 (sin = tan × cos): applied ("because tangent is sine over cosine").
- t14a #5, attempt 2's spoken bracket: applied ("times, in brackets,").
- t14b #4, scene 1 ("Sine of one"): applied ("Sine of one radian").
- t14b #5, the decisions bullet's window: applied (±0.15 in the anchor decision and simulation 1).
- t14b #6, scene 6's readout units: applied ("x = π/4 (45°)").
- t15a #4, scene 6 ("which we've already solved"): applied, reviewer's wording.
- t15b #2, scene 3 (why two waves): applied, reviewer's wording, with "period 180°" on each wave bracket.
- t15b #3, open decision 1 (the teal box): kept as written, as the reviewer advised (a builder check with the dashed blue fallback; no narration change).
- t16 #2, feedback 2 (the surd factorisation): applied as a silent grey row.
- t16 #3, scene 5's units: applied ("at pi over two radians").

## Root's strand-wide rulings, beyond the findings

- Fractions read "over": t09 feedback 1 ("four over three", twice), t12 scene 2 ("minus five over three", "minus three over four", cue "quarters" becomes "four"), t14a throughout, t15a feedback 2 ("minus two over five"). "A half" stays as an everyday word. A scripted search finds no remaining "on", "thirds", "quarters" or "fifths" fraction reading in the ten narrations.
- "Radians" after a radian answer: t10 feedback 2 (three places), t15a scene 5 and feedback 2, t15b scene 4, t16 scene 5. t09, t11, t12, t13, t14a and t14b give no radian answer without it.
- The clock convention is said once in each of t14b (scene 12), t15a (scene 1) and t15b (scene 1). Quadrants are named only in t15a scene 4, on the standard circle. t15b's first-lap angles carry a grey chip back to t15a.

## Housekeeping

- Open decisions answered by the review or by root are closed in each design: t09 (1, 2), t10 (1, 2, 3), t11 (1, 2), t12 (1, 2), t13 (2; 1 stays a builder check), t14a (1, 2), t14b (1, 2), t15a (1, 2, 3), t15b (2; 1 stays a builder check), t16 (1, 2).
- Small corrections found while editing: t14b's handoff decision said "Scene 11" (now scene 12); t10's anchor decision used x for the torch angle (now θ); t14a's scene 3 visual was reordered so the triangle beat sits before the second division, matching the narration. Three Revision 1 bold cues had no quoted visual beat (t11 scenes 1 and 6, t12 feedback 1); each now has one.
- No em dash (U+2014) in any of the ten designs (scripted check). Every bold cue is quoted in its scene's Visual in spoken order (scripted check, `work/brief-resolve-t2/cuecheck.py`), except t10 scene 2, where the cue "one" in "minus one" is quoted as "minus one", as in Revision 1.
- No t01 to t08 file was edited (t08 was read for the join only).

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Speech before notes | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| t09 | 5,731 | 6,084 | about 548 s | about 452 s | 27 s, 29 s |
| t10 | 5,827 | 6,157 | about 560 s | about 457 s | 27 s, 24 s |
| t11 | 5,934 | 6,106 | about 552 s | about 453 s | 29 s, 22 s |
| t12 | 5,191 | 5,579 | about 511 s | about 414 s | 29 s, 26 s |
| t13 | 5,862 | 6,043 | about 546 s | about 449 s | 25 s, 23 s |
| t14a | 5,176 | 5,489 | about 504 s | about 407 s | 28 s, 21 s |
| t14b | 5,044 | 5,406 | about 498 s | about 401 s | 30 s, 18 s |
| t15a | 5,205 | 5,731 | about 522 s | about 425 s | 22 s, 27 s |
| t15b | 4,723 | 4,987 | about 466 s | about 369 s | 30 s, 29 s |
| t16 | 5,346 | 5,471 | about 502 s | about 406 s | 27 s, 25 s |

All ten are under 570 s with holds, and so under the 570 s speech cap. t10 is the closest (about 560 s): findings 2 and 3 added about 470 characters, so its three Revision 1 reserve trims were taken and two further trims are named. t15b stays below 5,500 characters under ruling 28; every addition answers a finding or ruling. The longest single scenes are now t09 scene 5 (1,064 characters, about 80 s), t13 scene 3 (1,009, about 76 s) and t12 scene 5 (1,002, about 75 s), each with several visual beats on one stage and a named reserve trim. These are speech-only estimates; measure them on the Year 11 voice.

## Joins

| Join | Result |
| --- | --- |
| t08 → t09 | Unchanged. |
| t09 → t10 | t10's boundary and opening now include the fork, which stays still (root ruling 5). t09's frame is unchanged. |
| t10 → t11 | Unchanged (t10's handoff is now scene 13; its frame is the same). |
| t11 → t12, t12 → t13, t13 → t14a | Unchanged. |
| t14a → t14b | Both moved to the ruling 25 layout together; the frame text is identical in both files. |
| t14b → t15a | t14b's final frame gains the "angle from 12, clockwise" tag and the "adjacent = height" triangle; t15a's boundary and opening are updated to match. |
| t15a → t15b, t15b → t16 | Unchanged (t15b's convention tag appears on a cue after its opening frame). |
| t16 → g01 | Unchanged; root rulings 7 and 29 apply. |

Nothing recorded; human listening pending.
