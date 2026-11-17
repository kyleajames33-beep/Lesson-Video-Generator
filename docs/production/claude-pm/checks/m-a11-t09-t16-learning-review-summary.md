# Maths A11 t09 to t16 Revision 1: learning review summary

17 November 2026. Independent student learning review of the ten trigonometry designs (`lessons/math-a11-t09.md`, `t10.md`, `t11.md`, `t12.md`, `t13.md`, `t14a.md`, `t14b.md`, `t15a.md`, `t15b.md`, `t16.md`), following `docs/production/student-learning-review.md` and root rulings 1 to 3 and 21 to 28. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under each design's "Numbers to verify" was recalculated with SymPy 1.14, and every solution set in t15a, t15b and t16 was checked by a numerical root scan of its stated domain (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| t09 arcs, sectors and segments | should-fix | 0 | 4 | 2 | `m-a11-t09-learning-review.md` |
| t10 graphs of sin, cos and tan | should-fix | 0 | 4 | 3 | `m-a11-t10-learning-review.md` |
| t11 sec, cosec and cot in a triangle | pass | 0 | 0 | 2 | `m-a11-t11-learning-review.md` |
| t12 reciprocals for any angle | should-fix | 0 | 3 | 2 | `m-a11-t12-learning-review.md` |
| t13 complementary angles | should-fix | 0 | 1 | 3 | `m-a11-t13-learning-review.md` |
| t14a Pythagorean identities | should-fix | 0 | 2 | 3 | `m-a11-t14a-learning-review.md` |
| t14b proving identities | should-fix | 0 | 3 | 3 | `m-a11-t14b-learning-review.md` |
| t15a single-angle equations | should-fix | 0 | 3 | 1 | `m-a11-t15a-learning-review.md` |
| t15b multiple-angle equations | should-fix | 0 | 1 | 2 | `m-a11-t15b-learning-review.md` |
| t16 equations that reduce to quadratics | should-fix | 0 | 1 | 2 | `m-a11-t16-learning-review.md` |

Totals: 1 pass, 9 should-fix, 0 blockers; 22 should-fix findings, 23 optional. Every should-fix is a wording, label or visual-detail repair inside an existing scene, except t10 finding 3 (split scene 6 into two beats) and the ruling 25 change to t14a and t14b. No new plate and no further video split is needed.

## Top findings

1. **t15a scenes 1 and 4, with t14b scene 12: the clock's angle convention.** The minute hand is measured clockwise from twelve with cosine for the height, but t04 used the same plate measured anticlockwise from three o'clock, and t10 taught "height = sin θ". t15a then names "the first and fourth quadrants" while the 300° hand points up and to the left. Say the convention and why the height is cosine (the side next to an angle measured from the upright), and do the quadrant step on a small standard circle beside the clock, not on its face. This answers t15a's open decision 2.
2. **t14a scene 12 and t14b scenes 1 and 6: root ruling 25 is not yet applied.** The graphing app must sit on the phone plate `ma12-phone-v1.png`, in both t14a's final frame and t14b's opening (the join).
3. **t10 scene 3: the turned circle contradicts the narration.** After a quarter turn, the 0° point is drawn at the top while the narration says "furthest right". Keep the circle upright and carry cos θ as a horizontal bar that swings up onto the graph.
4. **t10 scene 6: x means the angle and the x-coordinate in one breath, "tan x metres" has no reason, and tan's x-intercepts are never said** (A2 asks for them). Rename the torch angle θ, give the right-angled-triangle reason, split the 65 s scene, and say "zero wherever the height is zero".
5. **t09 scene 6: 6,318 should be 6,319.** The screen row "7854 − 1535 ≈ 6318" is arithmetically wrong, and the unrounded 6,318.52 also rounds to 6,319.
6. **t09 attempt 2: "subtends" and exact forms are first met in the question.** Teach "cuts off, or subtends" in scene 5, and say sin(2π/3) = √3/2 and the leaf's exact area once (answers open decision 2).
7. **t12 scenes 3 and 5: plain meanings and steps missing.** "Identity" and "excluded" have no spoken meaning; cosec(3π/4) and cot(11π/6) skip their degree form and related angle aloud; sec 120° = −2 is never tied back to the beam that never lands.
8. **t14b scene 2: "one side only" needs a reason a student can feel.** Add the "−2 = 2, square both sides, 4 = 4" board.
9. **t13 scene 3: four of the six identities are asserted for any angle.** Voice one (tan(90° − θ) = cos θ/sin θ = cot θ), which also shows where scene 4's exclusions come from.
10. **Radians unsaid on decimal answers** in t15a (scene 5, feedback 2) and t15b (scene 4), and smaller unit omissions elsewhere (t10 "At zero", t13 "ninety minus", t14b "sine of one").

Other should-fix items: t09 scene 2 (say why l = rθ needs radians); t10 join (the tuning fork is already in t09's final frame, so it should pulse, not appear); t14a scene 3 (three rescaled triangles at once with unexplained sides; keep one, explained); t15a scene 2 (the related angle comes from the positive value because an acute angle's ratios are positive); t16 scene 4 (say why to convert towards the unsquared ratio, and reintroduce c).

## Proofs and solution sets (brief checks)

- **t14b proof pacing:** passes. Scenes 3 and 4 each write five rows, one per cue, each with a grey reason, and the target lights only when the last row matches; feedback 1 writes four rows with reasons.
- **t15a and t15b solution sets:** every set is complete in its stated domain, including endpoints (numerical scan): t15a 10 and 50 min; 30°, 150°; 120°, 240°; 3.785, 5.640; π/6, 5π/6; π/4, 5π/4; A1 150°, 210°; A2 3.553, 5.872. t15b 10, 50, 70, 110 min; 15°, 75°, 195°, 255°; 45°, 225°; 0.633, 2.509, 3.775, 5.650; 120° only; A1 120°, 150°, 300°, 330°; A2 3π/8, 7π/8, 11π/8, 15π/8. t16's sets (including 0° and 360°) are complete too.
- **Numbers to verify:** all correct except t09's 6,318 (top finding 5) and t12's verify line "23.03" (23.035 rounds to 23.04; the screen's "23.0 m" is fine).

## Open decisions answered

- t09 (1) two anchors: keep (ruling 22). t09 (2) spoken exact forms: screen-only is fine except one spoken step (t09 finding 3).
- t10 (1) two anchors and (2) torch reuse: keep (ruling 23). t10 (3) colours: ruling 27.
- t11 (1) spoken names: ruling 26. t11 (2) (−3, 4) moved to t12: agree.
- t12 (1) no split: agree; scene 4 is not rushed. t12 (2) backward beam: keep out, but add one sentence (t12 finding 3).
- t13 (1) magenta: ruling 27's builder check. t13 (2) the equal-angle sentence: keep, and hold the equal arcs for 2 s as standard (optional).
- t14a (2) pan law: keep "one common design".
- t14b (1) painted anchor: superseded by ruling 25 (phone plate). t14b (2) sin x against x: keep; it does not distract.
- t15a (2) clock convention: the switch confuses as written (top finding 1). t15a (3): ruling 24.
- t15b (1) teal box: builder check, dashed blue fallback. t15b (2) half-angle scene: keep.
- t16 (1) g01 join: as ruling 7. t16 (2) battery: keep; it carries the reason (a range) better than the voucher.

## Joins

| Join | Result |
| --- | --- |
| t08 → t09 | Matches t08's scene 13 frame exactly (the t01 to t08 reviewer found the same). |
| t09 → t10 | Matches except the tuning fork: in t09's final frame, but t10's boundary omits it and scene 1 makes it appear (t10 finding 4). |
| t10 → t11 | Matches. |
| t11 → t12 | Matches. |
| t12 → t13 | Matches. |
| t13 → t14a | Matches. |
| t14a → t14b | Content matches; both sides must move to the phone plate together (ruling 25). |
| t14b → t15a | Matches; t15a must keep t14b's corrected cosine sentence (top finding 1). |
| t15a → t15b | Matches. |
| t15b → t16 | Matches. |
| t16 → g01 | Neutral coded frame, no direction stated (ruling 7); g01's designer must open on it. |

Across the splits: t14a and t14b do not repeat teaching (one ratio from another and one simplification in t14a; the proof layout and restriction-led simplifying in t14b). t15a and t15b do not repeat teaching (t15b recalls t15a's method in a chip and spends its time on the window). Both splits follow the packs' suggested lines and ruling 21.

## What later videos assume, and where these designs deliver it

| Assumption | Where delivered |
| --- | --- |
| Year 12 t01, t02, d05: the three graphs on radian axes with intercepts, asymptotes, domain, range, period, amplitude and symmetry (`cid79268a8`) | t10 scenes 4 to 6 (tan intercepts need t10 finding 3) |
| Year 12 d05: cos x is "the same wave, just starting at the top" | t10 scene 3 |
| Year 12 t02: the calculator gives one angle; quadrant method on [0, 2π] | t15a scenes 1 to 3 |
| Year 12 t02: the inside angle's window, "two per cycle unless the line touches", halve them all | t15b scenes 2 to 4 |
| Year 12 t03: inverse cos on a calculator in radians | t15a scene 5, t15b scene 4 |
| Year 12 calculus: l = rθ, A = ½r²θ; sin² x + cos² x = 1; "write it in sin and cos" | t09 scenes 2, 3; t14a scene 2; t14b scene 3 |
| t16: sin² θ = 1 − cos² θ | t14a key note 5 |

No gap found beyond t10 finding 3.

## Practice and feedback

All 20 question cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing (t14a A1's unlit quadrant badge, t14b A1's empty proof ladder and t15b's empty window maps are method reminders). All 20 feedbacks give the answer, the key reason, short working and one crossed classic mistake, and all are estimated at 30 s or less. Four sit at 29 to 30 s (t11 feedback 1, t12 feedback 1, t14b feedback 1, t15b feedbacks 1 and 2), each with a named trim; measure them on the voiced take. The findings add almost nothing to feedback speech (t09 finding 5 adds about 2 s, offset by its own cuts).

## Lengths after the findings

All ten stay under 570 s. The largest additions are t10 (about 250 characters, about 554 s with holds; take its named reserve trims), t09 (about 250, about 541 s), t13 (about 170, about 545 s), t14b (about 200, about 485 s) and t12 (about 400, about 511 s). These are speech-only estimates.

## Housekeeping

- No em dash (U+2014) in any of the ten designs (scripted check).
- Each design's `learning_review` path (`checks/m-a11-tNN-learning-review.md`, with t14a, t14b, t15a and t15b suffixed) matches these files.
- t14b's decisions bullet says a hook window of ±0.25; its scene and author note say ±0.15, which is the one that meets the 2 px limit.

## For root

1. **Ruling 25 layout.** The phone plate is portrait, and t14b's zoom-out needs a wide graph. Choose: the phone at about 520 px with the app's screen mirrored large beside it (the phone shows the same graphs small), or the phone turned landscape as a coded frame around the app. The same layout must be t14a's final frame.
2. **Clock convention.** Recommended: keep the angle from twelve, clockwise, with cosine for the height, and say so (t14b finding 3, t15a finding 1); keep quadrant names on a standard circle beside the clock. The alternative (t04's angle from three o'clock) would make the hand's angle 90° − 6m and is harder.
3. **Fraction reading.** t14a says "five on four"; t11 and t12 say "over". One reading for the strand ("over" recommended).

No speech, design edits, builds or commits were made.
