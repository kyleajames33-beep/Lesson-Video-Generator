# Maths S11 l05 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-l05.md`, "How does a spreadsheet build and test a linear model?" Source SHA256 `00dfbfdedb145c0c21bcd62610bf9b113122088304f8a64fa41f8dd4b733a333`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (f08: cells, formulas starting with =, * for times, fill down; l03: start plus rate; l04: a valid range) as a Year 11 Mathematics Standard student with a Stage 5 background. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 0 optional).

A clear, practical video. The formula is said the way it is typed ("equals one fifty, plus eighteen, star, A2"), "A2 means the number of skaters in that row" is enough for fill down because the visual flashes each row's own A cell as its B cell computes, and the budget is found the way a spreadsheet user would find it (steps of 5 to bracket, then steps of 1), with the algebra shown as agreement and the reason for rounding down given before the answer. The edit scene's line swinging on its fixed start, and the mini-sheet with stale values "looking right", are both worth the time. Recalculated with SymPy 1.14 (`work/brief-review-s11-l/verify.py`): 150 + 18n gives 150, 168, 186, 204, 222, 240 at n = 0 to 5; 150, 240, 330, 420, 510 at n = 0 to 20 in fives; 330, 348, 366, 384, 402 at n = 10 to 14; 150 + 18n = 400 at n = 125/9 ≈ 13.89; 150 + 20n gives 350, 370, 390, 410, 430 at n = 10 to 14 and equals 400 at n = 12.5; 45 + 12.5 × 8 = 145; 38.5 − 30 = 47 − 38.5 = 8.5. All correct.

## Findings

1. **Should fix, scene 3 (why test a model you just typed?).** "A constant difference that equals the rate tells you the model really is linear." The student has just typed a linear formula, so this sounds circular, and "test" is half of the main question. The useful reason is that the test catches a typing slip. Fix. Narration, after "really is linear": "That's how you catch a typing slip. If you'd typed equals one fifty, star, eighteen, plus A2, the column would still fill, but the zero row would show two thousand seven hundred, and each step would add just one." Visual: a small grey mini-sheet at the right with "=150*18+A2" in its bar and B values 2700, 2701, 2702, its zero row and "+1" arrows ringed red, hand tag "slip caught" (values checked in `suggested.py`). Students should see the zero row and the difference as checks on their own formula. About 9 s, inside the 105 s margin.

2. **Should fix, scenes 4 and 5 (which rows hold 10 to 14?).** Scene 4 rewrites column A as 10, 11, 12, 13, 14 and then lights "B6 (384)" and "B7 (402)"; scene 5 lights "B5 (390)" and "B6 (410)". Those cell names only work if A2 still holds 0 and 10 to 14 sit in rows 3 to 7. If so, the column steps 0, 10, 11, 12, 13, 14, which breaks scene 2's "equal steps matter" in the very sheet the student is watching; if not (10 to 14 in rows 2 to 6), the labels are wrong: 384 is B5, 402 is B6, 390 is B4 and 410 is B5 (`suggested.py`). In a video that teaches cell names, the builder needs one clear layout. Fix: put 10 to 14 in rows 2 to 6 (equal steps throughout, matching "Start at ten, and go up by ones"), and correct the visual notes to "B5 (384) green, B6 (402) red" in scene 4 and "B4 (390) green, B5 (410) red" in scene 5. The chart keeps its (0, 150) start, so "it still starts at a hundred and fifty" holds. No narration change.

Open decisions: keep "our spreadsheet video" until f08's title is fixed, then quote it in the grey chip; trailer hire for A1 is accepted (ruling 92).

## Joins

l04 to l05: scene 1 opens on l04's final frame exactly (skates, the three price lines, the empty sheet with its two headers), and the first line reads the prices aloud before the model chip appears. l05 to l06: scene 11's frame (the produce scale with three apples, "0.00 kg", "Apples $4 per kg", "no bag fee", "example price", empty axes with the origin's open circle and "0 kg → $0?") is l06's opening frame and states no relationship.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown. A1's picture shows the formula and inputs 0, 1, 2 with column B empty, so the student must compute row 8 themselves; A2's picture is the given sheet with no arrows or formula. Each feedback gives the answer, the reason, short working and one crossed slip ("45 is the cost per hour"; "=8.5+30*A2"), about 28 s and 26 s. Both prices carry "example prices"; trailer hire at $45 plus $12.50 an hour is plausible.

## Key notes and length

Five useful notes; note 1 gives the actual formula to copy, which suits Standard students. About 465 s with holds, 105 s under the 570 s cap; finding 1 adds about 9 s.

No speech, design edits, builds or commits were made.
