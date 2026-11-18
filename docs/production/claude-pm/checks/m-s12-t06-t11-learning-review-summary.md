# Maths Standard Year 12 t06 to t11 Revision 1: learning review summary

18 November 2026. Independent student learning review of the six non-right-angled trigonometry designs (`lessons/math-s12-t06.md` to `t11.md`, Standard 2 only), following `docs/production/student-learning-review.md`, root rulings 1 to 62 (61 in particular), `checks/root-decisions-maths-s12-t06-t11.md`, and t05's final frame as `lessons/math-s12-t05.md` and `checks/root-decisions-maths-s12-t01-t05.md` section 3 now describe it. I traced each design from its stated entry knowledge as a Mathematics Standard 2 student starting Year 12, who knows sine and cosine only as ratios in right-angled triangles. I checked the t10 callbacks against `lessons/math-s12-r07.md` and `r08.md`.

This covers written designs only: no built preview, plate inspection, playback or human listening is claimed. I recalculated every value under "Numbers to verify" with SymPy 1.14 (`work/brief-review-standard-t2/verify.py`); numbers in suggested fixes are in `suggested.py`, and both were run with `python -I`. Codex's maths check is separate. Price checks (t09) used web listings seen on 18 November 2026. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| t06 sine rule, a side | should-fix | 0 | 2 | 1 | `m-s12-t06-learning-review.md` |
| t07 sine rule, an angle, obtuse | should-fix | 0 | 2 | 1 | `m-s12-t07-learning-review.md` |
| t08 cosine rule | should-fix | 0 | 2 | 1 | `m-s12-t08-learning-review.md` |
| t09 area ½ab sin C | should-fix | 0 | 3 | 0 | `m-s12-t09-learning-review.md` |
| t10 compass radial surveys | should-fix | 0 | 2 | 1 | `m-s12-t10-learning-review.md` |
| t11 choosing the rule | should-fix | 0 | 4 | 1 | `m-s12-t11-learning-review.md` |

Totals: 0 pass, 6 should-fix, 0 blockers; 15 should-fix findings and 5 optional. Every fix is a sentence, a label, a number or a frame description inside an existing scene. None needs a new scene, a new plate or a split. These are good designs. Each states its reason in words before the letters:
- t06: one height, written two ways, is b sin A and a sin B.
- t07: equal fractions stay equal when flipped.
- t08: the hinge, where Pythagoras is the 90° frame.
- t09: the height nobody measured is b sin C.
- t10: both bearings are measured from the same north.
- t11: you can't see a matched pair in a sentence.

None is a slideshow on paper, and every opening question is answered by the end.

## Top findings

1. **t07 scene 4 and t08 scenes 3 and 5: sine and cosine of obtuse angles are asserted.** Students know these ratios only inside right-angled triangles. Give t07's half circle a one-metre arm: its height is the sine and its sideways reach is the cosine. Then sine 130° = sine 50° (same height), cos 110° is negative (it reaches back), and inverse cosine needs no 180° step (each reach has one angle). Add a calculator check. This is the main causal gap in the strand.
2. **t06 opening: nine differences from t05's final frame.** Plate name (`ms12-river-crossing-top-v1.png`), dotted (not dashed) sight lines, blue arcs, label wording, the undescribed right panel, panel tags, the "Next" and "?" chips, scaled point positions, and the provisional status. Root's ruling 61 asks for this fix in the resolution.
3. **t11 final frame: differs from t05's right panel** (title "This week", seven rows, implied values, chip wording, a conditional plate that t05 does brief). Copy t05's panel exactly and change only the course-specific grey chip and label.
4. **t11 and t08: the decision path misses "two angles: the third makes a pair".** t11's own tower example and A2 fail all three gates as stated. t08's "if you can't [see a pair], you'll have two sides and the angle between, or three sides" is untrue for the same case.
5. **t09 scenes 2 to 4: the derivation picture fails for the 110° paddock.** The height falls outside, at 70°. Draw scene 2 acute, and show the outside height on the hinge past 90°.
6. **t06 attempt 2 divides by sine 95° a video before any obtuse sine is explained.** Use rafters at 35° and 60° (apex 85°, longer rafter 8.35 m, slip 14.49 m).
7. **t09 attempt 1: $38 a square metre for shade fabric is about three times shade-cloth prices** seen on 18 Nov 2026 (about $8.60 to $12 a square metre by the metre; finished retail sails about $3 to $6). Use $12 ($150.65; rounded first $150.60). The spray rate of 2 L a hectare is within APVMA glyphosate 450 label rates.
8. **t07 scene 6: the "keep the full value" demonstration shows no difference** (35°27' both ways). Use the hanger: 0.77 gives 129°39' against 129°47'.
9. **t10 scene 1: "from the land and rainfall videos".** r08 never names radial surveys; say "from the land area video". The description still quotes r07's and r08's points, against ruling 61.
10. **t11 scenes 4 and 5: when to add the angle to a bearing, and why "due west" at Q.** Both are given without the reason; key note 5's "±" is unexplained.

Other should-fix items:
- t09 scene 5: the screen value 0.9897 should be 0.9896 (sin 98.2515° = 0.98965); the answer, 1336 m², is unchanged.
- t11 title: 85 characters with no shorter alternative (ruling 37); suggest "Choosing the Trig Rule: Bearings and Elevation | Year 12 Maths Standard" (71).

## Joins

- **t05 to t06:** not yet matching (top finding 2); the numbers (500 m, 60°, 85°) and the spoken lead-in already agree.
- **t06 to t07, t07 to t08, t08 to t09, t09 to t10, t10 to t11:** each final frame is the next design's stated opening frame, label for label and colour for colour, and each opening line picks up the previous question. No frame states the answer it hands on (R, the wire, the area, the survey's area, which rule).
- **Ruling 43:** met. t09's final frame brings back r07's scene 7 sketch and chip as r07 draws them. t10 computes the radial survey's area, a boundary and the perimeter, and puts r08's 25 mm on it with r08's own wording. The one inaccuracy is the "rainfall videos" phrase (top finding 9).
- **t11 to b01 (ruling 59, provisional):** fix as top finding 3, then the b01 designer confirms both frames.

## Practice and feedback

All 12 question cards keep the full worded question, every part and every condition ("acute", "obtuse", "example price") on screen through the 10 s countdown. No picture is answer-bearing: every diagram is not to scale and marks the unknown "?", and t11's cards are worded without a diagram by design. Some cards ask for several steps (t10 A1, t11 A2), more than 10 s allows, but "Pause here to answer." covers that. All 12 feedbacks give the answer, the key reason, short working and one crossed classic slip, between about 25 s and 30 s by speech estimate. Anchors are everyday and non-science (a river, a corner block, a roof truss, a shade sail, a coat hanger, a bike frame, a paddock, walking tracks, a soccer goal, a lawn, a council park, a ferry, a phone tower, a drone), with no gambling and no people drawn.

## Lengths

All six are under 570 s by the designer's estimate (460 s to 530 s). After the fixes: t07 about 493 s, t08 about 534 s, t09 about 468 s, t11 about 542 s, and t06 and t10 almost unchanged. Measure on the voiced take.

## For root to decide

- Whether t07's one-metre-arm sentence (top finding 1) is acceptable without unit-circle language. I think it is: it is t01a's "opposite over hypotenuse" with a hypotenuse of one.
- The t09 fabric price: $12 a square metre as proposed, or another dated NSW figure from Codex.
- t11's shorter title.
- Confirm that the farm plate named in t07 to t10 is `ms12-farm-top-v1.png` (briefed in t03, used in t04 and t05). The designs still say "t04's, name per the t01 to t05 designs".

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) was found in any of the six designs (scripted check).
- t07, t08 and t09 descriptions say "Next: ... (title set by its design)"; those designs now exist, so quote their titles.
- Grey chips "t01: ..." in t06 and t09 refer to t01, which is now t01a and t01b (ruling 62). Use "t01a: ...".

No speech, design edits, builds or commits were made.
