# Maths Standard Year 11 l01 to l07 Revision 1: learning review summary

19 November 2026. Independent student learning review of the seven Linear relationships designs (`lessons/math-s11-l01.md` to `l07.md`), following `docs/production/student-learning-review.md`, root rulings 1 to 92, `checks/root-decisions-maths-s11-l01-l07.md`, the packs in `pre-design/maths-standard/`, `maths-visual-standard.md` and `AGENTS.md`. Each design was traced from its stated entry knowledge as a Year 11 Mathematics Standard student with a Stage 5 background (Year 11 is one course for Standard 1 and Standard 2). `lessons/math-s11-f08.md` does not exist yet, so l01's opening was checked against f08's fixed final frame in `checks/root-decisions-maths-s11-f01-f08.md` section 1; l07's close was checked against `lessons/math-s11-e01.md` scene 1. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" was recalculated with SymPy 1.14 (`work/brief-review-s11-l/verify.py`, 67 checks, 0 failures; numbers in suggested fixes in `suggested.py`; both run with `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| l01 gradient and y-intercept | should-fix | 0 | 3 | 1 | `m-s11-l01-learning-review.md` |
| l02 writing and drawing y = mx + c | should-fix | 0 | 1 | 2 | `m-s11-l02-learning-review.md` |
| l03 linear models in context | pass | 0 | 0 | 2 | `m-s11-l03-learning-review.md` |
| l04 interpolation, extrapolation, limitations | should-fix | 0 | 2 | 1 | `m-s11-l04-learning-review.md` |
| l05 a linear model in a spreadsheet | should-fix | 0 | 2 | 0 | `m-s11-l05-learning-review.md` |
| l06 direct variation | blocker | 1 | 1 | 3 | `m-s11-l06-learning-review.md` |
| l07 graphing y = kx | should-fix | 0 | 1 | 2 | `m-s11-l07-learning-review.md` |

Totals: 1 pass, 5 should-fix, 1 blocker; 1 blocker finding, 10 should-fix findings, 11 optional. The blocker is a notation ruling not yet applied, which is a mechanical edit. Every should-fix is a sentence, a label or a visual detail inside an existing scene; none needs a new scene, a new plate or a split. The designs are good: every step is said in words before its symbols, each idea has a stated cause ("already there", "paid once", "nothing in, nothing to pay", "one of them is free"), each has a real simulation that shows the idea changing (the sliding triangle, the off-line point turning red, the price-rise slider on a pinned start, the probe leaving the data band while the gauge sits on "E", the fill-down ripple, the two ratio badges, the reading paths), and none is a slideshow on paper.

## Top findings

1. **l06 throughout: ruling 92 (w for mass) is not applied.** The design still says "C equals four m" with the chip "here m = mass (kg)", in A1's card and feedback too, while scene 2 tells the student that k is the gradient, the job m has done for five videos. Replace m with w for mass everywhere, with the chip "w = mass in kg"; the ratio badge reads "C ÷ w = 4".
2. **l06 scene 4: A2's Table B is ruled out on screen before the attempt.** The teal table (0, 5), (2, 9), (4, 13) with "13 ÷ 4 = 3.25" in red is A2's Table B. Use (0, 3), (2, 12), (4, 21) instead: the same "+9" differences as the direct table, ratios 6 and 5.25.
3. **l04 scenes 3 and 4: "valid range" sounds like "safe".** Six hours is called less reliable, then 0 ≤ h ≤ 7.5 is shown in the "fairly safe" green. Say "Valid doesn't mean reliable"; colour 0 to 4 green ("data") and 4 to 7.5 amber ("makes sense, but extrapolation").
4. **l04 scene 5: the savings example has no data, so "interpolation" changes meaning.** Make the balance checked every 4 weeks and at week 26 (350, 510, 670, 830, 990, 1150, 1310, 1390); week 10 is then between real readings. No other number changes.
5. **l01 scenes 2 and 5: input and output are never identified.** The video's key rule is output change ÷ input change, but the student is not told how to pick them. Say "minutes are the input, so they go across, and litres are the output, so they go up", and give scene 5's reason ("distance depends on time").
6. **l01 scene 4: the tilting line rescales its axis.** On fixed axes the +25 line already fits (x 3.6 to 6.3); keep the axes fixed and say "on the same axes, the steeper the line, the bigger the rate".
7. **l05 scene 3: the test has no purpose.** Testing a formula you just typed sounds circular. Show what it catches: "=150*18+A2" fills a column with 2700, 2701, 2702.
8. **l05 scenes 4 and 5: row labels.** "B6 (384)", "B7 (402)", "B5 (390)" and "B6 (410)" only fit if A2 keeps 0, which makes the inputs uneven. Put 10 to 14 in rows 2 to 6 and relabel: B5 and B6 in scene 4, B4 and B5 in scene 5.
9. **l02 scene 4: the check point is circular.** 54 is computed from the equation and then declared on the line. Read the graph first ("at x equals two, the line is at about fifty-four"), then compare.
10. **l01 scene 6: "The minus sign belongs to the two, because it's attached to the x".** Say "The minus sign in front of the two x goes with it, so the gradient is minus two."

The other should-fix: l07 attempt 1 uses m for the potatoes' mass one video after l06 moves to w (root to confirm, finding below).

## What root must decide

- **Ruling 92 in l06 (blocker).** Not yet applied; the l06 author applies it in Revision 2 before voicing.
- **Extend ruling 92 to l07?** Ruling 92 names l06 only. l07's A1 uses "mass m (kg), C = 2.5m". I recommend w there too, so the strand never reuses m for anything but the gradient (the designer's own alternative was "w for weight in both").
- **l04's title.** Ruling 92 accepted the 56-character title; l04 still carries the 81-character one, and the "Next" and "Builds on" lines in l03 and l05 quote it. Update all three in Revision 2.
- **e01's "provisional" join.** Ruling 92 confirms it and l07's frame matches e01 scene 1; the e01 author can drop "provisional" from its Boundary and open decision 1.

## Designers' open decisions, as they bear on learning

- **l01 decision 2 (two anchors in the hook):** keep the pancake sentences; they answer f08's question in under 15 s.
- **l02 decision 2 (app scene length):** keep as written; one point on and one off the line is enough.
- **l03 decision 2, l05 decision 1 ("our equations videos", "our spreadsheet video"):** keep, and quote the f02 and f08 titles in the grey chips once fixed.
- **l06 decision 2 (the "hours and pay" sort card):** keep; it is true, silent and sets up e01.
- **l07 decision 2 ("Next" line):** quote e01's title, "Wages, Salaries and Pay Periods".
- **Prices (ruling 5 and 92):** every invented price is tagged "example" except l06's orchard sign and gym card (optional fix); petrol at $2.25 is ruling 47's dated example.

## Joins

- **f08 to l01:** l01 opens on f08's fixed final frame and answers its "Which two?" on the pancake line.
- **l01 to l02, l02 to l03, l03 to l04, l04 to l05, l05 to l06, l06 to l07:** each final frame is the next design's stated opening frame, each opening line picks up the previous question, and no handoff frame states the answer it hands on (the empty "C = ?", the empty model slots, the impossible "−12 L?", the empty sheet, "0 kg → $0?", "one more point?").
- **l07 to e01:** matches e01 scene 1 as written; confirmed by ruling 92.
- **Plates one video early (ruling 17):** the hire boat before the l03 build and the ice skates before the l04 build, as the designs say.

## Practice and feedback

All 14 question cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing (graphs in l01 A1, l02 A2 and l07 A2 are the item's normal "graph given" form with unlabelled points or values). Several ask for three or four actions, including drawing, more than 10 s allows; "Pause here to answer." covers that. All 14 feedbacks give the answer, the key reason, short working and one crossed classic slip, between about 21 s and 30 s. Five sit at about 29 to 30 s (l03 both, l04 both, l07 A1); l03 feedback 1 has an easy 2 s trim. Every anchor is everyday and non-science (pancake mix, an aquarium, a car trip, a taxi, a hire bike, coffee pods, ski hire, a garden tank, a hire boat, savings, jet skis, a pool, a skating party, trailer hire, apples, cherries, petrol, travel money, frozen yoghurt, potatoes, lollies), with no gambling and no people drawn.

## Memory aids

Each card is introduced after its explanation and each design checks its limits: "c is where you start. m is how you move." (l01), "Plot c, step m, rule the line." (l02), "Intercept: where it starts. Gradient: the change per one." (l03), "Between the data: fairly safe. Beyond it: take care." (l04), "Zero row: the start. Each step: the rate." (l05), "Direct variation: double one, the other doubles." (l06, matching Year 12 a12), "Origin + one point = the whole line." (l07). They build on each other across the strand, which is a strength.

## Lengths

All seven are under 570 s by the designer's estimate (465 s to 492 s), 78 to 105 s under the cap. The fixes add about 0 to 11 s each (l04 the most: about 11 s, or 18 s with its optional sentence). My script count reproduces the designer's character totals to within 12 characters each.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) was found in any of the seven designs (scripted check).

No speech, design edits, builds or commits were made.
